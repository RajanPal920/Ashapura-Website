import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import specialHR from "../../products-image/ss-hr-roundbars.webp";
import specialCD from "../../products-image/ss-cr-roundbars.webp";
import specialSpecialty from "../../products-image/ss-special-roundbars.webp";

import specialBars from "../../products-image/ss-special-alloy-roundbars.webp";

import "./Productsdetails.css";

const stockData = [
  {
    title: "ALLOY 20 HOT ROLLED ROUND BARS",
    image: specialHR,
    items: [
      "Alloy 20 (Carpenter 20) Hot Rolled Round Bars",
      "ASTM B473 / ASME SB473",
      "UNS N08020 / 2.4660",
      "Black / Rough Turned Finish – For Heavy Machining",
    ],
  },
  {
    title: "ALLOY 20 COLD DRAWN ROUND BARS",
    image: specialCD,
    items: [
      "Alloy 20 (Carpenter 20) Cold Drawn Round Bars",
      "ASTM B473 / ASME SB473",
      "Precision Diameter Tolerances",
      "Bright / Polished Finish – For Precision Components",
    ],
  },
  {
    title: "ALLOY 20 SPECIALTY BARS (HEX / SQUARE / THREADED)",
    image: specialSpecialty,
    items: [
      "Alloy 20 Specialty Profiles",
      "Ni-Cr-Fe-Cu-Mo Alloy for Sulfuric Acid Resistance",
      "Hexagonal, Square, Threaded Profiles",
      "For Chemical Processing, Petrochemical, & Pharmaceutical Industries",
    ],
  },
];

const gradesData = [
  {
    grade: "Alloy 20 (Carpenter 20)",
    uns: "N08020",
    werkstoff: "2.4660",
    standard: "ASTM B473 / ASME SB473",
  }
];

const chemicalData = [
  {
    grade: "Alloy 20 (Carpenter 20)",
    c: "0.07 max",
    mn: "2.0 max",
    si: "1.0 max",
    cr: "19.0 – 21.0",
    ni: "32.0 – 38.0",
    mo: "2.0 – 3.0",
    other: "Cu: 3.0-4.0, Nb+Ta: 0.8-1.0, Fe: Balance, S: 0.035 max, P: 0.045 max",
  }
];

const mechanicalData = [
  {
    grade: "Alloy 20 (Carpenter 20)",
    tensile: "620 MPa (min)",
    yield: "300 MPa (min)",
    elongation: "30%",
    density: "8.08 g/cm³",
  }
];

const leftDiameters = [
  "3 mm",
  "5 mm",
  "8 mm",
  "10 mm",
  "12 mm",
  "16 mm",
  "20 mm",
  "25 mm",
];

const rightDiameters = [
  "30 mm",
  "40 mm",
  "50 mm",
  "60 mm",
  "80 mm",
  "100 mm",
  "150 mm",
  "200 mm",
];

// Weight per meter (kg/m) for Alloy 20 (Density 8.08 g/cm³)
const leftBarsData = [
  { size: "10 mm Ø", weight: "0.635" },
  { size: "12 mm Ø", weight: "0.914" },
  { size: "16 mm Ø", weight: "1.624" },
  { size: "20 mm Ø", weight: "2.538" },
  { size: "25 mm Ø", weight: "3.965" },
  { size: "30 mm Ø", weight: "5.710" },
];

const rightBarsData = [
  { size: "40 mm Ø", weight: "10.152" },
  { size: "50 mm Ø", weight: "15.862" },
  { size: "60 mm Ø", weight: "22.842" },
  { size: "80 mm Ø", weight: "40.608" },
  { size: "100 mm Ø", weight: "63.450" },
  { size: "—", weight: "—" },
];

const leftBarsDataNew = [
  { size: "10 mm Ø x 1m", weight: "0.64" },
  { size: "10 mm Ø x 3m", weight: "1.91" },
  { size: "16 mm Ø x 1m", weight: "1.62" },
  { size: "16 mm Ø x 3m", weight: "4.87" },
  { size: "20 mm Ø x 1m", weight: "2.54" },
  { size: "20 mm Ø x 3m", weight: "7.61" },
  { size: "25 mm Ø x 1m", weight: "3.97" },
  { size: "25 mm Ø x 3m", weight: "11.90" },
  { size: "30 mm Ø x 1m", weight: "5.71" },
  { size: "30 mm Ø x 3m", weight: "17.13" },
  { size: "40 mm Ø x 1m", weight: "10.15" },
  { size: "40 mm Ø x 3m", weight: "30.46" },
];

