import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";
import ProductBanner from "../../products-image/product-banner.webp";

import ReactCountryFlag from 'react-country-flag';
import { FaBoxOpen } from 'react-icons/fa';

// Replace these image paths with your actual Special Alloy Wires product images
import saRoundWire from "../../products-image/ss-welded-wires.webp";
import saSquareWire from "../../products-image/ss-filler-wires.webp";
import saFlatWire from "../../products-image/ss-bobbin-wires.webp";
import saCoilWire from "../../products-image/ss-bright-wires.webp";
import saCustomWire from "../../products-image/ss-cold-heading-wires.webp";
import saWeldingWire from "../../products-image/ss-rope-wires.webp";

import specialAlloy from "../../products-image/ss-special-alloy-wires.webp";
import "./Productsdetails.css";

const stockData = [
  {
    title: "NIMONIC 75 / 80A ROUND WIRES",
    image: saRoundWire,
    items: [
      "Nimonic 75 Round Wires (ASTM B166)",
      "Nimonic 80A Round Wires (ASTM B166)",
      "UNS N06075 / N07080",
      "High-Temperature Creep Resistant Wires",
    ],
  },
  {
    title: "NICHROME 80/20 ROUND WIRES",
    image: saRoundWire,
    items: [
      "Nichrome 80/20 Round Wires (ASTM B166)",
      "Resistance Alloy Wires",
      "Industrial Heating Element Wires",
      "Custom Size Nichrome Wires",
    ],
  },
  {
    title: "NITRONIC 50 (XM-19) ROUND WIRES",
    image: saRoundWire,
    items: [
      "Nitronic 50 (XM-19) Round Wires",
      "Nilo 42 / 48 Expansion Alloy Wires",
      "Alloy A286 / 926 Wires",
      "ASTM B166 / B446 Specialty Wires",
    ],
  },
  {
    title: "NILO 42 / 48 ROUND WIRES",
    image: saRoundWire,
    items: [
      "Nilo 42 Expansion Alloy Wires",
      "Nilo 48 Low Expansion Wires",
      "UNS K94100 / K94800",
      "Precision Nilo Hollow Wires",
    ],
  },
  {
    title: "ALLOY A286 (660) ROUND WIRES",
    image: saRoundWire,
    items: [
      "A286 / Grade 660 Round Wires (ASTM B637)",
      "ASTM A453 Alloy 660 Wires",
      "High Strength A286 Alloy Wires",
      "UNS S66286 Alloy Stock",
    ],
  },
  {
    title: "ALLOY 926 ROUND WIRES",
    image: saRoundWire,
    items: [
      "Alloy 926 Super-Austenitic Wires",
      "1.4529 / UNS N08926",
      "High Molybdenum Alloy 926 Wires",
      "926 Corrosion Resistant Wires",
    ],
  },
  {
    title: "SPECIAL ALLOY SQUARE, FLAT & WELDING WIRES",
    image: saFlatWire,
    items: [
      "Square Wires & Flat Wires",
      "Custom Profiles",
      "Welding Wires (TIG/MIG)",
      "Spooled & Straight Lengths",
    ],
  },
];

const gradesData = [
  { grade: "Nimonic 75", uns: "N06075", werkstoff: "2.4951 / 2.4630", standard: "ASTM B166" },
  { grade: "Nimonic 80A", uns: "N07080", werkstoff: "2.4952", standard: "ASTM B166" },
  { grade: "Nichrome 80/20", uns: "N06003", werkstoff: "2.4869", standard: "ASTM B166" },
  { grade: "Nitronic 50 / XM-19", uns: "S20910", werkstoff: "—", standard: "ASTM B166" },
  { grade: "Nilo 42", uns: "K94100", werkstoff: "1.3917", standard: "ASTM B166" },
  { grade: "Nilo 48", uns: "K94800", werkstoff: "1.7745", standard: "ASTM B166" },
  { grade: "Alloy A286 (660)", uns: "S66286", werkstoff: "1.4980", standard: "ASTM B637" },
  { grade: "Alloy 926", uns: "N08926", werkstoff: "1.4529", standard: "ASTM B637" },
];

