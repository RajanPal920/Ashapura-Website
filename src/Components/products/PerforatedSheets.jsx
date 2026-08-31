import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import PerforatedSheetsBanner from "../../products-image/hero/perforated.jpg";

import Duplex from "../../products-image/ss-duplex-perforated-sheets.webp";
import Carbon from "../../products-image/ss-carbon-perforated-sheets.webp";
import NickelCopper from "../../products-image/ss-copper-perforated-sheets.webp";
import Aluminum from "../../products-image/ss-aluminium-perforated-sheets.webp";
import Galvanized from "../../products-image/ss-galvanized-perforated-sheets.webp";


  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Stainless & Duplex Steel Perforated Sheets",
    image: Duplex,
    material: "Stainless & Duplex",
    type: "Stainless & Duplex Sheets",
    grades:
      "SS 304, 304L, 316, 316L, 321, 347, 904L / Duplex UNS S31803, S32205, Super Duplex S32750",
  },
  {
    id: 2,
    name: "Carbon & Alloy Steel Perforated Sheets",
    image: Carbon,
    material: "Carbon & Alloy",
    type: "Carbon & Alloy Sheets",
    grades: "Mild Steel C45, Structural IS 2062, Low Carbon Forged runs, Chrome-Moly High Tensile Alloy Grades",
  },
  {
    id:3,
    name:"Nickel & Copper Steel Perforated Sheets",
    image: NickelCopper,
    material: "Nickel & Copper",
    type: "Nickel & Copper Sheets",
    grades: "Monel 400, Inconel 600/625, Hastelloy C276, Cupro Nickel 90/10 (C70600) and 70/30 (C71500) Alloys"
  },
  {
    id:4,
    name:"Aluminum Perforated Sheets",
    image: Aluminum,
    material: "Aluminum Structural",
    type: "Aluminum Perforated Sheets",
    grades: "Aluminum 1100 Commercial, 3003, 5052 Marine Grade, 6061-T6 High Strength Structural Configurations",
  },
  {
    id:5,
    name:"Galvanized perforated Sheets",
    image: Galvanized,
    material: "Galvanized Structural",
    type: "Galvanized Perforated Sheets",
    grades: "Hot-Dip Galvanized Iron (HDGI), Electro-Galvanized Mild Steel Sheet Runs, Anti-Corrosive Zinc Shielding Layers",
  }

];

export default function PerforatedSheets() {
  return (
    <>
      <Helmet>
        <title>Perforated Sheets</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Industrial Perforated Sheets Range"
        image={PerforatedSheetsBanner}
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