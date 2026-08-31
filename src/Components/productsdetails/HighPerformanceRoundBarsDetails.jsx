import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual High Performance Alloy Round Bars product images
import hpaRoundBars from "../../products-image/ss-hr-roundbars.webp";
import hpaBrightBars from "../../products-image/ss-cr-roundbars.webp";
import niloRoundBars from "../../products-image/ss-special-roundbars.webp";

import highPerformance from "../../products-image/ss-highperformance-roundbars.webp";

import "./Productsdetails.css";

const stockData = [

  {
    title: "NIMONIC & NICHROME ROUND BARS",
    image: hpaRoundBars,
    items: [
      "Nimonic 75 / 80A / 90 Round Bars",
      "Nichrome 80/20 Resistance Alloy Bars",
      "High-Temperature Creep Resistant Bars",
      "Heating Element & Aerospace Bars",
    ],
  },
  {
    title: "SPECIALTY ALLOY BRIGHT BARS & HEX BARS",
    image: hpaBrightBars,
    items: [
      "Bright Finish Round Bars – Precision Ground",
      "Hexagonal Bars & Square Bars",
      "Flat Bars & Custom Profiles",
      "Peeled, Turned, and Polished Bars",
    ],
  },
  {
    title: "NILO ROUND BARS",
    image: niloRoundBars,
    items: [
      "Nilo 600 / 625 / 718 / X-750 Round Bars",
      "High-Temperature & Oxidation Resistant Bars",
      "Bars for Furnace & Chemical Processing Equipment",
    ],
  }
];

const gradesData = [
  { grade: "Inconel 600", uns: "N06600", werkstoff: "2.4816", standard: "ASTM B166 / ASME SB166" },
  { grade: "Inconel 625", uns: "N06625", werkstoff: "2.4856", standard: "ASTM B446 / ASME SB446" },
  { grade: "Inconel 718", uns: "N07718", werkstoff: "2.4668", standard: "ASTM B637 / ASME SB637" },
  { grade: "Inconel X-750", uns: "N07750", werkstoff: "2.4669", standard: "ASTM B637 / ASME SB637" },
  { grade: "Incoloy 800", uns: "N08800", werkstoff: "1.4876", standard: "ASTM B408 / ASME SB408" },
  { grade: "Incoloy 825", uns: "N08825", werkstoff: "2.4858", standard: "ASTM B425 / ASME SB425" },
  { grade: "Hastelloy C276", uns: "N10276", werkstoff: "2.4819", standard: "ASTM B574 / ASME SB574" },
  { grade: "Hastelloy C22", uns: "N06022", werkstoff: "2.4602", standard: "ASTM B574 / ASME SB574" },
  { grade: "Monel 400", uns: "N04400", werkstoff: "2.4360", standard: "ASTM B164 / ASME SB164" },
  { grade: "Monel K500", uns: "N05500", werkstoff: "2.4375", standard: "ASTM B164 / ASME SB164" },
  { grade: "Nimonic 75", uns: "N06075", werkstoff: "2.4951", standard: "ASTM B166 / ASME SB166" },
  { grade: "Nimonic 80A", uns: "N07080", werkstoff: "2.4952", standard: "ASTM B166 / ASME SB166" },
  { grade: "Nichrome 80/20", uns: "N06003", werkstoff: "2.4869", standard: "ASTM B166 / ASME SB166" },
];

