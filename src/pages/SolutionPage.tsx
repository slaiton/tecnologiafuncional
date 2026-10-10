import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Contact from "../components/Contact/Contact";
import { solutions, type Solution } from "../data/solutions";
import { scrollToId } from "../utils/scroll";
import "./SolutionPage.css";

interface SolutionPageProps {
  solution: Solution;
}

const SolutionPage: React.FC<SolutionPageProps> = ({ solution }) => {
  const others = solutions.filter((item) => item.id !== solution.id);
  const Icon = solution.icon;

  return (
    <article className="solution-page">
      {/* =========================
          HERO
      ========================= */}
      <section className="solution-hero">
        <div className="solution-glow solution-glow-one"></div>
        <div className="solution-glow solution-glow-two"></div>

        <div className="solution-container">
          <nav className="solution-breadcrumb" aria-label="Ruta de navegación">
            <ol>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/#services">Soluciones</Link>
              </li>
              <li aria-current="page">{solution.name}</li>
            </ol>
          </nav>

          <div className="solution-hero-icon">
            <Icon />
          </div>

          <span className="solution-tag">
            <span className="solution-tag-dot"></span>
            {solution.category}
          </span>

          <h1>{solution.headline}</h1>

          <p className="solution-lead">{solution.lead}</p>

          <div className="solution-actions">
            <a
              href="#contact"
              className="solution-btn solution-btn-primary"
              onClick={(event) => {
                if (scrollToId("contact")) event.preventDefault();
              }}
            >
              Solicitar asesoría
              <FaArrowRight />
            </a>

            <Link to="/#services" className="solution-btn solution-btn-secondary">
              Ver todas las soluciones
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          PROBLEMA
      ========================= */}
      <section className="solution-section">
        <div className="solution-container solution-narrow">
          <h2>{solution.problem.title}</h2>
          <p>{solution.problem.text}</p>
        </div>
      </section>

      {/* =========================
          CARACTERÍSTICAS
      ========================= */}
      <section className="solution-section">
        <div className="solution-container">
          <h2>¿Qué ofrece {solution.name}?</h2>

          <ul className="solution-features">
            {solution.features.map((feature) => (
              <li key={feature.title} className="solution-feature">
                <span className="solution-feature-icon">
                  <FaCheck />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================
          PÚBLICO
      ========================= */}
      <section className="solution-section">
        <div className="solution-container solution-narrow">
          <h2>¿Para quién es?</h2>

          <ul className="solution-audience">
            {solution.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================
          PREGUNTAS FRECUENTES
      ========================= */}
      <section className="solution-section">
        <div className="solution-container solution-narrow">
          <h2>Preguntas frecuentes</h2>

          <div className="solution-faqs">
            {solution.faqs.map((faq) => (
              <details key={faq.question} className="solution-faq">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          OTRAS SOLUCIONES
      ========================= */}
      <section className="solution-section">
        <div className="solution-container">
          <h2>Otras soluciones</h2>

          <ul className="solution-others">
            {others.map((item) => {
              const OtherIcon = item.icon;
              return (
                <li key={item.id}>
                  <Link to={item.path} className="solution-other">
                    <span className="solution-other-icon">
                      <OtherIcon />
                    </span>
                    <span>
                      <strong>{item.name}</strong>
                      <small>{item.category}</small>
                    </span>
                    <FaArrowRight className="solution-other-arrow" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Contact defaultProjectType={solution.id} />
    </article>
  );
};

export default SolutionPage;
