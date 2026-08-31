import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import monelRBHR from "../../products-image/ss-hr-roundbars.webp";
import monelRBCR from "../../products-image/ss-cr-roundbars.webp";

import monelRBSpecialty from "../../products-image/ss-special-roundbars.webp";


import monel from "../../products-image/ss-monel-400-roundbars.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "MONEL 400 / K500 HOT ROLLED ROUND BARS",
    image: monelRBHR,
    items: [
      "Monel 400 / K500 Hot Rolled Round Bars",
      "ASTM B164 / ASME SB164",
      "UNS N04400 / N05500",
      "No.1 Finish – Industrial Fabrication",
    ],
  },
  {
    title: "MONEL 400 / K500 COLD DRAWN ROUND BARS",
    image: monelRBCR,
    items: [
      "Monel 400 / K500 Cold Drawn Round Bars",
      "ASTM B164 / ASME SB164",
      "Precision Diameter Tolerances",
      "Smooth Surface Finish",
    ],
  },
  
  {
    title: "MONEL 400 / K500 SPECIALTY ROUND BARS",
    image: monelRBSpecialty,
    items: [
      "Monel 400 / K500 Specialty Round Bars",
      "Marine & Seawater Corrosion Resistant",
      "High Strength (K500) & Ductility (400)",
      "For Chemical, Marine, Oil & Gas",
    ],
  },
  
];

const gradesData = [
  {
    grade: "Monel 400",
    uns: "N04400",
    werkstoff: "2.4360",
    standard: "ASTM B164 / ASME SB164",
  },
  {
    grade: "Monel K500",
    uns: "N05500",
    werkstoff: "2.4375",
    standard: "ASTM B164 / ASME SB164",
  }
];

const chemicalData = [
  {
    grade: "Monel 400",
    c: "0.30 max",
    mn: "2.0 max",
    si: "0.50 max",
    cr: "—",
    ni: "63.0 – 70.0",
    mo: "—",
    other: "Cu: 28.0-34.0, Fe: 2.5 max, S: 0.024 max",
  },
  {
    grade: "Monel K500",
    c: "0.25 max",
    mn: "1.5 max",
    si: "0.50 max",
    cr: "—",
    ni: "63.0 – 70.0",
    mo: "—",
    other: "Cu: 27.0-33.0, Fe: 2.0 max, Al: 2.3-3.15, Ti: 0.35-0.85",
  }
];

const mechanicalData = [
  {
    grade: "Monel 400",
    tensile: "550 MPa (min)",
    yield: "240 MPa (min)",
    elongation: "40%",
    density: "8.83 g/cm³",
  },
  {
    grade: "Monel K500 (Aged)",
    tensile: "965 MPa (min)",
    yield: "690 MPa (min)",
    elongation: "20%",
    density: "8.44 g/cm³",
  }
];

const leftThickness = [
  "3 mm",
  "4 mm",
  "5 mm",
  "6 mm",
  "8 mm",
  "10 mm",
  "12 mm",
  "16 mm",
];

const rightThickness = [
  "20 mm",
  "25 mm",
  "30 mm",
  "40 mm",
  "50 mm",
  "60 mm",
  "80 mm",
  "100 mm / 150 mm",
];

const leftData = [
  { size: "12 mm Dia × 3 m", weight: "3.0" },
  { size: "16 mm Dia × 3 m", weight: "5.3" },
  { size: "20 mm Dia × 3 m", weight: "8.3" },
  { size: "25 mm Dia × 3 m", weight: "13.0" },
  { size: "30 mm Dia × 3 m", weight: "18.7" },
  { size: "40 mm Dia × 3 m", weight: "33.2" },
];

