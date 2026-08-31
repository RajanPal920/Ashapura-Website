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

import CoilsBanner from "../../products-image/ss-coils.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "HOT ROLLED (HR) COILS",
    image: hrCoils,
    items: [
      "SS 304/304L / 316/316L HR Coils",
      "SS 310S / 321 / 347 HR Coils",
      "ASME SA 240 Stainless Steel HR",
      "SS 904L / 253 MA Hot Rolled",
    ],
  },
  {
    title: "COLD ROLLED (CR) COILS",
    image: crCoils,
    items: [
      "SS 304 / 316 / 317L CR Coils",
      "SS 17-4 PH / 904L CR Coils",
      "High Mirror Finish NO.8 Coils",
      "BA / 2B Finish Cold Rolled Coils",
    ],
  },
  {
    title: "SLIT & STRIP COILS",
    image: slitCoils,
    items: [
      "Precision Slit SS Coils / Strips",
      "ASME SA 240 Steel Slit Coils",
      "SS 308 / 309 Slit Strips",
      "Custom Width SS Slitting Services",
    ],
  },
];

const gradesData = [
  {
    grade: "SS 304 / 304L",
    uns: "S30400 / S30403",
    werkstoff: "1.4301 / 1.4307",
    standard: "X5CrNi18-10 / SUS 304L",
  },
  {
    grade: "SS 316 / 316L",
    uns: "S31600 / S31603",
    werkstoff: "1.4401 / 1.4404",
    standard: "X5CrNiMo17-12-2 / SUS 316L",
  },
  {
    grade: "SS 310S",
    uns: "S31008",
    werkstoff: "1.4845",
    standard: "X8CrNi25-21 / SUS 310S",
  },
  {
    grade: "SS 321",
    uns: "S32100",
    werkstoff: "1.4541",
    standard: "X6CrNiTi18-10 / SUS 321",
  },
  {
    grade: "SS 904L",
    uns: "N08904",
    werkstoff: "1.4539",
    standard: "X1NiCrMoCu25-20-5",
  },
  {
    grade: "17-4 PH",
    uns: "S17400",
    werkstoff: "1.4542",
    standard: "X5CrNiCuNb16-4",
  },
  {
    grade: "253 MA",
    uns: "S30815",
    werkstoff: "1.4835",
    standard: "X9CrNiSiNCe21-11-2",
  },
];

const chemicalData = [
  {
    grade: "304",
    c: "0.08 max",
    mn: "2.0 max",
    si: "0.75 max",
    cr: "18-20",
    ni: "8-11",
    mo: "—",
    other: "—",
  },
  {
    grade: "316L",
    c: "0.035 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "16-18",
    ni: "10-14",
    mo: "2.0-3.0",
    other: "—",
  },
  {
    grade: "310S",
    c: "0.08 max",
    mn: "2.0 max",
    si: "1.5 max",
    cr: "24-26",
    ni: "19-22",
    mo: "0.75 max",
    other: "—",
  },
  {
    grade: "321",
    c: "0.08 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "17-19",
    ni: "9-12",
    mo: "—",
    other: "Ti: 5(C+N)-0.70",
  },
  {
    grade: "904L",
    c: "0.02 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "19-23",
    ni: "23-28",
    mo: "4.0-5.0",
    other: "Cu: 1.0-2.0",
  },
  {
    grade: "17-4 PH",
    c: "0.07 max",
    mn: "1.0 max",
    si: "1.0 max",
    cr: "15-17.5",
    ni: "3-5",
    mo: "—",
    other: "Cu: 3-5, Nb: 0.15-0.45",
  },
  {
    grade: "253 MA",
    c: "0.05-0.1",
    mn: "0.8 max",
    si: "1.4-2.0",
    cr: "20-22",
    ni: "10-12",
    mo: "—",
    other: "N: 0.14-0.2, Ce: 0.03-0.08",
  },
];

