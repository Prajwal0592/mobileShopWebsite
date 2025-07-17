import React from "react";
import { motion } from "framer-motion";
import '../App.css';
import logo from "../assets/logo.png";
import heroBg from "../assets/hero-bg.jpg";

const heroBgStyle = {
  backgroundImage: `url(${heroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "75vh",
};

function Hero() {
  return (
    <section style={heroBgStyle} className="hero-section">
      <div className="hero-overlay">
        <motion.img
          src={logo}
          alt="Mac Tech Logo"
          className="hero-logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="hero-title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Mac Tech Phones & Vapes
        </motion.h1>
        <motion.p
          className="hero-tagline"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Expert Repairs. Premium Service. Newcastle's Trusted Tech Hub.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
