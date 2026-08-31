import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Copper Nickel Sheets product images
import cuNiHRSheets from "../../products-image/ss-hr-copper-sheets.webp";
import cuNiCRSheets from "../../products-image/ss-cr-copper-sheets.webp";
import cuNiCoils from "../../products-image/ss-perforated-copper-sheets.webp";


import copperNickel from "../../products-image/ss-copper-nickel-sheets.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "CU-NI 90/10 HOT ROLLED SHEETS",
    image: cuNiHRSheets,
    items: [
      "Cu-Ni 90/10 Hot Rolled Sheets (ASTM B122)",
      "UNS C70600 / 2.0872",
      "No.1 Finish – Marine & Offshore Fabrication",
      "Excellent Resistance to Seawater & Biofouling",
    ],
  },
  {
    title: "CU-NI 70/30 COLD ROLLED SHEETS",
    image: cuNiCRSheets,
    items: [
      "Cu-Ni 70/30 Cold Rolled Sheets (ASTM B122)",
      "UNS C71500 / 2.0882",
      "Precision Thickness Tolerances",
      "2B, BA, No.4, Mirror Finishes",
    ],
  },
  {
    title: "CU-NI 90/10 & 70/30 COILS & STRIPS",
    image: cuNiCoils,
    items: [
      "Cu-Ni 90/10 & 70/30 Coils (ASTM B122)",
      "Cu-Ni Strips & Foils",
      "Precision Slit Edges",
      "For Heat Exchangers & Fabrication",
    ],
  },
  
];

const gradesData = [
  { grade: "Copper Nickel 90/10", uns: "C70600", werkstoff: "2.0872", standard: "ASTM B122 / ASME SB122" },
  { grade: "Copper Nickel 70/30", uns: "C71500", werkstoff: "2.0882", standard: "ASTM B122 / ASME SB122" },
];

const chemicalData = [
  { grade: "Cu-Ni 90/10 (C70600)", c: "—", mn: "1.0 max", si: "—", cr: "—", ni: "9.0-11.0", mo: "—", other: "Cu: Balance, Fe: 1.0-1.8, Zn: 1.0 max, Pb: 0.02 max" },
  { grade: "Cu-Ni 70/30 (C71500)", c: "—", mn: "1.0 max", si: "—", cr: "—", ni: "29.0-33.0", mo: "—", other: "Cu: Balance, Fe: 0.4-1.0, Zn: 1.0 max, Pb: 0.02 max" },
];

const mechanicalData = [
  { grade: "Cu-Ni 90/10 (C70600)", tensile: "310 MPa (45 ksi) min", yield: "110 MPa (16 ksi) min", elongation: "30%", density: "8.94 g/cm³" },
  { grade: "Cu-Ni 70/30 (C71500)", tensile: "370 MPa (54 ksi) min", yield: "130 MPa (19 ksi) min", elongation: "30%", density: "8.95 g/cm³" },
];

// Thickness and weight charts for sheets (density ~8.94 g/cm³)
const leftThickness = [
  "0.5 mm", "1.0 mm", "1.5 mm", "2.0 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm",
];
const rightThickness = [
  "8.0 mm", "10.0 mm", "12.0 mm", "16.0 mm", "20.0 mm", "25.0 mm", "50.0 mm", "100.0 mm",
];

