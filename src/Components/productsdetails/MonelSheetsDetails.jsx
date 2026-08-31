import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Monel 400 Sheets product images
import monelSheetsHR from "../../products-image/ss-hr-sheets.webp";
import monelSheetsCR from "../../products-image/ss-cr-sheets.webp";
import monelSheetsPolished from "../../products-image/ss-perforated-sheets.webp";

import monel from "../../products-image/ss-monel-400-sheets.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "MONEL 400 HOT ROLLED SHEETS",
    image: monelSheetsHR,
    items: [
      "Monel 400 Hot Rolled Sheets (ASTM B127)",
      "UNS N04400 / 2.4360",
      "No.1 Finish – Industrial Fabrication",
      "Excellent Formability & Strength",
    ],
  },
  {
    title: "MONEL 400 COLD ROLLED SHEETS",
    image: monelSheetsCR,
    items: [
      "Monel 400 Cold Rolled Sheets (ASTM B127)",
      "Precision Thickness Tolerances",
      "2B, BA, No.4, Mirror Finishes",
      "Smooth Surface for Critical Applications",
    ],
  },
  {
    title: "MONEL 400 POLISHED SHEETS",
    image: monelSheetsPolished,
    items: [
      "Monel 400 Polished Sheets",
      "No.4, HL, Mirror, and Custom Finishes",
      "Architectural & Decorative Applications",
      "Excellent Surface Finish",
    ],
  },
  
];

const gradesData = [
  {
    grade: "Monel 400",
    uns: "N04400",
    werkstoff: "2.4360",
    standard: "ASTM B127 / ASME SB127",
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
  }
];

