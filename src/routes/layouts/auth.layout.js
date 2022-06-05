import { Col, Row } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import RestaurantImage from "../../assets/images/restaurant_image.jpg";
import { useMediaQuery } from 'react-responsive'
import { sizes } from "../../theme/theme";
import { log } from '../../utils/app.debug';
export default function AuthLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery({ maxWidth: sizes.tablet })
  return (
    <Row  style={{
      backgroundColor: theme.palette.primary.main,
      height: "100%",
      width: "100%",
      position: "fixed",
      top:0,
      bottom: 0,
      left:0,
      right:0,
      overflow: 'hidden'
    }} >
      <Col
        flex="40%"
        style={{
          backgroundColor: theme.palette.primary.main,
          display:isMobile?'none':"block"
        }}
      >
        <div
          style={{
            height: 300,
            width: 300,
            borderRadius: 150,
            margin: "-50px 0px 0px -50px ",
            backgroundColor: theme.palette.primary.dark,
          }}
        ></div>

        <div
          style={{
            height: 300,
            width: 300,
            borderRadius: 150,
            margin: "-50px 0px 0px -50px ",
            backgroundColor: theme.palette.primary.dark,
            position:'absolute',
            bottom:-80,
            right:-60,
            overflowY:'clip'
          }}
        ></div>
      </Col>
      <Col
        flex="auto"
        style={{
          borderTopLeftRadius: 40,
          borderBottomLeftRadius: 40,
          backgroundColor: "white",
          overflowX:'hidden',
          overflowY:'auto',
          height:'100vh'
        }}
      >
        <Outlet />
      </Col>
    </Row>
  );
}
