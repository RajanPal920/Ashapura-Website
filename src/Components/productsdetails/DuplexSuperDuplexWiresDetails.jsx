import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Duplex / Super Duplex Wires product images
import duplexRoundWire from "../../products-image/ss-welded-wires.webp";
import duplexSquareWire from "../../products-image/ss-filler-wires.webp";
import duplexFlatWire from "../../products-image/ss-bobbin-wires.webp";
import duplexCoilWire from "../../products-image/ss-bright-wires.webp";
import duplexCustomWire from "../../products-image/ss-cold-heading-wires.webp";
import duplexWeldingWire from "../../products-image/ss-rope-wires.webp";

import duplex from "../../products-image/ss-duplex-super-duplex-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "DUPLEX S31803 / S32205 ROUND WIRES",
    image: duplexRoundWire,
    items: [
      "Duplex S31803 / S32205 (2205) Round Wires (ASTM A580)",
      "UNS S31803 / S32205",
      "Cold Drawn & Annealed",
      "High Strength & Excellent Pitting Resistance (PRE ≥ 35)",
    ],
  },
  {
    title: "SUPER DUPLEX S32750 / S32760 ROUND WIRES",
    image: duplexRoundWire,
    items: [
      "Super Duplex S32750 (F53) / S32760 (F55) Round Wires (ASTM A580)",
      "UNS S32750 / S32760",
      "Ultra-High Strength & Pitting Resistance (PRE ≥ 40)",
      "For Offshore, Marine & Chemical Applications",
    ],
  },
  {
    title: "DUPLEX / SUPER DUPLEX SQUARE & FLAT WIRES",
    image: duplexSquareWire,
    items: [
      "Duplex / Super Duplex Square Wires",
      "Duplex / Super Duplex Flat Wires",
      "Custom Cross-Sections",
      "For Springs & Electrical Components",
    ],
  },
  {
    title: "DUPLEX / SUPER DUPLEX WELDING WIRES",
    image: duplexWeldingWire,
    items: [
      "Duplex 2205 / Super Duplex Welding Wires (AWS A5.9)",
      "ER2209 (Duplex), ER2594 (Super Duplex)",
      "Spooled & Straight Lengths",
      "For TIG & MIG Welding",
    ],
  },
  {
    title: "DUPLEX / SUPER DUPLEX COIL WIRES",
    image: duplexCoilWire,
    items: [
      "Duplex / Super Duplex Coil Wires",
      "Continuous Lengths",
      "Precision Wound on Spools",
      "For Industrial & Commercial Applications",
    ],
  },
  {
    title: "DUPLEX / SUPER DUPLEX CUSTOM WIRES",
    image: duplexCustomWire,
    items: [
      "Custom Cut-to-Length Wires",
      "Precision Cold Drawn",
      "Diameter: 0.1 mm to 50 mm",
      "Any Size, Any Finish, Fast Delivery",
    ],
  },
];

const gradesData = [
  { grade: "Duplex S31803", uns: "S31803", werkstoff: "1.4462", standard: "ASTM A580 / ASME SA580" },
  { grade: "Duplex S32205 (2205)", uns: "S32205", werkstoff: "1.4462", standard: "ASTM A580 / ASME SA580" },
  { grade: "Super Duplex S32750 (F53)", uns: "S32750", werkstoff: "1.4410", standard: "ASTM A580 / ASME SA580" },
  { grade: "Super Duplex S32760 (F55)", uns: "S32760", werkstoff: "1.4501", standard: "ASTM A580 / ASME SA580" },
];

const chemicalData = [
  { grade: "Duplex S31803 / S32205 (2205)", c: "0.030 max", mn: "2.00 max", si: "1.00 max", cr: "22.0-23.0", ni: "4.5-6.5", mo: "3.0-3.5", other: "N: 0.14-0.20, P: 0.030 max, S: 0.020 max" },
  { grade: "Super Duplex S32750 (F53)", c: "0.030 max", mn: "1.20 max", si: "0.80 max", cr: "24.0-26.0", ni: "6.0-8.0", mo: "3.0-5.0", other: "N: 0.24-0.32, P: 0.035 max, S: 0.020 max, Cu: 0.50 max" },
  { grade: "Super Duplex S32760 (F55)", c: "0.030 max", mn: "1.00 max", si: "1.00 max", cr: "24.0-26.0", ni: "6.0-8.0", mo: "3.0-4.0", other: "N: 0.20-0.30, Cu: 0.50-1.00, W: 0.50-1.00, P: 0.030 max, S: 0.010 max" },
];

