import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";

import SpecialMaterialsBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-highperformance-tubes.webp";
import RoundBars from "../../products-image/ss-highperformance-roundbars.webp";
import Sheets from "../../products-image/ss-highperformance-sheets.webp";
import Plates from "../../products-image/ss-high-performance-alloy-plates.webp";
import Wires from "../../products-image/ss-highperformance-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/high-performance-alloy-pipes.webp";

export const materials = [
  {
    id: 1,
    name: "High-Performance Alloy Tubes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    image: Tubes,
    slug: "high-performance-alloy-tubes-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
    category: "tubes",
  },
  {
    id: 2,
    name: "High-Performance Alloy Round Bars Supplier – Nimonic, Nichrome, Nitronic & Alloy",
    image: RoundBars,
    slug: "high-performance-alloy-round-bars-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
    category: "round-bars",
  },
  {
    id: 3,
    name: "High-Performance Alloy Sheets – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    image: Sheets,
    slug: "high-performance-alloy-sheets-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
    category: "sheets",
  },
  {
    id: 4,
    name: "High-Performance Alloy Plates – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    image: Plates,
    slug: "high-performance-alloy-plates-nimonic-nichrome-nitronic-nilo-alloy-supplier-stockist-mumbai-india",
    category: "plates",
  },
  {
    id: 5,
    name: "High-Performance Alloy Wires Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    image: Wires,
    slug: "high-performance-alloy-wires-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
    category: "wires",
  },
  {
    id: 6,
    name: "High-Performance Alloy Coils Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    image: Coils,
    slug: "high-performance-alloy-coils-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
    category: "coils",
  },
  {
    id: 7,
    name: "High-Performance Alloy Pipes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    image: Pipes,
    slug: "high-performance-alloy-pipes-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
    category: "pipes",
  },
];

export default function SpecialMaterials() {
  return (
    <>
      <Helmet>
        <title>Special Materials Products</title>
        <meta
          name="description"
          content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
        />
      </Helmet>

      <Navbar />
      <Banner
        title="Special Materials Products"
        image={SpecialMaterialsBanner}
      />

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {materials.map((item) => (
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
