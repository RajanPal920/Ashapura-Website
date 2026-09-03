import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCubes,
  FaCircle,
  FaRing,
  FaBolt,
  FaCog,
  FaFilter,
  FaProjectDiagram,
  FaGripLines,
  FaCompressArrowsAlt,
  FaChevronDown,
} from "react-icons/fa";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineViewModule, MdGridView } from "react-icons/md";

import { GiMetalBar, GiWireCoil, GiMeshNetwork, GiValve } from "react-icons/gi";

import {
  TbCircleRectangle,
  TbLayoutGrid,
  TbCircleDashed,
} from "react-icons/tb";

import { PiPipeFill } from "react-icons/pi";

import {
  FaIndustry,
  FaCogs,
  FaAtom,
  FaGem,
  FaCube,
  FaFire,
  FaTools,
  FaLayerGroup,
  FaBoxes,
} from "react-icons/fa";

import { FaFilePdf } from "react-icons/fa";

import logo from "../../../assets/images/logo.webp";
import logoname from "../../../assets/images/logo-name.webp";
import isologo from "../../../assets/images/iso-logo.webp";
import msme from "../../../assets/images/msme-logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    if (activeSubmenu === menuName) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menuName);
    }
  };

  return (
    <header className="navbar">
      {/* ── TOP CONTACT STRIP ── */}
      <div className="top-strip">
        <div className="top-strip-wrapper">
          <div className="strip-left">
            <span>
              <FaPhone /> +91 93268 83622
            </span>
            <span>
              <FaPhone /> +91 7666989991
            </span>
            <span>
              <FaEnvelope /> sales@shreeashapurametal.com
            </span>
            <span>
              <FaEnvelope /> shreeashapura1@gmail.com
            </span>
          </div>
          <div className="strip-right">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <div className="navbar-main">
        <div className="main-wrapper">
          <div className="logo">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="logo-link"
            >
              <img src={logo} alt="Ashapura Logo" />

              <div className="company-info">
                <img
                  src={logoname}
                  alt="Ashapura Logo Name"
                  className="logo-name"
                />

                <span className="iso-text">An ISO Certified Company</span>
              </div>
            </Link>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>

            {/* Products Dropdown */}
            <div className="mega-dropdown">
              <button
                className="mega-trigger"
                onClick={() => toggleSubmenu("products")}
              >
                Products <FaChevronDown className="dropdown-arrow" />
              </button>
              <div
                className={`mega-menu ${activeSubmenu === "products" ? "open" : ""}`}
              >
                <div className="mega-column">
                  <Link to="/products/coils" onClick={() => setMenuOpen(false)}>
                    <span className="menu-icon">
                      <GiWireCoil />
                    </span>
                    <span>Coils</span>
                  </Link>
                  <Link
                    to="/products/round-bars"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <GiMetalBar />
                    </span>
                    <span>Round Bars</span>
                  </Link>
                  <Link to="/products/wires" onClick={() => setMenuOpen(false)}>
                    <span className="menu-icon">
                      <GiMeshNetwork />
                    </span>
                    <span>Wires</span>
                  </Link>
                  <Link
                    to="/products/flanges"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaCog />
                    </span>
                    <span>Flanges</span>
                  </Link>
                  <Link
                    to="/products/patta-patti"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaGripLines />
                    </span>
                    <span>Patta Patti</span>
                  </Link>
                  <Link
                    to="/products/strips"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaGripLines />
                    </span>
                    <span>Strips</span>
                  </Link>
                  <Link
                    to="/products/perforated-sheets"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <TbCircleDashed />
                    </span>
                    <span>Perforated Sheets</span>
                  </Link>
                  <Link
                    to="/products/wire-mesh"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <GiMeshNetwork />
                    </span>
                    <span>Wire Mesh</span>
                  </Link>
                </div>

                <div className="mega-column">
                  <Link to="/products/pipes" onClick={() => setMenuOpen(false)}>
                    <span className="menu-icon">
                      <PiPipeFill />
                    </span>
                    <span>Pipes</span>
                  </Link>
                  <Link
                    to="/products/sheets"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <MdOutlineViewModule />
                    </span>
                    <span>Sheets</span>
                  </Link>
                  <Link
                    to="/products/butt-fittings"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaProjectDiagram />
                    </span>
                    <span>Buttweld Fittings</span>
                  </Link>
                  <Link
                    to="/products/fasteners"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaBolt />
                    </span>
                    <span>Fasteners</span>
                  </Link>
                  <Link to="/products/rings" onClick={() => setMenuOpen(false)}>
                    <span className="menu-icon">
                      <FaRing />
                    </span>
                    <span>Rings</span>
                  </Link>
                  <Link
                    to="/products/valves"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <GiValve />
                    </span>
                    <span>Valves</span>
                  </Link>
                  <Link
                    to="/products/hose-pipes"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <PiPipeFill />
                    </span>
                    <span>Hose Pipes</span>
                  </Link>
                  <Link
                    to="/products/hardox-plates"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <TbCircleRectangle />
                    </span>
                    <span>Hardox Plates</span>
                  </Link>
                </div>

                <div className="mega-column">
                  <Link
                    to="/products/plates"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <TbCircleRectangle />
                    </span>
                    <span>Plates</span>
                  </Link>
                  <Link to="/products/tubes" onClick={() => setMenuOpen(false)}>
                    <span className="menu-icon">
                      <PiPipeFill />
                    </span>
                    <span>Tubes</span>
                  </Link>
                  <Link
                    to="/products/forged-fittings"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaCompressArrowsAlt />
                    </span>
                    <span>Forged Fittings</span>
                  </Link>
                  <Link
                    to="/products/angles-channels"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <TbLayoutGrid />
                    </span>
                    <span>Angle & Channels</span>
                  </Link>
                  <Link
                    to="/products/circles"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaCircle />
                    </span>
                    <span>Circles</span>
                  </Link>
                  <Link
                    to="/products/dairy-fittings"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaFilter />
                    </span>
                    <span>Dairy Fittings</span>
                  </Link>
                  <Link
                    to="/products/dairy-pharma-valves"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <GiMeshNetwork />
                    </span>
                    <span>Dairy Pharma Valves</span>
                  </Link>
                  <Link
                    to="/products/pharma-fittings"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="menu-icon">
                      <FaFilter />
                    </span>
                    <span>Pharma Fittings</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Materials Dropdown */}
            <div className="mega-dropdown">
              <button
                className="mega-trigger"
                onClick={() => toggleSubmenu("materials")}
              >
                Materials <FaChevronDown className="dropdown-arrow" />
              </button>
              <div
                className={`mega-menu ${activeSubmenu === "materials" ? "open" : ""}`}
              >
                <div className="mega-column">
                  <Link
                    to="/materials/stainless-steel"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaIndustry className="menu-icon" />
                    <span>Stainless Steel</span>
                  </Link>
                  <Link
                    to="/materials/duplex-steel"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaLayerGroup className="menu-icon" />
                    <span>Duplex Steel</span>
                  </Link>
                  <Link
                    to="/materials/inconel"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaBolt className="menu-icon" />
                    <span>Inconel</span>
                  </Link>
                  <Link
                    to="/materials/incoloy"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaAtom className="menu-icon" />
                    <span>Incoloy</span>
                  </Link>
                </div>
                <div className="mega-column">
                  <Link
                    to="/materials/monel"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaCube className="menu-icon" />
                    <span>Monel</span>
                  </Link>
                  <Link
                    to="/materials/hastelloy"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaCogs className="menu-icon" />
                    <span>Hastelloy</span>
                  </Link>
                  <Link
                    to="/materials/nickel-alloy"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaTools className="menu-icon" />
                    <span>Nickel Alloy</span>
                  </Link>
                  <Link
                    to="/materials/copper-nickel"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaGem className="menu-icon" />
                    <span>Copper Nickel</span>
                  </Link>
                </div>
                <div className="mega-column">
                  <Link
                    to="/materials/titanium"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaGem className="menu-icon" />
                    <span>Titanium</span>
                  </Link>
                  <Link
                    to="/materials/sanicro"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFire className="menu-icon" />
                    <span>Sanicro</span>
                  </Link>
                  <Link
                    to="/materials/special-materials"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaAtom className="menu-icon" />
                    <span>Special Materials</span>
                  </Link>
                  <Link
                    to="/materials/other-materials"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaBoxes className="menu-icon" />
                    <span>Other Materials</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Dimensions Dropdown */}
            <div className="mega-dropdown">
              <button
                className="mega-trigger"
                onClick={() => toggleSubmenu("dimensions")}
              >
                Dimensions <FaChevronDown className="dropdown-arrow" />
              </button>
              <div
                className={`mega-menu ${activeSubmenu === "dimensions" ? "open" : ""}`}
              >
                <div className="mega-column">
                  <a
                    href="/dimensions/dimensions-coils.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Coils</span>
                  </a>
                  <a
                    href="/dimensions/dimensions-round-bars.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Round Bars</span>
                  </a>
                  <a
                    href="/dimensions/wire-dimensions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Wires</span>
                  </a>
                  <a
                    href="/dimensions/dimensions-flanges.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Flanges</span>
                  </a>
                </div>
                <div className="mega-column">
                  <a
                    href="/dimensions/dimensions-pipes.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Pipes</span>
                  </a>
                  <a
                    href="/dimensions/sheet-plates-dimensions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Sheets</span>
                  </a>
                  <a
                    href="/dimensions/dimensions-buttweld-fittings.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Buttweld Fittings</span>
                  </a>
                  <a
                    href="/dimensions/dimensions-fasteners.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Fasteners</span>
                  </a>
                </div>
                <div className="mega-column">
                  <a
                    href="/dimensions/sheet-plates-dimensions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Plates</span>
                  </a>
                  <a
                    href="/dimensions/dimensions-tubes.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Tubes</span>
                  </a>
                  <a
                    href="/dimensions/dimensions-forged-fittings.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Forged Fittings</span>
                  </a>
                  <a
                    href="/dimensions/dimensions-angle-channels.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaFilePdf className="menu-icon" />
                    <span>Angle & Channels</span>
                  </a>
                </div>
              </div>
            </div>

            <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>

          <div className="certifications-logo desktop-badges">
            <img src={isologo} alt="ISO Logo" />
            <img src={msme} alt="MSME Logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
