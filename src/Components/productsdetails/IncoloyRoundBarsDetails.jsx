import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Incoloy Round Bars product images
import incoloyHRBars from "../../products-image/ss-hr-roundbars.webp";
import incoloyColdDrawn from "../../products-image/ss-cr-roundbars.webp";
import incoloyBrightBars from "../../products-image/ss-special-roundbars.webp";

import incoloy from "../../products-image/ss-incoloy-roundbars.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "INCOLOY 800 / 800H / 800HT HOT ROLLED BARS",
    image: incoloyHRBars,
    items: [
      "Incoloy 800 / 800H / 800HT Hot Rolled Bars",
      "ASTM B408 / ASME SB408",
      "UNS N08800 / N08810 / N08811",
      "High-Temperature Creep Resistant Bars",
    ],
  },
  {
    title: "INCOLOY 825 COLD DRAWN BARS",
    image: incoloyColdDrawn,
    items: [
      "Incoloy 825 Cold Drawn Round Bars",
      "ASTM B425 / ASME SB425",
      "UNS N08825 / 2.4858",
      "Precision Tolerances for Corrosive Service",
    ],
  },
  {
    title: "INCOLOY CUSTOM BARS",
    image: incoloyBrightBars,
    items: [
      "Custom Cut-to-Length Bars",
      "Peeled, Turned, and Polished",
      "Diameters from 3 mm to 500 mm",
      "Any Finish, Any Length, Fast Delivery",
    ],
  },
];

const gradesData = [
  { grade: "Incoloy 800", uns: "N08800", werkstoff: "1.4876", standard: "ASTM B408 / ASME SB408" },
  { grade: "Incoloy 800H", uns: "N08810", werkstoff: "1.4958", standard: "ASTM B408 / ASME SB408" },
  { grade: "Incoloy 800HT", uns: "N08811", werkstoff: "1.4959", standard: "ASTM B408 / ASME SB408" },
  { grade: "Incoloy 825", uns: "N08825", werkstoff: "2.4858", standard: "ASTM B425 / ASME SB425" },
  { grade: "Incoloy 925", uns: "N09925", werkstoff: "2.4859", standard: "ASTM B637 / ASME SB637" },
  { grade: "Alloy 330", uns: "N08330", werkstoff: "1.4886", standard: "ASTM B409 / ASME SB409" },
];

const chemicalData = [
  { grade: "Incoloy 800", c: "0.10 max", mn: "1.5 max", si: "1.0 max", cr: "19.0-23.0", ni: "30.0-35.0", mo: "—", other: "Cu: 0.75 max, Fe: Balance, Al+Ti: 0.15-0.60" },
  { grade: "Incoloy 800H", c: "0.05-0.10", mn: "1.5 max", si: "1.0 max", cr: "19.0-23.0", ni: "30.0-35.0", mo: "—", other: "Cu: 0.75 max, Fe: Balance, Al+Ti: 0.85-1.20" },
  { grade: "Incoloy 800HT", c: "0.06-0.10", mn: "1.5 max", si: "1.0 max", cr: "19.0-23.0", ni: "30.0-35.0", mo: "—", other: "Cu: 0.75 max, Fe: Balance, Al+Ti: 0.85-1.20, Al: 0.15 min" },
  { grade: "Incoloy 825", c: "0.05 max", mn: "1.0 max", si: "0.5 max", cr: "19.5-23.5", ni: "38.0-46.0", mo: "2.5-3.5", other: "Cu: 1.5-3.0, Ti: 0.6-1.2, Fe: Balance" },
  { grade: "Incoloy 925", c: "0.03 max", mn: "1.0 max", si: "0.5 max", cr: "19.5-23.5", ni: "42.0-46.0", mo: "2.5-3.5", other: "Cu: 1.5-3.0, Ti: 1.9-2.4, Al: 0.1-0.5, Nb: 0.5 max, Fe: Balance" },
  { grade: "Alloy 330", c: "0.08 max", mn: "2.0 max", si: "1.5-2.0", cr: "17.0-20.0", ni: "33.0-37.0", mo: "—", other: "Cu: 0.5 max, Fe: Balance" },
];

