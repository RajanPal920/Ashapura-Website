import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Duplex/Super Duplex Sheets product images
import duplexSheetsHR from "../../products-image/ss-hr-sheets.webp";
import duplexSheetsCR from "../../products-image/ss-cr-sheets.webp";
import duplexSheetsPolished from "../../products-image/ss-perforated-sheets.webp";


import duplexsuperduplex from "../../products-image/ss-duplex-super-duplex-sheets.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "DUPLEX S31803 / S32205 HOT ROLLED SHEETS",
    image: duplexSheetsHR,
    items: [
      "Duplex S31803 (F51) / S32205 (F60) Hot Rolled Sheets",
      "ASTM A240 / ASME SA240",
      "No.1 Finish – Industrial Fabrication",
      "High Strength & PREN ≥ 35",
    ],
  },
  {
    title: "SUPER DUPLEX S32750 / S32760 HOT ROLLED SHEETS",
    image: duplexSheetsHR,
    items: [
      "Super Duplex S32750 (F53) / S32760 (F55) Hot Rolled Sheets",
      "ASTM A240 / ASME SA240",
      "PREN ≥ 40, Superior Pitting & SCC Resistance",
      "No.1 Finish for Critical Applications",
    ],
  },
  {
    title: "DUPLEX & SUPER DUPLEX COLD ROLLED SHEETS",
    image: duplexSheetsCR,
    items: [
      "Duplex & Super Duplex Cold Rolled Sheets",
      "ASTM A240 / ASME SA240",
      "Precision Thickness Tolerances",
      "2B, BA, No.4, Mirror Finishes",
    ],
  },
  
];

const gradesData = [
  {
    grade: "Duplex S31803 (F51)",
    uns: "S31803",
    werkstoff: "1.4462",
    standard: "ASTM A240 / ASME SA240",
  },
  {
    grade: "Duplex S32205 (F60)",
    uns: "S32205",
    werkstoff: "1.4462",
    standard: "ASTM A240 / ASME SA240",
  },
  {
    grade: "Super Duplex S32750 (F53)",
    uns: "S32750",
    werkstoff: "1.4410",
    standard: "ASTM A240 / ASME SA240",
  },
  {
    grade: "Super Duplex S32760 (F55)",
    uns: "S32760",
    werkstoff: "1.4501",
    standard: "ASTM A240 / ASME SA240",
  }
];

const chemicalData = [
  {
    grade: "S31803 (F51)",
    c: "0.03 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "21.0 – 23.0",
    ni: "4.5 – 6.5",
    mo: "2.5 – 3.5",
    other: "N: 0.08-0.20, Fe: Balance",
  },
  {
    grade: "S32205 (F60)",
    c: "0.03 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "22.0 – 23.0",
    ni: "4.5 – 6.5",
    mo: "3.0 – 3.5",
    other: "N: 0.14-0.20, Fe: Balance",
  },
  {
    grade: "S32750 (F53)",
    c: "0.03 max",
    mn: "1.2 max",
    si: "0.8 max",
    cr: "24.0 – 26.0",
    ni: "6.0 – 8.0",
    mo: "3.0 – 5.0",
    other: "N: 0.24-0.32, Cu: 0.5 max, Fe: Balance",
  },
  {
    grade: "S32760 (F55)",
    c: "0.03 max",
    mn: "1.0 max",
    si: "1.0 max",
    cr: "24.0 – 26.0",
    ni: "6.0 – 8.0",
    mo: "3.0 – 4.0",
    other: "N: 0.20-0.30, W: 0.50-1.00, Cu: 0.50-1.00, Fe: Balance",
  }
];

const mechanicalData = [
  {
    grade: "S31803 (F51)",
    tensile: "620 MPa (min)",
    yield: "450 MPa (min)",
    elongation: "25%",
    density: "7.8 g/cm³",
  },
  {
    grade: "S32205 (F60)",
    tensile: "620 MPa (min)",
    yield: "450 MPa (min)",
    elongation: "25%",
    density: "7.8 g/cm³",
  },
  {
    grade: "S32750 (F53)",
    tensile: "800 MPa (min)",
    yield: "550 MPa (min)",
    elongation: "15%",
    density: "7.8 g/cm³",
  },
  {
    grade: "S32760 (F55)",
    tensile: "750 MPa (min)",
    yield: "550 MPa (min)",
    elongation: "25%",
    density: "7.8 g/cm³",
  }
];

