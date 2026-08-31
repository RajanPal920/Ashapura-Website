import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Monel 400 Tubes product images
import monelSeamlessTubes from "../../products-image/ss-seamless-tubes.webp";
import monelWeldedTubes from "../../products-image/ss-welded-tubes.webp";
import monelErwTubes from "../../products-image/ss-erw-tubes.webp";
import monelEfwTubes from "../../products-image/ss-heatexchanger-tubes.webp";
import monelUboTubes from "../../products-image/ss-seamless-2-tubes.webp";
import monelSpecialTubes from "../../products-image/ss-hollow-tubes.webp";

import monel from "../../products-image/ss-monel-400-tubes.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "MONEL 400 SEAMLESS TUBES",
    image: monelSeamlessTubes,
    items: [
      "Monel 400 Seamless Tubes",
      "ASTM B163 / B165",
      "UNS N04400 / 2.4360",
      "Excellent Seawater & Acid Resistance",
    ],
  },
  {
    title: "MONEL 400 WELDED TUBES",
    image: monelWeldedTubes,
    items: [
      "Monel 400 Welded Tubes",
      "ASTM B725 / B730",
      "Longitudinal & Spiral Welded",
      "Industrial Process Tubing",
    ],
  },
  {
    title: "MONEL 400 ERW TUBES",
    image: monelErwTubes,
    items: [
      "Monel 400 ERW Tubes",
      "Electric Resistance Welded",
      "ASTM B730 ERW",
      "High Integrity Welded Seams",
    ],
  },
  {
    title: "MONEL 400 EFW TUBES",
    image: monelEfwTubes,
    items: [
      "Monel 400 EFW Tubes",
      "Electric Fusion Welded",
      "ASTM B725 EFW",
      "Heavy Wall & Large Diameters",
    ],
  },
  {
    title: "MONEL 400 UBO TUBES",
    image: monelUboTubes,
    items: [
      "Monel 400 UBO Tubes",
      "Unified Bare Outer Tubes",
      "Superior Corrosion Resistance",
      "For Offshore & Marine",
    ],
  },
  {
    title: "MONEL 400 SPECIALTY TUBES",
    image: monelSpecialTubes,
    items: [
      "Monel 400 Nickel-Copper Alloy Tubes",
      "High Ni (63%) & Cu (28-34%)",
      "Excellent Seawater & Hydrofluoric Acid Resistance",
      "For Chemical & Marine Service",
    ],
  }
];

