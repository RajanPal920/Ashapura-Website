import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import alloy28RBHR from "../../products-image/ss-hr-roundbars.webp";
import alloy28RBCR from "../../products-image/ss-cr-roundbars.webp";

import alloy28RBSpecialty from "../../products-image/ss-special-roundbars.webp";

import alloy28 from "../../products-image/ss-alloy-28-roundbars.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "ALLOY 28 HOT ROLLED ROUND BARS",
    image: alloy28RBHR,
    items: [
      "Alloy 28 Hot Rolled Round Bars",
      "ASTM B473 / ASME SB473",
      "UNS N08028 / 1.4563",
      "No.1 Finish – Industrial Fabrication",
    ],
  },
  {
    title: "ALLOY 28 COLD DRAWN ROUND BARS",
    image: alloy28RBCR,
    items: [
      "Alloy 28 Cold Drawn Round Bars",
      "ASTM B473 / ASME SB473",
      "Precision Diameter Tolerances",
      "Smooth Surface Finish",
    ],
  },
  
  {
    title: "ALLOY 28 SPECIALTY ROUND BARS",
    image: alloy28RBSpecialty,
    items: [
      "Alloy 28 Specialty Round Bars",
      "Sulfuric & Phosphoric Acid Resistant",
      "High Molybdenum & Copper Content",
      "For Chemical Processing Equipment",
    ],
  },
  
];

const gradesData = [
  {
    grade: "Alloy 28",
    uns: "N08028",
    werkstoff: "1.4563",
    standard: "ASTM B473 / ASME SB473",
  }
];

const chemicalData = [
  {
    grade: "Alloy 28",
    c: "0.03 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "26.0 – 28.0",
    ni: "29.0 – 34.0",
    mo: "3.0 – 4.0",
    other: "Cu: 0.6-1.4, Fe: Balance, P: 0.03 max, S: 0.03 max",
  }
];

