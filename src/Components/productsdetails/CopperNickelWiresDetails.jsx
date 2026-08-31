import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Copper Nickel Wires product images
import cuNiRoundWire from "../../products-image/ss-welding-copper-wires.webp";
import cuNiSquareWire from "../../products-image/ss-filler-copper-wires.webp";
import cuNiFlatWire from "../../products-image/ss-bobbin-copper-wires.webp";
import cuNiCoilWire from "../../products-image/ss-coil-copper-wires.webp";
import cuNiCustomWire from "../../products-image/ss-spool-copper-wires.webp";
import cuNiWeldingWire from "../../products-image/ss-rope-copper-wires.webp";

import copperNickel from "../../products-image/ss-copper-nickel-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "CU-NI 90/10 ROUND WIRES",
    image: cuNiRoundWire,
    items: [
      "Cu-Ni 90/10 Round Wires (ASTM B206)",
      "UNS C70600 / 2.0872",
      "Cold Drawn & Annealed",
      "Excellent Resistance to Seawater & Biofouling",
    ],
  },
  {
    title: "CU-NI 70/30 ROUND WIRES",
    image: cuNiRoundWire,
    items: [
      "Cu-Ni 70/30 Round Wires (ASTM B206)",
      "UNS C71500 / 2.0882",
      "Superior Resistance to High-Velocity Seawater",
      "For Critical Marine & Offshore Applications",
    ],
  },
  {
    title: "CU-NI 90/10 & 70/30 SQUARE & FLAT WIRES",
    image: cuNiSquareWire,
    items: [
      "Cu-Ni 90/10 & 70/30 Square Wires",
      "Cu-Ni 90/10 & 70/30 Flat Wires",
      "Custom Cross-Sections",
      "For Springs & Electrical Components",
    ],
  },
  {
    title: "CU-NI 90/10 & 70/30 WELDING WIRES",
    image: cuNiWeldingWire,
    items: [
      "Cu-Ni 90/10 & 70/30 Welding Wires (AWS A5.7)",
      "ER CuNi (90/10, 70/30)",
      "Spooled & Straight Lengths",
      "For TIG & MIG Welding",
    ],
  },
  {
    title: "CU-NI 90/10 & 70/30 COIL WIRES",
    image: cuNiCoilWire,
    items: [
      "Cu-Ni 90/10 & 70/30 Coil Wires",
      "Continuous Lengths",
      "Precision Wound on Spools",
      "For Industrial & Commercial Applications",
    ],
  },
  {
    title: "CU-NI 90/10 & 70/30 CUSTOM WIRES",
    image: cuNiCustomWire,
    items: [
      "Custom Cut-to-Length Wires",
      "Precision Cold Drawn",
      "Diameter: 0.1 mm to 50 mm",
      "Any Size, Any Finish, Fast Delivery",
    ],
  },
];

const gradesData = [
  { grade: "Copper Nickel 90/10", uns: "C70600", werkstoff: "2.0872", standard: "ASTM B206 / ASME SB206" },
  { grade: "Copper Nickel 70/30", uns: "C71500", werkstoff: "2.0882", standard: "ASTM B206 / ASME SB206" },
];

const chemicalData = [
  { grade: "Cu-Ni 90/10 (C70600)", c: "—", mn: "1.0 max", si: "—", cr: "—", ni: "9.0-11.0", mo: "—", other: "Cu: Balance, Fe: 1.0-1.8, Zn: 1.0 max, Pb: 0.02 max" },
  { grade: "Cu-Ni 70/30 (C71500)", c: "—", mn: "1.0 max", si: "—", cr: "—", ni: "29.0-33.0", mo: "—", other: "Cu: Balance, Fe: 0.4-1.0, Zn: 1.0 max, Pb: 0.02 max" },
];

