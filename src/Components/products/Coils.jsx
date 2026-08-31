import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";

import SSCoils from "../../products-image/ss-coils.webp";
import TitaniumCoils from "../../products-image/ss-titanium-coils.webp";
import HighPerformanceCoils from "../../products-image/ss-highperformance-coils.webp";
import AlloyCoils from "../../products-image/ss-alloy-28-coils.webp";
import SpecialCoils from "../../products-image/ss-special-coils.webp";
import Nickel from "../../products-image/ss-nickel-200-coils.webp";
import Monel from "../../products-image/ss-monel-coils.webp";
import Inconel from "../../products-image/ss-inconel-coils.webp";
import Incoloy from "../../products-image/ss-incoloy-coils.webp";
import Hastelloy from "../../products-image/ss-hastelloy-coils.webp";
import Duplex from "../../products-image/ss-duplex-super-duplex-coils.webp";
import CopperCoils from "../../products-image/ss-copper-coils.webp";
import CoilsBanner from "../../products-image/product-banner.webp";


import CoilHero from "../../products-image/hero/coil.jpg"

const Products = [
    {
        id:1,
        slug:"stainless-steel-coils-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
        name:"Stainless Steel Coils Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:SSCoils,
    },
    {
        id:2,
        slug:"titanium-coils-grade-2-grade-5-supplier-stockist-mumbai-india",
        name:"Titanium Coils – Grade 2 & Grade 5 Supplier",
        image:TitaniumCoils,
    },
    {
        id:3,
        slug:"high-performance-alloy-coils-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
        name:"High-Performance Alloy Coils Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:HighPerformanceCoils,
    },
    {
        id:4,
        slug:"alloy-28-coils-supplier-stockist-mumbai-india",
        name:"Alloy 28 Coils Supplier",
        image:AlloyCoils,
    },
    {
        id:5,
        slug:"special-alloy-coils-supplier-smo-254-alloy-20-stockist-mumbai-india",
        name:"Special Alloy Coils Supplier – SMO 254 & Alloy 20",
        image:SpecialCoils,
    },
    {
        id:6,
        slug:"nickel-alloy-200-201-coils-supplier-stockist-mumbai-india",
        name:"Nickel Alloy 200 / 201 Coils Supplier",
        image:Nickel,
    },
    {
        id:7,
        slug:"monel-400-coils-supplier-stockist-mumbai-india",
        name:"Monel 400 Coils Supplier",
        image:Monel,
    },
    {
        id:8,
        slug:"inconel-coils-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india",
        name:"Inconel Coils Supplier - 600, 601, 625, 690, 718, 725 & X-750",
        image:Inconel,
    },
    {
        id:9,
        slug:"incoloy-coils-supplier-800-800h-800ht-825-925-ds-330-stockist-mumbai-india",
        name:"Incoloy Coils Supplier – 800, 800H, 800HT, 825, 925 & DS 330",
        image:Incoloy,
    },
    {
        id:10,
        slug:"hastelloy-coils-supplier-c276-c22-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
        name:"Hastelloy Coils Supplier – C276, C22, B2, B3, C2000, C59, C4 & HN",
        image:Hastelloy,
    },
    {
        id:11,
        slug:"duplex-super-duplex-steel-coils-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
        name:"Duplex & Super Duplex Steel Coils Supplier – S31803, S32205, S32750, S32760",
        image:Duplex,
    },
    {
        id:12,
        slug:"copper-nickel-coils-supplier-stockist-mumbai-india",
        name:"Copper Nickel Coils Supplier",
        image:CopperCoils,
    }

];

export default function Coils() {
    return (
        <>
            <Helmet>
            <title>Coils Manufacturer & Supplier</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="COILS"
            image={CoilHero}
            />

            <section className="products-section">
                <div className="container">


                    <div className="products-grid">
                        {Products.map((item) => (
                        <div key={item.id} className="product-card">

                            <div className="product-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                                <div className="product-content">
                                    <h4>{item.name}</h4>

                                        <Link
                                          className="product-btn"
                                            to={`/products/coils/${item.slug}`}
                                        >
                                            View Details
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