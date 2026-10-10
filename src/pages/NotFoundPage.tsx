import { Link } from "react-router-dom";
import "./SolutionPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <section className="solution-page solution-hero" style={{ minHeight: "70vh" }}>
      <div className="solution-container solution-narrow">
        <span className="solution-tag">
          <span className="solution-tag-dot"></span>
          ERROR 404
        </span>

        <h1>Esta página no existe</h1>

        <p className="solution-lead">
          Es posible que el enlace esté mal escrito o que la página haya sido
          movida.
        </p>

        <div className="solution-actions">
          <Link to="/" className="solution-btn solution-btn-primary">
            Volver al inicio
          </Link>

          <Link to="/#services" className="solution-btn solution-btn-secondary">
            Ver soluciones
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
