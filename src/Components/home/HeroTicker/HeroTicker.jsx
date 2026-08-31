import React from "react";
import { TbStar } from "react-icons/tb";
import "./HeroTicker.css";

function HeroTicker() {

  const items = [
    "Stainless Steel Tubes",
    "Seamless Pipes",
    "Pipe Fittings",
    "Flanges",
    "Round Bars",
    "Sheets & Plates",
    "ISO 9001:2015 Certified",
    "Export Worldwide",
    "Quality Assured",
    "Fast Delivery"
  ];

  return (
    <section className="hero-ticker">

      <div className="ticker-track">

        {[...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <div className="ticker-item">
              <TbStar className="ticker-icon" />
              <span>{item}</span>
            </div>
            <span className="ticker-divider"></span>
          </React.Fragment>
        ))}

      </div>

    </section>
  );
}

export default HeroTicker;