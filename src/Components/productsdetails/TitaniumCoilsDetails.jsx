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

import CoilsBanner from "../../products-image/ss-titanium-coils.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "HOT ROLLED (HR) COILS",
    image: hrCoils,
    items: [
      "Titanium Hot Rolled Coils",
      "ASME SB265 Titanium HR Coils",
      "Titanium Alloy HR COils",
      "Titanium Alloy Hot Rolled Coils",
    ],
  },
  {
    title: "COLD ROLLED (CR) COILS",
    image: crCoils,
    items: [
      "Titanium Cold Rolled Coils",
      "ASME SB265 Titanium CR Coils",
      "Titanium Alloy CR COils",
      "BA / 2B Finish Cold Rolled Coils",
    ],
  },
  {
    title: "SLIT & STRIP COILS",
    image: slitCoils,
    items: [
      "Titanium Slit Coils",
      "ASME SB265 Titanium Slit Coils",
      "Titanium Alloy Slit Strips",
      "Custom Width SS Slitting Services",
    ],
  },
];

const gradesData = [
  {
    grade: "Titanium Grade 2",
    uns: "R50400",
    werkstoff: "3.7035",
    commonname: "Commercially Pure (CP) Titanium" 
  },
  {
    grade: "Titanium Grade 5",
    uns: "R56400",
    werkstoff: "3.7165",
    commonname: "Ti-6Al-4V Alloy"
  }
];

const chemicalData = [
  {
    grade: "Titanium Grade 2",
    ti: "99.2 min",
    al: "-",
    v: "-",  
    fe: "0.3 max",
    o: "0.25 max",
    c: "0.1 max",
  },
  {
    grade: "Titanium Grade 5",
    ti: "90 min",
    al: "6 min",
    v: "4 min",  
    fe: "0.25 max",
    o: "0.2 max",
    c: "-",
  }
];

