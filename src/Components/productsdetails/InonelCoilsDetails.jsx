import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import hrCoils from "../../products-image/ss-hrcoils.webp";
import crCoils from "../../products-image/ss-crcoils.webp";
import slitCoils from "../../products-image/ss-slitcoils.webp";

import CoilsBanner from "../../products-image/ss-inconel-coils.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "HOT ROLLED (HR) COILS",
    image: hrCoils,
    items: [
      "Inconel Hot Rolled Coils",
      "Inconel Alloy HR Coils",
      "ASME SB168 Inconel HR Coils",
      "Inconel® Alloy Hot Rolled Coils",
    ],
  },
  {
    title: "COLD ROLLED (CR) COILS",
    image: crCoils,
    items: [
      "Inconel Cold Rolled Coils",
      "Inconel® Alloy CR Coils",
      "Inconel Alloy Cold Rolled Coils",
      "ASME SB168 Inconel CR Coils",
    ],
  },
  {
    title: "SLIT & STRIP COILS",
    image: slitCoils,
    items: [
      "Inconel Slit Coils",
      "Inconel Alloy Slit Coils",
      "Inconel® Alloy Slit Coils",
      "ASME SB168 Inconel Slit Coils",
    ],
  },
];

const gradesData = [
  {
    grade: "Inconel 600",
    uns: "N06600",
    werkstoff: "2.4816",
    standard: "NCF 600 / NA 13 / NC15FE11M",
  },
  {
    grade: "Inconel 601",
    uns: "N06601",
    werkstoff: "2.4851",
    standard: "NCF 601 / NA 49 / NC23FeA",
  },
  {
    grade: "Inconel 625",
    uns: "N06625",
    werkstoff: "2.4856",
    standard: "NCF 625 / NA 21 / NC22DNB4M",
  },
  {
    grade: "Inconel 690",
    uns: "N06690",
    werkstoff: "2.4642",
    standard: "—",
  },
  {
    grade: "Inconel 718",
    uns: "N07718",
    werkstoff: "2.4668",
    standard: "—",
  },
  {
    grade: "Inconel 725",
    uns: "N07725",
    werkstoff: "—",
    standard: "—",
  },
  {
    grade: "Inconel X-750",
    uns: "N07750",
    werkstoff: "2.4669",
    standard: "—",
  },
];

const chemicalData = [
  {
    grade: "600",
    c: "0.15 max",
    mn: "1.0 max",
    si: "0.5 max",
    cr: "14.0-17.0",
    ni: "72.0 min",
    mo: "—",
    other: "Fe: 6.0-10.0",
  },
  {
    grade: "601",
    c: "0.10 max",
    mn: "1.0 max",
    si: "0.5 max",
    cr: "21.0-25.0",
    ni: "58.0-63.0",
    mo: "—",
    other: "Al: 1.0-1.7",
  },
  {
    grade: "625",
    c: "0.10 max",
    mn: "0.5 max",
    si: "0.5 max",
    cr: "20.0-23.0",
    ni: "58.0 min",
    mo: "8.0-10.0",
    other: "Nb: 3.15-4.15",
  },
  {
    grade: "690",
    c: "0.05 max",
    mn: "0.5 max",
    si: "0.5 max",
    cr: "27.0-31.0",
    ni: "58.0 min",
    mo: "—",
    other: "Fe: 7.0-11.0",
  },
  {
    grade: "718",
    c: "0.08 max",
    mn: "0.35 max",
    si: "0.35 max",
    cr: "17.0-21.0",
    ni: "50.0-55.0",
    mo: "2.8-3.3",
    other: "Nb: 4.75-5.50",
  },
  {
    grade: "725 / X-750",
    c: "0.08 max",
    mn: "1.0 max",
    si: "0.5 max",
    cr: "14.0-17.0",
    ni: "70.0 min",
    mo: "—",
    other: "Ti: 2.25-2.75",
  },
];

