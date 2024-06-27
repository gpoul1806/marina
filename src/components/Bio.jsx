import React from "react";
import { Zoom } from "react-reveal";

function Bio() {
  return (
    <section className="bio">
      <Zoom>
        <h2 className="bio-title">About the Instructor</h2>
      </Zoom>
      <p className="bio-description">
        Our instructor has over 10 years of experience in candle making and has
        taught hundreds of students the craft.
      </p>
    </section>
  );
}

export default Bio;
