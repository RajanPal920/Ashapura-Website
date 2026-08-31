import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Stainless Steel Wires product images
import ssRoundWire from "../../products-image/ss-welded-wires.webp";
import ssSquareWire from "../../products-image/ss-filler-wires.webp";
import ssFlatWire from "../../products-image/ss-bobbin-wires.webp";
import ssCoilWire from "../../products-image/ss-bright-wires.webp";
import ssCustomWire from "../../products-image/ss-cold-heading-wires.webp";
import ssSpringWire from "../../products-image/ss-rope-wires.webp";

import stainlessSteel from "../../products-image/ss-steel-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "SS 304 / 304L ROUND WIRES",
    image: ssRoundWire,
    items: [
      "SS 304 / 304L Round Wires (ASTM A580)",
      "UNS S30400 / S30403",
      "Cold Drawn & Annealed",
      "General Purpose & Food Grade",
    ],
  },
  {
    title: "SS 316 / 316L ROUND WIRES",
    image: ssRoundWire,
    items: [
      "SS 316 / 316L Round Wires (ASTM A580)",
      "UNS S31600 / S31603",
      "Molybdenum-Bearing for Superior Corrosion Resistance",
      "Marine & Chemical Grade",
    ],
  },
  {
    title: "SS 310S / 321 / 347 WIRES",
    image: ssRoundWire,
    items: [
      "SS 310S High-Temperature Wires",
      "SS 321 / 347 Stabilized Wires",
      "Excellent Oxidation & Creep Resistance",
      "For Furnace & Aerospace Applications",
    ],
  },
  {
    title: "SS 904L SUPER-AUSTENITIC WIRES",
    image: ssRoundWire,
    items: [
      "SS 904L Wires (UNS N08904)",
      "Super Austenitic Grade",
      "Superior Resistance to Pitting & SCC",
      "For Aggressive Chemical Environments",
    ],
  },
  {
    title: "SS SQUARE & FLAT WIRES",
    image: ssSquareWire,
    items: [
      "Stainless Steel Square Wires",
      "Stainless Steel Flat Wires",
      "Custom Cross-Sections",
      "For Springs & Electrical Components",
    ],
  },
  {
    title: "SS SPRING WIRES & COILS",
    image: ssSpringWire,
    items: [
      "Stainless Steel Spring Wires",
      "High Tensile Strength",
      "Spooled & Straight Lengths",
      "For Industrial Springs & Fasteners",
    ],
  },
];

const gradesData = [
  { grade: "SS 304", uns: "S30400", werkstoff: "1.4301", standard: "ASTM A580 / ASME SA580" },
  { grade: "SS 304L", uns: "S30403", werkstoff: "1.4306", standard: "ASTM A580 / ASME SA580" },
  { grade: "SS 316", uns: "S31600", werkstoff: "1.4401", standard: "ASTM A580 / ASME SA580" },
  { grade: "SS 316L", uns: "S31603", werkstoff: "1.4404", standard: "ASTM A580 / ASME SA580" },
  { grade: "SS 310S", uns: "S31008", werkstoff: "1.4845", standard: "ASTM A580 / ASME SA580" },
  { grade: "SS 321", uns: "S32100", werkstoff: "1.4541", standard: "ASTM A580 / ASME SA580" },
  { grade: "SS 347", uns: "S34700", werkstoff: "1.4550", standard: "ASTM A580 / ASME SA580" },
  { grade: "SS 904L", uns: "N08904", werkstoff: "1.4539", standard: "ASTM A580 / ASME SA580" },
];

