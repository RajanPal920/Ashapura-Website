import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import PattaPattiBanner from "../../products-image/hero/patta.jpg";

import CarbonPatta from "../../products-image/ss-carbon-alloy-patta.webp";
import Patti from "../../products-image/ss-carbon-alloy-patti.webp";
import Duplex from "../../products-image/ss-duplex-patti.webp";
import StainlessPatta from "../../products-image/ss-steel-patta.webp";



  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Carbon Alloy Steel Flat Bars(Patta)",
    image: CarbonPatta,
    material: "Carbon & Alloy Steel Patta",
    type: "Carbon Alloy Patta",
    grades:
      "High Tensile Carbon Steel, Mild Steel, ASTM A36, AISI 1018, 1045 Hot Rolled & Cold Drawn Heavy Structural Flat Bars",
  },
  {
    id: 2,
    name: "Patti Carbon Alloy Steel",
    image: Patti,
    material: "Carbon & Alloy Steel Patti",
    type: "Carbon Alloy Patti",
    grades: "EN8, EN9, EN24, AISI 4140 Precision Slit Steel Patti Bars for Manufacturing, Tooling & Dynamic Engineering Applications",
  },
  {
    id: 3,
    name: "Patti Stainless Duplex Steel",
    image: Duplex,
    material: "Stainless & Duplex patti",
    type: "Duplex Steel Patti",
    grades: "Duplex UNS S31803, S32205, Super Duplex S32750, High-Alloy Corrosive Resistant Slit Patti Formats",
  },
  {
    id: 4,
    name: "Stainless Steel Flat Bars (Patta)",
    image: StainlessPatta,
    material: "Stainless Steel Patta",
    type: "Stainless Steel Patta",
    grades: "ASTM A240 / ASME SA240 TP 304, 304L, 316, 316L, 317L, 321, 347, 904L Industrial Polished & Hot Rolled Patta Plates"
  }
  
];

export default function PattaPatti() {
  return (
    <>
      <Helmet>
        <title>PattaPatti</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Patta & Patti"
        image={PattaPattiBanner}
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