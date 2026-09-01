import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import Banner from "../Components/products/Banner";
import ProductBanner from "../products-image/product-banner.webp";

import { FaTimes, FaSearch } from 'react-icons/fa';

import "../styles/Gallery.css"; // Create this file for specific gallery styles

import pipe1 from "../products-image/alloy-20-pipes.webp";
import pipe2 from "../products-image/alloy-20-pipes.webp";
import pipe3 from "../products-image/nickel-alloy-pipes-supplier.webp";
import pipe4 from "../products-image/ss-hastelloy-b2-pipes.webp";

import tube1 from "../products-image/ss-alloy-28-tubes.webp";
import tube2 from "../products-image/ss-duplex-super-duplex-tubes.webp";
import tube3 from "../products-image/ss-hastelloy-tubes.webp";
import tube4 from "../products-image/ss-highperformance-tubes.webp";

import coil1 from "../products-image/ss-coils.webp";
import coil2 from "../products-image/ss-copper-coils.webp";
import coil3 from "../products-image/ss-crcoils.webp";
import coil4 from "../products-image/ss-hrcoils.webp";

import sheet1 from "../products-image/ss-titanium-sheets.webp";
import sheet2 from "../products-image/ss-steel-sheets.webp";
import sheet3 from "../products-image/ss-highperformance-sheets.webp";
import sheet4 from "../products-image/ss-alloy-28-sheets.webp";

import roundbar1 from "../products-image/ss-titanium-roundbars.webp";
import roundbar2 from "../products-image/ss-steel-roundbars.webp";
import roundbar3 from "../products-image/ss-highperformance-roundbars.webp";
import roundbar4 from "../products-image/ss-alloy-28-roundbars.webp";

import wire1 from "../products-image/ss-titanium-wires.webp";
import wire2 from "../products-image/ss-steel-wires.webp";
import wire3 from "../products-image/ss-highperformance-wires.webp";
import wire4 from "../products-image/ss-alloy-28-wires.webp";

import plate1 from "../products-image/ss-titanium-plates.webp";
import plate2 from "../products-image/stainless-steel-304-plates.webp";
import plate3 from "../products-image/ss-high-performance-alloy-plates.webp";
import plate4 from "../products-image/ss-alloy-28-plates.webp";

import forgedfitting1 from "../products-image/ss-carbon-alloy-forged.webp";
import forgedfitting2 from "../products-image/ss-hastelloy-forged.webp";
import forgedfitting3 from "../products-image/ss-incoloy-forged.webp";
import forgedfitting4 from "../products-image/ss-inconel-forged.webp";

import buttweldfitting1 from "../products-image/ss-carbon-alloy-buttweld.webp";
import buttweldfitting2 from "../products-image/ss-carbon-alloy-buttweld.webp";
import buttweldfitting3 from "../products-image/ss-hastelloy-buttweld.webp";
import buttweldfitting4 from "../products-image/ss-incoloy-buttweld.webp";
import buttweldfitting5 from "../products-image/ss-inconel-buttweld.png";
import buttweldfitting6 from "../products-image/ss-alloy.png";
import buttweldfitting7 from "../products-image/ss-carbon.png";
import buttweldfitting8 from "../products-image/ss-carbon2.png";
import buttweldfitting9 from "../products-image/ss-copper.png";
import buttweldfitting10 from "../products-image/ss-mix-butt.png";
import buttweldfitting11 from "../products-image/ss-monel.png";
import buttweldfitting12 from "../products-image/ss-nickel.png";

import flange1 from "../products-image/ss-carbon-alloy-flanges.webp";
import flange2 from "../products-image/ss-duplex-flanges.webp";
import flange3 from "../products-image/ss-hastelloy-flanges.webp";
import flange4 from "../products-image/ss-incoloy-flanges.webp";

import fastener1 from "../products-image/ss-carbon-alloy-fasteners.webp";
import fastener2 from "../products-image/ss-hastelloy-fasteners.webp";
import fastener3 from "../products-image/ss-incoloy-fasteners.webp";
import fastener4 from "../products-image/ss-inconel-fasteners.webp";

import valve1 from "../products-image/ss-duplex-valves.webp";
import valve2 from "../products-image/ss-sanitary-valves.webp";

import pattapatti1 from "../products-image/ss-carbon-alloy-patta.webp";
import pattapatti2 from "../products-image/ss-carbon-alloy-patti.webp";
import pattapatti3 from "../products-image/ss-duplex-patti.webp";
import pattapatti4 from "../products-image/ss-steel-patta.webp";

