import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import { Link } from "react-router-dom";

import FlangesBanner from "../../products-image/hero/flange.jpg";

import Carbon from "../../products-image/ss-carbon-alloy-flanges.webp";
import Duplex from "../../products-image/ss-duplex-flanges.webp";
import Hastelloy from "../../products-image/ss-hastelloy-flanges.webp";
import Incoloy from "../../products-image/ss-incoloy-flanges.webp";
import Inconel from "../../products-image/ss-inconel-flanges.webp";
import Monel from "../../products-image/ss-monel-flanges.webp";
import NickelCopper from "../../products-image/ss-copper-nickel-flanges.webp";
import Titanium from "../../products-image/ss-titanium-flanges.webp";
  


import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Titanium Flanges",
    image: Titanium,
    material: "Titanium Core",
    type: "Titanium Flanges",
    grades: "ASTM B381 Gr. 1, Gr. Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 Ultra-Lightweight Class 150 to Class 2500 Weld Necks & Plate Flanges",
  },
  {
    id: 2,
    name: "Duplex Steel Flanges",
    image: Duplex,
    material: "Duplex & Super Duplex",
    type: "Duplex Steel Flanges",
    grades: "ASTM A182 F51, F53, F60, UNS S31803, S32205, S32750, S32760 High-Strength Anti-Pitting Blind & Socket Weld Interfaces",
  },
  {
    id: 3,
    name: "Hastelloy Flanges",
    image: Hastelloy,
    material: "Hastelloy Core",
    type: "Hastelloy Flanges",
    grades: "Hastelloy C276, C22, B2, B3, Alloy X Custom Orifice & Spectacle Blind Flanges for Sour Gas Processing Utilities",
  },
  {
    id: 4,
    name: "Incoloy Flanges",
    image: Incoloy,
    material: "Incoloy Superalloy",
    type: "Incoloy Flanges",
    grades: "Incoloy 800, 800H, 800HT, 825, ASTM A182 Flat Faced Companion Flanges Built for Carburization Protection",
  },
  {
    id: 5,
    name: "Inconel Flanges",
    image: Inconel,
    material: "Inconel Core",
    type: "Inconel Flanges",
    grades: "Inconel 600, 625, 718, X-750 Threaded & Ring Type Joint (RTJ) Flanges for Intense Cryogenic & Thermal Manifolds",
  },
  {
    id: 6,
    name: "Monel Flanges",
    image: Monel,
    material: "Monel Alloy",
    type: "Monel Flanges",
    grades: "Monel 400, Monel K500 Long Weld Neck and Tongue & Groove Flange Configurations Built for Marine Petrochemical Feeds",
  },
  {
    id: 7,
    name: "Nickel Copper Alloy Flanges",
    image: NickelCopper,
    material: "Nickel Copper",
    type: "Nickel Copper Flanges",
    grades: "Copper-Nickel 70/30 (C71500), 90/10 (C70600) Customized Reducing Lap Joint Flanges for Saltwater Piping Frameworks",
  },
  {
    id: 8,
    name: "Carbon Steel Flanges",
    image: Carbon,
    material: "Carbon Steel",
    type: "Carbon Steel Flanges",
    grades:
      "ASTM A105, A350 LF2, A694 F52, F60, F65, F70 High-Yield Raised Face Slip-On & Weld Neck Flange Runs",
  },
  
];

export default function Flanges() {
  return (
    <>
      <Helmet>
        <title>Flanges</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Flanges"
        image={FlangesBanner}
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