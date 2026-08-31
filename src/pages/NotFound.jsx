import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Ashapura Metal Supplier</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <Navbar />

      <section className="notfound-section">
        <div className="notfound-content">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">Page Not Found</h2>
          <p className="notfound-text">
            We couldn't find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.
          </p>
          <Link to="/" className="notfound-btn">
            Return to Homepage
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NotFound;
