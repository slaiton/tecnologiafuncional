import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import { scrollToId } from "../utils/scroll";

const HomePage: React.FC = () => {
  return (
    <>
      <section id="home">
        <Home onNavigate={scrollToId} />
      </section>

      <About />

      <Services />

      <Contact />
    </>
  );
};

export default HomePage;
