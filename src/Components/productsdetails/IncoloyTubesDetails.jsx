import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Incoloy Tubes product images
import incoloySeamlessTubes from "../../products-image/ss-seamless-tubes.webp";
import incoloyWeldedTubes from "../../products-image/ss-welded-tubes.webp";
import incoloyErwTubes from "../../products-image/ss-erw-tubes.webp";
import incoloyEfwTubes from "../../products-image/ss-seamless-2-tubes.webp";
import incoloyUboTubes from "../../products-image/ss-heatexchanger-tubes.webp";
import incoloySpecialTubes from "../../products-image/ss-hollow-tubes.webp";

import incoloy from "../../products-image/ss-incoloy-tubes.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "INCOLOY 800 / 800H / 800HT SEAMLESS TUBES",
    image: incoloySeamlessTubes,
    items: [
      "Incoloy 800, 800H, 800HT Seamless Tubes",
      "ASTM B163 / B407",
      "UNS N08800, N08810, N08811",
      "High-Temperature Creep & Oxidation Resistance",
    ],
  },
  {
    title: "INCOLOY 825 / 925 SEAMLESS TUBES",
    image: incoloySeamlessTubes,
    items: [
      "Incoloy 825 / 925 Seamless Tubes",
      "ASTM B163 / B423",
      "UNS N08825 / N09925",
      "Superior Acid & SCC Resistance",
    ],
  },
  {
    title: "INCOLOY 800 / 800H / 800HT WELDED TUBES",
    image: incoloyWeldedTubes,
    items: [
      "Incoloy 800, 800H, 800HT Welded Tubes",
      "ASTM B514 / B515",
      "Longitudinal & Spiral Welded",
      "Industrial Process Tubing",
    ],
  },
  {
    title: "INCOLOY 825 / 925 WELDED TUBES",
    image: incoloyWeldedTubes,
    items: [
      "Incoloy 825 / 925 Welded Tubes",
      "ASTM B705 / B704",
      "High Strength Welded",
      "For Sour Gas & Chemical Processing",
    ],
  },
  {
    title: "INCOLOY ERW / EFW TUBES",
    image: incoloyErwTubes,
    items: [
      "Incoloy ERW / EFW Tubes",
      "Electric Resistance / Fusion Welded",
      "ASTM B407 / B514 / B705",
      "Custom Schedules & Lengths",
    ],
  },
  {
    title: "INCOLOY SPECIALTY TUBES",
    image: incoloySpecialTubes,
    items: [
      "Incoloy Nickel-Iron-Chromium Alloy Tubes",
      "Grades: 800, 800H, 800HT, 825, 925",
      "Excellent High-Temperature & Corrosion Resistance",
      "Stockist in Mumbai, India",
    ],
  }
];

const gradesData = [
  {
    grade: "Incoloy 800",
    uns: "N08800",
    werkstoff: "1.4876",
    standard: "ASTM B163 / B407 / B514",
  },
  {
    grade: "Incoloy 800H",
    uns: "N08810",
    werkstoff: "1.4958",
    standard: "ASTM B163 / B407 / B514",
  },
  {
    grade: "Incoloy 800HT",
    uns: "N08811",
    werkstoff: "1.4959",
    standard: "ASTM B163 / B407 / B514",
  },
  {
    grade: "Incoloy 825",
    uns: "N08825",
    werkstoff: "2.4858",
    standard: "ASTM B163 / B423 / B705",
  },
  {
    grade: "Incoloy 925",
    uns: "N09925",
    werkstoff: "2.4859",
    standard: "ASTM B163 / B423 / B705",
  }
];

