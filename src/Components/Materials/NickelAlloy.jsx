import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";

import NickelAlloyBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-nickel-alloy-tubes.webp";
import RoundBars from "../../products-image/ss-nickel-alloy-200-roundbars.webp";
import Sheets from "../../products-image/ss-nickel-alloy-200-sheets.webp";
import Plates from "../../products-image/ss-nickel-alloy-200-plates.webp";
import Wires from "../../products-image/ss-nickel-alloy-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/nickel-alloy-pipes-supplier.webp";

export const materials = [
  {
    id: 1,
    name: "Nickel Alloy 200 / 201 Tubes Supplier",
    image: Tubes,
    slug: "nickel-alloy-200-201-tubes-supplier-stockist-mumbai-india",
    category: "tubes",
  },
  {
    id: 2,
    name: "Nickel Alloy 200 / 201 Round Bars Stockist",
    image: RoundBars,
    slug: "nickel-alloy-200-201-round-bars-supplier-stockist-mumbai-india",
    category: "round-bars",
  },
  {
    id: 3,
    name: "Nickel Alloy 200 / 201 Sheets Supplier",
    image: Sheets,
    slug: "nickel-alloy-200-201-sheets-supplier-stockist-mumbai-india",
    category: "sheets",
  },
  {
    id: 4,
    name: "Nickel Alloy 200 / 201 Plates Supplier",
    image: Plates,
    slug: "nickel-alloy-200-201-plates-supplier-stockist-mumbai-india",
    category: "plates",
  },
  {
    id: 5,
    name: "Nickel Alloy 200 / 201 Wires Supplier",
    image: Wires,
    slug: "nickel-alloy-200-201-wires-supplier-stockist-mumbai-india",
    category: "wires",
  },
  {
    id: 6,
    name: "Nickel Alloy 200 / 201 Coils Supplier",
    image: Coils,
    slug: "nickel-alloy-200-201-coils-supplier-stockist-mumbai-india",
    category: "coils",
  },
  {
    id: 7,
    name: "Nickel Alloy Pipes Supplier",
    image: Pipes,
    slug: "nickel-alloy-pipes-supplier-stockist-mumbai-india",
    category: "pipes",
  },
];

export default function NickelAlloy() {
  return (
    <>
      <Helmet>
        <title>Nickel Alloy Products</title>
        <meta
          name="description"
          content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
        />
      </Helmet>

      <Navbar />
      <Banner title="Nickel Alloy Products" image={NickelAlloyBanner} />

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
