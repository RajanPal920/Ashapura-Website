import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';

import { FaBoxOpen } from 'react-icons/fa';

import titaniumHR from "../../products-image/ss-hr-roundbars.webp";
import titaniumCD from "../../products-image/ss-cr-roundbars.webp";
import titaniumSpecialty from "../../products-image/ss-special-roundbars.webp";

import titaniumBars from "../../products-image/ss-titanium-roundbars.webp";

import "./Productsdetails.css";

const stockData = [
  {
    title: "TITANIUM GRADE 5 HOT ROLLED ROUND BARS",
    image: titaniumHR,
    items: [
      "Titanium Grade 5 Hot Rolled Round Bars",
      "ASTM B348 / ASME SB348",
      "UNS R56400 / 3.7165",
      "Black / Rough Turned Finish – For Heavy Machining",
    ],
  },
  {
    title: "TITANIUM GRADE 5 COLD DRAWN ROUND BARS",
    image: titaniumCD,
    items: [
      "Titanium Grade 5 Cold Drawn Round Bars",
      "ASTM B348 / ASME SB348",
      "Precision Diameter Tolerances",
      "Bright / Polished Finish – For Precision Components",
    ],
  },
  {
    title: "TITANIUM SPECIALTY BARS (HEX / SQUARE / THREADED)",
    image: titaniumSpecialty,
    items: [
      "Titanium Grade 5 & Grade 2 Specialty Bars",
      "High Strength-to-Weight Ratio",
      "Hexagonal, Square, Threaded Profiles",
      "For Aerospace, Medical, & Marine Applications",
    ],
  },
];

const gradesData = [
  {
    grade: "Titanium Gr.5 (Ti-6Al-4V)",
    uns: "R56400",
    werkstoff: "3.7165",
    standard: "ASTM B348 / ASME SB348",
  },
  {
    grade: "Titanium Gr.2 (Commercially Pure)",
    uns: "R50400",
    werkstoff: "3.7035",
    standard: "ASTM B348 / ASME SB348",
  }
];

const chemicalData = [
  {
    grade: "Titanium Gr.5 (Ti-6Al-4V)",
    c: "0.08 max",
    mn: "—",
    si: "—",
    cr: "—",
    ni: "—",
    mo: "—",
    other: "Al: 5.5-6.75, V: 3.5-4.5, Fe: 0.4 max, O: 0.2 max, N: 0.05 max, H: 0.015 max, Ti: Balance",
  }
];

const mechanicalData = [
  {
    grade: "Titanium Gr.5 (Ti-6Al-4V)",
    tensile: "895 MPa (min)",
    yield: "830 MPa (min)",
    elongation: "10%",
    density: "4.43 g/cm³",
  }
];

const leftDiameters = [
  "3 mm",
  "5 mm",
  "8 mm",
  "10 mm",
  "12 mm",
  "15 mm",
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
  "120 mm",
  "150 mm / 200 mm",
];

// Weight per meter (kg/m) for Grade 5 Titanium (Density 4.43 g/cm³)
const leftBarsData = [
  { size: "10 mm Ø", weight: "0.348" },
  { size: "12 mm Ø", weight: "0.501" },
  { size: "15 mm Ø", weight: "0.783" },
  { size: "20 mm Ø", weight: "1.392" },
  { size: "25 mm Ø", weight: "2.175" },
  { size: "30 mm Ø", weight: "3.132" },
];

const rightBarsData = [
  { size: "40 mm Ø", weight: "5.568" },
  { size: "50 mm Ø", weight: "8.700" },
  { size: "60 mm Ø", weight: "12.528" },
  { size: "80 mm Ø", weight: "22.272" },
  { size: "100 mm Ø", weight: "34.800" },
  { size: "—", weight: "—" },
];

