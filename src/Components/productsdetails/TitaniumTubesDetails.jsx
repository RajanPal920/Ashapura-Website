import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Titanium Tubes product images
import tiSeamlessTubes from "../../products-image/ss-seamless-tubes.webp";
import tiWeldedTubes from "../../products-image/ss-welded-tubes.webp";
import tiErwTubes from "../../products-image/ss-erw-tubes.webp";
import tiRoundTubes from "../../products-image/ss-seamless-2-tubes.webp";
import tiSquareTubes from "../../products-image/ss-heatexchanger-tubes.webp";
import tiHollowTubes from "../../products-image/ss-hollow-tubes.webp";

import titanium from "../../products-image/ss-titanium-tubes.webp";

import "./Productsdetails.css";

const stockData = [
  {
    title: "TITANIUM GRADE 2 SEAMLESS TUBES",
    image: tiSeamlessTubes,
    items: [
      "Titanium Grade 2 Seamless Tubes (ASTM B338)",
      "UNS R50400 / 3.7035",
      "Cold Drawn & Annealed",
      "Excellent Corrosion Resistance & Formability",
    ],
  },
  {
    title: "TITANIUM GRADE 5 (Ti-6Al-4V) SEAMLESS TUBES",
    image: tiSeamlessTubes,
    items: [
      "Titanium Grade 5 Seamless Tubes (ASTM B338)",
      "UNS R56400 / 3.7165",
      "High Strength Alloy",
      "Aerospace & Medical Grade",
    ],
  },
  {
    title: "TITANIUM GRADE 7 WELDED TUBES",
    image: tiWeldedTubes,
    items: [
      "Titanium Grade 7 Welded Tubes (ASTM B338)",
      "UNS R52400 / 3.7235",
      "Palladium-Bearing for Corrosive Service",
      "ERW / EFW Titanium Tubes",
    ],
  },
  {
    title: "TITANIUM GRADE 9 / 12 ERW TUBES",
    image: tiErwTubes,
    items: [
      "Titanium Grade 9 (UNS R56320) ERW Tubes",
      "Titanium Grade 12 (UNS R53400) ERW Tubes",
      "High Strength & Corrosion Resistant",
      "Precision Welded Tubes for Structural & Heat Exchanger Use",
    ],
  },
  {
    title: "TITANIUM ROUND TUBES & HEAT EXCHANGER TUBES",
    image: tiRoundTubes,
    items: [
      "Titanium Round Tubes for Heat Exchangers",
      "Precision OD & Wall Thickness Tolerances",
      "Straight Lengths & U-Bends",
      "ASTM B338 / ASME SB338",
    ],
  },
  {
    title: "TITANIUM SQUARE & HOLLOW TUBES",
    image: tiSquareTubes,
    items: [
      "Titanium Square Tubes & Hollow Sections",
      "Custom Sizes and Wall Thicknesses",
      "Lightweight Structural Tubing",
      "Marine & Offshore Applications",
    ],
  }
];

const gradesData = [
  { grade: "Titanium Grade 1", uns: "R50250", werkstoff: "3.7025", standard: "ASTM B338 / ASME SB338" },
  { grade: "Titanium Grade 2", uns: "R50400", werkstoff: "3.7035", standard: "ASTM B338 / ASME SB338" },
  { grade: "Titanium Grade 5", uns: "R56400", werkstoff: "3.7165", standard: "ASTM B338 / ASME SB338" },
  { grade: "Titanium Grade 7", uns: "R52400", werkstoff: "3.7235", standard: "ASTM B338 / ASME SB338" },
  { grade: "Titanium Grade 9", uns: "R56320", werkstoff: "3.7195", standard: "ASTM B338 / ASME SB338" },
  { grade: "Titanium Grade 12", uns: "R53400", werkstoff: "3.7225", standard: "ASTM B338 / ASME SB338" },
];