const chemicalData = [
  { grade: "Inconel 600", c: "0.15 max", mn: "1.0 max", si: "0.5 max", cr: "14.0-17.0", ni: "72.0 min", mo: "—", other: "Fe: 6.0-10.0, Cu: 0.5 max" },
  { grade: "Inconel 625", c: "0.10 max", mn: "0.5 max", si: "0.5 max", cr: "20.0-23.0", ni: "58.0 min", mo: "8.0-10.0", other: "Nb+Ta: 3.15-4.15, Fe: 5.0 max" },
  { grade: "Inconel 718", c: "0.08 max", mn: "0.35 max", si: "0.35 max", cr: "17.0-21.0", ni: "50.0-55.0", mo: "2.8-3.3", other: "Nb+Ta: 4.75-5.50, Ti: 0.65-1.15, Al: 0.20-0.80, Fe: Balance" },
  { grade: "Inconel X-750", c: "0.08 max", mn: "1.0 max", si: "0.5 max", cr: "14.0-17.0", ni: "70.0 min", mo: "—", other: "Nb+Ta: 0.7-1.2, Ti: 2.25-2.75, Al: 0.4-1.0, Fe: 5.0-9.0" },
  { grade: "Incoloy 800", c: "0.10 max", mn: "1.5 max", si: "1.0 max", cr: "19.0-23.0", ni: "30.0-35.0", mo: "—", other: "Cu: 0.75 max, Fe: Balance" },
  { grade: "Incoloy 825", c: "0.05 max", mn: "1.0 max", si: "0.5 max", cr: "19.5-23.5", ni: "38.0-46.0", mo: "2.5-3.5", other: "Cu: 1.5-3.0, Ti: 0.6-1.2, Fe: Balance" },
  { grade: "Hastelloy C276", c: "0.02 max", mn: "1.0 max", si: "0.08 max", cr: "14.5-16.5", ni: "Balance", mo: "15.0-17.0", other: "W: 3.0-4.5, Fe: 4.0-7.0, Co: 2.5 max" },
  { grade: "Hastelloy C22", c: "0.015 max", mn: "0.5 max", si: "0.08 max", cr: "20.0-22.5", ni: "Balance", mo: "12.5-14.5", other: "W: 2.5-3.5, Fe: 2.0-6.0, Co: 2.5 max" },
  { grade: "Monel 400", c: "0.30 max", mn: "2.0 max", si: "0.5 max", cr: "—", ni: "63.0 min", mo: "—", other: "Cu: 28.0-34.0, Fe: 2.5 max" },
  { grade: "Monel K500", c: "0.25 max", mn: "1.5 max", si: "0.5 max", cr: "—", ni: "63.0 min", mo: "—", other: "Cu: 27.0-33.0, Al: 2.3-3.15, Ti: 0.35-0.85, Fe: 2.0 max" },
  { grade: "Nimonic 75", c: "0.08-0.15", mn: "1.0 max", si: "1.0 max", cr: "18-21", ni: "Balance", mo: "—", other: "Ti: 0.2-0.6, Cu: 0.5" },
  { grade: "Nimonic 80A", c: "0.10 max", mn: "1.0 max", si: "1.0 max", cr: "18-21", ni: "Balance", mo: "—", other: "Al/Ti strengthened" },
  { grade: "Nichrome 80/20", c: "0.15 max", mn: "1.0 max", si: "1.0 max", cr: "19-21", ni: "75.0", mo: "—", other: "Co: 1.5, Al: 0.3" },
];

const mechanicalData = [
  { grade: "Inconel 600", tensile: "620 MPa (90 ksi)", yield: "310 MPa (45 ksi)", elongation: "35%", density: "8.47 g/cm³" },
  { grade: "Inconel 625", tensile: "825 MPa (120 ksi)", yield: "415 MPa (60 ksi)", elongation: "30%", density: "8.44 g/cm³" },
  { grade: "Inconel 718", tensile: "1370 MPa (200 ksi)", yield: "1080 MPa (155 ksi)", elongation: "15%", density: "8.19 g/cm³" },
  { grade: "Inconel X-750", tensile: "1240 MPa (180 ksi)", yield: "790 MPa (115 ksi)", elongation: "20%", density: "8.28 g/cm³" },
  { grade: "Incoloy 800", tensile: "520 MPa (75 ksi)", yield: "205 MPa (30 ksi)", elongation: "30%", density: "7.94 g/cm³" },
  { grade: "Incoloy 825", tensile: "586 MPa (85 ksi)", yield: "241 MPa (35 ksi)", elongation: "30%", density: "8.14 g/cm³" },
  { grade: "Hastelloy C276", tensile: "690 MPa (100 ksi)", yield: "310 MPa (45 ksi)", elongation: "40%", density: "8.89 g/cm³" },
  { grade: "Hastelloy C22", tensile: "690 MPa (100 ksi)", yield: "310 MPa (45 ksi)", elongation: "45%", density: "8.69 g/cm³" },
  { grade: "Monel 400", tensile: "550 MPa (80 ksi)", yield: "240 MPa (35 ksi)", elongation: "40%", density: "8.80 g/cm³" },
  { grade: "Monel K500", tensile: "965 MPa (140 ksi)", yield: "690 MPa (100 ksi)", elongation: "20%", density: "8.44 g/cm³" },
  { grade: "Nimonic 75", tensile: "715 MPa (104 ksi)", yield: "275 MPa (40 ksi)", elongation: "42%", density: "8.37 g/cm³" },
  { grade: "Nimonic 80A", tensile: "930 MPa (135 ksi)", yield: "620 MPa (90 ksi)", elongation: "30%", density: "8.37 g/cm³" },
  { grade: "Nichrome 80/20", tensile: "650 MPa", yield: "280 MPa", elongation: "20%", density: "8.4 g/cm³" },
];