const rightBarsDataNew = [
  { size: "50 mm Ø x 1m", weight: "15.86" },
  { size: "50 mm Ø x 3m", weight: "47.59" },
  { size: "60 mm Ø x 1m", weight: "22.84" },
  { size: "60 mm Ø x 3m", weight: "68.53" },
  { size: "80 mm Ø x 1m", weight: "40.61" },
  { size: "80 mm Ø x 3m", weight: "121.82" },
  { size: "100 mm Ø x 1m", weight: "63.45" },
  { size: "100 mm Ø x 3m", weight: "190.35" },
  { size: "120 mm Ø x 1m", weight: "91.37" },
  { size: "120 mm Ø x 3m", weight: "274.11" },
  { size: "—", weight: "—" },
  { size: "—", weight: "—" },
];

const gaugeData = [
  { gauge: "5", inches: "0.206", mm: "5.23" },
  { gauge: "6", inches: "0.250", mm: "6.35" },
  { gauge: "8", inches: "0.312", mm: "7.92" },
  { gauge: "10", inches: "0.375", mm: "9.52" },
  { gauge: "12", inches: "0.437", mm: "11.10" },
  { gauge: "14", inches: "0.500", mm: "12.70" },
  { gauge: "16", inches: "0.562", mm: "14.28" },
  { gauge: "18", inches: "0.625", mm: "15.87" },
  { gauge: "20", inches: "0.750", mm: "19.05" },
  { gauge: "22", inches: "0.875", mm: "22.22" },
  { gauge: "24", inches: "1.000", mm: "25.40" },
  { gauge: "30", inches: "1.250", mm: "31.75" },
];

const specialtyData = [
  { thickness: "10", weightPerM2: "0.635", size2000: "0.64", size2500: "1.91", size3000: "3.81" },
  { thickness: "20", weightPerM2: "2.538", size2000: "2.54", size2500: "7.61", size3000: "15.23" },
  { thickness: "30", weightPerM2: "5.710", size2000: "5.71", size2500: "17.13", size3000: "34.26" },
  { thickness: "40", weightPerM2: "10.152", size2000: "10.15", size2500: "30.46", size3000: "60.91" },
  { thickness: "50", weightPerM2: "15.862", size2000: "15.86", size2500: "47.59", size3000: "95.17" },
  { thickness: "60", weightPerM2: "22.842", size2000: "22.84", size2500: "68.53", size3000: "137.05" },
  { thickness: "80", weightPerM2: "40.608", size2000: "40.61", size2500: "121.82", size3000: "243.65" },
  { thickness: "100", weightPerM2: "63.450", size2000: "63.45", size2500: "190.35", size3000: "380.70" },
  { thickness: "120", weightPerM2: "91.368", size2000: "91.37", size2500: "274.10", size3000: "548.21" },
];

const toleranceData = [
  { thickness: "3 to 6 (0.118 – 0.236)", upTo36: "±0.05 (0.002)", upTo48: "±0.08 (0.003)" },
  { thickness: "6 to 12 (0.236 – 0.472)", upTo36: "±0.10 (0.004)", upTo48: "±0.13 (0.005)" },
  { thickness: "12 to 25 (0.472 – 0.984)", upTo36: "±0.13 (0.005)", upTo48: "±0.20 (0.008)" },
  { thickness: "25 to 50 (0.984 – 1.968)", upTo36: "±0.20 (0.008)", upTo48: "±0.30 (0.012)" },
  { thickness: "50 to 100 (1.968 – 3.937)", upTo36: "±0.30 (0.012)", upTo48: "±0.50 (0.020)" },
  { thickness: "100 to 200 (3.937 – 7.874)", upTo36: "±0.50 (0.020)", upTo48: "±0.80 (0.031)" },
  { thickness: "200 to 300 (7.874 – 11.811)", upTo36: "±0.80 (0.031)", upTo48: "±1.20 (0.047)" },
];