const chemicalData = [
  { grade: "Nimonic 75", c: "0.08-0.15", mn: "1.0 max", si: "1.0 max", cr: "18-21", ni: "Balance", mo: "—", other: "Ti: 0.2-0.6, Cu: 0.5" },
  { grade: "Nimonic 80A", c: "0.10 max", mn: "1.0 max", si: "1.0 max", cr: "18-21", ni: "Balance", mo: "—", other: "Al/Ti strengthened" },
  { grade: "Nichrome 80/20", c: "0.15 max", mn: "1.0 max", si: "1.0 max", cr: "19-21", ni: "75.0", mo: "—", other: "Co: 1.5, Al: 0.3" },
  { grade: "Nitronic 50", c: "0.06 max", mn: "4.0-6.0", si: "1.0 max", cr: "20.5-23.5", ni: "11.5-13.5", mo: "1.5-3.0", other: "N: 0.2-0.4, Nb/V" },
  { grade: "Nilo 42", c: "0.05 max", mn: "0.8 max", si: "0.3 max", cr: "—", ni: "42.0", mo: "—", other: "Fe: Balance" },
  { grade: "Nilo 48", c: "0.05 max", mn: "0.8 max", si: "0.3 max", cr: "—", ni: "48.0", mo: "—", other: "Fe: Balance" },
  { grade: "Alloy A286", c: "0.08 max", mn: "2.0 max", si: "1.0 max", cr: "13.5-16", ni: "24-27", mo: "1.0 max", other: "Ti: 1.9-2.35, V: 0.1-0.5" },
  { grade: "Alloy 926", c: "0.08 max", mn: "2.0 max", si: "1.0 max", cr: "19-21", ni: "24-27", mo: "6.0-7.0", other: "Cu: 0.5, N: 0.15-0.25" },
];

const mechanicalData = [
  { grade: "Nimonic 75", tensile: "715 MPa (104 ksi)", yield: "275 MPa (40 ksi)", elongation: "42%", density: "8.37 g/cm³" },
  { grade: "Nimonic 80A", tensile: "930 MPa (135 ksi)", yield: "620 MPa (90 ksi)", elongation: "30%", density: "8.37 g/cm³" },
  { grade: "Nichrome 80/20", tensile: "650 MPa", yield: "280 MPa", elongation: "20%", density: "8.4 g/cm³" },
  { grade: "Nitronic 50", tensile: "690 MPa (100 ksi)", yield: "380 MPa (55 ksi)", elongation: "35%", density: "7.9 g/cm³" },
  { grade: "Nilo 42", tensile: "490 MPa", yield: "250 MPa", elongation: "—", density: "8.1 g/cm³" },
  { grade: "Nilo 48", tensile: "520 MPa", yield: "260 MPa", elongation: "43%", density: "8.1 g/cm³" },
  { grade: "Alloy A286 / 926", tensile: "655 MPa", yield: "965 MPa", elongation: "12%", density: "7.9 g/cm³" },
];

// Diameter ranges for wires
const leftDia = [
  "0.1 mm", "0.2 mm", "0.3 mm", "0.5 mm", "0.8 mm", "1.0 mm", "1.2 mm", "1.6 mm",
];
const rightDia = [
  "2.0 mm", "2.5 mm", "3.0 mm", "4.0 mm", "5.0 mm", "6.0 mm", "8.0 mm", "10.0 mm",
];

// Approx weight per meter for alloy wires (average density ~8.0 g/cm³)
const leftWireData = [
  { dia: "0.1 mm", weight: "0.000063" },
  { dia: "0.2 mm", weight: "0.000251" },
  { dia: "0.3 mm", weight: "0.000565" },
  { dia: "0.5 mm", weight: "0.001571" },
  { dia: "0.8 mm", weight: "0.004021" },
  { dia: "1.0 mm", weight: "0.006283" },
  { dia: "1.2 mm", weight: "0.009048" },
  { dia: "1.6 mm", weight: "0.016085" },
];
const rightWireData = [
  { dia: "2.0 mm", weight: "0.02513" },
  { dia: "2.5 mm", weight: "0.03927" },
  { dia: "3.0 mm", weight: "0.05655" },
  { dia: "4.0 mm", weight: "0.10053" },
  { dia: "5.0 mm", weight: "0.15708" },
  { dia: "6.0 mm", weight: "0.22619" },
  { dia: "8.0 mm", weight: "0.40212" },
  { dia: "10.0 mm", weight: "0.62832" },
];

