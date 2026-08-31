import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import AnglesChannelsBanner from "../../products-image/hero/angle.jpg";

import RegularAngle from "../../products-image/ss-regular-angles.webp";
import RegularChannel from "../../products-image/ss-regular-channels.webp";
import CarbonAngleChannel from "../../products-image/ss-carbon-angles-channels.webp";

  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Regular Angle",
    image: RegularAngle,
    material: "Equal & Unequal",
    type: "Regular Angles",
    grades:
      "ASTM A36, IS 2062 Gr E250 / E350, SS 304/304L, SS 316/316L, Hot-Rolled L-Shape Structural Profiles",
  },
  {
    id: 2,
    name: "Regular Channel",
    image: RegularChannel,
    material: "C & U Channels",
    type: "Regular Channels",
    grades: "IS 808 Standard, ASTM A36, ASME SA36, Stainless Steel 304, 316, Tapered Flange, Parallel Flange Iron Sections",
  },
  {
    id: 3,
    name: "Carbon Angle & Channel",
    image: CarbonAngleChannel,
    material: "Carbon Steel Deck",
    type: "Carbon Angles & Channels",
    grades: "ASTM A572 Gr 50 / Gr 60, A529, IS 2062 E250A/B, High-Yield Carbon Steel Structural Conduits & Framework Sections",
  },
  
];

export default function AnglesChannels() {
  return (
    <>
      <Helmet>
        <title>Angles Channels</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Angles&Channels"
        image={AnglesChannelsBanner}
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