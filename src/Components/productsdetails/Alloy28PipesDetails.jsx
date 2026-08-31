import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import nimonic from "../../products-image/ss-nimonic-pipes.webp";
import nichrome from "../../products-image/ss-nichrome-pipes.webp";
import nitronic from "../../products-image/ss-nitronic-pipes.webp";
import nilo from "../../products-image/ss-nilo42-pipes.webp";
import alloy286 from "../../products-image/ss-alloy-a286-pipes.webp";
import alloy926 from "../../products-image/ss-alloy-926-pipes.webp";

import alloy28 from "../../products-image/alloy-28-pipes.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "SEAMLESS PIPES",
    image: nimonic,
    items: [
      "Alloy 28 Seamless Piping",
      "ASME SB668 Alloy 28 Seamless",
      "Alloy 28 Thin Wall Seamless",
      "ASTM B668 Alloy 28 Seamless",
    ],
  },
  {
    title: "WELDED PIPES",
    image: nichrome,
    items: [
      "Alloy 1.4563 Welded Pipe",
      "Alloy 28 Thin Wall Welded",
      "ASME SB668 Alloy 28 Welded",
      "Alloy Gr 28 Welded Pipe",
      "Alloy Grade 28 Welded Piping",
    ],
  },
  {
    title: "ERW PIPES",
    image: nitronic,
    items: [
      "Alloy 28 Electric Resistance Welded",
      "ASTM B668 Alloy 28 ERW Pipe",
      "Alloy 1.4563 ERW Pipe Stock",
      "ASME SB668 Alloy 28 ERW",
    ],
  },
  {
    title: "EFW PIPES",
    image: nilo,
    items: [
      "UNS N08028 EFW Pipe Stock",
      "Alloy 28 Electric Fusion Welding",
      "Alloy Grade 28 EFW Pipe",
      "ASTM B668 Alloy 28 EFW Pipe",
      "Alloy 1.4563 EFW Pipe Stock",
    ],
  },
  {
    title: "ELECTROPOLISH PIPES",
    image: alloy286,
    items: [
      "Alloy 28 Thin Wall Electropolish",
      "Alloy 28 Polished Pipe Stock",
      "UNS N08028 Electropolish Pipe",
      "Alloy 1.4563 Electropolish Pipe",
    ],
  },
  {
    title: "HOLLOW PIPES",
    image: alloy926,
    items: [
      "ASTM B668 Alloy 28 Hollow Pipe",
      "Alloy 28 Square Hollow Pipe",
      "Alloy 28 Round Hollow Pipe Stock",
      "UNS N08028 Hollow Pipe Stock",
      "ASME SB668 Alloy 28 Hollow",
    ],
  }
];


const alloy28Data = [
  { wt: "0.25 (6.35)", sch: "-", weight: "84.85 (126.032)" },
  { wt: "0.281 (7.014)", sch: "-", weight: "95.28 (141.09)" },
  { wt: "0.312 (7.092)", sch: "10", weight: "105.69 (157.025)" },
  { wt: "0.344 (8.074)", sch: "-", weight: "116.41 (173.035)" },
  { wt: "0.375 (9.053)", sch: "STD", weight: "126.78 (188.083)" },
  { wt: "0.406 (10.031)", sch: "-", weight: "137.12 (204.009)" },
  { wt: "0.438 (11.013)", sch: "-", weight: "147.78 (220.1)" },
  { wt: "0.469 (11.091)", sch: "-", weight: "158.08 (235.029)" },
  { wt: "0.50 (12.07)", sch: "20 XS", weight: "168.37 (250.065)" },
  { wt: "0.562 (14.027)", sch: "-", weight: "188.87 (281.009)" },
  { wt: "0.625 (15.088)", sch: "30", weight: "209.62 (312.017)" },
  { wt: "0.688 (17.048)", sch: "40", weight: "230.29 (342.094)" },
  { wt: "0.75 (19.005)", sch: "-", weight: "250.55 (373.00)" },
];

