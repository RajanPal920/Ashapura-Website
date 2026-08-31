import "./Industries.css";

import oilGas from "../../../assets/images/oil-gas-industry.webp";
import powerPlants from "../../../assets/images/powerplants-industry.webp";
import construction from "../../../assets/images/construction-industry.webp";
import chemical from "../../../assets/images/chemical-industry.webp";
import automotive from "../../../assets/images/automotive-industry.webp";
import marine from "../../../assets/images/marine-industry.webp";

const industries = [
  {
    name: "Oil & Gas",
    image: oilGas
  },
  {
    name: "Power Plants",
    image: powerPlants
  },
  {
    name: "Construction",
    image: construction
  },
  {
    name: "Chemical Processing",
    image: chemical
  },
  {
    name: "Automotive",
    image: automotive
  },
  {
    name: "Marine",
    image: marine
  }
];

function Industries() {
  return (
    <section className="industries">

    <div className="container">

      <div className="section-heading">
        
        <h2>
          Delivering Excellence Across
          Critical Industries
        </h2>

        <p>
          Our stainless steel and alloy steel products
          support demanding industrial applications
          across the globe.
        </p>

      </div>

    </div>

    <div className="industry-slider">

      <div className="industry-track">

        {industries.concat(industries).map((item,index)=>(

          <div
            key={index}
            className="industry-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="industry-overlay">

              <h3>{item.name}</h3>

            </div>

          </div>

        ))}

      </div>

    </div>

</section>
  );
}

export default Industries;