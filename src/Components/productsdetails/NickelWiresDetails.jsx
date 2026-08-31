import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Nickel 200/201 Wires product images
import nickelRoundWire from "../../products-image/ss-welded-wires.webp";
import nickelSquareWire from "../../products-image/ss-filler-wires.webp";
import nickelFlatWire from "../../products-image/ss-bobbin-wires.webp";
import nickelCoilWire from "../../products-image/ss-bright-wires.webp";
import nickelCustomWire from "../../products-image/ss-cold-heading-wires.webp";
import nickelWeldingWire from "../../products-image/ss-rope-wires.webp";

import NickelAlloy from "../../products-image/ss-nickel-alloy-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "NICKEL 200 ROUND WIRES",
    image: nickelRoundWire,
    items: [
      "Nickel 200 Round Wires (ASTM B160)",
      "UNS N02200 / 2.4066",
      "Cold Drawn & Annealed",
      "Excellent Resistance to Caustic Soda & Alkalis",
    ],
  },
  {
    title: "NICKEL 201 ROUND WIRES",
    image: nickelRoundWire,
    items: [
      "Nickel 201 Round Wires (ASTM B160)",
      "UNS N02201 / 2.4068",
      "Low Carbon Version for High Temperature Service (above 315°C)",
      "Superior Resistance to Embrittlement",
    ],
  },
  {
    title: "NICKEL 200/201 SQUARE & FLAT WIRES",
    image: nickelSquareWire,
    items: [
      "Nickel 200/201 Square Wires",
      "Nickel 200/201 Flat Wires",
      "Custom Cross-Sections",
      "For Springs & Electrical Components",
    ],
  },
  {
    title: "NICKEL 200/201 WELDING WIRES",
    image: nickelWeldingWire,
    items: [
      "Nickel 200/201 Welding Wires",
      "ER Ni-1 (AWS A5.14)",
      "Spooled & Straight Lengths",
      "For TIG & MIG Welding",
    ],
  },
  {
    title: "NICKEL 200/201 COIL WIRES",
    image: nickelCoilWire,
    items: [
      "Nickel 200/201 Coil Wires",
      "Continuous Lengths",
      "Precision Wound on Spools",
      "For Industrial & Commercial Applications",
    ],
  },
  {
    title: "NICKEL 200/201 CUSTOM WIRES",
    image: nickelCustomWire,
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
    grade: "Nickel 200",
    uns: "N02200",
    werkstoff: "2.4066",
    standard: "ASTM B160 / ASME SB160",
  },
  {
    grade: "Nickel 201",
    uns: "N02201",
    werkstoff: "2.4068",
    standard: "ASTM B160 / ASME SB160",
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

// Diameter ranges for wires (typically up to 10 mm, but can go larger)
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for nickel wire (density 8.89 g/cm³)
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000070" },
  { dia: "0.2 mm", weight: "0.000279" },
  { dia: "0.3 mm", weight: "0.000628" },
  { dia: "0.5 mm", weight: "0.001746" },
  { dia: "0.8 mm", weight: "0.004469" },
  { dia: "1.0 mm", weight: "0.006983" },
  { dia: "1.2 mm", weight: "0.010056" },
  { dia: "1.6 mm", weight: "0.017878" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.02793" },
  { dia: "2.5 mm", weight: "0.04364" },
  { dia: "3.0 mm", weight: "0.06285" },
  { dia: "4.0 mm", weight: "0.11173" },
  { dia: "5.0 mm", weight: "0.17458" },
  { dia: "6.0 mm", weight: "0.25139" },
  { dia: "8.0 mm", weight: "0.44693" },
  { dia: "10.0 mm", weight: "0.69825" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000070" },
  { dia: "0.2 mm", weight: "0.000279" },
  { dia: "0.3 mm", weight: "0.000628" },
  { dia: "0.5 mm", weight: "0.001746" },
  { dia: "0.8 mm", weight: "0.004469" },
  { dia: "1.0 mm", weight: "0.006983" },
  { dia: "1.2 mm", weight: "0.010056" },
  { dia: "1.6 mm", weight: "0.017878" },
  { dia: "2.0 mm", weight: "0.02793" },
  { dia: "2.5 mm", weight: "0.04364" },
  { dia: "3.0 mm", weight: "0.06285" },
  { dia: "4.0 mm", weight: "0.11173" },
  { dia: "5.0 mm", weight: "0.17458" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.25139" },
  { dia: "8.0 mm", weight: "0.44693" },
  { dia: "10.0 mm", weight: "0.69825" },
  { dia: "12.0 mm", weight: "1.0055" },
  { dia: "16.0 mm", weight: "1.7878" },
  { dia: "20.0 mm", weight: "2.7930" },
  { dia: "25.0 mm", weight: "4.3641" },
  { dia: "30.0 mm", weight: "6.2843" },
  { dia: "40.0 mm", weight: "11.173" },
  { dia: "50.0 mm", weight: "17.458" },
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
  "Nickel 200 & Nickel 201 Round Wires",
  "ASTM B160 / ASME SB160 Compliant",
  "99% Minimum Nickel Purity",
  "Excellent Resistance to Caustic Soda & Alkalis",
  "Nickel 201 (Low Carbon) for Elevated Temperature Service",
  "Nickel Alloy 200/201 Wires Manufacturer in India",
];

const rightItems = [
  "ASTM B160 / ASME SB160",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved",
  "Welding Wires (TIG/MIG) – AWS A5.14",
  "Custom Cut-to-Length & Precision Machining",
  "Nickel 200/201 Wires Supplier in Mumbai",
];

const searchTerms = [
  "Nickel 200 Wire Price Per Kg",
  "Nickel 201 Wire Weight Chart",
  "Nickel 200 Wire Supplier In India",
  "UNS N02200 Wire Chemical Composition",
  "Nickel 201 Wire Price In Mumbai",
  "Nickel 200 Wire Dimensions",
  "Nickel 200 Wire Specifications Pdf",
  "Nickel 200 Caustic Soda Resistance",
  "Nickel 201 Wire Price List",
  "Nickel 200 Wire Weight Calculator",
  "Nickel 200 Wire Mechanical Properties",
  "Nickel 200 Wire Stockist",
  "Nickel 201 Wire Heat Treatment",
  "Nickel 200 Wire Price Per Kg In India",
  "Nickel 200 2.4066 Wire",
  "Nickel 201 2.4068 Wire",
  "Nickel Alloy 200/201 Wire Manufacturers In Mumbai",
  "Buy Nickel 200/201 Wires In India",
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

const NickelWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Nickel Alloy 200/201 Wires Supplier – UNS N02200 / N02201 Pure Nickel Wires</title>
        <meta
          name="description"
          content="Leading supplier of Nickel 200 (UNS N02200) and Nickel 201 (UNS N02201) wires. 99% minimum nickel purity, excellent caustic alkali resistance. Round, square, flat, welding wires available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="NICKEL ALLOY 200 / 201 WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>NICKEL ALLOY 200 / 201 WIRES SUPPLIER – UNS N02200 / N02201 PURE NICKEL WIRES</h1>
            </div>
            <div className="content-image">
              <img src={NickelAlloy} alt="Nickel Alloy 200/201 Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>NICKEL 200 & 201 WIRES: PURE NICKEL FOR EXCEPTIONAL RESISTANCE TO ALKALIS</h2>
              <p>
                <strong>Nickel 200</strong> (UNS N02200) and <strong>Nickel 201</strong> (UNS N02201) are commercially pure wrought nickel alloys (99% minimum nickel) known for their exceptional resistance to caustic soda, alkaline media, and a wide range of corrosive environments. Nickel 200 is the standard grade with excellent mechanical properties and good thermal and electrical conductivity. Nickel 201 is the low-carbon version, specifically designed for service temperatures above 315°C (600°F) where carbon precipitation can cause embrittlement. Both grades offer outstanding resistance to chloride stress corrosion cracking and perform exceptionally well in chemical processing, food handling, and electronic components.
              </p>
              <hr />
              <h3>KEY FEATURES OF NICKEL 200/201 WIRES</h3>
              <p><strong>Exceptional Alkali Resistance</strong> – Outstanding performance in caustic soda, caustic potash, and other alkaline solutions.</p>
              <p><strong>Excellent Corrosion Resistance</strong> – Resists corrosion in a wide range of environments including seawater, acids, and alkalis.</p>
              <p><strong>Good Fabricability & Weldability</strong> – Both grades can be readily welded, formed, and machined using standard techniques.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>
                Our Nickel 200 and 201 wires conform to international standards including <strong>ASTM B160 / ASME SB160</strong> (standard specification for nickel rod, bar, and wire). We supply wires in various forms (round, square, flat, coil) and can custom‑cut to your exact dimensions.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Nickel 200 / 201 Wires</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B160 / ASME SB160</p>
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
                <h2>READY STOCK AVAILABILITY – NICKEL 200/201 WIRES</h2>
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
                <h2>CHEMICAL COMPOSITION OF NICKEL 200/201 WIRES</h2>
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
                <h2>MECHANICAL PROPERTIES OF NICKEL 200/201 WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: NICKEL 200/201 WIRES
                  <span>(ASTM B160 / ASME SB160)</span>
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
                <h2>UNIFIED WEIGHT CHART: NICKEL 200/201 WIRES</h2>
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
                <h2>NICKEL 200/201 WIRE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED NICKEL 200/201 WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING NICKEL 200/201 WIRES</h2>
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
                <h2>SEARCHES RELATED TO NICKEL 200/201 WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING NICKEL 200/201 WIRES</h2>
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
                  <h2>SEARCHES RELATED TO NICKEL 200/201 WIRES</h2>
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
            <p>Immediate pricing for Nickel 200/201 wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NickelWiresDetails;