const gradesData = [
  {
    grade: "Nimonic 75",
    uns: "N06075",
    werkstoff: "2.4951 / 2.4630",
    standard: "Nimonic 75",
  },
  {
    grade: "Nimonic 80A",
    uns: "N07080",
    werkstoff: "2.4952",
    standard: "Nimonic 80A",
  },
  {
    grade: "Nichrome 80/20",
    uns: "N06003",
    werkstoff: "2.4869",
    standard: "Alloy 80/20",
  },
  {
    grade: "Nitronic 50 / XM-19",
    uns: "S20910",
    werkstoff: "—",
    standard: "Nitronic 50",
  },
  {
    grade: "Nilo 42",
    uns: "K94100",
    werkstoff: "1.3917",
    standard: "Nilo 42",
  },
  {
    grade: "Nilo 48",
    uns: "K94800",
    werkstoff: "1.7745",
    standard: "Nilo 48",
  },
  {
    grade: "Alloy A286 (660)",
    uns: "S66286",
    werkstoff: "1.4980",
    standard: "A286",
  },
  {
    grade: "Alloy 926",
    uns: "N08926",
    werkstoff: "1.4529",
    standard: "Alloy 926",
  },
];

const chemicalData = [
  {
    grade: "Nimonic 75",
    c: "0.08-0.15",
    mn: "1.0 max",
    si: "1.0 max",
    cr: "18-21",
    ni: "Balance",
    mo: "—",
    other: "Ti: 0.2-0.6, Cu: 0.5",
  },
  {
    grade: "Nimonic 80A",
    c: "0.10 max",
    mn: "1.0 max",
    si: "1.0 max",
    cr: "18-21",
    ni: "Balance",
    mo: "—",
    other: "Al/Ti strengthened",
  },
  {
    grade: "Nichrome 80/20",
    c: "0.15 max",
    mn: "1.0 max",
    si: "1.0 max",
    cr: "19-21",
    ni: "75.0",
    mo: "—",
    other: "Co: 1.5, Al: 0.3",
  },
  {
    grade: "Nitronic 50",
    c: "0.06 max",
    mn: "4.0-6.0",
    si: "1.0 max",
    cr: "20.5-23.5",
    ni: "11.5-13.5",
    mo: "1.5-3.0",
    other: "N: 0.2-0.4, Nb/V",
  },
  {
    grade: "Nilo 42",
    c: "0.05 max",
    mn: "0.8 max",
    si: "0.3 max",
    cr: "—",
    ni: "42.0",
    mo: "—",
    other: "Fe: Balance",
  },
  {
    grade: "Nilo 48",
    c: "0.05 max",
    mn: "0.8 max",
    si: "0.3 max",
    cr: "—",
    ni: "48.0",
    mo: "—",
    other: "Fe: Balance",
  },
  {
    grade: "Alloy A286",
    c: "0.08 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "13.5-16",
    ni: "24-27",
    mo: "1.0 max",
    other: "Ti: 1.9-2.35, V: 0.1-0.5",
  },
  {
    grade: "Alloy 926",
    c: "0.08 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "19-21",
    ni: "24-27",
    mo: "1.0 max",
    other: "Cu: 0.5, Ti: 1.9-2.35",
  },
];

