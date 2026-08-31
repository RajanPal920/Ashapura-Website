import { useRef } from "react";
import "./Facility.css";
import useReveal from "../../../hooks/useReveal";

export default function Facility({ whatWeDo }) {
  const ref = useRef(null);
  useReveal(ref, ".facility-card");

  return (
    <section className="facility-section" ref={ref}>
      <div className="facility-wrapper">

        <div className="facility-header">
          <p className="facility-eyebrow">Capabilities</p>
          <h2 className="facility-heading">What We Do</h2>
        </div>
        <p className="facility-sub">
          Comprehensive solutions for complex engineering requirements.
        </p>

        <div className="facility-grid">
          {whatWeDo.map((col) => (
            <div className="facility-card" key={col.heading}>
              <h3>{col.heading}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}