const mechanicalData = [
  { grade: "Incoloy 800 / 800H / 800HT", tensile: "520 MPa (75 ksi)", yield: "205 MPa (30 ksi)", elongation: "30%", density: "7.94 g/cm³" },
  { grade: "Incoloy 825", tensile: "586 MPa (85 ksi)", yield: "241 MPa (35 ksi)", elongation: "30%", density: "8.14 g/cm³" },
  { grade: "Incoloy 925 (Age Hardened)", tensile: "965 MPa (140 ksi)", yield: "690 MPa (100 ksi)", elongation: "20%", density: "8.14 g/cm³" },
  { grade: "Alloy 330", tensile: "550 MPa (80 ksi)", yield: "240 MPa (35 ksi)", elongation: "30%", density: "7.97 g/cm³" },
];

// Diameter and weight tables for round bars (average density ~8.0 g/cm³)
const leftDiameter = [
  "3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm", "12 mm", "16 mm",
];
const rightDiameter = [
  "20 mm", "25 mm", "32 mm", "40 mm", "50 mm", "63 mm", "80 mm", "100 mm",
];

// Weight per meter (kg/m) for Incoloy bars (density ~8.0)
const leftBarData = [
  { dia: "3 mm", weight: "0.057" },
  { dia: "4 mm", weight: "0.101" },
  { dia: "5 mm", weight: "0.157" },
  { dia: "6 mm", weight: "0.226" },
  { dia: "8 mm", weight: "0.402" },
  { dia: "10 mm", weight: "0.628" },
  { dia: "12 mm", weight: "0.905" },
  { dia: "16 mm", weight: "1.608" },
];
const rightBarData = [
  { dia: "20 mm", weight: "2.513" },
  { dia: "25 mm", weight: "3.927" },
  { dia: "32 mm", weight: "6.434" },
  { dia: "40 mm", weight: "10.053" },
  { dia: "50 mm", weight: "15.708" },
  { dia: "63 mm", weight: "24.937" },
  { dia: "80 mm", weight: "40.212" },
  { dia: "100 mm", weight: "62.832" },
];

const leftBarDataNew = [
  { dia: "3 mm", weight: "0.057" },
  { dia: "4 mm", weight: "0.101" },
  { dia: "5 mm", weight: "0.157" },
  { dia: "6 mm", weight: "0.226" },
  { dia: "8 mm", weight: "0.402" },
  { dia: "10 mm", weight: "0.628" },
  { dia: "12 mm", weight: "0.905" },
  { dia: "16 mm", weight: "1.608" },
  { dia: "20 mm", weight: "2.513" },
  { dia: "25 mm", weight: "3.927" },
  { dia: "32 mm", weight: "6.434" },
  { dia: "40 mm", weight: "10.053" },
  { dia: "50 mm", weight: "15.708" },
];
const rightBarDataNew = [
  { dia: "63 mm", weight: "24.937" },
  { dia: "80 mm", weight: "40.212" },
  { dia: "100 mm", weight: "62.832" },
  { dia: "125 mm", weight: "98.175" },
  { dia: "160 mm", weight: "160.849" },
  { dia: "200 mm", weight: "251.327" },
  { dia: "250 mm", weight: "392.699" },
  { dia: "300 mm", weight: "565.487" },
  { dia: "350 mm", weight: "769.690" },
  { dia: "400 mm", weight: "1005.310" },
  { dia: "450 mm", weight: "1272.345" },
  { dia: "500 mm", weight: "1570.796" },
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
  { thickness: "0.50", weightPerM2: "4.00", size2000: "8.00", size2500: "12.50", size3000: "18.00" },
  { thickness: "1.00", weightPerM2: "8.00", size2000: "16.00", size2500: "25.00", size3000: "36.00" },
  { thickness: "1.50", weightPerM2: "12.00", size2000: "24.00", size2500: "37.50", size3000: "54.00" },
  { thickness: "2.00", weightPerM2: "16.00", size2000: "32.00", size2500: "50.00", size3000: "72.00" },
  { thickness: "3.00", weightPerM2: "24.00", size2000: "48.00", size2500: "75.00", size3000: "108.00" },
  { thickness: "4.00", weightPerM2: "32.00", size2000: "64.00", size2500: "100.00", size3000: "144.00" },
  { thickness: "5.00", weightPerM2: "40.00", size2000: "80.00", size2500: "125.00", size3000: "180.00" },
  { thickness: "6.00", weightPerM2: "48.00", size2000: "96.00", size2500: "150.00", size3000: "216.00" },
  { thickness: "8.00", weightPerM2: "64.00", size2000: "128.00", size2500: "200.00", size3000: "288.00" },
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
  "Incoloy 800 / 800H / 800HT Hot Rolled & Cold Drawn Round Bars",
  "Incoloy 825 Corrosion Resistant Round Bars",
  "Incoloy 925 Age-Hardenable High-Strength Bars",
  "Alloy 330 / DS Carburization Resistant Bars",
  "ASTM B408, B425, B637, B409 Compliant",
  "Bright, Peeled, Ground, and Polished Finishes Available",
  "Incoloy Round Bars Manufacturer in India",
];