const mechanicalData = [
  {
    grade: "Monel 400",
    tensile: "550 MPa (min)",
    yield: "240 MPa (min)",
    elongation: "40%",
    density: "8.83 g/cm³",
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

// Approx weights for Monel 400 sheets (density 8.83 g/cm³)
const leftData = [
  { size: "2000 × 1000 × 2.0", weight: "35.3" },
  { size: "2500 × 1250 × 3.0", weight: "82.8" },
  { size: "3000 × 1500 × 4.0", weight: "158.9" },
  { size: "2000 × 1000 × 5.0", weight: "88.3" },
  { size: "2500 × 1250 × 6.0", weight: "165.6" },
  { size: "3000 × 1500 × 8.0", weight: "317.9" },
];
const rightData = [
  { size: "2000 × 1000 × 10.0", weight: "176.6" },
  { size: "2500 × 1250 × 12.0", weight: "331.1" },
  { size: "3000 × 1500 × 16.0", weight: "635.8" },
  { size: "2000 × 1000 × 20.0", weight: "353.2" },
  { size: "2500 × 1250 × 25.0", weight: "689.8" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "2000 × 1000 × 1.0", weight: "17.7" },
  { size: "2500 × 1250 × 1.5", weight: "41.4" },
  { size: "3000 × 1500 × 2.0", weight: "79.5" },
  { size: "2000 × 1000 × 3.0", weight: "53.0" },
  { size: "2500 × 1250 × 4.0", weight: "110.4" },
  { size: "3000 × 1500 × 5.0", weight: "198.7" },
  { size: "2000 × 1000 × 6.0", weight: "106.0" },
  { size: "2500 × 1250 × 8.0", weight: "220.8" },
  { size: "3000 × 1500 × 10.0", weight: "397.4" },
  { size: "4000 × 2000 × 12.0", weight: "847.6" },
  { size: "2000 × 1000 × 15.0", weight: "264.9" },
  { size: "2500 × 1250 × 20.0", weight: "551.9" },
  { size: "3000 × 1500 × 25.0", weight: "993.4" },
];
const rightDataNew = [
  { size: "4000 × 2000 × 30.0", weight: "2119.0" },
  { size: "2500 × 1250 × 40.0", weight: "1103.8" },
  { size: "3000 × 1500 × 50.0", weight: "1986.8" },
  { size: "4000 × 2000 × 60.0", weight: "4238.0" },
  { size: "2500 × 1250 × 80.0", weight: "2207.5" },
  { size: "3000 × 1500 × 100.0", weight: "3973.5" },
  { size: "4000 × 2000 × 120.0", weight: "8476.0" },
  { size: "4000 × 2000 × 150.0", weight: "10595.0" },
  { size: "2500 × 1250 × 200.0", weight: "5518.8" },
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
  { thickness: "0.50", weightPerM2: "4.42", size2000: "8.84", size2500: "13.81", size3000: "19.89" },
  { thickness: "1.00", weightPerM2: "8.83", size2000: "17.66", size2500: "27.59", size3000: "39.74" },
  { thickness: "1.50", weightPerM2: "13.25", size2000: "26.50", size2500: "41.39", size3000: "59.61" },
  { thickness: "2.00", weightPerM2: "17.66", size2000: "35.32", size2500: "55.19", size3000: "79.47" },
  { thickness: "3.00", weightPerM2: "26.49", size2000: "52.98", size2500: "82.78", size3000: "119.21" },
  { thickness: "4.00", weightPerM2: "35.32", size2000: "70.64", size2500: "110.38", size3000: "158.94" },
  { thickness: "5.00", weightPerM2: "44.15", size2000: "88.30", size2500: "137.97", size3000: "198.68" },
  { thickness: "6.00", weightPerM2: "52.98", size2000: "105.96", size2500: "165.56", size3000: "238.42" },
  { thickness: "8.00", weightPerM2: "70.64", size2000: "141.28", size2500: "220.75", size3000: "317.89" },
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
  "Monel 400 Hot Rolled & Cold Rolled Sheets",
  "ASTM B127 / ASME SB127 Compliant",
  "High Ni (63-70%) & Cu (28-34%) for Marine Resistance",
  "Excellent Resistance to Seawater & Hydrofluoric Acid",
  "Good Weldability & Formability",
  "Monel 400 Sheets Manufacturer in India",
];

const rightItems = [
  "ASTM B127 / ASME SB127",
  "Standard Sizes: 1000x2000, 1250x2500, 1500x3000, 2000x4000",
  "Thickness Range: 0.4 mm to 100 mm",
  "No.1, 2B, BA, No.4, HL, Mirror Finishes",
  "Mill Edge & Slit Edge Supply",
  "Custom Cut-to-Length & Precision Shearing",
  "Monel 400 Sheets Supplier in Mumbai",
];

const searchTerms = [
  "Monel 400 Sheet Price Per Kg",
  "Monel 400 Sheet Weight Chart",
  "Monel 400 Sheet Supplier In India",
  "UNS N04400 Chemical Composition",
  "Monel 400 Sheet Price In Mumbai",
  "Monel 400 Sheet Dimensions",
  "ASTM B127 Monel 400 Sheet Specifications",
  "Monel 400 Sheet Price List",
  "Monel 400 Sheet Weight Calculator",
  "Monel 400 Mechanical Properties",
  "Monel 400 Sheet Stockist",
  "Monel 400 Sheet Equivalent Grades",
  "Monel 400 Sheet Price Per Kg In India",
  "Monel 400 Sheet Exporter",
  "Monel 400 Coil Supplier",
  "Monel 400 Sheets Manufacturers In Mumbai",
  "Buy Monel 400 Sheets In India",
];

// Global data (countries, cities, products, materials) – kept unchanged from previous examples
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

const MonelSheetsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Monel 400 Sheets Supplier – UNS N04400 Nickel-Copper Alloy Sheets</title>
        <meta
          name="description"
          content="Supplier of Monel 400 sheets (UNS N04400, 2.4360) with exceptional resistance to seawater, marine environments, and hydrofluoric acid. Hot rolled, cold rolled, polished sheets, coils & strips available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="MONEL 400 SHEETS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>MONEL 400 SHEETS SUPPLIER – UNS N04400 NICKEL-COPPER ALLOY SHEETS</h1>
            </div>
            <div className="content-image">
              <img src={monel} alt="Monel 400 Sheets" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>MONEL 400 SHEETS: EXCEPTIONAL PERFORMANCE IN MARINE & CHEMICAL ENVIRONMENTS</h2>
              <p>
                Monel 400 (UNS N04400) is a nickel‑copper alloy (approximately 67% nickel and 23% copper) known for its outstanding resistance to seawater, marine atmospheres, and a wide range of corrosive environments. With high nickel content combined with copper, Monel 400 offers excellent resistance to chloride‑induced stress corrosion cracking (SCC) and performs exceptionally well in hydrofluoric acid, sulfuric acid, and alkali solutions. This alloy is widely used in marine engineering, chemical processing, and oil & gas applications where durability and corrosion resistance are critical.
              </p>
              <hr />
              <h3>KEY FEATURES OF MONEL 400 SHEETS</h3>
              <p><strong>Superior Marine Resistance</strong> – Exceptional performance in seawater, brackish water, and marine atmospheres with minimal corrosion.</p>
              <p><strong>Excellent SCC Resistance</strong> – High nickel content provides outstanding resistance to chloride‑induced stress corrosion cracking.</p>
              <p><strong>Good Weldability & Fabricability</strong> – Monel 400 can be readily welded, brazed, and formed using standard techniques, maintaining corrosion resistance in the heat‑affected zone.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Monel 400 sheets conform to international standards including <strong>ASTM B127 / ASME SB127</strong> (standard specification for nickel‑copper alloy plate, sheet, and strip). We supply sheets in various finishes (No.1, 2B, BA, No.4, HL, Mirror) and can custom‑cut to your exact dimensions.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Monel 400 Sheets</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B127 / ASME SB127</p>
              </div>
              <div className="spec-card">
                <h4>Thickness Range</h4>
                <p>0.4 mm – 100 mm</p>
              </div>
              <div className="spec-card">
                <h4>Width</h4>
                <p>1000 mm – 3000 mm</p>
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
                <p>No.1, 2B, BA, No.4, HL, Mirror, Polished</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – MONEL 400 SHEETS</h2>
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
                <h2>EQUIVALENT GRADES: MONEL 400</h2>
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
                <h2>CHEMICAL COMPOSITION OF MONEL 400 SHEETS</h2>
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
                <h2>MECHANICAL PROPERTIES OF MONEL 400 SHEETS</h2>
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
                  THICKNESS RANGE AVAILABILITY: MONEL 400 SHEETS
                  <span>(ASTM B127 / ASME SB127)</span>
                </h2>
                <p>Available in Hot Rolled & Cold Rolled conditions</p>
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
                <h2>UNIFIED WEIGHT CHART: MONEL 400 SHEETS</h2>
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
                <h2>MONEL 400 SHEET SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED MONEL 400 SHEET PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING MONEL 400 SHEETS</h2>
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
                <h2>SEARCHES RELATED TO MONEL 400 SHEETS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING MONEL 400 SHEETS</h2>
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
                  <h2>SEARCHES RELATED TO MONEL 400 SHEETS</h2>
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
            <p>Immediate pricing for Monel 400 sheets. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MonelSheetsDetails;