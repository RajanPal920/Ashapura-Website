import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import DairyFittingsBanner from "../../products-image/hero/dairy.jpg";

import ConicalStrainers from "../../products-image/ss-conical-strainers.webp";
import sspipescaps from "../../products-image/ss-pipes-caps.webp";
import PlainTees from "../../products-image/ss-plain-tees.webp";
import WyeLoops from "../../products-image/ss-wyeloops.webp";
import TCClamps from "../../products-image/ss-tc-clamps.webp";
import Reducers from "../../products-image/ss-reducers.webp";
import pipeHolders from "../../products-image/ss-pipe-holders.webp";
import PlainBends from "../../products-image/ss-plain-bends.webp";
import JBends from "../../products-image/ss-j-bends.webp";
import TCBends from "../../products-image/ss-tc-bends.webp";
import SMSUnion from "../../products-image/ss-sms-fittings.webp";
import SeamlessTees from "../../products-image/ss-seamless-tees.webp";



  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Conical Strainers",
    image: ConicalStrainers,
    material: "Conical Strainers",
    type: "Conical Strainers",
    grades:
      "Efficient removal of impurities ensuring product purity",
  },
  {
    id: 2,
    name: "SS Pipes Caps",
    image: sspipescaps,
    material: `SS Pipes Caps`,
    type: "SS Pipes Caps",
    grades: "Secure sealing of pipe ends to prevent contamination",
  },
  {
    id:3,
    name:"Plain Tees",
    image: PlainTees,
    material: "Plain Tees",
    type: "Plain Tees",
    grades: "Smooth directional flow within pipelines"
  },
  {
    id:4,
    name:"Wye Loops",
    image: WyeLoops,
    material: "Wye Loops",
    type: "Wye Loops",
    grades: "Efficient flow direction changes with minimal turbulence",
  },
  {
    id:5,
    name:"TC Clamps",
    image: TCClamps,
    material: "TC Clamps",
    type: "TC Clamps",
    grades: "Leak-proof and hygienic tri-clamp connections",
  },
  {
    id:6,
    name:"Reducers",
    image: Reducers,
    material: "Reducers",
    type: "Reducers",
    grades: "Smooth transition between different pipe sizes",
  },
  {
    id:7,
    name:"Pipe Holders",
    image: pipeHolders,
    material: "Pipe Holders",
    type: "Pipe Holders",
    grades: "Stable support for piping systems",
  },
  {
    id:8,
    name:"Plain Bends",
    image: PlainBends,
    material: "Plain Bends",
    type: "Plain Bends",
    grades: "Directional flow change with minimal resistance",
  },
  {
    id:9,
    name:"J Bends",
    image: JBends,
    material: "J Bends",
    type: "J Bends",
    grades: "Compact U-turn pipeline design",
  },
  {
    id:10,
    name:"TC Bends",
    image: TCBends,
    material: "TC Bends",
    type: "TC Bends",
    grades: "Hygienic directional change using tri-clamp system",
  },
  {
    id:11,
    name:"SMS Union",
    image: SMSUnion,
    material: "SMS Union",
    type: "SMS Union",
    grades: "Easy assembly & dismantling for maintenance",
  },
  {
    id:12,
    name:"Seamless Tees",
    image: SeamlessTees,
    material: "Seamless Tees",
    type: "Seamless Tees",
    grades: "Smooth pipeline branching with zero leakage",
  }

];

export default function DairyFittings() {
  return (
    <>
      <Helmet>
        <title>Dairy Fittings</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Dairy Fittings Solutions"
        image={DairyFittingsBanner}
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