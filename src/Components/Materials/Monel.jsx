import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Banner from "../products/Banner";

import MonelBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-monel-400-tubes.webp";
import RoundBars from "../../products-image/ss-monel-400-roundbars.webp";
import Sheets from "../../products-image/ss-monel-400-sheets.webp";
import Plates from "../../products-image/ss-monel-400-plates.webp";
import Wires from "../../products-image/ss-monel-400-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-monel-400-pipes.webp";

export const materials = [
    {
        id:1,
        name:"Monel 400 Tubes Supplier",
        image:Tubes,
        slug: "monel-400-tubes-supplier-stockist-mumbai-india",
        category: "tubes",
    },
    {
        id:2,
        name:"Monel Round Bars Supplier – 400, K500 & R405",
        image:RoundBars,
        slug: "monel-round-bars-supplier-400-k500-r405-stockist-mumbai-india",
        category: "round-bars",
    },
    {
        id:3,
        name:"Monel 400 Sheets Supplier",
        image:Sheets,
        slug: "monel-400-sheets-supplier-stockist-mumbai-india",
        category: "sheets",
    },
    {
        id:4,
        name:"Monel 400 Plates Supplier",
        image:Plates,
        slug: "monel-400-plates-supplier-stockist-mumbai-india",
        category: "plates",
    },
    {
        id:5,
        name:"Monel Wires Supplier – 400, K500 & R405",
        image:Wires,
        slug: "monel-wires-supplier-400-k500-r405-stockist-mumbai-india",
        category: "wires",
    },
    {
        id:6,
        name:"Monel 400 Coils Supplier",
        image:Coils,
        slug: "monel-400-coils-supplier-stockist-mumbai-india",
        category: "coils",
    },
    {
        id:7,
        name:"Monel Pipes Supplier",
        image:Pipes,
        slug: "monel-pipes-supplier-stockist-mumbai-india",
        category: "pipes",
    }
];

export default function Monel() {
    return (
        <>
            <Helmet>
            <title>Monel Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />
            <Banner
            title="Monel Products"
            image={MonelBanner}
            />

            <section className="products-section">
                <div className="container">
                    <div className="products-grid">
                        {materials.map((item) => (
                        <Link
                            key={item.id}
                            className="product-card-link"
                            to={`/products/${item.category}/${item.slug}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className="product-card">
                                <div className="product-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="product-content">
                                    <h4>{item.name}</h4>
                                    <div className="product-btn">Explore Range</div>
                                </div>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}