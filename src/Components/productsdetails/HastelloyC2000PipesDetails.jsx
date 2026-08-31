import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import  hastelloySeamless from "../../products-image/ss-nimonic-pipes.webp";
import hastelloyWelded from "../../products-image/ss-nitronic-pipes.webp";
import hastelloyErw from "../../products-image/ss-nichrome-pipes.webp";
import hastelloyEfw from "../../products-image/ss-nilo42-pipes.webp";
import hastelloyUbo from "../../products-image/ss-alloy-926-pipes.webp";
import hastelloySpecial from "../../products-image/ss-alloy-a286-pipes.webp";

import hastelloyc2000 from "../../products-image/ss-hastelloy-c2000-pipes.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "HASTELLOY SEAMLESS PIPES",
    image: hastelloySeamless,
    items: [
      "Hastelloy C2000 / C59 / C4 / H / N Seamless",
      "ASTM B622 / B619 / B626",
      "UNS N06200, N06059, N06455, N06002, N10003",
      "Corrosion Resistant & High Temperature",
    ],
  },
  {
    title: "HASTELLOY WELDED PIPES",
    image: hastelloyWelded,
    items: [
      "Hastelloy C2000 / C59 / C4 / H / N Welded",
      "ASTM B619 / B626 / B775",
      "Longitudinal & Spiral Welded",
      "Industrial Process Piping",
    ],
  },
  {
    title: "HASTELLOY ERW PIPES",
    image: hastelloyErw,
    items: [
      "Hastelloy ERW Pipes",
      "Electric Resistance Welded",
      "ASTM B619 / B626 ERW",
      "High Integrity Welded Seams",
    ],
  },
  {
    title: "HASTELLOY EFW PIPES",
    image: hastelloyEfw,
    items: [
      "Hastelloy EFW Pipes",
      "Electric Fusion Welded",
      "ASTM B619 / B775 EFW",
      "Heavy Wall & Large Diameters",
    ],
  },
  {
    title: "HASTELLOY UBO PIPES",
    image: hastelloyUbo,
    items: [
      "Hastelloy UBO Pipes",
      "Unified Bare Outer Pipes",
      "Superior Corrosion & Oxidation Resistance",
      "For Extreme Service Environments",
    ],
  },
  {
    title: "HASTELLOY SPECIALTY PIPES",
    image: hastelloySpecial,
    items: [
      "Hastelloy Nickel-Molybdenum-Chromium Alloys",
      "Various Grades for Different Needs",
      "Exceptional Pitting & Stress Corrosion Cracking Resistance",
      "For Chemical, Pharmaceutical, Nuclear",
    ],
  }
];

const gradesData = [
  {
    grade: "Hastelloy C2000",
    uns: "N06200",
    werkstoff: "2.4675",
    standard: "ASTM B622 / B619 / B626",
  },
  {
    grade: "Hastelloy C59",
    uns: "N06059",
    werkstoff: "2.4605",
    standard: "ASTM B622 / B619 / B626",
  },
  {
    grade: "Hastelloy C4",
    uns: "N06455",
    werkstoff: "2.4610",
    standard: "ASTM B622 / B619 / B626",
  },
  {
    grade: "Hastelloy H",
    uns: "N06002",
    werkstoff: "2.4665",
    standard: "ASTM B622 / B619 / B626",
  },
  {
    grade: "Hastelloy N",
    uns: "N10003",
    werkstoff: "2.4666",
    standard: "ASTM B622 / B619 / B626",
  }
];

const chemicalData = [
  {
    grade: "Hastelloy C2000",
    c: "0.01 max",
    mn: "0.5 max",
    si: "0.08 max",
    cr: "22.0 – 24.0",
    ni: "Balance",
    mo: "15.0 – 17.0",
    other: "Cu: 1.3-1.9, Co: 2.0 max, Fe: 3.0 max",
  },
  {
    grade: "Hastelloy C59",
    c: "0.01 max",
    mn: "0.5 max",
    si: "0.1 max",
    cr: "22.0 – 24.0",
    ni: "Balance",
    mo: "15.0 – 16.5",
    other: "Co: 0.3 max, Fe: 1.5 max, P: 0.015 max",
  },
  {
    grade: "Hastelloy C4",
    c: "0.015 max",
    mn: "1.0 max",
    si: "0.08 max",
    cr: "14.0 – 18.0",
    ni: "Balance",
    mo: "14.0 – 17.0",
    other: "Co: 2.0 max, Fe: 3.0 max, Ti: 0.7 max",
  },
  {
    grade: "Hastelloy H",
    c: "0.05 – 0.15",
    mn: "1.0 max",
    si: "1.0 max",
    cr: "20.5 – 23.0",
    ni: "Balance",
    mo: "8.0 – 10.0",
    other: "Co: 0.5-2.5, Fe: 17.0-20.0, W: 0.2-1.0",
  },
  {
    grade: "Hastelloy N",
    c: "0.06 max",
    mn: "0.8 max",
    si: "0.35 max",
    cr: "6.0 – 8.0",
    ni: "Balance",
    mo: "15.0 – 18.0",
    other: "Fe: 5.0 max, Co: 0.2 max, Cu: 0.35 max, V: 0.5 max",
  }
];

