import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

import './Services.css'


const services = [
  { id: 1, title: "Desarrollo Web", icon: <FaCode size={40} className="text-blue-500" /> },
  { id: 2, title: "Diseño Gráfico", icon: <FaPaintBrush size={40} className="text-green-500" /> },
  { id: 3, title: "Apps Móviles", icon: <FaMobileAlt size={40} className="text-red-500" /> },
];

interface ServiceProps {
  onNavigate: (section: string) => void;
}


  const Services: React.FC<ServiceProps> = ({}) => {
    return (
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="flex justify-center gap-12">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              {service.icon}
              <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Services

