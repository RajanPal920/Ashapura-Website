import { useRef } from "react";
import "./MissionVision.css";
import useReveal from "../../../hooks/useReveal";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  const ref = useRef(null);
  useReveal(ref, ".mv-card");

  return (
    <section className="missionvision-section" ref={ref}>
      <div className="missionvision-wrapper">

        <div className="missionvision-header reveal">
          <p className="missionvision-eyebrow">Who We Are</p>
          <h2 className="missionvision-heading">Mission & Vision</h2>
        </div>

        <div className="missionvision-grid">

          <div className="mv-card reveal">
            <FaBullseye className="mv-icon" />
            <h3>Our Mission</h3>
            <p>
              To deliver precision-engineered steel and alloy solutions that power
              India's industrial growth — with uncompromising quality, on-time delivery,
              and transparent business practices.
            </p>
            <ul>
              <li>Source only certified, mill-tested materials</li>
              <li>Maintain 48-hour dispatch readiness</li>
              <li>Offer competitive pricing without quality compromise</li>
              <li>Support clients through third-party inspection</li>
            </ul>
          </div>

          <div className="mv-card reveal">
            <FaEye className="mv-icon" />
            <h3>Our Vision</h3>
            <p>
              To be India's most trusted supplier of high-grade alloys and specialty
              metals — recognised globally for reliability, technical expertise, and
              a commitment to nation-building infrastructure.
            </p>
            <ul>
              <li>Expand exports across 20+ countries by 2027</li>
              <li>Build India's largest exotic alloy stockhouse</li>
              <li>Partner with PSU & EPC leaders on critical projects</li>
              <li>Champion sustainable steel sourcing practices</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}