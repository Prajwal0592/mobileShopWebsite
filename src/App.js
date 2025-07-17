import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <SpecialOffer />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
