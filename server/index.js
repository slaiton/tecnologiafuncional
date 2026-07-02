import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

const templatePath = path.join(__dirname, 'contact.html');

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Todos los campos son obligatorios.',
    });
  }

  try {
    let htmlTemplate = fs.readFileSync(templatePath, 'utf8');

    htmlTemplate = htmlTemplate
      .replaceAll('{{NAME}}', name)
      .replaceAll('{{EMAIL}}', email)
      .replaceAll('{{MESSAGE}}', message);

    const mailOptions = {
      from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      html: htmlTemplate,
      attachments: [
      {
        filename: 'tf.png',
        path: path.join(__dirname, '../public/tf.png'),
        cid: 'logoTF'
      }
    ]
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: 'Correo enviado con éxito.',
    });

  } catch (error) {
    console.error('Error enviando el correo:', error);

    res.status(500).json({
      error: 'Error interno del servidor al enviar el correo.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor de correo corriendo en http://localhost:${PORT}`);
});