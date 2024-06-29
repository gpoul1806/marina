import React from "react";
import { Zoom } from "react-reveal";
import { ParallaxBanner } from "react-scroll-parallax";
import Gal1 from "../assets/gal1.jpg";

function Bio() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: Gal1,
          speed: -40,
        },
      ]}
      style={{ aspectRatio: "2 / 1", height: "70svh" }}>
      <section className="bio">
        <Zoom>
          <h2 className="bio-title">About the Instructor</h2>
          <p className="description">
            Our instructor has over 10 years of experience in candle making and
            has taught hundreds of students the craft.
          </p>
        </Zoom>
      </section>
    </ParallaxBanner>
  );
}

export default Bio;