const rightItems = [
  "ASTM B408 / B425 / B637 / B409 / ASME SB408 / SB425 / SB637 / SB409",
  "Diameter Range: 3 mm to 500 mm",
  "Length: Up to 12 meters (custom lengths available)",
  "Hot Rolled / Cold Drawn / Peeled / Ground / Polished",
  "Hexagonal, Square, Flat & Custom Profiles",
  "Precision Machined & Cut-to-Length Bars",
  "Incoloy Round Bars Supplier in Mumbai",
];

const searchTerms = [
  "Incoloy 800 Round Bar Price Per Kg",
  "Incoloy 825 Round Bar Weight Chart",
  "Incoloy Round Bar Supplier In India",
  "Incoloy 800H Round Bar Specifications",
  "Incoloy 925 Round Bar Price In Mumbai",
  "Incoloy 800 Round Bar Dimensions",
  "Incoloy Round Bar Price List",
  "Incoloy 825 Round Bar Weight Calculator",
  "Incoloy 800HT Round Bar Mechanical Properties",
  "Incoloy Round Bar Stockist",
  "Alloy 330 Round Bar Equivalent Grades",
  "Incoloy Round Bar Price Per Kg In India",
  "Incoloy 825 Round Bar Exporter",
  "Incoloy Round Bar Manufacturers In Mumbai",
  "Buy Incoloy Round Bars In India",
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

const IncoloyRoundBarsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Incoloy Round Bars Supplier – Incoloy 800, 825, 925, 330, DS</title>
        <meta
          name="description"
          content="Leading supplier of Incoloy round bars including 800/800H/800HT, 825, 925, Alloy 330, and DS. High-temperature creep strength, corrosion resistance, and age-hardening capability. Hot rolled, cold drawn, bright bars, and custom sizes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="INCOLOY ROUND BARS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>INCOLOY ROUND BARS SUPPLIER – INCOLOY 800, 825, 925, 330 & DS</h1>
            </div>
            <div className="content-image">
              <img src={incoloy} alt="Incoloy Round Bars" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>INCOLOY ROUND BARS – ENGINEERED FOR HIGH-TEMPERATURE STRENGTH AND CORROSION RESISTANCE</h2>
              <p>
                Our comprehensive range of <strong>Incoloy Round Bars</strong> covers a wide spectrum of nickel-iron-chromium alloys, including <strong>Incoloy 800 / 800H / 800HT</strong> (UNS N08800/N08810/N08811), <strong>Incoloy 825</strong> (UNS N08825), <strong>Incoloy 925</strong> (UNS N09925), and <strong>Alloy 330 / DS</strong> (UNS N08330). These alloys are specifically engineered to resist oxidation, carburization, and corrosion at elevated temperatures. The 800 series offers excellent creep and rupture strength; Incoloy 825 provides superior resistance to sulfuric acid and chloride stress corrosion cracking; Incoloy 925 is an age-hardenable alloy delivering exceptionally high strength; and Alloy 330/DS is the premier choice for severe carburizing environments. Whether you need reliable performance in petrochemical furnaces, chemical reactors, or high-temperature fasteners, our Incoloy round bars deliver unmatched durability.
              </p>
              <hr />
              <h3>HOT ROLLED, COLD DRAWN & PRECISION GROUND BARS</h3>
              <p>
                We supply Incoloy round bars in <strong>hot rolled</strong>, <strong>cold drawn</strong>, <strong>peeled</strong>, and <strong>precision ground</strong> conditions. Available in diameters from 3 mm to 500 mm and lengths up to 12 meters (custom lengths available). We also offer <strong>hexagonal bars</strong>, <strong>square bars</strong>, and <strong>flat bars</strong> upon request.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Incoloy round bars are the material of choice for critical applications in <strong>petrochemical</strong> (furnace components, reformer tubes), <strong>chemical processing</strong> (reactors, heat exchangers), <strong>oil & gas</strong> (downhole tools, sour gas service), <strong>pollution control</strong> (scrubbers), and <strong>power generation</strong> (boiler parts). Their unique combination of corrosion resistance, high-temperature strength, and fabricability ensures reliable service in the most demanding environments.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Incoloy round bars are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B408 (800 series)</strong>, <strong>ASTM B425 (825)</strong>, <strong>ASTM B637 (925)</strong>, and <strong>ASTM B409 (330/DS)</strong>, with their ASME equivalents. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Incoloy Round Bars</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B408, B425, B637, B409; ASME SB408, SB425, SB637, SB409</p>
              </div>
              <div className="spec-card">
                <h4>Diameter Range</h4>
                <p>3 mm – 500 mm</p>
              </div>
              <div className="spec-card">
                <h4>Length</h4>
                <p>Up to 12 meters (custom lengths available)</p>
              </div>
              <div className="spec-card">
                <h4>Form</h4>
                <p>Hot Rolled, Cold Drawn, Peeled, Ground, Polished</p>
              </div>
              <div className="spec-card">
                <h4>Cross Section</h4>
                <p>Round, Hexagonal, Square, Flat</p>
              </div>
              <div className="spec-card">
                <h4>Finish</h4>
                <p>Mill finish, Bright, Peeled, Ground, Polished</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – INCOLOY ROUND BARS</h2>
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
                <h2>EQUIVALENT GRADES: INCOLOY ALLOYS</h2>
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
                <h2>CHEMICAL COMPOSITION OF INCOLOY ROUND BARS</h2>
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
                <h2>MECHANICAL PROPERTIES OF INCOLOY ROUND BARS</h2>
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
                  DIAMETER RANGE AVAILABILITY: INCOLOY ROUND BARS
                  <span>(ASTM B408, B425, B637, B409)</span>
                </h2>
                <p>Available in Hot Rolled, Cold Drawn, & Bright Conditions</p>
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
                    {leftDiameter.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightDiameter[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: INCOLOY ROUND BARS</h2>
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
                    {leftBarData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.dia}</td>
                        <td>{item.weight}</td>
                        <td>{rightBarData[index].dia}</td>
                        <td>{rightBarData[index].weight}</td>
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
                <h2>INCOLOY ROUND BAR SUPPLY RANGE (UNIFIED)</h2>
                <p>Applicable for: All standard diameters and custom cut-to-length dimensions</p>
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
                    {leftBarDataNew.map((item, index) => (
                      <tr key={index}>
                        <td>{item.dia}</td>
                        <td>{item.weight}</td>
                        <td>{rightBarDataNew[index].dia}</td>
                        <td>{rightBarDataNew[index].weight}</td>
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
                <h2>UNIFIED INCOLOY ROUND BAR PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING INCOLOY ROUND BARS</h2>
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
                <h2>SEARCHES RELATED TO INCOLOY ROUND BARS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING INCOLOY ROUND BARS</h2>
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
                  <h2>SEARCHES RELATED TO INCOLOY ROUND BARS</h2>
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
            <p>Immediate pricing for Incoloy round bars. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IncoloyRoundBarsDetails;