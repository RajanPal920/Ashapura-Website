import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
      />

      <div className="product-content">

        <span>
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <Link
          to={`/products/${product.slug}`}
          className="product-btn"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;