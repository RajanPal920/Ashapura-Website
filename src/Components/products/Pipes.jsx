import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";

import highPerformance from "../../products-image/high-performance-alloy-pipes.webp";
import sSteel from "../../products-image/ss-steel-pipes.webp";
import titanium from "../../products-image/titanium-pipes.webp";
import alloy28 from "../../products-image/alloy-28-pipes.webp";
import alloy20 from "../../products-image/alloy-20-pipes.webp";
import smo254 from "../../products-image/ss-smo-pipes.webp";
import nickelAlloy201 from "../../products-image/nickel-alloy-201-pipes.webp";
import nickelAlloy from "../../products-image/nickel-alloy-pipes-supplier.webp";
import monel400 from "../../products-image/ss-monel-400-pipes.webp";
import monel from "../../products-image/ss-monel-pipes.webp";
import inconelX750 from "../../products-image/ss-inconel-x-750-pipes.webp";
import inconel718 from "../../products-image/ss-inconel-718-pipes.webp";
import inconel690 from "../../products-image/ss-inconel-690-pipes.webp";
import inconel625 from "../../products-image/ss-inconel-625-pipes.webp";
import inconel601 from "../../products-image/ss-inconel-601-pipes.webp";
import inconel600 from "../../products-image/ss-inconel-600-pipes.webp";
import inconel from "../../products-image/ss-inconel-pipes.webp";
import incoloy825 from "../../products-image/ss-incoloy-825-pipes.webp";
import incoloy800h from "../../products-image/ss-incoloy-800h-pipes.webp";
import incoloy800330ds from "../../products-image/ss-incoloy-800-330ds-pipes.webp";
import incoloy from "../../products-image/ss-incoloy-pipes.webp";
import stainlessSteel from "../../products-image/stainless-steel-pipes.webp";
import hastelloyc2000 from "../../products-image/ss-hastelloy-c2000-pipes.webp";
import hastelloyb3 from "../../products-image/ss-hastelloy-b3-pipes.webp"; 
import hastelloyb2 from "../../products-image/ss-hastelloy-b2-pipes.webp";
import hastelloyc22 from "../../products-image/ss-hastelloy-c22-pipes.webp";
import hastelloyc276 from "../../products-image/ss-hastelloy-c276-pipes.webp";
import hastelloy from "../../products-image/ss-hastelloy-pipes.webp";
import superduplexS32750 from "../../products-image/ss-super-duplex-32750-pipes.webp";
import superduplexS32760 from "../../products-image/ss-super-duplex-32760-pipes.webp";
import ss310S from "../../products-image/stainless-steel-310s-pipes.webp";
import duplexsuperduplex from "../../products-image/ss-duplex-super-duplex-pipes.webp";
import coppernickel9010 from "../../products-image/ss-copper-nickel-90-10-pipes.webp";
import coppernickel7030 from "../../products-image/ss-copper-nickel-70-30-pipes.webp";
import coppernickel from "../../products-image/ss-copper-nickel-pipes.webp";
import stainlessSteel904L from "../../products-image/stainless-steel-904l-pipes.webp";
import stainlessSteel321 from "../../products-image/stainless-steel-321-pipes.webp";
import stainlessSteel317L from "../../products-image/stainless-steel-317l-pipes.webp";
import stainlessSteel316L from "../../products-image/stainless-steel-316-316l-pipes.webp";
import ssduplex31803 from "../../products-image/ss-duplex-s31803-pipes.webp";




import PipeHero from "../../products-image/hero/pipe.jpg"