const mechanicalData = [
  {
    grade: "Inconel 600",
    tensile: "655 MPa",
    yield: "310 MPa",
    elongation: "40%",
    density: "8.47 g/cm³",
  },
  {
    grade: "Inconel 601",
    tensile: "550 MPa",
    yield: "205 MPa",
    elongation: "30%",
    density: "8.1 g/cm³",
  },
  {
    grade: "Inconel 625",
    tensile: "930 MPa",
    yield: "517 MPa",
    elongation: "42.5%",
    density: "8.4 g/cm³",
  },
  {
    grade: "Inconel 690",
    tensile: "485 MPa",
    yield: "275 MPa",
    elongation: "25%",
    density: "8.3 g/cm³",
  },
  {
    grade: "Inconel 718",
    tensile: "930 MPa",
    yield: "482 MPa",
    elongation: "45%",
    density: "8.19 g/cm³",
  },
  {
    grade: "Inconel 725 / X-750",
    tensile: "1267 MPa",
    yield: "868 MPa",
    elongation: "25%",
    density: "8.28 g/cm³",
  },
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

const leftData = [
  { size: "4000 × 2000 × 2.0", weight: "136.0" },
  { size: "4000 × 2000 × 3.0", weight: "204.0" },
  { size: "2500 × 1250 × 4.0", weight: "106.0" },
  { size: "3000 × 1500 × 4.0", weight: "153.0" },
  { size: "4000 × 2000 × 4.0", weight: "272.0" },
  { size: "2500 × 1250 × 5.0", weight: "133.0" },
];

const rightData = [
  { size: "3000 × 1500 × 5.0", weight: "191.0" },
  { size: "4000 × 2000 × 5.0", weight: "340.0" },
  { size: "2500 × 1250 × 6.0", weight: "159.0" },
  { size: "3000 × 1500 × 6.0", weight: "230.0" },
  { size: "4000 × 2000 × 6.0", weight: "408.0" },
  { size: "—", weight: "—" },
];


const leftDataNew = [
  { size: "2000 × 1000 × 3.0", weight: "51.0" },
  { size: "2500 × 1250 × 3.0", weight: "79.7" },
  { size: "3000 × 1500 × 3.0", weight: "115.0" },
  { size: "2000 × 1000 × 4.0", weight: "68.0" },
  { size: "2500 × 1250 × 4.0", weight: "106.0" },
  { size: "3000 × 1500 × 4.0", weight: "153.0" },
  { size: "2000 × 1000 × 5.0", weight: "85.0" },
  { size: "2500 × 1250 × 5.0", weight: "133.0" },
  { size: "3000 × 1500 × 5.0", weight: "191.0" },
  { size: "4000 × 2000 × 5.0", weight: "340.0" },
  { size: "2000 × 1000 × 6.0", weight: "102.0" },
  { size: "2500 × 1250 × 6.0", weight: "159.0" },
  { size: "3000 × 1500 × 6.0", weight: "230.0" },
];

const rightDataNew = [
  { size: "4000 × 2000 × 6.0", weight: "408.0" },
  { size: "2500 × 1250 × 8.0", weight: "213.0" },
  { size: "3000 × 1500 × 8.0", weight: "306.0" },
  { size: "4000 × 2000 × 8.0", weight: "544.0" },
  { size: "2500 × 1250 × 10.0", weight: "266.0" },
  { size: "3000 × 1500 × 10.0", weight: "383.0" },
  { size: "4000 × 1500 × 10.0", weight: "510.0" },
  { size: "4000 × 2000 × 10.0", weight: "680.0" },
  { size: "2500 × 1250 × 12.0", weight: "319.0" },
  { size: "3000 × 1500 × 12.0", weight: "459.0" },
  { size: "4000 × 1500 × 12.0", weight: "612.0" },
  { size: "4000 × 2000 × 12.0", weight: "816.0" },
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
  "Inconel 600 / 601 Oxidation Resistant Coils",
  "Inconel 625 High Strength Marine Coils",
  "Inconel 718 Precipitation Hardened Coils",
  "Inconel 690 High Chromium Steam Coils",
  "ASTM B168 Inconel Hot Rolled (HR) Coils",
  "ASME SB168 Inconel Cold Rolled (CR) Coils",
  "Inconel Precision Slit Coils & Industrial Strips",
];

const rightItems = [
  "Inconel Coils Supplier in Mumbai",
  "UNS N06600 / N06625 / N07718 Coil Exporter",
  "INOX 2.4816 / 2.4856 / 2.4668 Alloy Coils",
  "Inconel X-750 Spring Temper Alloy Coils",
  "Best Price Inconel Alloy Coil Dealer in India",
  "Inconel Custom Thickness & Cut-to-Size Coils",
  "Inconel 725 High Pressure Resistance Coils",
];

const searchTerms = [
  "Inconel 600 Coil Price List",
  "Inconel 625 Coil Weight Calculator",
  "Inconel 718 Coil Dimensions",
  "Inconel 601 Coil Price Per Kg in India",
  "Inconel Coil Manufacturer in Mumbai",
  "Inconel 625 Coil Supplier in India",
  "ASTM B168 Inconel Coil Thickness Tolerance",
  "ASME SB168 Inconel 600 Coil Price List PDF",
  "Inconel 625 Coil Mechanical Properties",
  "Inconel 690 Coil Chemical Composition",
  "Inconel Coil Stockist in Pune",
  "Inconel 600 Coil Exporter",
  "Inconel Alloy Coil Price in Mumbai",
  "Inconel Coil Gauge Chart",
  "Inconel Slit Coil Price",
  "Inconel 625 Strip Coil Supplier",
  "Inconel Hot Rolled Coil Price",
  "Inconel Cold Rolled Coil Manufacturers",
  "Inconel Coil Catalog PDF",
  "Inconel 600 Coil Equivalent Grades",
  "Inconel 625 Coil Price per Meter",
  "Inconel 718 Coil Updated Price List",
  "Inconel 600 Coil Size Chart",
  "Inconel Alloy Coil Updated Price List",
  "Inconel Coil Manufacturers in Gujarat",
  "Inconel Coil Stockyards in India",
  "Inconel 625 Coil Thickness Chart",
  "Inconel 601 Coil Price in India",
  "Top 100 Inconel Coil Dealers in Pune",
  "Buy Inconel 600 Coil Online",
  "Inconel Alloy Coil Leading Manufacturers in Mumbai",
  "Inconel 625 Coil Descaled Finish",
  "Inconel 725 Coil 2B Finish Price",
  "Inconel X-750 Coil BA Finish Stockist",
  "UNS N06600 Coil Price India",
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
  {
    name: "Coils",
    link: "/products/Coils",
  },
  {
    name: "Pipes",
    link: "/products/Pipes",
  },
  {
    name: "Plates",
    link: "/products/Plates",
  },
  {
    name: "Round Bars",
    link: "/products/RoundBars",
  },
  {
    name: "Sheets",
    link: "/products/Sheets",
  },
  {
    name: "Tubes",
    link: "/products/Tubes",
  },
  {
    name: "Wires",
    link: "/products/Wires",
  },
  {
    name: "Industrial Flanges",
    link: "/products/IndustrialFlanges",
  },
  {
    name: "Buttweld Fittings",
    link: "/products/ButtweldFittings",
  },
  {
    name: "Angle & Channels",
    link: "/products/AngleChannelsChannels",
  },
  {
    name: "Forged Fittings",
    link: "/products/ForgedFittings",
  },
  {
    name: "Industrial Fasteners",
    link: "/products/IndustrialFasteners",
  },
  {
    name: "Industrial Valves",
    link: "/products/IndustrialValves",
  },
  {
    name: "Patta & Patti",
    link: "/products/PattaPatti",
  },
  {
    name: "Industrial Rings",
    link: "/products/Rings",
  },
  {
    name: "Industrial Circles",
    link: "/products/Circles",
  },
  {
    name: "Industrial Strips",
    link: "/products/Strips",
  }
];

const materials = [
    {
        name: "Copper Nickel",
        link: "/materials/copper-nickel",
    },
    {
        name: "Duplex Steel",
        link: "/materials/duplex-steel",
    },
    {
        name: "Hastelloy",
        link: "/materials/hastelloy",
    },
    {
        name: "Incoloy",
        link: "/materials/incoloy",
    },
    {
        name: "Inconel",
        link: "/materials/inconel",
    },
    {
        name: "Monel",
        link: "/materials/monel",
    },
    {
        name: "Nickel Alloy",
        link: "/materials/nickel-alloy",
    },
    {
        name: "Other Materials",
        link: "/materials/other-materials",
    },
    {
        name: "Sanicro",
        link: "/materials/sanicro",
    },
    {
        name: "Special Materials",
        link: "/materials/special-materials",
    },
    {
        name: "Stainless Steel",
        link: "/materials/stainless-steel",
    },
    {
        name: "Titanium",
        link: "/materials/titanium",
    }
]

const InconelCoilsDetails = () => {
  return (
    <>
        <Helmet>
            <title>Inconel Coils Supplier</title>
            <meta
            name="description"
            content="Supplier and stockist of Inconel coils including grades 600, 601, 625, 690, 718, 725, and X-750 for high-temperature and corrosive applications."
            />
        </Helmet>

        <Navbar />

        <Banner
            title="INCONEL COILS"
            image={ProductBanner}
        />


      


      <div className="product-details-container">
        <div className="product-main-content">
        <section className="product-content">
            <div className="content-header">
                <h1>INCONEL COILS SUPPLIER – 600, 601, 625, 690, 718, 725 &amp; X-750</h1>
            </div>
            <div className="content-image">
                <img src={CoilsBanner} alt="Inconel Coils" className="main-image" />
            </div>
            <div className="content-contact">
                <a href="https://wa.me/919326883622">Enquiry via whatsapp</a>
                <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
        </section>
        <section className="product-content">
            <div className="content-header">
                <h2>INCONEL COILS: TECHNICAL OVERVIEW</h2>
                <p>Inconel coils are nickel-chromium superalloys engineered for extreme heat and corrosive environments. They maintain high mechanical strength at temperatures where standard steel fails, forming a protective, self-healing oxide layer when heated. These properties make them indispensable for aerospace, nuclear reactors, and high-pressure chemical processing.</p>
                <hr/>
                <h3>HEAT-RESISTANT GRADES: INCONEL 600, 601, AND 690</h3>
                <ul>
                    <li><strong>Inconel 600 (UNS N06600):</strong> Resistant to chloride-ion stress corrosion cracking and suited for cryogenic to 2000°F service.</li>
                    <li><strong>Inconel 601 (UNS N06601):</strong> Enhanced with aluminum for superior resistance to high-temperature oxidation and spalling.</li>
                    <li><strong>Inconel 690 (UNS N06690):</strong> High chromium content makes it ideal for steam generator tubing in nuclear applications.</li>
                </ul>
                <h3>CORROSION-RESISTANT GRADES: INCONEL 625 AND 725</h3>
                <ul>
                    <li><strong>Inconel 625 (UNS N06625):</strong> Uses molybdenum and niobium for high strength and strong pitting and crevice corrosion resistance.</li>
                    <li><strong>Inconel 725 (UNS N07725):</strong> Age-hardenable version of Alloy 625 with nearly double the strength for subsea hardware and firewater systems.</li>
                </ul>
                <h3>HIGH-STRENGTH GRADES: INCONEL 718 AND X-750</h3>
                <ul>
                    <li><strong>Inconel 718 (UNS N07718):</strong> Precipitation-hardenable alloy with excellent weldability and creep-rupture strength up to 1300°F.</li>
                    <li><strong>Inconel X-750 (UNS N07750):</strong> Optimized for high-temperature springs and fasteners requiring minimal relaxation under load.</li>
                </ul>
                <hr/>
                <h3>STANDARDS AND QUALITY ASSURANCE</h3>
                <p>Manufactured to <strong>ASTM B168, B443, and ASME SB443</strong> standards, our Inconel coils are available in HR, CR, and precision-slit forms. Every coil undergoes PMI, ultrasonic inspection, and is supported by EN 10204 3.1 certification.</p>
            </div>
        </section>


    <section className="specification-section">

    <h2>Specification of Inconel 600 / 601 / 625 / 690 / 718 / 725 / X-750 Coils</h2>

    <div className="spec-grid">

        <div className="spec-card">
            <h4>Standard</h4>
            <p>ASTM B168 / ASME SB168</p>
        </div>

        <div className="spec-card">
            <h4>Thickness</h4>
            <p>0.2 mm – 5.0 mm</p>
        </div>

        <div className="spec-card">
            <h4>Width</h4>
            <p>3.2 mm – 1500 mm</p>
        </div>

        <div className="spec-card">
            <h4>Length</h4>
            <p>Coil / Strip, As Per Requirement</p>
        </div>

        <div className="spec-card">
            <h4>Temper</h4>
            <p>Soft, Quarter Hard, Half Hard, Hard, Spring Hard</p>
        </div>

        <div className="spec-card">
            <h4>Value Added Services</h4>
            <p>Cutting, Beveling, Polishing, Threading, NDT, Ultrasonic Testing</p>
        </div>

        </div>

        </section>
    <section className="stock-section">
      <div className="stock-container">

        <div className="stock-heading">
          <h2>STOCK AVAILABILITY OF INCONEL COILS</h2>
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
          <h2>EQUIVALENT GRADES: INCONEL 600 / 601 / 625 / 690 / 718 / 725 / X-750 COILS</h2>
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
          <h2>CHEMICAL COMPOSITION OF INCONEL ALLOY COILS</h2>
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
          <h2>MECHANICAL & PHYSICAL PROPERTIES</h2>
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
                  <td>
                    <strong>{item.grade}</strong>
                  </td>
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
            THICKNESS AVAILABILITY: INCONEL COILS
            <span>(ASTM B168 / ASME SB168)</span>
          </h2>

          <p>
            Available for Inconel 600, 601, 625, 690, 718, 725, and X-750 coils
          </p>
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

                  <td className="available">
                    <i className="fa-solid fa-check"></i>
                  </td>

                  <td>{rightThickness[index]}</td>

                  <td className="available">
                    <i className="fa-solid fa-check"></i>
                  </td>
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
          <h2>INCONEL COLD ROLLED COILS (DESCALD) WEIGHT CHART</h2>
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
          <h2>INCONEL 600 / 601 / 625 / 690 / 718 / 725 / X-750 COIL STOCK AVAILABILITY</h2>

          <p>
            ASTM B168 / ASME SB168 / SB443 Inconel alloy coils in standard stock thicknesses
          </p>
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
          <h2>INCONEL COILS THICKNESS GAUGE CHART</h2>
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
          <h2>INCONEL COILS WEIGHT / SIZE CHART</h2>
        </div>

        <div className="table-responsive">
          <table className="specialty-weight-table">

            <thead>
              <tr>
                <th rowSpan="2">Thickness (mm)</th>
                <th rowSpan="2">Weight Kg/M2</th>
                <th colSpan="3">
                  Size in MM (Weight per Coil/Sheet)
                </th>
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
          <h2>INCONEL COILS THICKNESS TOLERANCE</h2>
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
          <h2>SPECIALIZED IN INCONEL 600 / 601 / 625 / 690 / 718 / 725 / X-750 COILS</h2>
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
            <h2>SEARCHES RELATED TO INCONEL ALLOY COILS</h2>
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
                style={{
                  width: "26px",
                  height: "26px",
                }}
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
        <h3>
          <span>OUR</span> PRODUCTS
        </h3>
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
        <h3>
          <span>SHOP BY</span> MATERIALS
        </h3>
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

      <p>
        Immediate pricing for all products. Contact our sales team for bulk
        discounts and technical support.
      </p>

      <a href="/contact-us" className="quote-btn">
        REQUEST PRICING
      </a>
    </div>
    </div>
    </div>

        
    <Footer/>
      
    
    </>
  );
};

export default InconelCoilsDetails;
