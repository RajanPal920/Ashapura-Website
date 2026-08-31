import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import { Link } from "react-router-dom";

import ButtweldFittingsBanner from "../../products-image/hero/buttweld.jpg";

import Carbon from "../../products-image/ss-carbon-alloy-buttweld.webp";
import Hastelloy from "../../products-image/ss-hastelloy-buttweld.webp";
import Incoloy from "../../products-image/ss-incoloy-buttweld.webp";
import Inconel from "../../products-image/ss-inconel-buttweld.webp";
import Monel from "../../products-image/ss-monel-buttweld.webp";
import NickelCopper from "../../products-image/ss-nickel-copper-buttweld.webp";
import duplex from "../../products-image/ss-duplex-buttweld.webp";
import titanium from "../../products-image/ss-titanium-buttweld.webp";

import "./ButtweldFittings.css";




const products = [
  {
    id: 1,
    name: "Stainless & Duplex Steel Buttweld Fittings",
    image: duplex,
    material: "Stainless / Duplex",
    type: "Duplex Fittings",
    grades: "WP304L, WP316L, 317L, 321, 347, 904L / Duplex WP2205 / Super Duplex WP2507 Intergranular Corrosion-Proof Fittings",
  },
  {
    id: 2,
    name: "Hastelloy Buttweld Fittings",
    image: Hastelloy,
    material: "Hastelloy",
    type: "Hastelloy Fittings",
    grades: "Hastelloy C276, C22, B2, B3, X Equal Tees and Long Radius Bends for High-Acid Volatility Refineries",
  },
  {
    id: 3,
    name: "Incoloy Buttweld Fittings",
    image: Incoloy,
    material: "Incoloy",
    type: "Incoloy Fittings",
    grades: "Incoloy 800, 800H, 800HT, 825 Short Radius Stub Ends and Lateral Tees for Structural Process Plants",
  },
  {
    id: 4,
    name: "Inconel Buttweld Fittings",
    image: Inconel,
    material: "Inconel",
    type: "Inconel Fittings",
    grades: "Inconel 600, 625, 718, X-750 Oxidization Proof Welded pipe Caps and Returns for Thermal Power Core Environments",
  },
  {
    id: 5,
    name: "Monel Buttweld Fittings",
    image: Monel,
    material: "Monel",
    type: "Monel Fittings",
    grades: "Monel 400, Monel K500 Cross Tees and Custom Slanted Returns Built for Desalination Infrastructure Components",
  },
  {
    id: 6,
    name: "Nickel Copper Alloy Buttweld Fittings",
    image: NickelCopper,
    material: "Nickel Copper",
    type: "Nickel Copper Fittings",
    grades: "Copper-Nickel 70/30, 90/10 Alloys, Sub-Sea Pipeline Reducers and Anti-Biofouling Offshore Joint Runs",
  },
  {
    id: 7,
    name: "Carbon Alloy Steel Buttweld Fittings",
    image: Carbon,
    material: "Carbon & Alloy Steel",
    type: "Carbon Alloy Fittings",
    grades:
      "ASTM A234 WPB, WPC, WP11, WP22, WP91, ASTM A420 WPL6 High-Yield Seamless Pipe Elbows & Concentric Reducers"
  },
  {
    id: 8,
    name: "Titanium Buttweld Fittings",
    image: titanium,
    material: "Titanium",
    type: "Titanium Fittings",
    grades: "ASTM B363 WP Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 High Strength-to-Weight Cryogenic Pipeline Fittings",
  },
];

export default function ButtweldFittings() {
  return (
    <>
      <Helmet>
        <title>Buttweld Fittings</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Buttweld Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Buttweld Fittings"
        image={ButtweldFittingsBanner}
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