import circle1 from "../products-image/ss-circles.webp";
import circle2 from "../products-image/ss-machined-forged-circles.webp";
import circle3 from "../products-image/ss-industrial-circles.webp";

import ring1 from "../products-image/ss-forged-rings.webp";
import ring2 from "../products-image/ss-duplex-rings.webp";
import ring3 from "../products-image/ss-nickel-alloy-rings.webp";
import ring4 from "../products-image/ss-carbon-rings.webp";


import angleChannel1 from "../products-image/ss-regular-angles.webp";
import angleChannel2 from "../products-image/ss-regular-channels.webp";
import angleChannel3 from "../products-image/ss-carbon-angles-channels.webp";

import strip1 from "../products-image/ss-strips.webp";
import strip2 from "../products-image/ss-strip-wound-hose.webp";
import strip3 from "../products-image/ss-nickel-strips.webp";


const galleryData = [
  {
    id: 1,
    src: pipe1,
    category: "pipes",
  },
  {
    id: 2,
    src: pipe2,
    category: "pipes",
  },
  {
    id: 3,
    src: pipe3,
    category: "pipes",
  },
  {
    id: 4,
    src: pipe4,
    category: "pipes",
  },
  {
    id: 5,
    src: tube1,
    category: "tubes",
  },
  {
    id: 6,
    src: tube2,
    category: "tubes",
  },
  {
    id: 7,
    src: tube3,
    category: "tubes",
  },
  {
    id: 8,
    src: tube4,
    category: "tubes",
  },
  {
    id: 9,
    src: coil1,
    category: "coils",
  },
  {
    id: 10,
    src: coil2,
    category: "coils",
  },
  {
    id: 11,
    src: coil3,
    category: "coils",
  },
  {
    id: 12,
    src: coil4,
  // title: "Global Logistics & Dispatch Area",
    category: "coils",
  },
  {
    id: 13,
    src: sheet1,
    category: "sheets",
  },
  {
    id: 14,
    src: sheet2,
    category: "sheets",
  },
  {
    id: 15,
    src: sheet3,
    category: "sheets",
  },
  {
    id: 16,
    src: sheet4,
    category: "sheets",
  },
  {
    id: 17,
    src: roundbar1,
  //  title: "Dimension Verification & QA",
    category: "round-bars",
  },
  {
    id: 18,
    src: roundbar2,
  //  title: "Dimension Verification & QA",
    category: "round-bars",
  },
  {
    id: 19,
    src: roundbar3,
  //  title: "Dimension Verification & QA",
    category: "round-bars",
  },
  {
    id: 20,
    src: roundbar4,
  //  title: "Dimension Verification & QA",
    category: "round-bars",
  },
  {
    id: 21,
    src: wire1,
  //  title: "Dimension Verification & QA",
    category: "wires",
  },
  {
    id: 22,
    src: wire2,
    category: "wires",
  },
  {
    id: 23,
    src: wire3,
    category: "wires",
  },
  {
    id: 24,
    src: wire4,
    category: "wires",
  },
  {
    id: 25,
    src: plate1,
    category: "plates",
  },
  {
    id: 26,
    src: plate2,
    category: "plates", 
  },
  {
    id: 27,
    src: plate3,
    category: "plates", 
  },
  {
    id: 28,
    src: plate4,
    category: "plates", 
  },
  {
    id: 29,
    src: forgedfitting1,
    category: "forged-fittings", 
  },
  {
    id: 30,
    src: forgedfitting2,
    category: "forged-fittings", 
  },
  {
    id: 31,
    src: forgedfitting3,
    category: "forged-fittings", 
  },
  {
    id: 32,
    src: forgedfitting4,
    category: "forged-fittings", 
  },
  {
    id: 33,
    src: buttweldfitting1,

    category: "buttweld-fittings", 
  },
  {
    id: 34,
    src: buttweldfitting2,

    category: "buttweld-fittings", 
  },
  {
    id: 35,
    src: buttweldfitting3,

    category: "buttweld-fittings", 
  },
  {
    id: 36,
    src: buttweldfitting4,

    category: "buttweld-fittings", 
  },
  {
    id:64,
    src: buttweldfitting5,

    category: "buttweld-fittings",
  },
  {
    id:65,
    src: buttweldfitting6,

    category: "buttweld-fittings",
  },
  {
    id:66,
    src: buttweldfitting7,

    category: "buttweld-fittings",
  },
  {
    id:67,
    src: buttweldfitting8,

    category: "buttweld-fittings",
  },
  {
    id:68,
    src: buttweldfitting9,

    category: "buttweld-fittings",
  },
  {
    id:69,
    src: buttweldfitting10,

    category: "buttweld-fittings",
  },
  {
    id:70,
    src: buttweldfitting11,

    category: "buttweld-fittings",
  },
  {
    id:71,
    src: buttweldfitting12,

    category: "buttweld-fittings",
  },

  {
    id: 37,
    src: flange1,

    category: "flanges", 
  },
  {
    id: 38,
    src: flange2,

    category: "flanges", 
  },
  {
    id: 39,
    src: flange3,

    category: "flanges", 
  },
  {
    id: 40,
    src: flange4,

    category: "flanges", 
  },
  {
    id: 41,
    src: fastener1,

    category: "fasteners", 
  },
  {
    id: 42,
    src: fastener2,

    category: "fasteners", 
  },
  {
    id: 43,
    src: fastener3,

    category: "fasteners", 
  },
  {
    id: 44,
    src: fastener4,

    category: "fasteners", 
  },
  {
    id: 45,
    src: valve1,

    category: "valves", 
  },
  {
    id: 46,
    src: valve2,

    category: "valves", 
  },
  
  {
    id: 47,
    src: pattapatti1,

    category: "patta-patti", 
  },
  {
    id: 48,
    src: pattapatti2,

    category: "patta-patti", 
  },
  {
    id: 49,
    src: pattapatti3,

    category: "patta-patti", 
  },
  {
    id: 50,
    src: pattapatti4,

    category: "patta-patti", 
  },
  {
    id: 51,
    src: circle1,

    category: "circles", 
  },
  {
    id: 52,
    src: circle2,

    category: "circles", 
  },
  {
    id: 53,
    src: circle3,

    category: "circles", 
  },
  {
    id: 54,
    src: ring1,

    category: "rings", 
  },
  {
    id: 55,
    src: ring2,

    category: "rings", 
  },
  {
    id: 56,
    src: ring3,

    category: "rings", 
  },
  {
    id: 57,
    src: ring4,

    category: "rings", 
  },
  {
    id: 58,
    src: angleChannel1,

    category: "angles-channels", 
  },
  {
    id: 59,
    src: angleChannel2,

    category: "angles-channels", 
  },
  {
    id: 60,
    src: angleChannel3,

    category: "angles-channels", 
  },
  
  {
    id: 61,
    src: strip1,

    category: "strips", 
  },
  {
    id: 62,
    src: strip2,

    category: "strips", 
  },
  {
    id: 63,
    src: strip3,

    category: "strips", 
  },
  
];

