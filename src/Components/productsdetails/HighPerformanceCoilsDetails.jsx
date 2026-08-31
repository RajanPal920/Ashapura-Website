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

import CoilsBanner from "../../products-image/ss-highperformance-coils.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "HOT ROLLED (HR) COILS",
    image: hrCoils,
    items: [
      "Nimonic 75 / 80A Hot Rolled Coils",
      "Nitronic 50 (XM-19) HR Coils",
      "Nilo 42 / 48 Hot Rolled Coils",
      "Nichrome 80/20 & Alloy 286 HR Coils",
    ],
  },
  {
    title: "COLD ROLLED (CR) COILS",
    image: crCoils,
    items: [
      "Nimonic N07080 CR Coils",
      "Nitronic 50 Stainless Steel CR Coils",
      "Nichrome N06003 CR Coils",
      "Alloy 926 / Alloy 286 CR Coils",
    ],
  },
  {
    title: "SLIT & STRIP COILS",
    image: slitCoils,
    items: [
      "Super Alloy Precision Slit Coils",
      "Nilo K94100 / K94800 Slit Coils",
      "XM-19 Slit Strips Stockist",
      "Nichrome 80/20 Industrial Strips",
    ],
  },
];

const gradesData = [
  {
    grade: "Nimonic 75 / 80A",
    uns: "N06075 / N07080",
    werkstoff: "2.4951 / 2.4952",
    standard: "Alloy 75 / 80A",
  },
  {
    grade: "Nichrome 80/20",
    uns: "N06003",
    werkstoff: "2.4869",
    standard: "NiCr 80/20",
  },
  {
    grade: "Nitronic 50",
    uns: "S20910",
    werkstoff: "1.3964",
    standard: "XM-19 / Alloy 50",
  },
  {
    grade: "Nilo 42 / 48",
    uns: "K94100 / K94800",
    werkstoff: "1.3917 / -",
    standard: "Alloy 42 / 48",
  },
  {
    grade: "Alloy 286 / 926",
    uns: "S66286 / N08926",
    werkstoff: "1.4980 / 1.4529",
    standard: "Gr 660 / Incoloy 926",
  },
];

const chemicalData = [
  {
    grade: "Nimonic 80A",
    c: "Bal",
    mn: "18-21",
    si: "3.0 max",
    cr: "—",
    ni: "1.0 max",
    mo: "Ti: 1.8-2.7",
    other: "—",
  },
  {
    grade: "Nichrome 80/20",
    c: "Bal",
    mn: "20-23",
    si: "1.0 max",
    cr: "—",
    ni: "0.6 max",
    mo: "Si: 0.7-1.6",
    other: "—",
  },
  {
    grade: "Nitronic 50",
    c: "11.5-13.5",
    mn: "20.5-23.5",
    si: "Bal",
    cr: "1.5-3.0",
    ni: "4.0-6.0",
    mo: "N: 0.2-0.4",
    other: "—",
  },
  {
    grade: "Nilo 42",
    c: "41 min",
    mn: "0.25 max",
    si: "Bal",
    cr: "—",
    ni: "0.8 max",
    mo: "C: 0.05 max",
    other: "—",
  },
  {
    grade: "Alloy 286",
    c: "24-27",
    mn: "13.5-16",
    si: "Bal",
    cr: "1.0-1.5",
    ni: "2.0 max",
    mo: "Ti: 1.9-2.3",
    other: "—",
  },
];

