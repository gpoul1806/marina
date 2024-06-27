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
import { UserOutlined } from "@ant-design/icons";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => {
      setLoading(true);
    };
  }, []);

  return loading ? (
    <Flex vertical justify="center" align="center" style={{ height: "50svh" }}>
      <Bounce top cascade>
        Welcome to the site!
      </Bounce>
      <br />
      <Rotate bottom cascade>
        <Image
          src={
            "https://instagram.fath3-3.fna.fbcdn.net/v/t51.2885-19/418074314_1431147787752691_3630241750426936805_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fath3-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xY0J1yq7NjEQ7kNvgGWZ9wB&edm=AFg4Q8wBAAAA&ccb=7-5&oh=00_AYA1vC-7OvkF9kx47tQSYpsW3L-46wGe28dmppfFEzC9Qg&oe=6683030E&_nc_sid=0b30b7"
          }
          style={{ borderRadius: 25, width: 400 }}
        />
      </Rotate>
    </Flex>
  ) : (
    <div className="App">
      <Header />
      <Divider />
      <Bio />
      <Courses />
      <Testimonials />
      <Gallery />
      <Schedule />
      <Contact />
    </div>
  );
}

export default App;