const leftWireDataNew = [
  { dia: "0.1 mm", weight: "0.000063" },
  { dia: "0.2 mm", weight: "0.000251" },
  { dia: "0.3 mm", weight: "0.000565" },
  { dia: "0.5 mm", weight: "0.001571" },
  { dia: "0.8 mm", weight: "0.004021" },
  { dia: "1.0 mm", weight: "0.006283" },
  { dia: "1.2 mm", weight: "0.009048" },
  { dia: "1.6 mm", weight: "0.016085" },
  { dia: "2.0 mm", weight: "0.02513" },
  { dia: "2.5 mm", weight: "0.03927" },
  { dia: "3.0 mm", weight: "0.05655" },
  { dia: "4.0 mm", weight: "0.10053" },
  { dia: "5.0 mm", weight: "0.15708" },
];
const rightWireDataNew = [
  { dia: "6.0 mm", weight: "0.22619" },
  { dia: "8.0 mm", weight: "0.40212" },
  { dia: "10.0 mm", weight: "0.62832" },
  { dia: "12.0 mm", weight: "0.90478" },
  { dia: "16.0 mm", weight: "1.6085" },
  { dia: "20.0 mm", weight: "2.5133" },
  { dia: "25.0 mm", weight: "3.9270" },
  { dia: "30.0 mm", weight: "5.6549" },
  { dia: "40.0 mm", weight: "10.053" },
  { dia: "50.0 mm", weight: "15.708" },
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
  { thickness: "0.50", weightPerM2: "4.00", size2000: "8.00", size2500: "12.50", size3000: "18.00" },
  { thickness: "1.00", weightPerM2: "8.00", size2000: "16.00", size2500: "25.00", size3000: "36.00" },
  { thickness: "1.50", weightPerM2: "12.00", size2000: "24.00", size2500: "37.50", size3000: "54.00" },
  { thickness: "2.00", weightPerM2: "16.00", size2000: "32.00", size2500: "50.00", size3000: "72.00" },
  { thickness: "3.00", weightPerM2: "24.00", size2000: "48.00", size2500: "75.00", size3000: "108.00" },
  { thickness: "4.00", weightPerM2: "32.00", size2000: "64.00", size2500: "100.00", size3000: "144.00" },
  { thickness: "5.00", weightPerM2: "40.00", size2000: "80.00", size2500: "125.00", size3000: "180.00" },
  { thickness: "6.00", weightPerM2: "48.00", size2000: "96.00", size2500: "150.00", size3000: "216.00" },
  { thickness: "8.00", weightPerM2: "64.00", size2000: "128.00", size2500: "200.00", size3000: "288.00" },
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
  "Nimonic 75 / 80A Round & Profile Wires",
  "Nichrome 80/20 Resistance Alloy Wires",
  "Nitronic 50 (XM-19) High Strength Wires",
  "Nilo 42 / 48 Controlled Expansion Alloy Wires",
  "Alloy A286 (660) Iron-Based Superalloy Wires",
  "Alloy 926 Super-Austenitic Corrosion Wires",
  "Special Alloy Wires Manufacturer in India",
];

const rightItems = [
  "ASTM B166 / B637 / B446 Specialty Wires",
  "Diameter Range: 0.1 mm to 50 mm",
  "Form: Round, Square, Flat, Coil, Straight Lengths",
  "Annealed, Cold Drawn, Stress-Relieved, Spring Temper",
  "Welding Wires (TIG/MIG) – AWS A5.14",
  "Custom Cut-to-Length & Precision Machining",
  "Special Alloy Wires Supplier in Mumbai",
];

