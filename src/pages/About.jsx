import { useEffect, useRef } from "react";

import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import CTA from "../Components/common/CTA/CTA";
import PageBanner from "../Components/common/PageBanner/PageBanner";

import CompanyOverview from "../Components/about/CompanyOverview/CompanyOverview";
import MissionVision from "../Components/about/MissionVision/MissionVision";
import Timeline from "../Components/about/Timeline/Timeline";
import Facility from "../Components/about/Facility/Facility";
import WhyChooseUs from "../Components/about/WhyChooseUs/WhyChooseUs";

import banner from "../assets/images/about-banner.webp";

import { Helmet } from "react-helmet-async";
import { FaBuilding, FaGlobe, FaHandshake } from "react-icons/fa";

export const stats = [
  { value: 25, suffix: "+", label: "Years Exp." },
  { value: 500, suffix: "+", label: "Projects" },
  { value: 100, suffix: "%", label: "Quality" },
];

export const milestones = [
  {
    year: "2013",
    title: "Foundation",
    desc: "Established in Mumbai with a core focus on trading premium stainless steel and alloy components.",
  },
  {
    year: "2015",
    title: "Product Expansion",
    desc: "Diversified portfolio to include Flanges, Forged Fittings, High-Pressure Valves, and Duplex Steel.",
  },
  {
    year: "2019",
    title: "Major Projects",
    desc: "Secured first major contracts with leading EPC companies and expanded warehouse capabilities pan-India.",
  },
  {
    year: "2021",
    title: "Export Network",
    desc: "Commenced exports to Middle East, Europe, and Southeast Asia with 48-hour dispatch capabilities.",
  },
  {
    year: "2023+",
    title: "Industry Leader",
    desc: "Recognized as a preferred vendor for PSU and Oil & Gas projects, supplying Inconel, Hastelloy & Titanium grades.",
  },
];

export const whatWeDo = [
  {
    heading: "Core Roles",
    items: ["Manufacturer & Stockist", "Importer & Exporter", "Project Supplier", "Third-Party Inspection Support"],
  },
  {
    heading: "Product Portfolio",
    items: ["Pipes & Tubes (Seamless/ERW)", "Buttweld & Forged Fittings", "Industrial Flanges", "Sheets, Plates & Coils"],
  },
  {
    heading: "Materials",
    items: ["Stainless Steel", "Duplex & Super Duplex", "Inconel, Hastelloy, Monel", "Titanium & Copper Nickel"],
  },
];

export const approach = [
  {
    num: "01",
    title: "Uncompromised Quality",
    desc: "Every product that leaves our warehouse undergoes rigorous testing to meet IS, ASTM, and DIN standards.",
  },
  {
    num: "02",
    title: "Reliable Delivery",
    desc: "We understand downtime costs. Our logistics network ensures materials reach your site exactly when needed.",
  },
  {
    num: "03",
    title: "Ethical Business",
    desc: "Transparency in pricing, clarity in documentation, and honesty in dealings build our long-term relationships.",
  },
];

export function CountUp({ target, suffix }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Ashapura Metal Supplier</title>
        <meta
          name="description"
          content="Learn about Ashapura Metal Supplier, a trusted manufacturer and supplier of stainless steel tubes, pipes, coils, plates and industrial materials."
        />
      </Helmet>

      <Navbar />

      {/* 1. Page Banner — hero strip with title + breadcrumb */}
      <PageBanner
        title="About Us"
        subtitle="Engineering Excellence Since 2013"
        image={banner}
        tag="ABOUT US"
        description="Ashapura Metal Supplier is a premier manufacturer and stockist of premium stainless steel, alloy steel, and non-ferrous products."
      >
        <div className="feature-box">
          <FaBuilding />
          <span>Mumbai HQ</span>
        </div>
        <div className="feature-box">
          <FaGlobe />
          <span>Global Reach</span>
        </div>
        <div className="feature-box">
          <FaHandshake />
          <span>Trusted Partner</span>
        </div>
      </PageBanner>

      {/* 2. Company Overview — journey text + animated stats + factory image */}
      <CompanyOverview stats={stats} CountUp={CountUp} />

      {/* 3. Mission & Vision */}
      <MissionVision />

      {/* 4. Timeline — alternating milestone list */}
      <Timeline milestones={milestones} />

      {/* 5. Facility / What We Do — 3-column capability cards */}
      <Facility whatWeDo={whatWeDo} />

      {/* 6. Why Choose Us — numbered approach cards on dark background */}
      <WhyChooseUs approach={approach} />

      {/* 7. CTA — gold banner with View Products + Contact Us */}
      <CTA />

      <Footer />
    </>
  );
}

export default About;