const chemicalData = [
  { grade: "Titanium Grade 1", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.20 max", o: "0.18 max", ti: "Balance", al: "—", v: "—", other: "—" },
  { grade: "Titanium Grade 2", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.30 max", o: "0.25 max", ti: "Balance", al: "—", v: "—", other: "—" },
  { grade: "Titanium Grade 5", n: "0.05 max", c: "0.08 max", h: "0.015 max", fe: "0.40 max", o: "0.20 max", ti: "Balance", al: "5.5-6.75", v: "3.5-4.5", other: "—" },
  { grade: "Titanium Grade 7", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.30 max", o: "0.25 max", ti: "Balance", al: "—", v: "—", other: "Pd: 0.12-0.25" },
  { grade: "Titanium Grade 9", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.25 max", o: "0.15 max", ti: "Balance", al: "2.5-3.5", v: "2.0-3.0", other: "—" },
  { grade: "Titanium Grade 12", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.30 max", o: "0.25 max", ti: "Balance", al: "—", v: "—", other: "Mo: 0.2-0.4, Ni: 0.6-0.9" },
];

const mechanicalData = [
  { grade: "Titanium Grade 1", tensile: "240 MPa (35 ksi)", yield: "170 MPa (25 ksi)", elongation: "24%", density: "4.51 g/cm³" },
  { grade: "Titanium Grade 2", tensile: "345 MPa (50 ksi)", yield: "275 MPa (40 ksi)", elongation: "20%", density: "4.51 g/cm³" },
  { grade: "Titanium Grade 5", tensile: "895 MPa (130 ksi)", yield: "825 MPa (120 ksi)", elongation: "10%", density: "4.43 g/cm³" },
  { grade: "Titanium Grade 7", tensile: "345 MPa (50 ksi)", yield: "275 MPa (40 ksi)", elongation: "20%", density: "4.51 g/cm³" },
  { grade: "Titanium Grade 9", tensile: "620 MPa (90 ksi)", yield: "480 MPa (70 ksi)", elongation: "15%", density: "4.48 g/cm³" },
  { grade: "Titanium Grade 12", tensile: "345 MPa (50 ksi)", yield: "275 MPa (40 ksi)", elongation: "20%", density: "4.51 g/cm³" },
];

// Tube dimensions – OD and Wall thickness ranges (typical)
const leftOD = [
  "6 mm", "8 mm", "10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm",
];
const rightOD = [
  "25 mm", "30 mm", "35 mm", "40 mm", "50 mm", "63 mm", "80 mm", "100 mm",
];

// Approx weight per meter (kg/m) for titanium tubes (density 4.51 g/cm³) – based on wall thickness 1mm (approx)
// For simplicity, we'll use generic weight values based on OD and wall 1mm for representative data
// We'll approximate using formula: weight = (OD - wall) * wall * 0.0142 (for titanium) – but we'll just use static values for demo.
// We'll create table for wall thickness 1mm as a sample.
const leftTubeData = [
  { size: "6 mm OD x 1 mm WT", weight: "0.071" },
  { size: "8 mm OD x 1 mm WT", weight: "0.099" },
  { size: "10 mm OD x 1 mm WT", weight: "0.127" },
  { size: "12 mm OD x 1 mm WT", weight: "0.155" },
  { size: "14 mm OD x 1 mm WT", weight: "0.183" },
  { size: "16 mm OD x 1 mm WT", weight: "0.211" },
  { size: "18 mm OD x 1 mm WT", weight: "0.239" },
  { size: "20 mm OD x 1 mm WT", weight: "0.267" },
];
const rightTubeData = [
  { size: "25 mm OD x 1 mm WT", weight: "0.338" },
  { size: "30 mm OD x 1 mm WT", weight: "0.409" },
  { size: "35 mm OD x 1 mm WT", weight: "0.479" },
  { size: "40 mm OD x 1 mm WT", weight: "0.550" },
  { size: "50 mm OD x 1 mm WT", weight: "0.691" },
  { size: "63 mm OD x 1 mm WT", weight: "0.874" },
  { size: "80 mm OD x 1 mm WT", weight: "1.113" },
  { size: "100 mm OD x 1 mm WT", weight: "1.394" },
];

// Extended supply range
const leftTubeDataNew = [
  { size: "6 mm OD x 1 mm WT", weight: "0.071" },
  { size: "8 mm OD x 1 mm WT", weight: "0.099" },
  { size: "10 mm OD x 1 mm WT", weight: "0.127" },
  { size: "12 mm OD x 1 mm WT", weight: "0.155" },
  { size: "14 mm OD x 1 mm WT", weight: "0.183" },
  { size: "16 mm OD x 1 mm WT", weight: "0.211" },
  { size: "18 mm OD x 1 mm WT", weight: "0.239" },
  { size: "20 mm OD x 1 mm WT", weight: "0.267" },
  { size: "25 mm OD x 1 mm WT", weight: "0.338" },
  { size: "30 mm OD x 1 mm WT", weight: "0.409" },
  { size: "35 mm OD x 1 mm WT", weight: "0.479" },
  { size: "40 mm OD x 1 mm WT", weight: "0.550" },
  { size: "50 mm OD x 1 mm WT", weight: "0.691" },
];
const rightTubeDataNew = [
  { size: "63 mm OD x 1 mm WT", weight: "0.874" },
  { size: "80 mm OD x 1 mm WT", weight: "1.113" },
  { size: "100 mm OD x 1 mm WT", weight: "1.394" },
  { size: "125 mm OD x 1 mm WT", weight: "1.746" },
  { size: "160 mm OD x 1 mm WT", weight: "2.239" },
  { size: "200 mm OD x 1 mm WT", weight: "2.802" },
  { size: "250 mm OD x 1 mm WT", weight: "3.507" },
  { size: "300 mm OD x 1 mm WT", weight: "4.212" },
  { size: "350 mm OD x 1 mm WT", weight: "4.917" },
  { size: "400 mm OD x 1 mm WT", weight: "5.622" },
  { size: "450 mm OD x 1 mm WT", weight: "6.327" },
  { size: "500 mm OD x 1 mm WT", weight: "7.032" },
  { size: "—", weight: "—" },
];

const gaugeData = [
  { gauge: "8", inches: ".17187", mm: "4.365" },
  { gauge: "10", inches: ".14062", mm: "3.571" },
  { gauge: "12", inches: ".10937", mm: "2.778" },
  { gauge: "14", inches: ".07812", mm: "1.984" },
  { gauge: "16", inches: ".0625", mm: "1.587" },
  { gauge: "18", inches: ".050", mm: "1.270" },
  { gauge: "20", inches: ".0375", mm: ".9525" },
  { gauge: "22", inches: ".03125", mm: ".7937" },
  { gauge: "24", inches: ".025", mm: ".635" },
  { gauge: "26", inches: ".01875", mm: ".4762" },
  { gauge: "28", inches: ".01562", mm: ".3963" },
  { gauge: "30", inches: ".0125", mm: ".3175" },
];

const specialtyData = [
  { thickness: "0.50", weightPerM2: "2.25", size2000: "4.50", size2500: "7.03", size3000: "10.12" },
  { thickness: "1.00", weightPerM2: "4.50", size2000: "9.00", size2500: "14.06", size3000: "20.25" },
  { thickness: "1.50", weightPerM2: "6.75", size2000: "13.50", size2500: "21.09", size3000: "30.37" },
  { thickness: "2.00", weightPerM2: "9.00", size2000: "18.00", size2500: "28.12", size3000: "40.50" },
  { thickness: "3.00", weightPerM2: "13.50", size2000: "27.00", size2500: "42.18", size3000: "60.75" },
  { thickness: "4.00", weightPerM2: "18.00", size2000: "36.00", size2500: "56.25", size3000: "81.00" },
  { thickness: "5.00", weightPerM2: "22.50", size2000: "45.00", size2500: "70.31", size3000: "101.25" },
  { thickness: "6.00", weightPerM2: "27.00", size2000: "54.00", size2500: "84.37", size3000: "121.50" },
  { thickness: "8.00", weightPerM2: "36.00", size2000: "72.00", size2500: "112.50", size3000: "162.00" },
];

const toleranceData = [
  { thickness: "0.017 – 0.030 (0.43 – 0.76)", upTo36: "0.0015 (0.038)", upTo48: "0.002 (0.051)" },
  { thickness: "0.031 – 0.041 (0.79 – 1.04)", upTo36: "0.002 (0.051)", upTo48: "0.003 (0.076)" },
  { thickness: "0.042 – 0.059 (1.1 – 1.5)", upTo36: "0.003 (0.076)", upTo48: "0.004 (0.10)" },
  { thickness: "0.060 – 0.073 (1.5 – 1.9)", upTo36: "0.003 (0.076)", upTo48: "0.0045 (0.11)" },
  { thickness: "0.085 – 0.099 (2.2 – 2.5)", upTo36: "0.004 (0.10)", upTo48: "0.006 (0.15)" },
  { thickness: "0.116 – 0.131 (2.9 – 3.3)", upTo36: "0.005 (0.13)", upTo48: "0.0075 (0.19)" },
  { thickness: "0.147 – 0.187 (3.7 – 4.7)", upTo36: "0.007 (0.18)", upTo48: "0.0105 (0.20)" },
];

const leftItems = [
  "Titanium Grade 1, 2, 5, 7, 9, 12 Seamless & Welded Tubes",
  "ASTM B338 / ASME SB338 Compliant",
  "Lightweight – 4.5 g/cm³ (60% of Steel)",
  "Exceptional Resistance to Seawater, Chlorides, and Acids",
  "Biocompatible – Medical Grade Available (Grade 5)",
  "Titanium Tubes Manufacturer in India",
];

const rightItems = [
  "ASTM B338 / ASME SB338",
  "OD Range: 6 mm to 500 mm",
  "Wall Thickness: 0.5 mm to 25 mm",
  "Straight Lengths up to 12 m, U-Bends Available",
  "Seamless, Welded, ERW, EFW, Cold Drawn",
  "Heat Exchanger Tubes & Structural Tubes",
  "Titanium Tubes Supplier in Mumbai",
];

const searchTerms = [
  "Titanium Grade 2 Tube Price Per Kg",
  "Titanium Seamless Tube Weight Chart",
  "Titanium Tube Supplier In India",
  "Titanium Grade 5 Tube Specifications",
  "Titanium Grade 7 Tube Price In Mumbai",
  "Titanium Heat Exchanger Tubes",
  "Titanium Tube Dimensions",
  "ASTM B338 Titanium Tube Specifications",
  "Titanium Grade 9 Tube",
  "Titanium Tube Price List",
  "Titanium Tube Weight Calculator",
  "Titanium Grade 12 Tube",
  "Titanium Tube Stockist",
  "Titanium Tube Equivalent Grades",
  "Titanium Tube Price Per Kg In India",
  "Titanium Tube Exporter",
  "Titanium Welded Tube Supplier",
  "Titanium Tube Sizes",
  "Titanium Tube Schedule",
  "Titanium Grade 2 UNS R50400",
  "Titanium Tube Manufacturers In Mumbai",
  "Buy Titanium Tubes In India",
];

// Countries, Cities, Products, Materials (unchanged from previous)
const countries = [
  { name: "India", code: "IN" }, { name: "Japan", code: "JP" }, { name: "Russia", code: "RU" },
  { name: "United States", code: "US" }, { name: "Saudi Arabia", code: "SA" }, { name: "Kuwait", code: "KW" },
  { name: "Singapore", code: "SG" }, { name: "Malaysia", code: "MY" }, { name: "UAE", code: "AE" },
  { name: "Germany", code: "DE" }, { name: "Italy", code: "IT" }, { name: "China", code: "CN" },
  { name: "UK", code: "GB" }, { name: "Canada", code: "CA" }, { name: "Iran", code: "IR" },
  { name: "Thailand", code: "TH" }, { name: "South Korea", code: "KR" }, { name: "Turkey", code: "TR" },
  { name: "Morocco", code: "MA" }, { name: "Costa Rica", code: "CR" }, { name: "Kazakhstan", code: "KZ" },
  { name: "Philippines", code: "PH" }, { name: "Egypt", code: "EG" }, { name: "Vietnam", code: "VN" },
  { name: "Oman", code: "OM" }, { name: "Australia", code: "AU" }, { name: "Qatar", code: "QA" },
  { name: "Portugal", code: "PT" }, { name: "Mexico", code: "MX" }, { name: "Brazil", code: "BR" },
  { name: "France", code: "FR" }, { name: "South Africa", code: "ZA" }, { name: "Jordan", code: "JO" },
  { name: "Spain", code: "ES" }, { name: "Hong Kong", code: "HK" }, { name: "Netherlands", code: "NL" },
  { name: "Indonesia", code: "ID" }, { name: "Taiwan", code: "TW" }, { name: "Nigeria", code: "NG" },
  { name: "Bangladesh", code: "BD" }, { name: "Iraq", code: "IQ" }, { name: "Ukraine", code: "UA" },
  { name: "Poland", code: "PL" }, { name: "Romania", code: "RO" }, { name: "Cyprus", code: "CY" },
  { name: "Angola", code: "AO" }, { name: "Colombia", code: "CO" }, { name: "Norway", code: "NO" },
  { name: "Chile", code: "CL" }, { name: "Trinidad & Tobago", code: "TT" }, { name: "Greece", code: "GR" },
  { name: "Czechia", code: "CZ" }, { name: "Belgium", code: "BE" }, { name: "Sri Lanka", code: "LK" },
  { name: "Myanmar", code: "MM" }, { name: "Venezuela", code: "VE" },
];

const cityRows = [
  ["Bengaluru", "Mumbai", "Chennai", "Hyderabad", "Kolkata", "Pune"],
  ["New Delhi", "Ahmedabad", "Jaipur", "Surat", "Salem", "Gandhinagar"],
  ["Bhiwandi", "Tiruppur", "Sivakasi", "Jamnagar", "Satara", "Rajahmundry"],
  ["Bhubaneswar", "Vijaywada", "Firozabad", "Bokaro Steel City", "Rajkot", "Bharuch"],
  ["Panna", "Raipur", "Cochin", "Ludhiana", "Panipat", "Durgapur"],
  ["Peenya", "Pimpri-Chinchwad", "Channapatna", "Kharagpur", "Nashik", "Bareilly"],
  ["Varanasi", "Haldia", "Rourkela", "Patna", "Moradabad", "Indore"],
  ["Visakhapatnam", "Trivandrum", "Pithampur", "Dibrugarh", "Angul", "Gwalior"],
  ["Coimbatore", "Kannur", "Nagpur", "Vadodara", "Rudrapur", "Noida"],
  ["Agra", "Bhagalpur", "Jamshedpur", "Bhilai", "Lucknow", "Kanpur"],
];

const products = [
  { name: "Coils", link: "/products/Coils" },
  { name: "Pipes", link: "/products/Pipes" },
  { name: "Plates", link: "/products/Plates" },
  { name: "Round Bars", link: "/products/RoundBars" },
  { name: "Sheets", link: "/products/Sheets" },
  { name: "Tubes", link: "/products/Tubes" },
  { name: "Wires", link: "/products/Wires" },
  { name: "Industrial Flanges", link: "/products/IndustrialFlanges" },
  { name: "Buttweld Fittings", link: "/products/ButtweldFittings" },
  { name: "Angle & Channels", link: "/products/AngleChannelsChannels" },
  { name: "Forged Fittings", link: "/products/ForgedFittings" },
  { name: "Industrial Fasteners", link: "/products/IndustrialFasteners" },
  { name: "Industrial Valves", link: "/products/IndustrialValves" },
  { name: "Patta & Patti", link: "/products/PattaPatti" },
  { name: "Industrial Rings", link: "/products/Rings" },
  { name: "Industrial Circles", link: "/products/Circles" },
  { name: "Industrial Strips", link: "/products/Strips" }
];

const materials = [
  { name: "Copper Nickel", link: "/materials/copper-nickel" },
  { name: "Duplex Steel", link: "/materials/duplex-steel" },
  { name: "Hastelloy", link: "/materials/hastelloy" },
  { name: "Incoloy", link: "/materials/incoloy" },
  { name: "Inconel", link: "/materials/inconel" },
  { name: "Monel", link: "/materials/monel" },
  { name: "Nickel Alloy", link: "/materials/nickel-alloy" },
  { name: "Other Materials", link: "/materials/other-materials" },
  { name: "Sanicro", link: "/materials/sanicro" },
  { name: "Special Materials", link: "/materials/special-materials" },
  { name: "Stainless Steel", link: "/materials/stainless-steel" },
  { name: "Titanium", link: "/materials/titanium" },
];

const TitaniumTubesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Titanium Tubes Supplier – Seamless, Welded, ERW, Heat Exchanger Tubes</title>
        <meta
          name="description"
          content="Leading supplier of Titanium tubes (Grades 1, 2, 5, 7, 9, 12) in seamless, welded, ERW, and custom sizes. Lightweight, corrosion-resistant, biocompatible. ASTM B338 compliant."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="TITANIUM TUBES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>TITANIUM TUBES SUPPLIER – SEAMLESS, WELDED, ERW & HEAT EXCHANGER TUBES</h1>
            </div>
            <div className="content-image">
              <img src={titanium} alt="Titanium Tubes" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>TITANIUM TUBES – LIGHTWEIGHT, CORROSION-RESISTANT, AND EXTREMELY STRONG</h2>
              <p>
                Our comprehensive range of <strong>Titanium Tubes</strong> covers a wide spectrum of grades, from commercially pure titanium (Grades 1, 2, 7, 12) to high-strength alpha-beta alloys (Grades 5, 9). Titanium offers an exceptional combination of properties: a <strong>high strength-to-weight ratio</strong>, outstanding resistance to seawater, chlorides, and oxidizing acids, excellent biocompatibility, and a high melting point. This makes titanium the preferred material for the most demanding engineering applications across aerospace, marine, chemical processing, medical, and power generation industries.
              </p>
              <hr />
              <h3>SEAMLESS & WELDED TITANIUM TUBES</h3>
              <p>
                We supply Titanium tubes in <strong>seamless (ASTM B338)</strong> and <strong>welded (ASTM B338)</strong> forms, available from 6 mm OD to 500 mm OD with wall thicknesses from 0.5 mm to 25 mm. Our inventory includes cold-drawn, annealed, and precision tubes to meet the stringent demands of heat exchangers, condensers, and critical aerospace components.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Titanium tubes are the material of choice for critical applications in <strong>aerospace</strong> (hydraulic systems, airframes), <strong>marine engineering</strong> (heat exchangers, seawater piping), <strong>chemical processing</strong> (reactors, vessels), <strong>power generation</strong> (condensers), and <strong>medical implants</strong>. The unique combination of low density (4.51 g/cm³) and high strength ensures significant weight savings without compromising structural integrity or corrosion resistance.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Titanium tubes are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B338, ASME SB338</strong>. We provide comprehensive mill test certificates, PMI reports, ultrasonic inspection, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Titanium Tubes</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B338 / ASME SB338</p>
              </div>
              <div className="spec-card">
                <h4>OD Range</h4>
                <p>6 mm – 500 mm</p>
              </div>
              <div className="spec-card">
                <h4>Wall Thickness</h4>
                <p>0.5 mm – 25 mm</p>
              </div>
              <div className="spec-card">
                <h4>Length</h4>
                <p>Up to 12 meters (straight lengths), U-bends available</p>
              </div>
              <div className="spec-card">
                <h4>Form</h4>
                <p>Seamless, Welded, ERW, EFW, Cold Drawn</p>
              </div>
              <div className="spec-card">
                <h4>Finish</h4>
                <p>Mill finish, Annealed, Pickled, Polished, Bright Annealed</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – TITANIUM TUBES</h2>
              </div>
              <div className="stock-grid">
                {stockData.map((stock, index) => (
                  <div className="stock-card" key={index}>
                    <div className="stock-image-wrapper">
                      <img src={stock.image} alt={stock.title} />
                    </div>
                    <div className="stock-content">
                      <h3>{stock.title}</h3>
                      <ul>
                        {stock.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grades-section">
            <div className="container">
              <div className="section-title">
                <h2>EQUIVALENT GRADES: TITANIUM</h2>
              </div>
              <div className="table-responsive">
                <table className="grades-table">
                  <thead>
                    <tr>
                      <th>GRADE</th>
                      <th>UNS</th>
                      <th>WERKSTOFF NR.</th>
                      <th>EN / JIS / AFNOR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradesData.map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.grade}</strong></td>
                        <td>{item.uns}</td>
                        <td>{item.werkstoff}</td>
                        <td>{item.standard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="chemical-section">
            <div className="container">
              <div className="section-title">
                <h2>CHEMICAL COMPOSITION OF TITANIUM TUBES</h2>
              </div>
              <div className="table-responsive">
                <table className="chemical-table">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>N</th>
                      <th>C</th>
                      <th>H</th>
                      <th>Fe</th>
                      <th>O</th>
                      <th>Ti</th>
                      <th>Al</th>
                      <th>V</th>
                      <th>Other</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalData.map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.grade}</strong></td>
                        <td>{item.n}</td>
                        <td>{item.c}</td>
                        <td>{item.h}</td>
                        <td>{item.fe}</td>
                        <td>{item.o}</td>
                        <td>{item.ti}</td>
                        <td>{item.al}</td>
                        <td>{item.v}</td>
                        <td>{item.other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mechanical-section">
            <div className="container">
              <div className="section-title">
                <h2>MECHANICAL PROPERTIES OF TITANIUM TUBES</h2>
              </div>
              <div className="table-responsive">
                <table className="mechanical-table">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>Tensile Strength</th>
                      <th>Yield Strength (0.2%)</th>
                      <th>Elongation</th>
                      <th>Density</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mechanicalData.map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.grade}</strong></td>
                        <td>{item.tensile}</td>
                        <td>{item.yield}</td>
                        <td>{item.elongation}</td>
                        <td>{item.density}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="thickness-section">
            <div className="container">
              <div className="section-title">
                <h2>
                  OD RANGE AVAILABILITY: TITANIUM TUBES
                  <span>(ASTM B338 / ASME SB338)</span>
                </h2>
                <p>Available in Seamless & Welded forms – Round, Square, Rectangular</p>
              </div>
              <div className="table-responsive">
                <table className="thickness-table">
                  <thead>
                    <tr>
                      <th>OD (mm)</th>
                      <th>Availability</th>
                      <th>OD (mm)</th>
                      <th>Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftOD.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightOD[index]}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="coil-weight-section">
            <div className="container">
              <div className="section-title">
                <h2>UNIFIED WEIGHT CHART: TITANIUM TUBES (1 mm Wall Thickness)</h2>
              </div>
              <div className="table-responsive">
                <table className="coil-weight-table">
                  <thead>
                    <tr>
                      <th>OD (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                      <th>OD (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftTubeData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.size}</td>
                        <td>{item.weight}</td>
                        <td>{rightTubeData[index].size}</td>
                        <td>{rightTubeData[index].weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="finish-weight-section">
            <div className="container">
              <div className="section-title">
                <h2>TITANIUM TUBE SUPPLY RANGE (UNIFIED)</h2>
                <p>Applicable for: Seamless and welded round, square, rectangular, and custom hollow sections</p>
              </div>
              <div className="table-responsive">
                <table className="finish-weight-table">
                  <thead>
                    <tr>
                      <th>OD (mm) x WT (mm)</th>
                      <th>Weight (kg/m)</th>
                      <th>OD (mm) x WT (mm)</th>
                      <th>Weight (kg/m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftTubeDataNew.map((item, index) => (
                      <tr key={index}>
                        <td>{item.size}</td>
                        <td>{item.weight}</td>
                        <td>{rightTubeDataNew[index].size}</td>
                        <td>{rightTubeDataNew[index].weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gauge-chart-section">
            <div className="container">
              <div className="section-title">
                <h2>UNIFIED TITANIUM TUBE PRICE RANGE</h2>
              </div>
              <div className="table-responsive">
                <table className="gauge-table">
                  <thead>
                    <tr>
                      <th>Gauge Number</th>
                      <th>Inches</th>
                      <th>MM (Thickness)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gaugeData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.gauge}</td>
                        <td>{item.inches}</td>
                        <td>{item.mm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="specialty-weight-section">
            <div className="container">
              <div className="section-title">
                <h2>SPECIALIZED IN FOLLOWING TITANIUM TUBES</h2>
              </div>
              <div className="table-responsive">
                <table className="specialty-weight-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Thickness (mm)</th>
                      <th rowSpan="2">Weight Kg/M2</th>
                      <th colSpan="3">Size in MM (Weight per Coil/Sheet)</th>
                    </tr>
                    <tr>
                      <th>2000 X 1000</th>
                      <th>2500 X 1250</th>
                      <th>3000 X 1500</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specialtyData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.thickness}</td>
                        <td>{item.weightPerM2}</td>
                        <td>{item.size2000}</td>
                        <td>{item.size2500}</td>
                        <td>{item.size3000}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="tolerance-section">
            <div className="container">
              <div className="section-title">
                <h2>SEARCHES RELATED TO TITANIUM TUBES</h2>
              </div>
              <div className="table-responsive">
                <table className="tolerance-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Thickness in. (mm)</th>
                      <th colSpan="2">Width Tolerance in. (mm)</th>
                    </tr>
                    <tr>
                      <th>Up to 36 (914.4)</th>
                      <th>Up to 48 (1219)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toleranceData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.thickness}</td>
                        <td>{item.upTo36}</td>
                        <td>{item.upTo48}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="specialized-section">
            <div className="container">
              <div className="section-title orange-border">
                <h2>SPECIALIZED IN FOLLOWING TITANIUM TUBES</h2>
              </div>
              <div className="specialized-grid">
                <div className="specialized-column">
                  {leftItems.map((item, index) => (
                    <div className="specialized-item" key={index}>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="specialized-column">
                  {rightItems.map((item, index) => (
                    <div className="specialized-item" key={index}>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="searches-section">
            <div className="container">
              <div className="search-box">
                <div className="section-title">
                  <h2>SEARCHES RELATED TO TITANIUM TUBES</h2>
                </div>
                <p className="search-text">
                  {searchTerms.map((term, index) => (
                    <React.Fragment key={index}>
                      {term}
                      {index !== searchTerms.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </section>

          <section className="export-section">
            <div className="container">
              <div className="export-heading">
                <h2>
                  <span className="dark">COUNTRIES WE</span>{" "}
                  <span className="gold">EXPORT OUR PRODUCTS TO</span>
                </h2>
              </div>
              <div className="countries-grid">
                {countries.map((country, index) => (
                  <div className="country-item" key={index}>
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{ width: "26px", height: "26px" }}
                    />
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="cities-section">
            <div className="container">
              <div className="cities-heading">
                <h2>
                  <span className="dark">WE SUPPLY OUR PRODUCTS IN</span>{" "}
                  <span className="gold">THE FOLLOWING CITIES</span>
                </h2>
              </div>
              <div className="table-responsive">
                <table className="cities-table">
                  <tbody>
                    {cityRows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((city, colIndex) => (
                          <td key={colIndex}>{city}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        <div className="product-sidebar-wrapper">
          <aside className="product-sidebar">
            <div className="sidebar-header">
              <h3><span>OUR</span> PRODUCTS</h3>
            </div>
            <ul className="sidebar-list">
              {products.map((product, index) => (
                <li key={index}>
                  <Link to={product.link}>
                    <FaBoxOpen className="sidebar-icon" />
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <aside className="product-sidebar">
            <div className="sidebar-header">
              <h3><span>SHOP BY</span> MATERIALS</h3>
            </div>
            <ul className="sidebar-list">
              {materials.map((material, index) => (
                <li key={index}>
                  <Link to={material.link}>
                    <FaBoxOpen className="sidebar-icon" />
                    <span>{material.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="quote-card">
            <h2>GET A QUOTE</h2>
            <p>Immediate pricing for Titanium tubes. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TitaniumTubesDetails;