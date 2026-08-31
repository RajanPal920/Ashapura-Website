import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import Banner from "../Components/products/Banner"; // Assuming you reuse this

// IMPORTANT: Import the data array from your Material file
import { materials as StainlessSteelMaterials } from "../Components/Materials/StainlessSteel";
import { materials as TitaniumMaterials } from "../Components/Materials/Titanium";
import { materials as MonelMaterials } from "../Components/Materials/Monel";
import { materials as DuplexMaterils } from "../Components/Materials/DuplexSteel";
import { materials as CopperNickel } from "../Components/Materials/CopperNickel";
import { materials as Hastelloy } from "../Components/Materials/Hastelloy";
import { materials as Incoloy } from "../Components/Materials/Incoloy";
import { materials as Inconel } from "../Components/Materials/Inconel";
import { materials as NickelAlloy } from "../Components/Materials/NickelAlloy";
import { materials as OtherMaterials } from "../Components/Materials/OtherMaterials";
import { materials as Sanicro } from "../Components/Materials/Sanicro";
import { materials as Specialmaterils } from "../Components/Materials/SpecialMaterials";

const ProductDetails = () => {
  const { category, slug } = useParams();

  // Combine all material data into one master array
  // (Add your other imports to this array as you create them)
  const allMaterialsData = [
    ...StainlessSteelMaterials,
    ...TitaniumMaterials,
    ...MonelMaterials,
    ...DuplexMaterils,
    ...CopperNickel,
    ...Hastelloy,
    ...Inconel,
    ...Incoloy,
    ...NickelAlloy,
    ...OtherMaterials,
    ...Sanicro,
    ...Specialmaterils,
  ];

  // Find the specific product based on the slug from the URL
  const product = allMaterialsData.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
          <h1>Product Not Found</h1>
          <Link to="/materials" style={{ color: "blue" }}>
            Back to Materials
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <Navbar />

      {/* Use the product image as the banner or a generic banner */}
      <Banner
        title={product.material}
        image={product.image}
        tag={product.grades.join(", ")}
        subtitle={product.name}
      />

      <section
        className="product-details-section"
        style={{ padding: "50px 0" }}
      >
        <div className="container">
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
            {/* Left side: Image */}
            <div style={{ flex: "1", minWidth: "300px" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>

            {/* Right side: Details */}
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h1 style={{ marginBottom: "15px", color: "#003366" }}>
                {product.name}
              </h1>
              <p
                style={{
                  marginBottom: "20px",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                }}
              >
                {product.description}
              </p>

              <h3 style={{ marginBottom: "10px", color: "#003366" }}>
                Available Grades:
              </h3>
              <ul style={{ paddingLeft: "20px", marginBottom: "30px" }}>
                {product.grades.map((grade) => (
                  <li key={grade} style={{ marginBottom: "5px" }}>
                    {grade}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="product-btn"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Request a Quote
              </Link>
              <Link
                to="/materials"
                className="product-btn"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  marginLeft: "10px",
                  background: "#ccc",
                  color: "#003366",
                }}
              >
                Back to Materials
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetails;