const leftBarsDataNew = [
  { size: "10 mm Ø x 1m", weight: "0.35" },
  { size: "10 mm Ø x 3m", weight: "1.04" },
  { size: "16 mm Ø x 1m", weight: "0.89" },
  { size: "16 mm Ø x 3m", weight: "2.67" },
  { size: "20 mm Ø x 1m", weight: "1.39" },
  { size: "20 mm Ø x 3m", weight: "4.18" },
  { size: "25 mm Ø x 1m", weight: "2.18" },
  { size: "25 mm Ø x 3m", weight: "6.53" },
  { size: "32 mm Ø x 1m", weight: "3.56" },
  { size: "32 mm Ø x 3m", weight: "10.69" },
  { size: "40 mm Ø x 1m", weight: "5.57" },
  { size: "40 mm Ø x 3m", weight: "16.70" },
];

const rightBarsDataNew = [
  { size: "50 mm Ø x 1m", weight: "8.70" },
  { size: "50 mm Ø x 3m", weight: "26.10" },
  { size: "60 mm Ø x 1m", weight: "12.53" },
  { size: "60 mm Ø x 3m", weight: "37.58" },
  { size: "80 mm Ø x 1m", weight: "22.27" },
  { size: "80 mm Ø x 3m", weight: "66.82" },
  { size: "100 mm Ø x 1m", weight: "34.80" },
  { size: "100 mm Ø x 3m", weight: "104.40" },
  { size: "120 mm Ø x 1m", weight: "50.11" },
  { size: "120 mm Ø x 3m", weight: "150.34" },
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
  { thickness: "10", weightPerM2: "0.348", size2000: "3.48", size2500: "8.70", size3000: "10.44" },
  { thickness: "20", weightPerM2: "1.392", size2000: "13.92", size2500: "34.80", size3000: "41.76" },
  { thickness: "30", weightPerM2: "3.132", size2000: "31.32", size2500: "78.30", size3000: "93.96" },
  { thickness: "40", weightPerM2: "5.568", size2000: "55.68", size2500: "139.20", size3000: "167.04" },
  { thickness: "50", weightPerM2: "8.700", size2000: "87.00", size2500: "217.50", size3000: "261.00" },
  { thickness: "60", weightPerM2: "12.528", size2000: "125.28", size2500: "313.20", size3000: "375.84" },
  { thickness: "80", weightPerM2: "22.272", size2000: "222.72", size2500: "556.80", size3000: "668.16" },
  { thickness: "100", weightPerM2: "34.800", size2000: "348.00", size2500: "870.00", size3000: "1044.00" },
  { thickness: "120", weightPerM2: "50.112", size2000: "501.12", size2500: "1252.80", size3000: "1503.36" },
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
  "Hot Rolled & Cold Drawn Titanium Grade 5 Round Bars",
  "ASTM B348 / ASME SB348 Compliant",
  "High Strength-to-Weight Ratio (895 MPa Tensile)",
  "Excellent Corrosion Resistance in Chloride & Seawater",
  "Biocompatible – Ideal for Medical Implants",
  "Titanium Round Bars Manufacturer in India",
];

const rightItems = [
  "ASTM B348 / SB348 Titanium Grade 5 Bars",
  "Standard Diameters: 3 mm to 300 mm",
  "Lengths: 1m, 3m, 6m, Custom Cut-to-Length",
  "Black, Bright, Polished, Peeled Finishes",
  "Round, Hexagonal, Square, Threaded Profiles",
  "Precision Cold Drawn Tolerances",
  "Titanium Round Bars Supplier in Mumbai",
];

