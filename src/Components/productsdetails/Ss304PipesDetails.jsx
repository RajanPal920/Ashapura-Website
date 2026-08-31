import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactCountryFlag from "react-country-flag";
import { FaBoxOpen } from "react-icons/fa";

import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";
import stainlessSteelPipes from "../../products-image/ss-steel-pipes.webp";


import seamless from "../../products-image/ss-nimonic-pipes.webp";
import ssWelded from "../../products-image/ss-nitronic-pipes.webp";
import ssErw from "../../products-image/ss-nichrome-pipes.webp";
import ssEfw from "../../products-image/ss-nilo42-pipes.webp";


import ss304 from "../../products-image/stainless-steel-pipes.webp";

import "./Productsdetails.css";

const stockData = [
  {
    title: "SS 304 SEAMLESS PIPES",
    image: seamless,
    items: [
      "ASTM A312 TP304 Seamless Pipes",
      "SCH 5S to SCH XXS stock",
      "1/2 inch NB to 24 inch NB",
      "Plain end, bevel end, threaded end",
    ],
  },
  {
    title: "SS 304L SEAMLESS PIPES",
    image: ssWelded,
    items: [
      "ASTM A312 TP304L Seamless Pipes",
      "Low carbon welded-service grade",
      "UNS S30403 ready stock",
      "Cut-to-length supply available",
    ],
  },
  {
    title: "SS 304 WELDED PIPES",
    image: ssErw,
    items: [
      "ASTM A312 TP304 Welded Pipes",
      "ERW, EFW, fabricated pipe forms",
      "Large diameter pipe supply",
      "Pickled and passivated finish",
    ],
  },
  {
    title: "SS 304L WELDED PIPES",
    image: ssEfw,
    items: [
      "ASTM A312 TP304L Welded Pipes",
      "Excellent weldability and formability",
      "Food, pharma, and process piping",
      "MTC and inspection support",
    ],
  },
];

const gradesData = [
  {
    grade: "SS 304",
    uns: "S30400",
    werkstoff: "1.4301",
    standard: "X5CrNi18-10 / SUS 304",
  },
  {
    grade: "SS 304L",
    uns: "S30403",
    werkstoff: "1.4306 / 1.4307",
    standard: "X2CrNi18-9 / SUS 304L",
  },
];

const chemicalData = [
  {
    grade: "SS 304",
    c: "0.08 max",
    mn: "2.00 max",
    si: "1.00 max",
    cr: "18.00-20.00",
    ni: "8.00-11.00",
    mo: "-",
    other: "P: 0.045 max, S: 0.030 max",
  },
  {
    grade: "SS 304L",
    c: "0.03 max",
    mn: "2.00 max",
    si: "1.00 max",
    cr: "18.00-20.00",
    ni: "8.00-12.00",
    mo: "-",
    other: "P: 0.045 max, S: 0.030 max",
  },
];

const mechanicalData = [
  {
    grade: "SS 304",
    tensile: "515 MPa min",
    yield: "205 MPa min",
    elongation: "35% min",
    density: "8.00 g/cm3",
  },
  {
    grade: "SS 304L",
    tensile: "485 MPa min",
    yield: "170 MPa min",
    elongation: "35% min",
    density: "8.00 g/cm3",
  },
];

const sizeData = [
  { size: "1/2 inch NB", od: "21.3 mm", schedules: "SCH 5S, 10S, 40S, 80S" },
  { size: "1 inch NB", od: "33.4 mm", schedules: "SCH 5S, 10S, 40S, 80S" },
  { size: "2 inch NB", od: "60.3 mm", schedules: "SCH 5S, 10S, 40S, 80S, 160" },
  { size: "4 inch NB", od: "114.3 mm", schedules: "SCH 5S, 10S, 40S, 80S, 160" },
  { size: "8 inch NB", od: "219.1 mm", schedules: "SCH 10S, 40S, 80S, 160" },
  { size: "12 inch NB", od: "323.9 mm", schedules: "SCH 10S, 40S, 80S" },
  { size: "16 inch NB", od: "406.4 mm", schedules: "SCH 10S, 40S, 80S" },
  { size: "24 inch NB", od: "609.6 mm", schedules: "SCH 10S, 40S, 80S" },
];

const applicationData = [
  "Chemical processing and transfer lines",
  "Food, dairy, brewery, and pharmaceutical piping",
  "Water treatment and desalination plants",
  "Heat exchangers, condensers, and boilers",
  "Oil and gas process piping",
  "Architecture, fabrication, and general engineering",
  "Automotive, rail, and industrial equipment",
  "Marine and coastal service where standard corrosion resistance is required",
];

const leftItems = [
  "Stainless Steel 304 Seamless Pipes",
  "Stainless Steel 304L Seamless Pipes",
  "ASTM A312 TP304 Pipes",
  "ASTM A312 TP304L Pipes",
  "SS 304 ERW Pipes",
  "SS 304L EFW Pipes",
  "SS 304 Schedule 40 Pipes",
];

const rightItems = [
  "SS 304 Schedule 80 Pipes",
  "UNS S30400 Pipes",
  "UNS S30403 Pipes",
  "DIN 1.4301 Pipes",
  "DIN 1.4306 / 1.4307 Pipes",
  "SS 304 Pipe Stockist in Mumbai",
  "SS 304L Pipe Supplier in India",
];

