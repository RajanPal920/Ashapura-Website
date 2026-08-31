// Components/Materials/StainlessSteel.jsx
import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";

// Use the same banner image for all materials
import MaterialBanner from "../../products-image/product-banner.webp";

// Import product images
import Tubes from "../../products-image/ss-steel-tubes.webp";
import RoundBars from "../../products-image/ss-steel-roundbars.webp";
import Sheets from "../../products-image/ss-steel-sheets.webp";
import Plates from "../../products-image/stainless-steel-304-plates.webp";
import Wires from "../../products-image/ss-steel-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-steel-pipes.webp";

export const materials = [
  {
    id: 1,
    // Updated slug to match your AppRoutes.jsx exactly
    slug: "stainless-steel-tubes-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
    name: "Stainless Steel Tubes Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    image: Tubes,
    // Updated category to 'tubes' so it hits the /products/tubes/... route
    category: "tubes",
    material: "Stainless Steel",
    grades: ["304", "304L", "316", "316L", "310S", "904L"],
    description:
      "High quality stainless steel tubes available in various grades for industrial applications.",
  },
  {
    id: 2,
    slug: "stainless-steel-round-bars-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
    name: "Stainless Steel Round Bars Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    image: RoundBars,
    category: "round-bars",
    material: "Stainless Steel",
    grades: ["304", "304L", "316", "316L", "310S", "904L"],
    description:
      "Premium stainless steel round bars for construction and engineering applications.",
  },
  {
    id: 3,
    slug: "stainless-steel-sheets-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
    name: "Stainless Steel Sheets Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    image: Sheets,
    category: "sheets",
    material: "Stainless Steel",
    grades: ["304", "304L", "316", "316L", "310S", "904L"],
    description:
      "High quality stainless steel sheets for architectural and industrial applications.",
  },
  {
    id: 4,
    slug: "stainless-steel-plates-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
    name: "Stainless Steel Plates Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    image: Plates,
    category: "plates",
    material: "Stainless Steel",
    grades: ["304", "304L", "316", "316L", "310S", "904L"],
    description:
      "Premium stainless steel plates for heavy-duty industrial applications.",
  },
  {
    id: 5,
    slug: "stainless-steel-wires-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
    name: "Stainless Steel Wires Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    image: Wires,
    category: "wires",
    material: "Stainless Steel",
    grades: ["304", "304L", "316", "316L", "310S", "904L"],
    description:
      "High quality stainless steel wires for various industrial applications.",
  },
  {
    id: 6,
    slug: "stainless-steel-coils-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
    name: "Stainless Steel Coils Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    image: Coils,
    category: "coils",
    material: "Stainless Steel",
    grades: ["304", "304L", "316", "316L", "310S", "904L"],
    description:
      "Premium stainless steel coils for automotive and construction applications.",
  },
  {
    id: 7,
    slug: "stainless-steel-310s-pipes-supplier-stockist-mumbai-india",
    name: "Stainless Steel 310S Pipes Supplier",
    image: Pipes,
    category: "pipes",
    material: "Stainless Steel",
    grades: ["310S"],
    description:
      "High quality stainless steel 310S pipes for high-temperature applications.",
  },
];

export default function StainlessSteel() {
  return (
    <>
      <Helmet>
        <title>Stainless Steel Products</title>
        <meta
          name="description"
          content="Leading manufacturer and exporter of stainless steel products."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="STAINLESS STEEL"
        image={MaterialBanner}
        tag="QUALITY ASSURANCE"
        subtitle="Premium Quality Stainless Steel Products"
      />

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {materials.map((item) => (
              // FIX: Poora card ab Link ke andar hai
              <Link
                key={item.id}
                className="product-card-link" // CSS class for styling (cursor: pointer)
                to={`/products/${item.category}/${item.slug}`}
                style={{ textDecoration: "none", color: "inherit" }} // Link ka default blue color hataya
              >
                <div className="product-card">
                  <div className="product-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="product-content">
                    <h4>{item.name}</h4>
                    {/* Button ab sirf visual hai, click poore card par hoga */}
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
