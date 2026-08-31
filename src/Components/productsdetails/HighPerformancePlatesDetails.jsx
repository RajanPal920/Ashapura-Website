import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual High Performance Alloy Plates product images
import hotrolled from "../../products-image/ss-hr-plates.webp";
import coldrolled from "../../products-image/ss-cr-plates.webp";
import custom from "../../products-image/ss-custom-plates.webp";

import highPerformance from "../../products-image/ss-high-performance-alloy-plates.webp"; 

import "./Productsdetails.css";

const stockData = [
  {
    name: "Hot Rolled (HR)",
    image: hotrolled,
    items: [
        "Nimonic 75/80A HR Plates",
        "Nitronic 50 (XM-19) HR Stock",
        "Alloy 286 (660) HR Heavy Plates"
    ]

  },
  {
    name: "Cold Rolled (CR)",
    image: coldrolled,
    items: [
        "Nichrome 80/20 Resistance Sheets",
        "Nilo 42 / 48 Precision CR Stock",
        "Alloy 926 (6Mo) CR Precision"
    ]
  },
  {
    name: "Custom & Speciality",
    image: custom,
    items: [
        "UNS N06075 Custom Cut Blanks",
        "Fabricated Nilo 42 Components",
        "Nitronic 50 Custom Cut Profiles"
    ]
  }
];

const gradesData = [
  {
    grade: "Inconel 600",
    uns: "N06600",
    werkstoff: "2.4816",
    standard: "ASTM B168 / ASME SB168",
  },
  {
    grade: "Inconel 625",
    uns: "N06625",
    werkstoff: "2.4856",
    standard: "ASTM B443 / ASME SB443",
  },
  {
    grade: "Inconel 718",
    uns: "N07718",
    werkstoff: "2.4668",
    standard: "ASTM B670 / ASME SB670",
  },
  {
    grade: "Incoloy 800",
    uns: "N08800",
    werkstoff: "1.4876",
    standard: "ASTM B409 / ASME SB409",
  },
  {
    grade: "Incoloy 825",
    uns: "N08825",
    werkstoff: "2.4858",
    standard: "ASTM B424 / ASME SB424",
  },
  {
    grade: "Hastelloy C276",
    uns: "N10276",
    werkstoff: "2.4819",
    standard: "ASTM B575 / ASME SB575",
  },
  {
    grade: "Hastelloy C22",
    uns: "N06022",
    werkstoff: "2.4602",
    standard: "ASTM B575 / ASME SB575",
  },
  {
    grade: "Monel 400",
    uns: "N04400",
    werkstoff: "2.4360",
    standard: "ASTM B127 / ASME SB127",
  },
];

const chemicalData = [
  {
    grade: "Inconel 600",
    c: "0.15 max",
    mn: "1.0 max",
    si: "0.5 max",
    cr: "14.0-17.0",
    ni: "72.0 min",
    mo: "—",
    other: "Fe: 6.0-10.0, Cu: 0.5 max",
  },
  {
    grade: "Inconel 625",
    c: "0.10 max",
    mn: "0.5 max",
    si: "0.5 max",
    cr: "20.0-23.0",
    ni: "58.0 min",
    mo: "8.0-10.0",
    other: "Nb+Ta: 3.15-4.15, Fe: 5.0 max",
  },
  {
    grade: "Inconel 718",
    c: "0.08 max",
    mn: "0.35 max",
    si: "0.35 max",
    cr: "17.0-21.0",
    ni: "50.0-55.0",
    mo: "2.8-3.3",
    other: "Nb+Ta: 4.75-5.50, Ti: 0.65-1.15, Al: 0.20-0.80, Fe: Balance",
  },
  {
    grade: "Incoloy 800",
    c: "0.10 max",
    mn: "1.5 max",
    si: "1.0 max",
    cr: "19.0-23.0",
    ni: "30.0-35.0",
    mo: "—",
    other: "Cu: 0.75 max, Fe: Balance",
  },
  {
    grade: "Incoloy 825",
    c: "0.05 max",
    mn: "1.0 max",
    si: "0.5 max",
    cr: "19.5-23.5",
    ni: "38.0-46.0",
    mo: "2.5-3.5",
    other: "Cu: 1.5-3.0, Ti: 0.6-1.2, Fe: Balance",
  },
  {
    grade: "Hastelloy C276",
    c: "0.02 max",
    mn: "1.0 max",
    si: "0.08 max",
    cr: "14.5-16.5",
    ni: "Balance",
    mo: "15.0-17.0",
    other: "W: 3.0-4.5, Fe: 4.0-7.0, Co: 2.5 max",
  },
  {
    grade: "Hastelloy C22",
    c: "0.015 max",
    mn: "0.5 max",
    si: "0.08 max",
    cr: "20.0-22.5",
    ni: "Balance",
    mo: "12.5-14.5",
    other: "W: 2.5-3.5, Fe: 2.0-6.0, Co: 2.5 max",
  },
  {
    grade: "Monel 400",
    c: "0.30 max",
    mn: "2.0 max",
    si: "0.5 max",
    cr: "—",
    ni: "63.0 min",
    mo: "—",
    other: "Cu: 28.0-34.0, Fe: 2.5 max",
  },
];

