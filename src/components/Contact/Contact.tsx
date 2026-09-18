import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

interface ContactProps {
  onNavigate: (section: string) => void;
}

const Contact: React.FC<ContactProps> = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/send-email", {
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
      }),
    });

    alert("¡Correo enviado correctamente!");

    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setProjectType("");
    setMessage("");
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Empresa"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="">Tipo de proyecto</option>

              <option value="riesgo-logistico">Riesgo Logístico</option>

              <option value="tfirma">TFirma</option>

              <option value="conducir">Conducir</option>

              <option value="otro">Otro</option>
            </select>

            <textarea
              rows={5}
              placeholder="Cuéntanos sobre tu necesidad..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Solicitar Asesoría</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