const Products = [
    {
        id:1,
        slug:"high-performance-alloy-pipes-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india",
        name:"High-Performance Alloy Pipes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
        image:highPerformance,
    },
    {
        id:2,
        slug:"stainless-steel-304-304l-pipes-supplier-stockist-mumbai-india",
        name:"Stainless Steel 304 / 304L Pipes Supplier",
        image:sSteel,
    },
    {
        id:3,
        slug:"titanium-pipes-grade-2-grade-5-supplier-stockist-mumbai-india",
        name:"Titanium Pipes – Grade 2 & Grade 5 Supplier",
        image:titanium,
    },
    {
        id:4,
        slug:"alloy-28-pipes-supplier-stockist-mumbai-india",
        name:"Alloy 28 Pipes Supplier",
        image:alloy28,
    },
    {
        id:5,
        slug:"alloy-20-pipes-supplier-stockist-mumbai-india",
        name:"Alloy 20 Pipes Supplier",
        image:alloy20,
    },
    {
        id:6,
        slug:"smo-254-pipes-supplier-stockist-mumbai-india",
        name:"SMO 254 Pipes Supplier",
        image:smo254,
    },
    {
        id:7,
        slug:"nickel-alloy-200-201-pipes-supplier-stockist-mumbai-india",
        name:"Nickel Alloy 200 / 201 Pipes Supplier",
        image:nickelAlloy201,
    },
    {
        id:8,
        slug:"nickel-alloy-pipes-supplier-stockist-mumbai-india",
        name:"Nickel Alloy Pipes Supplier",
        image:nickelAlloy,
    },
    {
        id:9,
        slug:"monel-400-pipes-supplier-stockist-mumbai-india",
        name:"Monel 400 Pipes Supplier",
        image:monel400,
    },
    {
        id:10,
        slug:"monel-pipes-supplier-stockist-mumbai-india",
        name:"Monel Pipes Supplier",
        image:monel,
    },
    {
        id:11,
        slug:"inconel-x-750-pipes-supplier-stockist-mumbai-india",
        name:"Inconel X-750 Pipes Supplier",
        image:inconelX750,
    },
    {
        id:12,
        slug:"inconel-718-pipes-supplier-stockist-mumbai-india",
        name:"Inconel 718 Pipes Supplier",
        image:inconel718,
    },
    {
        id:13,
        slug:"inconel-690-pipes-supplier-stockist-mumbai-india",
        name:"Inconel 690 Pipes Supplier",
        image:inconel690,
    },
    {
        id:14,
        slug:"inconel-625-pipes-supplier-stockist-mumbai-india",
        name:"Inconel 625 Pipes Supplier",
        image:inconel625,
    },
    {
        id:15,
        slug:"inconel-601-pipes-supplier-stockist-mumbai-india",
        name:"Inconel 601 Pipes Supplier",
        image:inconel601,
    },
    {
        id:16,
        slug:"inconel-600-pipes-supplier-stockist-mumbai-india",
        name:"Inconel 600 Pipes",
        image:inconel600,
    },
    {
        id:17,
        slug:"inconel-pipes-supplier-stockist-mumbai-india",
        name:"Inconel Pipes",
        image:inconel,
    },
    {
        id:18,
        slug:"incoloy-825-pipes-supplier-stockist-mumbai-india",
        name:"Incoloy 825 Pipes",
        image:incoloy825,
    },
    {
        id:19,
        slug:"incoloy-800h-800ht-pipes-supplier-stockist-mumbai-india",
        name:"Incoloy 800H / 800HT Pipes Supplier",
        image:incoloy800h,
    },
    {
        id:20,
        slug:"incoloy-800-ds-330-pipes-supplier-stockist-mumbai-india",
        name:"Incoloy 800 (DS 330) Pipes Supplier",
        image:incoloy800330ds,
    },
    {
        id:21,
        slug:"incoloy-pipes-supplier-stockist-mumbai-india",
        name:"Incoloy Pipes Supplier",
        image:incoloy,
    },
    {
        id:22,
        slug:"stainless-steel-pipes-supplier-stockist-mumbai-india",
        name:"Stainless Steel Pipes Supplier",
        image:stainlessSteel,
    },
    {
        id:23,
        slug:"hastelloy-c2000-c59-c4-h-n-pipes-supplier-stockist-mumbai-india",  
        name:"Hastelloy C2000 / C59 / C4 / H - N Pipes Supplier",
        image:hastelloyc2000,
    },
    {
        id:24,
        slug:"hastelloy-b3-pipes-supplier-stockist-mumbai-india",
        name:"Hastelloy B3 Pipes Supplier",
        image:hastelloyb3,
    },
    {
        id:25,
        slug:"hastelloy-b2-pipes-supplier-stockist-mumbai-india",
        name:"Hastelloy B2 Pipes Supplier",
        image:hastelloyb2,
    },
    {
        id:26,
        slug:"hastelloy-c22-pipes-supplier-stockist-mumbai-india",
        name:"Hastelloy C22 Pipes Supplier",
        image:hastelloyc22,
    },
    {
        id:27,
        slug:"hastelloy-c276-pipes-supplier-stockist-mumbai-india",
        name:"Hastelloy C276 Pipes Supplier",
        image:hastelloyc276,
    },
    {
        id:28,
        slug:"hastelloy-pipes-supplier-stockist-mumbai-india",
        name:"Hastelloy Pipes Supplier",
        image:hastelloy,
    },
    {
        id:29,
        slug:"super-duplex-steel-uns-s32760-f55-pipes-supplier-stockist-mumbai-india",
        name:"Super Duplex Steel UNS S32760 F55 Pipes Supplier",
        image:superduplexS32760,
    },
    {
        id:30,
        slug:"super-duplex-steel-uns-s32750-f53-pipes-supplier-stockist-mumbai-india",
        name:"Super Duplex Steel UNS S32750 F53 Pipes Supplier",
        image:superduplexS32750,
    },
    {
        id:31,
        slug:"duplex-steel-uns-s31803-f51-s32205-f60-pipes-supplier-stockist-mumbai-india",
        name:"Duplex Steel UNS S31803 F51 / S32205 F60 Pipes Supplier",
        image:ssduplex31803,
    },
    {
        id:32,
        slug:"duplex-super-duplex-steel-pipes-supplier-stockist-mumbai-india",
        name:"Duplex / Super Duplex Steel Pipes Supplier",
        image:duplexsuperduplex,
    },
    {
        id:33,
        slug:"copper-nickel-90-10-pipes-supplier-stockist-mumbai-india",
        name:"Copper Nickel 90/10 Pipes Supplier",
        image:coppernickel9010,
    },
    {
        id:34,
        slug:"copper-nickel-70-30-pipes-supplier-stockist-mumbai-india",
        name:"Copper Nickel 70/30 Pipes Supplier",
        image:coppernickel7030,
    },
    {
        id:35,
        slug:"copper-nickel-pipes-supplier-stockist-mumbai-india",
        name:"Copper Nickel Pipes Supplier",
        image:coppernickel,
    },
    {
        id:36,
        slug:"stainless-steel-904l-pipes-supplier-stockist-mumbai-india",
        name:"Stainless Steel 904L Pipes Supplier",
        image:stainlessSteel904L,
    },
    {
        id:37,
        slug:"stainless-steel-321-pipes-supplier-stockist-mumbai-india",
        name:"Stainless Steel 321 Pipes Supplier",
        image:stainlessSteel321,
    },
    {
        id:38,
        slug:"stainless-steel-317l-pipes-supplier-stockist-mumbai-india",
        name:"Stainless Steel 317L Pipes Supplier",
        image:stainlessSteel317L,
    },
    {
        id:39,
        slug:"stainless-steel-316-316l-pipes-supplier-stockist-mumbai-india",
        name:"Stainless Steel 316 / 316L Pipes Supplier",
        image:stainlessSteel316L,
    },
    {
        id:40,
        slug:"stainless-steel-310s-pipes-supplier-stockist-mumbai-india",
        name:"Stainless Steel 310S Pipes Supplier",
        image:ss310S,
    },

];

export default function Pipes() {
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
            title="PIPES"
            image={PipeHero}
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
                                            to={`/products/pipes/${item.slug}`}
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