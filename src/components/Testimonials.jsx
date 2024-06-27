import { Carousel } from "antd";
import React from "react";
import { Zoom } from "react-reveal";

function Testimonials() {
  return (
    <section className="testimonials">
      <Zoom>
        <h2 className="testimonials-title">Testimonials</h2>
      </Zoom>

      <Carousel dots={false} arrows={false} autoplay autoplaySpeed={4000}>
        <p style={{ padding: 30 }}>
          "Great course! Learned so much!" - Jane Doe
        </p>
        <p style={{ padding: 30 }}>
          "Highly recommend to anyone interested in candle making." - John Smith
        </p>
      </Carousel>
    </section>
  );
}

export default Testimonials;
