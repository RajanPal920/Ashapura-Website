import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Nickel 200/201 Sheets product images
import nickelHRSheets from "../../products-image/ss-hr-sheets.webp";
import nickelCRSheets from "../../products-image/ss-cr-sheets.webp";
import nickelCoils from "../../products-image/ss-perforated-sheets.webp";


import nickelAlloy from "../../products-image/ss-nickel-alloy-200-sheets.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "NICKEL 200 HOT ROLLED SHEETS",
    image: nickelHRSheets,
    items: [
      "Nickel 200 Hot Rolled Sheets (ASTM B162)",
      "UNS N02200 / 2.4066",
      "No.1 Finish – Industrial Fabrication",
      "Excellent Resistance to Caustic Soda & Alkalis",
    ],
  },
  {
    title: "NICKEL 200 COLD ROLLED SHEETS",
    image: nickelCRSheets,
    items: [
      "Nickel 200 Cold Rolled Sheets (ASTM B162)",
      "Precision Thickness Tolerances",
      "2B, BA, No.4, Mirror Finishes",
      "Excellent Surface Quality for Critical Applications",
    ],
  },
  {
    title: "NICKEL 201 SPECIALTY SHEETS",
    image: nickelCRSheets,
    items: [
      "Nickel 201 Specialty Sheets (Low Carbon)",
      "ASTM B162 / ASME SB162",
      "UNS N02201 / 2.4068",
      "For Elevated Temperature Service Above 315°C",
    ],
  },
  
];

const gradesData = [
  {
    grade: "Nickel 200",
    uns: "N02200",
    werkstoff: "2.4066",
    standard: "ASTM B162 / ASME SB162",
  },
  {
    grade: "Nickel 201",
    uns: "N02201",
    werkstoff: "2.4068",
    standard: "ASTM B162 / ASME SB162",
  },
];

const chemicalData = [
  {
    grade: "Nickel 200",
    c: "0.15 max",
    mn: "0.35 max",
    si: "0.35 max",
    cr: "—",
    ni: "99.0 min",
    mo: "—",
    other: "Cu: 0.25 max, Fe: 0.40 max, S: 0.01 max",
  },
  {
    grade: "Nickel 201",
    c: "0.02 max",
    mn: "0.35 max",
    si: "0.35 max",
    cr: "—",
    ni: "99.0 min",
    mo: "—",
    other: "Cu: 0.25 max, Fe: 0.40 max, S: 0.01 max",
  },
];

const mechanicalData = [
  {
    grade: "Nickel 200",
    tensile: "462 MPa (67 ksi) min",
    yield: "148 MPa (21.5 ksi) min",
    elongation: "45%",
    density: "8.89 g/cm³",
  },
  {
    grade: "Nickel 201",
    tensile: "462 MPa (67 ksi) min",
    yield: "148 MPa (21.5 ksi) min",
    elongation: "45%",
    density: "8.89 g/cm³",
  },
];

// Thickness and weight charts for sheets (density 8.89 g/cm³)
const leftThickness = [
  "0.5 mm", "1.0 mm", "1.5 mm", "2.0 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm",
];
const rightThickness = [
  "8.0 mm", "10.0 mm", "12.0 mm", "16.0 mm", "20.0 mm", "25.0 mm", "50.0 mm", "100.0 mm",
];

