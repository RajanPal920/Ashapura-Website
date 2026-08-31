import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Stainless Steel Tubes product images
import ssSeamlessTubes from "../../products-image/ss-seamless-tubes.webp";
import ssWeldedTubes from "../../products-image/ss-welded-tubes.webp";
import ssErwTubes from "../../products-image/ss-erw-tubes.webp";
import ssRoundTubes from "../../products-image/ss-seamless-2-tubes.webp";
import ssSquareTubes from "../../products-image/ss-heatexchanger-tubes.webp";
import ssHollowTubes from "../../products-image/ss-hollow-tubes.webp";

import stainlessSteel from "../../products-image/ss-steel-tubes.webp";

import "./Productsdetails.css";

const stockData = [
  {
    title: "SS 304 / 304L SEAMLESS TUBES",
    image: ssSeamlessTubes,
    items: [
      "Stainless Steel 304 / 304L Seamless Tubes (ASTM A269/A213)",
      "UNS S30400 / S30403, 1.4301 / 1.4307",
      "Cold Drawn & Annealed",
      "Excellent Corrosion Resistance & Weldability",
    ],
  },
  {
    title: "SS 316 / 316L SEAMLESS TUBES",
    image: ssSeamlessTubes,
    items: [
      "Stainless Steel 316 / 316L Seamless Tubes (ASTM A269/A213)",
      "UNS S31600 / S31603, 1.4401 / 1.4404",
      "Molybdenum-Bearing for Pitting Resistance",
      "Ideal for Marine & Chemical Processing",
    ],
  },
  {
    title: "SS 310S HIGH-TEMP SEAMLESS TUBES",
    image: ssWeldedTubes,
    items: [
      "Stainless Steel 310S Seamless Tubes (ASTM A213)",
      "UNS S31008, 1.4845",
      "High Oxidation Resistance up to 1100°C",
      "For Furnaces & Heat Treatment",
    ],
  },
  {
    title: "SS 904L SUPER AUSTENITIC TUBES",
    image: ssErwTubes,
    items: [
      "Stainless Steel 904L Seamless/Welded Tubes",
      "UNS N08904, 1.4539",
      "High Mo & Cu – Resistant to Sulfuric & Phosphoric Acid",
      "For Chemical Processing",
    ],
  },
  {
    title: "DUPLEX S31803 / S32205 TUBES",
    image: ssRoundTubes,
    items: [
      "Duplex Stainless Steel Seamless/Welded Tubes",
      "ASTM A789 / A790",
      "High Strength & PREN ≥ 35",
      "Excellent Resistance to Chloride SCC",
    ],
  },
  {
    title: "SUPER DUPLEX S32750 / S32760 TUBES",
    image: ssSquareTubes,
    items: [
      "Super Duplex Stainless Steel Seamless/Welded Tubes",
      "ASTM A789 / A790",
      "PREN ≥ 40, High Strength & Toughness",
      "For Offshore & Marine Applications",
    ],
  }
];

const gradesData = [
  { grade: "SS 304", uns: "S30400", werkstoff: "1.4301", standard: "ASTM A269 / A213 / A312" },
  { grade: "SS 304L", uns: "S30403", werkstoff: "1.4307", standard: "ASTM A269 / A213 / A312" },
  { grade: "SS 316", uns: "S31600", werkstoff: "1.4401", standard: "ASTM A269 / A213 / A312" },
  { grade: "SS 316L", uns: "S31603", werkstoff: "1.4404", standard: "ASTM A269 / A213 / A312" },
  { grade: "SS 310S", uns: "S31008", werkstoff: "1.4845", standard: "ASTM A213 / A312" },
  { grade: "SS 904L", uns: "N08904", werkstoff: "1.4539", standard: "ASTM A269 / A213 / A312" },
  { grade: "Duplex S31803", uns: "S31803", werkstoff: "1.4462", standard: "ASTM A789 / A790" },
  { grade: "Super Duplex S32760", uns: "S32760", werkstoff: "1.4501", standard: "ASTM A789 / A790" },
];

