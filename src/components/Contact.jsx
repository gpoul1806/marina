import React from "react";
import { Zoom } from "react-reveal";
import { ParallaxBanner } from "react-scroll-parallax";
import Gal3 from "../assets/gal3.jpg";

function Contact() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: Gal3,
          speed: -50,
        },
      ]}
      style={{ aspectRatio: "2 / 1", height: "80svh", objectFit: "cover" }}>
      <section className="contact">
        <Zoom>
          <h2 className="contact-title">Contact Us</h2>
          <p>Email: contact@candlemakingcourses.com</p>
          <p>Phone: (123) 456-7890</p>
        </Zoom>
      </section>
    </ParallaxBanner>
  );
}

export default Contact;
