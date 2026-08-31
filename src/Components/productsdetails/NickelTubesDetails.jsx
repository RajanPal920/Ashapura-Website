import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Nickel 200/201 Tubes product images
import nickelSeamlessTubes from "../../products-image/ss-seamless-tubes.webp";
import nickelWeldedTubes from "../../products-image/ss-welded-tubes.webp";
import nickelErwTubes from "../../products-image/ss-erw-tubes.webp";
import nickelRoundTubes from "../../products-image/ss-heatexchanger-tubes.webp";
import nickelSquareTubes from "../../products-image/ss-seamless-2-tubes.webp";
import nickelHollowTubes from "../../products-image/ss-hollow-tubes.webp";

import nickelAlloy from "../../products-image/ss-nickel-alloy-tubes.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "NICKEL 200 SEAMLESS TUBES",
    image: nickelSeamlessTubes,
    items: [
      "Nickel 200 Seamless Tubes (ASTM B161)",
      "UNS N02200 / 2.4066",
      "Cold Drawn & Annealed",
      "Excellent Resistance to Caustic Soda & Alkalis",
    ],
  },
  {
    title: "NICKEL 201 SEAMLESS TUBES",
    image: nickelSeamlessTubes,
    items: [
      "Nickel 201 Seamless Tubes (ASTM B161)",
      "UNS N02201 / 2.4068",
      "Low Carbon Version for High Temperature Service (above 315°C)",
      "Superior Resistance to Embrittlement",
    ],
  },
  {
    title: "NICKEL 200/201 WELDED TUBES",
    image: nickelWeldedTubes,
    items: [
      "Nickel 200/201 Welded Tubes (ASTM B725)",
      "ERW / EFW Nickel Tubes",
      "Large Diameter Welded Tubes",
      "Precision Welded for Chemical Processing",
    ],
  },
  {
    title: "NICKEL 200/201 ERW TUBES",
    image: nickelErwTubes,
    items: [
      "Nickel 200/201 ERW Tubes",
      "Electric Resistance Welded",
      "Close Tolerances & Smooth Surface",
      "For Heat Exchangers & Condensers",
    ],
  },
  {
    title: "NICKEL 200/201 ROUND TUBES",
    image: nickelRoundTubes,
    items: [
      "Nickel 200/201 Round Tubes",
      "Heat Exchanger & Condenser Tubes",
      "Precision OD & Wall Thickness",
      "Straight Lengths & U-Bends Available",
    ],
  },
  {
    title: "NICKEL 200/201 SQUARE & HOLLOW TUBES",
    image: nickelSquareTubes,
    items: [
      "Nickel 200/201 Square Tubes & Hollow Sections",
      "Custom Sizes for Structural & Process Equipment",
      "Excellent Corrosion Resistance",
      "Marine & Offshore Applications",
    ],
  },
];