const chemicalData = [
  {
    grade: "Incoloy 800",
    c: "0.10 max",
    mn: "1.5 max",
    si: "1.0 max",
    cr: "19.0 – 23.0",
    ni: "30.0 – 35.0",
    mo: "—",
    other: "Fe: 39.5 min, Cu: 0.75 max, Al+Ti: 0.15-0.60",
  },
  {
    grade: "Incoloy 800H",
    c: "0.05 – 0.10",
    mn: "1.5 max",
    si: "1.0 max",
    cr: "19.0 – 23.0",
    ni: "30.0 – 35.0",
    mo: "—",
    other: "Fe: 39.5 min, Al+Ti: 0.15-0.60",
  },
  {
    grade: "Incoloy 800HT",
    c: "0.06 – 0.10",
    mn: "1.5 max",
    si: "1.0 max",
    cr: "19.0 – 23.0",
    ni: "30.0 – 35.0",
    mo: "—",
    other: "Fe: 39.5 min, Al+Ti: 0.85-1.20",
  },
  {
    grade: "Incoloy 825",
    c: "0.05 max",
    mn: "1.0 max",
    si: "0.5 max",
    cr: "19.5 – 23.5",
    ni: "38.0 – 46.0",
    mo: "2.5 – 3.5",
    other: "Cu: 1.5-3.0, Ti: 0.6-1.2, Fe: Balance",
  },
  {
    grade: "Incoloy 925",
    c: "0.03 max",
    mn: "1.0 max",
    si: "0.5 max",
    cr: "19.5 – 22.5",
    ni: "42.0 – 46.0",
    mo: "2.5 – 3.5",
    other: "Cu: 1.5-3.0, Ti: 1.9-2.4, Al: 0.1-0.5, Fe: Balance",
  }
];

const mechanicalData = [
  {
    grade: "Incoloy 800",
    tensile: "450 MPa (min)",
    yield: "170 MPa (min)",
    elongation: "30%",
    density: "7.94 g/cm³",
  },
  {
    grade: "Incoloy 800H",
    tensile: "450 MPa (min)",
    yield: "170 MPa (min)",
    elongation: "30%",
    density: "7.94 g/cm³",
  },
  {
    grade: "Incoloy 800HT",
    tensile: "450 MPa (min)",
    yield: "170 MPa (min)",
    elongation: "30%",
    density: "7.94 g/cm³",
  },
  {
    grade: "Incoloy 825",
    tensile: "586 MPa (min)",
    yield: "241 MPa (min)",
    elongation: "30%",
    density: "8.14 g/cm³",
  },
  {
    grade: "Incoloy 925",
    tensile: "965 MPa (min)",
    yield: "690 MPa (min)",
    elongation: "15%",
    density: "8.08 g/cm³",
  }
];

const leftWallThickness = [
  "0.4 mm",
  "0.5 mm",
  "0.8 mm",
  "1.0 mm",
  "1.2 mm",
  "1.6 mm",
  "2.0 mm",
  "3.0 mm",
];

const rightWallThickness = [
  "4.0 mm",
  "5.0 mm",
  "6.0 mm",
  "8.0 mm",
  "10.0 mm",
  "12.0 mm",
  "16.0 mm",
  "20.0 mm / 25.0 mm",
];

// Approx weight per meter for Incoloy tubes (density ~8.0 g/cm³) – based on wall thickness 1mm
// Using formula: weight = (OD - wall) * wall * 0.0247 (approx for Incoloy)
const leftTubeData = [
  { size: "6 mm OD x 1 mm WT", weight: "0.124" },
  { size: "8 mm OD x 1 mm WT", weight: "0.173" },
  { size: "10 mm OD x 1 mm WT", weight: "0.222" },
  { size: "12 mm OD x 1 mm WT", weight: "0.272" },
  { size: "14 mm OD x 1 mm WT", weight: "0.321" },
  { size: "16 mm OD x 1 mm WT", weight: "0.371" },
  { size: "18 mm OD x 1 mm WT", weight: "0.420" },
  { size: "20 mm OD x 1 mm WT", weight: "0.470" },
];

const rightTubeData = [
  { size: "25 mm OD x 1 mm WT", weight: "0.594" },
  { size: "30 mm OD x 1 mm WT", weight: "0.718" },
  { size: "35 mm OD x 1 mm WT", weight: "0.841" },
  { size: "40 mm OD x 1 mm WT", weight: "0.965" },
  { size: "50 mm OD x 1 mm WT", weight: "1.212" },
  { size: "63 mm OD x 1 mm WT", weight: "1.534" },
  { size: "80 mm OD x 1 mm WT", weight: "1.953" },
  { size: "100 mm OD x 1 mm WT", weight: "2.446" },
];

