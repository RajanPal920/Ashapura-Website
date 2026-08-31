import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Titanium Wires product images
import tiRoundWire from "../../products-image/ss-welded-wires.webp";
import tiSquareWire from "../../products-image/ss-filler-wires.webp";
import tiFlatWire from "../../products-image/ss-bobbin-wires.webp";
import tiCoilWire from "../../products-image/ss-bright-wires.webp";
import tiCustomWire from "../../products-image/ss-cold-heading-wires.webp";
import tiWeldingWire from "../../products-image/ss-rope-wires.webp";

import titanium from "../../products-image/ss-titanium-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "TITANIUM GRADE 2 ROUND WIRES",
    image: tiRoundWire,
    items: [
      "Titanium Grade 2 Round Wires (ASTM B348 / B863)",
      "UNS R50400 / 3.7035",
      "Cold Drawn & Annealed",
      "Excellent Corrosion Resistance & Formability",
    ],
  },
  {
    title: "TITANIUM GRADE 5 (Ti-6Al-4V) WIRES",
    image: tiRoundWire,
    items: [
      "Titanium Grade 5 Round Wires (ASTM B348 / B863)",
      "UNS R56400 / 3.7165",
      "High Strength Alloy",
      "Aerospace & Medical Grade",
    ],
  },
  {
    title: "TITANIUM GRADE 7 WIRES",
    image: tiRoundWire,
    items: [
      "Titanium Grade 7 Wires (ASTM B348 / B863)",
      "UNS R52400 / 3.7235",
      "Palladium-Bearing for Corrosive Service",
      "Superior Resistance to Reducing Acids",
    ],
  },
  {
    title: "TITANIUM GRADE 9 / 12 WIRES",
    image: tiRoundWire,
    items: [
      "Titanium Grade 9 (UNS R56320) Wires",
      "Titanium Grade 12 (UNS R53400) Wires",
      "High Strength & Corrosion Resistant",
      "For Aerospace & Marine Applications",
    ],
  },
  {
    title: "TITANIUM SQUARE & FLAT WIRES",
    image: tiSquareWire,
    items: [
      "Titanium Square Wires & Flat Wires",
      "Custom Cross-Sections",
      "Precision Cold Drawn",
      "For Springs & Electrical Components",
    ],
  },
  {
    title: "TITANIUM WELDING WIRES & COILS",
    image: tiWeldingWire,
    items: [
      "Titanium Welding Wires (AWS A5.16)",
      "ER Ti-2, ER Ti-5, ER Ti-7, ER Ti-9",
      "Spooled & Straight Lengths",
      "For TIG & MIG Welding",
    ],
  },
];

