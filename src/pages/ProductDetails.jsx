import { useParams } from "react-router-dom";
// Import your data
import products from "../pages/Products.jsx"; 

function ProductDetails() {
  const { category, slug } = useParams();

  // Find the product by both category and slug
  const product = products.find(
    (item) => item.slug === slug && item.category === category
  );

  // Handle case where product doesn't exist (404 handling)
  if (!product) {
    return <h1>Product not found for category: {category} and slug: {slug}</h1>;
  }

  return (
    <div>
      <h1>Product Page</h1>
      <h2>Category: {category}</h2>
      <h2>Product: {product.name}</h2>
      {/* Render your actual product details component/content here */}
    </div>
  );
}

export default ProductDetails;