const mechanicalData = [
  {
    grade: "Alloy 28",
    tensile: "550 MPa (min)",
    yield: "220 MPa (min)",
    elongation: "40%",
    density: "8.0 g/cm³",
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
  { size: "30 mm Dia × 3 m", weight: "16.9" },
  { size: "40 mm Dia × 3 m", weight: "30.0" },
];

const rightData = [
  { size: "50 mm Dia × 3 m", weight: "46.9" },
  { size: "60 mm Dia × 3 m", weight: "67.5" },
  { size: "80 mm Dia × 3 m", weight: "120.0" },
  { size: "100 mm Dia × 3 m", weight: "187.5" },
  { size: "120 mm Dia × 3 m", weight: "270.0" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "6 mm Dia × 3 m", weight: "0.67" },
  { size: "8 mm Dia × 3 m", weight: "1.20" },
  { size: "10 mm Dia × 3 m", weight: "1.88" },
  { size: "12 mm Dia × 3 m", weight: "2.70" },
  { size: "16 mm Dia × 3 m", weight: "4.80" },
  { size: "20 mm Dia × 3 m", weight: "7.50" },
  { size: "25 mm Dia × 3 m", weight: "11.70" },
  { size: "30 mm Dia × 3 m", weight: "16.90" },
  { size: "40 mm Dia × 3 m", weight: "30.00" },
  { size: "50 mm Dia × 3 m", weight: "46.90" },
  { size: "60 mm Dia × 3 m", weight: "67.50" },
  { size: "80 mm Dia × 3 m", weight: "120.00" },
  { size: "100 mm Dia × 3 m", weight: "187.50" },
];

const rightDataNew = [
  { size: "120 mm Dia × 3 m", weight: "270.00" },
  { size: "150 mm Dia × 3 m", weight: "421.90" },
  { size: "200 mm Dia × 3 m", weight: "750.00" },
  { size: "250 mm Dia × 3 m", weight: "1171.90" },
  { size: "300 mm Dia × 3 m", weight: "1687.50" },
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
    weightPerM2: "0.63",
    size2000: "1.26",
    size2500: "1.58",
    size3000: "1.89",
  },
  {
    thickness: "12 mm",
    weightPerM2: "0.90",
    size2000: "1.80",
    size2500: "2.25",
    size3000: "2.70",
  },
  {
    thickness: "16 mm",
    weightPerM2: "1.60",
    size2000: "3.20",
    size2500: "4.00",
    size3000: "4.80",
  },
  {
    thickness: "20 mm",
    weightPerM2: "2.50",
    size2000: "5.00",
    size2500: "6.25",
    size3000: "7.50",
  },
  {
    thickness: "25 mm",
    weightPerM2: "3.90",
    size2000: "7.80",
    size2500: "9.75",
    size3000: "11.70",
  },
  {
    thickness: "30 mm",
    weightPerM2: "5.63",
    size2000: "11.26",
    size2500: "14.08",
    size3000: "16.90",
  },
  {
    thickness: "40 mm",
    weightPerM2: "10.00",
    size2000: "20.00",
    size2500: "25.00",
    size3000: "30.00",
  },
  {
    thickness: "50 mm",
    weightPerM2: "15.63",
    size2000: "31.26",
    size2500: "39.08",
    size3000: "46.90",
  },
  {
    thickness: "60 mm",
    weightPerM2: "22.50",
    size2000: "45.00",
    size2500: "56.25",
    size3000: "67.50",
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
  "Hot Rolled & Cold Drawn Alloy 28 Round Bars",
  "ASTM B473 / ASME SB473 Compliant",
  "High Ni (29-34%) & Cr (26-28%) for Acid Resistance",
  "Molybdenum & Copper Additions for Pitting Resistance",
  "Excellent Resistance to Sulfuric & Phosphoric Acids",
  "Alloy 28 Round Bars Manufacturer in India",
];

const rightItems = [
  "ASTM B473 / SB473 Alloy 28 Round Bars",
  "Diameter Range: 3 mm to 400 mm",
  "Lengths: 1 m to 6 m (custom lengths available)",
  "Finishes: No.1, 2B, BA, No.4, HL, Mirror, Peeled",
  "Hex, Square, and Flat Bar Options",
  "Custom Cut-to-Length & Precision Shearing",
  "Alloy 28 Round Bars Supplier in Mumbai",
];

const searchTerms = [
  "Alloy 28 Round Bar Price Per Kg",
  "Alloy 28 Round Bar Weight Chart",
  "Alloy 28 Round Bar Supplier In India",
  "UNS N08028 Chemical Composition",
  "Alloy 28 Round Bar Price In Mumbai",
  "Alloy 28 Round Bar Dimensions",
  "Alloy 28 Round Bar Specifications Pdf",
  "Alloy 28 Sulfuric Acid Resistance",
  "Alloy 28 Round Bar Price List",
  "Alloy 28 Round Bar Weight Calculator",
  "Alloy 28 Mechanical Properties",
  "Alloy 28 Round Bar Stockist",
  "Alloy 28 Round Bar Price Per Kg In India",
  "Alloy 28 1.4563",
  "Alloy 28 Round Bars Manufacturers In Mumbai",
  "Buy Alloy 28 Round Bars In India",
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

const AlloyRoundBarsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Alloy 28 Round Bars Supplier – UNS N08028 Nickel-Iron-Chromium Alloy Bars</title>
        <meta
          name="description"
          content="Supplier of Alloy 28 round bars (UNS N08028, 1.4563) with exceptional resistance to sulfuric acid, phosphoric acid, and chloride SCC. Hot rolled, cold drawn, polished bars available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="ALLOY 28 ROUND BARS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>ALLOY 28 ROUND BARS SUPPLIER – UNS N08028 NICKEL-IRON-CHROMIUM ALLOY ROUND BARS</h1>
            </div>
            <div className="content-image">
              <img src={highPerformance} alt="Alloy 28 Round Bars" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>ALLOY 28 ROUND BARS: SUPERIOR RESISTANCE TO SULFURIC ACID AND CHLORIDE STRESS CORROSION CRACKING</h2>
              <p>Alloy 28 (UNS N08028) is a nickel‑iron‑chromium alloy with additions of molybdenum and copper. This unique composition provides exceptional resistance to concentrated sulfuric acid, phosphoric acid, and chloride‑induced stress corrosion cracking (SCC). With a high chromium (26‑28%) and nickel (29‑34%) content, combined with molybdenum (3‑4%) and copper (0.6‑1.4%), Alloy 28 offers outstanding performance in the most aggressive chemical processing environments, including fertilizer production, pickling plants, and oil & gas applications. The low carbon content (0.03% max) ensures excellent weldability and resistance to sensitization.</p>
              <hr />
              <h3>KEY FEATURES OF ALLOY 28 ROUND BARS</h3>
              <p><strong>Superior Acid Resistance</strong> – Excellent performance in sulfuric and phosphoric acids at various concentrations and temperatures.</p>
              <p><strong>Excellent SCC Resistance</strong> – High nickel content provides outstanding resistance to chloride‑induced stress corrosion cracking.</p>
              <p><strong>Good Weldability & Machinability</strong> – Low carbon content reduces the risk of sensitization during welding, maintaining corrosion resistance in the heat‑affected zone. Good machinability for precision parts.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Alloy 28 round bars conform to international standards including <strong>ASTM B473 / ASME SB473</strong> (standard specification for nickel‑iron‑chromium‑molybdenum‑copper alloy bars). We supply bars in various finishes (No.1, 2B, BA, No.4, HL, Mirror, Peeled) and can custom‑cut to your exact dimensions.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Alloy 28 Round Bars</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B473 / ASME SB473</p>
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
                <h2>READY STOCK AVAILABILITY – ALLOY 28 ROUND BARS</h2>
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
                <h2>EQUIVALENT GRADES: ALLOY 28</h2>
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
                <h2>CHEMICAL COMPOSITION OF ALLOY 28 ROUND BARS</h2>
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
                <h2>MECHANICAL PROPERTIES OF ALLOY 28 ROUND BARS</h2>
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
                  DIAMETER RANGE AVAILABILITY: ALLOY 28 ROUND BARS
                  <span>(ASTM B473 / SB473)</span>
                </h2>
                <p>Available in Hot Rolled & Cold Drawn conditions</p>
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
                <h2>UNIFIED WEIGHT CHART: ALLOY 28 ROUND BARS (APPROX. WEIGHT PER 3 M LENGTH)</h2>
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
                <h2>ALLOY 28 ROUND BAR SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED ALLOY 28 ROUND BAR PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING ALLOY 28 ROUND BARS</h2>
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
                <h2>SEARCHES RELATED TO ALLOY 28 ROUND BARS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING ALLOY 28 ROUND BARS</h2>
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
                  <h2>SEARCHES RELATED TO ALLOY 28 ROUND BARS</h2>
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

export default AlloyRoundBarsDetails;