const gradesData = [
  { grade: "Titanium Grade 1", uns: "R50250", werkstoff: "3.7025", standard: "ASTM B348 / B863" },
  { grade: "Titanium Grade 2", uns: "R50400", werkstoff: "3.7035", standard: "ASTM B348 / B863" },
  { grade: "Titanium Grade 5", uns: "R56400", werkstoff: "3.7165", standard: "ASTM B348 / B863" },
  { grade: "Titanium Grade 7", uns: "R52400", werkstoff: "3.7235", standard: "ASTM B348 / B863" },
  { grade: "Titanium Grade 9", uns: "R56320", werkstoff: "3.7195", standard: "ASTM B348 / B863" },
  { grade: "Titanium Grade 12", uns: "R53400", werkstoff: "3.7225", standard: "ASTM B348 / B863" },
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

// Diameter ranges for wires (typically up to 10 mm)
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for titanium wire (density 4.51 g/cm³) – formula: (d² * π/4) * density / 1000 = kg/m
// We'll provide representative values for sample diameters
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000035" },
  { dia: "0.2 mm", weight: "0.000142" },
  { dia: "0.3 mm", weight: "0.000319" },
  { dia: "0.5 mm", weight: "0.000886" },
  { dia: "0.8 mm", weight: "0.002268" },
  { dia: "1.0 mm", weight: "0.003544" },
  { dia: "1.2 mm", weight: "0.005104" },
  { dia: "1.6 mm", weight: "0.009072" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.01418" },
  { dia: "2.5 mm", weight: "0.02215" },
  { dia: "3.0 mm", weight: "0.03190" },
  { dia: "4.0 mm", weight: "0.05671" },
  { dia: "5.0 mm", weight: "0.08861" },
  { dia: "6.0 mm", weight: "0.1276" },
  { dia: "8.0 mm", weight: "0.2268" },
  { dia: "10.0 mm", weight: "0.3544" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000035" },
  { dia: "0.2 mm", weight: "0.000142" },
  { dia: "0.3 mm", weight: "0.000319" },
  { dia: "0.5 mm", weight: "0.000886" },
  { dia: "0.8 mm", weight: "0.002268" },
  { dia: "1.0 mm", weight: "0.003544" },
  { dia: "1.2 mm", weight: "0.005104" },
  { dia: "1.6 mm", weight: "0.009072" },
  { dia: "2.0 mm", weight: "0.01418" },
  { dia: "2.5 mm", weight: "0.02215" },
  { dia: "3.0 mm", weight: "0.03190" },
  { dia: "4.0 mm", weight: "0.05671" },
  { dia: "5.0 mm", weight: "0.08861" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.1276" },
  { dia: "8.0 mm", weight: "0.2268" },
  { dia: "10.0 mm", weight: "0.3544" },
  { dia: "12.0 mm", weight: "0.5104" },
  { dia: "16.0 mm", weight: "0.9072" },
  { dia: "20.0 mm", weight: "1.418" },
  { dia: "25.0 mm", weight: "2.215" },
  { dia: "30.0 mm", weight: "3.190" },
  { dia: "40.0 mm", weight: "5.671" },
  { dia: "50.0 mm", weight: "8.861" },
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
  "Titanium Grade 1, 2, 5, 7, 9, 12 Round Wires",
  "Titanium Square, Flat & Custom Profile Wires",
  "ASTM B348 / B863 Compliant",
  "Lightweight – 4.5 g/cm³ (60% of Steel)",
  "Exceptional Resistance to Seawater, Chlorides, and Acids",
  "Biocompatible – Medical Grade Available (Grade 5)",
  "Titanium Wires Manufacturer in India",
];

const rightItems = [
  "ASTM B348 / B863 / ASME SB348 / SB863",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved",
  "TIG & MIG Welding Wires (AWS A5.16)",
  "Custom Cut-to-Length & Precision Machining",
  "Titanium Wires Supplier in Mumbai",
];

const searchTerms = [
  "Titanium Grade 2 Wire Price Per Kg",
  "Titanium Wire Weight Chart",
  "Titanium Wire Supplier In India",
  "Titanium Grade 5 Wire Specifications",
  "Titanium Grade 7 Wire Price In Mumbai",
  "Titanium Wire Dimensions",
  "ASTM B348 Titanium Wire Specifications",
  "Titanium Wire Price List",
  "Titanium Wire Weight Calculator",
  "Titanium Wire Mechanical Properties",
  "Titanium Wire Stockist",
  "Titanium Wire Equivalent Grades",
  "Titanium Wire Price Per Kg In India",
  "Titanium Wire Exporter",
  "Titanium Welding Wire Supplier",
  "Titanium Wire Manufacturers In Mumbai",
  "Buy Titanium Wires In India",
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

const TitaniumWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Titanium Wires Supplier – Grade 1, 2, 5, 7, 9, 12 Wires</title>
        <meta
          name="description"
          content="Leading supplier of Titanium wires (Grades 1, 2, 5, 7, 9, 12) in round, square, flat, coil, and custom sizes. Lightweight, corrosion-resistant, biocompatible. ASTM B348/B863 compliant."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="TITANIUM WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>TITANIUM WIRES SUPPLIER – GRADES 1, 2, 5, 7, 9, 12 – ROUND, SQUARE, FLAT & CUSTOM</h1>
            </div>
            <div className="content-image">
              <img src={titanium} alt="Titanium Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>TITANIUM WIRES – LIGHTWEIGHT, CORROSION-RESISTANT, AND EXTREMELY STRONG</h2>
              <p>
                Our comprehensive range of <strong>Titanium Wires</strong> covers a wide spectrum of grades, from commercially pure titanium (Grades 1, 2, 7, 12) to high-strength alpha-beta alloys (Grades 5, 9). Titanium offers an exceptional combination of properties: a <strong>high strength-to-weight ratio</strong>, outstanding resistance to seawater, chlorides, and oxidizing acids, excellent biocompatibility, and a high melting point. This makes titanium the preferred material for the most demanding engineering applications across aerospace, marine, chemical processing, medical, and power generation industries.
              </p>
              <hr />
              <h3>ROUND, SQUARE, FLAT & CUSTOM TITANIUM WIRES</h3>
              <p>
                We supply Titanium wires in <strong>round</strong>, <strong>square</strong>, <strong>flat</strong>, and <strong>custom profiles</strong>, available from 0.1 mm to 50 mm diameter (or equivalent cross-section). Our inventory includes cold-drawn, annealed, and stress-relieved wires to meet the stringent demands of springs, fasteners, welding, and medical implants.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Titanium wires are the material of choice for critical applications in <strong>aerospace</strong> (fasteners, springs, structural components), <strong>medical</strong> (sutures, orthodontic wires, implants), <strong>marine engineering</strong> (seawater systems), <strong>chemical processing</strong> (electrodes, mesh), and <strong>welding</strong> (TIG & MIG filler wires). The unique combination of low density (4.51 g/cm³) and high strength ensures significant weight savings without compromising structural integrity or corrosion resistance.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Titanium wires are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B348, B863, ASME SB348, SB863</strong>, and <strong>AWS A5.16</strong> for welding wires. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Titanium Wires</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B348 / B863; ASME SB348 / SB863</p>
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
                <p>Annealed, Half Hard, Full Hard</p>
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
                <h2>READY STOCK AVAILABILITY – TITANIUM WIRES</h2>
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
                <h2>CHEMICAL COMPOSITION OF TITANIUM WIRES</h2>
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
                <h2>MECHANICAL PROPERTIES OF TITANIUM WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: TITANIUM WIRES
                  <span>(ASTM B348 / B863)</span>
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
                <h2>UNIFIED WEIGHT CHART: TITANIUM WIRES</h2>
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
                <h2>TITANIUM WIRE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED TITANIUM WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING TITANIUM WIRES</h2>
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
                <h2>SEARCHES RELATED TO TITANIUM WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING TITANIUM WIRES</h2>
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
                  <h2>SEARCHES RELATED TO TITANIUM WIRES</h2>
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
            <p>Immediate pricing for Titanium wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TitaniumWiresDetails;