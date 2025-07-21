import React, { useState, useEffect } from "react";
import r1 from "../assets/r1.jpeg";
import r2 from "../assets/r2.jpeg";
import r3 from "../assets/r3.jpeg";
import r4 from "../assets/r4.jpeg";
import r5 from "../assets/r5.jpeg";
import r6 from "../assets/r6.jpeg";
import r7 from "../assets/r7.jpeg";
import r8 from "../assets/r8.jpeg";
import r9 from "../assets/r9.jpeg";
import r10 from "../assets/r10.jpeg";
import r11 from "../assets/r11.jpeg";
import r12 from "../assets/r12.jpeg";
import r13 from "../assets/r13.jpeg";
import r14 from "../assets/r14.jpeg";
import r15 from "../assets/r15.jpeg";
const images = [
  r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15
];

function ServicesBackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="services-slideshow-bg"
      style={{
        backgroundImage: `url(${images[index]})`
      }}
    />
  );
}

export default ServicesBackgroundSlideshow;
