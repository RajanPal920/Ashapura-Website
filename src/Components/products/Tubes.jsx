import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";


import TubesBanner from "../../products-image/hero/tube.jpg";

import titaniumTubes from "../../products-image/ss-titanium-tubes.webp";
import sTubes from "../../products-image/ss-steel-tubes.webp";
import highPerformance from "../../products-image/ss-highperformance-tubes.webp";
import alloy28 from "../../products-image/ss-alloy-28-tubes.webp";
import specialAlloy from "../../products-image/ss-special-alloy-tubes.webp";
import nickel from "../../products-image/ss-nickel-alloy-tubes.webp";
import monel400 from "../../products-image/ss-monel-400-tubes.webp";
import inconel from "../../products-image/ss-inconel-600-tubes.webp";
import incoloy from "../../products-image/ss-incoloy-tubes.webp";
import hastelloy from "../../products-image/ss-hastelloy-tubes.webp";
import duplexSteel from "../../products-image/ss-duplex-super-duplex-tubes.webp";
import copperNickel from "../../products-image/ss-copper-nickel-tubes.webp";



const Products = [
    {
        id:1,
        slug:"titanium-tubes-supplier-grade-2-grade-5-stockist-mumbai-india",
        name:"Titanium Tubes Supplier - Grade 2 & Grade 5",
        image:titaniumTubes,
    },
    {
        id:2,
        slug:"stainless-steel-tubes-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
        name:"Stainless Steel Tubes Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:sTubes,
    },
    {
        id:3,
        slug:"high-performance-alloy-tubes-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
        name:"High-Performance Alloy Tubes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:highPerformance,
    },
    {
        id:4,
        slug:"alloy-28-tubes-supplier-stockist-mumbai-india",
        name:"Alloy 28 Tubes Supplier",
        image:alloy28,
    },
    {
        id:5,
        slug:"special-alloy-tubes-supplier-smo-254-f44-alloy-20-stockist-mumbai-india",
        name:"Special Alloy Tubes Supplier – SMO 254 (F44) & Alloy 20",
        image:specialAlloy,
    },
    {
        id:6,
        slug:"nickel-alloy-200-201-tubes-supplier-stockist-mumbai-india",
        name:"Nickel Alloy 200 / 201 Tubes Supplier",
        image:nickel,
    },
    {
        id:7,
        slug:"monel-400-tubes-supplier-stockist-mumbai-india",
        name:"Monel 400 Tubes Supplier",
        image:monel400,
    },
    {
        id:8,
        slug:"inconel-tubes-supplier-600-601-625-690-x-750-stockist-mumbai-india",
        name:"Inconel Tubes Supplier – 600, 601, 625, 690 & X-750",
        image:inconel,
    },
    {
        id:9,
        slug:"incoloy-tubes-supplier-800-800h-800ht-825-330-ds-330-stockist-mumbai-india",
        name:"Incoloy Tubes Supplier – 800, 800H, 800HT, 825 & 330 (DS 330)",
        image:incoloy,
    },
    {
        id:10,
        slug:"hastelloy-tubes-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
        name:"Hastelloy Tubes Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:hastelloy,
    },
    {
        id:11,
        slug:"duplex-super-duplex-steel-tubes-supplier-s31803-s32750-s32760-stockist-mumbai-india",
        name:"Duplex & Super Duplex Steel Tubes Supplier – S31803, S32750, S32760",
        image:duplexSteel,
    },
    {
        id:12,
        slug:"copper-nickel-tubes-supplier-90-10-c70600-70-30-c71500-stockist-mumbai-india",
        name:"Copper Nickel Tubes Supplier - 90/10 (C70600) & 70/30 (C71500)",
        image:copperNickel,
    }

];

export default function Tubes() {
    return (
        <>
            <Helmet>
            <title>Round Bars Manufacturer & Supplier</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="TUBES"
            image={TubesBanner}
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
                                            to={`/products/tubes/${item.slug}`}
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