const mechanicalData = [
  {
    grade: "Nimonic 75 / 80A",
    tensile: "104,000 psi",
    yield: "40,000 psi",
    elongation: "42%",
    density: "8.37 g/cm³",
  },
  {
    grade: "Nichrome 80/20",
    tensile: "650 MPa",
    yield: "280 MPa",
    elongation: "20%",
    density: "8.4 g/cm³",
  },
  {
    grade: "Nitronic 50",
    tensile: "100 ksi",
    yield: "55 ksi",
    elongation: "35%",
    density: "7.9 g/cm³",
  },
  {
    grade: "Nilo 42",
    tensile: "490 MPa",
    yield: "250 MPa",
    elongation: "—",
    density: "8.1 g/cm³",
  },
  {
    grade: "Nilo 48",
    tensile: "520 MPa",
    yield: "260 MPa",
    elongation: "43%",
    density: "8.1 g/cm³",
  },
  {
    grade: "Alloy A286 / 926",
    tensile: "655 MPa",
    yield: "965 MPa",
    elongation: "12%",
    density: "7.9 g/cm³",
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
  "Nimonic 75 / 80A Seamless & Welded Pipes",
  "Nichrome 80/20 High Resistance Pipes",
  "Nitronic 50 (XM-19) High Strength Piping",
  "Nilo 42 / 48 Controlled Expansion Alloy Pipes",
  "Alloy A286 (660) Iron-Based Superalloy Pipes",
  "Alloy 926 Super-Austenitic Corrosion Pipes",
  "Special Alloy Pipes Manufacturer in India",
];

const rightItems = [
  "ASTM B163 / B167 / B407 / B517 Special Alloy Pipes",
  "Seamless Round, Square, and Rectangular Pipes",
  "Custom Sizes, Schedules, and Cut-to-Length Supply",
  "Full Hard / Soft Annealed / Cold Drawn Pipes",
  "Electropolished & Precision Tubing Solutions",
  "Special Alloy Hollow Section & Square Pipes",
  "High-Performance Alloy Pipe Supplier in Mumbai",
];

const searchTerms = [
  "Nimonic 75 Pipe Price Per Kg",
  "Nimonic 80A Seamless Pipe Weight Chart",
  "Nichrome 80/20 Pipe Supplier In India",
  "Nitronic 50 Pipe Chemical Composition",
  "Nitronic 50 XM-19 Pipe Pressure Rating",
  "Nilo 42 Pipe Price In Mumbai",
  "Nilo 48 Expansion Pipe Dimensions",
  "Alloy A286 Pipe Specifications Pdf",
  "Alloy 926 Pipe Corrosion Resistance",
  "Nimonic 75 / 80A Pipe Price List",
  "Nichrome 80/20 Pipe Weight Calculator",
  "Nitronic 50 Pipe Mechanical Properties",
  "Nilo 42 / 48 Pipe Stockist",
  "Alloy A286 Pipe Heat Treatment",
  "Alloy 926 Pipe Price Per Kg In India",
  "Special Alloy Seamless Pipe Exporter",
  "Special Alloy Welded Pipe Supplier",
  "Nimonic 75 Pipe Dimensions",
  "Nichrome 80/20 Pipe Sizes",
  "Nitronic 50 Pipe Schedule",
  "Nilo 42 Pipe Equivalent Grades",
  "Alloy A286 Pipe UNS S66286",
  "Alloy 926 Pipe 1.4529",
  "Special Alloy Pipe Manufacturers In Mumbai",
  "Buy Special Alloy Pipes In India",
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

const Alloy28PipesDetails = () => {
  return (
    <>
        <Helmet>
            <title>Alloy 28 Pipes Supplier</title>
            <meta
            name="description"
            content="Supplier of high-performance alloy pipes including Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 and Alloy 926 for extreme temperature and corrosive service."
            />
        </Helmet>

        <Navbar />

        <Banner
            title="ALLOY 28 PIPES"
            image={ProductBanner}
        />


      


      <div className="product-details-container">
        <div className="product-main-content">
        <section className="product-content">
            <div className="content-header">
                <h1>ALLOY 28 PIPES</h1>
            </div>
            <div className="content-image">
                <img src={alloy28} alt="High-Performance Alloy Pipes" className="main-image" />
            </div>
            <div className="content-contact">
                <a href="https://wa.me/919326883622">Enquiry via whatsapp</a>
                <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
        </section>
        <section className="product-content">
            <div className="content-header">
                <h2>Alloy 28 Alloy Pipes: Technical Composition and Properties</h2>
                <p>Alloy 28, technically designated as UNS N08028 and Werkstoff Number 
                  1.4563, is a high-alloy austenitic stainless steel specifically 
                  developed for service in highly corrosive conditions. Its chemical 
                  composition features a high content of chromium (27%) and nickel (31%), 
                  supplemented with molybdenum (3.5%) and copper (1.0%). This precise 
                  metallurgical balance places it between standard austenitic stainless 
                  steels and high-nickel alloys, providing a cost-effective yet 
                  high-performance solution for handling aggressive chemical media.</p>
                
                <p>The alloy is engineered to maintain a stable austenitic structure, 
                  ensuring excellent ductility and toughness from cryogenic levels to 
                  moderately high temperatures. The high chromium and nickel levels 
                  provide a robust matrix that resists the formation of secondary phases 
                  during welding, which can otherwise impair corrosion resistance. This 
                  structural efficiency allows Alloy 28 pipes to be used in high-pressure 
                  fluid transport systems where mechanical reliability and chemical 
                  inertness are equally critical.</p>
                <br/>  
                <h3>Corrosion Resistance and Acidic Durability</h3>
                <p>The standout feature of Alloy 28 pipes is their exceptional resistance 
                  to phosphoric and sulfuric acids. Originally developed for the fertilizer 
                  industry, the alloy’s high chromium content provides superior protection 
                  in oxidizing environments, while the addition of copper and molybdenum 
                  enhances its stability in reducing acids. It is particularly effective 
                  in resisting the highly corrosive "wet process" phosphoric acid, which 
                  often contains high levels of impurities like fluorides and chlorides.</p>
                <br/>
                <p>Beyond acid resistance, Alloy 28 pipes exhibit remarkable resistance to 
                  chloride-ion stress corrosion cracking and localized attack, such as pitting 
                  and crevice corrosion. With a high Pitting Resistance Equivalent Number (PREN), 
                  the alloy remains stable in seawater and brackish water environments. 
                  This multi-faceted corrosion resistance makes the alloy a durable addition 
                  to complex piping systems, significantly reducing the risk of premature failure 
                  and extending the operational lifecycle of industrial infrastructure.</p>
                <br/>
                <h3>Diverse Industrial Applications</h3>   
                <p>Due to their specialized resistance to aggressive process chemicals, 
                  Alloy 28 pipes are essential across several heavy-duty industrial sectors. 
                  In the fertilizer industry, they are the primary choice for heat exchangers 
                  and piping systems used in the production of phosphoric acid. The oil and gas 
                  sector relies on these pipes for deep-hole tubing in sour gas wells, where high 
                  concentrations of hydrogen sulfide and carbon dioxide are present.</p>
                <p>Other significant applications include:</p>
                <ul>
                  <li><strong>Chemical Processing:</strong>Used for equipment handling sulfuric acid, 
                  organic acids, and mixed acid solutions.</li>
                  <li><strong>Pollution Control:</strong>Essential for scrubbers and flue-gas desulfurization 
                  (FGD) systems in power plants.</li>
                  <li><strong>Hydrometallurgy:</strong>Utilized in leaching and pickling processes involving 
                  aggressive mineral acids.</li>
                  <li><strong>Marine Engineering:</strong>Ideal for heat exchangers and cooling systems using 
                  seawater or high-chloride process water.</li>
                </ul>
                <br/>
                <h3>Manufacturing Standards and Quality Assurance</h3>  
                <p>Alloy 28 pipes are manufactured in numerous configurations to meet specific engineering 
                  requirements, including seamless and welded varieties. Adhering to strict international 
                  specifications such as ASTM B668 and ASME SB668, these pipes are produced in a wide array 
                  of schedules, diameters, and wall thicknesses. The manufacturing process focuses on achieving 
                  high-quality surface finishes and precise dimensional accuracy to ensure a perfect fit in 
                  industrial assemblies.</p>

                <p>Quality control is a fundamental part of the production cycle, with pipes undergoing rigorous 
                  testing to verify their performance. This includes mechanical testing for tensile and yield 
                  strength, hardness testing, and specialized corrosion tests such as the intergranular corrosion test. 
                  Non-destructive examinations, including hydrostatic and ultrasonic testing, are standard 
                  procedures to ensure the absence of surface or internal defects. To ensure safety and 
                  traceability for global projects, manufacturers provide comprehensive documentation, including 
                  raw material test reports and third-party inspection certificates.</p>   
            </div>
        </section>


    <section className="specification-section">

    <h2>Specification of Alloy 28 Pipes</h2>

    <div className="spec-grid">

        <div className="spec-card">
            <h4>ASTM OF ALLOY 28 PIPES</h4>
            <p>ASTM B668 / ASME SB668</p>
        </div>

        <div className="spec-card">
            <h4>WELDED PIPE SIZE (ASTM B668)</h4>
            <p>1/2" NB - 24" NB</p>
        </div>

        <div className="spec-card">
            <h4>OUTSIDE DIAMETER</h4>
            <p>6.00 mm OD to 914.4 mm OD, Sizes up to 24” available</p>
        </div>

        <div className="spec-card">
            <h4>OUTSIDE FINISH</h4>
            <p>2B, No.4, No.1, No.8 Finish, Finish as per customer Requirements</p>
        </div>

        <div className="spec-card">
            <h4>SEAMLESS PIPE SIZE</h4>
            <p>1 / 2" NB - 16" NB</p>
        </div>

        <div className="spec-card">
            <h4>EFW PIPE SIZE (ASTM B668)</h4>
            <p>6" NB - 24" NB</p>
        </div>

        <div className="spec-card">
            <h4>SCHEDULE RANGE</h4>
            <p>SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS</p>
        </div>

        <div className="spec-card">
            <h4>DELIVERY CONDITION</h4>
            <p>Annealed & Pickled, Polished, Bright Annealed, Cold Drawn</p>
        </div>

        </div>

        </section>
    <section className="stock-section">
      <div className="stock-container">

        <div className="stock-heading">
          <h2>READY STOCK AVAILABILITY - ALLOY 28 PIPES</h2>
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
          <h2>EQUIVALENT GRADES: SPECIALTY ALLOYS</h2>
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
          <h2>CHEMICAL COMPOSITION OF SPECIALTY ALLOY PIPES</h2>
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
          <h2>MECHANICAL PROPERTIES OF SPECIALTY ALLOY PIPING</h2>
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
            SIZE RANGE AVAILABILITY: SPECIAL ALLOY PIPES
            <span>(ASTM / ASME B163, B167, B407, B517)</span>
          </h2>

          <p>
            Available for Grades: Nimonic, Nichrome, Nitronic, Nilo, Alloy 286, Alloy 926
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
          <h2>Alloy 28 Seamless Pipe Weight Chart</h2>
        </div>

        <div className="table-responsive">
          <table className="coil-weight-table">
            <thead>
            <tr>
              <th>NPS (DN)</th>
              <th>Outside Diameter IN (mm)</th>
              <th>WT IN (mm)</th>
              <th>SCH</th>
              <th>Weight LB/FT (KG/M)</th>
            </tr>
          </thead>

          <tbody>
            {alloy28Data.map((item, index) => (
              <tr key={index}>
                {index === 0 && (
                  <>
                    <td rowSpan={alloy28Data.length}>32 (800)</td>
                    <td rowSpan={alloy28Data.length}>32.00 (813)</td>
                  </>
                )}

                <td>{item.wt}</td>
                <td>{item.sch}</td>
                <td>{item.weight}</td>
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
          <h2>SPECIAL ALLOY PIPE SUPPLY RANGE (UNIFIED)</h2>

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
          <h2>UNIFIED SPECIAL ALLOY PIPE PRICE RANGE</h2>
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
          <h2>SPECIALIZED IN FOLLOWING SPECIAL ALLOY PIPES</h2>
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
          <h2>SEARCHES RELATED TO SPECIALTY ALLOY PIPES</h2>
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
          <h2>SPECIALIZED IN FOLLOWING SPECIAL ALLOY PIPES</h2>
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
            <h2>SEARCHES RELATED TO SPECIALTY ALLOY PIPES</h2>
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

export default Alloy28PipesDetails;