const chemicalData = [
  { grade: "SS 304", c: "0.08 max", mn: "2.0 max", si: "1.0 max", cr: "18.0-20.0", ni: "8.0-10.5", mo: "—", other: "N: 0.10 max" },
  { grade: "SS 304L", c: "0.03 max", mn: "2.0 max", si: "1.0 max", cr: "18.0-20.0", ni: "8.0-12.0", mo: "—", other: "N: 0.10 max" },
  { grade: "SS 316", c: "0.08 max", mn: "2.0 max", si: "1.0 max", cr: "16.0-18.0", ni: "10.0-14.0", mo: "2.0-3.0", other: "N: 0.10 max" },
  { grade: "SS 316L", c: "0.03 max", mn: "2.0 max", si: "1.0 max", cr: "16.0-18.0", ni: "10.0-14.0", mo: "2.0-3.0", other: "N: 0.10 max" },
  { grade: "SS 310S", c: "0.08 max", mn: "2.0 max", si: "1.5 max", cr: "24.0-26.0", ni: "19.0-22.0", mo: "—", other: "—" },
  { grade: "SS 321", c: "0.08 max", mn: "2.0 max", si: "1.0 max", cr: "17.0-19.0", ni: "9.0-12.0", mo: "—", other: "Ti: 5(C+N) min" },
  { grade: "SS 347", c: "0.08 max", mn: "2.0 max", si: "1.0 max", cr: "17.0-19.0", ni: "9.0-13.0", mo: "—", other: "Nb+Ta: 10(C) min" },
  { grade: "SS 904L", c: "0.02 max", mn: "2.0 max", si: "1.0 max", cr: "19.0-23.0", ni: "23.0-28.0", mo: "4.0-5.0", other: "Cu: 1.0-2.0, N: 0.10 max" },
];

const mechanicalData = [
  { grade: "SS 304 / 304L", tensile: "515 MPa (75 ksi)", yield: "205 MPa (30 ksi)", elongation: "40%", density: "7.93 g/cm³" },
  { grade: "SS 316 / 316L", tensile: "515 MPa (75 ksi)", yield: "205 MPa (30 ksi)", elongation: "40%", density: "8.00 g/cm³" },
  { grade: "SS 310S", tensile: "515 MPa (75 ksi)", yield: "205 MPa (30 ksi)", elongation: "40%", density: "7.90 g/cm³" },
  { grade: "SS 321", tensile: "515 MPa (75 ksi)", yield: "205 MPa (30 ksi)", elongation: "40%", density: "7.92 g/cm³" },
  { grade: "SS 347", tensile: "515 MPa (75 ksi)", yield: "205 MPa (30 ksi)", elongation: "40%", density: "7.92 g/cm³" },
  { grade: "SS 904L", tensile: "490 MPa (71 ksi)", yield: "220 MPa (32 ksi)", elongation: "35%", density: "7.95 g/cm³" },
];

