import "./CertificateGrid.css";
import { useState } from "react";
import nsic1 from "../../../certificates/nsic1.jpg";
import nsic2 from "../../../certificates/nsic2.jpg";
import { FaShieldAlt, FaSearchPlus, FaTimes } from "react-icons/fa";

const certificates = [
  {
    image: nsic1,
    title: "NSIC Government Purchase Enlistment Certificate",
    shortTitle: "NSIC – Purchase Enlistment",
    issuer: "National Small Industries Corporation Limited",
    authority: "Government of India Enterprise",
    regNo: "NSIC/GP/MUM/2017/60380",
    validity: "06/04/2018 – 05/04/2020",
    description:
      "Certifies Shree Ashapura Metal & Alloys Pvt. Ltd. as a registered MSE unit eligible for participation in the Central Government Store Purchase Programme under the Single Point Registration Scheme.",
    tags: ["Government Certified", "MSE Registered", "Central Govt. Supply"],
    color: "#0B2F6B"
  },
  {
    image: nsic2,
    title: "NSIC Store Details Certificate",
    shortTitle: "NSIC – Store Details",
    issuer: "National Small Industries Corporation Limited",
    authority: "Government of India Enterprise",
    regNo: "NSIC/GP/MUM/2017/0031259",
    validity: "06/04/2018 – 05/04/2020",
    description:
      "Annexure to the Government Purchases Enlistment Certificate detailing approved store items including Elbows, Tees, Reducers, Flanges, Sheet/Plate Cutting, and Pipes Fitting as per ASTM & BIS standards.",
    tags: ["ASTM Standards", "BIS Compliant", "SS / MS / CS / GI Grades"],
    color: "#1a4a8a"
  }
];

function LightboxModal({ cert, onClose }) {
  return (
    <div className="cert-lightbox-overlay" onClick={onClose}>
      <div className="cert-lightbox-content" onClick={e => e.stopPropagation()}>
        <button className="cert-lightbox-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        <img src={cert.image} alt={cert.title} />
        <p className="cert-lightbox-caption">{cert.title}</p>
      </div>
    </div>
  );
}

function CertificateGrid() {
  const [lightboxCert, setLightboxCert] = useState(null);

  return (
    <section className="certifications-page-section">

      {/* Info Banner */}
      <div className="cert-info-banner">
        <div className="container">
          <div className="cert-banner-inner">
            <div className="cert-banner-icon">
              <FaShieldAlt />
            </div>
            <div className="cert-banner-text">
              <h3>Nationally Recognised. Government Certified.</h3>
              <p>
                Ashapura Metal Supplier holds official NSIC certification from the National Small Industries
                Corporation Limited — a Government of India Enterprise — validating our eligibility for
                government procurement programmes and our compliance with BIS & ASTM standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="section-heading">
          <span className="cert-label">Quality Assurance</span>
          <h2>Our Certifications</h2>
          <p>
            Every product is manufactured and inspected according to nationally and internationally
            recognised standards. Our certifications reflect our commitment to quality, compliance,
            and customer satisfaction.
          </p>
        </div>

        <div className="certifications-grid-new">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-card-new">

              {/* Image Panel */}
              <div className="cert-card-image-panel">
                <img src={cert.image} alt={cert.title} />
                <button
                  className="cert-zoom-btn"
                  onClick={() => setLightboxCert(cert)}
                  aria-label="View full certificate"
                >
                  <FaSearchPlus /> View Full Certificate
                </button>
              </div>

              {/* Content Panel */}
              <div className="cert-card-content-panel">
                <div className="cert-card-header">
                  <div className="cert-card-badge">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Nsic_logo.jpg/220px-Nsic_logo.jpg"
                      alt="NSIC Logo"
                      className="cert-issuer-logo"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <span className="cert-authority-tag">{cert.authority}</span>
                    <h3>{cert.shortTitle}</h3>
                  </div>
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="cert-meta-grid">
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Registration No.</span>
                    <span className="cert-meta-value">{cert.regNo}</span>
                  </div>
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Validity</span>
                    <span className="cert-meta-value">{cert.validity}</span>
                  </div>
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Issuing Body</span>
                    <span className="cert-meta-value">{cert.issuer}</span>
                  </div>
                </div>

                <div className="cert-tags">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="cert-tag">{tag}</span>
                  ))}
                </div>

                <button
                  className="cert-view-btn"
                  onClick={() => setLightboxCert(cert)}
                >
                  <FaSearchPlus /> View Certificate
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {lightboxCert && (
        <LightboxModal cert={lightboxCert} onClose={() => setLightboxCert(null)} />
      )}

    </section>
  );
}

export default CertificateGrid;
