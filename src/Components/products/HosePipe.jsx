import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

import HosePipeBanner from "../../products-image/hero/hose.jpg";

import Annular from "../../products-image/ss-annular-hose.webp";
import ssHose from "../../products-image/ss-corugated-steel-hose.webp";
import HoseAssembly from "../../products-image/ss-high-assembly-hose.webp";
import PTFE from "../../products-image/ss-ptfe-hose.webp";
import BraidedHose from "../../products-image/ss-braided-hose.webp";
import HoseFittings from "../../products-image/ss-hose-end-fittings.webp";
import StripWound from "../../products-image/ss-strip-wound-hose.webp";


  
import "./ButtweldFittings.css";

const products = [
  {
    id: 1,
    name: "Annular Corrugated Hose",
    image: Annular,
    material: "Annular Profile",
    type: "Annular Profile Hoses",
    grades:
      "Stainless Steel 304, 316L, 321, Close-Pitch Corrugations, Standard Pitch, High-Flexibility Mechanical Fluid Transfer Coils",
  },
  {
    id: 2,
    name: "Corrugated SS Hose Pipe",
    image: ssHose,
    material: "Stainless Steel Core",
    type: "Corrugated SS Hose",
    grades: "Hydro-formed or Mechanically Formed Corrugations, Grade 316TI, Grade 321, High-Vacuum & Extreme Thermal Gradient Resistance",
  },
  {
    id:3,
    name:"High Pressure SS Hose Assembly",
    image: HoseAssembly,
    material: "Heavy Duty Matrix",
    type: "High Pressure Assemblies",
    grades: "Double/Triple Outer Stainless Steel Wire Braiding, Formed to Withstand Pressures up to 250 Bar, Gas/Cryogenic System Calibrations"
  },
  {
    id:4,
    name:"PTFE Lined SS Hose Pipe",
    image: PTFE,
    material: "Chemical Liner",
    type: "PTFE Lined SS Hoses",
    grades: "Smooth Bore PTFE Core, Convoluted PTFE Core, Outer SS 304 Wire Braid Cover, Pure Food-Grade Chemical Inert Fluid Conveyance",
  },
  {
    id:5,
    name:"SS Braided Hose Pipe",
    image: BraidedHose,
    material: "Woven Wire Braid",
    type: "SS Braided Hoses",    
    grades: "Single Layer SS 304 / SS 316 Braid Cover, Prevents Elongation of Inner Core under Pressure, Enhances Longitudinal Strength",
  },
  {
    id:6,
    name:"SS Hose With End Fittings",
    image: HoseFittings,
    material: "Integrated Ends",
    type: "Hoses With End Fittings",
    grades: "Fixed/Swivel Flanges (ASA/DIN/JIS), Camlock Couplings, Hex Male NPT Thread, Female Swivel Union, Custom Weld Stub Connections",
  },
  {
    id:7,
    name:"Strip Wound Hose Pipe",
    image: StripWound,
    material: "Interlocked Profile",
    type: "Strip Wound Hoses",
    grades: "Interlocked/Square-Locked Flexible Conduit Profile, Hot-Dip Galvanized Steel, SS 304, Mechanical Armour Protection Cable Sleeving & Dry Material Extraction Chutes",
  }

];

export default function HosePipe() {
  return (
    <>
      <Helmet>
        <title>Hose Pipe</title>

        <meta
          name="description"
          content="Manufacturer & Exporter of Stainless Steel, Duplex Steel, Titanium, Nickel Alloy and Special Alloy Forged Fittings."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="Industrial Hose Pipe Range"
        image={HosePipeBanner}
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