import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <div className="container cta-content">

        <div className="cta-text">
          <h2>
            Looking For Premium
            Stainless Steel Tubes &
            Industrial Solutions?
          </h2>

          <p>
            Contact our team today for product
            specifications, pricing, and custom
            manufacturing requirements.
          </p>
        </div>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-primary">
            Request A Quote
          </Link>

          {/* <Link to="/products/pipes" className="cta-outline">
            View Products
          </Link> */}
        </div>

      </div>

    </section>
  );
}

export default CTA;