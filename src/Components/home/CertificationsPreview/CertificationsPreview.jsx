import "./CertificationsPreview.css";
import { Link } from "react-router-dom";
import nsic1 from "../../../certificates/nsic1.jpg";
import nsic2 from "../../../certificates/nsic2.jpg";
import { FaShieldAlt, FaArrowRight, FaSearchPlus } from "react-icons/fa";

const certificates = [
  {
    title: "NSIC – Govt. Purchase Enlistment",
    description: "Registered MSE unit eligible for Central Government Store Purchase Programme under the Single Point Registration Scheme.",
    image: nsic1,
    regNo: "NSIC/GP/MUM/2017/60380",
    tags: ["Govt. Certified", "MSE Unit"]
  },
  {
    title: "NSIC – Store Details Certificate",
    description: "Approved for supply of Elbows, Flanges, Sheet/Plate Cutting & Pipe Fittings as per ASTM & BIS standards in SS, MS, CS & GI grades.",
    image: nsic2,
    regNo: "NSIC/GP/MUM/2017/0031259",
    tags: ["ASTM Compliant", "BIS Standards"]
  }
];

function CertificationsPreview() {
  return (
    <section className="certificates-home">
      <div className="container">

        <div className="cert-home-layout">

          {/* Left: Heading block */}
          <div className="cert-home-left">
            <span className="cert-home-label">Quality & Compliance</span>
            <h2>Certified by<br />Government of India</h2>
            <p>
              Ashapura Metal Supplier holds official NSIC certification from the 
              National Small Industries Corporation Limited — a Government of India 
              Enterprise — confirming our compliance with national quality standards 
              and eligibility for government procurement.
            </p>
            <div className="cert-home-trust-row">
              <div className="cert-trust-item">
                <FaShieldAlt />
                <span>Govt. Registered</span>
              </div>
              <div className="cert-trust-item">
                <FaShieldAlt />
                <span>ASTM & BIS Compliant</span>
              </div>
              <div className="cert-trust-item">
                <FaShieldAlt />
                <span>NSIC Certified</span>
              </div>
            </div>
            <Link to="/certifications" className="cert-home-cta">
              View All Certifications <FaArrowRight />
            </Link>
          </div>

          {/* Right: Certificate Cards */}
          <div className="cert-home-right">
            {certificates.map((cert, i) => (
              <div key={i} className="cert-home-card">
                <div className="cert-home-card-img">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                  <div className="cert-home-card-overlay">
                    <Link to="/certifications" aria-label="View certificate">
                      <FaSearchPlus />
                    </Link>
                  </div>
                </div>
                <div className="cert-home-card-body">
                  <div className="cert-home-tags">
                    {cert.tags.map((t, j) => (
                      <span key={j} className="cert-home-tag">{t}</span>
                    ))}
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                  <span className="cert-home-regno">Reg. No: {cert.regNo}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default CertificationsPreview;