// Approx weights for Cu-Ni sheets (density ~8.94 g/cm³)
const leftData = [
  { size: "2000 × 1000 × 2.0", weight: "35.8" },
  { size: "2500 × 1250 × 3.0", weight: "83.8" },
  { size: "3000 × 1500 × 4.0", weight: "160.9" },
  { size: "2000 × 1000 × 5.0", weight: "89.4" },
  { size: "2500 × 1250 × 6.0", weight: "167.6" },
  { size: "3000 × 1500 × 8.0", weight: "321.8" },
];
const rightData = [
  { size: "2000 × 1000 × 10.0", weight: "178.8" },
  { size: "2500 × 1250 × 12.0", weight: "335.3" },
  { size: "3000 × 1500 × 16.0", weight: "643.7" },
  { size: "2000 × 1000 × 20.0", weight: "357.6" },
  { size: "2500 × 1250 × 25.0", weight: "698.4" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "2000 × 1000 × 1.0", weight: "17.9" },
  { size: "2500 × 1250 × 1.5", weight: "41.9" },
  { size: "3000 × 1500 × 2.0", weight: "80.5" },
  { size: "2000 × 1000 × 3.0", weight: "53.6" },
  { size: "2500 × 1250 × 4.0", weight: "111.8" },
  { size: "3000 × 1500 × 5.0", weight: "201.2" },
  { size: "2000 × 1000 × 6.0", weight: "107.3" },
  { size: "2500 × 1250 × 8.0", weight: "223.5" },
  { size: "3000 × 1500 × 10.0", weight: "402.3" },
  { size: "4000 × 2000 × 12.0", weight: "858.2" },
  { size: "2000 × 1000 × 15.0", weight: "268.2" },
  { size: "2500 × 1250 × 20.0", weight: "558.8" },
  { size: "3000 × 1500 × 25.0", weight: "1005.8" },
];
const rightDataNew = [
  { size: "4000 × 2000 × 30.0", weight: "2145.6" },
  { size: "2500 × 1250 × 40.0", weight: "1117.5" },
  { size: "3000 × 1500 × 50.0", weight: "2011.5" },
  { size: "4000 × 2000 × 60.0", weight: "4291.2" },
  { size: "2500 × 1250 × 80.0", weight: "2235.0" },
  { size: "3000 × 1500 × 100.0", weight: "4023.0" },
  { size: "4000 × 2000 × 120.0", weight: "8582.4" },
  { size: "4000 × 2000 × 150.0", weight: "10728.0" },
  { size: "2500 × 1250 × 200.0", weight: "5587.5" },
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
  { thickness: "0.50", weightPerM2: "4.47", size2000: "8.94", size2500: "13.97", size3000: "20.12" },
  { thickness: "1.00", weightPerM2: "8.94", size2000: "17.88", size2500: "27.94", size3000: "40.23" },
  { thickness: "1.50", weightPerM2: "13.41", size2000: "26.82", size2500: "41.91", size3000: "60.35" },
  { thickness: "2.00", weightPerM2: "17.88", size2000: "35.76", size2500: "55.88", size3000: "80.46" },
  { thickness: "3.00", weightPerM2: "26.82", size2000: "53.64", size2500: "83.81", size3000: "120.69" },
  { thickness: "4.00", weightPerM2: "35.76", size2000: "71.52", size2500: "111.75", size3000: "160.92" },
  { thickness: "5.00", weightPerM2: "44.70", size2000: "89.40", size2500: "139.69", size3000: "201.15" },
  { thickness: "6.00", weightPerM2: "53.64", size2000: "107.28", size2500: "167.63", size3000: "241.38" },
  { thickness: "8.00", weightPerM2: "71.52", size2000: "143.04", size2500: "223.50", size3000: "321.84" },
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
  "Cu-Ni 90/10 (C70600) & 70/30 (C71500) Hot Rolled & Cold Rolled Sheets",
  "ASTM B122 / ASME SB122 Compliant",
  "Exceptional Resistance to Seawater, Biofouling & Chlorides",
  "Excellent Fabricability & Weldability",
  "Ideal for Marine, Offshore & Desalination Applications",
  "Copper Nickel Sheets Manufacturer in India",
];

const rightItems = [
  "ASTM B122 / ASME SB122",
  "Standard Sizes: 1000x2000, 1250x2500, 1500x3000, 2000x4000",
  "Thickness Range: 0.5 mm to 100 mm",
  "No.1, 2B, BA, No.4, HL, Mirror Finishes",
  "Mill Edge & Slit Edge Supply",
  "Custom Cut-to-Length & Precision Shearing",
  "Copper Nickel Sheets Supplier in Mumbai",
];

