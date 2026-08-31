import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import { Link } from "react-router-dom";

import ForgedFittingsBanner from "../../products-image/hero/forged.jpg";
  
import Carbon from "../../products-image/ss-carbon-alloy-forged.webp";
import Hastelloy from "../../products-image/ss-hastelloy-forged.webp";
import Incoloy from "../../products-image/ss-incoloy-forged.webp";
import Inconel from "../../products-image/ss-inconel-forged.webp";
import Monel from "../../products-image/ss-monel-forged.webp";
import NickelCopper from "../../products-image/ss-copper-nickel-forged.webp";
import Duplex from "../../products-image/ss-duplex-forged.webp";
import Tantalum from "../../products-image/ss-tantalum-forged.webp";
import Titanium from "../../products-image/ss-titanium-forged.webp";


import "./ButtweldFittings.css";



const products = [
  {
    id: 1,
    name: "Stainless & Duplex Steel Forged Fittings",
    image: Duplex,
    material: "Stainless & Duplex",
    type: "Duplex Fittings",
    grades: "ASTM A182 F304L, F316L, F321, F347, 904L / Duplex F51, F53, F60 / Super Duplex F55 Structural Branch Connections & Sockolets",
  },
  {
    id: 2,
    name: "Hastelloy Forged Fittings",
    image: Hastelloy,
    material: "Hastelloy Core",
    type: "Hastelloy Fittings",
    grades: "Hastelloy C276, C22, B2, B3, Alloy X Forged Crosses, Tees, and Full Couplings for Harsh Chemical Corrosive Streams",
  },
  {
    id: 3,
    name: "Incoloy Forged Fittings",
    image: Incoloy,
    material: "Incoloy Superalloy",
    type: "Incoloy Fittings",
    grades: "Incoloy 800, 800H, 800HT, 825 Forged Swage Nipples, Street Elbows, and Hex Plugs for High-Stress Processing Lines",
  },
  {
    id: 4,
    name: "Inconel Forged Fittings",
    image: Inconel,
    material: "Inconel Core",
    type: "Inconel Fittings",
    grades: "Inconel 600, 625, 718, X-750 Oxidation-Resistant Half Couplings and Socket Weld Reducing Tees for Nuclear & Aerospace Engineering",
  },
  {
    id: 5,
    name: "Monel Forged Fittings",
    image: Monel,
    material: "Monel Alloy",
    type: "Monel Fittings",
    grades: "Monel 400, Monel K500 Forged Threaded Caps, Bosses, and Reducing Inserts Built for High-Salinity Marine Piping",
  },
  {
    id: 6,
    name: "Nickel Copper Alloy Forged Fittings",
    image: NickelCopper,
    material: "Nickel Copper",
    type: "Nickel Copper Fittings",
    grades: "Copper-Nickel 70/30, 90/10 Forged Lateral Tees, Weldolets, and Threaded Elbows for Offshore Marine Platforms",
  },
  {
    id: 7,
    name: "Carbon Alloy Steel Forged Fittings",
    image: Carbon,
    material: "Carbon & Alloy Steel",
    type: "Carbon Alloy Fittings",
    grades:
      "ASTM A105, A350 LF2, ASTM A182 F5, F11, F22, F91 Class 3000 / 6000 / 9000 High-Pressure Socket Weld & Threaded Unions",
  },
  {
    id: 8,
    name: "Tantalum Forged Fittings",
    image: Tantalum,
    material: "Tantalum",
    type: "Tantalum Rare Core",
    grades: "Pure Tantalum UNS R05200, Tantalum-Tungsten Alloys (Ta-10W, Ta-2.5W) Specialized High-Acid Chemical Process Hardware",
  },
  {
    id: 9,
    name: "Titanium Forged Fittings",
    image: Titanium,
    material: "Titanium Core",
    type: "Titanium Fittings",
    grades: "ASTM B381 Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 High Strength-to-Weight Threadolets and Socket Weld Fittings",
  },
];

export default function ForgedFittings() {
  return (
    <>
      <Helmet>
        <title>Forged Fittings</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Forged Fittings"
        image={ForgedFittingsBanner}
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