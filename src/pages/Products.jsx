import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import CTA from "../Components/common/CTA/CTA";
import PageBanner from "../Components/common/PageBanner/PageBanner";

import ProductGrid from "../Components/products/ProductGrid/ProductGrid";

import banner from "../assets/images/products-banner.webp";

import { Helmet } from "react-helmet-async";
function Products() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Products"
        subtitle="Premium Industrial Tubes & Pipes"
        image={banner}
      />

      <ProductGrid />

      <CTA />
      <Footer />
    </>
  );
}

export default Products;