const mechanicalData = [
  {
    grade: "Inconel 600",
    tensile: "620 MPa (90 ksi)",
    yield: "310 MPa (45 ksi)",
    elongation: "35%",
    density: "8.47 g/cm³",
  },
  {
    grade: "Inconel 625",
    tensile: "825 MPa (120 ksi)",
    yield: "415 MPa (60 ksi)",
    elongation: "30%",
    density: "8.44 g/cm³",
  },
  {
    grade: "Inconel 718",
    tensile: "1370 MPa (200 ksi)",
    yield: "1080 MPa (155 ksi)",
    elongation: "15%",
    density: "8.19 g/cm³",
  },
  {
    grade: "Incoloy 800",
    tensile: "520 MPa (75 ksi)",
    yield: "205 MPa (30 ksi)",
    elongation: "30%",
    density: "7.94 g/cm³",
  },
  {
    grade: "Incoloy 825",
    tensile: "586 MPa (85 ksi)",
    yield: "241 MPa (35 ksi)",
    elongation: "30%",
    density: "8.14 g/cm³",
  },
  {
    grade: "Hastelloy C276",
    tensile: "690 MPa (100 ksi)",
    yield: "310 MPa (45 ksi)",
    elongation: "40%",
    density: "8.89 g/cm³",
  },
  {
    grade: "Hastelloy C22",
    tensile: "690 MPa (100 ksi)",
    yield: "310 MPa (45 ksi)",
    elongation: "45%",
    density: "8.69 g/cm³",
  },
  {
    grade: "Monel 400",
    tensile: "550 MPa (80 ksi)",
    yield: "240 MPa (35 ksi)",
    elongation: "40%",
    density: "8.80 g/cm³",
  },
];

// Thickness and weight charts adapted for plates (similar to Titanium Plates, but with density ~8.0-8.9)
const leftThickness = [
  "0.5 mm", "1.0 mm", "1.5 mm", "2.0 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm",
];
const rightThickness = [
  "8.0 mm", "10.0 mm", "12.0 mm", "16.0 mm", "20.0 mm", "25.0 mm", "50.0 mm", "100.0 mm",
];

