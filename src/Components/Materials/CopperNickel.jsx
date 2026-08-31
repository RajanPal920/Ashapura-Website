// Components/Materials/CopperNickel.jsx
import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";

import CopperNickelBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-copper-nickel-tubes.webp";
import RoundBars from "../../products-image/ss-copper-nickel-roundbars.webp";
import Sheets from "../../products-image/ss-copper-nickel-sheets.webp";
import Plates from "../../products-image/ss-copper-nickel-plates.webp";
import Wires from "../../products-image/ss-copper-nickel-wires.webp";
import Coils from "../../products-image/ss-copper-coils.webp";
import Pipes from "../../products-image/ss-copper-nickel-pipes.webp";

export const materials = [
  {
    id: 1,
    name: "Copper Nickel Tubes Supplier – 90/10 (C70600) & 70/30 (C71500)",
    image: Tubes,
    // Added slug and category to match AppRoutes.jsx
    slug: "copper-nickel-tubes-supplier-90-10-c70600-70-30-c71500-stockist-mumbai-india",
    category: "tubes",
  },
  {
    id: 2,
    name: "Copper Nickel Round Bars Supplier – 90/10 (C70600) & 70/30 (C71500)",
    image: RoundBars,
    slug: "copper-nickel-round-bars-supplier-stockist-mumbai-india",
    category: "round-bars",
  },
  {
    id: 3,
    name: "Copper Nickel Sheets Supplier",
    image: Sheets,
    slug: "copper-nickel-sheets-supplier-stockist-mumbai-india",
    category: "sheets",
  },
  {
    id: 4,
    name: "Copper Nickel Plates Supplier – 70/30 & 90/10 Plates",
    image: Plates,
    slug: "copper-nickel-plates-supplier-70-30-90-10-plates-stockist-mumbai-india",
    category: "plates",
  },
  {
    id: 5,
    name: "Copper Nickel Wires Supplier – 70/30 & 90/10 Wires",
    image: Wires,
    slug: "copper-nickel-wires-supplier-stockist-mumbai-india",
    category: "wires",
  },
  {
    id: 6,
    name: "Copper Nickel Coils Supplier",
    image: Coils,
    slug: "copper-nickel-coils-supplier-stockist-mumbai-india",
    category: "coils",
  },
  {
    id: 7,
    name: "Copper Nickel Pipes Supplier",
    image: Pipes,
    slug: "copper-nickel-pipes-supplier-stockist-mumbai-india",
    category: "pipes",
  },
];

export default function CopperNickel() {
  return (
    <>
      <Helmet>
        <title>Copper Nickel Products</title>
        <meta
          name="description"
          content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
        />
      </Helmet>

      <Navbar />

      <Banner title="Copper Nickel Products" image={CopperNickelBanner} />

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {materials.map((item) => (
              // FIX: Wrapped the whole card in Link so the entire card is clickable
              <Link
                key={item.id}
                className="product-card-link"
                to={`/products/${item.category}/${item.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="product-card">
                  <div className="product-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="product-content">
                    <h4>{item.name}</h4>
                    <div className="product-btn">Explore Range</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
