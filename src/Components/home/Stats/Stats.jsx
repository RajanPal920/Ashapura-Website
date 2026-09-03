import "./Stats.css";

import {
  FaAward,
  FaUsers,
  FaGlobe,
  FaIndustry
} from "react-icons/fa";

function Stats() {

  const stats = [
    {
  icon: <FaAward />,
  value: "25+",
  label: "Years Experience"
},
{
  icon: <FaUsers />,
  value: "500+",
  label: "Satisfied Clients"
},
{
  icon: <FaGlobe />,
  value: "50+",
  label: "Countries Served"
},
{
  icon: <FaIndustry />,
  value: "500K+",
  label: "Annual Production Capacity"
}
  ];

  return (
    <section className="stats">

      <div className="container">
        


        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
            key={index}
            className="stat-card"
          >

            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{item.value}</h2>

            <p>{item.label}</p>

          </div>

        ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;