// Extended supply range
const leftTubeDataNew = [
  { size: "6 mm OD x 1 mm WT", weight: "0.124" },
  { size: "8 mm OD x 1 mm WT", weight: "0.173" },
  { size: "10 mm OD x 1 mm WT", weight: "0.222" },
  { size: "12 mm OD x 1 mm WT", weight: "0.272" },
  { size: "14 mm OD x 1 mm WT", weight: "0.321" },
  { size: "16 mm OD x 1 mm WT", weight: "0.371" },
  { size: "18 mm OD x 1 mm WT", weight: "0.420" },
  { size: "20 mm OD x 1 mm WT", weight: "0.470" },
  { size: "25 mm OD x 1 mm WT", weight: "0.594" },
  { size: "30 mm OD x 1 mm WT", weight: "0.718" },
  { size: "35 mm OD x 1 mm WT", weight: "0.841" },
  { size: "40 mm OD x 1 mm WT", weight: "0.965" },
  { size: "50 mm OD x 1 mm WT", weight: "1.212" },
];

const rightTubeDataNew = [
  { size: "63 mm OD x 1 mm WT", weight: "1.534" },
  { size: "80 mm OD x 1 mm WT", weight: "1.953" },
  { size: "100 mm OD x 1 mm WT", weight: "2.446" },
  { size: "125 mm OD x 1 mm WT", weight: "3.063" },
  { size: "160 mm OD x 1 mm WT", weight: "3.927" },
  { size: "200 mm OD x 1 mm WT", weight: "4.915" },
  { size: "250 mm OD x 1 mm WT", weight: "6.151" },
  { size: "300 mm OD x 1 mm WT", weight: "7.387" },
  { size: "350 mm OD x 1 mm WT", weight: "8.623" },
  { size: "400 mm OD x 1 mm WT", weight: "9.859" },
  { size: "450 mm OD x 1 mm WT", weight: "11.095" },
  { size: "500 mm OD x 1 mm WT", weight: "12.331" },
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
  {
    thickness: "0.50",
    weightPerM2: "4.00",
    size2000: "8.00",
    size2500: "12.50",
    size3000: "18.00",
  },
  {
    thickness: "1.00",
    weightPerM2: "8.00",
    size2000: "16.00",
    size2500: "25.00",
    size3000: "36.00",
  },
  {
    thickness: "1.50",
    weightPerM2: "12.00",
    size2000: "24.00",
    size2500: "37.50",
    size3000: "54.00",
  },
  {
    thickness: "2.00",
    weightPerM2: "16.00",
    size2000: "32.00",
    size2500: "50.00",
    size3000: "72.00",
  },
  {
    thickness: "3.00",
    weightPerM2: "24.00",
    size2000: "48.00",
    size2500: "75.00",
    size3000: "108.00",
  },
  {
    thickness: "4.00",
    weightPerM2: "32.00",
    size2000: "64.00",
    size2500: "100.00",
    size3000: "144.00",
  },
  {
    thickness: "5.00",
    weightPerM2: "40.00",
    size2000: "80.00",
    size2500: "125.00",
    size3000: "180.00",
  },
  {
    thickness: "6.00",
    weightPerM2: "48.00",
    size2000: "96.00",
    size2500: "150.00",
    size3000: "216.00",
  },
  {
    thickness: "8.00",
    weightPerM2: "64.00",
    size2000: "128.00",
    size2500: "200.00",
    size3000: "288.00",
  },
];

const toleranceData = [
  {
    thickness: "0.017 – 0.030 (0.43 – 0.76)",
    upTo36: "0.0015 (0.038)",
    upTo48: "0.002 (0.051)",
  },
  {
    thickness: "0.031 – 0.041 (0.79 – 1.04)",
    upTo36: "0.002 (0.051)",
    upTo48: "0.003 (0.076)",
  },
  {
    thickness: "0.042 – 0.059 (1.1 – 1.5)",
    upTo36: "0.003 (0.076)",
    upTo48: "0.004 (0.10)",
  },
  {
    thickness: "0.060 – 0.073 (1.5 – 1.9)",
    upTo36: "0.003 (0.076)",
    upTo48: "0.0045 (0.11)",
  },
  {
    thickness: "0.085 – 0.099 (2.2 – 2.5)",
    upTo36: "0.004 (0.10)",
    upTo48: "0.006 (0.15)",
  },
  {
    thickness: "0.116 – 0.131 (2.9 – 3.3)",
    upTo36: "0.005 (0.13)",
    upTo48: "0.0075 (0.19)",
  },
  {
    thickness: "0.147 – 0.187 (3.7 – 4.7)",
    upTo36: "0.007 (0.18)",
    upTo48: "0.0105 (0.20)",
  },
];

