import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import ValvesBanner from "../../products-image/hero/valve.jpg";

import StainlessValves from "../../products-image/ss-duplex-valves.webp";
import MatrixValves from "../../products-image/ss-sanitary-valves.webp";

  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Stainless & Duplex Steel Valves",
    image: StainlessValves,
    material: "Standards: SMS, 3A, DIN, BS, ISO, DS, ASME BPE, Aseptic Butterfly, Check, Globe, Ball, Gate, and Safety Valves",
    type: "Stainless & Duplex Steel Valves",
    grades:
      "SS 304, 304L, 316, 316L, 321, Duplex Alloys",
  },
  {
    id: 2,
    name: "Sanitary & Industrial Valve Matrix",
    image: MatrixValves,
    material: `Gate/Globe/Butterfly (Up to 25"), Ball (Up to 10"), Check (Up to 12")`,
    type: "Sanitary & Industrial Valve Matrix",
    grades: "High-Grade Stainless Steel Construction (304/316/321)",
  }

];

export default function Valves() {
  return (
    <>
      <Helmet>
        <title>Valves</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Industrial Valves Solution"
        image={ValvesBanner}
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