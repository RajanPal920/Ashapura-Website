import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";


import OtherMaterialsBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-special-alloy-tubes.webp";
import RoundBars from "../../products-image/ss-special-alloy-roundbars.webp";
import Sheets from "../../products-image/ss-special-alloy-sheets.webp";
import Plates from "../../products-image/ss-special-alloy-plates.webp";
import Wires from "../../products-image/ss-special-alloy-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-smo-pipes.webp";



const materials = [
    {
        id:1,
        name:"Special Alloy Tubes Supplier – SMO 254 (F44) & Alloy 20",
        image:Tubes,
    },
    {
        id:2,
        name:"Special Alloy Round Bars Supplier – SMO 254 & Alloy 20",
        image:RoundBars,
    },
    {
        id:3,
        name:"Special Alloy Sheets Supplier – SMO 254 (F44) & Alloy 20",
        image:Sheets,
    },
    {
        id:4,
        name:"Special Alloy Plates Supplier – SMO 254 (F44) & Alloy 20",
        image:Plates,
    },
    {
        id:5,
        name:"Special Alloy Wires Supplier – SMO 254 (F44) & Alloy 20",
        image:Wires,
    },
    {
        id:6,
        name:"Special Alloy Coils Supplier – SMO 254 & Alloy 20",
        image:Coils,
    },
    {
        id:7,
        name:"SMO 254 Pipes Supplier",
        image:Pipes,
    }

];

export default function OtherMaterials() {
    return (
        <>
            <Helmet>
            <title>Other Materials Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Other Materials Products"
            image={OtherMaterialsBanner}
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
                                            to={`/products/other-materials/${item.id}`}
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