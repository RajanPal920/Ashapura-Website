import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import PharmaFittingsBanner from "../../products-image/hero/pharma-fittings.jpg";

import TCClampsFerrules from "../../products-image/ss-tc-clamps.webp";
import SanitaryTubing from "../../products-image/ss-asme-sanitary-tubing.webp";
import ButterflyValves from "../../products-image/ss-pneumatic-butterfly-valves.webp";
import DiaphragmValves from "../../products-image/ss-diaphragm-valves.webp";
import SSFilterHousing from "../../products-image/ss-filter-housings.webp";
import GMPFloorDrainTraps from "../../products-image/ss-gmp-floor-drain-traps.webp";
import SMSUnion from "../../products-image/ss-sms-din-union-fittings.webp";
import EP from "../../products-image/ss-electropolished-ep-pipes.webp";



  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "TC(Tri-Clover) Clamps and Ferrules",
    image: TCClampsFerrules,
    material: "TC(Tri-Clover) Clamps and Ferrules",
    type: "TC(Tri-Clover) Clamps and Ferrules",
    grades:
      "Quick-connect hygienic fittings for sterile pipeline systems",
  },
  {
    id: 2,
    name: "ASME BPE Sanitary Tubing",
    image: SanitaryTubing,
    material: "ASME BPE Sanitary Tubing",
    type: "ASME BPE Sanitary Tubing",
    grades: "High purity tubing designed for pharmaceutical-grade applications",
  },
  {
    id:3,
    name:"Pneumatic Butterfly Valves",
    image: ButterflyValves,
    material: "Pneumatic Butterfly Valves",
    type: "Pneumatic Butterfly Valves",
    grades: "Automated flow control valves for cleanroom operations"
  },
  {
    id:4,
    name:"Diaphragm Valves (Pharma Grades)",
    image: DiaphragmValves,
    material: "Diaphragm Valves (Pharma Grades)",
    type: "Diaphragm Valves (Pharma Grades)",
    grades: "Sterile valves ensuring zero contamination in fluid handling",
  },
  {
    id:5,
    name:"SS Filter Housings",
    image: SSFilterHousing,
    material: "SS Filter Housings",
    type: "SS Filter Housings",
    grades: "Efficient filtration units for removing contaminants in pipelines",
  },
  {
    id:6,
    name:"GMP Floor Drain Traps",
    image: GMPFloorDrainTraps,
    material: "GMP Floor Drain Traps",
    type: "GMP Floor Drain Traps",
    grades: "Hygienic drainage solutions for pharmaceutical facilities",
  },
  {
    id:7,
    name:"SMS/DIN Union Fittings",
    image: SMSUnion,
    material: "SMS/DIN Union Fittings",
    type: "SMS/DIN Union Fittings",
    grades: "Stable support for piping systems",
  },
  {
    id:8,
    name:"Electropolished (EP) Pipes",
    image: EP,
    material: "Electropolished (EP) Pipes",
    type: "Electropolished (EP) Pipes",
    grades: "Ultra-smooth surface pipes ensuring high purity flow systems",
  }

];

export default function PharmaFittings() {
  return (
    <>
      <Helmet>
        <title>Pharma Fittings</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Pharmaceutical Fittings"
        image={PharmaFittingsBanner}
      />

      <section className="products-section">
        <div className="container">

          {products.map((item) => (
            <div className="product-block" key={item.id}>

              <div className="product-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="product-details">

                <h2>{item.name}</h2>

                <table className="product-table">

                  <thead>
                    <tr>
                      <th>Material Group</th>
                      <th>Available Technical Grades / Standards</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{item.material}</td>
                      <td>{item.grades}</td>
                    </tr>
                  </tbody>

                </table>

                <hr />

                <div className="product-footer">

                  <div className="quote-text">
                    REQUEST QUOTE FOR
                    <br />
                    <strong>{item.type}</strong>
                  </div>

                  <Link
                    to="/contact"
                    className="pricing-btn"
                  >
                    Get Instant Pricing →
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  );
}