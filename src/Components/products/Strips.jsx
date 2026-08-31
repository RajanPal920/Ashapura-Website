import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import StripsBanner from "../../products-image/hero/strip.jpg";

import StainlessStrips from "../../products-image/ss-strips.webp";
import NickelStrips from "../../products-image/ss-nickel-strips.webp";
import DuplexStrips from "../../products-image/ss-carbon-strips.webp";

  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Stainless Steel Strips",
    image: StainlessStrips,
    material: "Stainless Steel",
    type: "Stainless Steel Strips",
    grades:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 317L, 321, 347, 430, 904L, Cold-Rolled Precision Slit Coils",
  },
  {
    id: 2,
    name: "Nickel & High Alloy Strips",
    image: NickelStrips,
    material: "High Alloy Core",
    type: "Nickel & High Alloy Strips",
    grades: "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Carpenter Alloy 20 (UNS N08020)",
  },
  {
    id: 3,
    name: "Duplex & Precision Carbon Strips",
    image: DuplexStrips,
    material: "Specialized Matrix",
    type: "Duplex & Carbon Strips",
    grades: "Duplex UNS S31803 / S32205, Super Duplex S32750, High Carbon Spring Steel C67 / C75 / EN42J, Low Carbon Deep Draw Shims",
  }

];

export default function Strips() {
  return (
    <>
      <Helmet>
        <title>Strips</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Industrial Strips Range"
        image={StripsBanner}
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