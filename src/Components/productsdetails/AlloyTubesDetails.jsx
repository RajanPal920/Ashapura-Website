import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Alloy 28 Tubes product images
import alloy28SeamlessTubes from "../../products-image/ss-seamless-tubes.webp";
import alloy28WeldedTubes from "../../products-image/ss-welded-tubes.webp";
import alloy28ErwTubes from "../../products-image/ss-erw-tubes.webp";
import alloy28RoundTubes from "../../products-image/ss-heatexchanger-tubes.webp";
import alloy28SquareTubes from "../../products-image/ss-seamless-2-tubes.webp";
import alloy28HollowTubes from "../../products-image/ss-hollow-tubes.webp";

import alloy28 from "../../products-image/ss-alloy-28-tubes.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "ALLOY 28 SEAMLESS TUBES",
    image: alloy28SeamlessTubes,
    items: [
      "Alloy 28 Seamless Tubes (ASTM B668)",
      "UNS N08028 / 1.4563",
      "Cold Drawn & Annealed",
      "Excellent Resistance to Sulfuric & Phosphoric Acids",
    ],
  },
  {
    title: "ALLOY 28 WELDED TUBES",
    image: alloy28WeldedTubes,
    items: [
      "Alloy 28 Welded Tubes (ASTM B668)",
      "ERW / EFW Alloy 28 Tubes",
      "Large Diameter Welded Tubes",
      "Precision Welded for Chemical Processing",
    ],
  },
  {
    title: "ALLOY 28 ERW TUBES",
    image: alloy28ErwTubes,
    items: [
      "Alloy 28 ERW Tubes",
      "Electric Resistance Welded",
      "Close Tolerances & Smooth Surface",
      "For Heat Exchangers & Condensers",
    ],
  },
  {
    title: "ALLOY 28 ROUND TUBES",
    image: alloy28RoundTubes,
    items: [
      "Alloy 28 Round Tubes",
      "Heat Exchanger & Condenser Tubes",
      "Precision OD & Wall Thickness",
      "Straight Lengths & U-Bends Available",
    ],
  },
  {
    title: "ALLOY 28 SQUARE & HOLLOW TUBES",
    image: alloy28SquareTubes,
    items: [
      "Alloy 28 Square Tubes & Hollow Sections",
      "Custom Sizes for Structural & Process Equipment",
      "Excellent Corrosion Resistance",
      "Marine & Offshore Applications",
    ],
  },
  {
    title: "ALLOY 28 CUSTOM TUBES",
    image: alloy28HollowTubes,
    items: [
      "Custom Cut-to-Length Tubes",
      "Peeled, Turned, and Polished",
      "OD Range: 6 mm to 500 mm",
      "Any Length, Any Finish, Fast Delivery",
    ],
  },
];