const mechanicalData = [
  {
    grade: "Nimonic 75/80A",
    tensile: "750 MPa",
    yield: "275 MPa",
    elongation: "42%",
    density: "8.19 g/cm³",
  },
  {
    grade: "Nichrome 80/20",
    tensile: "750 MPa",
    yield: "275 MPa",
    elongation: "42%",
    density: "8.40 g/cm³",
  },
  {
    grade: "Nitronic 50",
    tensile: "655 MPa",
    yield: "345 MPa",
    elongation: "35%",
    density: "7.88 g/cm³",
  },
  {
    grade: "Nilo 42 / 48",
    tensile: "490 - 520 MPa",
    yield: "250 MPa",
    elongation: "43%",
    density: "8.11 g/cm³",
  },
  {
    grade: "Alloy 926 / 286",
    tensile: "648 - 965 MPa",
    yield: "296 - 655 MPa",
    elongation: "12 - 35%",
    density: "8.03 g/cm³",
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
  "Nimonic 75 / 80A Gas Turbine Grade Coils",
  "Nichrome 80/20 Electrical Resistance Coils",
  "Nitronic 50 (XM-19) High Strength Coils",
  "Alloy 286 (Grade 660) Precipitation Hardened Coils",
  "Nilo 42 / 48 Controlled Expansion Alloy Coils",
  "Alloy 926 (6Mo) High Corrosion Resistance Coils",
  "Super Alloy Coil Manufacturer in Mumbai, India",
];

const rightItems = [
  "Precision Slit Super Alloy Strips & Coils",
  "Annealed & Pickled Super Alloy Coils Dealer",
  "Hot Rolled (HR) & Cold Rolled (CR) Super Alloy Coils",
  "Custom Cut-to-Size Super Alloy Industrial Coils",
  "UNS N06075 / N07080 / N06003 Coil Exporter",
  "Special Alloy Cold Rolled (CR) Coils Stockist",
  "Super Alloy Coil Suppliers at Best Price",
];

const searchTerms = [
  "Nimonic 80A Coil Price List",
  "Nichrome 80/20 Resistance Coil Supplier",
  "Nitronic 50 Coil Weight Calculator",
  "Alloy 286 Coil Dimensions",
  "Nilo 42 Coil Price Per Kg in India",
  "Alloy 926 Coil Manufacturer in Mumbai",
  "Nimonic 75 Coil Supplier in India",
  "ASTM B463 Nimonic Coil Thickness Tolerance",
  "ASME SA240 Nitronic 50 Coil Price List PDF",
  "Nichrome 80/20 Coil Mechanical Properties",
  "Alloy 286 Coil Chemical Composition",
  "Super Alloy Coil Stockist in Pune",
  "Nimonic 80A Coil Exporter",
  "Nitronic 50 Coil Price in Mumbai",
  "Nilo 48 Coil Gauge Chart",
  "Alloy 926 Slit Coil Price",
  "Alloy 286 Strip Coil Supplier",
  "Nimonic 75 Hot Rolled Coil Price",
  "Nichrome 80/20 Cold Rolled Coil Manufacturers",
  "Super Alloy Coil Catalog PDF",
  "Nitronic 50 Coil Equivalent Grades",
  "Alloy 286 Coil Price per Meter",
  "Nilo 42 Updated Price List",
  "Nimonic 80A Coil Size Chart",
  "Alloy 926 Coil Manufacturers in Gujarat",
  "Nitronic 50 Coil Stockyards in India",
  "Alloy 286 Coil Thickness Chart",
  "Nimonic 75 Coil Price in India",
  "Buy Nitronic 50 Coil Online",
  "Nilo 42 Coil Descaled Finish",
  "UNS N07080 Coil Price India",
  "UNS S20910 Coil Price Mumbai",
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

const HighPerformanceCoilsDetails = () => {
  return (
    <>
        <Helmet>
            <title>High-Performance Alloy Coils Supplier</title>
            <meta
            name="description"
            content="Manufacturer and supplier of high-performance alloy coils including Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 and Alloy 926."
            />
        </Helmet>

        <Navbar />

        <Banner
            title="HIGH PERFORMANCE ALLOY COILS"
            image={ProductBanner}
        />


      


      <div className="product-details-container">
        <div className="product-main-content">
        <section className="product-content">
            <div className="content-header">
                <h1>High-Performance Alloy Coils Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy</h1>
            </div>
            <div className="content-image">
                <img src={CoilsBanner} alt="High-performance alloy coils" className="main-image" />
            </div>
            <div className="content-contact">
                <a href="https://wa.me/919326883622">Enquiry via whatsapp</a>
                <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
        </section>
        <section className="product-content">
            <div className="content-header">
                <h2>High-Performance Specialized Alloy Coils: Technical Overview</h2>
                <p>This selection of specialized alloy coils is engineered for mission-critical applications where standard stainless steels fail due to thermal fatigue, mechanical stress, or aggressive chemical attack. These coils provide unique solutions ranging from ultra-high temperature resistance and controlled thermal expansion to superior strength in corrosive marine environments.</p>
                <hr/>
                <h3>Nimonic 75 / 80A Coils (High-Temperature Superalloys)</h3>
                <p>Nimonic alloys are nickel-chromium based superalloys designed for high-temperature service where creep resistance is the primary concern.</p>
                <ul>
                    <li><strong>Nimonic 75 (UNS N06075):</strong> Offers excellent oxidation resistance and mechanical properties at high temperatures, making it a staple for furnace hardware.</li>
                    <li><strong>Nimonic 80A (UNS N07080):</strong> A precipitation-hardenable alloy strengthened by aluminum and titanium, providing significantly higher creep-rupture properties up to 1500°F (815°C).</li>
                    <li><strong>Key Applications:</strong> Gas turbine components, internal combustion engine valves, and specialized heat-treatment furnace muffles.</li>
                </ul>
                <h3>Nichrome 80 / 20 Coils (Electrical Resistance)</h3>
                <p>Nichrome 80/20 is the gold standard for electrical resistance and heating elements. When heated, it forms a stable, tenacious layer of chromium oxide that protects the coil from further degradation during intermittent heating cycles.</p>
                <ul>
                    <li><strong>Key Applications:</strong> Industrial heating elements, laboratory equipment, and heat-treatment furnace components.</li>
                </ul>
                <h3>Nitronic 50 (XM–19) Coils (High Strength & Corrosion)</h3>
                <p>Nitronic 50 is a nitrogen-strengthened austenitic stainless steel that offers a combination of corrosion resistance and strength superior to Types 316 and 317. It remains non-magnetic even after severe cold working.</p>
                <ul>
                    <li><strong>Key Applications:</strong> Marine pump shafts, subsea hardware, and chemical processing valves requiring high yield strength.</li>
                </ul>
                <h3>Nilo 42 & Nilo 48 Coils (Controlled Expansion)</h3>
                <p>The Nilo series is engineered for applications requiring dimensional stability across varying temperatures.</p>
                <ul>
                    <li><strong>Nilo 42:</strong> Features a low coefficient of thermal expansion up to 570°F (300°C), ideal for glass-to-metal seals.</li>
                    <li><strong>Nilo 48:</strong> Designed to match the thermal expansion of specific ceramics and soft glasses.</li>
                    <li><strong>Key Applications:</strong> Thermostats, electronic tubes, and laser components.</li>
                </ul>
                <h3>Alloy 286 (660) & Alloy 926 (6% Moly) Coils</h3>
                <ul>
                    <li><strong>Alloy 286:</strong> An iron-base, age-hardenable superalloy designed for high strength and corrosion resistance up to 1290°F (700°C).</li>
                    <li><strong>Alloy 926:</strong> A super-austenitic 6% Molybdenum stainless steel with increased nitrogen, offering exceptional resistance to pitting and crevice corrosion in high-chloride media.</li>
                </ul>
                <hr/>
                <h3>Specification of Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 & 926 Coils</h3>
                <p>These high-performance alloys are supplied in forms and tempers suited to critical engineering applications.</p>
                <ul>
                    <li><strong>Standards:</strong> ASTM/ASME B463, SA240, SF30, B168, SB709</li>
                    <li><strong>Thickness Range:</strong> 0.2 mm – 5.0 mm</li>
                    <li><strong>Width / Form:</strong> 3.2 mm – 1500 mm | Coil, Strip, Slit Strips</li>
                    <li><strong>Hardness / Temper:</strong> Soft, Half Hard, Hard, Spring Hard</li>
                </ul>
            </div>
        </section>


    <section className="specification-section">

    <h2>Specification of High-Performance Alloy Coils</h2>

    <div className="spec-grid">

        <div className="spec-card">
            <h4>Standard</h4>
            <p>ASTM/ASME B463, SA240, SF30, B168, SB709</p>
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
            <p>As Per Requirement</p>
        </div>

        <div className="spec-card">
            <h4>Finish</h4>
            <p>Coil, Strip, Slit Strips</p>
        </div>

        <div className="spec-card">
            <h4>Hardness</h4>
            <p>Soft, Half Hard, Hard, Spring Hard</p>
        </div>

        </div>

        </section>
    <section className="stock-section">
      <div className="stock-container">

        <div className="stock-heading">
          <h2>STOCK AVAILABILITY OF HIGH-PERFORMANCE SUPER ALLOY COILS</h2>
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
          <h2>EQUIVALENT GRADES: NIMONIC, NICHROME, NITRONIC, NILO, ALLOY 286 & 926</h2>
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
          <h2>CHEMICAL COMPOSITION OF SUPER ALLOY COILS</h2>
        </div>

        <div className="table-responsive">
          <table className="chemical-table">
            <thead>
              <tr>
                <th>Grade</th>
                <th>Ni</th>
                <th>Cr</th>
                <th>Fe</th>
                <th>Mo</th>
                <th>Mn</th>
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
            SUPER ALLOY COILS THICKNESS GAUGE CHART
            <span>(ASTM / ASME STANDARDS)</span>
          </h2>

          <p>
            Available for Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 and Alloy 926 coils
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
          <h2>SUPER ALLOY COILS WEIGHT / SIZE CHART (APPROX. KG)</h2>
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
          <h2>SUPER ALLOY COILS WEIGHT / SIZE CHART (APPROX. KG)</h2>

          <p>
            Applicable for: Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 and Alloy 926 coils
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
          <h2>SUPER ALLOY COILS THICKNESS GAUGE CHART</h2>
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
          <h2>SPECIALIZED IN HIGH-PERFORMANCE SUPER ALLOY COILS</h2>
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
          <h2>SUPER ALLOY COILS THICKNESS TOLERANCE</h2>
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
          <h2>SPECIALIZED IN HIGH-PERFORMANCE SUPER ALLOY COILS</h2>
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
            <h2>SEARCHES RELATED TO SUPER ALLOY COILS</h2>
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

export default HighPerformanceCoilsDetails;
