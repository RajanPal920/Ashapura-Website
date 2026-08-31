import "./ContactBanner.css";
import banner from "../../../assets/images/contact-banner.webp";

function ContactBanner() {
  return (
    <section
      className="contact-banner"
      style={{
        backgroundImage: `url(${banner})`
      }}
    >
      <div className="overlay"></div>

      <div className="container banner-content">

        <span>CONTACT US</span>

        <h1>
          Get In Touch With Us
        </h1>

        <p>
          Reach out for quotations, product inquiries,
          technical support and export requirements.
        </p>

      </div>
    </section>
  );
}

export default ContactBanner;