const gradesData = [
  {
    grade: "Alloy 28",
    uns: "N08028",
    werkstoff: "1.4563",
    standard: "ASTM B668 / ASME SB668",
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

// Tube dimensions – OD and Wall thickness ranges
const leftOD = [
  "6 mm", "8 mm", "10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm",
];
const rightOD = [
  "25 mm", "30 mm", "35 mm", "40 mm", "50 mm", "63 mm", "80 mm", "100 mm",
];

// Approx weight per meter (kg/m) for alloy tubes (density ~8.0) – wall 1mm
const leftTubeData = [
  { size: "6 mm OD x 1 mm WT", weight: "0.126" },
  { size: "8 mm OD x 1 mm WT", weight: "0.176" },
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
  { size: "35 mm OD x 1 mm WT", weight: "0.854" },
  { size: "40 mm OD x 1 mm WT", weight: "0.981" },
  { size: "50 mm OD x 1 mm WT", weight: "1.233" },
  { size: "63 mm OD x 1 mm WT", weight: "1.559" },
  { size: "80 mm OD x 1 mm WT", weight: "1.986" },
  { size: "100 mm OD x 1 mm WT", weight: "2.487" },
];

const leftTubeDataNew = [
  { size: "6 mm OD x 1 mm WT", weight: "0.126" },
  { size: "8 mm OD x 1 mm WT", weight: "0.176" },
  { size: "10 mm OD x 1 mm WT", weight: "0.226" },
  { size: "12 mm OD x 1 mm WT", weight: "0.276" },
  { size: "14 mm OD x 1 mm WT", weight: "0.326" },
  { size: "16 mm OD x 1 mm WT", weight: "0.376" },
  { size: "18 mm OD x 1 mm WT", weight: "0.426" },
  { size: "20 mm OD x 1 mm WT", weight: "0.476" },
  { size: "25 mm OD x 1 mm WT", weight: "0.602" },
  { size: "30 mm OD x 1 mm WT", weight: "0.728" },
  { size: "35 mm OD x 1 mm WT", weight: "0.854" },
  { size: "40 mm OD x 1 mm WT", weight: "0.981" },
  { size: "50 mm OD x 1 mm WT", weight: "1.233" },
];
const rightTubeDataNew = [
  { size: "63 mm OD x 1 mm WT", weight: "1.559" },
  { size: "80 mm OD x 1 mm WT", weight: "1.986" },
  { size: "100 mm OD x 1 mm WT", weight: "2.487" },
  { size: "125 mm OD x 1 mm WT", weight: "3.115" },
  { size: "160 mm OD x 1 mm WT", weight: "3.996" },
  { size: "200 mm OD x 1 mm WT", weight: "5.001" },
  { size: "250 mm OD x 1 mm WT", weight: "6.261" },
  { size: "300 mm OD x 1 mm WT", weight: "7.521" },
  { size: "350 mm OD x 1 mm WT", weight: "8.781" },
  { size: "400 mm OD x 1 mm WT", weight: "10.041" },
  { size: "450 mm OD x 1 mm WT", weight: "11.301" },
  { size: "500 mm OD x 1 mm WT", weight: "12.561" },
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
  "Alloy 28 Seamless & Welded Tubes (ASTM B668)",
  "High Ni (29-34%) & Cr (26-28%) for Acid Resistance",
  "Molybdenum & Copper Additions for Pitting Resistance",
  "Excellent Resistance to Sulfuric & Phosphoric Acids",
  "Superior Resistance to Chloride Stress Corrosion Cracking",
  "Alloy 28 Tubes Manufacturer in India",
];

const rightItems = [
  "ASTM B668 / ASME SB668 Alloy 28 Tubes",
  "OD Range: 6 mm to 500 mm",
  "Wall Thickness: 0.5 mm to 25 mm",
  "Seamless, Welded, ERW, EFW, Cold Drawn",
  "Straight Lengths up to 12 m, U-Bends Available",
  "Heat Exchanger Tubes & Precision Tubing",
  "Alloy 28 Tubes Supplier in Mumbai",
];

const searchTerms = [
  "Alloy 28 Tube Price Per Kg",
  "Alloy 28 Tube Weight Chart",
  "Alloy 28 Tube Supplier In India",
  "UNS N08028 Tube Chemical Composition",
  "Alloy 28 Tube Price In Mumbai",
  "Alloy 28 Tube Dimensions",
  "Alloy 28 Tube Specifications Pdf",
  "Alloy 28 Sulfuric Acid Resistance",
  "Alloy 28 Tube Price List",
  "Alloy 28 Tube Weight Calculator",
  "Alloy 28 Tube Mechanical Properties",
  "Alloy 28 Tube Stockist",
  "Alloy 28 Tube Heat Treatment",
  "Alloy 28 Tube Price Per Kg In India",
  "Alloy 28 1.4563 Tube",
  "Alloy 28 Tube Manufacturers In Mumbai",
  "Buy Alloy 28 Tubes In India",
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

const AlloyTubesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Alloy 28 Tubes Supplier – UNS N08028 Nickel-Iron-Chromium Alloy Tubes</title>
        <meta
          name="description"
          content="Supplier of Alloy 28 tubes (UNS N08028, 1.4563) with exceptional resistance to sulfuric acid, phosphoric acid, and chloride SCC. Seamless, welded, ERW tubes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="ALLOY 28 TUBES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>ALLOY 28 TUBES SUPPLIER – UNS N08028 NICKEL-IRON-CHROMIUM ALLOY TUBES</h1>
            </div>
            <div className="content-image">
              <img src={alloy28} alt="Alloy 28 Tubes" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>ALLOY 28 TUBES: SUPERIOR RESISTANCE TO SULFURIC ACID AND CHLORIDE STRESS CORROSION CRACKING</h2>
              <p>
                Alloy 28 (UNS N08028) is a nickel‑iron‑chromium alloy with additions of molybdenum and copper. This unique composition provides exceptional resistance to concentrated sulfuric acid, phosphoric acid, and chloride‑induced stress corrosion cracking (SCC). With a high chromium (26‑28%) and nickel (29‑34%) content, combined with molybdenum (3‑4%) and copper (0.6‑1.4%), Alloy 28 offers outstanding performance in the most aggressive chemical processing environments, including fertilizer production, pickling plants, and oil & gas applications. The low carbon content (0.03% max) ensures excellent weldability and resistance to sensitization.
              </p>
              <hr />
              <h3>KEY FEATURES OF ALLOY 28 TUBES</h3>
              <p><strong>Superior Acid Resistance</strong> – Excellent performance in sulfuric and phosphoric acids at various concentrations and temperatures.</p>
              <p><strong>Excellent SCC Resistance</strong> – High nickel content provides outstanding resistance to chloride‑induced stress corrosion cracking.</p>
              <p><strong>Good Weldability</strong> – Low carbon content reduces the risk of sensitization during welding, maintaining corrosion resistance in the heat‑affected zone.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>
                Our Alloy 28 tubes conform to international standards including <strong>ASTM B668 / ASME SB668</strong> (standard specification for nickel‑iron‑chromium‑molybdenum‑copper alloy seamless and welded tubes). We supply tubes in seamless, welded, ERW, and cold‑drawn forms, and can custom‑cut to your exact dimensions.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Alloy 28 Tubes</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B668 / ASME SB668</p>
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
                <h2>READY STOCK AVAILABILITY – ALLOY 28 TUBES</h2>
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
                <h2>CHEMICAL COMPOSITION OF ALLOY 28 TUBES</h2>
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
                <h2>MECHANICAL PROPERTIES OF ALLOY 28 TUBES</h2>
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
                  OD RANGE AVAILABILITY: ALLOY 28 TUBES
                  <span>(ASTM B668 / ASME SB668)</span>
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
                <h2>UNIFIED WEIGHT CHART: ALLOY 28 TUBES (1 mm Wall Thickness)</h2>
              </div>
              <div className="table-responsive">
                <table className="coil-weight-table">
                  <thead>
                    <tr>
                      <th>OD (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                      <th>OD (mm)</th>
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
                <h2>ALLOY 28 TUBE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED ALLOY 28 TUBE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING ALLOY 28 TUBES</h2>
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
                <h2>SEARCHES RELATED TO ALLOY 28 TUBES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING ALLOY 28 TUBES</h2>
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
                  <h2>SEARCHES RELATED TO ALLOY 28 TUBES</h2>
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
            <p>Immediate pricing for Alloy 28 tubes. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AlloyTubesDetails;
