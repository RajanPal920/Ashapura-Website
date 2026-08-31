import "./Banner.css";

export default function Banner({
    title,
    image
}) {
  
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className="banner-overlay"></div>

      <div className="container banner-wrapper">

        <div className="banner-left">

          <span className="banner-tag">
            QUALITY ASSURANCE
          </span>

          <h1>{title}</h1>

          
        </div>
       </div>    
    </section>
  )  

}