const leftItems = [
  "Incoloy 800 / 800H / 800HT / 825 / 925 Seamless & Welded Tubes",
  "ASTM B163 / B407 / B514 / B423 / B705 Compliant",
  "High Ni & Cr for High-Temperature & Acid Resistance",
  "Excellent Creep & Rupture Strength",
  "Resistant to Oxidation, Carburization & SCC",
  "Incoloy Tubes Manufacturer in India",
];

const rightItems = [
  "ASTM B163 / B407 / B514 / B423 / B705",
  "OD Range: 6 mm to 500 mm",
  "Wall Thickness: 0.4 mm to 25 mm",
  "Straight Lengths up to 12 m, U-Bends Available",
  "Seamless, Welded, ERW, EFW, Cold Drawn",
  "Heat Exchanger Tubes & Instrumentation Tubes",
  "Incoloy Tubes Supplier in Mumbai",
];

const searchTerms = [
  "Incoloy 800 Tube Price Per Kg",
  "Incoloy 825 Tube Price Per Kg",
  "Incoloy 800H Seamless Tube Weight Chart",
  "Incoloy 925 Mechanical Properties",
  "Incoloy Tube Supplier In India",
  "UNS N08800 Chemical Composition",
  "Incoloy 800HT Tube Price In Mumbai",
  "Incoloy 825 Tube Dimensions",
  "Incoloy 800 vs 825 Difference",
  "Incoloy Tube Price List",
  "Incoloy Tube Weight Calculator",
  "Incoloy Mechanical Properties",
  "Incoloy Tube Stockist",
  "Incoloy 925 Heat Treatment",
  "Incoloy Tube Price Per Kg In India",
  "Incoloy 1.4876 / 2.4858",
  "Incoloy Tubes Manufacturers In Mumbai",
  "Buy Incoloy Tubes In India",
];

