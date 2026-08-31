import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";

import IncoloyBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-incoloy-tubes.webp";
import RoundBars from "../../products-image/ss-incoloy-roundbars.webp";
import Sheets from "../../products-image/ss-incoloy-sheets.webp";
import Plates from "../../products-image/ss-incoloy-800-plates.webp";
import Wires from "../../products-image/ss-incoloy-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-incoloy-pipes.webp";

export const materials = [
  {
    id: 1,
    name: "Incoloy Tubes Supplier – 800, 800H, 800HT, 825 & 330 (DS 330)",
    image: Tubes,
    slug: "incoloy-tubes-supplier-800-800h-800ht-825-330-ds-330-stockist-mumbai-india",
    category: "tubes",
  },
  {
    id: 2,
    name: "Incoloy Round Bars Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    image: RoundBars,
    slug: "incoloy-round-bars-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india",
    category: "round-bars",
  },
  {
    id: 3,
    name: "Incoloy Sheets Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    image: Sheets,
    slug: "incoloy-sheets-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india",
    category: "sheets",
  },
  {
    id: 4,
    name: "Incoloy Plates Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    image: Plates,
    slug: "incoloy-plates-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india",
    category: "plates",
  },
  {
    id: 5,
    name: "Incoloy Wires Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    image: Wires,
    slug: "incoloy-wires-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india",
    category: "wires",
  },
  {
    id: 6,
    name: "Incoloy Coils Supplier – 800, 800H, 800HT, 825, 925 & DS 330",
    image: Coils,
    slug: "incoloy-coils-supplier-800-800h-800ht-825-925-ds-330-stockist-mumbai-india",
    category: "coils",
  },
  {
    id: 7,
    name: "Incoloy Pipes Supplier",
    image: Pipes,
    slug: "incoloy-pipes-supplier-stockist-mumbai-india",
    category: "pipes",
  },
];

export default function Incoloy() {
  return (
    <>
      <Helmet>
        <title>Incoloy Products</title>
        <meta
          name="description"
          content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
        />
      </Helmet>

      <Navbar />
      <Banner title="Incoloy Products" image={IncoloyBanner} />

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
