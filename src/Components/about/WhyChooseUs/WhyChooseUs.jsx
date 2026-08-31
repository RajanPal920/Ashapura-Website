import { useRef } from "react";
import "./WhyChooseUs.css";
import useReveal from "../../../hooks/useReveal";

export default function WhyChooseUs({ approach }) {
  const ref = useRef(null);
  useReveal(ref, ".whychoose-card");

  return (
    <section className="whychoose-section" ref={ref}>
      <div className="whychoose-wrapper">

        <div className="section-heading">
          <h2>Why Choose Us</h2>
        </div>

        <div className="whychoose-grid">
          {approach.map((a) => (
            <div
              className="whychoose-card"
              key={a.num}
              data-num={a.num}
            >
              <div className="whychoose-num">{a.num}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}