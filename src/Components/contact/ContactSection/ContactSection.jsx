import "./ContactSection.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

import { useState } from "react";

function ContactSection() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "80580855-0188-494c-8f6c-a9c844dc56c5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your message has been sent successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact-section">
      <div className="container contact-layout">
        <div className="contact-form-card">
          <h2>We'd Love To Hear From You</h2>

          <p>
            Send us your requirement and our team will get back to you shortly.
          </p>

          <form onSubmit={onSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            />

            <button type="submit">Send Message</button>
          </form>

          <span
            style={{
              display: "block",
              marginTop: "15px",
              fontWeight: "500",
              color: result.includes("Error") ? "red" : "green",
            }}
          >
            {result}
          </span>
        </div>

        <div className="contact-cards">
          {/* First Container - Registered Office + Email + Website + Call Us */}
          <div className="info-card">
            <div>
              <h4 className="contact-heading">
                <FaMapMarkerAlt className="contact-icon" />
                Registered & Head Office
              </h4>
              <p>
                Building No. 58, 1st Floor, Shop No. 1,
                <br />
                1st Kumbharwada, Mumbai - 400004,
                <br />
                Maharashtra, India.
              </p>

              {/* Call Us Section */}
              <h4 className="contact-heading" style={{ marginTop: "20px" }}>
                <FaPhoneAlt className="contact-icon" />
                Call Us
              </h4>

              <div className="phone-row">
                <span className="phone-label">Landline</span>
                <span className="phone-numbers">
                  <a href="tel:+912267438386">+91 22 6743 8386</a>
                  <span className="separator">  </span>
                  <a href="tel:+912266362062">+91 22 6636 2062</a>
                </span>
              </div>

              <div className="phone-row">
                <span className="phone-label">Mr. B. H. Jain</span>
                <span className="phone-numbers">
                  <a href="tel:+917666989991">+91 76669 89991</a>
                </span>
              </div>

              <div className="phone-row">
                <span className="phone-label">Mr. ShyamSingh Rajput</span>
                <span className="phone-numbers">
                  <a href="tel:+919326883622">+91 93268 83622</a>
                </span>
              </div>

              <h4 className="contact-heading" style={{ marginTop: "20px" }}>
                <FaEnvelope className="contact-icon" />
                Email Us
              </h4>
              <p>
                <a href="mailto:sales@shreeashapurametal.com">
                  sales@shreeashapurametal.com
                </a>
              </p>
              <p>
                <a href="mailto:shreeashapura1@gmail.com">
                  shreeashapura1@gmail.com
                </a>
              </p>

              <h4 className="contact-heading" style={{ marginTop: "20px" }}>
                <FaGlobe className="contact-icon" />
                Website
              </h4>
              <p>
                <a
                  href="https://www.shreeashapurametal.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.shreeashapurametal.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.metalsupplier.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.metalsupplier.in
                </a>
              </p>
            </div>
          </div>

          {/* Second Container - Branch Office */}
          <div className="info-card">
            <div>
              <h4 className="contact-heading">
                <FaMapMarkerAlt className="contact-icon" />
                Branch Office
              </h4>
              <p>
                Shree Ashapura Metal & Alloys Pvt Ltd, Building No. 60/62,
                <br />
                Shop No. 1, Khandke Building, 1st Kumbharwada Lane,
                <br />
                Mumbai - 400004
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919223289991">+91 92232 89991</a>
              </p>
            </div>
          </div>

          {/* Third Container - Factory Address */}
          <div className="info-card">
            <div>
              <h4 className="contact-heading">
                <FaMapMarkerAlt className="contact-icon" />
                Factory Address
              </h4>
              <p>
                Shree Ashapura Metal & Alloys Pvt Ltd, Gala No. X/5, Kasturi
                Industrial Estate,
                <br />
                Fatak Road, Bhayandar East - 401105
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919869189991">+91 98691 89991</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
