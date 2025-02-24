
import Home from './components/Home/Home';
import { useState } from "react";
import './App.css'
import About from './components/About/About';
import Services from './components/Services/Services';

const App: React.FC = () => {
  // const [count, setCount] = useState(0)
  
  const [currentSection, setCurrentSection] = useState<string>("#home");

  const handleNavigate = (section: string) => { 
    setCurrentSection(section);
  };


  return (
    <div className="app">
    {/* <Header onNavigate={handleNavigate} /> */}
    <div className="sections">
      {currentSection === "#home" && <Home onNavigate={handleNavigate} />}
      {currentSection === "#about" && <About onNavigate={handleNavigate} />}
      {currentSection === "#services" && <Services onNavigate={handleNavigate} />}
    </div>
    </div>
  )
}

export default App
