import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";


import StainlessSteelBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-steel-tubes.webp";
import RoundBars from "../../products-image/ss-steel-roundbars.webp";
import Sheets from "../../products-image/ss-steel-sheets.webp";
import Plates from "../../products-image/stainless-steel-304-plates.webp";
import Wires from "../../products-image/ss-steel-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-steel-pipes.webp";



const materials = [
    {
        id:1,
        name:"Stainless Steel Tubes Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:Tubes,
    },
    {
        id:2,
        name:"Stainless Steel Round Bars Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:RoundBars,
    },
    {
        id:3,
        name:"Stainless Steel Sheets Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:Sheets,
    },
    {
        id:4,
        name:"Stainless Steel Plates Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:Plates,
    },
    {
        id:5,
        name:"Stainless Steel Wires Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:Wires,
    },
    {
        id:6,
        name:"Stainless Steel Coils Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:Coils,
    },
    {
        id:7,
        name:"Stainless Steel 310S Pipes Supplier",
        image:Pipes,
    }

];

export default function StainlessSteel() {
    return (
        <>
            <Helmet>
            <title>Stainless Steel Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Stainless Steel Products"
            image={StainlessSteelBanner}   
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
                                            to={`/products/stainless-steel/${item.id}`}
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