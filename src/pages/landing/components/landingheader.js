import React from "react";
import TopMenu from "./topmenu";
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { AppButtonGhost } from "../../../components/appbutton/appbutton";
import { useNavigate } from 'react-router-dom';
import { getStore } from "../../../stores";
import { observer } from "mobx-react";

function LandingHeader() {
  const { sessionStore } = getStore();
  const navigate = useNavigate()
  return (
    <Row gutter={0} flex="auto">
      <Col flex="none">
        <div className="logo">
          <img
            src="/images/Fiscall.Finance.png"
            style={{ width: "100%" }}
            alt="logo"
          />
        </div>
      </Col>
      <Col
        flex="auto"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TopMenu />
        {
          sessionStore.isLoggedIn ? (
            <AppButtonGhost
              shape="round"
              style={{
                borderColor: "white",
                borderRadius: 20,
                color: "white",
                width: 150,
              }}
              onClick={()=>{
                navigate("/dashboard")
              }}
            >
              Dashboard <ArrowRightOutlined />
            </AppButtonGhost>
          ) : (
            <AppButtonGhost
              shape="round"
              style={{
                borderColor: "white",
                borderRadius: 20,
                color: "white",
                width: 100,
              }}
              onClick={()=>{
                navigate("/auth")
              }}
            >
              Login <ArrowRightOutlined />
            </AppButtonGhost>
          )
          //       <Link to="/dashboard">Dashboard</Link>
          //     ) : (
          //       <Link to="/auth">Login</Link>
          // )
        }
      </Col>
      <style jsx="true">{`
        .logo {
          float: left;
          width: 120px;
          height: 31px;
        }
      `}</style>
    </Row>
  );
}

export default observer(LandingHeader);
