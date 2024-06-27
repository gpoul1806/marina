import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import { Bounce, Roll, LightSpeed, Zoom, Rotate } from "react-reveal";
import { Divider, Flex, Image } from "antd";
import Logo from "./assets/logo2.jpg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => {
      setLoading(true);
    };
  }, []);

  return loading ? (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{ height: "100svh", backgroundColor: "pink" }}>
      <Bounce top cascade>
        <h2>Welcome to Bee Mama...</h2>
      </Bounce>
      <br />
      <Rotate bottom cascade>
        <Image
          preview={false}
          src={Logo}
          style={{ borderRadius: 150, width: 200 }}
        />
      </Rotate>
    </Flex>
  ) : (
    <div className="App">
      <Header />
      <Divider />
      <Bio />
      <Divider />
      <Courses />
      <Divider />
      <Gallery />
      <Divider />
      <Schedule />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
    </div>
  );
}

export default App;