const mechanicalData = [
 {
    grade: "Titanium Grade 2",
    density: "4.5 g/cm³",
    tensile: "344 MPa",
    yield: "275 MPa",
    elongation: "20%",
    
  },
  {
    grade: "Titanium Grade 5",
    density: "4.43 g/cm³",
    tensile: "950 MPa",
    yield: "880 MPa",
    elongation: "14%",
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
  { gauge: "9", inches: ".15625", mm: "3.968" },
  { gauge: "10", inches: ".14062", mm: "3.571" },
  { gauge: "11", inches: ".125", mm: "3.175" },  
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
    thickness: "0.18",
    weightPerM2: "1.44",
    size2000: "2.88",
    size2500: "-",
    size3000: "-",
  },
  {
    thickness: "0.20",
    weightPerM2: "1.60",
    size2000: "3.20",
    size2500: "-",
    size3000: "-",
  },
  {
    thickness: "0.22",
    weightPerM2: "1.76",
    size2000: "3.52",
    size2500: "-",
    size3000: "-",
  },
  {
    thickness: "0.24",
    weightPerM2: "1.92",
    size2000: "3.84",
    size2500: "-",
    size3000: "-",
  },
  {
    thickness: "0.27",
    weightPerM2: "2.16",
    size2000: "4.32",
    size2500: "-",
    size3000: "-",
  },
  {
    thickness: "0.28",
    weightPerM2: "2.24",
    size2000: "4.48",
    size2500: "-",
    size3000: "-",
  },
  {
    thickness: "0.32",
    weightPerM2: "2.56",
    size2000: "5.12",
    size2500: "-",
    size3000: "-",
  },
  {
    thickness: "0.38",
    weightPerM2: "3.04",
    size2000: "6.08",
    size2500: "-",
    size3000: "-",
  },
  {
    thickness: "0.44",
    weightPerM2: "3.52",
    size2000: "7.04",
    size2500: "11.00",
    size3000: "-",
  },
  {
    thickness: "0.50",
    weightPerM2: "4.00",
    size2000: "8.00",
    size2500: "12.50",
    size3000: "-",
  },
  {
    thickness: "0.56",
    weightPerM2: "4.48",
    size2000: "8.96",
    size2500: "14.00",
    size3000: "-",
  },
  {
    thickness: "0.63",
    weightPerM2: "5.04",
    size2000: "10.08",
    size2500: "15.75",
    size3000: "-",
  },
  {
    thickness: "0.75",
    weightPerM2: "6.00",
    size2000: "12.00",
    size2500: "18.75",
    size3000: "-",
  },
  {
    thickness: "0.88",
    weightPerM2: "7.04",
    size2000: "14.08",
    size2500: "22.00",
    size3000: "-",
  },
  {
    thickness: "1.00",
    weightPerM2: "8.00",
    size2000: "16.00",
    size2500: "25.00",
    size3000: "36.00",
  },
  {
    thickness: "1.13",
    weightPerM2: "9.04",
    size2000: "18.08",
    size2500: "28.25",
    size3000: "40.00",
  },
  {
    thickness: "1.25",
    weightPerM2: "10.00",
    size2000: "20.00",
    size2500: "31.00",
    size3000: "45.00",
  },
  {
    thickness: "1.38",
    weightPerM2: "11.00",
    size2000: "22.03",
    size2500: "34.50",
    size3000: "50.00",
  },
  {
    thickness: "1.50",
    weightPerM2: "12.00",
    size2000: "24.00",
    size2500: "37.50",
    size3000: "54.00",
  },
  {
    thickness: "1.75",
    weightPerM2: "14.00",
    size2000: "28.00",
    size2500: "43.75",
    size3000: "63.00",
  },
  {
    thickness: "2.00",
    weightPerM2: "16.00",
    size2000: "32.00",
    size2500: "50.00",
    size3000: "72.00",
  },
  {
    thickness: "2.25",
    weightPerM2: "18.00",
    size2000: "36.00",
    size2500: "56.25",
    size3000: "81.00",
  },
  {
    thickness: "2.50",
    weightPerM2: "20.00",
    size2000: "40.00",
    size2500: "62.50",
    size3000: "90.00",
  },
  {
    thickness: "2.75",
    weightPerM2: "22.00",
    size2000: "44.00",
    size2500: "68.75",
    size3000: "99.00",
  },
  {
    thickness: "3.00",
    weightPerM2: "24.00",
    size2000: "48.00",
    size2500: "75.00",
    size3000: "108.00",
  },
  {
    thickness: "3.25",
    weightPerM2: "26.00",
    size2000: "52.00",
    size2500: "81.25",
    size3000: "117.00",
  },
  {
    thickness: "3.50",
    weightPerM2: "28.00",
    size2000: "56.00",
    size2500: "87.50",
    size3000: "126.00",
  },
  {
    thickness: "3.75",
    weightPerM2: "30.00",
    size2000: "60.00",
    size2500: "93.75",
    size3000: "135.00",
  },
  {
    thickness: "4.00",
    weightPerM2: "32.00",
    size2000: "64.00",
    size2500: "100.00",
    size3000: "144.00",
  },
  {
    thickness: "4.25",
    weightPerM2: "34.00",
    size2000: "68.00",
    size2500: "106.25",
    size3000: "153.00",
  },
  {
    thickness: "4.50",
    weightPerM2: "36.00",
    size2000: "72.00",
    size2500: "112.50",
    size3000: "162.00",
  },
  {
    thickness: "5.00",
    weightPerM2: "40.00",
    size2000: "80.00",
    size2500: "125.00",
    size3000: "180.00",
  },
  {
    thickness: "5.50",
    weightPerM2: "44.00",
    size2000: "88.00",
    size2500: "137.50",
    size3000: "198.00",
  },
  {
    thickness: "6.00",
    weightPerM2: "48.00",
    size2000: "96.00",
    size2500: "150.00",
    size3000: "216.00",
  },
  {
    thickness: "6.50",
    weightPerM2: "52.00",
    size2000: "104.00",
    size2500: "162.50",
    size3000: "234.00",
  },
  {
    thickness: "7.00",
    weightPerM2: "56.00",
    size2000: "112.00",
    size2500: "175.00",
    size3000: "252.00",
  },
  {
    thickness: "7.50",
    weightPerM2: "60.00",
    size2000: "120.00",
    size2500: "187.50",
    size3000: "270.00",
  },
  {
    thickness: "8.00",
    weightPerM2: "64.00",
    size2000: "128.00",
    size2500: "200.00",
    size3000: "288.00",
  }
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
  " Titanium Grade 2 Commercially Pure Coils",
  " Titanium Grade 5 (Ti-6Al-4V) Alloy Coils",  
  "ASTM B265 Titanium Hot Rolled (HR) Coils",
  "ASME SB265 Titanium Cold Rolled (CR) Coils", 
  "Titanium Grade 5 Alloy Slit Coils & Precision Strips",
  "High Strength Titanium Grade 5 Aerospace Coils",
  "Titanium Grade 2 & Grade 5 Coil Manufacturer in Mumbai, India",
];

