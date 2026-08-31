import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Footer.css";

import logo from "../../../assets/images/logo.webp";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Company Info */}
        <div className="footer-company">

          <img
            src={logo}
            alt="Shree Ashapura Metal & Alloys"
          />

          <p>
            Shree Ashapura Metal & Alloys Pvt. Ltd.
            is a leading manufacturer, supplier and
            exporter of premium stainless steel,
            alloy steel, duplex steel, nickel alloy
            and industrial piping products worldwide.
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

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/materials">Materials</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Products */}
        <div>

          <h4>Our Products</h4>

          <ul>

            <li><Link to="/products/coils">Coils</Link></li>
            <li><Link to="/products/pipes">Pipes</Link></li>
            <li><Link to="/products/tubes">Tubes</Link></li>
            <li><Link to="/products/plates">Plates</Link></li>
            <li><Link to="/products/sheets">Sheets</Link></li>
            <li><Link to="/products/round-bars">Round Bars</Link></li>

          </ul>

        </div>

        {/* Contact */}
        <div className="footer-contact">

          <h4>Contact Us</h4>

          <div className="contact-row">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <a href="tel:+912267438386">+91 22 6743 8386 (Landline)</a>
              <a href="tel:+917666989991">+91 76669 89991 (Mr. B.H. Jain)</a>
              <a href="tel:+919326883622">+91 93268 83622 (Mr. Shyam Singh Rajput)</a>
            </div>
          </div>

          <div className="contact-row">
            <FaEnvelope className="contact-icon" />
            <div>
              <a href="mailto:sales@shreeashapurametal.com">sales@shreeashapurametal.com</a>
              <a href="mailto:shreeashapura1@gmail.com">shreeashapura1@gmail.com</a>
            </div>
          </div>

          <div className="contact-row">
            <FaGlobe className="contact-icon" />
            <div>
              <a href="https://www.shreeashapurametal.com" target="_blank" rel="noreferrer">www.shreeashapurametal.com</a>
              <a href="https://www.metalsupplier.in" target="_blank" rel="noreferrer">www.metalsupplier.in</a>
            </div>
          </div>

          <div className="contact-row">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <p>
                <strong>Regd. Office:</strong> Building No. 58, 1st Floor, Shop No. 1, 1st Kumbharwada, Mumbai - 400004, Maharashtra, India.
              </p>
              <p style={{ marginTop: '10px' }}>
                <strong>Head Office:</strong> 14-A, Parasnath Street, Rakhial, Ahmedabad - 380023, Gujarat, India.
              </p>
              <p style={{ marginTop: '10px' }}>
                <strong>Factory:</strong> P. No. 1958, Bailbudapada, Opp. Barmashell Petrol Pump, Satiwali, Vasai (E), District Palghar, Maharashtra, India.
              </p>
            </div>
          </div>


        </div>

      </div>

      {/* Bottom Bar */}

      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © 2026 Shree Ashapura Metal & Alloys Pvt. Ltd.
            All Rights Reserved.|Design and SEO by Sunmarg India.
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