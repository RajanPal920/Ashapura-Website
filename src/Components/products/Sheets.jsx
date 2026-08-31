import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";


import SheetsBanner from "../../products-image/hero/plate.jpg";

import titaniumSheets from "../../products-image/ss-titanium-sheets.webp";
import ssSheets from "../../products-image/ss-steel-sheets.webp";
import highPerformance from "../../products-image/ss-highperformance-sheets.webp";
import alloy28 from "../../products-image/ss-alloy-28-sheets.webp";
import specialAlloy from "../../products-image/ss-special-alloy-sheets.webp";
import nickelAlloy from "../../products-image/ss-nickel-alloy-200-sheets.webp";
import monel400 from "../../products-image/ss-monel-400-sheets.webp";
import inconel from "../../products-image/ss-inconel-600-sheets.webp";
import incoloy from "../../products-image/ss-incoloy-sheets.webp";
import hastelloy from "../../products-image/ss-hastelloy-sheets.webp";
import duplexSteel from "../../products-image/ss-duplex-super-duplex-sheets.webp";
import copperNickel from "../../products-image/ss-copper-nickel-sheets.webp";


const Products = [
    {
        id:1,
        slug:"titanium-sheets-supplier-grade-2-grade-5-stockist-mumbai-india",
        name:"Titanium Sheets Supplier - Grade 2 & Grade 5",
        image:titaniumSheets,
    },
    {
        id:2,
        slug:"stainless-steel-sheets-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india",
        name:"Stainless Steel Sheets Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
        image:ssSheets,
    },
    {
        id:3,
        slug:"high-performance-alloy-sheets-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
        name:"High-Performance Alloy Sheets Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:highPerformance,
    },
    {
        id:4,
        slug:"alloy-28-sheets-supplier-stockist-mumbai-india",
        name:"Alloy 28 Sheets Supplier",
        image:alloy28,
    },
    {
        id:5,
        slug:"special-alloy-sheets-supplier-smo-254-f44-alloy-20-stockist-mumbai-india",
        name:"Special Alloy Sheets Supplier – SMO 254 (F44) & Alloy 20",
        image:specialAlloy,
    },
    {
        id:6,
        slug:"nickel-alloy-200-201-sheets-supplier-stockist-mumbai-india",
        name:"Nickel Alloy 200 / 201 Sheets Supplier",
        image:nickelAlloy,
    },
    {
        id:7,
        slug:"monel-400-sheets-supplier-stockist-mumbai-india",
        name:"Monel 400 Sheets Supplier",
        image:monel400,
    },
    {
        id:8,
        slug:"inconel-sheets-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india",
        name:"Inconel Sheets Supplier – 600, 601, 625, 690, 718, 725 & X-750",
        image:inconel,
    },
    {
        id:9,
        slug:"incoloy-sheets-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india",
        name:"Incoloy Sheets Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
        image:incoloy,
    },
    {
        id:10,
        slug:"hastelloy-sheets-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india",
        name:"Hastelloy Sheets Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
        image:hastelloy,
    },
    {
        id:11,
        slug:"duplex-super-duplex-steel-sheets-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india",
        name:"Duplex & Super Duplex Steel Sheets Supplier – S31803, S32205, S32750, S32760",
        image:duplexSteel,
    },
    {
        id:12,
        slug:"copper-nickel-sheets-supplier-stockist-mumbai-india",
        name:"Copper Nickel Sheets Supplier ",
        image:copperNickel,
    }

];

export default function Sheets() {
    return (
        <>
            <Helmet>
            <title>Sheets Manufacturer & Supplier</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title=" SHEETS"
            image={SheetsBanner}
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
                                            to={`/products/sheets/${item.slug}`}
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