import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Hastelloy Sheets product images
import hastelloyHRSheets from "../../products-image/ss-hr-sheets.webp";
import hastelloyCRSheets from "../../products-image/ss-cr-sheets.webp";
import hastelloyCoils from "../../products-image/ss-perforated-sheets.webp";


import hastelloy from "../../products-image/ss-hastelloy-sheets.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "HASTELLOY C276 HOT ROLLED SHEETS",
    image: hastelloyHRSheets,
    items: [
      "Hastelloy C276 Hot Rolled Sheets (ASTM B575)",
      "UNS N10276 / 2.4819",
      "No.1 Finish – Exceptional Corrosion Resistance",
      "Superior Resistance to Oxidizing & Reducing Acids",
    ],
  },
  {
    title: "HASTELLOY C22 COLD ROLLED SHEETS",
    image: hastelloyCRSheets,
    items: [
      "Hastelloy C22 Cold Rolled Sheets (ASTM B575)",
      "UNS N06022 / 2.4602",
      "Precision Thickness Tolerances",
      "2B, BA, No.4, Mirror Finishes",
    ],
  },
  {
    title: "HASTELLOY B2 / B3 SPECIALTY SHEETS",
    image: hastelloyCRSheets,
    items: [
      "Hastelloy B2 / B3 Sheets (ASTM B575)",
      "UNS N10665 / N010675",
      "Exceptional Resistance to Hydrochloric Acid",
      "Low Carbon Grades for Improved Weldability",
    ],
  },
];

