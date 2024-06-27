import { Carousel, Image } from "antd";
import React from "react";
import { Zoom } from "react-reveal";
import Gal1 from "../assets/gal1.jpg";
import Gal2 from "../assets/gal2.jpg";
import Gal3 from "../assets/gal3.jpg";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "transparent",
};

function Gallery() {
  return (
    <section className="gallery">
      <Zoom>
        <h2 className="gallery-title">Gallery</h2>
      </Zoom>
      <Carousel autoplay autoplaySpeed={1700}>
        <div>
          <Image
            preview={false}
            src={Gal1}
            style={{
              borderRadius: 6,
              height: 400,
              objectFit: "contain",
              objectPosition: "center center",
            }}
          />
        </div>
        <div>
          <Image
            preview={false}
            src={Gal2}
            style={{
              borderRadius: 6,
              height: 400,
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
        <div>
          <Image
            preview={false}
            src={Gal3}
            style={{
              borderRadius: 6,
              height: 400,
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
      </Carousel>
    </section>
  );
}

export default Gallery;