const gradesData = [
  {
    grade: "Monel 400",
    uns: "N04400",
    werkstoff: "2.4360",
    standard: "ASTM B163 / B165 / B725 / B730",
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

const leftWallThickness = [
  "0.4 mm",
  "0.5 mm",
  "0.8 mm",
  "1.0 mm",
  "1.2 mm",
  "1.6 mm",
  "2.0 mm",
  "3.0 mm",
];

const rightWallThickness = [
  "4.0 mm",
  "5.0 mm",
  "6.0 mm",
  "8.0 mm",
  "10.0 mm",
  "12.0 mm",
  "16.0 mm",
  "20.0 mm / 25.0 mm",
];

// Approx weight per meter for Monel 400 tubes (density 8.83 g/cm³) – based on wall thickness 1mm
// Using formula: weight = (OD - wall) * wall * 0.0275 (approx for Monel 400)
const leftTubeData = [
  { size: "6 mm OD x 1 mm WT", weight: "0.139" },
  { size: "8 mm OD x 1 mm WT", weight: "0.195" },
  { size: "10 mm OD x 1 mm WT", weight: "0.249" },
  { size: "12 mm OD x 1 mm WT", weight: "0.304" },
  { size: "14 mm OD x 1 mm WT", weight: "0.359" },
  { size: "16 mm OD x 1 mm WT", weight: "0.414" },
  { size: "18 mm OD x 1 mm WT", weight: "0.469" },
  { size: "20 mm OD x 1 mm WT", weight: "0.524" },
];

const rightTubeData = [
  { size: "25 mm OD x 1 mm WT", weight: "0.663" },
  { size: "30 mm OD x 1 mm WT", weight: "0.801" },
  { size: "35 mm OD x 1 mm WT", weight: "0.939" },
  { size: "40 mm OD x 1 mm WT", weight: "1.077" },
  { size: "50 mm OD x 1 mm WT", weight: "1.354" },
  { size: "63 mm OD x 1 mm WT", weight: "1.713" },
  { size: "80 mm OD x 1 mm WT", weight: "2.182" },
  { size: "100 mm OD x 1 mm WT", weight: "2.733" },
];

// Extended supply range
const leftTubeDataNew = [
  { size: "6 mm OD x 1 mm WT", weight: "0.139" },
  { size: "8 mm OD x 1 mm WT", weight: "0.195" },
  { size: "10 mm OD x 1 mm WT", weight: "0.249" },
  { size: "12 mm OD x 1 mm WT", weight: "0.304" },
  { size: "14 mm OD x 1 mm WT", weight: "0.359" },
  { size: "16 mm OD x 1 mm WT", weight: "0.414" },
  { size: "18 mm OD x 1 mm WT", weight: "0.469" },
  { size: "20 mm OD x 1 mm WT", weight: "0.524" },
  { size: "25 mm OD x 1 mm WT", weight: "0.663" },
  { size: "30 mm OD x 1 mm WT", weight: "0.801" },
  { size: "35 mm OD x 1 mm WT", weight: "0.939" },
  { size: "40 mm OD x 1 mm WT", weight: "1.077" },
  { size: "50 mm OD x 1 mm WT", weight: "1.354" },
];

const rightTubeDataNew = [
  { size: "63 mm OD x 1 mm WT", weight: "1.713" },
  { size: "80 mm OD x 1 mm WT", weight: "2.182" },
  { size: "100 mm OD x 1 mm WT", weight: "2.733" },
  { size: "125 mm OD x 1 mm WT", weight: "3.423" },
  { size: "160 mm OD x 1 mm WT", weight: "4.389" },
  { size: "200 mm OD x 1 mm WT", weight: "5.492" },
  { size: "250 mm OD x 1 mm WT", weight: "6.873" },
  { size: "300 mm OD x 1 mm WT", weight: "8.254" },
  { size: "350 mm OD x 1 mm WT", weight: "9.635" },
  { size: "400 mm OD x 1 mm WT", weight: "11.016" },
  { size: "450 mm OD x 1 mm WT", weight: "12.397" },
  { size: "500 mm OD x 1 mm WT", weight: "13.778" },
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
    thickness: "0.50",
    weightPerM2: "4.42",
    size2000: "8.84",
    size2500: "13.81",
    size3000: "19.89",
  },
  {
    thickness: "1.00",
    weightPerM2: "8.83",
    size2000: "17.66",
    size2500: "27.59",
    size3000: "39.74",
  },
  {
    thickness: "1.50",
    weightPerM2: "13.25",
    size2000: "26.50",
    size2500: "41.39",
    size3000: "59.61",
  },
  {
    thickness: "2.00",
    weightPerM2: "17.66",
    size2000: "35.32",
    size2500: "55.19",
    size3000: "79.47",
  },
  {
    thickness: "3.00",
    weightPerM2: "26.49",
    size2000: "52.98",
    size2500: "82.78",
    size3000: "119.21",
  },
  {
    thickness: "4.00",
    weightPerM2: "35.32",
    size2000: "70.64",
    size2500: "110.38",
    size3000: "158.94",
  },
  {
    thickness: "5.00",
    weightPerM2: "44.15",
    size2000: "88.30",
    size2500: "137.97",
    size3000: "198.68",
  },
  {
    thickness: "6.00",
    weightPerM2: "52.98",
    size2000: "105.96",
    size2500: "165.56",
    size3000: "238.42",
  },
  {
    thickness: "8.00",
    weightPerM2: "70.64",
    size2000: "141.28",
    size2500: "220.75",
    size3000: "317.89",
  },
];

const toleranceData = [
  {
    thickness: "0.017 – 0.030 (0.43 – 0.76)",
    upTo36: "0.0015 (0.038)",
    upTo48: "0.002 (0.051)",
  },
  {
    thickness: "0.031 – 0.041 (0.79 – 1.04)",
    upTo36: "0.002 (0.051)",
    upTo48: "0.003 (0.076)",
  },
  {
    thickness: "0.042 – 0.059 (1.1 – 1.5)",
    upTo36: "0.003 (0.076)",
    upTo48: "0.004 (0.10)",
  },
  {
    thickness: "0.060 – 0.073 (1.5 – 1.9)",
    upTo36: "0.003 (0.076)",
    upTo48: "0.0045 (0.11)",
  },
  {
    thickness: "0.085 – 0.099 (2.2 – 2.5)",
    upTo36: "0.004 (0.10)",
    upTo48: "0.006 (0.15)",
  },
  {
    thickness: "0.116 – 0.131 (2.9 – 3.3)",
    upTo36: "0.005 (0.13)",
    upTo48: "0.0075 (0.19)",
  },
  {
    thickness: "0.147 – 0.187 (3.7 – 4.7)",
    upTo36: "0.007 (0.18)",
    upTo48: "0.0105 (0.20)",
  },
];

const leftItems = [
  "Monel 400 Seamless & Welded Tubes",
  "Monel 400 ERW & EFW Tubes",
  "ASTM B163 / B165 / B725 / B730 Compliant",
  "Excellent Resistance to Seawater & Marine Atmospheres",
  "Superior Performance in Hydrofluoric & Sulfuric Acids",
  "Monel 400 Tubes Manufacturer in India",
];

const rightItems = [
  "ASTM B163 / B165 / B725 / B730 Monel 400 Tubes",
  "OD Range: 6 mm to 500 mm",
  "Wall Thickness: 0.4 mm to 25 mm",
  "Straight Lengths up to 12 m, U-Bends Available",
  "Seamless, Welded, ERW, EFW, Cold Drawn",
  "Heat Exchanger Tubes & Instrumentation Tubes",
  "Monel 400 Tubes Supplier in Mumbai",
];

const searchTerms = [
  "Monel 400 Tube Price Per Kg",
  "Monel 400 Seamless Tube Weight Chart",
  "Monel 400 Tube Supplier In India",
  "UNS N04400 Chemical Composition",
  "Monel 400 Tube Price In Mumbai",
  "Monel 400 Tube Dimensions",
  "Monel 400 Tube Specifications Pdf",
  "Monel 400 Seawater Resistance",
  "Monel 400 Tube Price List",
  "Monel 400 Tube Weight Calculator",
  "Monel 400 Mechanical Properties",
  "Monel 400 Tube Stockist",
  "Monel 400 Heat Treatment",
  "Monel 400 Tube Price Per Kg In India",
  "Monel 400 2.4360",
  "Monel 400 Tubes Manufacturers In Mumbai",
  "Buy Monel 400 Tubes In India",
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

const MonelTubesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Monel 400 Tubes Supplier – UNS N04400 Nickel-Copper Alloy Tubes</title>
        <meta
          name="description"
          content="Supplier of Monel 400 tubes (UNS N04400, 2.4360) with exceptional resistance to seawater, marine environments, and hydrofluoric acid. Seamless, welded, ERW, EFW tubes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="MONEL 400 TUBES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>MONEL 400 TUBES SUPPLIER – UNS N04400 NICKEL-COPPER ALLOY TUBES</h1>
            </div>
            <div className="content-image">
              <img src={monel} alt="Monel 400 Tubes" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>MONEL 400 TUBES: EXCEPTIONAL PERFORMANCE IN MARINE & CHEMICAL ENVIRONMENTS</h2>
              <p>Monel 400 (UNS N04400) is a nickel‑copper alloy (approximately 67% nickel and 23% copper) known for its outstanding resistance to seawater, marine atmospheres, and a wide range of corrosive environments. With high nickel content combined with copper, Monel 400 offers excellent resistance to chloride‑induced stress corrosion cracking (SCC) and performs exceptionally well in hydrofluoric acid, sulfuric acid, and alkali solutions. This alloy is widely used in marine engineering, chemical processing, and oil & gas applications where durability and corrosion resistance are critical.</p>
              <hr />
              <h3>KEY FEATURES OF MONEL 400 TUBES</h3>
              <p><strong>Superior Marine Resistance</strong> – Exceptional performance in seawater, brackish water, and marine atmospheres with minimal corrosion.</p>
              <p><strong>Excellent SCC Resistance</strong> – High nickel content provides outstanding resistance to chloride‑induced stress corrosion cracking.</p>
              <p><strong>Good Weldability & Fabricability</strong> – Monel 400 can be readily welded, brazed, and formed using standard techniques, maintaining corrosion resistance in the heat‑affected zone.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Monel 400 tubes conform to international standards including <strong>ASTM B163</strong> (seamless tubes), <strong>ASTM B165</strong> (seamless pipes/tubes), <strong>ASTM B725</strong> (welded tubes), and <strong>ASTM B730</strong> (ERW tubes). We supply tubes in various finishes (mill, annealed, pickled, polished) and can custom‑cut to your exact dimensions.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Monel 400 Tubes</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B163 / B165 / B725 / B730</p>
              </div>
              <div className="spec-card">
                <h4>OD Range</h4>
                <p>6 mm – 500 mm</p>
              </div>
              <div className="spec-card">
                <h4>Wall Thickness</h4>
                <p>0.4 mm – 25 mm</p>
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
                <h2>READY STOCK AVAILABILITY – MONEL 400 TUBES</h2>
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
                <h2>CHEMICAL COMPOSITION OF MONEL 400 TUBES</h2>
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
                <h2>MECHANICAL PROPERTIES OF MONEL 400 TUBING</h2>
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
                  WALL THICKNESS RANGE AVAILABILITY: MONEL 400 TUBES
                  <span>(ASTM B163 / B165 / B725 / B730)</span>
                </h2>
                <p>Available in Seamless & Welded forms – Round, Square, Rectangular</p>
              </div>
              <div className="table-responsive">
                <table className="thickness-table">
                  <thead>
                    <tr>
                      <th>Wall Thickness (mm)</th>
                      <th>Availability</th>
                      <th>Wall Thickness (mm)</th>
                      <th>Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftWallThickness.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available"><i className="fa-solid fa-check"></i></td>
                        <td>{rightWallThickness[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: MONEL 400 TUBES (1 mm Wall Thickness)</h2>
              </div>
              <div className="table-responsive">
                <table className="coil-weight-table">
                  <thead>
                    <tr>
                      <th>OD (mm) x WT (mm)</th>
                      <th>Approx Weight (Kg/m)</th>
                      <th>OD (mm) x WT (mm)</th>
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
                <h2>MONEL 400 TUBE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED MONEL 400 TUBE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING MONEL 400 TUBES</h2>
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
                <h2>SEARCHES RELATED TO MONEL 400 TUBES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING MONEL 400 TUBES</h2>
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
                  <h2>SEARCHES RELATED TO MONEL 400 TUBES</h2>
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
            <p>Immediate pricing for Monel 400 tubes. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MonelTubesDetails;