import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";


import InconelBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-inconel-600-tubes.webp";
import RoundBars from "../../products-image/ss-inconel-600-roundbars.webp";
import Sheets from "../../products-image/ss-inconel-600-sheets.webp";
import Plates from "../../products-image/ss-inconel-600-plates.webp";
import Wires from "../../products-image/ss-inconel-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-inconel-pipes.webp";



const materials = [
    {
        id:1,
        name:"Inconel Tubes Supplier – 600, 601, 625, 690 & X-750",
        image:Tubes,
    },
    {
        id:2,
        name:"Inconel Round Bars Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:RoundBars,
    },
    {
        id:3,
        name:"Inconel Sheets Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:Sheets,
    },
    {
        id:4,
        name:"Inconel Plates Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:Plates,
    },
    {
        id:5,
        name:"Inconel Wires Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:Wires,
    },
    {
        id:6,
        name:"Inconel Coils Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:Coils,
    },
    {
        id:7,
        name:"Inconel Pipes",
        image:Pipes,
    }

];

export default function Inconel() {
    return (
        <>
            <Helmet>
            <title>Inconel Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Inconel Products"
            image={InconelBanner}
            />

            <section className="products-section">
                <div className="container">


                    <div className="products-grid">
                        {materials.map((item) => (
                        <div key={item.id} className="product-card">

                            <div className="product-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                                <div className="product-content">
                                    <h4>{item.name}</h4>

                                        <Link
                                            className="product-btn"
                                            to={`/products/inconel/${item.id}`}
                                            >
                                             Explore Range
                                        </Link>
                                </div>

                            </div>
                              ))}
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}