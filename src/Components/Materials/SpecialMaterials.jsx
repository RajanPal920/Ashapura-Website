import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";


import SpecialMaterialsBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-highperformance-tubes.webp";
import RoundBars from "../../products-image/ss-highperformance-roundbars.webp";
import Sheets from "../../products-image/ss-highperformance-sheets.webp";
import Plates from "../../products-image/ss-high-performance-alloy-plates.webp";
import Wires from "../../products-image/ss-highperformance-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/high-performance-alloy-pipes.webp";



const materials = [
    {
        id:1,
        name:"High-Performance Alloy Tubes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:Tubes,
    },
    {
        id:2,
        name:"High-Performance Alloy Round Bars Supplier – Nimonic, Nichrome, Nitronic & Alloy",
        image:RoundBars,
    },
    {
        id:3,
        name:"High-Performance Alloy Sheets – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:Sheets,
    },
    {
        id:4,
        name:"High-Performance Alloy Plates – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:Plates,
    },
    {
        id:5,
        name:"High-Performance Alloy Wires Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:Wires,
    },
    {
        id:6,
        name:"High-Performance Alloy Coils Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:Coils,
    },
    {
        id:7,
        name:"High-Performance Alloy Pipes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:Pipes,
    }

];

export default function SpecialMaterials() {
    return (
        <>
            <Helmet>
            <title>Special Materials Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Special Materials Products"
            image={SpecialMaterialsBanner}   
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
                                            to={`/products/special-materials/${item.id}`}
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