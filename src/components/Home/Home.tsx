import { motion } from "framer-motion";
import React from "react";
// import { useNavigate } from "react-router-dom";
import './Home.css'

interface HomeProps {
  onNavigate: (section: string) => void;
}


const Home: React.FC<HomeProps> = ({ onNavigate }) => {


  return (
    <div className="relative h-screen w-screen">
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-screen h-full object-cover"
        src="../video.mp4"
        autoPlay
        loop
        muted
      />


      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex flex-col">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-1 items-center justify-center p-10"
        >
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold opacity-100">Tecnología Funcional</h1>
            <p className="text-lg mt-4 opacity-100">
              Somos una empresa a la vanguardia en soluciones de desarrollo de software a medida.
            </p>
          </div>
        </motion.div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => onNavigate("#services")}
      >
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

    </div>
  )
}

export default Home