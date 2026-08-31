import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import copperHR from "../../products-image/ss-hr-copper-roundbars.webp";
import copperCD from "../../products-image/ss-cr-copper-roundbars.webp";
import copperSpecialty from "../../products-image/ss-special-copper-roundbars.webp";

import copperBars from "../../products-image/ss-copper-nickel-roundbars.webp";

import "./Productsdetails.css";

const stockData = [
  {
    title: "COPPER NICKEL 90/10 HOT ROLLED ROUND BARS",
    image: copperHR,
    items: [
      "Copper Nickel 90/10 Hot Rolled Round Bars",
      "ASTM B151 / ASME SB151",
      "UNS C70600 / 2.0872",
      "Black / Rough Turned Finish – For Heavy Machining",
    ],
  },
  {
    title: "COPPER NICKEL 90/10 COLD DRAWN ROUND BARS",
    image: copperCD,
    items: [
      "Copper Nickel 90/10 Cold Drawn Round Bars",
      "ASTM B151 / ASME SB151",
      "Precision Diameter Tolerances",
      "Bright / Polished Finish – For Precision Components",
    ],
  },
  {
    title: "COPPER NICKEL 90/10 & 70/30 SPECIALTY BARS",
    image: copperSpecialty,
    items: [
      "Copper Nickel 90/10 & 70/30 Specialty Profiles",
      "Cu-Ni Alloys for Marine & Offshore Applications",
      "Hexagonal, Square, Threaded Profiles",
      "For Shipbuilding, Desalination, & Chemical Processing",
    ],
  },
];

const gradesData = [
  {
    grade: "Copper Nickel 90/10",
    uns: "C70600",
    werkstoff: "2.0872",
    standard: "ASTM B151 / ASME SB151",
  },
  {
    grade: "Copper Nickel 70/30",
    uns: "C71500",
    werkstoff: "2.0882",
    standard: "ASTM B151 / ASME SB151",
  },
];

const chemicalData = [
  {
    grade: "Copper Nickel 90/10",
    c: "—",
    mn: "1.0 max",
    si: "—",
    cr: "—",
    ni: "9.0 – 11.0",
    mo: "—",
    other: "Cu: Balance, Fe: 1.0-1.8, Zn: 0.5 max, Pb: 0.02 max, P: 0.02 max, S: 0.02 max",
  }
];

