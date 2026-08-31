import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Copper Nickel Tubes product images
import cuNiSeamlessTubes from "../../products-image/ss-seamless-copper-tubes.webp";
import cuNiWeldedTubes from "../../products-image/ss-welded-copper-tubes.webp";
import cuNiSpecialTubes from "../../products-image/ss-specialized-copper-tubes.webp";

import copperNickel from "../../products-image/ss-copper-nickel-tubes.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "COPPER NICKEL 90/10 (C70600) SEAMLESS TUBES",
    image: cuNiSeamlessTubes,
    items: [
      "Cupro Nickel 90/10 Seamless Tubes",
      "ASTM B111 / B466",
      "UNS C70600 / 2.0872",
      "Superior Seawater Corrosion Resistance",
    ],
  },
  {
    title: "COPPER NICKEL 70/30 (C71500) SEAMLESS TUBES",
    image: cuNiSeamlessTubes,
    items: [
      "Cupro Nickel 70/30 Seamless Tubes",
      "ASTM B111 / B466",
      "UNS C71500 / 2.0882",
      "Higher Strength & Erosion Resistance",
    ],
  },
  {
    title: "COPPER NICKEL 90/10 (C70600) WELDED TUBES",
    image: cuNiWeldedTubes,
    items: [
      "Cupro Nickel 90/10 Welded Tubes",
      "ASTM B467 / B543",
      "Longitudinal & Spiral Welded",
      "Industrial Process Tubing",
    ],
  },
  {
    title: "COPPER NICKEL 70/30 (C71500) WELDED TUBES",
    image: cuNiWeldedTubes,
    items: [
      "Cupro Nickel 70/30 Welded Tubes",
      "ASTM B467 / B543",
      "High Strength Welded",
      "For Marine & Heat Exchangers",
    ],
  },
  {
    title: "COPPER NICKEL SPECIALTY TUBES",
    image: cuNiSpecialTubes,
    items: [
      "Copper Nickel Alloy Tubes",
      "Grades: 90/10 (C70600) & 70/30 (C71500)",
      "Excellent Seawater & Biofouling Resistance",
      "Stockist in Mumbai, India",
    ],
  }
];

const gradesData = [
  {
    grade: "Cupro Nickel 90/10",
    uns: "C70600",
    werkstoff: "2.0872",
    standard: "ASTM B111 / B466 / B467",
  },
  {
    grade: "Cupro Nickel 70/30",
    uns: "C71500",
    werkstoff: "2.0882",
    standard: "ASTM B111 / B466 / B467",
  }
];

const chemicalData = [
  {
    grade: "90/10 (C70600)",
    c: "—",
    mn: "1.0 max",
    si: "—",
    cr: "—",
    ni: "9.0 – 11.0",
    mo: "—",
    other: "Cu: Balance, Fe: 1.0-1.8, Zn: 1.0 max, Pb: 0.05 max",
  },
  {
    grade: "70/30 (C71500)",
    c: "—",
    mn: "1.0 max",
    si: "—",
    cr: "—",
    ni: "29.0 – 33.0",
    mo: "—",
    other: "Cu: Balance, Fe: 0.4-1.0, Zn: 1.0 max, Pb: 0.05 max",
  }
];

