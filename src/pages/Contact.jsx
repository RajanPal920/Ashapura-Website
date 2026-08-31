
import Navbar from "../Components/common/Navbar/Navbar";
import Footer from "../Components/common/Footer/Footer";
import ContactBanner from "../Components/contact/ContactBanner/ContactBanner";

import ContactSection from "../Components/contact/ContactSection/ContactSection";
import GoogleMap from "../Components/contact/GoogleMap/GoogleMap";



import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Ashapura Metal Supplier</title>

        <meta
          name="description"
          content="Contact Ashapura Metal Supplier for inquiries related to stainless steel tubes, pipes, coils, plates and industrial metal products."
        />
      </Helmet>

      <Navbar />
      <ContactBanner />
      <ContactSection />
      <GoogleMap />
      
      <Footer />
    </>
  );
}

export default Contact;