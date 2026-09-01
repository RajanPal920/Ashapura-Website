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
          {/* Single Container - All Information */}
          <div className="info-card">
            <div>
              <h4>
                <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                Registered Office
              </h4>
              <p>
                Building No. 58, 1st Floor, Shop No. 1,
                <br />
                1st Kumbharwada, Mumbai - 400004,
                <br />
                Maharashtra, India.
              </p>
              <h4 style={{ marginTop: "20px" }}>
                <FaEnvelope style={{ marginRight: "10px" }} />
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

              <h4 style={{ marginTop: "20px" }}>
                <FaGlobe style={{ marginRight: "10px" }} />
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
            <FaMapMarkerAlt />
            <div>
              <h4>Branch Office</h4>
              <p>
                Shree Ashapura Metal and Alloys Pvt Ltd, Building no. 60/62,
                <br />
                Shop no. 1, Khandke Building, 1st Kumbharwada Lane,
                <br />
                Mumbai 400004
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919869189991">+91 98691 89991</a>
              </p>
            </div>
          </div>

          {/* Third Container - Factory Address */}
          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Factory Address</h4>
              <p>
                Shree Ashapura Metal and Alloys Pvt Ltd, Gala no. X/5, Kasturi
                Industrial Estate,
                <br />
                Fatak Road, Bhayandar East, 101105
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
