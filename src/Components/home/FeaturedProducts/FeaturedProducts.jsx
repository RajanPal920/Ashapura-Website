import "./FeaturedProducts.css";

import stainlessSteelTubes from "../../../assets/images/stainless-steel-tubes.webp";
import flanges from "../../../products-image/ss-duplex-flanges.webp";
import fasteners from "../../../products-image/ss-duplex-fasteners.webp";
import rings from "../../../products-image/ss-forged-rings.webp";
import Sheets from "../../../assets/images/stainless-steel-sheets.webp";
import Strips from "../../../assets/images/stainless-steel-strips.webp";
import ButtweldFittings from "../../../assets/images/stainless-steel-buttweld-fittings.webp";
import valves from "../../../products-image/ss-sanitary-valves.webp";
import coils from "../../../products-image/ss-coils.webp";
import circles from "../../../products-image/ss-circles.webp";
import roundbars from "../../../products-image/ss-alloy-28-roundbars.webp";
import wiremesh from "../../../products-image/ss-woven-wiremesh.webp";


import { Link } from "react-router-dom";
//import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    name: "SS Tubes",
    image: stainlessSteelTubes,
  },
  {
    name: "Flanges",
    image: flanges,
  },
  {
    name: "Fasteners",
    image: fasteners,
  },
  {
    name: "Rings",
    image: rings,
  },
  {
    name: "SS Sheets",
    image: Sheets,
  },
  {
    name: "SS Strips",
    image: Strips,
  },
  {
    name: "Buttweld Fittings",
    image: ButtweldFittings,
  },
  {
    name: "Valves",
    image: valves,
  },
  {
    name: "Coils",
    image: coils,
  },
  {
    name: "Circles",
    image: circles,
  },
  {
    name: "Roundbars",
    image: roundbars,
  },
  {
    name: "Wiremesh",
    image: wiremesh,
  },
];

function FeaturedProducts() {
  return (
    <section id="products" className="products-home">
      <div className="container">
        <div className="section-heading">
          <h2>
            Premium Industrial Products
          </h2>
          <p>
            We manufacture and supply a wide range of stainless steel,
            duplex steel, alloy steel and nickel alloy products
            for industries worldwide.
          </p>
        </div>
        <div className="products-grid">

          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="product-title-bar">
                  <h3>{item.name}</h3>
                </div>
                <div className="product-overlay">
                  <Link to="/products/pipes" className="view-product-btn">
                    View Specs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="view-all-wrapper">
          <Link to="/products/pipes" className="view-all-btn">
            View All Products
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default FeaturedProducts;