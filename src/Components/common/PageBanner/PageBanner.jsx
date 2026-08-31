import "./PageBanner.css";
import {
  FaShieldAlt,
  FaAward,
  FaIndustry
} from "react-icons/fa";

function PageBanner({
  title,
  subtitle,
  image,
  tag = "PREMIUM QUALITY",
  description = "Trusted manufacturer and exporter serving industries worldwide.",
  children
}) {
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className="banner-overlay"></div>

      <div className="container banner-wrapper">
        <div className="banner-left">

          <span className="banner-tag">
            {tag}
          </span>

          <h1>{title}</h1>

          <h3>{subtitle}</h3>

          <p>
            {description}
          </p>

          {children && (
            <div className="banner-features">
              {children}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default PageBanner;