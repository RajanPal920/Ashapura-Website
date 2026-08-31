import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";

import DuplexSteelBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-duplex-super-duplex-tubes.webp";
import RoundBars from "../../products-image/ss-duplex-super-duplex-roundbars.webp";
import Sheets from "../../products-image/ss-duplex-super-duplex-sheets.webp";
import Plates from "../../products-image/ss-duplex-super-duplex-plates.webp";
import Wires from "../../products-image/ss-duplex-super-duplex-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-duplex-super-duplex-pipes.webp";

export const materials = [
  {
    id: 1,
    name: "Duplex & Super Duplex Steel Tubes Supplier – S31803, S32750, S32760",
    image: Tubes,
    // Match karne ke liye slug aur category add kiya
    slug: "duplex-super-duplex-steel-tubes-supplier-s31803-s32750-s32760-stockist-mumbai-india",
    category: "tubes",
  },
  {
    id: 2,
    name: "Duplex & Super Duplex Steel Round Bars Supplier – S31803, S32205, S32750, S32760, S32550",
    image: RoundBars,
    slug: "duplex-super-duplex-steel-round-bars-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
    category: "round-bars",
  },
  {
    id: 3,
    name: "Duplex & Super Duplex Steel Sheets Supplier – S31803, S32205, S32750, S32760",
    image: Sheets,
    slug: "duplex-super-duplex-steel-sheets-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
    category: "sheets",
  },
  {
    id: 4,
    name: "Duplex & Super Duplex Steel Plates Supplier – S31803, S32205, S32750, S32760",
    image: Plates,
    slug: "duplex-super-duplex-steel-plates-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
    category: "plates",
  },
  {
    id: 5,
    name: "Duplex & Super Duplex Steel Wires Supplier – S31803, S32205, S32750, S32760",
    image: Wires,
    slug: "duplex-super-duplex-steel-wires-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
    category: "wires",
  },
  {
    id: 6,
    name: "Duplex & Super Duplex Steel Coils Supplier – S31803, S32205, S32750, S32760",
    image: Coils,
    slug: "duplex-super-duplex-steel-coils-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
    category: "coils",
  },
  {
    id: 7,
    name: "Duplex / Super Duplex Steel Pipes Supplier",
    image: Pipes,
    slug: "duplex-super-duplex-steel-pipes-supplier-stockist-mumbai-india",
    category: "pipes",
  },
];

export default function DuplexSteel() {
  return (
    <>
      <Helmet>
        <title>Duplex Steel Products</title>
        <meta
          name="description"
          content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
        />
      </Helmet>

      <Navbar />

      <Banner title="Duplex Steel Products" image={DuplexSteelBanner} />

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {materials.map((item) => (
              // Poora card clickable banane ke liye Link wrap kiya
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
