import { useRef } from "react";
import "./Timeline.css";
import useReveal from "../../../hooks/useReveal";

export default function Timeline({ milestones }) {
  const ref = useRef(null);
  useReveal(ref, ".timeline-item");

  return (
    <section className="timeline-section" ref={ref}>
      <div className="timeline-wrapper">

        <div className="timeline-header">
          <p className="timeline-eyebrow">Milestones</p>
          <h2 className="timeline-heading">A Decade of Excellence</h2>
        </div>

        <div className="timeline-track">
          {milestones.map((m, i) => (
            <div
              className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
              key={m.year}
            >
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-content">
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}