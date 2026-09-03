import { Helmet } from "react-helmet-async";

import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import CTA from "../Components/common/CTA/CTA";

import Hero from "../Components/home/Hero/Hero";
import HeroTicker from "../Components/home/HeroTicker/HeroTicker";
import AboutPreview from "../Components/home/AboutPreview/AboutPreview";
import FeaturedProducts from "../Components/home/FeaturedProducts/FeaturedProducts";
import Stats from "../Components/home/Stats/Stats";
import Industries from "../Components/home/Industries/Industries";
import Clients from "../Components/home/Clients/Clients";
import MaterialGrades from "../Components/home/MaterialGrades/MaterialGrades";
import WhyChooseUs from "../Components/about/WhyChooseUs/WhyChooseUs";

import { approach } from "../pages/About";

function Home() {
  return (
    <>
      <Helmet>
        <title>Ashapura Metal Supplier | Stainless Steel & Alloy Stockist in Mumbai</title>
        <meta
          name="description"
          content="Ashapura Metal Supplier is a leading manufacturer, stockist, and exporter of stainless steel pipes, tubes, plates, coils, flanges, and exotic alloys in Mumbai, India."
        />
        <meta
          name="keywords"
          content="stainless steel supplier Mumbai, alloy steel stockist India, pipes tubes plates flanges, Inconel Hastelloy Monel supplier, Ashapura Metal"
        />
        <meta property="og:title" content="Ashapura Metal Supplier | Stainless Steel & Alloy Stockist" />
        <meta
          property="og:description"
          content="Trusted supplier of stainless steel, duplex, Inconel, Hastelloy, Titanium and other exotic alloys. Serving Oil & Gas, Construction and Heavy Engineering sectors since 2008."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ashapurametals.com/" />
      </Helmet>

      <Navbar />
      <Hero />
      <HeroTicker />
      <AboutPreview />
      <FeaturedProducts />
      <Stats />
      <Industries />
      <MaterialGrades />
      <Clients />
      <WhyChooseUs approach={approach} />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;