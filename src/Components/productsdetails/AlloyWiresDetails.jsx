import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Alloy 28 Wires product images
import alloy28RoundWire from "../../products-image/ss-welded-wires.webp";
import alloy28SquareWire from "../../products-image/ss-filler-wires.webp";
import alloy28FlatWire from "../../products-image/ss-bobbin-wires.webp";
import alloy28CoilWire from "../../products-image/ss-bright-wires.webp";
import alloy28CustomWire from "../../products-image/ss-cold-heading-wires.webp";
import alloy28WeldingWire from "../../products-image/ss-rope-wires.webp";

import alloy28 from "../../products-image/ss-alloy-28-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "ALLOY 28 ROUND WIRES",
    image: alloy28RoundWire,
    items: [
      "Alloy 28 Round Wires (ASTM B166 / B446)",
      "UNS N08028 / 1.4563",
      "Cold Drawn & Annealed",
      "Excellent Resistance to Sulfuric & Phosphoric Acids",
    ],
  },
  {
    title: "ALLOY 28 SQUARE & FLAT WIRES",
    image: alloy28SquareWire,
    items: [
      "Alloy 28 Square Wires",
      "Alloy 28 Flat Wires",
      "Custom Cross-Sections",
      "For Springs & Electrical Components",
    ],
  },
  {
    title: "ALLOY 28 WELDING WIRES",
    image: alloy28WeldingWire,
    items: [
      "Alloy 28 Welding Wires (AWS A5.14)",
      "ER NiCrMo-14",
      "Spooled & Straight Lengths",
      "For TIG & MIG Welding",
    ],
  },
  {
    title: "ALLOY 28 COIL WIRES",
    image: alloy28CoilWire,
    items: [
      "Alloy 28 Coil Wires",
      "Continuous Lengths",
      "Precision Wound on Spools",
      "For Industrial & Commercial Applications",
    ],
  },
  {
    title: "ALLOY 28 CUSTOM WIRES",
    image: alloy28CustomWire,
    items: [
      "Custom Cut-to-Length Wires",
      "Precision Cold Drawn",
      "Diameter: 0.1 mm to 50 mm",
      "Any Size, Any Finish, Fast Delivery",
    ],
  },
];

const gradesData = [
  {
    grade: "Alloy 28",
    uns: "N08028",
    werkstoff: "1.4563",
    standard: "ASTM B166 / B446",
  },
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
  },
];

const mechanicalData = [
  {
    grade: "Alloy 28",
    tensile: "550 MPa (min)",
    yield: "220 MPa (min)",
    elongation: "40%",
    density: "8.0 g/cm³",
  },
];

