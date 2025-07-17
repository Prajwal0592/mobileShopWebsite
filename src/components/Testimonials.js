import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Outstanding service—fixed my iPhone screen in under an hour!",
    name: "Emma W.",
  },
  {
    quote: "Great advice and very professional. Highly recommended.",
    name: "Ahmed M.",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonials.map((t, idx) => (
          <motion.blockquote
            key={t.name}
            className="testimonial"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 * idx }}
          >
            <p>{`"${t.quote}"`}</p>
            <footer>- {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