const gradesData = [
  { grade: "Hastelloy C276", uns: "N10276", werkstoff: "2.4819", standard: "ASTM B575 / ASME SB575" },
  { grade: "Hastelloy C22", uns: "N06022", werkstoff: "2.4602", standard: "ASTM B575 / ASME SB575" },
  { grade: "Hastelloy B2", uns: "N10665", werkstoff: "2.4617", standard: "ASTM B575 / ASME SB575" },
  { grade: "Hastelloy B3", uns: "N010675", werkstoff: "2.4600", standard: "ASTM B575 / ASME SB575" },
  { grade: "Hastelloy X", uns: "N06002", werkstoff: "2.4665", standard: "ASTM B575 / ASME SB575" },
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

// Thickness and weight charts for sheets (average density ~8.8 g/cm³)
const leftThickness = [
  "0.5 mm", "1.0 mm", "1.5 mm", "2.0 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm",
];
const rightThickness = [
  "8.0 mm", "10.0 mm", "12.0 mm", "16.0 mm", "20.0 mm", "25.0 mm", "50.0 mm", "100.0 mm",
];

// Approx weights for Hastelloy sheets (density ~8.8 g/cm³)
const leftData = [
  { size: "2000 × 1000 × 2.0", weight: "35.2" },
  { size: "2500 × 1250 × 3.0", weight: "82.5" },
  { size: "3000 × 1500 × 4.0", weight: "158.4" },
  { size: "2000 × 1000 × 5.0", weight: "88.0" },
  { size: "2500 × 1250 × 6.0", weight: "165.0" },
  { size: "3000 × 1500 × 8.0", weight: "316.8" },
];
const rightData = [
  { size: "2000 × 1000 × 10.0", weight: "176.0" },
  { size: "2500 × 1250 × 12.0", weight: "330.0" },
  { size: "3000 × 1500 × 16.0", weight: "633.6" },
  { size: "2000 × 1000 × 20.0", weight: "352.0" },
  { size: "2500 × 1250 × 25.0", weight: "687.5" },
  { size: "—", weight: "—" },
];

const leftDataNew = [
  { size: "2000 × 1000 × 1.0", weight: "17.6" },
  { size: "2500 × 1250 × 1.5", weight: "41.3" },
  { size: "3000 × 1500 × 2.0", weight: "79.2" },
  { size: "2000 × 1000 × 3.0", weight: "52.8" },
  { size: "2500 × 1250 × 4.0", weight: "110.0" },
  { size: "3000 × 1500 × 5.0", weight: "198.0" },
  { size: "2000 × 1000 × 6.0", weight: "105.6" },
  { size: "2500 × 1250 × 8.0", weight: "220.0" },
  { size: "3000 × 1500 × 10.0", weight: "396.0" },
  { size: "4000 × 2000 × 12.0", weight: "844.8" },
  { size: "2000 × 1000 × 15.0", weight: "264.0" },
  { size: "2500 × 1250 × 20.0", weight: "550.0" },
  { size: "3000 × 1500 × 25.0", weight: "990.0" },
];
const rightDataNew = [
  { size: "4000 × 2000 × 30.0", weight: "2112.0" },
  { size: "2500 × 1250 × 40.0", weight: "1100.0" },
  { size: "3000 × 1500 × 50.0", weight: "1980.0" },
  { size: "4000 × 2000 × 60.0", weight: "4224.0" },
  { size: "2500 × 1250 × 80.0", weight: "2200.0" },
  { size: "3000 × 1500 × 100.0", weight: "3960.0" },
  { size: "4000 × 2000 × 120.0", weight: "8448.0" },
  { size: "4000 × 2000 × 150.0", weight: "10560.0" },
  { size: "2500 × 1250 × 200.0", weight: "5500.0" },
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
  "Hastelloy C276 / C22 / B2 / B3 / X Hot Rolled & Cold Rolled Sheets",
  "ASTM B575 / ASME SB575 Compliant",
  "Exceptional Resistance to Both Oxidizing & Reducing Acids",
  "Superior Pitting, Crevice Corrosion & SCC Resistance",
  "Low Carbon Grades for Improved Weldability",
  "Hastelloy Sheets Manufacturer in India",
];

const rightItems = [
  "ASTM B575 / ASME SB575",
  "Standard Sizes: 1000x2000, 1250x2500, 1500x3000, 2000x4000",
  "Thickness Range: 0.5 mm to 100 mm",
  "No.1, 2B, BA, No.4, HL, Mirror Finishes",
  "Mill Edge & Slit Edge Supply",
  "Custom Cut-to-Length & Precision Shearing",
  "Hastelloy Sheets Supplier in Mumbai",
];

const searchTerms = [
  "Hastelloy C276 Sheet Price Per Kg",
  "Hastelloy C22 Sheet Weight Chart",
  "Hastelloy Sheet Supplier In India",
  "Hastelloy B3 Sheet Specifications",
  "Hastelloy X Sheet Price In Mumbai",
  "Hastelloy C276 Sheet Dimensions",
  "Hastelloy Sheet Price List",
  "Hastelloy C276 Sheet Weight Calculator",
  "Hastelloy Sheet Mechanical Properties",
  "Hastelloy Sheet Stockist",
  "Hastelloy B2 Sheet Heat Treatment",
  "Hastelloy Sheet Price Per Kg In India",
  "Hastelloy C22 Sheet Exporter",
  "Hastelloy Sheet Manufacturers In Mumbai",
  "Buy Hastelloy Sheets In India",
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

const HastelloySheetsDetails = () => {
  return (
    <>
      <Helmet>
        <title>Hastelloy Sheets Supplier – C276, C22, B2, B3, X Sheets</title>
        <meta
          name="description"
          content="Leading supplier of Hastelloy sheets including C276, C22, B2, B3, X. Hot rolled, cold rolled, coils, strips, circles, and custom sizes. Exceptional corrosion resistance for chemical processing and severe acid environments."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="HASTELLOY SHEETS"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>HASTELLOY SHEETS SUPPLIER – HOT ROLLED, COLD ROLLED, COILS & CUSTOM SIZES</h1>
            </div>
            <div className="content-image">
              <img src={hastelloy} alt="Hastelloy Sheets" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>HASTELLOY SHEETS – ENGINEERED FOR THE MOST AGGRESSIVE CORROSIVE ENVIRONMENTS</h2>
              <p>
                Our comprehensive range of <strong>Hastelloy Sheets</strong> covers the most demanding nickel‑molybdenum and nickel‑chromium‑molybdenum alloys, including <strong>Hastelloy C276</strong>, <strong>C22</strong>, <strong>B2</strong>, <strong>B3</strong>, and <strong>X</strong>. These alloys are specifically engineered to withstand extreme corrosion from both oxidizing and reducing acids, as well as chloride‑induced pitting, crevice corrosion, and stress corrosion cracking. Hastelloy C276 offers exceptional versatility; C22 provides superior resistance to oxidizing environments; B2 and B3 excel in reducing acids like hydrochloric acid; and Hastelloy X is designed for high‑temperature oxidation and carburization resistance. Whether you need sheets for chemical reactors, heat exchangers, or high‑temperature furnaces, our Hastelloy sheets deliver reliable and long‑lasting performance.
              </p>
              <hr />
              <h3>HOT ROLLED & COLD ROLLED HASTELLOY SHEETS</h3>
              <p>
                We supply Hastelloy sheets in <strong>hot rolled</strong> and <strong>cold rolled</strong> conditions, available from 0.5 mm to 100 mm thickness, widths up to 2500 mm, and lengths up to 6000 mm. Our inventory includes annealed, solution-treated, and age-hardened sheets to meet the stringent demands of the aerospace, petrochemical, and marine industries.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                Hastelloy sheets are the material of choice for critical applications in <strong>chemical processing</strong> (pressure vessels, reactors), <strong>pharmaceuticals</strong>, <strong>pollution control</strong>, <strong>waste treatment</strong>, and <strong>petrochemical</strong> industries. Their unique combination of resistance to both localized and uniform corrosion ensures reliable service in the most aggressive environments, including hydrochloric, sulfuric, and mixed acids.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our Hastelloy sheets are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B575, ASME SB575</strong>. We provide comprehensive mill test certificates, PMI reports, and third‑party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Hastelloy Sheets</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B575 / ASME SB575</p>
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
                <h2>READY STOCK AVAILABILITY – HASTELLOY SHEETS</h2>
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
                <h2>CHEMICAL COMPOSITION OF HASTELLOY SHEETS</h2>
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
                <h2>MECHANICAL PROPERTIES OF HASTELLOY SHEETS</h2>
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
                  THICKNESS RANGE AVAILABILITY: HASTELLOY SHEETS
                  <span>(ASTM B575 / ASME SB575)</span>
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
                <h2>UNIFIED WEIGHT CHART: HASTELLOY SHEETS</h2>
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
                <h2>HASTELLOY SHEET SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED HASTELLOY SHEET PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING HASTELLOY SHEETS</h2>
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
                <h2>SEARCHES RELATED TO HASTELLOY SHEETS</h2>
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
                <h2>SPECIALIZED IN FOLLOWING HASTELLOY SHEETS</h2>
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
                  <h2>SEARCHES RELATED TO HASTELLOY SHEETS</h2>
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
            <p>Immediate pricing for Hastelloy sheets. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HastelloySheetsDetails;