// Diameter ranges for wires (typically up to 10 mm, but can go larger)
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for alloy 28 wire (density 8.0 g/cm³)
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000063" },
  { dia: "0.2 mm", weight: "0.000251" },
  { dia: "0.3 mm", weight: "0.000565" },
  { dia: "0.5 mm", weight: "0.001571" },
  { dia: "0.8 mm", weight: "0.004021" },
  { dia: "1.0 mm", weight: "0.006283" },
  { dia: "1.2 mm", weight: "0.009048" },
  { dia: "1.6 mm", weight: "0.016085" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.02513" },
  { dia: "2.5 mm", weight: "0.03927" },
  { dia: "3.0 mm", weight: "0.05655" },
  { dia: "4.0 mm", weight: "0.10053" },
  { dia: "5.0 mm", weight: "0.15708" },
  { dia: "6.0 mm", weight: "0.22619" },
  { dia: "8.0 mm", weight: "0.40212" },
  { dia: "10.0 mm", weight: "0.62832" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000063" },
  { dia: "0.2 mm", weight: "0.000251" },
  { dia: "0.3 mm", weight: "0.000565" },
  { dia: "0.5 mm", weight: "0.001571" },
  { dia: "0.8 mm", weight: "0.004021" },
  { dia: "1.0 mm", weight: "0.006283" },
  { dia: "1.2 mm", weight: "0.009048" },
  { dia: "1.6 mm", weight: "0.016085" },
  { dia: "2.0 mm", weight: "0.02513" },
  { dia: "2.5 mm", weight: "0.03927" },
  { dia: "3.0 mm", weight: "0.05655" },
  { dia: "4.0 mm", weight: "0.10053" },
  { dia: "5.0 mm", weight: "0.15708" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.22619" },
  { dia: "8.0 mm", weight: "0.40212" },
  { dia: "10.0 mm", weight: "0.62832" },
  { dia: "12.0 mm", weight: "0.90478" },
  { dia: "16.0 mm", weight: "1.6085" },
  { dia: "20.0 mm", weight: "2.5133" },
  { dia: "25.0 mm", weight: "3.9270" },
  { dia: "30.0 mm", weight: "5.6549" },
  { dia: "40.0 mm", weight: "10.053" },
  { dia: "50.0 mm", weight: "15.708" },
  { dia: "—", weight: "—" },
  { dia: "—", weight: "—" },
  { dia: "—", weight: "—" },
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
  "Alloy 28 Round Wires (ASTM B166 / B446)",
  "Alloy 28 Square & Flat Wires",
  "Alloy 28 Welding Wires (AWS A5.14)",
  "High Ni (29-34%) & Cr (26-28%) for Acid Resistance",
  "Molybdenum & Copper Additions for Pitting Resistance",
  "Excellent Resistance to Sulfuric & Phosphoric Acids",
  "Alloy 28 Wires Manufacturer in India",
];

const rightItems = [
  "ASTM B166 / B446 / ASME SB166 / SB446",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved",
  "Welding Wires (TIG/MIG) – AWS A5.14",
  "Custom Cut-to-Length & Precision Machining",
  "Alloy 28 Wires Supplier in Mumbai",
];

const searchTerms = [
  "Alloy 28 Wire Price Per Kg",
  "Alloy 28 Wire Weight Chart",
  "Alloy 28 Wire Supplier In India",
  "UNS N08028 Wire Chemical Composition",
  "Alloy 28 Wire Price In Mumbai",
  "Alloy 28 Wire Dimensions",
  "Alloy 28 Wire Specifications Pdf",
  "Alloy 28 Sulfuric Acid Resistance",
  "Alloy 28 Wire Price List",
  "Alloy 28 Wire Weight Calculator",
  "Alloy 28 Wire Mechanical Properties",
  "Alloy 28 Wire Stockist",
  "Alloy 28 Wire Heat Treatment",
  "Alloy 28 Wire Price Per Kg In India",
  "Alloy 28 1.4563 Wire",
  "Alloy 28 Wire Manufacturers In Mumbai",
  "Buy Alloy 28 Wires In India",
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

const AlloyWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Alloy 28 Wires Supplier – UNS N08028 Nickel-Iron-Chromium Alloy Wires</title>
        <meta
          name="description"
          content="Supplier of Alloy 28 wires (UNS N08028, 1.4563) with exceptional resistance to sulfuric acid, phosphoric acid, and chloride SCC. Round, square, flat, welding wires available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="ALLOY 28 WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>ALLOY 28 WIRES SUPPLIER – UNS N08028 NICKEL-IRON-CHROMIUM ALLOY WIRES</h1>
            </div>
            <div className="content-image">
              <img src={alloy28} alt="Alloy 28 Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>ALLOY 28 WIRES: SUPERIOR RESISTANCE TO SULFURIC ACID AND CHLORIDE STRESS CORROSION CRACKING</h2>
              <p>
                Alloy 28 (UNS N08028) is a nickel‑iron‑chromium alloy with additions of molybdenum and copper. This unique composition provides exceptional resistance to concentrated sulfuric acid, phosphoric acid, and chloride‑induced stress corrosion cracking (SCC). With a high chromium (26‑28%) and nickel (29‑34%) content, combined with molybdenum (3‑4%) and copper (0.6‑1.4%), Alloy 28 offers outstanding performance in the most aggressive chemical processing environments, including fertilizer production, pickling plants, and oil & gas applications. The low carbon content (0.03% max) ensures excellent weldability and resistance to sensitization.
              </p>
              <hr />
              <h3>KEY FEATURES OF ALLOY 28 WIRES</h3>
              <p><strong>Superior Acid Resistance</strong> – Excellent performance in sulfuric and phosphoric acids at various concentrations and temperatures.</p>
              <p><strong>Excellent SCC Resistance</strong> – High nickel content provides outstanding resistance to chloride‑induced stress corrosion cracking.</p>
              <p><strong>Good Weldability</strong> – Low carbon content reduces the risk of sensitization during welding, maintaining corrosion resistance in the heat‑affected zone.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>
                Our Alloy 28 wires conform to international standards including <strong>ASTM B166</strong> (for round wire) and <strong>ASTM B446</strong> (for other forms), and <strong>AWS A5.14</strong> for welding wires. We supply wires in various forms (round, square, flat, coil) and can custom‑cut to your exact dimensions.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Alloy 28 Wires</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B166 / B446; ASME SB166 / SB446</p>
              </div>
              <div className="spec-card">
                <h4>Diameter Range</h4>
                <p>0.1 mm – 50 mm</p>
              </div>
              <div className="spec-card">
                <h4>Form</h4>
                <p>Round, Square, Flat, Coil, Straight Lengths</p>
              </div>
              <div className="spec-card">
                <h4>Finish</h4>
                <p>Cold Drawn, Annealed, Stress-Relieved, Polished</p>
              </div>
              <div className="spec-card">
                <h4>Condition</h4>
                <p>Annealed, Half Hard, Full Hard</p>
              </div>
              <div className="spec-card">
                <h4>Packaging</h4>
                <p>Spools, Coils, Straight Lengths</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – ALLOY 28 WIRES</h2>
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
                <h2>CHEMICAL COMPOSITION OF ALLOY 28 WIRES</h2>
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
                <h2>MECHANICAL PROPERTIES OF ALLOY 28 WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: ALLOY 28 WIRES
                  <span>(ASTM B166 / B446)</span>
                </h2>
                <p>Available in Round, Square, Flat, and Custom Profiles</p>
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
                    {leftDia.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightDia[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: ALLOY 28 WIRES</h2>
              </div>
              <div className="table-responsive">
                <table className="coil-weight-table">
                  <thead>
                    <tr>
                      <th>Diameter (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                      <th>Diameter (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftWireData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.dia}</td>
                        <td>{item.weight}</td>
                        <td>{rightWireData[index].dia}</td>
                        <td>{rightWireData[index].weight}</td>
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
                <h2>ALLOY 28 WIRE SUPPLY RANGE (UNIFIED)</h2>
                <p>Applicable for: Round, Square, Flat wires and custom profiles</p>
              </div>
              <div className="table-responsive">
                <table className="finish-weight-table">
                  <thead>
                    <tr>
                      <th>Diameter (mm)</th>
                      <th>Weight (kg/m)</th>
                      <th>Diameter (mm)</th>
                      <th>Weight (kg/m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftWireDataNew.map((item, index) => (
                      <tr key={index}>
                        <td>{item.dia}</td>
                        <td>{item.weight}</td>
                        <td>{rightWireDataNew[index].dia}</td>
                        <td>{rightWireDataNew[index].weight}</td>
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
                <h2>UNIFIED ALLOY 28 WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING ALLOY 28 WIRES</h2>
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
                <h2>SEARCHES RELATED TO ALLOY 28 WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING ALLOY 28 WIRES</h2>
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
                  <h2>SEARCHES RELATED TO ALLOY 28 WIRES</h2>
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
            <p>Immediate pricing for Alloy 28 wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AlloyWiresDetails;