const mechanicalData = [
  { grade: "Cu-Ni 90/10 (C70600)", tensile: "310 MPa (45 ksi) min", yield: "110 MPa (16 ksi) min", elongation: "30%", density: "8.94 g/cm³" },
  { grade: "Cu-Ni 70/30 (C71500)", tensile: "370 MPa (54 ksi) min", yield: "130 MPa (19 ksi) min", elongation: "30%", density: "8.95 g/cm³" },
];

// Diameter ranges for wires
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for Copper Nickel wires (density ~8.94 g/cm³)
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000070" },
  { dia: "0.2 mm", weight: "0.000281" },
  { dia: "0.3 mm", weight: "0.000632" },
  { dia: "0.5 mm", weight: "0.001756" },
  { dia: "0.8 mm", weight: "0.004495" },
  { dia: "1.0 mm", weight: "0.007023" },
  { dia: "1.2 mm", weight: "0.010113" },
  { dia: "1.6 mm", weight: "0.017975" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.02809" },
  { dia: "2.5 mm", weight: "0.04389" },
  { dia: "3.0 mm", weight: "0.06321" },
  { dia: "4.0 mm", weight: "0.11237" },
  { dia: "5.0 mm", weight: "0.17558" },
  { dia: "6.0 mm", weight: "0.25284" },
  { dia: "8.0 mm", weight: "0.44949" },
  { dia: "10.0 mm", weight: "0.70233" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000070" },
  { dia: "0.2 mm", weight: "0.000281" },
  { dia: "0.3 mm", weight: "0.000632" },
  { dia: "0.5 mm", weight: "0.001756" },
  { dia: "0.8 mm", weight: "0.004495" },
  { dia: "1.0 mm", weight: "0.007023" },
  { dia: "1.2 mm", weight: "0.010113" },
  { dia: "1.6 mm", weight: "0.017975" },
  { dia: "2.0 mm", weight: "0.02809" },
  { dia: "2.5 mm", weight: "0.04389" },
  { dia: "3.0 mm", weight: "0.06321" },
  { dia: "4.0 mm", weight: "0.11237" },
  { dia: "5.0 mm", weight: "0.17558" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.25284" },
  { dia: "8.0 mm", weight: "0.44949" },
  { dia: "10.0 mm", weight: "0.70233" },
  { dia: "12.0 mm", weight: "1.0113" },
  { dia: "16.0 mm", weight: "1.7975" },
  { dia: "20.0 mm", weight: "2.809" },
  { dia: "25.0 mm", weight: "4.389" },
  { dia: "30.0 mm", weight: "6.321" },
  { dia: "40.0 mm", weight: "11.237" },
  { dia: "50.0 mm", weight: "17.558" },
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
  "Cu-Ni 90/10 (C70600) & 70/30 (C71500) Round Wires",
  "Cu-Ni Square, Flat & Custom Profile Wires",
  "ASTM B206 / ASME SB206 Compliant",
  "Exceptional Resistance to Seawater, Biofouling & Chlorides",
  "90/10 for General Marine, 70/30 for High-Velocity Service",
  "Copper Nickel Wires Manufacturer in India",
];

const rightItems = [
  "ASTM B206 / ASME SB206",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved",
  "Welding Wires (TIG/MIG) – AWS A5.7",
  "Custom Cut-to-Length & Precision Machining",
  "Copper Nickel Wires Supplier in Mumbai",
];

const searchTerms = [
  "Copper Nickel 90/10 Wire Price Per Kg",
  "Cu-Ni 70/30 Wire Weight Chart",
  "Copper Nickel Wire Supplier In India",
  "Cu-Ni 90/10 Wire Chemical Composition",
  "Copper Nickel Wire Price In Mumbai",
  "Cu-Ni 70/30 Wire Dimensions",
  "Copper Nickel Wire Specifications Pdf",
  "Copper Nickel Wire Seawater Resistance",
  "Cu-Ni 90/10 Wire Price List",
  "Copper Nickel Wire Weight Calculator",
  "Copper Nickel Wire Mechanical Properties",
  "Copper Nickel Wire Stockist",
  "Copper Nickel Wire Equivalent Grades",
  "Copper Nickel Wire Price Per Kg In India",
  "Cu-Ni 90/10 2.0872 Wire",
  "Cu-Ni 70/30 2.0882 Wire",
  "Copper Nickel Wire Manufacturers In Mumbai",
  "Buy Copper Nickel Wires In India",
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

const CopperNickelWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Copper Nickel Wires Supplier – 90/10 & 70/30 Wires</title>
        <meta
          name="description"
          content="Leading supplier of Copper Nickel wires (90/10 UNS C70600 & 70/30 UNS C71500) in round, square, flat, coil, and custom sizes. Exceptional seawater corrosion and biofouling resistance. ASTM B206 compliant. Welding wires available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="COPPER NICKEL WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>COPPER NICKEL WIRES SUPPLIER – 90/10 & 70/30 ROUND, SQUARE, FLAT & CUSTOM</h1>
            </div>
            <div className="content-image">
              <img src={copperNickel} alt="Copper Nickel Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>COPPER NICKEL WIRES – ENGINEERED FOR SUPERIOR MARINE & OFFSHORE PERFORMANCE</h2>
              <p>
                Our comprehensive range of <strong>Copper Nickel Wires</strong> includes the two most popular grades: <strong>90/10 (UNS C70600 / Werkstoff 2.0872)</strong> and <strong>70/30 (UNS C71500 / Werkstoff 2.0882)</strong>. These alloys are renowned for their exceptional resistance to seawater corrosion, biofouling, and chloride stress corrosion cracking. The 90/10 grade offers an excellent balance of cost and performance for general marine applications, while the 70/30 grade provides superior resistance to high-velocity seawater, making it the preferred choice for critical offshore and naval applications. Whether you need wires for springs, fasteners, welding, or precision components, our Copper Nickel wires deliver reliable and long-lasting performance.
              </p>
              <hr />
              <h3>ROUND, SQUARE, FLAT & CUSTOM COPPER NICKEL WIRES</h3>
              <p>
                We supply Copper Nickel wires in <strong>round</strong>, <strong>square</strong>, <strong>flat</strong>, and <strong>custom profiles</strong>, available from 0.1 mm to 50 mm diameter (or equivalent cross-section). Our inventory includes cold-drawn, annealed, and stress-relieved wires to meet the stringent demands of springs, fasteners, welding, and precision components.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Copper Nickel wires are the material of choice for critical applications in <strong>marine engineering</strong> (rigging, mooring, seawater systems), <strong>offshore oil & gas</strong> (platforms, control cables), <strong>desalination plants</strong> (wire mesh, electrodes), <strong>shipbuilding</strong> (electrical systems, fasteners), and <strong>chemical processing</strong> (valve stems). Their inherent resistance to macrofouling eliminates the need for coatings, while their excellent fabricability and weldability ensure reliable service in the most aggressive marine environments.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Copper Nickel wires are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B206, ASME SB206</strong>, and <strong>AWS A5.7</strong> for welding wires. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Copper Nickel Wires</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B206 / ASME SB206</p>
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
                <h2>READY STOCK AVAILABILITY – COPPER NICKEL WIRES</h2>
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
                <h2>CHEMICAL COMPOSITION OF COPPER NICKEL WIRES</h2>
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
                <h2>MECHANICAL PROPERTIES OF COPPER NICKEL WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: COPPER NICKEL WIRES
                  <span>(ASTM B206 / ASME SB206)</span>
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
                <h2>UNIFIED WEIGHT CHART: COPPER NICKEL WIRES</h2>
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
                <h2>COPPER NICKEL WIRE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED COPPER NICKEL WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING COPPER NICKEL WIRES</h2>
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
                <h2>SEARCHES RELATED TO COPPER NICKEL WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING COPPER NICKEL WIRES</h2>
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
                  <h2>SEARCHES RELATED TO COPPER NICKEL WIRES</h2>
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
            <p>Immediate pricing for Copper Nickel wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CopperNickelWiresDetails;