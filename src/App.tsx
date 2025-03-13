
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { useState, useEffect } from "react";
import './App.css'
// import About from './components/About/About';
import Services from './components/Services/Services';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("#home");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event:any) => {
      console.log(event);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#services"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      currentSection
      for (const section of sections) {
        const element = document.getElementById(section.substring(1));
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= scrollPosition && bottom >= scrollPosition) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="app">

     <Header/>

      <div className="mouse-follower">
        <div
          className="circle"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      </div>


      <div className="sections">
        <section id="home" className="min-h-screen">
          <Home onNavigate={setCurrentSection} />
        </section>

        <section id="services" className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/fondo3.jpeg')" }}>
          <Services onNavigate={setCurrentSection} />
        </section>


        <section id="contact" className="min-h-screen">
          <Contact onNavigate={setCurrentSection} />
        </section>

      </div>

     <Footer />

    </div >
  );
};

export default App
