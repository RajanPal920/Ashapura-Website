import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Company Info */}
        <div className="footer-company">
          <img src={logo} alt="Shree Ashapura Metal & Alloys" />

          <p>
            Shree Ashapura Metal & Alloys Pvt. Ltd. is a leading manufacturer,
            supplier and exporter of premium stainless steel, alloy steel,
            duplex steel, nickel alloy and industrial piping products worldwide.
          </p>

          <div className="footer-badges">
            <span>ISO 9001:2015</span>
            <span>ISO 14001:2015</span>
            <span>CE Certified</span>
          </div>

          <div className="socials">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/materials">Materials</Link>
            </li>
            <li>
              <Link to="/certifications">Certifications</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4>Our Products</h4>

          <ul>
            <li>
              <Link to="/products/coils">Coils</Link>
            </li>
            <li>
              <Link to="/products/pipes">Pipes</Link>
            </li>
            <li>
              <Link to="/products/tubes">Tubes</Link>
            </li>
            <li>
              <Link to="/products/plates">Plates</Link>
            </li>
            <li>
              <Link to="/products/sheets">Sheets</Link>
            </li>
            <li>
              <Link to="/products/round-bars">Round Bars</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>

          {/* Address - Now First */}
          <div className="contact-row">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <p>
                <strong>Regd. Office:</strong> Building No. 58, 1st Floor, Shop
                No. 1, 1st Kumbharwada, Mumbai - 400004, Maharashtra, India.
              </p>
              <p style={{ marginTop: "8px" }}>
                <strong>Branch Office:</strong> Shree Ashapura Metal and Alloys
                Pvt Ltd, Building no. 60/62, Shop no. 1, Khandke Building, 1st
                Kumbharwada Lane, Mumbai 400004
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919223289991">+91 92232 89991</a>
                </p>
              </p>
              <p style={{ marginTop: "8px" }}>
                <strong>Factory:</strong> Shree Ashapura Metal and Alloys Pvt
                Ltd, Gala no. X/5, Kasturi Industrial Estate, Fatak Road,
                Bhayandar East, 101105
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919869189991">+91 98691 89991</a>
              </p>
            </div>
          </div>

          {/* Phone Numbers - Now Second */}
          <div className="contact-row">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <div className="phone-row-footer">
                <span className="phone-label-footer">Landline:</span>
                <span className="phone-numbers-footer">
                  <a href="tel:+912267438386">+91 22 6743 8386</a>
                  <span className="separator-footer"> / </span>
                  <a href="tel:+912266362062">+91 22 6636 2062</a>
                </span>
              </div>
              <div className="phone-row-footer">
                <span className="phone-label-footer">Mr. B. H. Jain:</span>
                <span className="phone-numbers-footer">
                  <a href="tel:+917666989991">+91 76669 89991</a>
                </span>
              </div>
              <div className="phone-row-footer">
                <span className="phone-label-footer">
                  Mr. ShyamSingh Rajput:
                </span>
                <span className="phone-numbers-footer">
                  <a href="tel:+919326883622">+91 93268 83622</a>
                </span>
              </div>
            </div>
          </div>

          {/* Email - Now Third */}
          <div className="contact-row">
            <FaEnvelope className="contact-icon" />
            <div>
              <a href="mailto:sales@shreeashapurametal.com">
                sales@shreeashapurametal.com
              </a>
              <a href="mailto:shreeashapura1@gmail.com">
                shreeashapura1@gmail.com
              </a>
            </div>
          </div>

          {/* Website Links - Now Fourth */}
          <div className="contact-row">
            <FaGlobe className="contact-icon" />
            <div>
              <a
                href="https://www.shreeashapurametal.com"
                target="_blank"
                rel="noreferrer"
              >
                www.shreeashapurametal.com
              </a>
              <a
                href="https://www.metalsupplier.in"
                target="_blank"
                rel="noreferrer"
              >
                www.metalsupplier.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © 2026 Shree Ashapura Metal & Alloys Pvt. Ltd. All Rights
            Reserved.|Design and SEO by Sunmarg India.
          </p>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>

            <span>|</span>

            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
