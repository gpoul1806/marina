import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Card, Flex, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Zoom } from "react-reveal";

function Courses() {
  return (
    <section className="courses">
      <Zoom>
        <h2 className="courses-title">Course Packages</h2>
      </Zoom>
      <Flex vertical justify="center" align="center">
        <h3>Basic Candle Making</h3>
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Tooltip title="Shop Now">
              <ShoppingCartOutlined style={{ fontSize: 20 }} key="ellipsis" />
            </Tooltip>,
          ]}>
          <Meta
            avatar={
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Flex>
      <Flex vertical justify="center" align="center">
        <h3>Advanced Techniques</h3>
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Tooltip title="Shop Now">
              <ShoppingCartOutlined style={{ fontSize: 20 }} key="ellipsis" />
            </Tooltip>,
          ]}>
          <Meta
            avatar={
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Flex>
    </section>
  );
}

export default Courses;
