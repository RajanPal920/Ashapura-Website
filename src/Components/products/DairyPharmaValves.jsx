import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import DairyPharmaValvesBanner from "../../products-image/hero/dairy-pharma.jpg";

import Butterflysanitary from "../../products-image/ss-butterfly-sanitary-valves.webp";
import DiaphragmValves from "../../products-image/ss-diaphragm-sanitary-valves.webp";
import BallValvessanitary from "../../products-image/ss-ball-sanitary-valves.webp";
import NonReturnValves from "../../products-image/ss-non-return-valves.webp";
import PressureReducingValves from "../../products-image/ss-pressure-reducing-valves.webp";
import DiaphragmPharmaValves from "../../products-image/ss-diaphragm-pharma-valves.webp";
import Butterflypharma from "../../products-image/ss-butterfly-pharma-valves.webp";
import BallValves from "../../products-image/ss-ball-pharma-valves.webp";
import SamplingValves from "../../products-image/ss-sampling-valves.webp";
import DeadLegValves from "../../products-image/ss-dead-leg-valves.webp";


  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "SS Butterfly Valves",
    image: Butterflysanitary,
    material: "SS Butterfly Valves",
    type: "SS Butterfly Valves",
    grades:
      "Widely used for flow regulation in dairy pipelines",
  },
  {
    id: 2,
    name: "SS Diaphragm Valves",
    image: DiaphragmValves,
    material: `SS Diaphragm Valves`,
    type: "SS Diaphragm Valves",
    grades: "Ideal for hygienic shut-off applications",
  },
  {
    id:3,
    name:"SS Ball Valves",
    image: BallValvessanitary,
    material: "SS Ball Valves",
    type: "SS Ball Valves",
    grades: "Precision flow control with leak-proof sealing"
  },
  {
    id:4,
    name:"SS Non Return Valves",
    image: NonReturnValves,
    material: "SS Non Return Valves",
    type: "SS Non Return Valves",
    grades: "Prevents backflow and ensures one-way flow",
  },
  {
    id:5,
    name:"SS Pressure Reducing Valves",
    image: PressureReducingValves,
    material: "SS Pressure Reducing Valves",
    type: "SS Pressure Reducing Valves",
    grades: "Maintains consistent pressure in pipeline systems",
  },
  {
    id:6,
    name:"SS Diaphragm Valve (Pharma Grade)",
    image: DiaphragmPharmaValves,
    material: "SS Diaphragm Valve (Pharma Grade)",
    type: "SS Diaphragm Valve (Pharma Grade)",
    grades: "Designed for sterile and contamination-free operations",
  },
  {
    id:7,
    name:"SS Butterfly Valves (Sanitary Pharma)",
    image: Butterflypharma,
    material: "SS Butterfly Valves (Sanitary Pharma)",
    type: "SS Butterfly Valves (Sanitary Pharma)",
    grades: "Directional flow change with minimal resistance",
  },
  {
    id:8,
    name:"SS Ball Valves (High Purity)",
    image: BallValves,
    material: "SS Ball Valves (High Purity)",
    type: "SS Ball Valves (High Purity)",
    grades: "High precision control for cleanroom environments",
  },
  {
    id:9,
    name:"SS Sampling Valves",
    image: SamplingValves,
    material: "SS Sampling Valves",
    type: "SS Sampling Valves",
    grades: "Used for extracting samples without contamination",
  },
  {
    id:10,
    name:"SS Zero Dead Leg Valves",
    image: DeadLegValves,
    material: "SS Zero Dead Leg Valves",
    type: "SS Zero Dead Leg Valves",
    grades: "Eliminates dead zones ensuring zero bacterial growth",
  }

];

export default function DairyPharmaValves() {
  return (
    <>
      <Helmet>
        <title>Dairy Pharma Valves</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Dairy & Pharma Valves"
        image={DairyPharmaValvesBanner}
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