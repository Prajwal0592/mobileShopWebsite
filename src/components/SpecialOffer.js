import React from "react";
import { motion } from "framer-motion";

function SpecialOffer() {
  return (
    <motion.div
      className="special-offer"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
    >
      <span role="img" aria-label="celebration" className="special-offer-emoji">🎉</span>
      <span className="special-offer-text">
        15% OFF for Students, NHS & Civil Servants (with valid I.D)
      </span>
    </motion.div>
  );
}

export default SpecialOffer;