const rightItems = [
  "Titanium UNS R50400 / R56400 Coil Stockist",
  "Titanium Alloy Coils Exporter & Global Supplier",
  "Custom Cut-to-Size Titanium Industrial Coils",
    "Annealed & Descaled Titanium Alloy Coils",
    "Titanium Grade 2 Corrosion Resistant Coils",
 "Ti Alloy CR Coils for Chemical Processing",
 "Titanium Coil Suppliers at Best Price in India"
];

const searchTerms = [
  "Titanium Grade 2 Coil Price List",
    "Titanium Grade 5 Coil Weight Calculator", 
    "Ti-6Al-4V Coil Dimensions", 
    "Titanium Grade 2 Coil Price Per Kg in India", 
    "Titanium Grade 5 Coil Manufacturer in Mumbai", 
    "Titanium Grade 2 Coil Supplier in India", 
    "ASTM B265 Titanium Coil Thickness Tolerance", 
    "ASME SB265 Titanium Grade 5 Coil Price List PDF", 
    "Titanium Grade 2 Coil Mechanical Properties", 
    "Titanium Grade 5 Coil Chemical Composition", 
    "Titanium Alloy Coil Stockist in Pune", 
    "Titanium Grade 2 Coil Exporter", 
    "Titanium Grade 5 Coil Price in Mumbai", 
    "Titanium Alloy Coil Gauge Chart", 
    "Titanium Grade 2 Slit Coil Price", 
    "Titanium Grade 5 Strip Coil Supplier", 
    "Titanium Grade 2 Hot Rolled Coil Price", 
    "Titanium Grade 5 Cold Rolled Coil Manufacturers", 
    "Titanium Coil Catalog PDF", 
    "Titanium Grade 2 Coil Equivalent Grades", 
    "Titanium Grade 5 Coil Price per Meter", 
    "Titanium Grade 2 updated price list", 
    "Titanium Grade 5 Coil size chart", 
    "Titanium Alloy Coil Manufacturers in Gujarat", 
    "Titanium Grade 2 Coil Stockyards in India", 
    "Titanium Grade 5 Coil thickness chart", 
    "Titanium Grade 2 Coil Price in India", 
    "Top 100 Titanium Coil Dealers in Mumbai", 
    "Titanium Grade 2 Coil Online", 
    "Titanium Grade 5 leading manufacturers in India", 
    "Titanium Grade 2 Coil descaled finish", 
    "Titanium Grade 5 Coil 2B Finish price", 
    "Titanium Grade 2 Coil BA Finish stockist", 
    "UNS R50400 Coil Price India", 
    "UNS R56400 Coil Price Mumbai", 
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

const TitaniumCoilsDetails = () => {
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
            title="Titanium Coils Supplier"
            image={ProductBanner}
        />


      


      <div className="product-details-container">
        <div className="product-main-content">
        <section className="product-content">
            <div className="content-header">
                <h1>Titanium Coils – Grade 2 & Grade 5 Supplier</h1>
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
                <h2>Titanium Coils: Technical Overview and Grade Characteristics</h2>
                <p>Titanium coils are the premier choice for engineering projects requiring 
                    an exceptional strength-to-weight ratio combined with extraordinary 
                    corrosion resistance. Titanium is roughly <strong>45% lighter than steel</strong> while 
                    maintaining comparable strength, making it indispensable in aerospace, 
                    marine, and high-performance industrial sectors. These coils are non-magnetic 
                    and possess a low thermal expansion coefficient, allowing them to remain 
                    structurally stable under fluctuating temperatures.
                </p>
                <hr/>
                <h3>Titanium Grade 2 Coils (Commercially Pure)</h3>
                <p><strong>Titanium Grade 2 (UNS R50400)</strong> is the most widely used "Commercially Pure" (CP) grade.
                    It offers an optimal balance of moderate strength and excellent cold-formability. 
                    It is often referred to as the "workhorse" of the industrial piping and heat exchanger
                    industry due to its versatility and high resistance to oxidation.</p>
                <br/><br/>


                <h3>Titanium Grade 5 Coils (Ti-6Al-4V)</h3>
                <p><strong>Titanium Grade 5 (UNS R56400)</strong> is an alpha-beta alloy containing 6% Aluminum and 4% Vanadium. 
                    This is the highest-strength titanium grade, offering roughly double the tensile strength of 
                    Grade 2 while maintaining excellent fatigue resistance and toughness.</p>


                
            </div>
        </section>


    <section className="specification-section">

    <h2>Specification of Titanium Grade 2 & Grade 5 Coils</h2>

    <div className="spec-grid">

        <div className="spec-card">
            <h4>Standard</h4>
            <p>ASTM B265 / ASME SB265</p>
        </div>

        <div className="spec-card">
            <h4>Thickness</h4>
            <p>0.2mm – 5.0mm</p>
        </div>

        <div className="spec-card">
            <h4>Width</h4>
            <p>3.2mm – 1500mm</p>
        </div>

        <div className="spec-card">
            <h4>Length</h4>
            <p>Coil / Strip, Length as per Requirement</p>
        </div>

        <div className="spec-card">
            <h4>Value Added Service</h4>
            <p>Cutting, Polishing, NDT, Ultrasonic Testing</p>
        </div>

        <div className="spec-card">
            <h4>Hardness</h4>
            <p>Soft, Quarter Hard, Half Hard, Hard, Spring Hard</p>
        </div>

        </div>

        </section>
    <section className="stock-section">
      <div className="stock-container">

        <div className="stock-heading">
          <h2>Stock availability of Titanium Grade 2 & 5 Coils</h2>
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
          <h2>Equivalent Grades: Titanium Grade 2 & Grade 5 Coils</h2>
        </div>

        <div className="table-responsive">
          <table className="grades-table">
            <thead>
              <tr>
                <th>GRADE</th>
                <th>UNS</th>
                <th>WERKSTOFF NR.</th>
                <th>COMMON Name</th>
              </tr>
            </thead>

            <tbody>
              {gradesData.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.grade}</strong></td>
                  <td>{item.uns}</td>
                  <td>{item.werkstoff}</td>
                  <td>{item.commonname}</td>
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
          <h2>Chemical Composition of Titanium Coils</h2>
        </div>

        <div className="table-responsive">
          <table className="chemical-table">
            <thead>
              <tr>
                <th>Grade</th>
                <th>Ti</th>
                <th>Al</th>
                <th>V</th>
                <th>Fe</th>
                <th>O</th>
                <th>C</th>
              </tr>
            </thead>

            <tbody>
              {chemicalData.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.grade}</strong></td>
                  <td>{item.ti}</td>
                  <td>{item.al}</td>
                  <td>{item.v}</td>
                  <td>{item.fe}</td>
                  <td>{item.o}</td>
                  <td>{item.c}</td>
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
          <h2>MECHANICAL AND PHYSICAL PROPERTIES</h2>
        </div>

        <div className="table-responsive">
          <table className="mechanical-table">
            <thead>
              <tr>
                <th>Grade</th>
                <th>Density</th>
                <th>Tensile Strength</th>
                <th>Yield Strength (0.2%)</th>
                <th>Elongation</th>
              </tr>
            </thead>

            <tbody>
              {mechanicalData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <strong>{item.grade}</strong>
                  </td>
                  <td>{item.density}</td>
                  <td>{item.tensile}</td>
                  <td>{item.yield}</td>
                  <td>{item.elongation}</td>
                  
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
          <h2>Titanium Grade 2 & Grade 5 Coils Thickness Gauge Chart</h2>
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
          <h2>Titanium Grade 2 & Grade 5 Coils Weight / Size Chart</h2>
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
          <h2>Titanium Grade 2 & Grade 5 Coils Thickness Tolerance</h2>
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
          <h2>Specialized in Titanium Grade 2 & Grade 5 Coils</h2>
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
            <h2>Searches Related to Titanium Grade 2 & 5 Coils</h2>
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

export default TitaniumCoilsDetails;