const mechanicalData = [
  {
    grade: "304 / 316L",
    tensile: "515 MPa",
    yield: "205 MPa",
    elongation: "35% - 40%",
    density: "8.0 g/cm³",
  },
  {
    grade: "310S",
    tensile: "515 MPa",
    yield: "205 MPa",
    elongation: "40%",
    density: "7.9 g/cm³",
  },
  {
    grade: "904L",
    tensile: "485 MPa",
    yield: "275 MPa",
    elongation: "20%",
    density: "7.95 g/cm³",
  },
  {
    grade: "17-4 PH",
    tensile: "930 MPa (min)",
    yield: "725 MPa (min)",
    elongation: "16%",
    density: "7.8 g/cm³",
  },
  {
    grade: "253 MA",
    tensile: "600 MPa",
    yield: "310 MPa",
    elongation: "40%",
    density: "7.8 g/cm³",
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
  "SS 304 / 304L General Purpose Industrial Coils",
  "SS 316 / 316L Marine & Chemical Grade Coils",
  "SS 310S High-Temperature Heat Resistant Coils",
  "SS 17-4 PH Precipitation Hardened Coils",
  "SS 904L / 317L Severe Corrosion Resistant Coils",
  "253 MA (S30815) High-Performance Alloy Coils",
  "SS Coil Manufacturer & Stockist in Mumbai, India",
];

const rightItems = [
  "Precision Slit Stainless Steel Strips & Coils",
  "NO.8 Mirror / BA / Scotch Brite Finish SS Coils",
  "Hot Rolled (HR) & Cold Rolled (CR) SS Coils",
  "Full Hard / Half Hard / Soft Annealed Coils",
  "ASTM A240 / ASME SA240 Compliant SS Coils",
  "Specialty Grades SS 308, 309, 321 Coils",
  "Stainless Steel Coil Suppliers at Best Price",
];

const searchTerms = [
  "SS 304 Coil Price List",
  "SS 316L Coil Weight Calculator",
  "SS 310S Coil Dimensions",
  "SS 904L Coil Price Per Kg in India",
  "SS 304 Coil Manufacturer in Mumbai",
  "SS 316 Coil Supplier in India",
  "ASTM A240 SS 304 Coil Thickness Tolerance",
  "ASME SA240 SS 316 Coil Price List PDF",
  "SS 304 Coil Mechanical Properties",
  "SS 316 Coil Chemical Composition",
  "SS Coil Stockist in Pune",
  "SS 304 Coil Exporter",
  "SS 316 Coil Price in Mumbai",
  "SS Coil Gauge Chart",
  "SS 304 Slit Coil Price",
  "SS 316 Strip Coil Supplier",
  "SS 304 Hot Rolled Coil Price",
  "SS 316 Cold Rolled Coil Manufacturers",
  "SS Coil Catalog PDF",
  "SS 304 Coil Equivalent Grades",
  "SS 316 Coil Price per Meter",
  "SS 304 Updated Price List",
  "SS 316 Coil Size Chart",
  "SS Coil Manufacturers in Gujarat",
  "SS 304 Coil Stockyards in India",
  "SS 316 Coil Thickness Chart",
  "SS 304 Coil Price in India",
  "Top 100 SS Coil Dealers in Mumbai",
  "Buy SS 304 Coil Online",
  "SS 316 Leading Manufacturers in India",
  "SS 304 Coil Descaled Finish",
  "SS 316 Coil 2B Finish Price",
  "SS 304 Coil BA Finish Stockist",
  "UNS S30400 Coil Price India",
  "UNS S31603 Coil Price Mumbai",
  "17-4 PH Coil Price India",
  "253 MA Coil Stockist Mumbai",
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

const SsCoilsDetails = () => {
  return (
    <>
        <Helmet>
            <title>Coils Manufacturer & Supplier</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
        </Helmet>

        <Navbar />

        <Banner
            title="COILS"
            image={ProductBanner}
        />


      


      <div className="product-details-container">
        <div className="product-main-content">
        <section className="product-content">
            <div className="content-header">
                <h1>Stainless Steel Coils Supplier – 304, 304L, 316, 316L, 310S, 904L & More</h1>
            </div>
            <div className="content-image">
                <img src={CoilsBanner} alt="Stainless Steel Coils" className="main-image" />
        
            </div>
            <div className="content-contact">
                <a href="https://wa.me/919876543210">Enquiry via whatsapp</a>
                <a href="tel:919876543210">Enquiry via Call</a>
            </div>
        </section>
        <section className="product-content">
            <div className="content-header">
                <h2>Stainless Steel Coils: Technical Overview and Grade Characteristics</h2>
                <p>Stainless steel coils are the foundational material for modern industrial
                    infrastructure, offering a versatile range of corrosion resistance, mechanical
                    strength, and thermal stability. From standard architectural applications to 
                    extreme chemical processing, these austenitic and martensitic grades are engineered 
                    to perform under diverse environmental stresses.
                </p>
                <hr/>
                <h3>Standard Austenitic Grades: 304/304L & 316/316L</h3>
                <ul>
                    <li><strong>SS 304/304L (UNS S30400/S30403):</strong></li><p>The most widely used "18/8" stainless steel. Grade 
                    304L features lower carbon to prevent sensitization during welding. It is the industry
                     standard for food processing, kitchen equipment, and architectural paneling.</p>
                </ul>
                <ul>    
                    <li><strong>SS 316/316L (UNS S31600/S31603):</strong></li><p> Enhanced with <strong>Molybdenum</strong>, these coils offer superior 
                    resistance to chlorides and marine environments. They are the primary choice for pharmaceutical
                     equipment, chemical tankers, and coastal infrastructure.</p>
                </ul>
                <h3>High-Temperature & Heat-Resistant Grades</h3>
                <ul>
                    <li><strong>SS 309 & 310S:</strong></li><p>High-nickel and high-chromium alloys designed for 
                        oxidation resistance.<strong>310S (UNS S31008)</strong> is specifically used for continuous service up to
                        <strong>1100°C (2012°F)</strong> in furnace parts and heat treatment equipment.</p>
                    <li><strong>253 MA (UNS S30815):</strong></li><p> A lean austenitic heat-resistant grade with rare earth metals 
                        and nitrogen additions. It provides excellent creep strength and oxidation resistance, often outperforming 
                        310S in cyclic temperature environments like cyclone components and biomass plants</p>
                    <li><strong>SS 321 (UNS S32100):</strong></li><p>Titanium-stabilized to prevent intergranular corrosion. It is ideal 
                        for high-temperature applications in the range of <strong>427°C to 815°C</strong>, such as aircraft exhaust stacks and manifold 
                        systems.</p>        
                </ul>
                <h3>Specialized Corrosion & High-Strength Grades</h3>
                <ul>
                    <li><strong>SS 317L (UNS S31703):</strong></li><p>A low-carbon, high-molybdenum version of 316L, providing enhanced resistance to 
                    chemical attack by sulfuric and phosphoric acids.</p>

                    <li><strong>SS 904L (UNS N08904):</strong></li><p>A non-stabilized high-alloy austenitic steel with copper additions. It offers exceptional
                    resistance to strong reducing acids and is widely used in pulp and paper industries and sulfuric acid plants.</p>

                    <li><strong>SS 17-4 PH (UNS S17400): </strong></li><p>A chromium-copper precipitation-hardening martensitic stainless steel. It provides an
                    outstanding combination of high strength, hardness, and moderate corrosion resistance, essential for aerospace components and pump shafts.</p>

                    <li><strong>SS 308:</strong></li><p>Primarily used as a filler metal or for specialized surfacing applications requiring a slightly higher 
                    alloy content than standard 304.</p>
                </ul>
                <hr/>

                <h3>Manufacturing and quality standards</h3>
                <p>Our stainless steel coils are manufactured to meet global specifications, including <strong>ASTM A240 and ASME SA240</strong>. We offer these in 
                    several processing formats:</p>    
                <ul>
                    <li><strong>Cold Rolled(CR):</strong></li><p>2B, BA, No.4, and Mirror finishes for applications requiring high surface aesthetics and tight 
                    tolerances.</p>

                    <li><strong>Hot Rolled(HR):</strong></li><p>No.1 finish for heavy-duty structural fabrication and industrial tanks.</p>

                    <li><strong>Slit Coils:</strong></li><p> Precision-slit to narrow widths for automated stamping and roll-forming lines.</p>


                </ul>
            </div>
        </section>


    <section className="specification-section">

    <h2>Specification of Stainless Steel Coils</h2>

    <div className="spec-grid">

        <div className="spec-card">
            <h4>Standard</h4>
            <p>ASTM A240 / ASME SA240</p>
        </div>

        <div className="spec-card">
            <h4>Thickness</h4>
            <p>0.2 mm – 50 mm</p>
        </div>

        <div className="spec-card">
            <h4>Width</h4>
            <p>10 mm – 2000 mm</p>
        </div>

        <div className="spec-card">
            <h4>Length</h4>
            <p>As Per Requirement</p>
        </div>

        <div className="spec-card">
            <h4>Finish</h4>
            <p>2B, BA, No.1, No.4, Hairline, Mirror</p>
        </div>

        <div className="spec-card">
            <h4>Hardness</h4>
            <p>Soft, Half Hard, Full Hard</p>
        </div>

        </div>

        </section>
    <section className="stock-section">
      <div className="stock-container">

        <div className="stock-heading">
          <h2>STOCK AVAILABILITY OF STAINLESS STEEL COILS</h2>
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
          <h2>EQUIVALENT GRADES: STAINLESS STEEL COILS</h2>
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
          <h2>CHEMICAL COMPOSITION OF STAINLESS STEEL COILS</h2>
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
            THICKNESS AVAILABILITY: STAINLESS STEEL COILS
            <span>(ASTM A240 / ASME SA240)</span>
          </h2>

          <p>
            Available for Grades: 304, 304L, 308, 309, 310S, 316, 316L,
            317L, 321, 904L
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
          <h2>COLD ROLLED DESCALED COIL WEIGHT & SIZE CHART</h2>
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
          <h2>STAINLESS STEEL COILS: 1D FINISH WEIGHT CHART</h2>

          <p>
            Applicable for: 304/304L, 308, 309, 310S, 316/316L,
            317L, 321, and 904L Coils
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
          <h2>17-4 PH &amp; 253 MA COILS THICKNESS GAUGE CHART</h2>
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
          <h2>SPECIALTY SS COILS WEIGHT / SIZE CHART</h2>
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
          <h2>17-4 PH &amp; 253 MA COILS THICKNESS TOLERANCE</h2>
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
          <h2>SPECIALIZED IN STAINLESS STEEL COILS (ALL GRADES)</h2>
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
            <h2>SEARCHES RELATED TO STAINLESS STEEL COILS</h2>
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

export default SsCoilsDetails;
