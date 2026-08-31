import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import CTA from "../Components/common/CTA/CTA";
import PageBanner from "../Components/common/PageBanner/PageBanner";
import CertificateGrid from "../Components/certifications/CertificateGrid/CertificateGrid";
import bg_banner from "../certificates/certificates-bg-img.webp";
import { FaShieldAlt, FaAward, FaIndustry } from "react-icons/fa";



function Certifications() {
  
  return (
    <>
      <Navbar />

      <PageBanner
        title="CERTIFICATIONS"
        subtitle="Quality Assured. Globally Trusted."
        image={bg_banner}
        tag="QUALITY ASSURANCE"
        description="Our certifications demonstrate our commitment to international quality standards, safety, compliance and customer satisfaction."
      >
        <div className="feature-box">
          <FaShieldAlt />
          <span>International Standards</span>
        </div>
        <div className="feature-box">
          <FaAward />
          <span>Quality Assured</span>
        </div>
        <div className="feature-box">
          <FaIndustry />
          <span>Trusted Industries</span>
        </div>
      </PageBanner>
      <CertificateGrid />
      <CTA />
      <Footer />
    </>
  );
}

export default Certifications;