const searchTerms = [
  "Titanium Round Bar Price Per Kg",
  "Titanium Grade 5 Round Bar Weight Chart",
  "Ti-6Al-4V Round Bar Supplier In India",
  "UNS R56400 Chemical Composition",
  "Titanium Round Bar Price In Mumbai",
  "Titanium Grade 5 Bar Dimensions",
  "ASTM B348 Titanium Bar Specifications",
  "Titanium Round Bar Corrosion Resistance",
  "Titanium Round Bar Price List",
  "Titanium Round Bar Weight Calculator",
  "Titanium Grade 5 Mechanical Properties",
  "Titanium Bar Stockist",
  "Titanium Round Bar Heat Treatment",
  "Titanium Grade 5 Price Per Kg In India",
  "Titanium 3.7165 Round Bar",
  "Titanium Round Bars Manufacturers In Mumbai",
  "Buy Titanium Round Bars In India",
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

const TitaniumRoundBarsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Titanium Round Bars Supplier – UNS R56400 Ti-6Al-4V Alloy Bars</title>
        <meta
          name="description"
          content="Supplier of Titanium Grade 5 round bars (UNS R56400, 3.7165) with exceptional strength-to-weight ratio, corrosion resistance, and biocompatibility. Hot rolled, cold drawn, polished bars available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="TITANIUM ROUND BARS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>TITANIUM ROUND BARS SUPPLIER – UNS R56400 Ti-6Al-4V ALLOY BARS</h1>
            </div>
            <div className="content-image">
              <img src={titaniumBars} alt="Titanium Round Bars" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>TITANIUM ROUND BARS: UNMATCHED STRENGTH, LOW WEIGHT & EXCEPTIONAL CORROSION RESISTANCE</h2>
              <p>Titanium Grade 5 (Ti-6Al-4V / UNS R56400) is the most widely used titanium alloy, combining outstanding mechanical strength with a low density of 4.43 g/cm³. With an addition of 6% aluminum and 4% vanadium, this alloy offers a high strength-to-weight ratio, excellent resistance to seawater and chloride environments, and superior biocompatibility for medical implants. It maintains its mechanical properties at elevated temperatures up to 400°C and provides exceptional resistance to pitting, crevice corrosion, and stress corrosion cracking in aggressive chemical and marine environments.</p>
              <hr />
              <h3>KEY FEATURES OF TITANIUM GRADE 5 ROUND BARS</h3>
              <p><strong>High Strength-to-Weight Ratio</strong> – Tensile strength of 895 MPa with a density just 60% of steel, ideal for aerospace and structural applications.</p>
              <p><strong>Superior Corrosion Resistance</strong> – Excellent resistance to seawater, chlorides, and a wide range of oxidizing acids.</p>
              <p><strong>Excellent Biocompatibility</strong> – Non-toxic and biocompatible, making it the preferred material for orthopedic and dental implants.</p>
              <hr />
              <h3>SPECIFICATIONS & STANDARDS</h3>
              <p>Our Titanium Grade 5 round bars conform to international standards including <strong>ASTM B348 / ASME SB348</strong> (standard specification for titanium and titanium alloy bars and billets). We supply bars in various finishes (Black, Bright, Polished, Peeled) and can custom-cut to your exact lengths.</p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Titanium Grade 5 Round Bars</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B348 / ASME SB348</p>
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
                <p>4.43 g/cm³</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY – TITANIUM GRADE 5 ROUND BARS</h2>
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
                <h2>EQUIVALENT GRADES: TITANIUM ROUND BARS</h2>
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
                <h2>CHEMICAL COMPOSITION OF TITANIUM GRADE 5 ROUND BARS</h2>
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
                <h2>MECHANICAL PROPERTIES OF TITANIUM GRADE 5 ROUND BARS</h2>
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
                  DIAMETER RANGE AVAILABILITY: TITANIUM GRADE 5 ROUND BARS
                  <span>(ASTM B348 / SB348)</span>
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
                <h2>UNIFIED WEIGHT CHART: TITANIUM ROUND BARS (Per Meter)</h2>
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
                <h2>TITANIUM ROUND BAR SUPPLY RANGE (UNIFIED – 1m & 3m Lengths)</h2>
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
                <h2>UNIFIED TITANIUM ROUND BAR PRICE RANGE (By Gauge)</h2>
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
                <h2>SPECIALIZED IN FOLLOWING TITANIUM GRADE 5 ROUND BARS</h2>
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
                <h2>DIAMETER TOLERANCE – TITANIUM ROUND BARS (ASTM B348)</h2>
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
                <h2>SPECIALIZED IN FOLLOWING TITANIUM ROUND BARS</h2>
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
                  <h2>SEARCHES RELATED TO TITANIUM ROUND BARS</h2>
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

export default TitaniumRoundBarsDetails;