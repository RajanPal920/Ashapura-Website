import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";


import WiresBanner from "../../products-image/hero/wire.jpg";

import titaniumWires from "../../products-image/ss-titanium-wires.webp";
import SSWires from "../../products-image/ss-steel-wires.webp";
import highPerformance from "../../products-image/ss-highperformance-wires.webp";
import alloy28 from "../../products-image/ss-alloy-28-wires.webp";
import specialAlloy from "../../products-image/ss-special-alloy-wires.webp";
import nickel from "../../products-image/ss-nickel-alloy-wires.webp";
import monel400 from "../../products-image/ss-monel-400-wires.webp";
import inconel from "../../products-image/ss-inconel-wires.webp";
import incoloy from "../../products-image/ss-incoloy-wires.webp";
import hastelloy from "../../products-image/ss-hastelloy-wires.webp";
import duplexSteel from "../../products-image/ss-duplex-super-duplex-wires.webp";
import copperNickel from "../../products-image/ss-copper-nickel-wires.webp";




const Products = [
    {
        id:1,
        slug:"titanium-wires-supplier-grade-2-grade-5-stockist-mumbai-india",
        name:"Titanium Wires Supplier - Grade 2 & Grade 5",
        image:titaniumWires,
    },
    {
        id:2,
        slug:"stainless-steel-wires-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
        name:"Stainless Steel Wires Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:SSWires,
    },
    {
        id:3,
        slug:"high-performance-alloy-wires-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
        name:"High-Performance Alloy Wires Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:highPerformance,
    },
    {
        id:4,
        slug:"alloy-28-wires-supplier-stockist-mumbai-india",
        name:"Alloy 28 Wires Supplier",
        image:alloy28,
    },
    {
        id:5,
        slug:"special-alloy-wires-supplier-smo-254-f44-alloy-20-stockist-mumbai-india",
        name:"Special Alloy Wires Supplier – SMO 254 (F44) & Alloy 20",
        image:specialAlloy,
    },
    {
        id:6,
        slug:"nickel-alloy-200-201-wires-supplier-stockist-mumbai-india",
        name:"Nickel Alloy 200 / 201 Wires Supplier",
        image:nickel,
    },
    {
        id:7,
        slug:"monel-wires-supplier-400-k500-r405-stockist-mumbai-india",
        name:"Monel Wires Supplier - 400, K500 & R405",
        image:monel400,
    },
    {
        id:8,
        slug:"inconel-wires-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india",
        name:"Inconel Wires Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:inconel,
    },
    {
        id:9,
        slug:"incoloy-wires-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india",
        name:"Incoloy Wires Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
        image:incoloy,
    },
    {
        id:10,
        slug:"hastelloy-wires-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
        name:"Hastelloy Wires Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
            image:hastelloy,
    },
    {
        id:11,
        slug:"duplex-super-duplex-steel-wires-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
        name:"Duplex & Super Duplex Steel Wires Supplier – S31803, S32205, S32750, S32760",
        image:duplexSteel,
    },
    {
        id:12,
        slug:"copper-nickel-wires-supplier-stockist-mumbai-india",
        name:"Copper Nickel Wires Supplier ",
        image:copperNickel,
    }

];

export default function Wires() {
    return (
        <>
            <Helmet>
            <title>Wires Manufacturer & Supplier</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Wires"
            image={WiresBanner}
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
                                            to={`/products/wires/${item.slug}`}
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