// Approx weights for Nickel Alloy plates (average density ~8.0 g/cm³)
const leftData = [
  { size: "2000 × 1000 × 2.0", weight: "32.0" },
  { size: "2500 × 1250 × 3.0", weight: "75.0" },
  { size: "3000 × 1500 × 4.0", weight: "144.0" },
  { size: "2000 × 1000 × 5.0", weight: "80.0" },
  { size: "2500 × 1250 × 6.0", weight: "150.0" },
  { size: "3000 × 1500 × 8.0", weight: "288.0" },
];
const rightData = [
  { size: "2000 × 1000 × 10.0", weight: "160.0" },
  { size: "2500 × 1250 × 12.0", weight: "300.0" },
  { size: "3000 × 1500 × 16.0", weight: "576.0" },
  { size: "2000 × 1000 × 20.0", weight: "320.0" },
  { size: "2500 × 1250 × 25.0", weight: "625.0" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "2000 × 1000 × 1.0", weight: "16.0" },
  { size: "2500 × 1250 × 1.5", weight: "37.5" },
  { size: "3000 × 1500 × 2.0", weight: "72.0" },
  { size: "2000 × 1000 × 3.0", weight: "48.0" },
  { size: "2500 × 1250 × 4.0", weight: "100.0" },
  { size: "3000 × 1500 × 5.0", weight: "180.0" },
  { size: "2000 × 1000 × 6.0", weight: "96.0" },
  { size: "2500 × 1250 × 8.0", weight: "200.0" },
  { size: "3000 × 1500 × 10.0", weight: "360.0" },
  { size: "4000 × 2000 × 12.0", weight: "768.0" },
  { size: "2000 × 1000 × 15.0", weight: "240.0" },
  { size: "2500 × 1250 × 20.0", weight: "500.0" },
  { size: "3000 × 1500 × 25.0", weight: "900.0" },
];
const rightDataNew = [
  { size: "4000 × 2000 × 30.0", weight: "1920.0" },
  { size: "2500 × 1250 × 40.0", weight: "1000.0" },
  { size: "3000 × 1500 × 50.0", weight: "1800.0" },
  { size: "4000 × 2000 × 60.0", weight: "3840.0" },
  { size: "2500 × 1250 × 80.0", weight: "2000.0" },
  { size: "3000 × 1500 × 100.0", weight: "3600.0" },
  { size: "4000 × 2000 × 120.0", weight: "7680.0" },
  { size: "4000 × 2000 × 150.0", weight: "9600.0" },
  { size: "2500 × 1250 × 200.0", weight: "5000.0" },
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
  "Inconel 600 / 625 / 718 Plates & Sheets (ASTM B168 / B443 / B670)",
  "Incoloy 800 / 825 Plates (ASTM B409 / B424)",
  "Hastelloy C276 / C22 / B2 / B3 / X Plates (ASTM B575)",
  "Monel 400 / K500 Plates (ASTM B127)",
  "Nickel 200 / 201 Plates (ASTM B162)",
  "High-Performance Alloy Coils, Strips, Rings & Circles",
  "High-Performance Alloy Plate Manufacturer in India",
];

const rightItems = [
  "ASTM / ASME B168, B443, B670, B409, B424, B575, B127, B162",
  "Custom Sizes, Thicknesses, and Cut-to-Length Supply",
  "Hot Rolled / Cold Rolled / Annealed Plates",
  "Solution Treated & Aged Alloy Plates",
  "Precision Slit Strips & Foils",
  "High-Performance Alloy Circular Blanks & Rings",
  "High-Performance Alloy Plate Supplier in Mumbai",
];

const searchTerms = [
  "Inconel 625 Plate Price Per Kg",
  "Hastelloy C276 Plate Weight Chart",
  "High Performance Alloy Plate Supplier In India",
  "Inconel 718 Plate Specifications",
  "Incoloy 800 Plate Price",
  "Monel 400 Plate Price In Mumbai",
  "Inconel 600 Plate Dimensions",
  "High Performance Alloy Plate ASTM B168",
  "Nickel Alloy Plate Corrosion Resistance",
  "High Performance Alloy Plate Price List",
  "Inconel 625 Plate Weight Calculator",
  "Hastelloy C22 Plate Mechanical Properties",
  "High Performance Alloy Plate Stockist",
  "Inconel 718 Plate Equivalent Grades",
  "High Performance Alloy Plate Price Per Kg In India",
  "Inconel 600 Plate Exporter",
  "Hastelloy C276 Plate Supplier",
  "High Performance Alloy Plate Sizes",
  "High Performance Alloy Plate Thickness Chart",
  "Inconel 625 UNS N06625",
  "Hastelloy C276 2.4819",
  "High Performance Alloy Plate Manufacturers In Mumbai",
  "Buy High Performance Alloy Plates In India",
];

// Countries, Cities, Products, Materials (unchanged)
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

