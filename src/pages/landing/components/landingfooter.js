import { Row, Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function LandingFooter() {
  return (
    <div style={{}}>
      <Row style={{ minHeight: 200, color: "grey" }}>
        <Col flex={1} style={{}}>
          <ul>
            <li>
              <Link to="#">line1 Lorem ipsum</Link>
            </li>
            <li>
              <Link to="#">line2 Lorem ipsum</Link>
            </li>
            <li>
              {" "}
              <Link to="#">line3 Lorem ipsum</Link>
            </li>
            <li>
              <Link to="#">line4 Lorem ipsum</Link>
            </li>
            <li>
              <Link to="#">line5 Lorem ipsum</Link>
            </li>
            <li>
              {" "}
              <Link to="#">line6 Lorem ipsum</Link>
            </li>
          </ul>
        </Col>
        <Col style={{ width: 2, backgroundColor: "grey" }}></Col>
        <Col flex={1} style={{ display: "flex", justifyContent: "flex-end" }}>
          <ul>
            <li>
              <Link to="#">line1 Lorem ipsum</Link>
            </li>
            <li>
              <Link to="#">line2 Lorem ipsum</Link>
            </li>
            <li>
              {" "}
              <Link to="#">line3 Lorem ipsum</Link>
            </li>
            <li>
              <Link to="#">line4 Lorem ipsum</Link>
            </li>
            <li>
              <Link to="#">line5 Lorem ipsum</Link>
            </li>
            <li>
              {" "}
              <Link to="#">line6 Lorem ipsum</Link>
            </li>
          </ul>
        </Col>
      </Row>
      <div>Copyright Reserved ©{new Date().getFullYear()}</div>
    </div>
  );
}

export default LandingFooter;
