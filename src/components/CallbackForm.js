import React from "react";
import { motion } from "framer-motion";

function CallbackForm() {
  return (
    <motion.form
      name="callback"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="callback-form"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Netlify Hidden Input */}
      <input type="hidden" name="form-name" value="callback" />
      {/* Honeypot Field (anti-spam) */}
      <p style={{ display: "none" }}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input name="name" type="text" placeholder="Your Name" required />
      <input name="email" type="email" placeholder="Email Address" required />
      <input name="phone" type="tel" placeholder="Phone Number" required />
      <textarea name="message" placeholder="How can we help you?" required />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        className="cta-button"
      >
        Request Callback
      </motion.button>
    </motion.form>
  );
}

export default CallbackForm;
