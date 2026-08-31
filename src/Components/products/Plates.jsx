import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";

import titaniumPlates from "../../products-image/ss-titanium-plates.webp";
import SSPlates from "../../products-image/stainless-steel-304-plates.webp";
import highPerformanceAlloyPlates from "../../products-image/ss-high-performance-alloy-plates.webp";
import alloy28Plates from "../../products-image/ss-alloy-28-plates.webp";
import specialAlloyPlates from "../../products-image/ss-special-alloy-plates.webp";
import nickelAlloyPlates from "../../products-image/ss-nickel-alloy-200-plates.webp";
import monel400Plates from "../../products-image/ss-monel-400-plates.webp";
import inconelPlates from "../../products-image/ss-inconel-600-plates.webp";
import incoloyPlates from "../../products-image/ss-incoloy-800-plates.webp";
import hastelloyPlates from "../../products-image/ss-hastelloy-plates.webp";
import duplexSteelPlates from "../../products-image/ss-duplex-super-duplex-plates.webp";
import copperNickelPlates from "../../products-image/ss-copper-nickel-plates.webp";



import PlatesBanner from "../../products-image/hero/plate.jpg";




const Products = [
    {
        id:1,
        slug:"titanium-plates-supplier-grade-2-grade-5-stockist-mumbai-india",
        name:"Titanium Plates Supplier - Grade 2 & Grade 5",
        image:titaniumPlates,
    },
    {
        id:2,
        slug:"stainless-steel-plates-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
        name:"Stainless Steel Plates Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:SSPlates,
    },
    {
        id:3,
        slug:"high-performance-alloy-plates-nimonic-nichrome-nitronic-nilo-alloy-supplier-stockist-mumbai-india",
        name:"High-Performance Alloy Plates – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:highPerformanceAlloyPlates,
    },
    {
        id:4,
        slug:"alloy-28-plates-supplier-stockist-mumbai-india",
        name:"Alloy 28 Plates Supplier",
        image:alloy28Plates,
    },
    {
        id:5,
        slug:"special-alloy-plates-supplier-smo-254-f44-alloy-20-stockist-mumbai-india",
        name:"Special Alloy Plates Supplier – SMO 254 (F44) & Alloy 20",
        image:specialAlloyPlates,
    },
    {
        id:6,
        slug:"nickel-alloy-200-201-plates-supplier-stockist-mumbai-india",
        name:"Nickel Alloy 200 / 201 Plates Supplier",
        image:nickelAlloyPlates,
    },
    {
        id:7,
        slug:"monel-400-plates-supplier-stockist-mumbai-india",
        name:"Monel 400 Plates Supplier",
        image:monel400Plates,
    },
    {
        id:8,
        slug:"inconel-plates-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india",
        name:"Inconel Plates Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:inconelPlates,
    },
    {
        id:9,
        slug:"incoloy-plates-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india",
        name:"Incoloy Plates Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
        image:incoloyPlates,
    },
    {
        id:10,
        slug:"hastelloy-plates-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
        name:"Hastelloy Plates Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:hastelloyPlates,
    },
    {
        id:11,
        slug:"duplex-super-duplex-steel-plates-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
        name:"Duplex & Super Duplex Steel Plates Supplier – S31803, S32205, S32750, S32760",
        image:duplexSteelPlates,
    },
    {
        id:12,
        slug:"copper-nickel-plates-supplier-70-30-90-10-plates-stockist-mumbai-india",
        name:"Copper Nickel Plates Supplier – 70/30 & 90/10 Plates",
        image:copperNickelPlates,
    }

];

export default function Plates() {
    return (
        <>
            <Helmet>
            <title>Plates Manufacturer & Supplier</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="PLATES"
            image={PlatesBanner}
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
                                            to={`/products/plates/${item.slug}`}
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