const mechanicalData = [
  {
    grade: "Hastelloy C2000",
    tensile: "690 MPa (min)",
    yield: "310 MPa (min)",
    elongation: "30%",
    density: "8.50 g/cm³",
  },
  {
    grade: "Hastelloy C59",
    tensile: "690 MPa (min)",
    yield: "310 MPa (min)",
    elongation: "30%",
    density: "8.60 g/cm³",
  },
  {
    grade: "Hastelloy C4",
    tensile: "620 MPa (min)",
    yield: "280 MPa (min)",
    elongation: "30%",
    density: "8.60 g/cm³",
  },
  {
    grade: "Hastelloy H",
    tensile: "620 MPa (min)",
    yield: "310 MPa (min)",
    elongation: "20%",
    density: "8.22 g/cm³",
  },
  {
    grade: "Hastelloy N",
    tensile: "620 MPa (min)",
    yield: "310 MPa (min)",
    elongation: "20%",
    density: "8.78 g/cm³",
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
  "Hastelloy C2000 / C59 / C4 / H / N Pipes",
  "Seamless & Welded, ERW & EFW",
  "ASTM B622 / B619 / B626 / B775 Compliant",
  "Exceptional Pitting & Crevice Corrosion Resistance",
  "Resistant to Stress Corrosion Cracking & Sulfuric Acid",
  "Hastelloy Pipes Manufacturer in India",
];

const rightItems = [
  "ASTM B622 / B619 / B626 / B775 Hastelloy Pipes",
  "Seamless Round, Square, and Rectangular Pipes",
  "Custom Sizes, Schedules, and Cut-to-Length Supply",
  "Full Hard / Soft Annealed / Cold Drawn Pipes",
  "Electropolished & Precision Tubing Solutions",
  "Hastelloy Hollow Section & Square Pipes",
  "Hastelloy Alloy Pipe Supplier in Mumbai",
];

const searchTerms = [
  "Hastelloy C2000 Pipe Price Per Kg",
  "Hastelloy C59 Pipe Price Per Kg",
  "Hastelloy C4 Pipe Price Per Kg",
  "Hastelloy H Seamless Pipe Weight Chart",
  "Hastelloy N Mechanical Properties",
  "Hastelloy Pipe Supplier In India",
  "Hastelloy C2000 Chemical Composition",
  "Hastelloy C59 UNS N06059",
  "Hastelloy N Heat Treatment",
  "Hastelloy Pipe Specifications Pdf",
  "Hastelloy C2000 vs C276 Difference",
  "Hastelloy Pipe Weight Calculator",
  "Hastelloy Pipe Stockist",
  "Hastelloy C2000 Pipe Exporter",
  "Hastelloy C59 Welded Pipe Supplier",
  "Hastelloy C4 Pipe Schedule",
  "Hastelloy H Equivalent Grades",
  "Hastelloy C2000 2.4675",
  "Hastelloy N 2.4666",
  "Hastelloy Pipe Manufacturers In Mumbai",
  "Buy Hastelloy Pipes In India",
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

const HastelloyC2000PipesDetails = () => {
  return (
    <>
        <Helmet>
            <title>Hastelloy Pipes Supplier – C2000, C59, C4, H, N Alloy Pipes</title>
            <meta
            name="description"
            content="Supplier of Hastelloy pipes (C2000, C59, C4, H, N) with exceptional corrosion resistance and high-temperature strength. Seamless, welded, ERW, EFW pipes available."
            />
        </Helmet>

        <Navbar />

        <Banner
            title="HASTELLOY PIPES"
            image={ProductBanner}
        />

      <div className="product-details-container">
        <div className="product-main-content">
        <section className="product-content">
            <div className="content-header">
                <h1>HASTELLOY PIPES SUPPLIER – NICKEL‑MOLYBDENUM‑CHROMIUM ALLOY PIPES (C2000, C59, C4, H, N)</h1>
            </div>
            <div className="content-image">
                <img src={hastelloyc2000} alt="Hastelloy Pipes" className="main-image" />
            </div>
            <div className="content-contact">
                <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
                <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
        </section>
        <section className="product-content">
            <div className="content-header">
                <h2>HASTELLOY PIPES: SUPERIOR CORROSION RESISTANCE FOR THE MOST AGGRESSIVE ENVIRONMENTS</h2>
                <p>Hastelloy is a family of nickel‑molybdenum‑chromium superalloys renowned for their outstanding resistance to pitting, crevice corrosion, and stress corrosion cracking. Available in a wide range of grades-<strong>Hastelloy C2000, C59, C4, H, and N</strong>-each alloy is tailored to specific service conditions, from highly oxidizing to reducing media, and from cryogenic to high‑temperature applications. These pipes combine excellent mechanical strength with exceptional fabricability, making them the material of choice for chemical processing, pharmaceutical, nuclear, and pollution control industries worldwide.</p>
                <hr/>
                <h3>KEY GRADES & THEIR APPLICATIONS</h3>
                <p><strong>Hastelloy C2000</strong> – The most versatile grade, offering resistance to both oxidizing and reducing acids, with outstanding performance in sulfuric, hydrochloric, and nitric acids.</p>
                <p><strong>Hastelloy C59</strong> – Extremely pure with no tungsten, providing exceptional resistance to pitting and stress corrosion cracking in chloride‑containing environments.</p>
                <p><strong>Hastelloy C4</strong> – Stabilized grade with excellent resistance to oxidizing acids and reducing environments, suitable for chemical reactors and heat exchangers.</p>
                <p><strong>Hastelloy H</strong> – High‑temperature strength and oxidation resistance, commonly used in furnace components and gas turbines.</p>
                <p><strong>Hastelloy N</strong> – Designed for molten fluoride salt service, offering excellent resistance to corrosion and radiation damage in nuclear applications.</p>
                <hr/>
                <h3>SPECIFICATIONS & STANDARDS</h3>
                <p>Our Hastelloy pipes conform to international standards including <strong>ASTM B622</strong> (seamless), <strong>ASTM B619</strong> (welded), <strong>ASTM B626</strong> (welded tube), and <strong>ASTM B775</strong> (EFW). Available in seamless, welded, ERW, and EFW forms with custom schedules and lengths.</p>
            </div>
        </section>


    <section className="specification-section">

    <h2>Specification: Hastelloy Pipes</h2>

    <div className="spec-grid">

        <div className="spec-card">
            <h4>Standard</h4>
            <p>ASTM B622 / B619 / B626 / B775, ASME SB622 / SB619 / SB626 / SB775</p>
        </div>

        <div className="spec-card">
            <h4>Size Range</h4>
            <p>1/2" NB – 24" NB (Seamless & Welded)</p>
        </div>

        <div className="spec-card">
            <h4>OD Range</h4>
            <p>6 mm – 914 mm</p>
        </div>

        <div className="spec-card">
            <h4>Length</h4>
            <p>Custom lengths up to 12 m</p>
        </div>

        <div className="spec-card">
            <h4>Schedules</h4>
            <p>SCH 5, 10, 40, 80, 160, XXS</p>
        </div>

        <div className="spec-card">
            <h4>Form</h4>
            <p>Seamless, Welded, ERW, EFW, Electropolished</p>
        </div>

        </div>

        </section>
    <section className="stock-section">
      <div className="stock-container">

        <div className="stock-heading">
          <h2>READY STOCK AVAILABILITY – HASTELLOY PIPES</h2>
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
          <h2>EQUIVALENT GRADES: HASTELLOY ALLOYS</h2>
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
          <h2>CHEMICAL COMPOSITION OF HASTELLOY PIPES</h2>
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
          <h2>MECHANICAL PROPERTIES OF HASTELLOY PIPING</h2>
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
            SIZE RANGE AVAILABILITY: HASTELLOY PIPES
            <span>(ASTM B622 / B619 / B626)</span>
          </h2>

          <p>
            Available in Seamless, Welded, ERW, EFW for all grades
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
          <h2>UNIFIED WEIGHT CHART: HASTELLOY PIPES</h2>
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
          <h2>HASTELLOY PIPE SUPPLY RANGE (UNIFIED)</h2>

          <p>
            Applicable for: Seamless round, square, rectangular, and custom hollow sections
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
          <h2>UNIFIED HASTELLOY PIPE PRICE RANGE</h2>
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
          <h2>SPECIALIZED IN FOLLOWING HASTELLOY PIPES</h2>
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
          <h2>SEARCHES RELATED TO HASTELLOY PIPES</h2>
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
          <h2>SPECIALIZED IN FOLLOWING HASTELLOY PIPES</h2>
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
            <h2>SEARCHES RELATED TO HASTELLOY PIPES</h2>
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

export default HastelloyC2000PipesDetails;
