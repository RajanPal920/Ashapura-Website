import "./AboutPreview.css";
import about from "../../../assets/images/pmi-testing-about.webp";
import { Link } from "react-router-dom";
import { TbCheck, TbStarFilled } from "react-icons/tb";

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container about-grid">
        <div className="about-image">
          <img src={about} alt="About Shree Ashapura Metal" />

          <div className="experience-badge">
            <div className="badge-ring">
              {[...Array(15)].map((_, i) => (
                <TbStarFilled key={i} className={`badge-star star-${i}`} />
              ))}
            </div>
            <div className="badge-center">
              <h3>25+</h3>
              <span>Years<br/>Experience</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">ABOUT US</span>

          <h2>Delivering Excellence Through Precision Engineering</h2>

          <p>
            We manufacture premium quality stainless steel, alloy steel, duplex
            steel and nickel alloy products serving oil & gas, construction,
            energy, marine and process industries.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <TbCheck className="feature-icon" />
              <span>ISO Certified Manufacturing</span>
            </div>
            <div className="feature-item">
              <TbCheck className="feature-icon" />
              <span>Global Export Network</span>
            </div>
            <div className="feature-item">
              <TbCheck className="feature-icon" />
              <span>Premium Quality Products</span>
            </div>
            <div className="feature-item">
              <TbCheck className="feature-icon" />
              <span>On-Time Delivery</span>
            </div>
          </div>

          <Link to="/about" className="about-btn">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;