// Approx weights for nickel sheets (density 8.89 g/cm³)
const leftData = [
  { size: "2000 × 1000 × 2.0", weight: "35.6" },
  { size: "2500 × 1250 × 3.0", weight: "83.3" },
  { size: "3000 × 1500 × 4.0", weight: "160.0" },
  { size: "2000 × 1000 × 5.0", weight: "88.9" },
  { size: "2500 × 1250 × 6.0", weight: "166.7" },
  { size: "3000 × 1500 × 8.0", weight: "320.0" },
];
const rightData = [
  { size: "2000 × 1000 × 10.0", weight: "177.8" },
  { size: "2500 × 1250 × 12.0", weight: "333.3" },
  { size: "3000 × 1500 × 16.0", weight: "640.0" },
  { size: "2000 × 1000 × 20.0", weight: "355.6" },
  { size: "2500 × 1250 × 25.0", weight: "694.4" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "2000 × 1000 × 1.0", weight: "17.8" },
  { size: "2500 × 1250 × 1.5", weight: "41.7" },
  { size: "3000 × 1500 × 2.0", weight: "80.0" },
  { size: "2000 × 1000 × 3.0", weight: "53.3" },
  { size: "2500 × 1250 × 4.0", weight: "111.1" },
  { size: "3000 × 1500 × 5.0", weight: "200.0" },
  { size: "2000 × 1000 × 6.0", weight: "106.7" },
  { size: "2500 × 1250 × 8.0", weight: "222.2" },
  { size: "3000 × 1500 × 10.0", weight: "400.0" },
  { size: "4000 × 2000 × 12.0", weight: "853.3" },
  { size: "2000 × 1000 × 15.0", weight: "266.7" },
  { size: "2500 × 1250 × 20.0", weight: "555.6" },
  { size: "3000 × 1500 × 25.0", weight: "1000.0" },
];
const rightDataNew = [
  { size: "4000 × 2000 × 30.0", weight: "2133.3" },
  { size: "2500 × 1250 × 40.0", weight: "1111.1" },
  { size: "3000 × 1500 × 50.0", weight: "2000.0" },
  { size: "4000 × 2000 × 60.0", weight: "4266.7" },
  { size: "2500 × 1250 × 80.0", weight: "2222.2" },
  { size: "3000 × 1500 × 100.0", weight: "4000.0" },
  { size: "4000 × 2000 × 120.0", weight: "8533.3" },
  { size: "4000 × 2000 × 150.0", weight: "10666.7" },
  { size: "2500 × 1250 × 200.0", weight: "5555.6" },
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
  { thickness: "0.50", weightPerM2: "4.45", size2000: "8.90", size2500: "13.91", size3000: "20.02" },
  { thickness: "1.00", weightPerM2: "8.89", size2000: "17.78", size2500: "27.78", size3000: "40.00" },
  { thickness: "1.50", weightPerM2: "13.34", size2000: "26.67", size2500: "41.67", size3000: "60.00" },
  { thickness: "2.00", weightPerM2: "17.78", size2000: "35.56", size2500: "55.56", size3000: "80.00" },
  { thickness: "3.00", weightPerM2: "26.67", size2000: "53.33", size2500: "83.33", size3000: "120.00" },
  { thickness: "4.00", weightPerM2: "35.56", size2000: "71.11", size2500: "111.11", size3000: "160.00" },
  { thickness: "5.00", weightPerM2: "44.45", size2000: "88.89", size2500: "138.89", size3000: "200.00" },
  { thickness: "6.00", weightPerM2: "53.33", size2000: "106.67", size2500: "166.67", size3000: "240.00" },
  { thickness: "8.00", weightPerM2: "71.11", size2000: "142.22", size2500: "222.22", size3000: "320.00" },
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
  "Nickel 200 & Nickel 201 Hot Rolled & Cold Rolled Sheets",
  "ASTM B162 / ASME SB162 Compliant",
  "99% Minimum Nickel Purity",
  "Excellent Resistance to Caustic Soda & Alkalis",
  "Nickel 201 (Low Carbon) for Elevated Temperature Service",
  "Nickel Alloy 200/201 Sheets Manufacturer in India",
];

const rightItems = [
  "ASTM B162 / ASME SB162",
  "Standard Sizes: 1000x2000, 1250x2500, 1500x3000, 2000x4000",
  "Thickness Range: 0.5 mm to 100 mm",
  "No.1, 2B, BA, No.4, HL, Mirror Finishes",
  "Mill Edge & Slit Edge Supply",
  "Custom Cut-to-Length & Precision Shearing",
  "Nickel 200/201 Sheets Supplier in Mumbai",
];