const leftItems = [
  "Hot Rolled & Cold Drawn Alloy 20 Round Bars",
  "ASTM B473 / ASME SB473 Compliant",
  "Exceptional Resistance to Sulfuric & Phosphoric Acids",
  "Excellent Stress Corrosion Cracking (SCC) Resistance",
  "Stabilized with Nb+Ta to Prevent Sensitization",
  "Alloy 20 Round Bars Manufacturer in India",
];

const rightItems = [
  "ASTM B473 / SB473 Alloy 20 (Carpenter 20) Bars",
  "Standard Diameters: 3 mm to 300 mm",
  "Lengths: 1m, 3m, 6m, Custom Cut-to-Length",
  "Black, Bright, Polished, Peeled Finishes",
  "Round, Hexagonal, Square, Threaded Profiles",
  "Precision Cold Drawn Tolerances",
  "Alloy 20 Round Bars Supplier in Mumbai",
];

const searchTerms = [
  "Alloy 20 Round Bar Price Per Kg",
  "Alloy 20 Round Bar Weight Chart",
  "UNS N08020 Round Bar Supplier In India",
  "Carpenter 20 Bar Chemical Composition",
  "Alloy 20 Round Bar Price In Mumbai",
  "Alloy 20 Round Bar Dimensions",
  "ASTM B473 Alloy 20 Bar Specifications",
  "Alloy 20 Sulfuric Acid Resistance",
  "Alloy 20 Round Bar Price List",
  "Alloy 20 Round Bar Weight Calculator",
  "Alloy 20 Mechanical Properties",
  "Alloy 20 Bar Stockist",
  "Alloy 20 Round Bar Heat Treatment",
  "Alloy 20 Price Per Kg In India",
  "Alloy 20 2.4660 Round Bar",
  "Alloy 20 Round Bars Manufacturers In Mumbai",
  "Buy Special Alloy 20 Round Bars In India",
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
  { name: "Titanium", link: "/materials/titanium" }
];

const SpecialRoundBarsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Special Alloy Round Bars Supplier – UNS N08020 Alloy 20 Bars</title>
        <meta
          name="description"
          content="Supplier of Special Alloy 20 round bars (UNS N08020, 2.4660) with exceptional resistance to sulfuric acid, phosphoric acid, and chloride stress corrosion cracking. Hot rolled, cold drawn, polished bars available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="SPECIAL ALLOY ROUND BARS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>SPECIAL ALLOY ROUND BARS SUPPLIER – UNS N08020 ALLOY 20 (CARPENTER 20) BARS</h1>
            </div>
            <div className="content-image">
              <img src={specialBars} alt="Special Alloy Round Bars" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>SPECIAL ALLOY ROUND BARS: EXCEPTIONAL RESISTANCE TO SULFURIC ACID & CHLORIDE SCC</h2>
              <p>Alloy 20 (Carpenter 20 / UNS N08020) is a nickel‑iron‑chromium alloy stabilized with niobium (columbium) and tantalum, designed specifically to offer outstanding resistance to sulfuric acid and phosphoric acid. With a high nickel content (32‑38%) and additions of chromium (19‑21%), molybdenum (2‑3%), and copper (3‑4%), this special alloy provides excellent resistance to chloride‑induced stress corrosion cracking (SCC) and pitting. The Nb+Ta stabilization prevents carbide precipitation during welding, ensuring robust performance in the most demanding chemical processing, petrochemical, and pharmaceutical applications.</p>
              <hr />
              <h3>KEY FEATURES OF ALLOY 20 ROUND BARS</h3>
              <p><strong>Superior Acid Resistance</strong> – Outstanding performance in concentrated sulfuric acid, phosphoric acid, and mixed acids at elevated temperatures.</p>
              <p><strong>Excellent SCC & Pitting Resistance</strong> – High nickel and copper content provide exceptional resistance to chloride stress corrosion cracking and pitting/crevice corrosion.</p>
              <p><strong>Stabilized & Weldable</strong> – Niobium (Nb) and tantalum (Ta) addition prevents intergranular corrosion during welding, maintaining mechanical integrity.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Alloy 20 round bars conform to international standards including <strong>ASTM B473 / ASME SB473</strong> (standard specification for nickel‑chromium‑iron‑molybdenum‑copper‑columbium‑tantalum alloy bars and billets). We supply bars in various finishes (Black, Bright, Polished, Peeled) and can custom‑cut to your exact lengths.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Alloy 20 Round Bars</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B473 / ASME SB473</p>
              </div>
              <div className="spec-card">
                <h4>Diameter Range</h4>
                <p>3 mm – 300 mm</p>
              </div>
              <div className="spec-card">
                <h4>Length</h4>
                <p>1m, 3m, 6m, Custom up to 6m</p>
              </div>
              <div className="spec-card">
                <h4>Finish</h4>
                <p>Black, Bright, Polished, Peeled</p>
              </div>
              <div className="spec-card">
                <h4>Form</h4>
                <p>Round, Hexagonal, Square, Threaded</p>
              </div>
              <div className="spec-card">
                <h4>Density</h4>
                <p>8.08 g/cm³</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – ALLOY 20 ROUND BARS</h2>
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
                <h2>EQUIVALENT GRADES: ALLOY 20 (SPECIAL ALLOY)</h2>
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
                <h2>CHEMICAL COMPOSITION OF ALLOY 20 ROUND BARS</h2>
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
                <h2>MECHANICAL PROPERTIES OF ALLOY 20 ROUND BARS</h2>
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
                  DIAMETER RANGE AVAILABILITY: ALLOY 20 ROUND BARS
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
                    {leftDiameters.map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td className="available">
                          <i className="fa-solid fa-check"></i>
                        </td>
                        <td>{rightDiameters[index]}</td>
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
                <h2>UNIFIED WEIGHT CHART: ALLOY 20 ROUND BARS (Per Meter)</h2>
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
                    {leftBarsData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.size}</td>
                        <td>{item.weight}</td>
                        <td>{rightBarsData[index].size}</td>
                        <td>{rightBarsData[index].weight}</td>
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
                <h2>ALLOY 20 ROUND BAR SUPPLY RANGE (UNIFIED – 1m & 3m Lengths)</h2>
                <p>Applicable for: All standard diameters and custom cut-to-length dimensions</p>
              </div>
              <div className="table-responsive">
                <table className="finish-weight-table">
                  <thead>
                    <tr>
                      <th>Size (Ø x Length)</th>
                      <th>Weight (kg)</th>
                      <th>Size (Ø x Length)</th>
                      <th>Weight (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leftBarsDataNew.map((item, index) => (
                      <tr key={index}>
                        <td>{item.size}</td>
                        <td>{item.weight}</td>
                        <td>{rightBarsDataNew[index].size}</td>
                        <td>{rightBarsDataNew[index].weight}</td>
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
                <h2>UNIFIED ALLOY 20 ROUND BAR PRICE RANGE (By Gauge)</h2>
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
                <h2>SPECIALIZED IN FOLLOWING ALLOY 20 ROUND BARS</h2>
              </div>
              <div className="table-responsive">
                <table className="specialty-weight-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Diameter (mm)</th>
                      <th rowSpan="2">Weight Kg/M</th>
                      <th colSpan="3">Weight per Standard Length (Kg)</th>
                    </tr>
                    <tr>
                      <th>1 Meter</th>
                      <th>3 Meter</th>
                      <th>6 Meter</th>
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
                <h2>DIAMETER TOLERANCE – ALLOY 20 ROUND BARS (ASTM B473)</h2>
              </div>
              <div className="table-responsive">
                <table className="tolerance-table">
                  <thead>
                    <tr>
                      <th rowSpan="2">Diameter in. (mm)</th>
                      <th colSpan="2">Diameter Tolerance in. (mm)</th>
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
                <h2>SPECIALIZED IN FOLLOWING ALLOY 20 ROUND BARS</h2>
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
                  <h2>SEARCHES RELATED TO ALLOY 20 ROUND BARS</h2>
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

export default SpecialRoundBarsDetails;