const mechanicalData = [
  {
    grade: "90/10 (C70600)",
    tensile: "310 MPa (min)",
    yield: "110 MPa (min)",
    elongation: "30%",
    density: "8.94 g/cm³",
  },
  {
    grade: "70/30 (C71500)",
    tensile: "360 MPa (min)",
    yield: "125 MPa (min)",
    elongation: "30%",
    density: "8.95 g/cm³",
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

// Approx weight per meter for copper-nickel tubes (density ~8.95 g/cm³) – based on wall thickness 1mm
// Using formula: weight = (OD - wall) * wall * 0.0278 (approx for CuNi)
const leftTubeData = [
  { size: "6 mm OD x 1 mm WT", weight: "0.139" },
  { size: "8 mm OD x 1 mm WT", weight: "0.195" },
  { size: "10 mm OD x 1 mm WT", weight: "0.250" },
  { size: "12 mm OD x 1 mm WT", weight: "0.306" },
  { size: "14 mm OD x 1 mm WT", weight: "0.361" },
  { size: "16 mm OD x 1 mm WT", weight: "0.417" },
  { size: "18 mm OD x 1 mm WT", weight: "0.473" },
  { size: "20 mm OD x 1 mm WT", weight: "0.528" },
];

const rightTubeData = [
  { size: "25 mm OD x 1 mm WT", weight: "0.668" },
  { size: "30 mm OD x 1 mm WT", weight: "0.807" },
  { size: "35 mm OD x 1 mm WT", weight: "0.946" },
  { size: "40 mm OD x 1 mm WT", weight: "1.085" },
  { size: "50 mm OD x 1 mm WT", weight: "1.363" },
  { size: "63 mm OD x 1 mm WT", weight: "1.725" },
  { size: "80 mm OD x 1 mm WT", weight: "2.197" },
  { size: "100 mm OD x 1 mm WT", weight: "2.753" },
];

// Extended supply range
const leftTubeDataNew = [
  { size: "6 mm OD x 1 mm WT", weight: "0.139" },
  { size: "8 mm OD x 1 mm WT", weight: "0.195" },
  { size: "10 mm OD x 1 mm WT", weight: "0.250" },
  { size: "12 mm OD x 1 mm WT", weight: "0.306" },
  { size: "14 mm OD x 1 mm WT", weight: "0.361" },
  { size: "16 mm OD x 1 mm WT", weight: "0.417" },
  { size: "18 mm OD x 1 mm WT", weight: "0.473" },
  { size: "20 mm OD x 1 mm WT", weight: "0.528" },
  { size: "25 mm OD x 1 mm WT", weight: "0.668" },
  { size: "30 mm OD x 1 mm WT", weight: "0.807" },
  { size: "35 mm OD x 1 mm WT", weight: "0.946" },
  { size: "40 mm OD x 1 mm WT", weight: "1.085" },
  { size: "50 mm OD x 1 mm WT", weight: "1.363" },
];

const rightTubeDataNew = [
  { size: "63 mm OD x 1 mm WT", weight: "1.725" },
  { size: "80 mm OD x 1 mm WT", weight: "2.197" },
  { size: "100 mm OD x 1 mm WT", weight: "2.753" },
  { size: "125 mm OD x 1 mm WT", weight: "3.449" },
  { size: "160 mm OD x 1 mm WT", weight: "4.421" },
  { size: "200 mm OD x 1 mm WT", weight: "5.532" },
  { size: "250 mm OD x 1 mm WT", weight: "6.923" },
  { size: "300 mm OD x 1 mm WT", weight: "8.314" },
  { size: "350 mm OD x 1 mm WT", weight: "9.705" },
  { size: "400 mm OD x 1 mm WT", weight: "11.096" },
  { size: "450 mm OD x 1 mm WT", weight: "12.487" },
  { size: "500 mm OD x 1 mm WT", weight: "13.878" },
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
    weightPerM2: "4.47",
    size2000: "8.94",
    size2500: "13.97",
    size3000: "20.12",
  },
  {
    thickness: "1.00",
    weightPerM2: "8.94",
    size2000: "17.88",
    size2500: "27.94",
    size3000: "40.23",
  },
  {
    thickness: "1.50",
    weightPerM2: "13.41",
    size2000: "26.82",
    size2500: "41.91",
    size3000: "60.35",
  },
  {
    thickness: "2.00",
    weightPerM2: "17.88",
    size2000: "35.76",
    size2500: "55.88",
    size3000: "80.46",
  },
  {
    thickness: "3.00",
    weightPerM2: "26.82",
    size2000: "53.64",
    size2500: "83.82",
    size3000: "120.69",
  },
  {
    thickness: "4.00",
    weightPerM2: "35.76",
    size2000: "71.52",
    size2500: "111.76",
    size3000: "160.92",
  },
  {
    thickness: "5.00",
    weightPerM2: "44.70",
    size2000: "89.40",
    size2500: "139.70",
    size3000: "201.15",
  },
  {
    thickness: "6.00",
    weightPerM2: "53.64",
    size2000: "107.28",
    size2500: "167.64",
    size3000: "241.38",
  },
  {
    thickness: "8.00",
    weightPerM2: "71.52",
    size2000: "143.04",
    size2500: "223.52",
    size3000: "321.84",
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
  "Copper Nickel 90/10 & 70/30 Seamless & Welded Tubes",
  "ASTM B111 / B466 / B467 / B543 Compliant",
  "Excellent Resistance to Seawater & Biofouling",
  "High Thermal Conductivity for Heat Exchangers",
  "70/30 Offers Higher Strength & Erosion Resistance",
  "Copper Nickel Tubes Manufacturer in India",
];

const rightItems = [
  "ASTM B111 / B466 / B467 / B543",
  "OD Range: 6 mm to 500 mm",
  "Wall Thickness: 0.4 mm to 25 mm",
  "Straight Lengths up to 12 m, U-Bends Available",
  "Seamless, Welded, ERW, EFW, Cold Drawn",
  "Heat Exchanger Tubes & Condenser Tubes",
  "Copper Nickel Tubes Supplier in Mumbai",
];

const searchTerms = [
  "Copper Nickel Tube Price Per Kg",
  "Cupro Nickel 90/10 Seamless Tube Weight Chart",
  "Copper Nickel 70/30 Tube Supplier In India",
  "UNS C70600 Chemical Composition",
  "Copper Nickel Tube Price In Mumbai",
  "CuNi 90/10 Tube Dimensions",
  "Copper Nickel Tube Specifications Pdf",
  "Cupro Nickel Seawater Resistance",
  "Copper Nickel Tube Price List",
  "Copper Nickel Tube Weight Calculator",
  "Cupro Nickel Mechanical Properties",
  "Copper Nickel Tube Stockist",
  "Copper Nickel 70/30 Heat Treatment",
  "Copper Nickel Tube Price Per Kg In India",
  "C70600 / C71500",
  "Copper Nickel Tubes Manufacturers In Mumbai",
  "Buy Copper Nickel Tubes In India",
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

const CopperNickelTubesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Copper Nickel Tubes Supplier – Cupro Nickel Tubes (90/10 & 70/30)</title>
        <meta
          name="description"
          content="Supplier of Copper Nickel tubes (UNS C70600, C71500) with exceptional resistance to seawater, biofouling, and chloride corrosion. Seamless, welded, ERW, EFW tubes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="COPPER NICKEL TUBES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>COPPER NICKEL TUBES SUPPLIER – CUPRO NICKEL ALLOY TUBES (90/10 & 70/30)</h1>
            </div>
            <div className="content-image">
              <img src={copperNickel} alt="Copper Nickel Tubes" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>COPPER NICKEL TUBES: EXCEPTIONAL PERFORMANCE IN MARINE & CHEMICAL ENVIRONMENTS</h2>
              <p>
                Copper nickel alloys (also known as cupro‑nickel) are renowned for their outstanding resistance to seawater, marine biofouling, and chloride‑induced corrosion. The two most common grades are <strong>90/10 (UNS C70600)</strong> and <strong>70/30 (UNS C71500)</strong>. Both offer excellent thermal conductivity and are widely used in heat exchangers, condensers, desalination plants, and offshore piping systems. The 70/30 grade provides higher strength and erosion resistance, making it suitable for high‑velocity seawater applications.
              </p>
              <hr />
              <h3>KEY FEATURES OF COPPER NICKEL TUBES</h3>
              <p><strong>Superior Marine Resistance</strong> – Exceptional performance in seawater, brackish water, and marine atmospheres with minimal corrosion.</p>
              <p><strong>Natural Biofouling Resistance</strong> – The copper content provides a natural anti‑fouling property, reducing the attachment of marine organisms.</p>
              <p><strong>Good Weldability & Fabricability</strong> – Both grades can be readily welded, brazed, and formed using standard techniques.</p>
              <hr />
              <h3>DIFFERENCE BETWEEN 90/10 AND 70/30</h3>
              <p><strong>90/10 (C70600)</strong> – Contains 10% nickel and 1.5% iron. Offers excellent resistance to seawater with good economics and is the most commonly used grade.</p>
              <p><strong>70/30 (C71500)</strong> – Contains 30% nickel and 0.6% iron. Provides higher strength and superior erosion resistance at higher flow velocities, ideal for critical marine and power generation applications.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Copper Nickel tubes conform to international standards including <strong>ASTM B111</strong> (seamless tubes), <strong>ASTM B466</strong> (seamless pipes/tubes), <strong>ASTM B467</strong> (welded), and <strong>ASTM B543</strong> (welded tubes). We supply tubes in various finishes (mill, annealed, pickled, polished) and can custom‑cut to your exact dimensions.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Copper Nickel Tubes</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B111 / B466 / B467 / B543</p>
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
                <h2>READY STOCK AVAILABILITY – COPPER NICKEL TUBES</h2>
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
                <h2>EQUIVALENT GRADES: COPPER NICKEL</h2>
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
                <h2>CHEMICAL COMPOSITION OF COPPER NICKEL TUBES</h2>
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
                <h2>MECHANICAL PROPERTIES OF COPPER NICKEL TUBING</h2>
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
                  WALL THICKNESS RANGE AVAILABILITY: COPPER NICKEL TUBES
                  <span>(ASTM B111 / B466 / B467 / B543)</span>
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
                <h2>UNIFIED WEIGHT CHART: COPPER NICKEL TUBES (1 mm Wall Thickness)</h2>
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
                <h2>COPPER NICKEL TUBE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED COPPER NICKEL TUBE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING COPPER NICKEL TUBES</h2>
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
                <h2>SEARCHES RELATED TO COPPER NICKEL TUBES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING COPPER NICKEL TUBES</h2>
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
                  <h2>SEARCHES RELATED TO COPPER NICKEL TUBES</h2>
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
            <p>Immediate pricing for Copper Nickel tubes. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CopperNickelTubesDetails;