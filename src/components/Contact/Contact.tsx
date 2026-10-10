import { useState } from "react";
import { motion } from "framer-motion";
import { solutions, type Solution } from "../../data/solutions";
import "./Contact.css";

interface ContactProps {
  /** Tipo de proyecto preseleccionado (páginas de cada solución) */
  defaultProjectType?: Solution["id"];
}

const API_URL = import.meta.env.VITE_API_URL ?? "";

type Status = { type: "success" | "error"; message: string } | null;

const Contact: React.FC<ContactProps> = ({ defaultProjectType = "" }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState<string>(defaultProjectType);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          projectType,
          message,
          website,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.error || "No pudimos enviar tu mensaje. Inténtalo de nuevo.",
        );
      }

      setStatus({
        type: "success",
        message: "¡Mensaje enviado! Nuestro equipo te contactará pronto.",
      });

      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setProjectType(defaultProjectType);
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof TypeError
            ? "No hay conexión con el servidor. Inténtalo más tarde."
            : (error as Error).message,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-info"
        >
          <span className="contact-tag">
            <span className="contact-tag-dot"></span>
            CONTACTO
          </span>

          <h2>
            Conversemos sobre tu
            <span> próximo proyecto</span>
          </h2>

          <p>
            Creamos soluciones tecnológicas que impulsan la transformación
            digital de las organizaciones.
          </p>

          <div className="contact-solutions">
            <div>✓ Riesgo Logístico</div>
            <div>✓ TFirma</div>
            <div>✓ Conducir</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-form-card"
        >
          <h3>Solicita una asesoría</h3>

          <p>Nuestro equipo se pondrá en contacto contigo.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Nombre completo"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Empresa"
              required
              maxLength={100}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              required
              maxLength={150}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Teléfono"
              required
              maxLength={30}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              required
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="">Tipo de proyecto</option>

              {solutions.map((solution) => (
                <option key={solution.id} value={solution.id}>
                  {solution.name}
                </option>
              ))}

              <option value="otro">Otro</option>
            </select>

            <textarea
              rows={5}
              placeholder="Cuéntanos sobre tu necesidad..."
              required
              maxLength={3000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <input
              type="text"
              name="website"
              className="contact-honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            {status && (
              <p
                className={`contact-status ${status.type}`}
                role={status.type === "error" ? "alert" : "status"}
              >
                {status.message}
              </p>
            )}

            <button type="submit" disabled={sending}>
              {sending ? "Enviando..." : "Solicitar Asesoría"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
