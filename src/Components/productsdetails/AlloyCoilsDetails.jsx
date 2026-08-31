import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import hrCoils from "../../products-image/ss-hrcoils.webp";
import crCoils from "../../products-image/ss-crcoils.webp";
import slitCoils from "../../products-image/ss-slitcoils.webp";

import Coils from "../../products-image/ss-alloy-28-coils.webp";
import "./Productsdetails.css";


const stockData = [
  {
    title: "HOT ROLLED (HR) COILS",
    image: hrCoils,
    items: [
      "Alloy 28 Hot Rolled Coils",
      "Alloy 28 HR Coils Stock",
      "ASME SB 709 Alloy 28 HR",
      "Alloy N08028 Hot Rolled",
    ],
  },
  {
    title: "COLD ROLLED (CR) COILS",
    image: crCoils,
    items: [
      "Alloy 28 Cold Rolled Coils",
      "Alloy 28 CR Coils Stockist",
      "ASME SB 709 Alloy 28 CR",
      "Alloy N08028 Cold Rolled",
    ],
  },
  {
    title: "SLIT & STRIP COILS",
    image: slitCoils,
    items: [
      "Alloy 28 Slit Coils",
      "Alloy N08028 Slit Coils",
      "ASME SB 709 Alloy 28 Slit",
      "Precision Slit Strip Coils",
    ],
  },
];

const gradesData = [
  {
    grade: "Alloy 28",
    uns: "N08028",
    werkstoff: "1.4563",
    standard: "Sanicro 28 / ASTM B709",
  },
];

const chemicalData = [
  {
    grade: "Alloy 28",
    c: "0.02 max",
    mn: "2.0 max",
    si: "0.75 max",
    cr: "26.0 - 28.0",
    ni: "30.0 - 32.0",
    mo: "3.0 - 4.0",
    other: "Cu: 1.0 - 2.0",
  },
];

const mechanicalData = [
  {
    grade: "Alloy 28",
    tensile: "500 - 750 MPa",
    yield: "220 MPa min",
    elongation: "35% / 30%",
    density: "8.1 g/cm³",
  },
];

const leftThickness = [
  "0.2 mm",
  "0.3 mm",
  "0.4 mm",
  "0.5 mm",
  "0.6 mm",
  "0.8 mm",
  "1.0 mm",
  "1.2 mm",
];

const rightThickness = [
  "1.5 mm",
  "2.0 mm",
  "2.5 mm",
  "3.0 mm",
  "4.0 mm",
  "5.0 mm",
  "—",
  "—",
];

const leftData = [
  { size: "2000 × 1000 × 0.50", weight: "8.0" },
  { size: "2500 × 1250 × 0.50", weight: "12.5" },
  { size: "3000 × 1500 × 0.50", weight: "18.0" },
  { size: "2000 × 1000 × 1.00", weight: "16.0" },
  { size: "2500 × 1250 × 1.00", weight: "25.0" },
  { size: "3000 × 1500 × 1.00", weight: "36.0" },
];

const rightData = [
  { size: "2000 × 1000 × 2.00", weight: "32.0" },
  { size: "2500 × 1250 × 2.00", weight: "50.0" },
  { size: "3000 × 1500 × 2.00", weight: "72.0" },
  { size: "2000 × 1000 × 3.00", weight: "48.0" },
  { size: "2500 × 1250 × 3.00", weight: "75.0" },
  { size: "3000 × 1500 × 3.00", weight: "108.0" },
];


const leftDataNew = [
  { size: "2000 × 1000 × 4.00", weight: "64.0" },
  { size: "2500 × 1250 × 4.00", weight: "100.0" },
  { size: "3000 × 1500 × 4.00", weight: "144.0" },
  { size: "2000 × 1000 × 5.00", weight: "80.0" },
  { size: "2500 × 1250 × 5.00", weight: "125.0" },
  { size: "3000 × 1500 × 5.00", weight: "180.0" },
];

