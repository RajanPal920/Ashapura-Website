import { Link } from "react-router-dom";
import "./MaterialGrid.css";

// Data is now directly inside this file
const materialsData = [
  {
    name: "Stainless Steel Tubes",
    grade: "304, 304L, 316, 316L, 310S, 904L",
    application: "Oil & Gas, Chemical, Pharmaceutical",
    path: "/products/tubes",
  },
  {
    name: "Stainless Steel Round Bars",
    grade: "304, 304L, 316, 316L, 310S, 904L",
    application: "Construction, Engineering, Shafts",
    path: "/products/round-bars",
  },
  {
    name: "Stainless Steel Sheets",
    grade: "304, 304L, 316, 316L, 310S, 904L",
    application: "Architectural, Industrial, Kitchenware",
    path: "/products/sheets",
  },
  {
    name: "Stainless Steel Coils",
    grade: "304, 316, 321, 310, 904L",
    application: "Automotive, Construction, Appliances",
    path: "/products/coils",
  },
  {
    name: "Stainless Steel Pipes",
    grade: "304, 316, 321, 347, 904L",
    application: "Water Treatment, Food Processing, Oil & Gas",
    path: "/products/pipes",
  },
  {
    name: "Stainless Steel Flanges",
    grade: "304, 316, 904L, Duplex, Super Duplex",
    application: "Piping Systems, Valves, Pumps",
    path: "/products/flanges",
  },
  {
    name: "Stainless Steel Fasteners",
    grade: "304, 316, 310, 904L, Inconel",
    application: "Industrial Machinery, Marine, Automotive",
    path: "/products/fasteners",
  },
  {
    name: "Stainless Steel Wire Mesh",
    grade: "304, 316, 310, 904L, Monel",
    application: "Fencing, Sieves, Filters, Industrial Screens",
    path: "/products/wire-mesh",
  },
];

function MaterialGrid() {
  return (
    <section className="materials-section">
      <div className="container">
        <div className="materials-grid">
          {materialsData.map((item, index) => (
            <div className="material-card" key={index}>
              <h3>{item.name}</h3>
              <p>Grade: {item.grade}</p>
              <p>Application: {item.application}</p>

              {/* The Explore Range button that navigates to the product page */}
              <Link to={item.path} className="explore-btn-wrapper">
                <button className="btn-primary">Explore Range</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MaterialGrid;