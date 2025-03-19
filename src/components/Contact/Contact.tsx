import { useState } from "react";
import { motion } from "framer-motion";
// import axios from "axios";

import './Contact.css'
// import { div } from "framer-motion/client";

interface ContactProps {
  onNavigate: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ }) => {
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFocus = (field: string) => {
    setFocus((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocus((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <div className="min-h-screen  bg-cover bg-center" style={{ backgroundImage: "url('/video2.gif')" }}>
    
    <div className="w-full h-screen flex justify-center items-center bg-black-80">

        <div className="w-80 left-10 max-w-lg flex items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-96 text-white"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Contáctanos</h2>

            <form className="flex flex-col gap-6">
              {/* Nombre */}
              <div className="relative">
                <label
                  className={`absolute left-3 text-gray-400 text-sm transition-all ${focus.name ? "-top-4 text-xs text-blue-400" : "top-3 opacity-0"
                    }`}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 opacity-80 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nombre"
                  onFocus={() => handleFocus("name")}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  className={`absolute left-3 text-gray-400 text-sm transition-all ${focus.email ? "-top-4 text-xs text-blue-400" : "top-3 opacity-0"
                    }`}
                >
                  Correo
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700 bg-opacity-60 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Correo"
                  onFocus={() => handleFocus("email")}
                  onBlur={(e) => handleBlur("email", e.target.value)}
                />
              </div>

              {/* Mensaje */}
              <div className="relative">
                <label
                  className={`absolute left-3 text-gray-400 text-sm transition-all ${focus.message ? "-top-4 text-xs text-blue-400" : "top-3 opacity-0"
                    }`}
                >
                  Mensaje
                </label>
                <textarea
                  className="w-full bg-gray-700 bg-opacity-60 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="Mensaje"
                  rows={4}
                  onFocus={() => handleFocus("message")}
                  onBlur={(e) => handleBlur("message", e.target.value)}
                ></textarea>
              </div>

              <button className="w-full text-black bg-blue-500 hover:bg-blue-600 transition-colors p-3 rounded-md font-semibold">
                Enviar
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
