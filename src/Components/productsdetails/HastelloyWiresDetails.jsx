import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Hastelloy Wires product images
import hastelloyRoundWire from "../../products-image/ss-welded-wires.webp";
import hastelloySquareWire from "../../products-image/ss-filler-wires.webp";
import hastelloyFlatWire from "../../products-image/ss-bobbin-wires.webp";
import hastelloyCoilWire from "../../products-image/ss-bright-wires.webp";
import hastelloyCustomWire from "../../products-image/ss-cold-heading-wires.webp";
import hastelloyWeldingWire from "../../products-image/ss-rope-wires.webp";

import hastelloy from "../../products-image/ss-hastelloy-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "HASTELLOY C276 ROUND WIRES",
    image: hastelloyRoundWire,
    items: [
      "Hastelloy C276 Round Wires (ASTM B574)",
      "UNS N10276 / 2.4819",
      "Cold Drawn & Annealed",
      "Exceptional Resistance to Oxidizing & Reducing Acids",
    ],
  },
  {
    title: "HASTELLOY C22 ROUND WIRES",
    image: hastelloyRoundWire,
    items: [
      "Hastelloy C22 Round Wires (ASTM B574)",
      "UNS N06022 / 2.4602",
      "Outstanding Versatility in Both Oxidizing & Reducing Environments",
      "Superior Pitting & Crevice Corrosion Resistance",
    ],
  },
  {
    title: "HASTELLOY B2 / B3 ROUND WIRES",
    image: hastelloyRoundWire,
    items: [
      "Hastelloy B2 / B3 Round Wires (ASTM B574)",
      "UNS N10665 / N010675",
      "Exceptional Resistance to Hydrochloric Acid",
      "Low Carbon Content for Improved Weldability",
    ],
  },
  {
    title: "HASTELLOY X ROUND WIRES",
    image: hastelloyRoundWire,
    items: [
      "Hastelloy X Round Wires (ASTM B574)",
      "UNS N06002 / 2.4665",
      "High-Temperature Oxidation & Carburization Resistance",
      "For Gas Turbines & Industrial Furnaces",
    ],
  },
  {
    title: "HASTELLOY SQUARE, FLAT & WELDING WIRES",
    image: hastelloyFlatWire,
    items: [
      "Hastelloy Square Wires & Flat Wires",
      "Custom Profiles",
      "Welding Wires (TIG/MIG)",
      "Spooled & Straight Lengths",
    ],
  },
  {
    title: "HASTELLOY C276/C22 COIL WIRES & CUSTOM SIZES",
    image: hastelloyCoilWire,
    items: [
      "Hastelloy Coil Wires",
      "Continuous Lengths",
      "Precision Wound on Spools",
      "Custom Cut-to-Length & Precision Machining",
    ],
  },
];

const gradesData = [
  { grade: "Hastelloy C276", uns: "N10276", werkstoff: "2.4819", standard: "ASTM B574 / ASME SB574" },
  { grade: "Hastelloy C22", uns: "N06022", werkstoff: "2.4602", standard: "ASTM B574 / ASME SB574" },
  { grade: "Hastelloy B2", uns: "N10665", werkstoff: "2.4617", standard: "ASTM B574 / ASME SB574" },
  { grade: "Hastelloy B3", uns: "N010675", werkstoff: "2.4600", standard: "ASTM B574 / ASME SB574" },
  { grade: "Hastelloy X", uns: "N06002", werkstoff: "2.4665", standard: "ASTM B574 / ASME SB574" },
];

const chemicalData = [
  { grade: "Hastelloy C276", c: "0.02 max", mn: "1.0 max", si: "0.08 max", cr: "14.5-16.5", ni: "Balance", mo: "15.0-17.0", other: "W: 3.0-4.5, Fe: 4.0-7.0, Co: 2.5 max" },
  { grade: "Hastelloy C22", c: "0.015 max", mn: "0.5 max", si: "0.08 max", cr: "20.0-22.5", ni: "Balance", mo: "12.5-14.5", other: "W: 2.5-3.5, Fe: 2.0-6.0, Co: 2.5 max" },
  { grade: "Hastelloy B2", c: "0.02 max", mn: "1.0 max", si: "0.1 max", cr: "1.0 max", ni: "Balance", mo: "26.0-30.0", other: "Fe: 2.0 max, Co: 1.0 max" },
  { grade: "Hastelloy B3", c: "0.01 max", mn: "1.0 max", si: "0.1 max", cr: "1.0-3.0", ni: "65.0 min", mo: "27.0-32.0", other: "Fe: 1.5 max, Co: 3.0 max" },
  { grade: "Hastelloy X", c: "0.05-0.15", mn: "1.0 max", si: "1.0 max", cr: "20.5-23.0", ni: "Balance", mo: "8.0-10.0", other: "Co: 0.5-2.5, Fe: 17.0-20.0, W: 0.2-1.0" },
];