const searchTerms = [
  "Nickel 200 Sheet Price Per Kg",
  "Nickel 201 Sheet Weight Chart",
  "Nickel 200 Sheet Supplier In India",
  "UNS N02200 Sheet Chemical Composition",
  "Nickel 201 Sheet Price In Mumbai",
  "Nickel 200 Sheet Dimensions",
  "Nickel 200 Sheet Specifications Pdf",
  "Nickel 200 Caustic Soda Resistance",
  "Nickel 201 Sheet Price List",
  "Nickel 200 Sheet Weight Calculator",
  "Nickel 200 Sheet Mechanical Properties",
  "Nickel 200 Sheet Stockist",
  "Nickel 201 Sheet Heat Treatment",
  "Nickel 200 Sheet Price Per Kg In India",
  "Nickel 200 2.4066 Sheet",
  "Nickel 201 2.4068 Sheet",
  "Nickel Alloy 200/201 Sheet Manufacturers In Mumbai",
  "Buy Nickel 200/201 Sheets In India",
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

const NickelSheetsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Nickel Alloy 200/201 Sheets Supplier – UNS N02200 / N02201 Pure Nickel Sheets</title>
        <meta
          name="description"
          content="Leading supplier of Nickel 200 (UNS N02200) and Nickel 201 (UNS N02201) sheets. 99% minimum nickel purity, excellent caustic alkali resistance. Hot rolled, cold rolled, coils, strips, circles available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="NICKEL ALLOY 200 / 201 SHEETS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>NICKEL ALLOY 200 / 201 SHEETS SUPPLIER – UNS N02200 / N02201 PURE NICKEL SHEETS</h1>
            </div>
            <div className="content-image">
              <img src={nickelAlloy} alt="Nickel Alloy 200/201 Sheets" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>NICKEL 200 & 201 SHEETS: PURE NICKEL FOR EXCEPTIONAL RESISTANCE TO ALKALIS</h2>
              <p>
                <strong>Nickel 200</strong> (UNS N02200) and <strong>Nickel 201</strong> (UNS N02201) are commercially pure wrought nickel alloys (99% minimum nickel) known for their exceptional resistance to caustic soda, alkaline media, and a wide range of corrosive environments. Nickel 200 is the standard grade with excellent mechanical properties and good thermal and electrical conductivity. Nickel 201 is the low-carbon version, specifically designed for service temperatures above 315°C (600°F) where carbon precipitation can cause embrittlement. Both grades offer outstanding resistance to chloride stress corrosion cracking and perform exceptionally well in chemical processing, food handling, and electronic components.
              </p>
              <hr />
              <h3>KEY FEATURES OF NICKEL 200/201 SHEETS</h3>
              <p><strong>Exceptional Alkali Resistance</strong> – Outstanding performance in caustic soda, caustic potash, and other alkaline solutions.</p>
              <p><strong>Excellent Corrosion Resistance</strong> – Resists corrosion in a wide range of environments including seawater, acids, and alkalis.</p>
              <p><strong>Good Fabricability & Weldability</strong> – Both grades can be readily welded, formed, and machined using standard techniques.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>
                Our Nickel 200 and 201 sheets conform to international standards including <strong>ASTM B162 / ASME SB162</strong> (standard specification for nickel plate, sheet, and strip). We supply sheets in various finishes (No.1, 2B, BA, No.4, HL, Mirror) and can custom‑cut to your exact dimensions.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Nickel 200 / 201 Sheets</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B162 / ASME SB162</p>
              </div>
              <div className="spec-card">
                <h4>Thickness Range</h4>
                <p>0.5 mm – 100 mm</p>
              </div>
              <div className="spec-card">
                <h4>Width</h4>
                <p>1000 mm – 2500 mm</p>
              </div>
              <div className="spec-card">
                <h4>Length</h4>
                <p>2000 mm – 6000 mm (Custom lengths available)</p>
              </div>
              <div className="spec-card">
                <h4>Forms</h4>
                <p>Sheets, Coils, Strips, Circles, Rings</p>
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
                <h2>READY STOCK AVAILABILITY – NICKEL 200/201 SHEETS</h2>
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
                <h2>EQUIVALENT GRADES: NICKEL 200 & 201</h2>
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
                <h2>CHEMICAL COMPOSITION OF NICKEL 200/201 SHEETS</h2>
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
                <h2>MECHANICAL PROPERTIES OF NICKEL 200/201 SHEETS</h2>
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
                  THICKNESS RANGE AVAILABILITY: NICKEL 200/201 SHEETS
                  <span>(ASTM B162 / ASME SB162)</span>
                </h2>
                <p>Available in Cold Rolled & Hot Rolled conditions</p>
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
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightThickness[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: NICKEL 200/201 SHEETS</h2>
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
                <h2>NICKEL 200/201 SHEET SUPPLY RANGE (UNIFIED)</h2>
                <p>Applicable for: Sheets, Coils, Strips, Circles, and Rings</p>
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
                <h2>UNIFIED NICKEL 200/201 SHEET PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING NICKEL 200/201 SHEETS</h2>
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
                <h2>SEARCHES RELATED TO NICKEL 200/201 SHEETS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING NICKEL 200/201 SHEETS</h2>
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
                  <h2>SEARCHES RELATED TO NICKEL 200/201 SHEETS</h2>
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
            <p>Immediate pricing for Nickel 200/201 sheets. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NickelSheetsDetails;