const HighPerformancePlatesDetails = () => {
  return (
    <>
      <Helmet>
        <title>High Performance Alloy Plates Supplier, Stockist & Exporter</title>
        <meta
          name="description"
          content="Leading supplier of High Performance Alloy Plates including Inconel, Incoloy, Hastelloy, Monel, Nickel 200/201. Available in sheets, coils, circles, rings, and custom sizes. ASTM compliant for aerospace, chemical, and marine applications."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="HIGH PERFORMANCE ALLOY PLATES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>HIGH PERFORMANCE ALLOY PLATES SUPPLIER – INCONEL, INCOLOY, HASTELLOY, MONEL & MORE</h1>
            </div>
            <div className="content-image">
              <img src={highPerformance} alt="High Performance Alloy Plates" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>HIGH PERFORMANCE ALLOY PLATES – ENGINEERED FOR EXTREME CONDITIONS</h2>
              <p>
                Our comprehensive range of <strong>High Performance Alloy Plates</strong> covers the most demanding nickel-based superalloys, including <strong>Inconel</strong> (600, 625, 718), <strong>Incoloy</strong> (800, 825), <strong>Hastelloy</strong> (C276, C22, B2, B3, X), <strong>Monel</strong> (400, K500), and <strong>Nickel</strong> (200, 201). These alloys are specifically engineered to withstand extreme temperatures, highly corrosive chemicals, and severe mechanical stress. Whether you need high-temperature oxidation resistance, exceptional acid resistance, or high strength-to-weight ratio, our alloy plates deliver reliable and long-lasting performance in the most challenging industrial environments.
              </p>
              <hr />
              <h3>HOT ROLLED & COLD ROLLED ALLOY PLATES</h3>
              <p>
                We supply high-performance alloy plates in <strong>hot rolled</strong> and <strong>cold rolled</strong> conditions, available in thicknesses from 0.5 mm to 150 mm, widths up to 2500 mm, and lengths up to 6000 mm. Our inventory includes annealed, solution-treated, and age-hardened plates to meet the stringent specifications of the aerospace, petrochemical, and marine industries.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                These alloy plates are the material of choice for critical applications in <strong>aerospace</strong> (turbine components, structural parts), <strong>chemical processing</strong> (pressure vessels, reactors), <strong>oil & gas</strong> (sour gas service, downhole tools), <strong>marine engineering</strong> (propeller shafts, heat exchangers), and <strong>nuclear reactors</strong>. Their unique combination of corrosion resistance, high temperature strength, and fabricability ensures reliable service in the most demanding environments.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our high-performance alloy plates are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B168, B443, B670, B409, B424, B575, B127, B162</strong> and their ASME equivalents. We provide comprehensive mill test certificates, PMI reports, ultrasonic inspection, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>UNIFIED SPECIFICATION: HIGH PERFORMANCE ALLOY PLATES</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM / ASME B168, B443, B670, B409, B424, B575, B127, B162</p>
              </div>
              <div className="spec-card">
                <h4>Thickness Range</h4>
                <p>0.5 mm – 150 mm (Sheets & Plates)</p>
              </div>
              <div className="spec-card">
                <h4>Width</h4>
                <p>1000 mm – 2500 mm</p>
              </div>
              <div className="spec-card">
                <h4>Length</h4>
                <p>2000 mm – 6000 mm (Custom lengths available)</p>
              </div>
              <div className="spec-card">
                <h4>Forms</h4>
                <p>Plates, Sheets, Coils, Strips, Circles, Rings</p>
              </div>
              <div className="spec-card">
                <h4>Surface Finish</h4>
                <p>Mill finish, Annealed, Pickled, Polished, Bright Annealed</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – HIGH PERFORMANCE ALLOY PLATES</h2>
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
                <h2>EQUIVALENT GRADES: HIGH PERFORMANCE ALLOYS</h2>
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
                <h2>CHEMICAL COMPOSITION OF HIGH PERFORMANCE ALLOY PLATES</h2>
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
                <h2>MECHANICAL PROPERTIES OF HIGH PERFORMANCE ALLOY PLATES</h2>
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
                  THICKNESS RANGE AVAILABILITY: HIGH PERFORMANCE ALLOY PLATES
                  <span>(ASTM / ASME B168, B443, B409, etc.)</span>
                </h2>
                <p>Available in Sheets & Plates – Hot Rolled & Cold Rolled</p>
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
                <h2>UNIFIED WEIGHT CHART: HIGH PERFORMANCE ALLOY PLATES</h2>
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
                <h2>HIGH PERFORMANCE ALLOY PLATE SUPPLY RANGE (UNIFIED)</h2>
                <p>Applicable for: Sheets, Plates, Coils, Circles, and Strips</p>
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
                <h2>UNIFIED HIGH PERFORMANCE ALLOY PLATE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING HIGH PERFORMANCE ALLOY PLATES</h2>
              </div>
              <div className="table-responsive">
                <table className="specialty-weight-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Thickness (mm)</th>
                      <th rowSpan="2">Weight Kg/M2</th>
                      <th colSpan="3">Size in MM (Weight per Plate)</th>
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
                <h2>SEARCHES RELATED TO HIGH PERFORMANCE ALLOY PLATES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING HIGH PERFORMANCE ALLOY PLATES</h2>
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
                  <h2>SEARCHES RELATED TO HIGH PERFORMANCE ALLOY PLATES</h2>
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

        {/* Sidebar – unchanged */}
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
            <p>Immediate pricing for High Performance Alloy Plates. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HighPerformancePlatesDetails;