const mechanicalData = [
  { grade: "Hastelloy C276", tensile: "690 MPa (100 ksi)", yield: "310 MPa (45 ksi)", elongation: "40%", density: "8.89 g/cm³" },
  { grade: "Hastelloy C22", tensile: "690 MPa (100 ksi)", yield: "310 MPa (45 ksi)", elongation: "45%", density: "8.69 g/cm³" },
  { grade: "Hastelloy B2", tensile: "760 MPa (110 ksi)", yield: "350 MPa (51 ksi)", elongation: "40%", density: "9.22 g/cm³" },
  { grade: "Hastelloy B3", tensile: "760 MPa (110 ksi)", yield: "350 MPa (51 ksi)", elongation: "40%", density: "9.22 g/cm³" },
  { grade: "Hastelloy X", tensile: "655 MPa (95 ksi)", yield: "310 MPa (45 ksi)", elongation: "30%", density: "8.22 g/cm³" },
];

// Diameter ranges for wires
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for Hastelloy wires (avg density ~8.8 g/cm³)
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000069" },
  { dia: "0.2 mm", weight: "0.000277" },
  { dia: "0.3 mm", weight: "0.000622" },
  { dia: "0.5 mm", weight: "0.001729" },
  { dia: "0.8 mm", weight: "0.004426" },
  { dia: "1.0 mm", weight: "0.006915" },
  { dia: "1.2 mm", weight: "0.009958" },
  { dia: "1.6 mm", weight: "0.017704" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.02766" },
  { dia: "2.5 mm", weight: "0.04322" },
  { dia: "3.0 mm", weight: "0.06224" },
  { dia: "4.0 mm", weight: "0.11065" },
  { dia: "5.0 mm", weight: "0.17289" },
  { dia: "6.0 mm", weight: "0.24896" },
  { dia: "8.0 mm", weight: "0.44260" },
  { dia: "10.0 mm", weight: "0.69151" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000069" },
  { dia: "0.2 mm", weight: "0.000277" },
  { dia: "0.3 mm", weight: "0.000622" },
  { dia: "0.5 mm", weight: "0.001729" },
  { dia: "0.8 mm", weight: "0.004426" },
  { dia: "1.0 mm", weight: "0.006915" },
  { dia: "1.2 mm", weight: "0.009958" },
  { dia: "1.6 mm", weight: "0.017704" },
  { dia: "2.0 mm", weight: "0.02766" },
  { dia: "2.5 mm", weight: "0.04322" },
  { dia: "3.0 mm", weight: "0.06224" },
  { dia: "4.0 mm", weight: "0.11065" },
  { dia: "5.0 mm", weight: "0.17289" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.24896" },
  { dia: "8.0 mm", weight: "0.44260" },
  { dia: "10.0 mm", weight: "0.69151" },
  { dia: "12.0 mm", weight: "0.9958" },
  { dia: "16.0 mm", weight: "1.7704" },
  { dia: "20.0 mm", weight: "2.766" },
  { dia: "25.0 mm", weight: "4.322" },
  { dia: "30.0 mm", weight: "6.224" },
  { dia: "40.0 mm", weight: "11.065" },
  { dia: "50.0 mm", weight: "17.289" },
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
  { thickness: "0.50", weightPerM2: "4.40", size2000: "8.80", size2500: "13.75", size3000: "19.80" },
  { thickness: "1.00", weightPerM2: "8.80", size2000: "17.60", size2500: "27.50", size3000: "39.60" },
  { thickness: "1.50", weightPerM2: "13.20", size2000: "26.40", size2500: "41.25", size3000: "59.40" },
  { thickness: "2.00", weightPerM2: "17.60", size2000: "35.20", size2500: "55.00", size3000: "79.20" },
  { thickness: "3.00", weightPerM2: "26.40", size2000: "52.80", size2500: "82.50", size3000: "118.80" },
  { thickness: "4.00", weightPerM2: "35.20", size2000: "70.40", size2500: "110.00", size3000: "158.40" },
  { thickness: "5.00", weightPerM2: "44.00", size2000: "88.00", size2500: "137.50", size3000: "198.00" },
  { thickness: "6.00", weightPerM2: "52.80", size2000: "105.60", size2500: "165.00", size3000: "237.60" },
  { thickness: "8.00", weightPerM2: "70.40", size2000: "140.80", size2500: "220.00", size3000: "316.80" },
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
  "Hastelloy C276 / C22 / B2 / B3 / X Round Wires",
  "Hastelloy Square, Flat & Custom Profile Wires",
  "ASTM B574 Compliant",
  "Exceptional Resistance to Both Oxidizing & Reducing Acids",
  "Superior Pitting, Crevice Corrosion & SCC Resistance",
  "Hastelloy Wires Manufacturer in India",
];

const rightItems = [
  "ASTM B574 / ASME SB574",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved",
  "Welding Wires (TIG/MIG) – AWS A5.14",
  "Custom Cut-to-Length & Precision Machining",
  "Hastelloy Wires Supplier in Mumbai",
];

const searchTerms = [
  "Hastelloy C276 Wire Price Per Kg",
  "Hastelloy C22 Wire Weight Chart",
  "Hastelloy Wire Supplier In India",
  "Hastelloy B3 Wire Specifications",
  "Hastelloy X Wire Price In Mumbai",
  "Hastelloy C276 Wire Dimensions",
  "Hastelloy Wire Price List",
  "Hastelloy C276 Wire Weight Calculator",
  "Hastelloy Wire Mechanical Properties",
  "Hastelloy Wire Stockist",
  "Hastelloy B2 Wire Heat Treatment",
  "Hastelloy Wire Price Per Kg In India",
  "Hastelloy C22 Wire Exporter",
  "Hastelloy Wire Manufacturers In Mumbai",
  "Buy Hastelloy Wires In India",
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

const HastelloyWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Hastelloy Wires Supplier – C276, C22, B2, B3, X Wires</title>
        <meta
          name="description"
          content="Leading supplier of Hastelloy wires including C276, C22, B2, B3, X. Round, square, flat, welding wires, and custom sizes. Exceptional corrosion resistance for chemical processing and severe acid environments."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="HASTELLOY WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>HASTELLOY WIRES SUPPLIER – ROUND, SQUARE, FLAT & CUSTOM</h1>
            </div>
            <div className="content-image">
              <img src={hastelloy} alt="Hastelloy Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>HASTELLOY WIRES – ENGINEERED FOR THE MOST AGGRESSIVE CORROSIVE ENVIRONMENTS</h2>
              <p>
                Our comprehensive range of <strong>Hastelloy Wires</strong> covers the most demanding nickel‑molybdenum and nickel‑chromium‑molybdenum alloys, including <strong>Hastelloy C276</strong>, <strong>C22</strong>, <strong>B2</strong>, <strong>B3</strong>, and <strong>X</strong>. These alloys are specifically engineered to withstand extreme corrosion from both oxidizing and reducing acids, as well as chloride‑induced pitting, crevice corrosion, and stress corrosion cracking. Hastelloy C276 offers exceptional versatility; C22 provides superior resistance to oxidizing environments; B2 and B3 excel in reducing acids like hydrochloric acid; and Hastelloy X is designed for high‑temperature oxidation and carburization resistance. Whether you need wires for springs, fasteners, welding, or precision components, our Hastelloy wires deliver reliable and long‑lasting performance.
              </p>
              <hr />
              <h3>ROUND, SQUARE, FLAT & CUSTOM HASTELLOY WIRES</h3>
              <p>
                We supply Hastelloy wires in <strong>round</strong>, <strong>square</strong>, <strong>flat</strong>, and <strong>custom profiles</strong>, available from 0.1 mm to 50 mm diameter (or equivalent cross-section). Our inventory includes cold-drawn, annealed, stress-relieved wires to meet the stringent demands of springs, fasteners, welding, and precision components.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Hastelloy wires are the material of choice for critical applications in <strong>chemical processing</strong> (electrodes, wire mesh, valve stems), <strong>pharmaceuticals</strong>, <strong>pollution control</strong>, <strong>waste treatment</strong>, and <strong>petrochemical</strong> industries. Their unique combination of resistance to both localized and uniform corrosion ensures reliable service in the most aggressive environments, including hydrochloric, sulfuric, and mixed acids.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Hastelloy wires are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B574, ASME SB574</strong>, and <strong>AWS A5.14</strong> for welding wires. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Hastelloy Wires</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B574 / ASME SB574</p>
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
                <h2>READY STOCK AVAILABILITY – HASTELLOY WIRES</h2>
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
                <h2>EQUIVALENT GRADES: HASTELLOY ALLOYS</h2>
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
                <h2>CHEMICAL COMPOSITION OF HASTELLOY WIRES</h2>
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
                <h2>MECHANICAL PROPERTIES OF HASTELLOY WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: HASTELLOY WIRES
                  <span>(ASTM B574 / ASME SB574)</span>
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
                <h2>UNIFIED WEIGHT CHART: HASTELLOY WIRES</h2>
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
                <h2>HASTELLOY WIRE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED HASTELLOY WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING HASTELLOY WIRES</h2>
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
                <h2>SEARCHES RELATED TO HASTELLOY WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING HASTELLOY WIRES</h2>
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
                  <h2>SEARCHES RELATED TO HASTELLOY WIRES</h2>
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
            <p>Immediate pricing for Hastelloy wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HastelloyWiresDetails;