const mechanicalData = [
  {
    grade: "Copper Nickel 90/10",
    tensile: "310 MPa (min)",
    yield: "105 MPa (min)",
    elongation: "30%",
    density: "8.94 g/cm³",
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

// Weight per meter (kg/m) for Cu-Ni 90/10 (Density 8.94 g/cm³)
const leftBarsData = [
  { size: "10 mm Ø", weight: "0.702" },
  { size: "12 mm Ø", weight: "1.011" },
  { size: "16 mm Ø", weight: "1.797" },
  { size: "20 mm Ø", weight: "2.808" },
  { size: "25 mm Ø", weight: "4.388" },
  { size: "30 mm Ø", weight: "6.317" },
];

const rightBarsData = [
  { size: "40 mm Ø", weight: "11.232" },
  { size: "50 mm Ø", weight: "17.550" },
  { size: "60 mm Ø", weight: "25.272" },
  { size: "80 mm Ø", weight: "44.928" },
  { size: "100 mm Ø", weight: "70.200" },
  { size: "—", weight: "—" },
];

const leftBarsDataNew = [
  { size: "10 mm Ø x 1m", weight: "0.70" },
  { size: "10 mm Ø x 3m", weight: "2.11" },
  { size: "16 mm Ø x 1m", weight: "1.80" },
  { size: "16 mm Ø x 3m", weight: "5.39" },
  { size: "20 mm Ø x 1m", weight: "2.81" },
  { size: "20 mm Ø x 3m", weight: "8.42" },
  { size: "25 mm Ø x 1m", weight: "4.39" },
  { size: "25 mm Ø x 3m", weight: "13.16" },
  { size: "30 mm Ø x 1m", weight: "6.32" },
  { size: "30 mm Ø x 3m", weight: "18.95" },
  { size: "40 mm Ø x 1m", weight: "11.23" },
  { size: "40 mm Ø x 3m", weight: "33.70" },
];

const rightBarsDataNew = [
  { size: "50 mm Ø x 1m", weight: "17.55" },
  { size: "50 mm Ø x 3m", weight: "52.65" },
  { size: "60 mm Ø x 1m", weight: "25.27" },
  { size: "60 mm Ø x 3m", weight: "75.82" },
  { size: "80 mm Ø x 1m", weight: "44.93" },
  { size: "80 mm Ø x 3m", weight: "134.78" },
  { size: "100 mm Ø x 1m", weight: "70.20" },
  { size: "100 mm Ø x 3m", weight: "210.60" },
  { size: "120 mm Ø x 1m", weight: "101.09" },
  { size: "120 mm Ø x 3m", weight: "303.26" },
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
  { thickness: "10", weightPerM2: "0.702", size2000: "0.70", size2500: "2.11", size3000: "4.21" },
  { thickness: "20", weightPerM2: "2.808", size2000: "2.81", size2500: "8.42", size3000: "16.85" },
  { thickness: "30", weightPerM2: "6.317", size2000: "6.32", size2500: "18.95", size3000: "37.90" },
  { thickness: "40", weightPerM2: "11.232", size2000: "11.23", size2500: "33.70", size3000: "67.39" },
  { thickness: "50", weightPerM2: "17.550", size2000: "17.55", size2500: "52.65", size3000: "105.30" },
  { thickness: "60", weightPerM2: "25.272", size2000: "25.27", size2500: "75.82", size3000: "151.63" },
  { thickness: "80", weightPerM2: "44.928", size2000: "44.93", size2500: "134.78", size3000: "269.57" },
  { thickness: "100", weightPerM2: "70.200", size2000: "70.20", size2500: "210.60", size3000: "421.20" },
  { thickness: "120", weightPerM2: "101.088", size2000: "101.09", size2500: "303.26", size3000: "606.53" },
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
  "Hot Rolled & Cold Drawn Copper Nickel 90/10 Round Bars",
  "ASTM B151 / ASME SB151 Compliant",
  "Excellent Resistance to Seawater & Marine Biofouling",
  "Superior Resistance to Chloride SCC & Pitting",
  "Good Weldability & Fabricability",
  "Copper Nickel Round Bars Manufacturer in India",
];

const rightItems = [
  "ASTM B151 / SB151 Copper Nickel 90/10 Bars",
  "Standard Diameters: 3 mm to 300 mm",
  "Lengths: 1m, 3m, 6m, Custom Cut-to-Length",
  "Black, Bright, Polished, Peeled Finishes",
  "Round, Hexagonal, Square, Threaded Profiles",
  "Precision Cold Drawn Tolerances",
  "Copper Nickel Round Bars Supplier in Mumbai",
];

const searchTerms = [
  "Copper Nickel 90/10 Round Bar Price Per Kg",
  "Copper Nickel Round Bar Weight Chart",
  "UNS C70600 Round Bar Supplier In India",
  "Copper Nickel 90/10 Chemical Composition",
  "Cu-Ni 90/10 Round Bar Price In Mumbai",
  "Copper Nickel Round Bar Dimensions",
  "ASTM B151 Cu-Ni Bar Specifications",
  "Copper Nickel Seawater Corrosion Resistance",
  "Copper Nickel 90/10 Round Bar Price List",
  "Copper Nickel Round Bar Weight Calculator",
  "Copper Nickel 90/10 Mechanical Properties",
  "Copper Nickel Bar Stockist",
  "Copper Nickel 90/10 Heat Treatment",
  "Copper Nickel 90/10 Price Per Kg In India",
  "Copper Nickel 2.0872 Round Bar",
  "Copper Nickel Round Bars Manufacturers In Mumbai",
  "Buy Copper Nickel 90/10 Round Bars In India",
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

const CopperNickelRoundBarsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Copper Nickel Round Bars Supplier – UNS C70600 Cu-Ni 90/10 Alloy Bars</title>
        <meta
          name="description"
          content="Supplier of Copper Nickel 90/10 round bars (UNS C70600, 2.0872) with exceptional seawater corrosion resistance and biofouling resistance. Hot rolled, cold drawn, polished bars available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="COPPER NICKEL ROUND BARS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>COPPER NICKEL ROUND BARS SUPPLIER – UNS C70600 Cu-Ni 90/10 ALLOY BARS</h1>
            </div>
            <div className="content-image">
              <img src={copperBars} alt="Copper Nickel Round Bars" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>COPPER NICKEL ROUND BARS: SUPERIOR SEAWATER CORROSION RESISTANCE & MARINE PERFORMANCE</h2>
              <p>Copper Nickel 90/10 (UNS C70600) is a copper‑nickel alloy with 10% nickel and 1.4% iron, specifically formulated for exceptional resistance to seawater corrosion and biofouling. The addition of nickel enhances corrosion resistance, while iron provides added strength and resistance to impingement attack. This alloy is the preferred choice for marine applications, offshore platforms, shipbuilding, desalination plants, and heat exchangers. Its excellent resistance to chloride stress corrosion cracking (SCC) and pitting ensures long‑term reliability in harsh marine environments.</p>
              <hr />
              <h3>KEY FEATURES OF COPPER NICKEL 90/10 ROUND BARS</h3>
              <p><strong>Superior Seawater Corrosion Resistance</strong> – Exceptional performance in marine environments, with resistance to pitting, crevice corrosion, and biofouling.</p>
              <p><strong>Excellent Resistance to Chloride SCC</strong> – High nickel content provides outstanding resistance to chloride‑induced stress corrosion cracking.</p>
              <p><strong>Good Weldability & Fabricability</strong> – Easily welded using standard techniques, maintaining corrosion resistance in the heat‑affected zone.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Copper Nickel 90/10 round bars conform to international standards including <strong>ASTM B151 / ASME SB151</strong> (standard specification for copper‑nickel‑zinc‑iron alloy bars). We supply bars in various finishes (Black, Bright, Polished, Peeled) and can custom‑cut to your exact lengths.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Copper Nickel 90/10 Round Bars</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B151 / ASME SB151</p>
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
                <p>8.94 g/cm³</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – COPPER NICKEL 90/10 ROUND BARS</h2>
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
                <h2>EQUIVALENT GRADES: COPPER NICKEL ROUND BARS</h2>
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
                <h2>CHEMICAL COMPOSITION OF COPPER NICKEL 90/10 ROUND BARS</h2>
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
                <h2>MECHANICAL PROPERTIES OF COPPER NICKEL 90/10 ROUND BARS</h2>
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
                  DIAMETER RANGE AVAILABILITY: COPPER NICKEL 90/10 ROUND BARS
                  <span>(ASTM B151 / SB151)</span>
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
                <h2>UNIFIED WEIGHT CHART: COPPER NICKEL 90/10 ROUND BARS (Per Meter)</h2>
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
                <h2>COPPER NICKEL 90/10 ROUND BAR SUPPLY RANGE (UNIFIED – 1m & 3m Lengths)</h2>
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
                <h2>UNIFIED COPPER NICKEL 90/10 ROUND BAR PRICE RANGE (By Gauge)</h2>
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
                <h2>SPECIALIZED IN FOLLOWING COPPER NICKEL 90/10 ROUND BARS</h2>
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
                <h2>DIAMETER TOLERANCE – COPPER NICKEL 90/10 ROUND BARS (ASTM B151)</h2>
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
                <h2>SPECIALIZED IN FOLLOWING COPPER NICKEL ROUND BARS</h2>
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
                  <h2>SEARCHES RELATED TO COPPER NICKEL ROUND BARS</h2>
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

export default CopperNickelRoundBarsDetails;