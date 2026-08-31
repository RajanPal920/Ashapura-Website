import "./ContactSection.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe
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
      body: formData
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
            Send us your requirement and our team
            will get back to you shortly.
          </p>

          <form onSubmit={onSubmit}>

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

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

            <button type="submit">
              Send Message
            </button>

          </form>
          
          <span style={{ display: 'block', marginTop: '15px', fontWeight: '500', color: result.includes('Error') ? 'red' : 'green' }}>
            {result}
          </span>

        </div>

        <div className="contact-cards">

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Registered Office</h4>
              <p>
                Building No. 58, 1st Floor, Shop No. 1, 1st Kumbharwada, Mumbai - 400004, Maharashtra, India.
              </p>

              <h4 style={{ marginTop: '15px' }}>Head Office</h4>
              <p>
                Shree Ashapura Metal and Alloys Pvt Ltd, Building no. 60/62, Shop no. 1, Khandke Building, 1st Kumbharwada Lane, Mumbai 400004
              </p>

              <h4 style={{ marginTop: '15px' }}>Factory Address</h4>
              <p>
                Shree Ashapura Metal and Alloys Pvt Ltd, Gala no. X/5, Kasturi Industrial Estate, Fatak Road, Bhayandar East, 101105
              </p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email Us</h4>
              <p><a href="mailto:sales@shreeashapurametal.com">sales@shreeashapurametal.com</a></p>
              <p><a href="mailto:shreeashapura1@gmail.com">shreeashapura1@gmail.com</a></p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Call Us</h4>
              <p><strong>Landline:</strong> <a href="tel:+912267438386">+91 22 6743 8386</a> / <a href="tel:+912266362062">+91 22 6636 2062</a></p>
              <p><strong>Mr. B. H. Jain:</strong> <a href="tel:+917666989991">+91 76669 89991</a> / <a href="tel:+919223289991">+91 92232 89991</a></p>
              <p><strong>Mr. Shyam Singh Rajput:</strong> <a href="tel:+919326883622">+91 93268 83622</a></p>
            </div>
          </div>

          <div className="info-card">
            <FaGlobe />
            <div>
              <h4>Website</h4>
              <p><a href="https://www.shreeashapurametal.com" target="_blank" rel="noreferrer">www.shreeashapurametal.com</a></p>
              <p><a href="https://www.metalsupplier.in" target="_blank" rel="noreferrer">www.metalsupplier.in</a></p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;