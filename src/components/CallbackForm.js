import React, { useState } from "react";
import { motion } from "framer-motion";

function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  // Encodes the form data for Netlify
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      "form-name": "callback",
      "name": form.name.value,
      "email": form.email.value,
      "phone": form.phone.value,
      "message": form.message.value,
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("There was an error. Please try again!"));
  };

  if (submitted) {
    return (
      <motion.div
        className="form-success"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        tabIndex="0"
        aria-live="polite"
      >
        <h3>Thank you!</h3>
        <p>We’ve received your request and will contact you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      name="callback"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="callback-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      autoComplete="off"
    >
      <input type="hidden" name="form-name" value="callback" />
      {/* Honeypot anti-spam field (invisible to humans) */}
      <p style={{ display: "none" }}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input name="name" type="text" placeholder="Your Name" required autoComplete="off"/>
      <input name="email" type="email" placeholder="Email Address" required autoComplete="off"/>
      <input name="phone" type="tel" placeholder="Phone Number" required autoComplete="off"/>
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
