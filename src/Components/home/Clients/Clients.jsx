import "./Clients.css";

import adnoc from "../../../assets/clients/adnoc.webp";
import ongc from "../../../assets/clients/ongc.webp";
import shell from "../../../assets/clients/shell.webp";
import reliance from "../../../assets/clients/reliance.webp";
import essar from "../../../assets/clients/essar.webp";
import iocl from "../../../assets/clients/iocl.webp";

const clients = [
  adnoc,
  ongc,
  shell,
  reliance,
  essar,
  iocl
];

function Clients() {
  return (
    <section className="clients-section">

      <div className="container">

        <div className="clients-heading">

          <h2>Our Valued Clients</h2>

          <p className="text-capitalize">
            Supplying premium stainless steel products to
            leading companies across Oil & Gas, Power,
            Marine, Chemical and Infrastructure industries.
          </p>
        </div>

      </div>

      <div className="clients-slider">

        <div className="clients-track">

          {[...clients, ...clients].map((logo, index) => (
            <div className="client-logo" key={index}>
              <img src={logo} alt="client" />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Clients;