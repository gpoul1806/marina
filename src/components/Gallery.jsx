import React from "react";

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-images">
        <img src="/path/to/image1.jpg" alt="Candle 1" />
        <img src="/path/to/image2.jpg" alt="Candle 2" />
      </div>
    </section>
  );
}

export default Gallery;
