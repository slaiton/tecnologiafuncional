import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb , FaRocket , FaMedal  } from "react-icons/fa";

import './Services.css'
import { MdSpeed } from "react-icons/md";


const services = [
  { id: 1, title: "Innovación", icon: <FaLightbulb size={40} className="text-blue-500" />, description : "Creamos software y aplicaciones innovadoras y eficientes." },
  { id: 2, title: "Transformación", icon: <FaRocket size={40} className="text-green-500" />, description : "Transformamos ideas en productos digitales de alto rendimiento." },
  { id: 3, title: "Excelencia", icon: <FaMedal size={40} className="text-red-500" />, description : "Enfoque en calidad y satisfacción del cliente." },
  { id: 3, title: "Eficiencia", icon: <MdSpeed  size={40} className="text-red-500" />, description : "Optimizamos y agilizamos todos tus procesos." },
];

interface ServiceProps {
  onNavigate: (section: string) => void;
}

const Services: React.FC<ServiceProps> = ({}) => {
  return (
    <section id="services-section" className="flex flex-col md:flex-row justify-center items-center mx-8 py-12 gap-16"
    >
      {/* Columna izquierda con título y descripción */}
      <motion.div 
        initial={{ opacity: 0, y: 150 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-2/5 text-center flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-4">¿ Por que elergirnos ?</h2>
        <p className="text-lg text-gray-600 max-w-md">
          Somos un equipo altamente calificado, con metodologías
          ágiles y estructuradas.
        </p>
      </motion.div>
      
      {/* Columna derecha con los servicios */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-12"
      >
        {services.map((service, index) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
          >
            {service.icon}
            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
            <p className="text-sm text-gray-500 mt-2 text-center max-w-xs">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};



export default Services

