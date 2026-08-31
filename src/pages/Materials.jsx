import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import CTA from "../Components/common/CTA/CTA";
import PageBanner from "../Components/common/PageBanner/PageBanner";

import MaterialGrid from "../Components/products/MaterialGrid/MaterialGrid";

import banner from "../assets/images/materials-banner.webp";

import { Helmet } from "react-helmet-async";

function Materials() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Materials"
        subtitle="Premium Grades & Specifications"
        image={banner}
      />

      <MaterialGrid />

      <CTA />
      <Footer />
    </>
  );
}

export default Materials;