const mechanicalData = [
  { grade: "Duplex S31803 / S32205", tensile: "620 MPa (90 ksi) min", yield: "450 MPa (65 ksi) min", elongation: "25%", density: "7.8 g/cm³" },
  { grade: "Super Duplex S32750 / S32760", tensile: "800 MPa (116 ksi) min", yield: "550 MPa (80 ksi) min", elongation: "15%", density: "7.8 g/cm³" },
];

// Diameter ranges for wires
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for duplex/super duplex wires (density ~7.8 g/cm³)
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000061" },
  { dia: "0.2 mm", weight: "0.000245" },
  { dia: "0.3 mm", weight: "0.000551" },
  { dia: "0.5 mm", weight: "0.001532" },
  { dia: "0.8 mm", weight: "0.003922" },
  { dia: "1.0 mm", weight: "0.006127" },
  { dia: "1.2 mm", weight: "0.008823" },
  { dia: "1.6 mm", weight: "0.015685" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.02451" },
  { dia: "2.5 mm", weight: "0.03830" },
  { dia: "3.0 mm", weight: "0.05515" },
  { dia: "4.0 mm", weight: "0.09804" },
  { dia: "5.0 mm", weight: "0.15318" },
  { dia: "6.0 mm", weight: "0.22058" },
  { dia: "8.0 mm", weight: "0.39216" },
  { dia: "10.0 mm", weight: "0.61274" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000061" },
  { dia: "0.2 mm", weight: "0.000245" },
  { dia: "0.3 mm", weight: "0.000551" },
  { dia: "0.5 mm", weight: "0.001532" },
  { dia: "0.8 mm", weight: "0.003922" },
  { dia: "1.0 mm", weight: "0.006127" },
  { dia: "1.2 mm", weight: "0.008823" },
  { dia: "1.6 mm", weight: "0.015685" },
  { dia: "2.0 mm", weight: "0.02451" },
  { dia: "2.5 mm", weight: "0.03830" },
  { dia: "3.0 mm", weight: "0.05515" },
  { dia: "4.0 mm", weight: "0.09804" },
  { dia: "5.0 mm", weight: "0.15318" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.22058" },
  { dia: "8.0 mm", weight: "0.39216" },
  { dia: "10.0 mm", weight: "0.61274" },
  { dia: "12.0 mm", weight: "0.88235" },
  { dia: "16.0 mm", weight: "1.5685" },
  { dia: "20.0 mm", weight: "2.451" },
  { dia: "25.0 mm", weight: "3.830" },
  { dia: "30.0 mm", weight: "5.515" },
  { dia: "40.0 mm", weight: "9.804" },
  { dia: "50.0 mm", weight: "15.318" },
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
  { thickness: "0.50", weightPerM2: "3.90", size2000: "7.80", size2500: "12.19", size3000: "17.55" },
  { thickness: "1.00", weightPerM2: "7.80", size2000: "15.60", size2500: "24.38", size3000: "35.10" },
  { thickness: "1.50", weightPerM2: "11.70", size2000: "23.40", size2500: "36.56", size3000: "52.65" },
  { thickness: "2.00", weightPerM2: "15.60", size2000: "31.20", size2500: "48.75", size3000: "70.20" },
  { thickness: "3.00", weightPerM2: "23.40", size2000: "46.80", size2500: "73.12", size3000: "105.30" },
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
  "Duplex S31803 / S32205 (2205) Round & Profile Wires",
  "Super Duplex S32750 (F53) / S32760 (F55) Round & Profile Wires",
  "ASTM A580 / ASME SA580 Compliant",
  "High Strength & Excellent Chloride Stress Corrosion Cracking Resistance",
  "PRE ≥ 35 for Duplex, PRE ≥ 40 for Super Duplex",
  "Duplex / Super Duplex Wires Manufacturer in India",
];

const rightItems = [
  "ASTM A580 / ASME SA580",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved, Spring Temper",
  "Welding Wires (TIG/MIG) – AWS A5.9",
  "Custom Cut-to-Length & Precision Machining",
  "Duplex / Super Duplex Wires Supplier in Mumbai",
];

const searchTerms = [
  "Duplex 2205 Wire Price Per Kg",
  "Super Duplex S32750 Wire Weight Chart",
  "Duplex Steel Wire Supplier In India",
  "Duplex 2205 Wire Specifications",
  "Super Duplex F53 Wire Price In Mumbai",
  "Duplex S31803 Wire Dimensions",
  "Duplex Wire Price List",
  "Duplex 2205 Wire Weight Calculator",
  "Super Duplex Wire Mechanical Properties",
  "Duplex Wire Stockist",
  "Duplex Wire Equivalent Grades",
  "Duplex Wire Price Per Kg In India",
  "Super Duplex S32760 Wire Exporter",
  "Duplex Wire Manufacturers In Mumbai",
  "Buy Duplex / Super Duplex Wires In India",
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

const DuplexSuperDuplexWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Duplex & Super Duplex Steel Wires Supplier – S31803, S32205, S32750, S32760</title>
        <meta
          name="description"
          content="Leading supplier of Duplex (S31803/S32205) and Super Duplex (S32750/S32760) steel wires. High strength, outstanding chloride resistance. Round, square, flat, welding wires, and custom sizes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="DUPLEX & SUPER DUPLEX STEEL WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>DUPLEX & SUPER DUPLEX STEEL WIRES SUPPLIER – ROUND, SQUARE, FLAT & CUSTOM</h1>
            </div>
            <div className="content-image">
              <img src={duplex} alt="Duplex & Super Duplex Steel Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>DUPLEX & SUPER DUPLEX STEEL WIRES – HIGH STRENGTH, EXCEPTIONAL CORROSION RESISTANCE</h2>
              <p>
                Our comprehensive range of <strong>Duplex & Super Duplex Steel Wires</strong> includes the most common duplex grades: <strong>S31803</strong>, <strong>S32205 (2205)</strong>, and the super duplex grades <strong>S32750 (F53)</strong> and <strong>S32760 (F55)</strong>. These materials feature a dual-phase microstructure (austenite + ferrite) that provides an exceptional combination of high mechanical strength—nearly double that of standard austenitic grades—and outstanding resistance to chloride stress corrosion cracking, pitting, and crevice corrosion. With a Pitting Resistance Equivalent (PRE) exceeding 35 for duplex grades and over 40 for super duplex grades, these wires are the definitive choice for offshore, marine, chemical processing, and desalination applications. Whether you need wires for springs, fasteners, welding, or precision components, our duplex and super duplex wires deliver reliable and long-lasting performance.
              </p>
              <hr />
              <h3>ROUND, SQUARE, FLAT & CUSTOM DUPLEX WIRES</h3>
              <p>
                We supply duplex and super duplex wires in <strong>round</strong>, <strong>square</strong>, <strong>flat</strong>, and <strong>custom profiles</strong>, available from 0.1 mm to 50 mm diameter (or equivalent cross-section). Our inventory includes cold-drawn, annealed, stress-relieved, and spring-tempered wires to meet the stringent demands of springs, fasteners, welding, and precision components.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Duplex and super duplex steel wires are the material of choice for critical applications in <strong>offshore oil & gas</strong> (rigging, mooring, control cables), <strong>marine engineering</strong> (seawater systems, wire mesh), <strong>chemical processing</strong> (electrodes, valve stems), <strong>desalination plants</strong>, and <strong>pollution control</strong> (scrubbers). Their high yield strength (450–550 MPa) allows for reduced wire diameters without compromising performance, offering significant weight savings.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our duplex and super duplex wires are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM A580, ASME SA580</strong>, and <strong>AWS A5.9</strong> for welding wires. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Duplex & Super Duplex Steel Wires</h2>
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
                <h2>READY STOCK AVAILABILITY – DUPLEX & SUPER DUPLEX WIRES</h2>
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
                <h2>CHEMICAL COMPOSITION OF DUPLEX & SUPER DUPLEX WIRES</h2>
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
                <h2>MECHANICAL PROPERTIES OF DUPLEX & SUPER DUPLEX WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: DUPLEX & SUPER DUPLEX WIRES
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
                <h2>UNIFIED WEIGHT CHART: DUPLEX & SUPER DUPLEX WIRES</h2>
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
                <h2>DUPLEX & SUPER DUPLEX WIRE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED DUPLEX & SUPER DUPLEX WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING DUPLEX & SUPER DUPLEX WIRES</h2>
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
                <h2>SEARCHES RELATED TO DUPLEX & SUPER DUPLEX WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING DUPLEX & SUPER DUPLEX WIRES</h2>
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
                  <h2>SEARCHES RELATED TO DUPLEX & SUPER DUPLEX WIRES</h2>
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
            <p>Immediate pricing for Duplex & Super Duplex wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DuplexSuperDuplexWiresDetails;
