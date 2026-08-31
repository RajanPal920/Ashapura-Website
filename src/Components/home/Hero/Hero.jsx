import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "../../../assets/images/hero-1.png";
import hero2 from "../../../assets/images/hero-2.webp";
import hero3 from "../../../assets/images/hero-3.webp";

// Product Images
import p1 from "../../../products-image/ss-copper-coils.webp";
import p2 from "../../../products-image/ss-duplex-super-duplex-roundbars.webp";
import p3 from "../../../products-image/ss-titanium-wires.webp";
import p4 from "../../../products-image/ss-incoloy-flanges.webp";
import p5 from "../../../products-image/ss-carbon-alloy-patti.webp";
import p6 from "../../../products-image/ss-nickel-strips.webp";
import p7 from "../../../products-image/ss-duplex-perforated-sheets.webp";
import p8 from "../../../products-image/ss-hexagonal-wiremesh.webp";
import p9 from "../../../products-image/ss-smo-pipes.webp";
import p10 from "../../../products-image/ss-monel-400-sheets.webp";
import p11 from "../../../products-image/ss-inconel-buttweld.webp";
import p12 from "../../../products-image/ss-monel-fasteners.webp";
import p13 from "../../../products-image/ss-carbon-rings.webp";
import p14 from "../../../products-image/ss-duplex-valves.webp";
import p15 from "../../../products-image/ss-braided-hose.webp";
import p16 from "../../../products-image/ss-hardox600.webp";
import p17 from "../../../products-image/ss-copper-nickel-plates.webp";
import p18 from "../../../products-image/ss-duplex-super-duplex-tubes.webp";
import p19 from "../../../products-image/ss-tantalum-forged.webp";
import p20 from "../../../products-image/ss-machined-forged-circles.webp";
import p21 from "../../../products-image/ss-tc-clamps.webp";
import p22 from "../../../products-image/ss-pressure-reducing-valves.webp";
import p23 from "../../../products-image/ss-tc-tri-color.webp";
import p24 from "../../../products-image/ss-titanium-plates.webp";

import "./Hero.css";

const slides = [
  {
    image: hero1,
    tag: "Manufacturer | Stockist | Exporters",
    title: "Stainless Steel Round Bar, Sheets, Tubes, Pipes & Flanges",
    description:
      "Complete range of high-quality stainless steel and industrial metal products.",
    products: [p1, p2, p3, p4, p5, p6, p7, p8]
  },
  {
    image: hero2,
    tag: "Extensive Product Range",
    title: "Duplex, Super Duplex, Monel & Hastelloy",
    description:
      "Premium fastening, forged fittings, and piping solutions for demanding applications.",
    products: [p9, p10, p11, p12, p13, p14, p15, p16]
  },
  {
    image: hero3,
    tag: "ISO 9001:2015 Certified",
    title: "Carbon Steel, Alloy Steel & Nickel Alloys",
    description:
      "Supplying various grades including 304, 316L, 310, and Titanium products.",
    products: [p17, p18, p19, p20, p21, p22, p23, p24]
  }
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay" />

      {slides.map((slide, index) => {
        let statusClass = "";
        if (index === current) statusClass = "active";
        else if (index === (current === 0 ? slides.length - 1 : current - 1)) statusClass = "prev";

        return (
          <div
            key={index}
            className={`hero-slide ${statusClass}`}
          >
            <div 
              className="hero-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        );
      })}

      <div className="hero-container" style={{ height: '100%', position: 'relative', zIndex: 5 }}>
        
        {/* Left Side: Text Content */}
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="hero-text-card"
            >
              <span className="hero-tag">
                {slides[current].tag}
              </span>
              <h1>{slides[current].title}</h1>
              
              <p>{slides[current].description}</p>

              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">
                  Request Quote
                </Link>

                <a href="#products" className="btn-outline">
                  Explore Products
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Animated Products */}
        <div className="hero-products-overlay">
          {slides[current].products.map((prodImg, i) => (
            <div 
              key={`${current}-${i}`} 
              className="hero-product-octagon"
              style={{ animationDelay: `${0.1 + (i * 0.1)}s` }}
            >
              <div 
                className="octagon-inner" 
                style={{ backgroundImage: `url(${prodImg})` }} 
              />
            </div>
          ))}
        </div>

      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={
              current === index ? "active-dot" : ""
            }
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;