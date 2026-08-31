import './GoogleMap.css'


function GoogleMap() {
  return (
    <section className="map-section">
      <div className="container">
      <iframe
        title="Shree Ashapura Metal & Alloy"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1392.9076767197716!2d72.828035!3d18.958839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3e00be7b17%3A0x4a7e664301ece1c1!2sShree%20Ashapura%20Metal%20%26%20Alloys%20Pvt.Ltd.!5e1!3m2!1sen!2sus!4v1781869121997!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
    </section>
  );
}

export default GoogleMap;