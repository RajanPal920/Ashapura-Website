import { useState } from "react";

import "./GalleryGrid.css";

const images = [
  {
    id:1,
    category:"factory",
    image:"/assets/images/factory2.webp",
    
  },
  {
    id:2,
    category:"products",
    image:"/assets/images/product1.webp",
    
  },
  {
    id:3,
    category:"projects",
    image:"/assets/images/project1.webp",
    
  }
];

function GalleryGrid() {

  const [filter,setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? images
      : images.filter(
          item => item.category === filter
        );

  return (
    <section className="gallery">

      <div className="container">

        <div className="gallery-filter">

          <button onClick={()=>setFilter("all")}>
            All
          </button>

          <button onClick={()=>setFilter("factory")}>
            Factory
          </button>

          <button onClick={()=>setFilter("products")}>
            Products
          </button>

          <button onClick={()=>setFilter("projects")}>
            Projects
          </button>

        </div>

        <div className="gallery-grid">

          {filtered.map(item=>(
            <img
              key={item.id}
              src={item.image}
              alt=""
              loading="lazy"
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryGrid;