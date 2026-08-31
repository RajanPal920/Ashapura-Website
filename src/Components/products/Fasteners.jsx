import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import { Link } from "react-router-dom";

import FastenersBanner from "../../products-image/hero/fastener.jpg";

import Carbon from "../../products-image/ss-carbon-alloy-fasteners.webp";
import Hastelloy from "../../products-image/ss-hastelloy-fasteners.webp";
import Incoloy from "../../products-image/ss-incoloy-fasteners.webp";
import Inconel from "../../products-image/ss-inconel-fasteners.webp";
import Monel from "../../products-image/ss-monel-fasteners.webp";
import NickelCopper from "../../products-image/ss-copper-nickel-fasteners.webp";
import Duplex from "../../products-image/ss-duplex-fasteners.webp";
import Titanium from "../../products-image/ss-titanium-fasteners.webp";


  
import "./ButtweldFittings.css";



const products = [
  {
    id: 1,
    name: "Stainless & Duplex Steel Fasteners",
    image: Duplex,
    material: "Stainless & Duplex",
    type: "Stainless Duplex",
    grades: "A2-70, A4-80, SS 304, 316L, 317L, 321, 904L / Duplex UNS S31803, S32205 / Super Duplex S32750 Heavy-Lock Fastenings",
  },
  {
    id: 2,
    name: "Hastelloy Fasteners",
    image: Hastelloy,
    material: "Hastelloy Core",
    type: "Hastelloy Fasteners",
    grades: "Hastelloy C276, C22, B2, B3, Alloy X Hex Bolts, Studs, and Washers for Petrochemical Refineries",
  },
  {
    id: 3,
    name: "Incoloy Fasteners",
    image: Incoloy,
    material: "Incoloy Superalloy",
    type: "Incoloy Fasteners",
    grades: "Incoloy 800, 800H, 800HT, 825 Threaded Rods, Hex Nuts, and Custom Machine Screws",
  },
  {
    id: 4,
    name: "Inconel Fasteners",
    image: Inconel,
    material: "Inconel Core",
    type: "Inconel Fasteners",
    grades: "Inconel 600, 625, 718, X-750 Corrosive High-Temperature Engine Clamping Solutions",
  },
  {
    id: 5,
    name: "Monel Fasteners",
    image: Monel,
    material: "Monel Alloy",
    type: "Monel Fasteners",
    grades: "Monel 400, Monel K500 Sea-Water Impervious Heavy Structural Washers and Marine Fastenings",
  },
  {
    id: 6,
    name: "Nickel Copper Alloy Fasteners",
    image: NickelCopper,
    material: "Nickel Copper",
    type: "Nickel Copper Alloy",
    grades: "Copper-Nickel 70/30, 90/10 Alloys, Precision High-Conductivity Sub-Sea Structural Mount Hardware",
  },
  {
    id: 7,
    name: "Carbon Alloy Steel Fasteners",
    image: Carbon,
    material: "Carbon & Alloy Steel",
    type: "Carbon Alloy Fasteners",
    grades:
      "ASTM A193 B7, B7M, ASTM A320 L7, Grade 4.8, 8.8, 10.9, 12.9 High-Tensile Structural Anchor Runs",
  },
  {
    id: 8,
    name: "Titanium Fasteners",
    image: Titanium,
    material: "Titanium Core",
    type: "Titanium Fasteners",
    grades: "Titanium Grade 1, Grade 2, Grade 5 (Ti-6Al-4V), Grade 7 Ultra-Lightweight Aero-Space Clamping Elements",
  },
  
];

export default function Fasteners() {
  return (
    <>
      <Helmet>
        <title>Fasteners</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Fasteners"
        image={FastenersBanner}
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