const rightData = [
  { size: "50 mm Dia × 3 m", weight: "51.9" },
  { size: "60 mm Dia × 3 m", weight: "74.7" },
  { size: "80 mm Dia × 3 m", weight: "132.8" },
  { size: "100 mm Dia × 3 m", weight: "207.5" },
  { size: "120 mm Dia × 3 m", weight: "298.8" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "6 mm Dia × 3 m", weight: "0.75" },
  { size: "8 mm Dia × 3 m", weight: "1.33" },
  { size: "10 mm Dia × 3 m", weight: "2.08" },
  { size: "12 mm Dia × 3 m", weight: "3.00" },
  { size: "16 mm Dia × 3 m", weight: "5.32" },
  { size: "20 mm Dia × 3 m", weight: "8.31" },
  { size: "25 mm Dia × 3 m", weight: "12.99" },
  { size: "30 mm Dia × 3 m", weight: "18.70" },
  { size: "40 mm Dia × 3 m", weight: "33.24" },
  { size: "50 mm Dia × 3 m", weight: "51.94" },
  { size: "60 mm Dia × 3 m", weight: "74.79" },
  { size: "80 mm Dia × 3 m", weight: "132.96" },
  { size: "100 mm Dia × 3 m", weight: "207.75" },
];

const rightDataNew = [
  { size: "120 mm Dia × 3 m", weight: "299.16" },
  { size: "150 mm Dia × 3 m", weight: "467.44" },
  { size: "200 mm Dia × 3 m", weight: "831.00" },
  { size: "250 mm Dia × 3 m", weight: "1298.44" },
  { size: "300 mm Dia × 3 m", weight: "1869.75" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
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
    thickness: "10 mm",
    weightPerM2: "0.69",
    size2000: "1.38",
    size2500: "1.73",
    size3000: "2.07",
  },
  {
    thickness: "12 mm",
    weightPerM2: "1.00",
    size2000: "2.00",
    size2500: "2.50",
    size3000: "3.00",
  },
  {
    thickness: "16 mm",
    weightPerM2: "1.77",
    size2000: "3.54",
    size2500: "4.43",
    size3000: "5.32",
  },
  {
    thickness: "20 mm",
    weightPerM2: "2.77",
    size2000: "5.54",
    size2500: "6.93",
    size3000: "8.31",
  },
  {
    thickness: "25 mm",
    weightPerM2: "4.33",
    size2000: "8.66",
    size2500: "10.83",
    size3000: "12.99",
  },
  {
    thickness: "30 mm",
    weightPerM2: "6.23",
    size2000: "12.46",
    size2500: "15.58",
    size3000: "18.70",
  },
  {
    thickness: "40 mm",
    weightPerM2: "11.08",
    size2000: "22.16",
    size2500: "27.70",
    size3000: "33.24",
  },
  {
    thickness: "50 mm",
    weightPerM2: "17.31",
    size2000: "34.62",
    size2500: "43.28",
    size3000: "51.94",
  },
  {
    thickness: "60 mm",
    weightPerM2: "24.93",
    size2000: "49.86",
    size2500: "62.33",
    size3000: "74.79",
  },
];

const toleranceData = [
  {
    thickness: "± 0.10 mm (for dia ≤ 10 mm)",
    upTo36: "± 0.05 mm",
    upTo48: "± 0.08 mm",
  },
  {
    thickness: "± 0.15 mm (for dia 11-25 mm)",
    upTo36: "± 0.08 mm",
    upTo48: "± 0.10 mm",
  },
  {
    thickness: "± 0.20 mm (for dia 26-50 mm)",
    upTo36: "± 0.10 mm",
    upTo48: "± 0.12 mm",
  },
  {
    thickness: "± 0.25 mm (for dia 51-75 mm)",
    upTo36: "± 0.12 mm",
    upTo48: "± 0.15 mm",
  },
  {
    thickness: "± 0.30 mm (for dia 76-100 mm)",
    upTo36: "± 0.15 mm",
    upTo48: "± 0.18 mm",
  },
  {
    thickness: "± 0.40 mm (for dia > 100 mm)",
    upTo36: "± 0.20 mm",
    upTo48: "± 0.25 mm",
  },
];