const gradesData = [
  {
    grade: "Nickel 200",
    uns: "N02200",
    werkstoff: "2.4066",
    standard: "ASTM B161 / B725",
  },
  {
    grade: "Nickel 201",
    uns: "N02201",
    werkstoff: "2.4068",
    standard: "ASTM B161 / B725",
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

// Tube dimensions – OD and Wall thickness ranges
const leftOD = [
  "6 mm", "8 mm", "10 mm", "12 mm", "14 mm", "16 mm", "18 mm", "20 mm",
];
const rightOD = [
  "25 mm", "30 mm", "35 mm", "40 mm", "50 mm", "63 mm", "80 mm", "100 mm",
];

// Approx weight per meter (kg/m) for nickel tubes (density 8.89) – wall 1mm
const leftTubeData = [
  { size: "6 mm OD x 1 mm WT", weight: "0.140" },
  { size: "8 mm OD x 1 mm WT", weight: "0.196" },
  { size: "10 mm OD x 1 mm WT", weight: "0.251" },
  { size: "12 mm OD x 1 mm WT", weight: "0.307" },
  { size: "14 mm OD x 1 mm WT", weight: "0.363" },
  { size: "16 mm OD x 1 mm WT", weight: "0.418" },
  { size: "18 mm OD x 1 mm WT", weight: "0.474" },
  { size: "20 mm OD x 1 mm WT", weight: "0.530" },
];
const rightTubeData = [
  { size: "25 mm OD x 1 mm WT", weight: "0.669" },
  { size: "30 mm OD x 1 mm WT", weight: "0.810" },
  { size: "35 mm OD x 1 mm WT", weight: "0.950" },
  { size: "40 mm OD x 1 mm WT", weight: "1.091" },
  { size: "50 mm OD x 1 mm WT", weight: "1.372" },
  { size: "63 mm OD x 1 mm WT", weight: "1.734" },
  { size: "80 mm OD x 1 mm WT", weight: "2.209" },
  { size: "100 mm OD x 1 mm WT", weight: "2.767" },
];

const leftTubeDataNew = [
  { size: "6 mm OD x 1 mm WT", weight: "0.140" },
  { size: "8 mm OD x 1 mm WT", weight: "0.196" },
  { size: "10 mm OD x 1 mm WT", weight: "0.251" },
  { size: "12 mm OD x 1 mm WT", weight: "0.307" },
  { size: "14 mm OD x 1 mm WT", weight: "0.363" },
  { size: "16 mm OD x 1 mm WT", weight: "0.418" },
  { size: "18 mm OD x 1 mm WT", weight: "0.474" },
  { size: "20 mm OD x 1 mm WT", weight: "0.530" },
  { size: "25 mm OD x 1 mm WT", weight: "0.669" },
  { size: "30 mm OD x 1 mm WT", weight: "0.810" },
  { size: "35 mm OD x 1 mm WT", weight: "0.950" },
  { size: "40 mm OD x 1 mm WT", weight: "1.091" },
  { size: "50 mm OD x 1 mm WT", weight: "1.372" },
];
const rightTubeDataNew = [
  { size: "63 mm OD x 1 mm WT", weight: "1.734" },
  { size: "80 mm OD x 1 mm WT", weight: "2.209" },
  { size: "100 mm OD x 1 mm WT", weight: "2.767" },
  { size: "125 mm OD x 1 mm WT", weight: "3.466" },
  { size: "160 mm OD x 1 mm WT", weight: "4.446" },
  { size: "200 mm OD x 1 mm WT", weight: "5.565" },
  { size: "250 mm OD x 1 mm WT", weight: "6.966" },
  { size: "300 mm OD x 1 mm WT", weight: "8.368" },
  { size: "350 mm OD x 1 mm WT", weight: "9.770" },
  { size: "400 mm OD x 1 mm WT", weight: "11.172" },
  { size: "450 mm OD x 1 mm WT", weight: "12.573" },
  { size: "500 mm OD x 1 mm WT", weight: "13.975" },
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
  "Nickel 200 & Nickel 201 Seamless & Welded Tubes",
  "ASTM B161 / B725 Compliant",
  "99% Minimum Nickel Purity",
  "Excellent Resistance to Caustic Soda & Alkalis",
  "Nickel 201 (Low Carbon) for Elevated Temperature Service",
  "Nickel Alloy 200/201 Tubes Manufacturer in India",
];

const rightItems = [
  "ASTM B161 / B725 / ASME SB161 / SB725",
  "OD Range: 6 mm to 500 mm",
  "Wall Thickness: 0.5 mm to 25 mm",
  "Seamless, Welded, ERW, EFW, Cold Drawn",
  "Straight Lengths up to 12 m, U-Bends Available",
  "Heat Exchanger Tubes & Precision Tubing",
  "Nickel 200/201 Tubes Supplier in Mumbai",
];

const searchTerms = [
  "Nickel 200 Tube Price Per Kg",
  "Nickel 201 Tube Weight Chart",
  "Nickel 200 Tube Supplier In India",
  "UNS N02200 Tube Chemical Composition",
  "Nickel 201 Tube Price In Mumbai",
  "Nickel 200 Tube Dimensions",
  "Nickel 200 Tube Specifications Pdf",
  "Nickel 200 Caustic Soda Resistance",
  "Nickel 201 Tube Price List",
  "Nickel 200 Tube Weight Calculator",
  "Nickel 200 Tube Mechanical Properties",
  "Nickel 200 Tube Stockist",
  "Nickel 201 Tube Heat Treatment",
  "Nickel 200 Tube Price Per Kg In India",
  "Nickel 200 2.4066 Tube",
  "Nickel 201 2.4068 Tube",
  "Nickel Alloy 200/201 Tube Manufacturers In Mumbai",
  "Buy Nickel 200/201 Tubes In India",
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

const NickelTubesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Nickel Alloy 200/201 Tubes Supplier – UNS N02200 / N02201 Pure Nickel Tubes</title>
        <meta
          name="description"
          content="Leading supplier of Nickel 200 (UNS N02200) and Nickel 201 (UNS N02201) tubes. 99% minimum nickel purity, excellent caustic alkali resistance. Seamless, welded, ERW tubes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="NICKEL ALLOY 200 / 201 TUBES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>NICKEL ALLOY 200 / 201 TUBES SUPPLIER – UNS N02200 / N02201 PURE NICKEL TUBES</h1>
            </div>
            <div className="content-image">
              <img src={nickelAlloy} alt="Nickel Alloy 200/201 Tubes" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>NICKEL 200 & 201 TUBES: PURE NICKEL FOR EXCEPTIONAL RESISTANCE TO ALKALIS</h2>
              <p>
                <strong>Nickel 200</strong> (UNS N02200) and <strong>Nickel 201</strong> (UNS N02201) are commercially pure wrought nickel alloys (99% minimum nickel) known for their exceptional resistance to caustic soda, alkaline media, and a wide range of corrosive environments. Nickel 200 is the standard grade with excellent mechanical properties and good thermal and electrical conductivity. Nickel 201 is the low-carbon version, specifically designed for service temperatures above 315°C (600°F) where carbon precipitation can cause embrittlement. Both grades offer outstanding resistance to chloride stress corrosion cracking and perform exceptionally well in chemical processing, food handling, and electronic components.
              </p>
              <hr />
              <h3>KEY FEATURES OF NICKEL 200/201 TUBES</h3>
              <p><strong>Exceptional Alkali Resistance</strong> – Outstanding performance in caustic soda, caustic potash, and other alkaline solutions.</p>
              <p><strong>Excellent Corrosion Resistance</strong> – Resists corrosion in a wide range of environments including seawater, acids, and alkalis.</p>
              <p><strong>Good Fabricability & Weldability</strong> – Both grades can be readily welded, formed, and machined using standard techniques.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>
                Our Nickel 200 and 201 tubes conform to international standards including <strong>ASTM B161</strong> (seamless) and <strong>ASTM B725</strong> (welded) / <strong>ASME SB161</strong> and <strong>SB725</strong>. We supply tubes in seamless, welded, ERW, and cold‑drawn forms, and can custom‑cut to your exact dimensions.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Nickel 200 / 201 Tubes</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B161 / B725; ASME SB161 / SB725</p>
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
                <h2>READY STOCK AVAILABILITY – NICKEL 200/201 TUBES</h2>
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
                <h2>CHEMICAL COMPOSITION OF NICKEL 200/201 TUBES</h2>
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
                <h2>MECHANICAL PROPERTIES OF NICKEL 200/201 TUBES</h2>
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
                  OD RANGE AVAILABILITY: NICKEL 200/201 TUBES
                  <span>(ASTM B161 / B725)</span>
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
                <h2>UNIFIED WEIGHT CHART: NICKEL 200/201 TUBES (1 mm Wall Thickness)</h2>
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
                <h2>NICKEL 200/201 TUBE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED NICKEL 200/201 TUBE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING NICKEL 200/201 TUBES</h2>
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
                <h2>SEARCHES RELATED TO NICKEL 200/201 TUBES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING NICKEL 200/201 TUBES</h2>
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
                  <h2>SEARCHES RELATED TO NICKEL 200/201 TUBES</h2>
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
            <p>Immediate pricing for Nickel 200/201 tubes. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NickelTubesDetails;