// Diameter ranges for wires (typically up to 10 mm, but can go larger)
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for stainless steel wire (density ~7.9 g/cm³)
// Formula: (d² * π/4) * density / 1000 = kg/m
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000062" },
  { dia: "0.2 mm", weight: "0.000248" },
  { dia: "0.3 mm", weight: "0.000558" },
  { dia: "0.5 mm", weight: "0.001551" },
  { dia: "0.8 mm", weight: "0.003971" },
  { dia: "1.0 mm", weight: "0.006206" },
  { dia: "1.2 mm", weight: "0.008937" },
  { dia: "1.6 mm", weight: "0.015887" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.02482" },
  { dia: "2.5 mm", weight: "0.03879" },
  { dia: "3.0 mm", weight: "0.05586" },
  { dia: "4.0 mm", weight: "0.09930" },
  { dia: "5.0 mm", weight: "0.15515" },
  { dia: "6.0 mm", weight: "0.22342" },
  { dia: "8.0 mm", weight: "0.39719" },
  { dia: "10.0 mm", weight: "0.62061" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000062" },
  { dia: "0.2 mm", weight: "0.000248" },
  { dia: "0.3 mm", weight: "0.000558" },
  { dia: "0.5 mm", weight: "0.001551" },
  { dia: "0.8 mm", weight: "0.003971" },
  { dia: "1.0 mm", weight: "0.006206" },
  { dia: "1.2 mm", weight: "0.008937" },
  { dia: "1.6 mm", weight: "0.015887" },
  { dia: "2.0 mm", weight: "0.02482" },
  { dia: "2.5 mm", weight: "0.03879" },
  { dia: "3.0 mm", weight: "0.05586" },
  { dia: "4.0 mm", weight: "0.09930" },
  { dia: "5.0 mm", weight: "0.15515" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.22342" },
  { dia: "8.0 mm", weight: "0.39719" },
  { dia: "10.0 mm", weight: "0.62061" },
  { dia: "12.0 mm", weight: "0.89367" },
  { dia: "16.0 mm", weight: "1.58875" },
  { dia: "20.0 mm", weight: "2.48245" },
  { dia: "25.0 mm", weight: "3.8788" },
  { dia: "30.0 mm", weight: "5.5855" },
  { dia: "40.0 mm", weight: "9.9298" },
  { dia: "50.0 mm", weight: "15.515" },
  { dia: "—", weight: "—" },
  { dia: "—", weight: "—" },
  { dia: "—", weight: "—" },
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
  { thickness: "0.50", weightPerM2: "3.95", size2000: "7.90", size2500: "12.34", size3000: "17.78" },
  { thickness: "1.00", weightPerM2: "7.90", size2000: "15.80", size2500: "24.69", size3000: "35.55" },
  { thickness: "1.50", weightPerM2: "11.85", size2000: "23.70", size2500: "37.03", size3000: "53.33" },
  { thickness: "2.00", weightPerM2: "15.80", size2000: "31.60", size2500: "49.38", size3000: "71.10" },
  { thickness: "3.00", weightPerM2: "23.70", size2000: "47.40", size2500: "74.06", size3000: "106.65" },
  { thickness: "4.00", weightPerM2: "31.60", size2000: "63.20", size2500: "98.75", size3000: "142.20" },
  { thickness: "5.00", weightPerM2: "39.50", size2000: "79.00", size2500: "123.44", size3000: "177.75" },
  { thickness: "6.00", weightPerM2: "47.40", size2000: "94.80", size2500: "148.13", size3000: "213.30" },
  { thickness: "8.00", weightPerM2: "63.20", size2000: "126.40", size2500: "197.50", size3000: "284.40" },
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
  "SS 304 / 304L, 316 / 316L, 310S, 321, 347, 904L Wires",
  "ASTM A580 / ASME SA580 Compliant",
  "Excellent Corrosion Resistance & Formability",
  "High-Temperature Grades Available (310S, 321, 347)",
  "Super-Austenitic 904L for Aggressive Environments",
  "Stainless Steel Wires Manufacturer in India",
];

const rightItems = [
  "ASTM A580 / ASME SA580",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved, Spring Temper",
  "Custom Cut-to-Length & Precision Machining",
  "Stainless Steel Wires Supplier in Mumbai",
];

const searchTerms = [
  "SS 304 Wire Price Per Kg",
  "Stainless Steel Wire Weight Chart",
  "SS Wire Supplier In India",
  "SS 316L Wire Specifications",
  "SS 310S Wire Price In Mumbai",
  "Stainless Steel Wire Dimensions",
  "ASTM A580 Stainless Steel Wire Specifications",
  "SS Wire Price List",
  "Stainless Steel Wire Weight Calculator",
  "SS Wire Mechanical Properties",
  "Stainless Steel Wire Stockist",
  "SS Wire Equivalent Grades",
  "SS Wire Price Per Kg In India",
  "Stainless Steel Wire Exporter",
  "SS Spring Wire Supplier",
  "Stainless Steel Wire Manufacturers In Mumbai",
  "Buy Stainless Steel Wires In India",
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

const SsWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Stainless Steel Wires Supplier – SS 304, 316, 310S, 321, 347, 904L Wires</title>
        <meta
          name="description"
          content="Leading supplier of Stainless Steel wires (304/304L, 316/316L, 310S, 321, 347, 904L) in round, square, flat, coil, and custom sizes. High corrosion resistance, formability, and strength."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="STAINLESS STEEL WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>STAINLESS STEEL WIRES SUPPLIER – GRADES 304, 316, 310S, 321, 347, 904L</h1>
            </div>
            <div className="content-image">
              <img src={stainlessSteel} alt="Stainless Steel Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>STAINLESS STEEL WIRES – VERSATILE, CORROSION-RESISTANT, AND STRONG</h2>
              <p>
                Our comprehensive range of <strong>Stainless Steel Wires</strong> covers a wide spectrum of grades, including the standard austenitic grades <strong>304/304L</strong> and <strong>316/316L</strong>, high-temperature <strong>310S</strong>, stabilized <strong>321/347</strong>, and super-austenitic <strong>904L</strong>. Stainless steel wires offer an exceptional combination of corrosion resistance, strength, formability, and durability, making them the preferred material for countless industrial applications across aerospace, automotive, medical, food processing, and marine industries.
              </p>
              <hr />
              <h3>ROUND, SQUARE, FLAT & CUSTOM STAINLESS STEEL WIRES</h3>
              <p>
                We supply stainless steel wires in <strong>round</strong>, <strong>square</strong>, <strong>flat</strong>, and <strong>custom profiles</strong>, available from 0.1 mm to 50 mm diameter (or equivalent cross-section). Our inventory includes cold-drawn, annealed, stress-relieved, and spring-tempered wires to meet the stringent demands of springs, fasteners, welding, and precision components.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Stainless steel wires are the material of choice for critical applications in <strong>automotive</strong> (fasteners, springs, cables), <strong>aerospace</strong> (control cables, structural components), <strong>medical</strong> (sutures, orthodontic wires, surgical instruments), <strong>food processing</strong> (mesh, conveyors), <strong>marine engineering</strong> (rigging, mooring), and <strong>chemical processing</strong> (electrodes, wire mesh). The wide range of grades allows engineers to match the material precisely to the environment—from general-purpose 304 to highly corrosion-resistant 904L.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our stainless steel wires are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM A580, ASME SA580</strong>. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Stainless Steel Wires</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM A580 / ASME SA580</p>
              </div>
              <div className="spec-card">
                <h4>Diameter Range</h4>
                <p>0.1 mm – 50 mm</p>
              </div>
              <div className="spec-card">
                <h4>Form</h4>
                <p>Round, Square, Flat, Coil, Straight Lengths</p>
              </div>
              <div className="spec-card">
                <h4>Finish</h4>
                <p>Cold Drawn, Annealed, Stress-Relieved, Polished</p>
              </div>
              <div className="spec-card">
                <h4>Condition</h4>
                <p>Annealed, Half Hard, Full Hard, Spring Temper</p>
              </div>
              <div className="spec-card">
                <h4>Packaging</h4>
                <p>Spools, Coils, Straight Lengths</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – STAINLESS STEEL WIRES</h2>
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
                <h2>EQUIVALENT GRADES: STAINLESS STEEL</h2>
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
                <h2>CHEMICAL COMPOSITION OF STAINLESS STEEL WIRES</h2>
              </div>
              <div className="table-responsive">
                <table className="chemical-table">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>C</th>
                      <th>Mn</th>
                      <th>Si</th>
                      <th>Cr</th>
                      <th>Ni</th>
                      <th>Mo</th>
                      <th>Other</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalData.map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.grade}</strong></td>
                        <td>{item.c}</td>
                        <td>{item.mn}</td>
                        <td>{item.si}</td>
                        <td>{item.cr}</td>
                        <td>{item.ni}</td>
                        <td>{item.mo}</td>
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
                <h2>MECHANICAL PROPERTIES OF STAINLESS STEEL WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: STAINLESS STEEL WIRES
                  <span>(ASTM A580 / ASME SA580)</span>
                </h2>
                <p>Available in Round, Square, Flat, and Custom Profiles</p>
              </div>
              <div className="table-responsive">
                <table className="thickness-table">
                  <thead>
                    <tr>
                      <th>Diameter (mm)</th>
                      <th>Availability</th>
                      <th>Diameter (mm)</th>
                      <th>Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftDia.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightDia[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: STAINLESS STEEL WIRES</h2>
              </div>
              <div className="table-responsive">
                <table className="coil-weight-table">
                  <thead>
                    <tr>
                      <th>Diameter (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                      <th>Diameter (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftWireData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.dia}</td>
                        <td>{item.weight}</td>
                        <td>{rightWireData[index].dia}</td>
                        <td>{rightWireData[index].weight}</td>
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
                <h2>STAINLESS STEEL WIRE SUPPLY RANGE (UNIFIED)</h2>
                <p>Applicable for: Round, Square, Flat wires and custom profiles</p>
              </div>
              <div className="table-responsive">
                <table className="finish-weight-table">
                  <thead>
                    <tr>
                      <th>Diameter (mm)</th>
                      <th>Weight (kg/m)</th>
                      <th>Diameter (mm)</th>
                      <th>Weight (kg/m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftWireDataNew.map((item, index) => (
                      <tr key={index}>
                        <td>{item.dia}</td>
                        <td>{item.weight}</td>
                        <td>{rightWireDataNew[index].dia}</td>
                        <td>{rightWireDataNew[index].weight}</td>
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
                <h2>UNIFIED STAINLESS STEEL WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING STAINLESS STEEL WIRES</h2>
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
                <h2>SEARCHES RELATED TO STAINLESS STEEL WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING STAINLESS STEEL WIRES</h2>
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
                  <h2>SEARCHES RELATED TO STAINLESS STEEL WIRES</h2>
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
            <p>Immediate pricing for Stainless Steel wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SsWiresDetails;
