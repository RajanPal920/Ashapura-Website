import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";


import HastelloyBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-hastelloy-tubes.webp";
import RoundBars from "../../products-image/ss-hastelloy-roundbars.webp";
import Sheets from "../../products-image/ss-hastelloy-sheets.webp";
import Plates from "../../products-image/ss-hastelloy-plates.webp";
import Wires from "../../products-image/ss-hastelloy-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-hastelloy-pipes.webp";



const materials = [
    {
        id:1,
        name:"Hastelloy Tubes Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:Tubes,
    },
    {
        id:2,
        name:"Hastelloy Round Bars Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:RoundBars,
    },
    {
        id:3,
        name:"Hastelloy Sheets Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:Sheets,
    },
    {
        id:4,
        name:"Hastelloy Plates Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:Plates,
    },
    {
        id:5,
        name:"Hastelloy Wires Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:Wires,
    },
    {
        id:6,
        name:"Hastelloy Coils Supplier – C276, C22, B2, B3, C2000, C59, C4 & HN",
        image:Coils,
    },
    {
        id:7,
        name:"Hastelloy Pipes Supplier",
        image:Pipes,
    }

];

export default function Hastelloy() {
    return (
        <>
            <Helmet>
            <title>Hastelloy Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Hastelloy Products"
            image={HastelloyBanner}
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
                                            to={`/products/hastelloy/${item.id}`}
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