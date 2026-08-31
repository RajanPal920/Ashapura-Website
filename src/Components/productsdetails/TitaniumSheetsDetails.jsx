import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Titanium Sheets product images
import tiSheets from "../../products-image/ss-hr-sheets.webp";
import tiCoils from "../../products-image/ss-cr-sheets.webp";
import tiStrips from "../../products-image/ss-perforated-sheets.webp";


import titanium from "../../products-image/ss-titanium-sheets.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "TITANIUM GRADE 2 SHEETS",
    image: tiSheets,
    items: [
      "Titanium Grade 2 Sheets (ASTM B265)",
      "UNS R50400 / 3.7035",
      "Cold Rolled & Annealed",
      "Excellent Corrosion Resistance & Formability",
    ],
  },
  {
    title: "TITANIUM GRADE 5 (Ti-6Al-4V) SHEETS",
    image: tiSheets,
    items: [
      "Titanium Grade 5 Sheets (ASTM B265)",
      "UNS R56400 / 3.7165",
      "High Strength Alloy",
      "Aerospace & Medical Grade",
    ],
  },
  {
    title: "TITANIUM GRADE 7 SHEETS",
    image: tiSheets,
    items: [
      "Titanium Grade 7 Sheets (ASTM B265)",
      "UNS R52400 / 3.7235",
      "Palladium-Bearing for Corrosive Service",
      "Superior Resistance to Reducing Acids",
    ],
  },
  
];

const gradesData = [
  { grade: "Titanium Grade 1", uns: "R50250", werkstoff: "3.7025", standard: "ASTM B265 / ASME SB265" },
  { grade: "Titanium Grade 2", uns: "R50400", werkstoff: "3.7035", standard: "ASTM B265 / ASME SB265" },
  { grade: "Titanium Grade 5", uns: "R56400", werkstoff: "3.7165", standard: "ASTM B265 / ASME SB265" },
  { grade: "Titanium Grade 7", uns: "R52400", werkstoff: "3.7235", standard: "ASTM B265 / ASME SB265" },
  { grade: "Titanium Grade 9", uns: "R56320", werkstoff: "3.7195", standard: "ASTM B265 / ASME SB265" },
  { grade: "Titanium Grade 12", uns: "R53400", werkstoff: "3.7225", standard: "ASTM B265 / ASME SB265" },
];