const leftThickness = [
  "0.4 mm",
  "0.5 mm",
  "0.8 mm",
  "1.0 mm",
  "1.2 mm",
  "1.6 mm",
  "2.0 mm",
  "3.0 mm",
];

const rightThickness = [
  "4.0 mm",
  "5.0 mm",
  "6.0 mm",
  "8.0 mm",
  "10.0 mm",
  "12.0 mm",
  "16.0 mm",
  "20.0 mm / 25.0 mm",
];

// Approx weights for duplex sheets (density ~7.8 g/cm³)
const leftData = [
  { size: "2000 × 1000 × 2.0", weight: "31.2" },
  { size: "2500 × 1250 × 3.0", weight: "73.1" },
  { size: "3000 × 1500 × 4.0", weight: "140.4" },
  { size: "2000 × 1000 × 5.0", weight: "78.0" },
  { size: "2500 × 1250 × 6.0", weight: "146.3" },
  { size: "3000 × 1500 × 8.0", weight: "280.8" },
];
const rightData = [
  { size: "2000 × 1000 × 10.0", weight: "156.0" },
  { size: "2500 × 1250 × 12.0", weight: "292.5" },
  { size: "3000 × 1500 × 16.0", weight: "561.6" },
  { size: "2000 × 1000 × 20.0", weight: "312.0" },
  { size: "2500 × 1250 × 25.0", weight: "609.4" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "2000 × 1000 × 1.0", weight: "15.6" },
  { size: "2500 × 1250 × 1.5", weight: "36.6" },
  { size: "3000 × 1500 × 2.0", weight: "70.2" },
  { size: "2000 × 1000 × 3.0", weight: "46.8" },
  { size: "2500 × 1250 × 4.0", weight: "97.5" },
  { size: "3000 × 1500 × 5.0", weight: "175.5" },
  { size: "2000 × 1000 × 6.0", weight: "93.6" },
  { size: "2500 × 1250 × 8.0", weight: "195.0" },
  { size: "3000 × 1500 × 10.0", weight: "351.0" },
  { size: "4000 × 2000 × 12.0", weight: "748.8" },
  { size: "2000 × 1000 × 15.0", weight: "234.0" },
  { size: "2500 × 1250 × 20.0", weight: "487.5" },
  { size: "3000 × 1500 × 25.0", weight: "877.5" },
];
const rightDataNew = [
  { size: "4000 × 2000 × 30.0", weight: "1872.0" },
  { size: "2500 × 1250 × 40.0", weight: "975.0" },
  { size: "3000 × 1500 × 50.0", weight: "1755.0" },
  { size: "4000 × 2000 × 60.0", weight: "3744.0" },
  { size: "2500 × 1250 × 80.0", weight: "1950.0" },
  { size: "3000 × 1500 × 100.0", weight: "3510.0" },
  { size: "4000 × 2000 × 120.0", weight: "7488.0" },
  { size: "4000 × 2000 × 150.0", weight: "9360.0" },
  { size: "2500 × 1250 × 200.0", weight: "4875.0" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
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
  { thickness: "0.50", weightPerM2: "3.90", size2000: "7.80", size2500: "12.19", size3000: "17.55" },
  { thickness: "1.00", weightPerM2: "7.80", size2000: "15.60", size2500: "24.38", size3000: "35.10" },
  { thickness: "1.50", weightPerM2: "11.70", size2000: "23.40", size2500: "36.56", size3000: "52.65" },
  { thickness: "2.00", weightPerM2: "15.60", size2000: "31.20", size2500: "48.75", size3000: "70.20" },
  { thickness: "3.00", weightPerM2: "23.40", size2000: "46.80", size2500: "73.13", size3000: "105.30" },
  { thickness: "4.00", weightPerM2: "31.20", size2000: "62.40", size2500: "97.50", size3000: "140.40" },
  { thickness: "5.00", weightPerM2: "39.00", size2000: "78.00", size2500: "121.88", size3000: "175.50" },
  { thickness: "6.00", weightPerM2: "46.80", size2000: "93.60", size2500: "146.25", size3000: "210.60" },
  { thickness: "8.00", weightPerM2: "62.40", size2000: "124.80", size2500: "195.00", size3000: "280.80" },
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
  "Duplex S31803 / S32205 & Super Duplex S32750 / S32760 Sheets",
  "ASTM A240 / ASME SA240 Compliant",
  "PREN ≥ 35 (Duplex) / ≥ 40 (Super Duplex)",
  "High Yield Strength (450-550 MPa) for Weight Savings",
  "Excellent Resistance to Chloride SCC & Pitting",
  "Duplex & Super Duplex Sheets Manufacturer in India",
];

const rightItems = [
  "ASTM A240 / ASME SA240",
  "Standard Sizes: 1000x2000, 1250x2500, 1500x3000, 2000x4000",
  "Thickness Range: 0.4 mm to 100 mm",
  "No.1, 2B, BA, No.4, HL, Mirror Finishes",
  "Mill Edge & Slit Edge Supply",
  "Custom Cut-to-Length & Precision Shearing",
  "Duplex & Super Duplex Sheets Supplier in Mumbai",
];

const searchTerms = [
  "Duplex Sheet Price Per Kg",
  "Super Duplex Sheet Price Per Kg",
  "S31803 Sheet Weight Chart",
  "S32205 Sheet Supplier In India",
  "S32750 Sheet Chemical Composition",
  "Duplex Sheet Price In Mumbai",
  "Super Duplex Sheet Dimensions",
  "Duplex Sheet Specifications Pdf",
  "S31803 vs S32205 Difference",
  "Duplex Sheet Price List",
  "Duplex Sheet Weight Calculator",
  "S32760 Mechanical Properties",
  "Duplex Sheet Stockist",
  "Super Duplex S32750 Heat Treatment",
  "Duplex Sheet Price Per Kg In India",
  "S32750 1.4410",
  "S32760 1.4501",
  "Duplex Sheets Manufacturers In Mumbai",
  "Buy Duplex Sheets In India",
];

// Global data (countries, cities, products, materials) – kept unchanged
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

const DuplexSuperDuplexSheetsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Duplex & Super Duplex Steel Sheets Supplier – S31803, S32205, S32750, S32760</title>
        <meta
          name="description"
          content="Supplier of Duplex & Super Duplex steel sheets (UNS S31803, S32205, S32750, S32760) with high strength, excellent chloride SCC resistance, and PREN ≥ 35/40. Hot rolled, cold rolled, polished sheets, coils & strips available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="DUPLEX & SUPER DUPLEX STEEL SHEETS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>DUPLEX & SUPER DUPLEX STEEL SHEETS SUPPLIER – S31803, S32205, S32750, S32760</h1>
            </div>
            <div className="content-image">
              <img src={duplexsuperduplex} alt="Duplex & Super Duplex Steel Sheets" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>DUPLEX & SUPER DUPLEX STEEL SHEETS: HIGH STRENGTH AND EXCELLENT CORROSION RESISTANCE</h2>
              <p>
                Duplex stainless steels are a family of alloys with a dual‑phase microstructure of austenite and ferrite, offering a unique combination of high mechanical strength and outstanding resistance to corrosion, especially chloride‑induced stress corrosion cracking (SCC). The most common grades are <strong>S31803 (F51)</strong>, <strong>S32205 (F60)</strong> (Duplex), and <strong>S32750 (F53)</strong>, <strong>S32760 (F55)</strong> (Super Duplex). With a Pitting Resistance Equivalent Number (PREN) of ≥ 35 for Duplex and ≥ 40 for Super Duplex, these sheets are ideal for aggressive environments in offshore, marine, chemical processing, and oil & gas industries.
              </p>
              <hr />
              <h3>KEY FEATURES OF DUPLEX & SUPER DUPLEX STEEL SHEETS</h3>
              <p><strong>High Strength</strong> – Yield strength approximately twice that of conventional austenitic stainless steels, enabling reduced thickness and weight savings.</p>
              <p><strong>Excellent Corrosion Resistance</strong> – Superior resistance to pitting, crevice corrosion, and SCC in chloride‑rich environments.</p>
              <p><strong>Good Weldability & Fabricability</strong> – Can be welded with standard techniques, though care must be taken to maintain the proper ferrite‑austenite balance.</p>
              <hr />
              <h3>GRADE COMPARISON</h3>
              <p><strong>S31803 (F51)</strong> – The original duplex grade with PREN ≥ 35. Offers good resistance to localized corrosion.</p>
              <p><strong>S32205 (F60)</strong> – Enhanced version with higher chromium, molybdenum, and nitrogen, providing PREN ≥ 36 and improved pitting resistance.</p>
              <p><strong>S32750 (F53)</strong> – Super Duplex with PREN ≥ 40, offering exceptional resistance to pitting and crevice corrosion, ideal for seawater and aggressive chemical environments.</p>
              <p><strong>S32760 (F55)</strong> – Super Duplex with added tungsten for enhanced pitting resistance, PREN ≥ 40, suitable for offshore and high‑chloride applications.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Duplex & Super Duplex steel sheets conform to international standards including <strong>ASTM A240 / ASME SA240</strong> (standard specification for chromium and chromium‑nickel stainless steel plate, sheet, and strip). We supply sheets in various finishes (No.1, 2B, BA, No.4, HL, Mirror) and can custom‑cut to your exact dimensions.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Duplex & Super Duplex Steel Sheets</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM A240 / ASME SA240</p>
              </div>
              <div className="spec-card">
                <h4>Thickness Range</h4>
                <p>0.4 mm – 100 mm</p>
              </div>
              <div className="spec-card">
                <h4>Width</h4>
                <p>1000 mm – 3000 mm</p>
              </div>
              <div className="spec-card">
                <h4>Length</h4>
                <p>2000 mm – 6000 mm (Custom lengths available)</p>
              </div>
              <div className="spec-card">
                <h4>Forms</h4>
                <p>Sheets, Coils, Strips, Circles, Rings</p>
              </div>
              <div className="spec-card">
                <h4>Finish</h4>
                <p>No.1, 2B, BA, No.4, HL, Mirror, Polished</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – DUPLEX & SUPER DUPLEX STEEL SHEETS</h2>
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
                <h2>EQUIVALENT GRADES: DUPLEX & SUPER DUPLEX</h2>
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
                <h2>CHEMICAL COMPOSITION OF DUPLEX & SUPER DUPLEX STEEL SHEETS</h2>
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
                <h2>MECHANICAL PROPERTIES OF DUPLEX & SUPER DUPLEX STEEL SHEETS</h2>
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
                  THICKNESS RANGE AVAILABILITY: DUPLEX & SUPER DUPLEX STEEL SHEETS
                  <span>(ASTM A240 / ASME SA240)</span>
                </h2>
                <p>Available in Hot Rolled & Cold Rolled conditions</p>
              </div>
              <div className="table-responsive">
                <table className="thickness-table">
                  <thead>
                    <tr>
                      <th>Thickness (mm)</th>
                      <th>Availability</th>
                      <th>Thickness (mm)</th>
                      <th>Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftThickness.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightThickness[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: DUPLEX & SUPER DUPLEX STEEL SHEETS</h2>
              </div>
              <div className="table-responsive">
                <table className="coil-weight-table">
                  <thead>
                    <tr>
                      <th>Size (mm) [L x W x T]</th>
                      <th>Approx Weight (Kg)</th>
                      <th>Size (mm) [L x W x T]</th>
                      <th>Approx Weight (Kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.size}</td>
                        <td>{item.weight}</td>
                        <td>{rightData[index].size}</td>
                        <td>{rightData[index].weight}</td>
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
                <h2>DUPLEX & SUPER DUPLEX STEEL SHEET SUPPLY RANGE (UNIFIED)</h2>
                <p>Applicable for: Sheets, Coils, Strips, Circles, and Rings</p>
              </div>
              <div className="table-responsive">
                <table className="finish-weight-table">
                  <thead>
                    <tr>
                      <th>Size (mm) [L x W x T]</th>
                      <th>Weight (kg)</th>
                      <th>Size (mm) [L x W x T]</th>
                      <th>Weight (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftDataNew.map((item, index) => (
                      <tr key={index}>
                        <td>{item.size}</td>
                        <td>{item.weight}</td>
                        <td>{rightDataNew[index].size}</td>
                        <td>{rightDataNew[index].weight}</td>
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
                <h2>UNIFIED DUPLEX & SUPER DUPLEX STEEL SHEET PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING DUPLEX & SUPER DUPLEX STEEL SHEETS</h2>
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
                <h2>SEARCHES RELATED TO DUPLEX & SUPER DUPLEX STEEL SHEETS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING DUPLEX & SUPER DUPLEX STEEL SHEETS</h2>
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
                  <h2>SEARCHES RELATED TO DUPLEX & SUPER DUPLEX STEEL SHEETS</h2>
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
            <p>Immediate pricing for Duplex & Super Duplex steel sheets. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DuplexSuperDuplexSheetsDetails;