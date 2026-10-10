import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

const template = fs.readFileSync(path.join(__dirname, "contact.html"), "utf8");
const logoPath = path.join(__dirname, "../public/tf.png");

// Detrás de nginx: confía en X-Forwarded-For solo si viene del proxy local
app.set("trust proxy", process.env.TRUST_PROXY || "loopback");

// Orígenes permitidos separados por coma. Vacío = mismo dominio (sin CORS)
const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : false }));
app.use(express.json({ limit: "20kb" }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  // true para el puerto 465, false para 587 (STARTTLS)
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const projectTypeLabels = {
  "riesgo-logistico": "Riesgo Logístico",
  tfirma: "TFirma",
  conducir: "Conducir",
  software: "Desarrollo a Medida",
  otro: "Otro",
};

const maxLengths = {
  name: 100,
  company: 100,
  email: 150,
  phone: 30,
  message: 3000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

// Límite simple en memoria: N envíos por IP por ventana de tiempo
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestsByIp = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) || []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    requestsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestsByIp.set(ip, recent);
  return false;
};

setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of requestsByIp) {
    if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
      requestsByIp.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS).unref();

app.post("/api/send-email", async (req, res) => {
  const body = req.body || {};

  // Campo trampa: si viene lleno es un bot. Respondemos OK sin enviar nada.
  if (body.website) {
    return res.status(200).json({ message: "Correo enviado con éxito." });
  }

  const fields = {};
  for (const key of [...Object.keys(maxLengths), "projectType"]) {
    fields[key] = typeof body[key] === "string" ? body[key].trim() : "";
  }

  if (Object.values(fields).some((value) => !value)) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios.",
    });
  }

  for (const [key, max] of Object.entries(maxLengths)) {
    if (fields[key].length > max) {
      return res.status(400).json({
        error: "Uno de los campos supera la longitud permitida.",
      });
    }
  }

  if (!emailPattern.test(fields.email)) {
    return res.status(400).json({
      error: "El correo electrónico no es válido.",
    });
  }

  if (!projectTypeLabels[fields.projectType]) {
    return res.status(400).json({
      error: "El tipo de proyecto no es válido.",
    });
  }

  if (isRateLimited(req.ip)) {
    return res.status(429).json({
      error: "Has enviado varios mensajes. Inténtalo de nuevo más tarde.",
    });
  }

  const values = {
    NAME: fields.name,
    COMPANY: fields.company,
    EMAIL: fields.email,
    PHONE: fields.phone,
    PROJECT_TYPE: projectTypeLabels[fields.projectType],
    MESSAGE: fields.message,
  };

  // Se usa una función como reemplazo para que "$&" y similares no se interpreten
  const html = template.replace(/{{(\w+)}}/g, (match, key) =>
    key in values ? escapeHtml(values[key]) : match,
  );

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      replyTo: fields.email,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      subject: `Nuevo mensaje de ${fields.name}`,
      html,
      attachments: fs.existsSync(logoPath)
        ? [{ filename: "tf.png", path: logoPath, cid: "logoTF" }]
        : [],
    });

    res.status(200).json({
      message: "Correo enviado con éxito.",
    });
  } catch (error) {
    console.error("Error enviando el correo:", error);

    res.status(500).json({
      error: "Error interno del servidor al enviar el correo.",
    });
  }
});

app.listen(PORT, () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.warn("Faltan variables SMTP en server/.env (ver .env.example)");
  }
  console.log(`Servidor de correo corriendo en http://localhost:${PORT}`);
});