const chemicalData = [
  { grade: "Titanium Grade 1", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.20 max", o: "0.18 max", ti: "Balance", al: "—", v: "—", other: "—" },
  { grade: "Titanium Grade 2", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.30 max", o: "0.25 max", ti: "Balance", al: "—", v: "—", other: "—" },
  { grade: "Titanium Grade 5", n: "0.05 max", c: "0.08 max", h: "0.015 max", fe: "0.40 max", o: "0.20 max", ti: "Balance", al: "5.5-6.75", v: "3.5-4.5", other: "—" },
  { grade: "Titanium Grade 7", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.30 max", o: "0.25 max", ti: "Balance", al: "—", v: "—", other: "Pd: 0.12-0.25" },
  { grade: "Titanium Grade 9", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.25 max", o: "0.15 max", ti: "Balance", al: "2.5-3.5", v: "2.0-3.0", other: "—" },
  { grade: "Titanium Grade 12", n: "0.03 max", c: "0.08 max", h: "0.015 max", fe: "0.30 max", o: "0.25 max", ti: "Balance", al: "—", v: "—", other: "Mo: 0.2-0.4, Ni: 0.6-0.9" },
];

const mechanicalData = [
  { grade: "Titanium Grade 1", tensile: "240 MPa (35 ksi)", yield: "170 MPa (25 ksi)", elongation: "24%", density: "4.51 g/cm³" },
  { grade: "Titanium Grade 2", tensile: "345 MPa (50 ksi)", yield: "275 MPa (40 ksi)", elongation: "20%", density: "4.51 g/cm³" },
  { grade: "Titanium Grade 5", tensile: "895 MPa (130 ksi)", yield: "825 MPa (120 ksi)", elongation: "10%", density: "4.43 g/cm³" },
  { grade: "Titanium Grade 7", tensile: "345 MPa (50 ksi)", yield: "275 MPa (40 ksi)", elongation: "20%", density: "4.51 g/cm³" },
  { grade: "Titanium Grade 9", tensile: "620 MPa (90 ksi)", yield: "480 MPa (70 ksi)", elongation: "15%", density: "4.48 g/cm³" },
  { grade: "Titanium Grade 12", tensile: "345 MPa (50 ksi)", yield: "275 MPa (40 ksi)", elongation: "20%", density: "4.51 g/cm³" },
];

// Thickness and weight charts for sheets (density 4.51 g/cm³)
const leftThickness = [
  "0.5 mm", "1.0 mm", "1.5 mm", "2.0 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm",
];
const rightThickness = [
  "8.0 mm", "10.0 mm", "12.0 mm", "16.0 mm", "20.0 mm", "25.0 mm", "50.0 mm", "100.0 mm",
];

// Approx weights for titanium sheets (density 4.51 g/cm³)
const leftData = [
  { size: "2000 × 1000 × 2.0", weight: "18.0" },
  { size: "2500 × 1250 × 3.0", weight: "42.5" },
  { size: "3000 × 1500 × 4.0", weight: "81.0" },
  { size: "2000 × 1000 × 5.0", weight: "45.0" },
  { size: "2500 × 1250 × 6.0", weight: "84.5" },
  { size: "3000 × 1500 × 8.0", weight: "162.0" },
];
const rightData = [
  { size: "2000 × 1000 × 10.0", weight: "90.0" },
  { size: "2500 × 1250 × 12.0", weight: "169.0" },
  { size: "3000 × 1500 × 16.0", weight: "324.0" },
  { size: "2000 × 1000 × 20.0", weight: "180.0" },
  { size: "2500 × 1250 × 25.0", weight: "352.0" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "2000 × 1000 × 1.0", weight: "9.0" },
  { size: "2500 × 1250 × 1.5", weight: "21.1" },
  { size: "3000 × 1500 × 2.0", weight: "40.5" },
  { size: "2000 × 1000 × 3.0", weight: "27.0" },
  { size: "2500 × 1250 × 4.0", weight: "56.5" },
  { size: "3000 × 1500 × 5.0", weight: "101.0" },
  { size: "2000 × 1000 × 6.0", weight: "54.0" },
  { size: "2500 × 1250 × 8.0", weight: "112.5" },
  { size: "3000 × 1500 × 10.0", weight: "202.5" },
  { size: "4000 × 2000 × 12.0", weight: "432.0" },
  { size: "2000 × 1000 × 15.0", weight: "135.0" },
  { size: "2500 × 1250 × 20.0", weight: "281.0" },
  { size: "3000 × 1500 × 25.0", weight: "506.0" },
];
const rightDataNew = [
  { size: "4000 × 2000 × 30.0", weight: "1080.0" },
  { size: "2500 × 1250 × 40.0", weight: "562.0" },
  { size: "3000 × 1500 × 50.0", weight: "1012.0" },
  { size: "4000 × 2000 × 60.0", weight: "2160.0" },
  { size: "2500 × 1250 × 80.0", weight: "1124.0" },
  { size: "3000 × 1500 × 100.0", weight: "2024.0" },
  { size: "4000 × 2000 × 120.0", weight: "4320.0" },
  { size: "4000 × 2000 × 150.0", weight: "5400.0" },
  { size: "2500 × 1250 × 200.0", weight: "2810.0" },
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
  { thickness: "0.50", weightPerM2: "2.25", size2000: "4.50", size2500: "7.03", size3000: "10.12" },
  { thickness: "1.00", weightPerM2: "4.50", size2000: "9.00", size2500: "14.06", size3000: "20.25" },
  { thickness: "1.50", weightPerM2: "6.75", size2000: "13.50", size2500: "21.09", size3000: "30.37" },
  { thickness: "2.00", weightPerM2: "9.00", size2000: "18.00", size2500: "28.12", size3000: "40.50" },
  { thickness: "3.00", weightPerM2: "13.50", size2000: "27.00", size2500: "42.18", size3000: "60.75" },
  { thickness: "4.00", weightPerM2: "18.00", size2000: "36.00", size2500: "56.25", size3000: "81.00" },
  { thickness: "5.00", weightPerM2: "22.50", size2000: "45.00", size2500: "70.31", size3000: "101.25" },
  { thickness: "6.00", weightPerM2: "27.00", size2000: "54.00", size2500: "84.37", size3000: "121.50" },
  { thickness: "8.00", weightPerM2: "36.00", size2000: "72.00", size2500: "112.50", size3000: "162.00" },
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
  "Titanium Grade 1, 2, 5, 7, 9, 12 Sheets & Coils",
  "ASTM B265 / ASME SB265 Compliant",
  "Lightweight – 4.5 g/cm³ (60% of Steel)",
  "Exceptional Resistance to Seawater, Chlorides, and Acids",
  "Biocompatible – Medical Grade Available (Grade 5)",
  "Titanium Sheets Manufacturer in India",
];

const rightItems = [
  "ASTM B265 / ASME SB265",
  "Standard Sizes: 1000x2000, 1250x2500, 1500x3000, 2000x4000",
  "Thickness Range: 0.5 mm to 100 mm",
  "No.1, 2B, BA, No.4, HL, Mirror Finishes",
  "Mill Edge & Slit Edge Supply",
  "Custom Cut-to-Length & Precision Shearing",
  "Titanium Sheets Supplier in Mumbai",
];

const searchTerms = [
  "Titanium Grade 2 Sheet Price Per Kg",
  "Titanium Sheet Weight Chart",
  "Titanium Sheet Supplier In India",
  "Titanium Grade 5 Sheet Specifications",
  "Titanium Grade 7 Sheet Price In Mumbai",
  "Titanium Sheet Dimensions",
  "ASTM B265 Titanium Sheet Specifications",
  "Titanium Sheet Price List",
  "Titanium Sheet Weight Calculator",
  "Titanium Sheet Mechanical Properties",
  "Titanium Sheet Stockist",
  "Titanium Sheet Equivalent Grades",
  "Titanium Sheet Price Per Kg In India",
  "Titanium Sheet Exporter",
  "Titanium Coil Supplier",
  "Titanium Sheet Manufacturers In Mumbai",
  "Buy Titanium Sheets In India",
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

const TitaniumSheetsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Titanium Sheets Supplier – Grade 1, 2, 5, 7, 9, 12 Sheets & Coils</title>
        <meta
          name="description"
          content="Leading supplier of Titanium sheets (Grades 1, 2, 5, 7, 9, 12) in coils, strips, circles, and custom sizes. Lightweight, corrosion-resistant, biocompatible. ASTM B265 compliant."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="TITANIUM SHEETS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>TITANIUM SHEETS SUPPLIER – GRADES 1, 2, 5, 7, 9, 12 – COILS, STRIPS, CIRCLES</h1>
            </div>
            <div className="content-image">
              <img src={titanium} alt="Titanium Sheets" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>TITANIUM SHEETS – LIGHTWEIGHT, CORROSION-RESISTANT, AND EXTREMELY STRONG</h2>
              <p>
                Our comprehensive range of <strong>Titanium Sheets</strong> covers a wide spectrum of grades, from commercially pure titanium (Grades 1, 2, 7, 12) to high-strength alpha-beta alloys (Grades 5, 9). Titanium offers an exceptional combination of properties: a <strong>high strength-to-weight ratio</strong>, outstanding resistance to seawater, chlorides, and oxidizing acids, excellent biocompatibility, and a high melting point. This makes titanium the preferred material for the most demanding engineering applications across aerospace, marine, chemical processing, medical, and power generation industries.
              </p>
              <hr />
              <h3>COLD ROLLED & HOT ROLLED TITANIUM SHEETS</h3>
              <p>
                We supply Titanium sheets in <strong>cold rolled</strong> and <strong>hot rolled</strong> conditions, available from 0.5 mm to 100 mm thickness, widths up to 2500 mm, and lengths up to 6000 mm. Our inventory includes annealed, stress-relieved, and solution-treated sheets to meet the stringent demands of structural, pressure vessel, and precision component fabrication.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Titanium sheets are the material of choice for critical applications in <strong>aerospace</strong> (airframes, engine components), <strong>marine engineering</strong> (propellers, shafts, heat exchangers), <strong>chemical processing</strong> (reactors, vessels, piping), <strong>power generation</strong> (condensers), and <strong>medical implants</strong>. The unique combination of low density (4.51 g/cm³) and high strength ensures significant weight savings without compromising structural integrity.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Titanium sheets are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B265, ASME SB265</strong>. We provide comprehensive mill test certificates, PMI reports, ultrasonic inspection, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Titanium Sheets</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B265 / ASME SB265</p>
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
                <h2>READY STOCK AVAILABILITY – TITANIUM SHEETS</h2>
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
                <h2>EQUIVALENT GRADES: TITANIUM</h2>
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
                <h2>CHEMICAL COMPOSITION OF TITANIUM SHEETS</h2>
              </div>
              <div className="table-responsive">
                <table className="chemical-table">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>N</th>
                      <th>C</th>
                      <th>H</th>
                      <th>Fe</th>
                      <th>O</th>
                      <th>Ti</th>
                      <th>Al</th>
                      <th>V</th>
                      <th>Other</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalData.map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.grade}</strong></td>
                        <td>{item.n}</td>
                        <td>{item.c}</td>
                        <td>{item.h}</td>
                        <td>{item.fe}</td>
                        <td>{item.o}</td>
                        <td>{item.ti}</td>
                        <td>{item.al}</td>
                        <td>{item.v}</td>
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
                <h2>MECHANICAL PROPERTIES OF TITANIUM SHEETS</h2>
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
                  THICKNESS RANGE AVAILABILITY: TITANIUM SHEETS
                  <span>(ASTM B265 / ASME SB265)</span>
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
                <h2>UNIFIED WEIGHT CHART: TITANIUM SHEETS</h2>
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
                <h2>TITANIUM SHEET SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED TITANIUM SHEET PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING TITANIUM SHEETS</h2>
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
                <h2>SEARCHES RELATED TO TITANIUM SHEETS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING TITANIUM SHEETS</h2>
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
                  <h2>SEARCHES RELATED TO TITANIUM SHEETS</h2>
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
            <p>Immediate pricing for Titanium sheets. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TitaniumSheetsDetails;