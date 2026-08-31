import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import RingsBanner from "../../products-image/hero/ring.jpg";

import StainlessRings from "../../products-image/ss-forged-rings.webp";
import Duplex from "../../products-image/ss-duplex-rings.webp";
import Nickel from "../../products-image/ss-nickel-alloy-rings.webp";
import Carbon from "../../products-image/ss-carbon-rings.webp";


  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Stainless Steel Forged Rings",
    image: StainlessRings,
    material: "Stainless Steel",
    type: "Stainless Steel Forged Rings",
    grades:
      "ASTM A182 F304, F304L, F316, F316L, F317L, F321, F347, F44 (904L), Seamless Rolled Band Rings",
  },
  {
    id: 2,
    name: "Duplex & Super Duplex Rings",
    image: Duplex,
    material: "Duplex Alloys",
    type: "Duplex & Super Duplex Rings",
    grades: "ASTM A182 F51, F53, F55, UNS S31803, S32205, S32750, S32760, High-Stress Marine Seawater Ring Shells",
  },
  {
    id: 3,
    name: "Nickel & Alloy Steel Rings",
    image: Nickel,
    material: "Nickel & Alloys",
    type: "Nickel & Alloy Steel Rings",
    grades: "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Alloy 20, Alloy Steel F11, F22, F91",
  },
  {
    id: 4,
    name: "Carbon & Mild Steel Rings",
    image: Carbon,
    material: "Carbon Steel",
    type: "Carbon & Mild Steel Rings",
    grades: "ASTM A105 Forged Carbon, A350 LF2 Class 1/2, Carbon Steel C45, Structural MS Grade Shells & Heavy Base Rings",
  }
];

export default function Rings() {
  return (
    <>
      <Helmet>
        <title>Forged Industrial Rings Range</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Rings"
        image={RingsBanner}
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