const countries = [
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Russia", code: "RU" },
  { name: "United States", code: "US" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Kuwait", code: "KW" },
  { name: "Singapore", code: "SG" },
  { name: "Malaysia", code: "MY" },
  { name: "UAE", code: "AE" },
  { name: "Germany", code: "DE" },
  { name: "Italy", code: "IT" },
  { name: "China", code: "CN" },
  { name: "UK", code: "GB" },
  { name: "Canada", code: "CA" },
  { name: "Iran", code: "IR" },
  { name: "Thailand", code: "TH" },
  { name: "South Korea", code: "KR" },
  { name: "Turkey", code: "TR" },
  { name: "Morocco", code: "MA" },
  { name: "Costa Rica", code: "CR" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Philippines", code: "PH" },
  { name: "Egypt", code: "EG" },
  { name: "Vietnam", code: "VN" },
  { name: "Oman", code: "OM" },
  { name: "Australia", code: "AU" },
  { name: "Qatar", code: "QA" },
  { name: "Portugal", code: "PT" },
  { name: "Mexico", code: "MX" },
  { name: "Brazil", code: "BR" },
  { name: "France", code: "FR" },
  { name: "South Africa", code: "ZA" },
  { name: "Jordan", code: "JO" },
  { name: "Spain", code: "ES" },
  { name: "Hong Kong", code: "HK" },
  { name: "Netherlands", code: "NL" },
  { name: "Indonesia", code: "ID" },
  { name: "Taiwan", code: "TW" },
  { name: "Nigeria", code: "NG" },
  { name: "Bangladesh", code: "BD" },
  { name: "Iraq", code: "IQ" },
  { name: "Ukraine", code: "UA" },
  { name: "Poland", code: "PL" },
  { name: "Romania", code: "RO" },
  { name: "Cyprus", code: "CY" },
  { name: "Angola", code: "AO" },
  { name: "Colombia", code: "CO" },
  { name: "Norway", code: "NO" },
  { name: "Chile", code: "CL" },
  { name: "Trinidad & Tobago", code: "TT" },
  { name: "Greece", code: "GR" },
  { name: "Czechia", code: "CZ" },
  { name: "Belgium", code: "BE" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Myanmar", code: "MM" },
  { name: "Venezuela", code: "VE" },
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

const IncoloyTubesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Incoloy Tubes Supplier – Nickel-Iron-Chromium Alloy Tubes (800, 800H, 800HT, 825, 925)</title>
        <meta
          name="description"
          content="Supplier of Incoloy tubes (UNS N08800, N08810, N08811, N08825, N09925) with exceptional high-temperature creep strength and corrosion resistance. Seamless, welded, ERW, EFW tubes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="INCOLOY TUBES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>INCOLOY TUBES SUPPLIER – NICKEL-IRON-CHROMIUM ALLOY TUBES (800, 800H, 800HT, 825, 925)</h1>
            </div>
            <div className="content-image">
              <img src={incoloy} alt="Incoloy Tubes" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>INCOLOY TUBES: HIGH-TEMPERATURE STRENGTH AND CORROSION RESISTANCE</h2>
              <p>Incoloy is a family of nickel‑iron‑chromium alloys renowned for their outstanding resistance to oxidation, carburization, and corrosion at elevated temperatures. Available in a wide range of grades—<strong>Incoloy 800, 800H, 800HT, 825, and 925</strong>—each alloy is tailored to specific service conditions, from steam methane reformers and furnace components to chemical processing and sour gas environments. These tubes combine excellent creep rupture strength with good fabricability, making them the material of choice for demanding industries worldwide.</p>
              <hr />
              <h3>KEY GRADES & THEIR APPLICATIONS</h3>
              <p><strong>Incoloy 800</strong> – General-purpose alloy with good resistance to oxidation and carburization, suitable for process piping and heat exchangers.</p>
              <p><strong>Incoloy 800H</strong> – Controlled carbon for improved creep-rupture strength at high temperatures, ideal for steam reformers and ethylene pyrolysis.</p>
              <p><strong>Incoloy 800HT</strong> – Enhanced aluminum and titanium for superior rupture strength and long-term stability, used in the most demanding high-temperature applications.</p>
              <p><strong>Incoloy 825</strong> – Alloyed with molybdenum and copper for exceptional resistance to sulfuric acid, phosphoric acid, and chloride stress corrosion cracking.</p>
              <p><strong>Incoloy 925</strong> – Age-hardenable version offering high strength and excellent corrosion resistance, used in sour gas and oil field equipment.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Incoloy tubes conform to international standards including <strong>ASTM B163</strong> (seamless tubes), <strong>ASTM B407</strong> (seamless/welded), <strong>ASTM B514</strong> (welded tubes), <strong>ASTM B423</strong> (seamless for 825/925), and <strong>ASTM B705</strong> (welded for 825/925). We supply tubes in various finishes (mill, annealed, pickled, polished) and can custom‑cut to your exact dimensions.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Incoloy Tubes</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B163 / B407 / B514 / B423 / B705</p>
              </div>
              <div className="spec-card">
                <h4>OD Range</h4>
                <p>6 mm – 500 mm</p>
              </div>
              <div className="spec-card">
                <h4>Wall Thickness</h4>
                <p>0.4 mm – 25 mm</p>
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
                <h2>READY STOCK AVAILABILITY – INCOLOY TUBES</h2>
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
                <h2>CHEMICAL COMPOSITION OF INCOLOY TUBES</h2>
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
                <h2>MECHANICAL PROPERTIES OF INCOLOY TUBING</h2>
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
                  WALL THICKNESS RANGE AVAILABILITY: INCOLOY TUBES
                  <span>(ASTM B163 / B407 / B514 / B423 / B705)</span>
                </h2>
                <p>Available in Seamless & Welded forms – Round, Square, Rectangular</p>
              </div>
              <div className="table-responsive">
                <table className="thickness-table">
                  <thead>
                    <tr>
                      <th>Wall Thickness (mm)</th>
                      <th>Availability</th>
                      <th>Wall Thickness (mm)</th>
                      <th>Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftWallThickness.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightWallThickness[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: INCOLOY TUBES (1 mm Wall Thickness)</h2>
              </div>
              <div className="table-responsive">
                <table className="coil-weight-table">
                  <thead>
                    <tr>
                      <th>OD (mm) x WT (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                      <th>OD (mm) x WT (mm)</th>
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
                <h2>INCOLOY TUBE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED INCOLOY TUBE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING INCOLOY TUBES</h2>
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
                <h2>SEARCHES RELATED TO INCOLOY TUBES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING INCOLOY TUBES</h2>
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
                  <h2>SEARCHES RELATED TO INCOLOY TUBES</h2>
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
            <p>Immediate pricing for Incoloy tubes. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IncoloyTubesDetails;