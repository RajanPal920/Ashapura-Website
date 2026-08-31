import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import WireMeshBanner from "../../products-image/hero/wire-mesh.jpg";

import WovenWireMesh from "../../products-image/ss-woven-wiremesh.webp";
import WeldedWireMesh from "../../products-image/ss-welded-wiremesh.webp";
import CrimpedWireMesh from "../../products-image/ss-crimped-wiremesh.webp";
import ChainLinkMesh from "../../products-image/ss-chain-link-wiremesh.webp";
import SSWireMesh from "../../products-image/ss-steel-wiremesh.webp";
import Hexagonal from "../../products-image/ss-hexagonal-wiremesh.webp";


  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Woven Wire Mesh",
    image: WovenWireMesh,
    material: "Woven Screens",
    type: "Woven Wire Mesh",
    grades:
      "Plain Weave, Twilled Weave, Plain Dutch Weave, Twilled Dutch Weave, Reverse Dutch Weave (1 Mesh to 635 Mesh)",
  },
  {
    id: 2,
    name: "Welded Wire Mesh",
    image: WeldedWireMesh,
    material: "Welded Matrix",
    type: "Welded Wire Mesh",
    grades: "Square Openings, Rectangular Slots, Heavy-Gauge Concrete Reinforcement Sheets, Coated/Galvanized Weld Grid Rolls",
  },
  {
    id:3,
    name:"Crimped Wire Mesh",
    image: CrimpedWireMesh,
    material: "Crimped Screens",
    type: "Crimped Wire Mesh",
    grades: "Plain Crimped, Intermediate Crimped, Lock Crimped, Flat Top Crimped (Heavy Structural Stone & Aggregate Vibrating Screens)"
  },
  {
    id:4,
    name:"Chain Link Mesh",
    image: ChainLinkMesh,
    material: "Interlocking Diamond",
    type: "Chain Link Mesh",
    grades: "Galvanized Iron (GI), PVC Coated Core, Heavy-Duty Perimeter Fencing Coils, High-Security Enclosure Matrices, Knuckled & Twisted Edge Finishes",
  },
  {
    id:5,
    name:"Stainless Steel Wire Mesh",
    image: SSWireMesh,
    material: "Square & Twilled Weave",
    type: "Stainless Steel Wire Mesh",
    grades: "SS 304, 304L, 316, 316L, 904L, High-Density Micron Filter Cloth, Fine Chemical Screening Sieve Runs, Corrosive Resistant Industrial Wire Gauzes",
  },
  {
    id:6,
    name:"Hexagonal Wire Netting",
    image: Hexagonal,
    material: "Hexagonal Twist",
    type: "Hexagonal Wire Netting",
    grades: "Normal Twist Netting, Reverse Twist, Heavy-Gauge Earth Gabion Boxes, Pipeline Thermal Insulation Wrap Mesh",
  }

];

export default function WireMesh() {
  return (
    <>
      <Helmet>
        <title>Wire Mesh</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Industrial Wire Mesh Range"
        image={WireMeshBanner}
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