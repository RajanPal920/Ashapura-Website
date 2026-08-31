import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import HardoxPlatesBanner from "../../products-image/hero/Hardox.jpg";

import Hardox400 from "../../products-image/ss-hardox400.webp";
import Hardox450 from "../../products-image/ss-hardox450.webp";
import Hardox500 from "../../products-image/ss-hardox-500.webp";
import Hardox550 from "../../products-image/ss-hardox550.webp";
import Hardox600 from "../../products-image/ss-hardox600.webp";



  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Hardox 400",
    image: Hardox400,
    material: "Hardox 400 Core",
    type: "Hardox 400 Plates",
    grades:
      "Nominal Hardness: ~400 HBW, High Toughness, Superior Bendability, Optimized Weldability, Thickness: 2mm to 130mm",
  },
  {
    id: 2,
    name: "Hardox 450",
    image: Hardox450,
    material: "Hardox 450 Core",
    type: "Hardox 450 Plates",
    grades: "Nominal Hardness: ~450 HBW, Extended Service Life, High Fatigue Resistance, Structural Grade Properties, Thickness: 3mm to 80mm",
  },
  {
    id:3,
    name:"Hardox 500",
    image: Hardox500,
    material: "Hardox 500 Core",
    type: "Hardox 500 Plates",
    grades: "Nominal Hardness: ~500 HBW, High-Abrasion Application Calibrations, Crack Resistance, Tough Profile Liner Runs, Thickness: 4mm to 103mm"
  },
  {
    id:4,
    name:"Hardox 550",
    image: Hardox550,
    material: "Hardox 550 Core",
    type: "Hardox 550 Plates",
    grades: "Nominal Hardness: ~550 HBW, Targeted Wear Resistance, Optimized for Chute Liners and Shredders, High Shock Limits, Thickness: 10mm to 50mm",
  },
  {
    id:5,
    name:"Hardox 600",
    image: Hardox600,
    material: "Hardox 600 Core",
    type: "Hardox 600 Plates",
    grades: "Nominal Hardness: ~600 HBW, Extreme Mechanical Impact Armor, Replaces Cast Alloy Wear Components, High Yield Parameters, Thickness: 6mm to 65mm",
  }

];

export default function HardoxPlates() {
  return (
    <>
      <Helmet>
        <title>Hardox Plates</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Hardox Wear Resistant Plates"
        image={HardoxPlatesBanner}
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