const searchTerms = [
  "Nimonic 75 Wire Price Per Kg",
  "Nimonic 80A Alloy Wire Weight Chart",
  "Nichrome 80/20 Wire Supplier In India",
  "Nitronic 50 Wire Chemical Composition",
  "Nitronic 50 XM-19 Wire Price",
  "Nilo 42 Wire Price In Mumbai",
  "Nilo 48 Expansion Wire Dimensions",
  "Alloy A286 Wire Specifications Pdf",
  "Alloy 926 Wire Corrosion Resistance",
  "Nimonic 75 / 80A Wire Price List",
  "Nichrome 80/20 Wire Weight Calculator",
  "Nitronic 50 Wire Mechanical Properties",
  "Nilo 42 / 48 Wire Stockist",
  "Alloy A286 Wire Heat Treatment",
  "Alloy 926 Wire Price Per Kg In India",
  "Special Alloy Wire Exporter",
  "Special Alloy Welded Wire Supplier",
  "Nimonic 75 Wire Dimensions",
  "Nichrome 80/20 Wire Sizes",
  "Nitronic 50 Wire Schedule",
  "Nilo 42 Wire Equivalent Grades",
  "Alloy A286 Wire UNS S66286",
  "Alloy 926 Wire 1.4529",
  "Special Alloy Wire Manufacturers In Mumbai",
  "Buy Special Alloy Wires In India",
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

const SpecialWiresDetails = () => {
  return (
    <>
      <Helmet>
        <title>Special Alloy Wires Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy</title>
        <meta
          name="description"
          content="Supplier of Special Alloy wires including Nimonic 75/80A, Nichrome 80/20, Nitronic 50 (XM-19), Nilo 42/48, Alloy A286, Alloy 926. Round, square, flat, welding wires, and custom sizes available."
        />
      </Helmet>

      <Navbar />

      <Banner
        title="SPECIAL ALLOY WIRES"
        image={ProductBanner}
      />

      <div className="product-details-container">
        <div className="product-main-content">
          <section className="product-content">
            <div className="content-header">
              <h1>SPECIAL ALLOY WIRES SUPPLIER – NIMONIC, NICHROME, NITRONIC, NILO & ALLOY</h1>
            </div>
            <div className="content-image">
              <img src={specialAlloy} alt="Special Alloy Wires" className="main-image" />
            </div>
            <div className="content-contact">
              <a href="https://wa.me/919326883622">Enquiry via WhatsApp</a>
              <a href="tel:+919326883622">Enquiry via Call</a>
            </div>
          </section>

          <section className="product-content">
            <div className="content-header">
              <h2>SPECIAL ALLOY WIRES – ENGINEERED FOR EXTREME CONDITIONS</h2>
              <p>
                Our comprehensive range of <strong>Special Alloy Wires</strong> covers a wide spectrum of high-performance materials, including <strong>Nimonic 75/80A</strong>, <strong>Nichrome 80/20</strong>, <strong>Nitronic 50 (XM-19)</strong>, <strong>Nilo 42/48</strong>, <strong>Alloy A286 (660)</strong>, and <strong>Alloy 926</strong>. These alloys are specifically engineered for demanding applications requiring exceptional resistance to high temperatures, oxidation, corrosion, and mechanical stress. Whether you need creep-resistant wires for gas turbine components, controlled expansion alloys for precision instruments, or super-austenitic wires for aggressive chemical environments, our specialty wires deliver reliable performance in the most challenging industrial settings.
              </p>
              <hr />
              <h3>ROUND, SQUARE, FLAT & CUSTOM ALLOY WIRES</h3>
              <p>
                We supply special alloy wires in <strong>round</strong>, <strong>square</strong>, <strong>flat</strong>, and <strong>custom profiles</strong>, available from 0.1 mm to 50 mm diameter (or equivalent cross-section). Our inventory includes cold-drawn, annealed, stress-relieved, and spring-tempered wires to meet the stringent demands of springs, fasteners, welding, and precision components.
              </p>
              <h3>APPLICATIONS & ADVANTAGES</h3>
              <p>
                These specialty alloy wires are the material of choice for critical applications in <strong>aerospace</strong> (springs, fasteners, control cables), <strong>power generation</strong> (heating elements, thermocouples), <strong>chemical processing</strong> (electrodes, wire mesh), <strong>marine engineering</strong> (rigging, mooring), and <strong>precision instrumentation</strong> (Nilo alloys for glass-to-metal seals). Their unique combination of properties ensures reliable service under extreme temperatures, corrosive media, and high mechanical loads.
              </p>
              <hr />
              <h3>COMPLIANCE & STANDARDS</h3>
              <p>
                Our special alloy wires are manufactured and tested in accordance with <strong>ASTM / ASME</strong> specifications, including <strong>ASTM B166, B637, B446</strong> and their ASME equivalents. We provide comprehensive mill test certificates, PMI reports, and third-party inspection services to ensure full traceability and quality assurance.
              </p>
            </div>
          </section>

          <section className="specification-section">
            <h2>Specification: Special Alloy Wires</h2>
            <div className="spec-grid">
              <div className="spec-card">
                <h4>Standard</h4>
                <p>ASTM B166, B637, B446</p>
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
                <p>Annealed, Half Hard, Full Hard, Spring Temper</p>
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
                <h2>READY STOCK AVAILABILITY – SPECIAL ALLOY WIRES</h2>
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
                <h2>EQUIVALENT GRADES: SPECIAL ALLOYS</h2>
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
                <h2>CHEMICAL COMPOSITION OF SPECIAL ALLOY WIRES</h2>
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
                <h2>MECHANICAL PROPERTIES OF SPECIAL ALLOY WIRES</h2>
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
                  DIAMETER RANGE AVAILABILITY: SPECIAL ALLOY WIRES
                  <span>(ASTM B166, B637, B446)</span>
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
                <h2>UNIFIED WEIGHT CHART: SPECIAL ALLOY WIRES</h2>
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
                <h2>SPECIAL ALLOY WIRE SUPPLY RANGE (UNIFIED)</h2>
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
                <h2>UNIFIED SPECIAL ALLOY WIRE PRICE RANGE</h2>
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
                <h2>SPECIALIZED IN FOLLOWING SPECIAL ALLOY WIRES</h2>
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
                <h2>SEARCHES RELATED TO SPECIAL ALLOY WIRES</h2>
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
                <h2>SPECIALIZED IN FOLLOWING SPECIAL ALLOY WIRES</h2>
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
                  <h2>SEARCHES RELATED TO SPECIAL ALLOY WIRES</h2>
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
            <p>Immediate pricing for Special Alloy Wires. Contact our sales team for bulk discounts and technical support.</p>
            <a href="/contact-us" className="quote-btn">REQUEST PRICING</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpecialWiresDetails;