const leftItems = [
  "Hot Rolled & Cold Drawn Monel 400 / K500 Round Bars",
  "ASTM B164 / ASME SB164 Compliant",
  "High Ni (63-70%) & Cu (27-34%) for Marine Resistance",
  "Excellent Resistance to Seawater, Acids & Alkalis",
  "Monel K500 – Age-Hardenable for Superior Strength",
  "Monel Round Bars Manufacturer in India",
];

const rightItems = [
  "ASTM B164 / SB164 Monel 400 / K500 Round Bars",
  "Diameter Range: 3 mm to 400 mm",
  "Lengths: 1 m to 6 m (custom lengths available)",
  "Finishes: No.1, 2B, BA, No.4, HL, Mirror, Peeled",
  "Hex, Square, and Flat Bar Options",
  "Custom Cut-to-Length & Precision Shearing",
  "Monel Round Bars Supplier in Mumbai",
];

const searchTerms = [
  "Monel 400 Round Bar Price Per Kg",
  "Monel K500 Round Bar Price Per Kg",
  "Monel 400 Round Bar Weight Chart",
  "Monel K500 Round Bar Supplier In India",
  "UNS N04400 Chemical Composition",
  "Monel 400 Round Bar Price In Mumbai",
  "Monel K500 Round Bar Dimensions",
  "Monel Round Bar Specifications Pdf",
  "Monel 400 vs K500 Difference",
  "Monel 400 Round Bar Price List",
  "Monel Round Bar Weight Calculator",
  "Monel K500 Mechanical Properties",
  "Monel Round Bar Stockist",
  "Monel 400 Round Bar Heat Treatment",
  "Monel K500 Round Bar Price Per Kg In India",
  "Monel 400 2.4360",
  "Monel K500 2.4375",
  "Monel Round Bars Manufacturers In Mumbai",
  "Buy Monel Round Bars In India",
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
];

const MonelRoundBarsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Monel Round Bars Supplier – Monel 400 & K500 Nickel-Copper Alloy Bars</title>
        <meta
          name="description"
          content="Supplier of Monel round bars (UNS N04400, N05500) with exceptional resistance to seawater, acids, and alkalis. Hot rolled, cold drawn, polished bars available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="MONEL ROUND BARS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>MONEL ROUND BARS SUPPLIER – MONEL 400 & K500 NICKEL-COPPER ALLOY ROUND BARS</h1>
            </div>
            <div className="content-image">
              <img src={monel} alt="Monel Round Bars" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>MONEL ROUND BARS: EXCEPTIONAL PERFORMANCE IN MARINE & CHEMICAL ENVIRONMENTS</h2>
              <p>Monel is a family of nickel‑copper alloys renowned for their outstanding resistance to seawater, marine atmospheres, and a wide range of corrosive environments. The two most common grades are <strong>Monel 400 (UNS N04400)</strong> and <strong>Monel K500 (UNS N05500)</strong>. Monel 400 offers excellent ductility and resistance to seawater, while Monel K500 is an age‑hardenable version providing significantly higher strength and hardness. Both grades are widely used in marine engineering, chemical processing, oil & gas, and aerospace applications where durability and corrosion resistance are critical.</p>
              <hr />
              <h3>KEY FEATURES OF MONEL ROUND BARS</h3>
              <p><strong>Superior Marine Resistance</strong> – Exceptional performance in seawater, brackish water, and marine atmospheres with minimal corrosion.</p>
              <p><strong>Excellent SCC Resistance</strong> – High nickel content provides outstanding resistance to chloride‑induced stress corrosion cracking.</p>
              <p><strong>Good Weldability & Machinability</strong> – Both grades can be readily welded, brazed, and machined using standard techniques.</p>
              <hr />
              <h3>DIFFERENCE BETWEEN MONEL 400 AND K500</h3>
              <p><strong>Monel 400</strong> – Offers high ductility, good weldability, and excellent resistance to seawater and acids. Typical applications include marine shafts, pump impellers, and chemical processing equipment.</p>
              <p><strong>Monel K500</strong> – Contains aluminum and titanium, which are precipitated through heat treatment to achieve nearly twice the yield strength of Monel 400. Ideal for high‑load components such as pump shafts, valves, and marine propellers.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Monel round bars conform to international standards including <strong>ASTM B164 / ASME SB164</strong> (standard specification for nickel‑copper alloy bars). We supply bars in various finishes (No.1, 2B, BA, No.4, HL, Mirror, Peeled) and can custom‑cut to your exact dimensions.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Monel Round Bars</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B164 / ASME SB164</p>
              </div>
              <div className="spec-card">
                <h4>Diameter Range</h4>
                <p>3 mm – 400 mm</p>
              </div>
              <div className="spec-card">
                <h4>Length</h4>
                <p>1 m – 6 m (custom lengths available)</p>
              </div>
              <div className="spec-card">
                <h4>Finish</h4>
                <p>No.1, 2B, BA, No.4, HL, Mirror, Peeled</p>
              </div>
              <div className="spec-card">
                <h4>Form</h4>
                <p>Hot Rolled, Cold Drawn, Polished, Cut-to-Length</p>
              </div>
              <div className="spec-card">
                <h4>Shape</h4>
                <p>Round, Hex, Square, Flat (custom shapes available)</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – MONEL ROUND BARS</h2>
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
                <h2>EQUIVALENT GRADES: MONEL 400 & K500</h2>
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
                <h2>CHEMICAL COMPOSITION OF MONEL ROUND BARS</h2>
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
                <h2>MECHANICAL PROPERTIES OF MONEL ROUND BARS</h2>
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
                  DIAMETER RANGE AVAILABILITY: MONEL ROUND BARS
                  <span>(ASTM B164 / SB164)</span>
                </h2>
                <p>Available in Hot Rolled & Cold Drawn conditions for both grades</p>
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
                <h2>UNIFIED WEIGHT CHART: MONEL ROUND BARS (APPROX. WEIGHT PER 3 M LENGTH)</h2>
              </div>
              <div className="table-responsive">
                <table className="coil-weight-table">
                  <thead>
                    <tr>
                      <th>Diameter (mm) × Length</th>
                      <th>Approx Weight (Kg)</th>
                      <th>Diameter (mm) × Length</th>
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
                <h2>MONEL ROUND BAR SUPPLY RANGE (UNIFIED)</h2>
                <p>Applicable for: All standard diameters and custom cut-to-length dimensions</p>
              </div>
              <div className="table-responsive">
                <table className="finish-weight-table">
                  <thead>
                    <tr>
                      <th>Diameter (mm) × Length</th>
                      <th>Weight (kg)</th>
                      <th>Diameter (mm) × Length</th>
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
                <h2>UNIFIED MONEL ROUND BAR PRICE RANGE</h2>
              </div>
              <div className="table-responsive">
                <table className="gauge-table">
                  <thead>
                    <tr>
                      <th>Gauge Number</th>
                      <th>Inches</th>
                      <th>MM (Diameter)</th>
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
                <h2>SPECIALIZED IN FOLLOWING MONEL ROUND BARS</h2>
              </div>
              <div className="table-responsive">
                <table className="specialty-weight-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Diameter (mm)</th>
                      <th rowSpan="2">Weight Kg/m</th>
                      <th colSpan="3">Weight per 1m / 2m / 3m lengths (kg)</th>
                    </tr>
                    <tr>
                      <th>1 m</th>
                      <th>2 m</th>
                      <th>3 m</th>
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
                <h2>SEARCHES RELATED TO MONEL ROUND BARS</h2>
              </div>
              <div className="table-responsive">
                <table className="tolerance-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Diameter (mm)</th>
                      <th colSpan="2">Diameter Tolerance (mm)</th>
                    </tr>
                    <tr>
                      <th>Standard</th>
                      <th>Precision</th>
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
                <h2>SPECIALIZED IN FOLLOWING MONEL ROUND BARS</h2>
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
                  <h2>SEARCHES RELATED TO MONEL ROUND BARS</h2>
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

      <Footer />
    </>
  );
};

export default MonelRoundBarsDetails;