const chemicalData = [
  { grade: "SS 304", c: "0.08 max", mn: "2.0 max", si: "1.0 max", cr: "17.5-19.5", ni: "8.0-10.5", mo: "—", other: "Fe: Balance" },
  { grade: "SS 304L", c: "0.03 max", mn: "2.0 max", si: "1.0 max", cr: "17.5-19.5", ni: "8.0-10.5", mo: "—", other: "Fe: Balance" },
  { grade: "SS 316", c: "0.08 max", mn: "2.0 max", si: "1.0 max", cr: "16.0-18.0", ni: "10.0-14.0", mo: "2.0-3.0", other: "Fe: Balance" },
  { grade: "SS 316L", c: "0.03 max", mn: "2.0 max", si: "1.0 max", cr: "16.0-18.0", ni: "10.0-14.0", mo: "2.0-3.0", other: "Fe: Balance" },
  { grade: "SS 310S", c: "0.08 max", mn: "2.0 max", si: "1.5 max", cr: "24.0-26.0", ni: "19.0-22.0", mo: "—", other: "Fe: Balance" },
  { grade: "SS 904L", c: "0.02 max", mn: "2.0 max", si: "1.0 max", cr: "19.0-23.0", ni: "23.0-28.0", mo: "4.0-5.0", other: "Cu: 1.0-2.0, Fe: Balance" },
  { grade: "Duplex S31803", c: "0.03 max", mn: "2.0 max", si: "1.0 max", cr: "21.0-23.0", ni: "4.5-6.5", mo: "2.5-3.5", other: "N: 0.08-0.20, Fe: Balance" },
  { grade: "Super Duplex S32760", c: "0.03 max", mn: "1.0 max", si: "1.0 max", cr: "24.0-26.0", ni: "6.0-8.0", mo: "3.0-4.0", other: "N: 0.20-0.30, W: 0.50-1.00, Cu: 0.50-1.00, Fe: Balance" },
];

const mechanicalData = [
  { grade: "SS 304 / 304L", tensile: "515 MPa (min)", yield: "205 MPa (min)", elongation: "40%", density: "8.0 g/cm³" },
  { grade: "SS 316 / 316L", tensile: "515 MPa (min)", yield: "205 MPa (min)", elongation: "40%", density: "8.0 g/cm³" },
  { grade: "SS 310S", tensile: "515 MPa (min)", yield: "205 MPa (min)", elongation: "40%", density: "7.98 g/cm³" },
  { grade: "SS 904L", tensile: "490 MPa (min)", yield: "220 MPa (min)", elongation: "35%", density: "7.95 g/cm³" },
  { grade: "Duplex S31803", tensile: "620 MPa (min)", yield: "450 MPa (min)", elongation: "25%", density: "7.8 g/cm³" },
  { grade: "Super Duplex S32760", tensile: "750 MPa (min)", yield: "550 MPa (min)", elongation: "25%", density: "7.8 g/cm³" },
];

// Tube dimensions – OD and Wall thickness ranges (typical)
const leftOD = [
  "6 mm", "8 mm", "10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm",
];
const rightOD = [
  "25 mm", "30 mm", "35 mm", "40 mm", "50 mm", "63 mm", "80 mm", "100 mm",
];

// Approx weight per meter (kg/m) for stainless steel tubes (density 8.0 g/cm³) – based on wall thickness 1mm (approx)
// Using formula: weight = (OD - wall) * wall * 0.025 (approx for steel, but for ss ~0.0253)
// We'll provide static values for simplicity.
const leftTubeData = [
  { size: "6 mm OD x 1 mm WT", weight: "0.126" },
  { size: "8 mm OD x 1 mm WT", weight: "0.177" },
  { size: "10 mm OD x 1 mm WT", weight: "0.226" },
  { size: "12 mm OD x 1 mm WT", weight: "0.276" },
  { size: "14 mm OD x 1 mm WT", weight: "0.326" },
  { size: "16 mm OD x 1 mm WT", weight: "0.376" },
  { size: "18 mm OD x 1 mm WT", weight: "0.426" },
  { size: "20 mm OD x 1 mm WT", weight: "0.476" },
];
const rightTubeData = [
  { size: "25 mm OD x 1 mm WT", weight: "0.602" },
  { size: "30 mm OD x 1 mm WT", weight: "0.728" },
  { size: "35 mm OD x 1 mm WT", weight: "0.853" },
  { size: "40 mm OD x 1 mm WT", weight: "0.979" },
  { size: "50 mm OD x 1 mm WT", weight: "1.230" },
  { size: "63 mm OD x 1 mm WT", weight: "1.557" },
  { size: "80 mm OD x 1 mm WT", weight: "1.983" },
  { size: "100 mm OD x 1 mm WT", weight: "2.484" },
];

