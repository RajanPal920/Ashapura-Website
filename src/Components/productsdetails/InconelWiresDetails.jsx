import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Inconel Wires product images
import inconelRoundWire from "../../products-image/ss-welded-wires.webp";
import inconelSquareWire from "../../products-image/ss-filler-wires.webp";
import inconelFlatWire from "../../products-image/ss-bobbin-wires.webp";
import inconelCoilWire from "../../products-image/ss-bright-wires.webp";
import inconelCustomWire from "../../products-image/ss-cold-heading-wires.webp";
import inconelWeldingWire from "../../products-image/ss-rope-wires.webp";

import inconel from "../../products-image/ss-inconel-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "INCONEL 600 ROUND WIRES",
    image: inconelRoundWire,
    items: [
      "Inconel 600 Round Wires (ASTM B166)",
      "UNS N06600 / 2.4816",
      "Cold Drawn & Annealed",
      "Excellent Oxidation Resistance up to 1000°C",
    ],
  },
  {
    title: "INCONEL 625 ROUND WIRES",
    image: inconelRoundWire,
    items: [
      "Inconel 625 Round Wires (ASTM B446)",
      "UNS N06625 / 2.4856",
      "Outstanding Corrosion & Pitting Resistance",
      "For Severe Chemical & Marine Environments",
    ],
  },
  {
    title: "INCONEL 718 ROUND WIRES",
    image: inconelRoundWire,
    items: [
      "Inconel 718 Round Wires (ASTM B637)",
      "UNS N07718 / 2.4668",
      "Precipitation-Hardenable for Extreme Strength",
      "Aerospace & Gas Turbine Grade",
    ],
  },
  {
    title: "INCONEL X-750 ROUND WIRES",
    image: inconelRoundWire,
    items: [
      "Inconel X-750 Round Wires (ASTM B637)",
      "UNS N07750 / 2.4669",
      "Age-Hardenable for High Creep Strength",
      "For High-Temperature Springs & Fasteners",
    ],
  },
  {
    title: "INCONEL 690 ROUND WIRES",
    image: inconelRoundWire,
    items: [
      "Inconel 690 Round Wires (ASTM B166)",
      "UNS N06690 / 2.4642",
      "High Chromium (27-31%) for Oxidizing Environments",
      "Superior Resistance to Aqueous Corrosion",
    ],
  },
  {
    title: "INCONEL SQUARE, FLAT & WELDING WIRES",
    image: inconelFlatWire,
    items: [
      "Inconel Square Wires & Flat Wires",
      "Custom Profiles",
      "Welding Wires (TIG/MIG)",
      "Spooled & Straight Lengths",
    ],
  },
];

const gradesData = [
  { grade: "Inconel 600", uns: "N06600", werkstoff: "2.4816", standard: "ASTM B166 / ASME SB166" },
  { grade: "Inconel 625", uns: "N06625", werkstoff: "2.4856", standard: "ASTM B446 / ASME SB446" },
  { grade: "Inconel 718", uns: "N07718", werkstoff: "2.4668", standard: "ASTM B637 / ASME SB637" },
  { grade: "Inconel X-750", uns: "N07750", werkstoff: "2.4669", standard: "ASTM B637 / ASME SB637" },
  { grade: "Inconel 690", uns: "N06690", werkstoff: "2.4642", standard: "ASTM B166 / ASME SB166" },
];

const chemicalData = [
  { grade: "Inconel 600", c: "0.15 max", mn: "1.0 max", si: "0.5 max", cr: "14.0-17.0", ni: "72.0 min", mo: "—", other: "Fe: 6.0-10.0, Cu: 0.5 max" },
  { grade: "Inconel 625", c: "0.10 max", mn: "0.5 max", si: "0.5 max", cr: "20.0-23.0", ni: "58.0 min", mo: "8.0-10.0", other: "Nb+Ta: 3.15-4.15, Fe: 5.0 max" },
  { grade: "Inconel 718", c: "0.08 max", mn: "0.35 max", si: "0.35 max", cr: "17.0-21.0", ni: "50.0-55.0", mo: "2.8-3.3", other: "Nb+Ta: 4.75-5.50, Ti: 0.65-1.15, Al: 0.20-0.80, Fe: Balance" },
  { grade: "Inconel X-750", c: "0.08 max", mn: "1.0 max", si: "0.5 max", cr: "14.0-17.0", ni: "70.0 min", mo: "—", other: "Nb+Ta: 0.7-1.2, Ti: 2.25-2.75, Al: 0.4-1.0, Fe: 5.0-9.0" },
  { grade: "Inconel 690", c: "0.05 max", mn: "0.5 max", si: "0.5 max", cr: "27.0-31.0", ni: "58.0 min", mo: "—", other: "Fe: 7.0-11.0, Cu: 0.5 max" },
];

