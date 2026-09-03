import { Link } from "react-router-dom";
import "./CTA.css";
import { HashLink } from "react-router-hash-link";

function CTA() {
  return (
    <section className="cta">
      <div className="container cta-content">
        <div className="cta-text">
          <h2>
            Looking For Premium Stainless Steel Tubes & Industrial Solutions?
          </h2>

          <p>
            Contact our team today for product specifications, pricing, and
            custom manufacturing requirements.
          </p>
        </div>

        <div className="cta-buttons">
          <Link to="/contact" className="cta-primary">
            Request A Quote
          </Link>

          <HashLink to="/#products" className="cta-outline" smooth>
            View Products
          </HashLink>
        </div>
      </div>
    </section>
  );
}

export default CTA;