// Extended supply range
const leftTubeDataNew = [
  { size: "6 mm OD x 1 mm WT", weight: "0.126" },
  { size: "8 mm OD x 1 mm WT", weight: "0.177" },
  { size: "10 mm OD x 1 mm WT", weight: "0.226" },
  { size: "12 mm OD x 1 mm WT", weight: "0.276" },
  { size: "14 mm OD x 1 mm WT", weight: "0.326" },
  { size: "16 mm OD x 1 mm WT", weight: "0.376" },
  { size: "18 mm OD x 1 mm WT", weight: "0.426" },
  { size: "20 mm OD x 1 mm WT", weight: "0.476" },
  { size: "25 mm OD x 1 mm WT", weight: "0.602" },
  { size: "30 mm OD x 1 mm WT", weight: "0.728" },
  { size: "35 mm OD x 1 mm WT", weight: "0.853" },
  { size: "40 mm OD x 1 mm WT", weight: "0.979" },
  { size: "50 mm OD x 1 mm WT", weight: "1.230" },
];
const rightTubeDataNew = [
  { size: "63 mm OD x 1 mm WT", weight: "1.557" },
  { size: "80 mm OD x 1 mm WT", weight: "1.983" },
  { size: "100 mm OD x 1 mm WT", weight: "2.484" },
  { size: "125 mm OD x 1 mm WT", weight: "3.111" },
  { size: "160 mm OD x 1 mm WT", weight: "3.990" },
  { size: "200 mm OD x 1 mm WT", weight: "4.993" },
  { size: "250 mm OD x 1 mm WT", weight: "6.248" },
  { size: "300 mm OD x 1 mm WT", weight: "7.503" },
  { size: "350 mm OD x 1 mm WT", weight: "8.757" },
  { size: "400 mm OD x 1 mm WT", weight: "10.012" },
  { size: "450 mm OD x 1 mm WT", weight: "11.267" },
  { size: "500 mm OD x 1 mm WT", weight: "12.522" },
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
  "Stainless Steel Seamless & Welded Tubes – 304, 316, 310S, 904L, Duplex",
  "ASTM A269 / A213 / A312 / A789 / A790 Compliant",
  "Wide Range of OD (6 mm – 500 mm) and Wall Thicknesses",
  "Excellent Corrosion Resistance & High Strength",
  "Precision Tolerances for Heat Exchangers & Instrumentation",
  "Stainless Steel Tubes Manufacturer in India",
];

const rightItems = [
  "ASTM A269 / A213 / A312 / A789 / A790",
  "OD Range: 6 mm to 500 mm",
  "Wall Thickness: 0.5 mm to 25 mm",
  "Straight Lengths up to 12 m, U-Bends Available",
  "Seamless, Welded, ERW, EFW, Cold Drawn",
  "Heat Exchanger Tubes & Instrumentation Tubes",
  "Stainless Steel Tubes Supplier in Mumbai",
];