const categories = [
  { label: "All", value: "all" },
  { label: "Pipes", value: "pipes" },
  { label: "Tubes", value: "tubes" },
  { label: "Coils", value: "coils" },
  { label: "Sheets", value: "sheets" },
  { label: "Round Bars", value: "round-bars" },
  { label: "Wires", value: "wires" },
  { label: "Plates", value: "plates" },
  { label: "Forged Fitting", value: "forged-fittings" },
  { label: "Buttweld Fittings", value: "buttweld-fittings" },
  { label: "Flanges", value: "flanges" },
  { label: "Fasteners", value: "fasteners" },
  { label: "Valves", value: "valves" },
  { label: "Patta Patti", value: "patta-patti" },
  { label: "Circles", value: "circles" },
  { label: "Rings", value: "rings" },
  { label: "Angles & Channels", value: "angles-channels" },
  { label: "Strips", value: "strips" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === selectedCategory);

  // Open lightbox
  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Helmet>
        <title>Gallery – Ashapura Metal Supplier</title>
        <meta
          name="description"
          content="Explore our state-of-the-art manufacturing facility, product stock, quality testing labs, and export packaging processes at Ashapura Metal Supplier."
        />
      </Helmet>

      <Navbar />

      <Banner title="GALLERY" image={ProductBanner} />

      <div className="gallery-page container">
        <div className="gallery-header">
          <h2>Our Gallery</h2>
        </div>

        {/* Category Filter Buttons */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn ${
                selectedCategory === cat.value ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              className="gallery-item"
              key={image.id}
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className="gallery-overlay">
                  <FaSearch className="search-icon" />
                  <span className="gallery-title">{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="no-results">
            <p>No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox / Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h4>{lightboxImage.title}</h4>
              <span className="lightbox-category">
                {lightboxImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;