const rightDataNew = [
  { size: "4000 × 2000 × 5.00", weight: "320.0" },
  { size: "2500 × 1250 × 6.00", weight: "150.0" },
  { size: "3000 × 1500 × 6.00", weight: "216.0" },
  { size: "4000 × 2000 × 6.00", weight: "384.0" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
];


const gaugeData = [
  { gauge: "8", inches: ".17187", mm: "4.365" },
  { gauge: "9", inches: ".15625", mm: "3.968" },
  { gauge: "10", inches: ".14062", mm: "3.571" },
  { gauge: "11", inches: ".125", mm: "3.175" },
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
    weightPerM2: "4.00",
    size2000: "8.00",
    size2500: "12.50",
    size3000: "18.00",
  },
  {
    thickness: "1.00",
    weightPerM2: "8.00",
    size2000: "16.00",
    size2500: "25.00",
    size3000: "36.00",
  },
  {
    thickness: "1.50",
    weightPerM2: "12.00",
    size2000: "24.00",
    size2500: "37.50",
    size3000: "54.00",
  },
  {
    thickness: "2.00",
    weightPerM2: "16.00",
    size2000: "32.00",
    size2500: "50.00",
    size3000: "72.00",
  },
  {
    thickness: "3.00",
    weightPerM2: "24.00",
    size2000: "48.00",
    size2500: "75.00",
    size3000: "108.00",
  },
  {
    thickness: "4.00",
    weightPerM2: "32.00",
    size2000: "64.00",
    size2500: "100.00",
    size3000: "144.00",
  },
  {
    thickness: "5.00",
    weightPerM2: "40.00",
    size2000: "80.00",
    size2500: "125.00",
    size3000: "180.00",
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
  "Alloy 28 (UNS N08028) High-Alloy Austenitic Coils",
  "ASTM B709 Alloy 28 Coils Cut To Size",
  "Alloy 28 Industrial Coils Supplier in India",
  "ASME SB 709 Alloy 28 Coils at Best Price",
  "Alloy 1.4563 Precision Slit Coils & Strips",
  "Alloy 28 Coil Manufacturer in Mumbai",
  "Nickel Alloy 28 Hot Rolled (HR) Coils",
];

const rightItems = [
  "Alloy 28 Coils Exporter & Global Stockholder",
  "Alloy 28 Slit Coils Stockholder & Dealer",
  "Type 28 Alloy Coils Standards Compliance",
  "Alloy 28 Cold Rolled (CR) Coils Stockists",
  "Gr 28 Alloy High Performance Industrial Coils",
  "Alloy 28 Bright Annealed (BA) Finish Coils",
  "Spring Hard & Soft Annealed Alloy 28 Coils",
];

const searchTerms = [
  "Alloy 28 Coils Price List In India",
  "Alloy 28 Coils Catalogue",
  "Alloy 28 Coil Supplier In Mumbai",
  "Alloy 28 Coil Price In India",
  "Alloy Coil Grade 28 Price List",
  "Alloy 28 Coil Thickness Chart",
  "Buy Alloy 28 Coils PDF",
  "Alloy 28 Coil Thickness Tolerance",
  "Alloy 28 Coils In Mumbai",
  "Alloy 28 Coil In Pune",
  "Alloy 28 Coil Price List In Mumbai",
  "Price Of Alloy 28 Coil",
  "Alloy 28 Coil Stockist In Mumbai",
  "28 Alloy Latest Price",
  "Alloy 28 Cold Rolled (CR) Coils",
  "Alloy 28 Coil Supplier",
  "Alloy 28 Coil Size",
  "Alloy 28 Coils Chemical Composition",
  "Alloy 28 Coils Supplier In India",
  "Alloy 28 Coil Price List",
  "Alloy 1.4563 Slit Coil Suppliers In Gujarat",
  "Alloy 28 Coil Specifications",
  "Alloy 28 Hot Rolled Coils Price List",
  "Alloy 28 Coil Manufacturers",
  "Price List Of Alloy 28 Coils",
  "Alloy 28 Coil Dealer In India",
  "ASME SB 709 Alloy 28 Coil",
  "Alloy 28 Coil Exporter",
  "Alloy 28 Coils Stock",
  "Alloy 28 Coils Best Price In Delhi",
  "28 Alloy Coil Price List",
  "Alloy 28 Coils Price In Mumbai",
  "Alloy 28 Bright Annealed Price In India",
  "Alloy 28 Half Hard Coils",
  "Alloy 28 Coils Price",
  "Alloy 28 Coils Length",
  "Alloy UNS N08028 Coil",
  "Alloy 28 Coil Weight",
  "Alloy 28 Coil Supplier In India",
  "Alloy 28 Coil Supplier In Mumbai",
  "28 Alloy (HR) Hot Rolled Coils Price List",
  "Alloy 28 Coil Price",
  "Alloy 28 Coils Manufacturer In Mumbai",
  "Alloy 28 Coils Exporter",
  "Alloy 28 Coils In India",
  "Alloy 28 Coils Equivalent Grades",
  "28 Alloy Coil Dimensions",
  "Alloy 28 Coils Manufacturers In India",
  "Alloy 28 Coil Exporter In India",
  "Cost Of 28 Alloy Coil",
  "Alloy 28 Coils Supplier",
  "Alloy 28 Coil Weight Calculator",
  "Alloy 28 Coil Stockist",
  "Cost Of Alloy 28 Coils Exporter",
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
]

const AlloyCoilsDetails = () => {
  return (
    <>
        <Helmet>
            <title>Alloy 28 Coils Supplier | Raymond Ispat India</title>
            <meta
            name="description"
            content="Supplier and stockist of Alloy 28 coils with technical overview, corrosion resistance details, applications, specifications and export support."
            />
        </Helmet>

        <Navbar />

        <Banner
            title="ALLOY 28 COILS"
            image={ProductBanner}
        />


      


      <div className="product-details-container">
        <div className="product-main-content">
        <section className="product-content">
            <div className="content-header">
                <h1>ALLOY 28 COILS SUPPLIER</h1>
            </div>
            <div className="content-image">
                <img src={Coils} alt="Alloy 28 Coils Supplier" className="main-image" />
            </div>
            <div className="content-contact">
                <a href="https://wa.me/919326883622">Enquiry via whatsapp</a>
                <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
        </section>
        <section className="product-content">
            <div className="content-header">
                <h2>ALLOY 28 COILS: TECHNICAL OVERVIEW AND PROPERTIES</h2>
                <p>
                    Alloy 28 (UNS N08028 / Sanicro 28) is a high-alloy multi-purpose austenitic stainless steel designed for service in highly corrosive conditions. Developed originally for the phosphoric acid industry, this nickel-iron-chromium alloy contains significant additions of molybdenum and copper. This unique chemical composition provides a superior alternative to standard 300-series stainless steels and even Alloy 904L when dealing with complex, mixed acid environments.
                </p>
                <hr/>
                <h3>SUPERIOR CORROSION RESISTANCE PROFILE</h3>
                <ul>
                    <li><strong>Phosphoric and Sulfuric Acid:</strong> Offers exceptional resistance, even when contaminated with chlorides and fluorides.</li>
                    <li><strong>Pitting and Crevice Corrosion:</strong> High chromium and molybdenum content delivers a very high PREN for brackish water and seawater service.</li>
                    <li><strong>Stress Corrosion Cracking:</strong> High nickel content makes the alloy virtually immune to chloride-induced SCC.</li>
                </ul>
                <h3>KEY INDUSTRIAL APPLICATIONS</h3>
                <ul>
                    <li><strong>Chemical Processing:</strong> Used in phosphoric acid, superphosphate and compound fertilizer plants.</li>
                    <li><strong>Oil &amp; Gas:</strong> Utilized in downhole tubing for sour gas wells containing hydrogen sulfide, carbon dioxide and chlorides.</li>
                    <li><strong>Marine &amp; Desalination:</strong> Suited for high-pressure piping systems and heat exchanger coils exposed to concentrated brine and seawater.</li>
                    <li><strong>Pollution Control:</strong> Applied in flue-gas desulfurization and related industrial systems.</li>
                </ul>
                <hr/>
                <h3>MANUFACTURING AND QUALITY STANDARDS</h3>
                <p>We supply Alloy 28 coils in compliance with <strong>ASTM B709 / ASME SB709</strong>, with value-added services including cladding, annealing, pickling, polishing, bending and forging.</p>
            </div>
        </section>


    <section className="specification-section">

    <h2>Specification of Alloy 28 (Sanicro 28) Coils</h2>

    <div className="spec-grid">

        <div className="spec-card">
            <h4>Standard</h4>
            <p>ASTM B709 / ASME SB709</p>
        </div>

        <div className="spec-card">
            <h4>Thickness</h4>
            <p>0.2 mm – 5.0 mm</p>
        </div>

        <div className="spec-card">
            <h4>Width</h4>
            <p>3.2 mm – 1500 mm</p>
        </div>

        <div className="spec-card">
            <h4>Length</h4>
            <p>Coil / Strip, As Per Customer Requirement</p>
        </div>

        <div className="spec-card">
            <h4>Hardness Temper</h4>
            <p>Soft, Quarter Hard, Half Hard, Hard, Spring Hard</p>
        </div>

        <div className="spec-card">
            <h4>Value Added Services</h4>
            <p>Cladding, Annealing, Pickling, Polishing, Bending, Forging</p>
        </div>

        </div>

        </section>
    <section className="stock-section">
      <div className="stock-container">

        <div className="stock-heading">
          <h2>STOCK AVAILABILITY OF STAINLESS STEEL COILS</h2>
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
          <h2>EQUIVALENT GRADES: STAINLESS STEEL COILS</h2>
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
          <h2>CHEMICAL COMPOSITION OF STAINLESS STEEL COILS</h2>
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
          <h2>MECHANICAL & PHYSICAL PROPERTIES</h2>
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
                  <td>
                    <strong>{item.grade}</strong>
                  </td>
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
            THICKNESS AVAILABILITY: STAINLESS STEEL COILS
            <span>(ASTM A240 / ASME SA240)</span>
          </h2>

          <p>
            Available for Grades: 304, 304L, 308, 309, 310S, 316, 316L,
            317L, 321, 904L
          </p>
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
          <h2>COLD ROLLED DESCALED COIL WEIGHT & SIZE CHART</h2>
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
          <h2>STAINLESS STEEL COILS: 1D FINISH WEIGHT CHART</h2>

          <p>
            Applicable for: 304/304L, 308, 309, 310S, 316/316L,
            317L, 321, and 904L Coils
          </p>
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
          <h2>17-4 PH &amp; 253 MA COILS THICKNESS GAUGE CHART</h2>
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
          <h2>SPECIALTY SS COILS WEIGHT / SIZE CHART</h2>
        </div>

        <div className="table-responsive">
          <table className="specialty-weight-table">

            <thead>
              <tr>
                <th rowSpan="2">Thickness (mm)</th>
                <th rowSpan="2">Weight Kg/M2</th>
                <th colSpan="3">
                  Size in MM (Weight per Coil/Sheet)
                </th>
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
          <h2>17-4 PH &amp; 253 MA COILS THICKNESS TOLERANCE</h2>
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
          <h2>SPECIALIZED IN STAINLESS STEEL COILS (ALL GRADES)</h2>
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
            <h2>SEARCHES RELATED TO STAINLESS STEEL COILS</h2>
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

        
    <Footer/>
      
    
    </>
  );
};

export default AlloyCoilsDetails;