// Dimensions for round bars – diameter ranges and weight per meter (typical for alloy ~8.0 g/cm³)
const leftDiameter = [
  "3 mm", "4 mm", "5 mm", "6 mm", "8 mm", "10 mm", "12 mm", "16 mm",
];
const rightDiameter = [
  "20 mm", "25 mm", "32 mm", "40 mm", "50 mm", "63 mm", "80 mm", "100 mm",
];

// Approx weight per meter (kg/m) for alloy round bars (density ~8.0)
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

// Gauge table for bars – typical standard sizes
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

// Specialty table – not directly applicable to bars, but we'll keep as is or adapt
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
  "Inconel 600 / 625 / 718 / X-750 Round Bars",
  "Incoloy 800 / 825 Round Bars",
  "Hastelloy C276 / C22 / B2 / B3 / X Round Bars",
  "Monel 400 / K500 Round Bars",
  "Nimonic 75 / 80A & Nichrome 80/20 Bars",
  "Bright Bars, Hex Bars, Square Bars & Flat Bars",
  "High Performance Alloy Round Bars Manufacturer in India",
];

const rightItems = [
  "ASTM B166, B446, B637, B408, B425, B574, B164",
  "Diameter Range: 3 mm to 500 mm",
  "Length: Up to 12 meters (custom lengths available)",
  "Hot Rolled / Cold Drawn / Peeled / Ground / Polished",
  "Hexagonal, Square, Flat & Custom Profiles",
  "Precision Machined & Cut-to-Length Bars",
  "High Performance Alloy Round Bars Supplier in Mumbai",
];

