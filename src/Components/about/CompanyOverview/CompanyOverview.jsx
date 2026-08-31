import { useRef } from "react";
import "./CompanyOverview.css";
import useReveal from "../../../hooks/useReveal";
import factory from "../../../assets/images/factory.webp";

export default function CompanyOverview({ stats, CountUp }) {
  const ref = useRef(null);
  useReveal(ref, ".reveal-left, .reveal-right");

  return (
    <section className="overview-section" ref={ref}>
      <div className="overview-wrapper">

        {/* Left */}
        <div className="overview-text reveal-left">
          <p className="overview-eyebrow">Our History</p>
          <h2 className="overview-heading">Our Journey Began in 2013</h2>
          <p className="overview-body">
            Ashapura Metal & Alloys was established with a singular vision: to bridge
            the gap between high-quality steel manufacturing and the critical needs of
            India's growing infrastructure. What started as a focused operation has now
            evolved into a premier supply hub for exotic and standard alloys.
          </p>
          <p className="overview-body">
            We understood early on that in industries like Oil & Gas, Construction, and
            Heavy Engineering, there is no room for error. Reliability isn't a luxury —
            it's a necessity. Over the last decade and a half, we have dedicated
            ourselves to sourcing, manufacturing, and supplying only the finest Pipes,
            Plates, Fittings, and Alloys.
          </p>

          <div className="overview-stats">
            {stats.map((s) => (
              <div className="stat-box" key={s.label}>
                <div className="stat-value">
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="overview-image reveal-right">
          <img src={factory} alt="Ashapura warehouse facility" />
        </div>

      </div>
    </section>
  );
}