const searchTerms = [
  "SS 304 Tube Price Per Kg",
  "SS 316L Seamless Tube Weight Chart",
  "Stainless Steel Tube Supplier In India",
  "SS 310S Tube Specifications",
  "SS 904L Tube Price In Mumbai",
  "Stainless Steel Heat Exchanger Tubes",
  "SS Tube Dimensions",
  "ASTM A269 Stainless Steel Tube Specifications",
  "Duplex SS Tube",
  "Stainless Steel Tube Price List",
  "SS Tube Weight Calculator",
  "Super Duplex Tube",
  "Stainless Steel Tube Stockist",
  "SS Tube Equivalent Grades",
  "Stainless Steel Tube Price Per Kg In India",
  "SS Tube Exporter",
  "SS Welded Tube Supplier",
  "SS Tube Sizes",
  "SS Tube Schedule",
  "SS 304 UNS S30400",
  "SS Tube Manufacturers In Mumbai",
  "Buy Stainless Steel Tubes In India",
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

const SsTubesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Stainless Steel Tubes Supplier – Seamless, Welded, ERW, Heat Exchanger Tubes</title>
        <meta
          name="description"
          content="Leading supplier of Stainless Steel tubes (grades 304, 304L, 316, 316L, 310S, 904L, Duplex, Super Duplex) in seamless, welded, ERW, and custom sizes. ASTM A269/A213/A312/A789 compliant."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="STAINLESS STEEL TUBES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>STAINLESS STEEL TUBES SUPPLIER – SEAMLESS, WELDED, ERW & HEAT EXCHANGER TUBES</h1>
            </div>
            <div className="content-image">
              <img src={stainlessSteel} alt="Stainless Steel Tubes" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>STAINLESS STEEL TUBES – VERSATILE, CORROSION-RESISTANT, AND STRONG</h2>
              <p>
                Our comprehensive range of <strong>Stainless Steel Tubes</strong> covers all major grades, from austenitic 304/304L and 316/316L to high-temperature 310S, acid-resistant 904L, and high-strength Duplex/Super Duplex. Stainless steel tubes offer outstanding resistance to corrosion, oxidation, and pitting, combined with excellent mechanical properties and formability. They are the backbone of modern industry, used extensively in chemical processing, petrochemicals, food and beverage, pharmaceutical, marine, and power generation.
              </p>
              <hr />
              <h3>SEAMLESS & WELDED STAINLESS STEEL TUBES</h3>
              <p>
                We supply stainless steel tubes in <strong>seamless (ASTM A269/A213/A312)</strong> and <strong>welded (ASTM A269/A312/A789)</strong> forms, available from 6 mm OD to 500 mm OD with wall thicknesses from 0.5 mm to 25 mm. Our inventory includes cold-drawn, annealed, and precision tubes to meet the stringent demands of heat exchangers, condensers, instrumentation, and structural applications.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Stainless steel tubes are the material of choice for critical applications in <strong>chemical processing</strong> (reactors, vessels, piping), <strong>oil & gas</strong> (offshore platforms, subsea pipelines), <strong>power generation</strong> (superheaters, condensers), <strong>food & beverage</strong> (sanitary tubing), and <strong>pharmaceutical</strong> (clean-room environments). The combination of corrosion resistance, strength, and ease of fabrication ensures long service life with minimal maintenance.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our stainless steel tubes are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM A269, A213, A312, A789, A790</strong>. We provide comprehensive mill test certificates, PMI reports, eddy current testing, hydrostatic testing, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Stainless Steel Tubes</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM A269 / A213 / A312 / A789 / A790</p>
              </div>
              <div className="spec-card">
                <h4>OD Range</h4>
                <p>6 mm – 500 mm</p>
              </div>
              <div className="spec-card">
                <h4>Wall Thickness</h4>
                <p>0.5 mm – 25 mm</p>
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
                <h2>READY STOCK AVAILABILITY – STAINLESS STEEL TUBES</h2>
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
                <h2>EQUIVALENT GRADES: STAINLESS STEEL</h2>
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
                <h2>CHEMICAL COMPOSITION OF STAINLESS STEEL TUBES</h2>
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
                <h2>MECHANICAL PROPERTIES OF STAINLESS STEEL TUBES</h2>
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
                  OD RANGE AVAILABILITY: STAINLESS STEEL TUBES
                  <span>(ASTM A269 / A213 / A312 / A789 / A790)</span>
                </h2>
                <p>Available in Seamless & Welded forms – Round, Square, Rectangular</p>
              </div>
              <div className="table-responsive">
                <table className="thickness-table">
                  <thead>
                    <tr>
                      <th>OD (mm)</th>
                      <th>Availability</th>
                      <th>OD (mm)</th>
                      <th>Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftOD.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightOD[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: STAINLESS STEEL TUBES (1 mm Wall Thickness)</h2>
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
                <h2>STAINLESS STEEL TUBE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED STAINLESS STEEL TUBE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING STAINLESS STEEL TUBES</h2>
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
                <h2>SEARCHES RELATED TO STAINLESS STEEL TUBES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING STAINLESS STEEL TUBES</h2>
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
                  <h2>SEARCHES RELATED TO STAINLESS STEEL TUBES</h2>
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
            <p>Immediate pricing for Stainless Steel tubes. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SsTubesDetails;