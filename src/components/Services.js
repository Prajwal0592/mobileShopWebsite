import React from "react";
import { motion } from "framer-motion";
import phone from "../assets/service-phone.png";
import laptop from "../assets/service-laptop.png";
import tablet from "../assets/service-tablet.png";
import virus from "../assets/service-virus.png";
import print from "../assets/service-print.png";
import ServicesBackgroundSlideshow from "./ServicesBackgroundSlideshow";

const services = [
  {
    title: "Mobile Phone Repairs",
    desc: "Screen, battery, water-damage & more.",
    img: phone,
  },
  {
    title: "Macbook & iMac Repairs",
    desc: "Upgrades, logic board, SSD, RAM.",
    img: laptop,
  },
  {
    title: "Computer, iPad & Tablet Repairs",
    desc: "Hardware, software, data recovery.",
    img: tablet,
  },
  {
    title: "Virus & Spyware Removals",
    desc: "Full system checks and cleans.",
    img: virus,
  },
  {
    title: "Scan & Print Services Available",
    desc: "Fast, high-quality, affordable.",
    img: print,
  },
];

function Services() {
  return (
    <section className="section services-section">
      <div className="services-list-bg-wrapper">
        <ServicesBackgroundSlideshow />
        <div className="services-list-content">
          <h2 className="section-title">Our Services</h2>
          <div className="services-list">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.title}
                className="service-card"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.22)"
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                <img src={svc.img} alt={svc.title} className="service-icon" />
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="services-guarantee">
           <span className="guarantee-badge-yellow">Best Quality Guarantee:</span> Every repair is backed by our commitment to excellence.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Services;