const searchTerms = [
  "Inconel 625 Round Bar Price Per Kg",
  "Hastelloy C276 Round Bar Weight Chart",
  "High Performance Alloy Round Bar Supplier In India",
  "Inconel 718 Round Bar Specifications",
  "Monel 400 Round Bar Price In Mumbai",
  "Incoloy 800 Round Bar Dimensions",
  "High Performance Alloy Round Bar Price List",
  "Inconel 600 Round Bar Weight Calculator",
  "Hastelloy C22 Round Bar Mechanical Properties",
  "High Performance Alloy Round Bar Stockist",
  "Nimonic 75 Round Bar Equivalent Grades",
  "High Performance Alloy Round Bar Price Per Kg In India",
  "Monel K500 Round Bar Exporter",
  "High Performance Alloy Round Bar Manufacturers In Mumbai",
  "Buy High Performance Alloy Round Bars In India",
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

const  HighPerformanceRoundBarsDetails = () => {
  return (
    <>
      <Helmet>
        <title>High Performance Alloy Round Bars Supplier – Inconel, Incoloy, Hastelloy, Monel, Nimonic</title>
        <meta
          name="description"
          content="Leading supplier of High Performance Alloy Round Bars including Inconel 600/625/718, Incoloy 800/825, Hastelloy C276/C22, Monel 400/K500, Nimonic 75/80A. Hot rolled, cold drawn, bright bars, hex bars, and custom sizes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="HIGH PERFORMANCE ALLOY ROUND BARS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>HIGH PERFORMANCE ALLOY ROUND BARS SUPPLIER – INCONEL, INCOLOY, HASTELLOY, MONEL, NIMONIC</h1>
            </div>
            <div className="content-image">
              <img src={highPerformance} alt="High Performance Alloy Round Bars" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>HIGH PERFORMANCE ALLOY ROUND BARS – ENGINEERED FOR EXTREME CONDITIONS</h2>
              <p>
                Our comprehensive range of <strong>High Performance Alloy Round Bars</strong> covers the most demanding nickel-based superalloys, including <strong>Inconel</strong> (600, 625, 718, X-750), <strong>Incoloy</strong> (800, 825), <strong>Hastelloy</strong> (C276, C22, B2, B3, X), <strong>Monel</strong> (400, K500), <strong>Nimonic</strong> (75, 80A), and <strong>Nichrome</strong> (80/20). These alloys are specifically engineered to withstand extreme temperatures, highly corrosive chemicals, and severe mechanical stress. Whether you need high-temperature oxidation resistance, exceptional acid resistance, or high strength-to-weight ratio, our round bars deliver reliable and long-lasting performance in the most challenging industrial environments.
              </p>
              <hr />
              <h3>HOT ROLLED, COLD DRAWN & PRECISION GROUND BARS</h3>
              <p>
                We supply high-performance alloy round bars in <strong>hot rolled</strong>, <strong>cold drawn</strong>, <strong>peeled</strong>, and <strong>precision ground</strong> conditions. Available in diameters from 3 mm to 500 mm and lengths up to 12 meters (custom lengths available). We also offer <strong>hexagonal bars</strong>, <strong>square bars</strong>, and <strong>flat bars</strong> upon request.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                These alloy round bars are the material of choice for critical applications in <strong>aerospace</strong> (turbine components, fasteners), <strong>chemical processing</strong> (shafts, valves, pumps), <strong>oil & gas</strong> (downhole tools, drilling equipment), <strong>marine engineering</strong> (propeller shafts, heat exchanger components), and <strong>power generation</strong> (boiler parts, turbine blades). Their unique combination of corrosion resistance, high-temperature strength, and fabricability ensures reliable service in the most demanding environments.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our high-performance alloy round bars are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B166, B446, B637, B408, B425, B574, B164</strong> and their ASME equivalents. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: High Performance Alloy Round Bars</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B166, B446, B637, B408, B425, B574, B164</p>
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
                <h2>READY STOCK AVAILABILITY – HIGH PERFORMANCE ALLOY ROUND BARS</h2>
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
                <h2>CHEMICAL COMPOSITION OF HIGH PERFORMANCE ALLOY ROUND BARS</h2>
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
                <h2>MECHANICAL PROPERTIES OF HIGH PERFORMANCE ALLOY ROUND BARS</h2>
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
                  DIAMETER RANGE AVAILABILITY: HIGH PERFORMANCE ALLOY ROUND BARS
                  <span>(ASTM B166, B446, B637, B408, B425, B574, B164)</span>
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
                <h2>UNIFIED WEIGHT CHART: HIGH PERFORMANCE ALLOY ROUND BARS</h2>
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
                <h2>HIGH PERFORMANCE ALLOY ROUND BAR SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED HIGH PERFORMANCE ALLOY ROUND BAR PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING HIGH PERFORMANCE ALLOY ROUND BARS</h2>
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
                <h2>SEARCHES RELATED TO HIGH PERFORMANCE ALLOY ROUND BARS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING HIGH PERFORMANCE ALLOY ROUND BARS</h2>
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
                  <h2>SEARCHES RELATED TO HIGH PERFORMANCE ALLOY ROUND BARS</h2>
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
            <p>Immediate pricing for High Performance Alloy Round Bars. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HighPerformanceRoundBarsDetails;
