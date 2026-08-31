import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";


import SanicroBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-alloy-28-tubes.webp";
import RoundBars from "../../products-image/ss-alloy-28-roundbars.webp";
import Sheets from "../../products-image/ss-alloy-28-sheets.webp";
import Plates from "../../products-image/ss-alloy-28-plates.webp";
import Wires from "../../products-image/ss-alloy-28-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/alloy-28-pipes.webp";



const materials = [
    {
        id:1,
        name:"Alloy 28 Tubes Supplier",
        image:Tubes,
    },
    {
        id:2,
        name:"Alloy 28 Round Bars Supplier",
        image:RoundBars,
    },
    {
        id:3,
        name:"Alloy 28 Sheets Supplier",
        image:Sheets,
    },
    {
        id:4,
        name:"Alloy 28 Plates Supplier",
        image:Plates,
    },
    {
        id:5,
        name:"Alloy 28 Wires Supplier",
        image:Wires,
    },
    {
        id:6,
        name:"Alloy 28 Coils Supplier",
        image:Coils,
    },
    {
        id:7,
        name:"Alloy 28 Pipes Supplier",
        image:Pipes,
    }

];

export default function Sanicro() {
    return (
        <>
            <Helmet>
            <title>Sanicro Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Sanicro Products"
            image={SanicroBanner}   
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
                                            to={`/products/sanicro/${item.id}`}
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