const searchTerms = [
  "Stainless Steel 304 Pipe Price Per Kg",
  "SS 304L Seamless Pipe Supplier",
  "ASTM A312 TP304 Pipe Stockist",
  "ASTM A312 TP304L Pipe Manufacturer",
  "SS 304 Pipe Schedule Chart",
  "SS 304L Pipe Weight Chart",
  "UNS S30400 Pipe Equivalent",
  "UNS S30403 Pipe Chemical Composition",
  "SS 304 Welded Pipe Price",
  "SS 304L Pipe Exporter India",
  "SS 304 Pipe Supplier in Mumbai",
  "Buy Stainless Steel 304 Pipes",
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

const Ss304PipesDetails = () => {
  return (
    <>
      <Helmet>
        <title>Stainless Steel 304/304L Pipes Stockist & Supplier</title>
        <meta
          name="description"
          content="Stockist and supplier of Stainless Steel 304 and 304L seamless, welded, ERW and EFW pipes in ASTM A312 TP304/TP304L with schedules, sizes, grades and MTC support."
        />
      </Helmet>

      <Navbar />

      <Banner title="STAINLESS STEEL 304 / 304L PIPES" image={ProductBanner} />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>STAINLESS STEEL 304 / 304L PIPES STOCKIST & SUPPLIER</h1>
            </div>
            <div className="content-image">
              <img
                src={ss304}
                alt="Stainless Steel 304 and 304L Pipes"
                className="main-image"
              />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via whatsapp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>SS 304 / 304L PIPES FOR INDUSTRIAL PIPING SERVICE</h2>
              <p>
                Stainless Steel 304 and 304L pipes are among the most widely used
                austenitic stainless steel piping products for general corrosion
                resistance, fabrication, hygienic service, and process industries.
                Grade 304 is valued for its balanced chromium-nickel chemistry,
                while 304L has a lower carbon content to reduce carbide
                precipitation during welding.
              </p>
              <p>
                We supply SS 304 / 304L seamless and welded pipes in ASTM A312,
                ASME SA312 and related specifications with standard schedules,
                custom lengths, end preparation, third-party inspection and mill
                test certificates as required.
              </p>
              <hr />
              <h3>WHY CHOOSE SS 304 / 304L PIPES?</h3>
              <p>
                These grades offer good oxidation resistance, excellent forming
                and welding behavior, reliable toughness at low temperatures and
                long service life in food, water, chemical, architectural and
                general engineering applications.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Stainless Steel 304 / 304L Pipe Specification</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM A312 / ASME SA312</p>
              </div>
              <div className="spec-card">
                <h4>Grades</h4>
                <p>TP304, TP304L, UNS S30400, UNS S30403</p>
              </div>
              <div className="spec-card">
                <h4>Size Range</h4>
                <p>1/2 inch NB to 24 inch NB and custom sizes</p>
              </div>
              <div className="spec-card">
                <h4>Schedules</h4>
                <p>SCH 5S, 10S, 40S, 80S, 160, XXS</p>
              </div>
              <div className="spec-card">
                <h4>Types</h4>
                <p>Seamless, welded, ERW, EFW, fabricated</p>
              </div>
              <div className="spec-card">
                <h4>Finish</h4>
                <p>Pickled, passivated, polished, annealed</p>
              </div>
            </div>
          </section>

          <section className="stock-section">
            <div className="stock-container">
              <div className="stock-heading">
                <h2>READY STOCK AVAILABILITY - SS 304 / 304L PIPES</h2>
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
                <h2>EQUIVALENT GRADES: SS 304 / 304L PIPES</h2>
              </div>
              <div className="table-responsive">
                <table className="grades-table">
                  <thead>
                    <tr>
                      <th>GRADE</th>
                      <th>UNS</th>
                      <th>WERKSTOFF NR.</th>
                      <th>EN / JIS</th>
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
                <h2>CHEMICAL COMPOSITION OF SS 304 / 304L PIPES</h2>
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
                <h2>MECHANICAL PROPERTIES OF SS 304 / 304L PIPES</h2>
              </div>
              <div className="table-responsive">
                <table className="mechanical-table">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>Tensile Strength</th>
                      <th>Yield Strength</th>
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

          <section className="finish-weight-section">
            <div className="container">
              <div className="section-title">
                <h2>SS 304 / 304L PIPE SIZE AND SCHEDULE RANGE</h2>
                <p>Common sizes shown below. Additional OD, wall thickness and custom lengths are supplied on request.</p>
              </div>
              <div className="table-responsive">
                <table className="finish-weight-table">
                  <thead>
                    <tr>
                      <th>Nominal Pipe Size</th>
                      <th>Outside Diameter</th>
                      <th>Available Schedules</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.size}</td>
                        <td>{item.od}</td>
                        <td>{item.schedules}</td>
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
                <h2>SPECIALIZED IN FOLLOWING SS 304 / 304L PIPES</h2>
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

          <section className="specialty-weight-section">
            <div className="container">
              <div className="section-title">
                <h2>APPLICATIONS OF STAINLESS STEEL 304 / 304L PIPES</h2>
              </div>
              <div className="specialized-grid">
                {applicationData.map((item, index) => (
                  <div className="specialized-item" key={index}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="searches-section">
            <div className="container">
              <div className="search-box">
                <div className="section-title">
                  <h2>SEARCHES RELATED TO STAINLESS STEEL 304 / 304L PIPES</h2>
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
            <p>
              Immediate pricing for Stainless Steel 304 / 304L pipes. Contact
              our sales team for bulk discounts and technical support.
            </p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ss304PipesDetails;
