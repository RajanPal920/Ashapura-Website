import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";


import TitaniumBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-titanium-tubes.webp";
import RoundBars from "../../products-image/ss-titanium-roundbars.webp";
import Sheets from "../../products-image/ss-titanium-sheets.webp";
import Plates from "../../products-image/ss-titanium-plates.webp";
import Wires from "../../products-image/ss-titanium-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/titanium-pipes.webp";



const materials = [
    {
        id:1,
        name:"Titanium Tubes Supplier - Grade 2 & Grade 5",
        image:Tubes,
    },
    {
        id:2,
        name:"Titanium Round Bars Supplier - Grade 2 & Grade 5",
        image:RoundBars,
    },
    {
        id:3,
        name:"Titanium Sheets – Grade 2 & Grade 5 Supplier",
        image:Sheets,
    },
    {
        id:4,
        name:"Titanium Plates Supplier - Grade 2 & Grade 5",
        image:Plates,
    },
    {
        id:5,
        name:"Titanium Wires Supplier – Grade 2 & Grade 5",
        image:Wires,
    },
    {
        id:6,
        name:"Titanium Coils – Grade 2 & Grade 5 Supplier",
        image:Coils,
    },
    {
        id:7,
        name:"Titanium Pipes – Grade 2 & Grade 5 Supplier",
        image:Pipes,
    }

];

export default function Titanium() {
    return (
        <>
            <Helmet>
            <title>Titanium Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Titanium Products"
            image={TitaniumBanner}   
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
                                            to={`/products/titanium/${item.id}`}
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