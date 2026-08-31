import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import CirclesBanner from "../../products-image/hero/circle.jpg";

import StainlessCircles from "../../products-image/ss-circles.webp";
import MachinedCircles from "../../products-image/ss-machined-forged-circles.webp";
import SpecialtyCircles from "../../products-image/ss-industrial-circles.webp";

  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Stainless Steel Circles",
    image: StainlessCircles,
    material: "Stainless Disks",
    type: "Stainless Steel Circles",
    grades:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L, Dual Certified Alloys",
  },
  {
    id: 2,
    name: "Machined & Forged Circles",
    image: MachinedCircles,
    material: "Heavy Duty Disks",
    type: "Machined & Forged Circles",
    grades: "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340, Seamless Blind Flange Blocks & Dynamic Rotating Discs",
  },
  {
    id: 3,
    name: "Specialty Industrial Circles",
    image: SpecialtyCircles,
    material: "High Alloy Disks",
    type: "Specialty Circles",
    grades: "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5",
  }

];

export default function Circles() {
  return (
    <>
      <Helmet>
        <title>Circles</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Circular Blanks Range"
        image={CirclesBanner}
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