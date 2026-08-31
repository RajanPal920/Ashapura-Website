import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";

import HastelloyBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-hastelloy-tubes.webp";
import RoundBars from "../../products-image/ss-hastelloy-roundbars.webp";
import Sheets from "../../products-image/ss-hastelloy-sheets.webp";
import Plates from "../../products-image/ss-hastelloy-plates.webp";
import Wires from "../../products-image/ss-hastelloy-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-hastelloy-pipes.webp";

export const materials = [
  {
    id: 1,
    name: "Hastelloy Tubes Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    image: Tubes,
    slug: "hastelloy-tubes-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
    category: "tubes",
  },
  {
    id: 2,
    name: "Hastelloy Round Bars Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    image: RoundBars,
    slug: "hastelloy-round-bars-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
    category: "round-bars",
  },
  {
    id: 3,
    name: "Hastelloy Sheets Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    image: Sheets,
    slug: "hastelloy-sheets-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
    category: "sheets",
  },
  {
    id: 4,
    name: "Hastelloy Plates Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    image: Plates,
    slug: "hastelloy-plates-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
    category: "plates",
  },
  {
    id: 5,
    name: "Hastelloy Wires Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    image: Wires,
    slug: "hastelloy-wires-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
    category: "wires",
  },
  {
    id: 6,
    name: "Hastelloy Coils Supplier – C276, C22, B2, B3, C2000, C59, C4 & HN",
    image: Coils,
    slug: "hastelloy-coils-supplier-c276-c22-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
    category: "coils",
  },
  {
    id: 7,
    name: "Hastelloy Pipes Supplier",
    image: Pipes,
    slug: "hastelloy-pipes-supplier-stockist-mumbai-india",
    category: "pipes",
  },
];

export default function Hastelloy() {
  return (
    <>
      <Helmet>
        <title>Hastelloy Products</title>
        <meta
          name="description"
          content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
        />
      </Helmet>

      <Navbar />

      <Banner title="Hastelloy Products" image={HastelloyBanner} />

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
