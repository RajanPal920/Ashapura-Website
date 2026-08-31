import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";


import RoundBarsBanner from "../../products-image/hero/bar.jpg";

import titaniumRoundBars from "../../products-image/ss-titanium-roundbars.webp";
import SSRoundBars from "../../products-image/ss-steel-roundbars.webp";
import highPerformance from "../../products-image/ss-highperformance-roundbars.webp";
import alloy28 from "../../products-image/ss-alloy-28-roundbars.webp";
import specialAlloy from "../../products-image/ss-special-alloy-roundbars.webp";
import nickelAlloy from "../../products-image/ss-nickel-alloy-200-roundbars.webp";
import monel400 from "../../products-image/ss-monel-400-roundbars.webp";
import inconel from "../../products-image/ss-inconel-600-roundbars.webp";
import incoloy from "../../products-image/ss-incoloy-roundbars.webp";
import hastelloy from "../../products-image/ss-hastelloy-roundbars.webp";
import duplexSteel from "../../products-image/ss-duplex-super-duplex-roundbars.webp";
import copperNickel from "../../products-image/ss-copper-nickel-roundbars.webp";


const Products = [
    {
        id:1,
        slug:"titanium-round-bars-supplier-grade-2-grade-5-stockist-mumbai-india",
        name:"Titanium Round Bars Supplier - Grade 2 & Grade 5",
        image:titaniumRoundBars,
    },
    {
        id:2,
        slug:"stainless-steel-round-bars-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
        name:"Stainless Steel Round Bars Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:SSRoundBars,
    },
    {
        id:3,
        slug:"high-performance-alloy-round-bars-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
        name:"High-Performance Alloy Round Bars Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:highPerformance,
    },
    {
        id:4,
        slug:"alloy-28-round-bars-supplier-stockist-mumbai-india",
        name:"Alloy 28 Round Bars Supplier",
        image:alloy28,
    },
    {
        id:5,
        slug:"special-alloy-round-bars-supplier-smo-254-f44-alloy-20-stockist-mumbai-india",
        name:"Special Alloy Round Bars Supplier – SMO 254 (F44) & Alloy 20",
        image:specialAlloy,
    },
    {
        id:6,
        slug:"nickel-alloy-200-201-round-bars-supplier-stockist-mumbai-india",
        name:"Nickel Alloy 200 / 201 Round Bars Supplier",
        image:nickelAlloy,
    },
    {
        id:7,
        slug:"monel-round-bars-supplier-400-k500-r405-stockist-mumbai-india",
        name:"Monel Round Bars Supplier - 400, K500 & R405",
        image:monel400,
    },
    {
        id:8,
        slug:"inconel-round-bars-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india",
        name:"Inconel Round Bars Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:inconel,
    },
    {
        id:9,
        slug:"incoloy-round-bars-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india",
        name:"Incoloy Round Bars Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
        image:incoloy,
    },
    {
        id:10,
        slug:"hastelloy-round-bars-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
        name:"Hastelloy Round Bars Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:hastelloy,
    },
    {
        id:11,
        slug:"duplex-super-duplex-steel-round-bars-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
        name:"Duplex & Super Duplex Steel Round Bars Supplier – S31803, S32205, S32750, S32760",
        image:duplexSteel,
    },
    {
        id:12,
        slug:"copper-nickel-round-bars-supplier-stockist-mumbai-india",
        name:"Copper Nickel Round Bars Supplier ",
        image:copperNickel,
    }

];

export default function RoundBars() {
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
            title="ROUND BARS"
            image={RoundBarsBanner}
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
                                            to={`/products/round-bars/${item.slug}`}
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