const mechanicalData = [
  { grade: "Inconel 600", tensile: "620 MPa (90 ksi)", yield: "310 MPa (45 ksi)", elongation: "35%", density: "8.47 g/cm³" },
  { grade: "Inconel 625", tensile: "825 MPa (120 ksi)", yield: "415 MPa (60 ksi)", elongation: "30%", density: "8.44 g/cm³" },
  { grade: "Inconel 718", tensile: "1370 MPa (200 ksi)", yield: "1080 MPa (155 ksi)", elongation: "15%", density: "8.19 g/cm³" },
  { grade: "Inconel X-750", tensile: "1240 MPa (180 ksi)", yield: "790 MPa (115 ksi)", elongation: "20%", density: "8.28 g/cm³" },
  { grade: "Inconel 690", tensile: "586 MPa (85 ksi)", yield: "241 MPa (35 ksi)", elongation: "30%", density: "8.19 g/cm³" },
];

// Diameter ranges for wires
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for Inconel wires (avg density ~8.4 g/cm³)
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000066" },
  { dia: "0.2 mm", weight: "0.000264" },
  { dia: "0.3 mm", weight: "0.000594" },
  { dia: "0.5 mm", weight: "0.001650" },
  { dia: "0.8 mm", weight: "0.004224" },
  { dia: "1.0 mm", weight: "0.006600" },
  { dia: "1.2 mm", weight: "0.009504" },
  { dia: "1.6 mm", weight: "0.016896" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.02640" },
  { dia: "2.5 mm", weight: "0.04125" },
  { dia: "3.0 mm", weight: "0.05940" },
  { dia: "4.0 mm", weight: "0.1056" },
  { dia: "5.0 mm", weight: "0.1650" },
  { dia: "6.0 mm", weight: "0.2376" },
  { dia: "8.0 mm", weight: "0.4224" },
  { dia: "10.0 mm", weight: "0.6600" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000066" },
  { dia: "0.2 mm", weight: "0.000264" },
  { dia: "0.3 mm", weight: "0.000594" },
  { dia: "0.5 mm", weight: "0.001650" },
  { dia: "0.8 mm", weight: "0.004224" },
  { dia: "1.0 mm", weight: "0.006600" },
  { dia: "1.2 mm", weight: "0.009504" },
  { dia: "1.6 mm", weight: "0.016896" },
  { dia: "2.0 mm", weight: "0.02640" },
  { dia: "2.5 mm", weight: "0.04125" },
  { dia: "3.0 mm", weight: "0.05940" },
  { dia: "4.0 mm", weight: "0.1056" },
  { dia: "5.0 mm", weight: "0.1650" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.2376" },
  { dia: "8.0 mm", weight: "0.4224" },
  { dia: "10.0 mm", weight: "0.6600" },
  { dia: "12.0 mm", weight: "0.9504" },
  { dia: "16.0 mm", weight: "1.6896" },
  { dia: "20.0 mm", weight: "2.640" },
  { dia: "25.0 mm", weight: "4.125" },
  { dia: "30.0 mm", weight: "5.940" },
  { dia: "40.0 mm", weight: "10.56" },
  { dia: "50.0 mm", weight: "16.50" },
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
  { thickness: "0.50", weightPerM2: "4.20", size2000: "8.40", size2500: "13.12", size3000: "18.90" },
  { thickness: "1.00", weightPerM2: "8.40", size2000: "16.80", size2500: "26.25", size3000: "37.80" },
  { thickness: "1.50", weightPerM2: "12.60", size2000: "25.20", size2500: "39.37", size3000: "56.70" },
  { thickness: "2.00", weightPerM2: "16.80", size2000: "33.60", size2500: "52.50", size3000: "75.60" },
  { thickness: "3.00", weightPerM2: "25.20", size2000: "50.40", size2500: "78.75", size3000: "113.40" },
  { thickness: "4.00", weightPerM2: "33.60", size2000: "67.20", size2500: "105.00", size3000: "151.20" },
  { thickness: "5.00", weightPerM2: "42.00", size2000: "84.00", size2500: "131.25", size3000: "189.00" },
  { thickness: "6.00", weightPerM2: "50.40", size2000: "100.80", size2500: "157.50", size3000: "226.80" },
  { thickness: "8.00", weightPerM2: "67.20", size2000: "134.40", size2500: "210.00", size3000: "302.40" },
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
  "Inconel 600 / 625 / 718 / X-750 / 690 Round Wires",
  "Inconel Square, Flat & Custom Profile Wires",
  "ASTM B166, B446, B637 Compliant",
  "High-Temperature Oxidation & Corrosion Resistance",
  "Precipitation-Hardenable Grades (718, X-750) for Maximum Strength",
  "Inconel Wires Manufacturer in India",
];

const rightItems = [
  "ASTM B166 / B446 / B637 / ASME SB166 / SB446 / SB637",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved, Age-Hardened",
  "Welding Wires (TIG/MIG) – AWS A5.14",
  "Custom Cut-to-Length & Precision Machining",
  "Inconel Wires Supplier in Mumbai",
];

const searchTerms = [
  "Inconel 625 Wire Price Per Kg",
  "Inconel 600 Wire Weight Chart",
  "Inconel Wire Supplier In India",
  "Inconel 718 Wire Specifications",
  "Inconel X-750 Wire Price In Mumbai",
  "Inconel 690 Wire Dimensions",
  "Inconel Wire Price List",
  "Inconel 625 Wire Weight Calculator",
  "Inconel Wire Mechanical Properties",
  "Inconel Wire Stockist",
  "Inconel 718 Wire Heat Treatment",
  "Inconel Wire Price Per Kg In India",
  "Inconel 600 Wire Exporter",
  "Inconel Wire Manufacturers In Mumbai",
  "Buy Inconel Wires In India",
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

const InconelWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Inconel Wires Supplier – Inconel 600, 625, 718, X-750, 690 Wires</title>
        <meta
          name="description"
          content="Leading supplier of Inconel wires including 600, 625, 718, X-750, 690. Round, square, flat, welding wires, and custom sizes. Exceptional high-temperature strength and corrosion resistance."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="INCONEL WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>INCONEL WIRES SUPPLIER – ROUND, SQUARE, FLAT & CUSTOM</h1>
            </div>
            <div className="content-image">
              <img src={inconel} alt="Inconel Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>INCONEL WIRES – ENGINEERED FOR EXTREME TEMPERATURE AND CORROSION RESISTANCE</h2>
              <p>
                Our comprehensive range of <strong>Inconel Wires</strong> covers the most popular nickel-chromium superalloys, including <strong>Inconel 600</strong>, <strong>625</strong>, <strong>718</strong>, <strong>X-750</strong>, and <strong>690</strong>. These alloys are specifically engineered to withstand extreme temperatures, highly corrosive environments, and severe mechanical stress. Inconel 600 offers excellent oxidation resistance up to 1000°C; Inconel 625 provides outstanding resistance to pitting and crevice corrosion in chloride-rich environments; Inconel 718 is a precipitation-hardenable alloy delivering the highest strength in the family; Inconel X-750 offers age-hardenable creep resistance; and Inconel 690 provides superior resistance to oxidizing acids and aqueous corrosion. Whether you need wires for springs, fasteners, welding, or precision components, our Inconel wires deliver reliable and long-lasting performance.
              </p>
              <hr />
              <h3>ROUND, SQUARE, FLAT & CUSTOM INCONEL WIRES</h3>
              <p>
                We supply Inconel wires in <strong>round</strong>, <strong>square</strong>, <strong>flat</strong>, and <strong>custom profiles</strong>, available from 0.1 mm to 50 mm diameter (or equivalent cross-section). Our inventory includes cold-drawn, annealed, stress-relieved, and age-hardened wires to meet the stringent demands of springs, fasteners, welding, and precision components.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Inconel wires are the material of choice for critical applications in <strong>aerospace</strong> (springs, fasteners, control cables), <strong>chemical processing</strong> (electrodes, wire mesh), <strong>oil & gas</strong> (downhole tools), <strong>marine engineering</strong> (rigging, mooring), and <strong>power generation</strong> (heating elements, thermocouples). Their unique combination of high-temperature strength, corrosion resistance, and fabricability ensures reliable service in the most demanding environments.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Inconel wires are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B166, B446, B637</strong> and their ASME equivalents, and <strong>AWS A5.14</strong> for welding wires. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Inconel Wires</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B166, B446, B637; ASME SB166, SB446, SB637</p>
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
                <p>Annealed, Half Hard, Full Hard, Age-Hardened</p>
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
                <h2>READY STOCK AVAILABILITY – INCONEL WIRES</h2>
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
                <h2>EQUIVALENT GRADES: INCONEL ALLOYS</h2>
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
                <h2>CHEMICAL COMPOSITION OF INCONEL WIRES</h2>
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
                <h2>MECHANICAL PROPERTIES OF INCONEL WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: INCONEL WIRES
                  <span>(ASTM B166, B446, B637)</span>
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
                <h2>UNIFIED WEIGHT CHART: INCONEL WIRES</h2>
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
                <h2>INCONEL WIRE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED INCONEL WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING INCONEL WIRES</h2>
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
                <h2>SEARCHES RELATED TO INCONEL WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING INCONEL WIRES</h2>
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
                  <h2>SEARCHES RELATED TO INCONEL WIRES</h2>
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
            <p>Immediate pricing for Inconel wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InconelWiresDetails;