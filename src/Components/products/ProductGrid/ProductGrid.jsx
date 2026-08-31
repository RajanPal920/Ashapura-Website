//import products from "../../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

function ProductGrid() {
  return (
    <section className="product-grid-section">

      <div className="container">

        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductGrid;