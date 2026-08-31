import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import ssRBHR from "../../products-image/ss-hr-roundbars.webp";
import ssRBCR from "../../products-image/ss-cr-roundbars.webp";

import ssRBSpecialty from "../../products-image/ss-special-roundbars.webp";


import ssRoundbars from "../../products-image/ss-steel-roundbars.webp";

import "./Productsdetails.css";


const stockData = [
  {
    title: "STAINLESS STEEL HOT ROLLED ROUND BARS",
    image: ssRBHR,
    items: [
      "Hot Rolled Stainless Steel Round Bars",
      "ASTM A276 / ASME SA276",
      "Grades: 304, 304L, 316, 316L, 310S, 904L",
      "No.1 Finish – Industrial Fabrication",
    ],
  },
  {
    title: "STAINLESS STEEL COLD ROLLED ROUND BARS",
    image: ssRBCR,
    items: [
      "Cold Rolled / Cold Drawn Round Bars",
      "ASTM A276 / ASME SA276",
      "Precision Diameter Tolerances",
      "2B, BA, No.4, Mirror Finishes",
    ],
  },
  
  {
    title: "STAINLESS STEEL SPECIALTY ROUND BARS",
    image: ssRBSpecialty,
    items: [
      "Specialty Stainless Steel Round Bars",
      "High-Temperature (310S) & Acid-Resistant (904L)",
      "Duplex & Super Duplex Grades",
      "For Chemical, Marine, Aerospace",
    ],
  },
  
];

const gradesData = [
  {
    grade: "SS 304 / 304L",
    uns: "S30400 / S30403",
    werkstoff: "1.4301 / 1.4307",
    standard: "ASTM A276 / ASME SA276",
  },
  {
    grade: "SS 316 / 316L",
    uns: "S31600 / S31603",
    werkstoff: "1.4401 / 1.4404",
    standard: "ASTM A276 / ASME SA276",
  },
  {
    grade: "SS 310S",
    uns: "S31008",
    werkstoff: "1.4845",
    standard: "ASTM A276 / ASME SA276",
  },
  {
    grade: "SS 904L",
    uns: "N08904",
    werkstoff: "1.4539",
    standard: "ASTM A276 / ASME SA276",
  },
  {
    grade: "Duplex S31803",
    uns: "S31803",
    werkstoff: "1.4462",
    standard: "ASTM A276 / ASME SA276",
  },
  {
    grade: "Super Duplex S32760",
    uns: "S32760",
    werkstoff: "1.4501",
    standard: "ASTM A276 / ASME SA276",
  }
];

const chemicalData = [
  {
    grade: "SS 304 / 304L",
    c: "0.08 / 0.03 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "17.5 – 19.5",
    ni: "8.0 – 10.5",
    mo: "—",
    other: "Fe: Balance",
  },
  {
    grade: "SS 316 / 316L",
    c: "0.08 / 0.03 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "16.0 – 18.0",
    ni: "10.0 – 14.0",
    mo: "2.0 – 3.0",
    other: "Fe: Balance",
  },
  {
    grade: "SS 310S",
    c: "0.08 max",
    mn: "2.0 max",
    si: "1.5 max",
    cr: "24.0 – 26.0",
    ni: "19.0 – 22.0",
    mo: "—",
    other: "Fe: Balance",
  }
];

const mechanicalData = [
  {
    grade: "SS 304 / 304L",
    tensile: "515 MPa (min)",
    yield: "205 MPa (min)",
    elongation: "40%",
    density: "8.0 g/cm³",
  },
  {
    grade: "SS 316 / 316L",
    tensile: "515 MPa (min)",
    yield: "205 MPa (min)",
    elongation: "40%",
    density: "8.0 g/cm³",
  },
  {
    grade: "SS 310S",
    tensile: "515 MPa (min)",
    yield: "205 MPa (min)",
    elongation: "40%",
    density: "7.98 g/cm³",
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
  { size: "12 mm Dia × 3 m", weight: "2.7" },
  { size: "16 mm Dia × 3 m", weight: "4.8" },
  { size: "20 mm Dia × 3 m", weight: "7.5" },
  { size: "25 mm Dia × 3 m", weight: "11.7" },
  { size: "30 mm Dia × 3 m", weight: "16.8" },
  { size: "40 mm Dia × 3 m", weight: "29.9" },
];

const rightData = [
  { size: "50 mm Dia × 3 m", weight: "46.7" },
  { size: "60 mm Dia × 3 m", weight: "67.2" },
  { size: "80 mm Dia × 3 m", weight: "119.5" },
  { size: "100 mm Dia × 3 m", weight: "186.8" },
  { size: "120 mm Dia × 3 m", weight: "269.0" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "6 mm Dia × 3 m", weight: "0.67" },
  { size: "8 mm Dia × 3 m", weight: "1.19" },
  { size: "10 mm Dia × 3 m", weight: "1.87" },
  { size: "12 mm Dia × 3 m", weight: "2.69" },
  { size: "16 mm Dia × 3 m", weight: "4.78" },
  { size: "20 mm Dia × 3 m", weight: "7.47" },
  { size: "25 mm Dia × 3 m", weight: "11.68" },
  { size: "30 mm Dia × 3 m", weight: "16.81" },
  { size: "40 mm Dia × 3 m", weight: "29.89" },
  { size: "50 mm Dia × 3 m", weight: "46.70" },
  { size: "60 mm Dia × 3 m", weight: "67.25" },
  { size: "80 mm Dia × 3 m", weight: "119.55" },
  { size: "100 mm Dia × 3 m", weight: "186.80" },
];

const rightDataNew = [
  { size: "120 mm Dia × 3 m", weight: "269.00" },
  { size: "150 mm Dia × 3 m", weight: "420.30" },
  { size: "200 mm Dia × 3 m", weight: "747.20" },
  { size: "250 mm Dia × 3 m", weight: "1167.50" },
  { size: "300 mm Dia × 3 m", weight: "1681.20" },
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
    weightPerM2: "0.62",
    size2000: "1.24",
    size2500: "1.55",
    size3000: "1.86",
  },
  {
    thickness: "12 mm",
    weightPerM2: "0.89",
    size2000: "1.78",
    size2500: "2.23",
    size3000: "2.67",
  },
  {
    thickness: "16 mm",
    weightPerM2: "1.58",
    size2000: "3.16",
    size2500: "3.95",
    size3000: "4.74",
  },
  {
    thickness: "20 mm",
    weightPerM2: "2.47",
    size2000: "4.94",
    size2500: "6.18",
    size3000: "7.41",
  },
  {
    thickness: "25 mm",
    weightPerM2: "3.86",
    size2000: "7.72",
    size2500: "9.65",
    size3000: "11.58",
  },
  {
    thickness: "30 mm",
    weightPerM2: "5.56",
    size2000: "11.12",
    size2500: "13.90",
    size3000: "16.68",
  },
  {
    thickness: "40 mm",
    weightPerM2: "9.88",
    size2000: "19.76",
    size2500: "24.70",
    size3000: "29.64",
  },
  {
    thickness: "50 mm",
    weightPerM2: "15.44",
    size2000: "30.88",
    size2500: "38.60",
    size3000: "46.32",
  },
  {
    thickness: "60 mm",
    weightPerM2: "22.23",
    size2000: "44.46",
    size2500: "55.58",
    size3000: "66.69",
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
  "Hot Rolled & Cold Drawn Stainless Steel Round Bars",
  "ASTM A276 / ASME SA276 Compliant",
  "Grades: 304, 304L, 316, 316L, 310S, 904L, Duplex",
  "Precision Diameter Tolerances & Surface Finishes",
  "Excellent Machinability & Weldability",
  "Stainless Steel Round Bars Manufacturer in India",
];

const rightItems = [
  "ASTM A276 / SA276 SS Round Bars",
  "Diameter Range: 3 mm to 500 mm",
  "Lengths: 1 m to 6 m (custom lengths available)",
  "Finishes: No.1, 2B, BA, No.4, HL, Mirror, Peeled",
  "Hex, Square, and Flat Bar Options",
  "Custom Cut-to-Length & Precision Shearing",
  "Stainless Steel Round Bars Supplier in Mumbai",
];

const searchTerms = [
  "SS Round Bar Price Per Kg",
  "Stainless Steel Round Bar Weight Chart",
  "SS 316 Round Bar Supplier In India",
  "SS Round Bar Chemical Composition",
  "SS 304 Round Bar Price In Mumbai",
  "Stainless Steel Round Bar Dimensions",
  "SS Round Bar Specifications Pdf",
  "SS 310S Round Bar Heat Treatment",
  "SS Round Bar Price List",
  "SS Round Bar Weight Calculator",
  "Stainless Steel Round Bar Mechanical Properties",
  "SS Round Bar Stockist",
  "SS 904L Round Bar Price Per Kg In India",
  "SS Round Bar Manufacturers In Mumbai",
  "Buy Stainless Steel Round Bars In India",
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

const SsRoundBarsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Stainless Steel Round Bars Supplier – SS Round Bars Stockist (304, 316, 310S, 904L, Duplex)</title>
        <meta
          name="description"
          content="Supplier of Stainless Steel Round Bars in grades 304/304L, 316/316L, 310S, 904L, Duplex, Super Duplex. Available in hot rolled, cold drawn, polished finishes. Diameters from 3 mm to 500 mm."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="STAINLESS STEEL ROUND BARS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>STAINLESS STEEL ROUND BARS SUPPLIER – SS ROUND BARS STOCKIST</h1>
            </div>
            <div className="content-image">
              <img src={ssRoundbars} alt="Stainless Steel Round Bars" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>STAINLESS STEEL ROUND BARS: VERSATILE SOLUTIONS FOR MACHINING & FABRICATION</h2>
              <p>Stainless steel round bars are solid cylindrical rods available in a wide range of grades, diameters, and finishes to meet the diverse needs of machining, fabrication, and construction. From the most commonly used <strong>304/304L</strong> and <strong>316/316L</strong> grades, to high‑temperature <strong>310S</strong>, corrosion‑resistant <strong>904L</strong>, and high‑strength <strong>Duplex / Super Duplex</strong> grades, our inventory covers all major specifications. Whether you need hot‑rolled bars for structural applications, cold‑drawn bars for precision machining, or polished bars for architectural and decorative use, we provide precision‑cut solutions tailored to your requirements.</p>
              <hr />
              <h3>KEY FEATURES OF STAINLESS STEEL ROUND BARS</h3>
              <p><strong>Multiple Grades Available</strong> – Austenitic (304, 316, 310S, 904L), Duplex (S31803, S32205), and Super Duplex (S32750, S32760).</p>
              <p><strong>Versatile Finishes</strong> – Hot Rolled (No.1), Cold Drawn, Peeled, Polished (No.4, HL, Mirror).</p>
              <p><strong>Customizable Dimensions</strong> – Diameters from 3 mm to 500 mm, lengths up to 6 m (or custom).</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our stainless steel round bars conform to international standards including <strong>ASTM A276 / ASME SA276</strong> (standard specification for stainless steel bars and shapes). We also supply to <strong>ASTM A484</strong> (general requirements for stainless steel bars). All bars are supplied with mill test certificates and can be custom‑processed to meet your specific machining and fabrication needs.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Stainless Steel Round Bars</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM A276 / ASME SA276, ASTM A484</p>
              </div>
              <div className="spec-card">
                <h4>Diameter Range</h4>
                <p>3 mm – 500 mm</p>
              </div>
              <div className="spec-card">
                <h4>Length</h4>
                <p>1 m – 6 m (custom lengths available)</p>
              </div>
              <div className="spec-card">
                <h4>Grades</h4>
                <p>304, 304L, 316, 316L, 310S, 904L, 317L, S31803, S32205, S32750, S32760</p>
              </div>
              <div className="spec-card">
                <h4>Finish / Form</h4>
                <p>Hot Rolled, Cold Drawn, Peeled, Polished (No.1, 2B, No.4, HL, Mirror)</p>
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
                <h2>READY STOCK AVAILABILITY – STAINLESS STEEL ROUND BARS</h2>
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
                <h2>EQUIVALENT GRADES: STAINLESS STEEL ROUND BARS</h2>
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
                <h2>CHEMICAL COMPOSITION OF SS ROUND BARS</h2>
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
                <h2>MECHANICAL PROPERTIES OF SS ROUND BARS</h2>
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
                  DIAMETER RANGE AVAILABILITY: SS ROUND BARS
                  <span>(ASTM A276 / SA276)</span>
                </h2>
                <p>Available in Hot Rolled & Cold Drawn conditions across all grades</p>
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
                <h2>UNIFIED WEIGHT CHART: SS ROUND BARS (APPROX. WEIGHT PER 3 M LENGTH)</h2>
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
                <h2>SS ROUND BAR SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED SS ROUND BAR PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING SS ROUND BARS</h2>
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
                <h2>SEARCHES RELATED TO SS ROUND BARS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING SS ROUND BARS</h2>
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
                  <h2>SEARCHES RELATED TO STAINLESS STEEL ROUND BARS</h2>
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

export default SsRoundBarsDetails;
