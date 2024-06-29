import { Flex, Timeline } from "antd";
import React from "react";
import { Zoom } from "react-reveal";
import Gal2 from "../assets/gal2.jpg";
import { ParallaxBanner } from "react-scroll-parallax";

function Schedule() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: Gal2,
          speed: -40,
        },
      ]}
      style={{ aspectRatio: "2 / 1", height: "70svh" }}>
      <section className="schedule">
        <Zoom>
          <h2 className="schedule-title">Upcoming Workshops</h2>
        </Zoom>
        <Timeline
          mode="alternate"
          items={[
            {
              position: "right",
              children: (
                <Flex vertical>
                  <span>2015-09-01</span> <span>xaxa</span>
                </Flex>
              ),
            },
            {
              position: "left",
              children: (
                <Flex vertical>
                  <span>2015-09-01</span> <span>xaxa</span>
                </Flex>
              ),
            },
            {
              position: "right",
              children: (
                <Flex vertical>
                  <span>2015-09-01</span> <span>xaxa</span>
                </Flex>
              ),
            },
            {
              position: "right",
              children: (
                <Flex vertical>
                  <span>2015-09-01</span> <span>xaxa</span>
                </Flex>
              ),
            },
          ]}
        />
      </section>
    </ParallaxBanner>
  );
}

export default Schedule;
