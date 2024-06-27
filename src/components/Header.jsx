import React from "react";
import Logo from "../assets/logo.jpg";
import { Image } from "antd";
import { Zoom, Bounce, Rotate } from "react-reveal";

function Header() {
  return (
    <header className="header">
      <Rotate>
        <Image
          preview={false}
          src={Logo}
          style={{ borderRadius: 150, width: 130 }}
        />
      </Rotate>
      <Zoom>
        <h1 className="header-title">Candle Making Courses</h1>
      </Zoom>
      <p className="header-description">
        Learn the art of candle making with our expert-led courses.
      </p>
    </header>
  );
}

export default Header;