const searchTerms = [
  "Copper Nickel 90/10 Sheet Price Per Kg",
  "Cu-Ni 70/30 Sheet Weight Chart",
  "Copper Nickel Sheet Supplier In India",
  "Cu-Ni 90/10 Sheet Chemical Composition",
  "Copper Nickel Sheet Price In Mumbai",
  "Cu-Ni 70/30 Sheet Dimensions",
  "Copper Nickel Sheet Specifications Pdf",
  "Copper Nickel Sheet Price List",
  "Copper Nickel Sheet Weight Calculator",
  "Copper Nickel Sheet Mechanical Properties",
  "Copper Nickel Sheet Stockist",
  "Copper Nickel Sheet Equivalent Grades",
  "Copper Nickel Sheet Price Per Kg In India",
  "Copper Nickel Sheet Exporter",
  "Cu-Ni 90/10 Coil Supplier",
  "Copper Nickel Sheet Manufacturers In Mumbai",
  "Buy Copper Nickel Sheets In India",
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

const CopperNickelSheetsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Copper Nickel Sheets Supplier – 90/10 & 70/30 Sheets, Coils, Strips</title>
        <meta
          name="description"
          content="Leading supplier of Copper Nickel sheets (90/10 UNS C70600 & 70/30 UNS C71500) in hot rolled, cold rolled, coils, strips, circles, and custom sizes. Exceptional seawater corrosion and biofouling resistance."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="COPPER NICKEL SHEETS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>COPPER NICKEL SHEETS SUPPLIER – 90/10 & 70/30 SHEETS, COILS, STRIPS</h1>
            </div>
            <div className="content-image">
              <img src={copperNickel} alt="Copper Nickel Sheets" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>COPPER NICKEL SHEETS – ENGINEERED FOR SUPERIOR MARINE & OFFSHORE PERFORMANCE</h2>
              <p>
                Our comprehensive range of <strong>Copper Nickel Sheets</strong> includes the two most popular grades: <strong>90/10 (UNS C70600 / Werkstoff 2.0872)</strong> and <strong>70/30 (UNS C71500 / Werkstoff 2.0882)</strong>. These alloys are renowned for their exceptional resistance to seawater corrosion, biofouling, and chloride stress corrosion cracking. The 90/10 grade offers an excellent balance of cost and performance for general marine applications, while the 70/30 grade provides superior resistance to high-velocity seawater, making it the preferred choice for critical offshore and naval applications.
              </p>
              <hr />
              <h3>HOT ROLLED & COLD ROLLED COPPER NICKEL SHEETS</h3>
              <p>
                We supply Copper Nickel sheets in <strong>hot rolled</strong> and <strong>cold rolled</strong> conditions, available from 0.5 mm to 100 mm thickness, widths up to 2500 mm, and lengths up to 6000 mm. Our inventory includes annealed, stress-relieved, and pickled sheets to meet the stringent demands of marine engineering, desalination plants, and offshore structures.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Copper Nickel sheets are the material of choice for critical applications in <strong>marine engineering</strong> (shipbuilding, propeller shafts, seawater piping), <strong>offshore oil & gas</strong> (platform structures, firewater systems), <strong>desalination plants</strong> (heat exchangers, condensers), and <strong>power generation</strong> (condenser plates). Their inherent resistance to macrofouling eliminates the need for coatings, while their excellent fabricability and weldability ensure reliable, long-lasting service even in the most aggressive marine environments.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Copper Nickel sheets are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B122, ASME SB122</strong>. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Copper Nickel Sheets</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B122 / ASME SB122</p>
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
                <h2>READY STOCK AVAILABILITY – COPPER NICKEL SHEETS</h2>
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
                <h2>EQUIVALENT GRADES: COPPER NICKEL</h2>
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
                <h2>CHEMICAL COMPOSITION OF COPPER NICKEL SHEETS</h2>
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
                <h2>MECHANICAL PROPERTIES OF COPPER NICKEL SHEETS</h2>
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
                  THICKNESS RANGE AVAILABILITY: COPPER NICKEL SHEETS
                  <span>(ASTM B122 / ASME SB122)</span>
                </h2>
                <p>Available in Hot Rolled & Cold Rolled conditions</p>
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
                <h2>UNIFIED WEIGHT CHART: COPPER NICKEL SHEETS</h2>
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
                <h2>COPPER NICKEL SHEET SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED COPPER NICKEL SHEET PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING COPPER NICKEL SHEETS</h2>
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
                <h2>SEARCHES RELATED TO COPPER NICKEL SHEETS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING COPPER NICKEL SHEETS</h2>
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
                  <h2>SEARCHES RELATED TO COPPER NICKEL SHEETS</h2>
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
            <p>Immediate pricing for Copper Nickel sheets. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CopperNickelSheetsDetails;