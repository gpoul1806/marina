import { ClockCircleOutlined } from "@ant-design/icons";
import { Flex, Timeline } from "antd";
import React from "react";
import { Zoom } from "react-reveal";

function Schedule() {
  return (
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
  );
}

export default Schedule;
