import { Link } from "react-router-dom";
import "../products/Products.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/common/Navbar/Navbar";
import Footer from "../../Components/common/Footer/Footer";
import Banner from "../products/Banner";


import DuplexSteelBanner from "../../products-image/product-banner.webp";

import Tubes from "../../products-image/ss-duplex-super-duplex-tubes.webp";
import RoundBars from "../../products-image/ss-duplex-super-duplex-roundbars.webp";
import Sheets from "../../products-image/ss-duplex-super-duplex-sheets.webp";
import Plates from "../../products-image/ss-duplex-super-duplex-plates.webp";
import Wires from "../../products-image/ss-duplex-super-duplex-wires.webp";
import Coils from "../../products-image/ss-coils.webp";
import Pipes from "../../products-image/ss-duplex-super-duplex-pipes.webp";



const materials = [
    {
        id:1,
        name:"Duplex & Super Duplex Steel Tubes Supplier – S31803, S32750, S32760",
        image:Tubes,
    },
    {
        id:2,
        name:"Duplex & Super Duplex Steel Round Bars Supplier – S31803, S32205, S32750, S32760, S32550",
        image:RoundBars,
    },
    {
        id:3,
        name:"Duplex & Super Duplex Steel Sheets Supplier – S31803, S32205, S32750, S32760",
        image:Sheets,
    },
    {
        id:4,
        name:"Duplex & Super Duplex Steel Plates Supplier – S31803, S32205, S32750, S32760",
        image:Plates,
    },
    {
        id:5,
        name:"Duplex & Super Duplex Steel Wires Supplier – S31803, S32205, S32750, S32760",
        image:Wires,
    },
    {
        id:6,
        name:"Duplex & Super Duplex Steel Coils Supplier – S31803, S32205, S32750, S32760",
        image:Coils,
    },
    {
        id:7,
        name:"Duplex / Super Duplex Steel Pipes Supplier",
        image:Pipes,
    }

];

export default function DuplexSteel() {
    return (
        <>
            <Helmet>
            <title>Duplex Steel Products</title>
            <meta
            name="description"
            content="Leading manufacturer and exporter of stainless steel, duplex steel, titanium, nickel alloy and special alloy coils."
            />
            </Helmet>

            <Navbar />

            <Banner
            title="Duplex Steel Products"
            image={DuplexSteelBanner}
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
                                            to={`/products/copperNickel/${item.id}`}
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