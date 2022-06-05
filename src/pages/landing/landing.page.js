import React from "react";
import { Link } from "react-router-dom";
import Page from "../../components/common/page.component";
import { getStore } from "../../stores";
import { observer } from "mobx-react";
import { BackTop, Layout } from "antd";
import LandingHeader from "./components/landingheader";
import LandingFooter from "./components/landingfooter";
import { useTheme } from "styled-components";
import {FaHandPointUp} from 'react-icons/fa'
const { Header, Content, Footer } = Layout;

function LandingPage() {
  const { sessionStore } = getStore();
  const theme = useTheme();
  return (
    <Page title="App Name">
      <Layout style={{}}>
        <Header
          className="header shadow-lg"
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          }}
        >
          <LandingHeader />
        </Header>
        <Content className="site-layout" style={{ marginTop: 64 }}>
          <div
            id="home"
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
              minHeight: "100vh",
            }}
          >
            {sessionStore.isLoggedIn ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/auth">Login</Link>
            )}
          </div>
          <div id="about" style={{ minHeight: "100vh" }}>
            {sessionStore.isLoggedIn ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/auth">Login</Link>
            )}
          </div>
          <div
            id="pricing"
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
              minHeight: "100vh",
            }}
          >
            {sessionStore.isLoggedIn ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/auth">Login</Link>
            )}
          </div>
          <div id="services" style={{ minHeight: "100vh" }}>
            {sessionStore.isLoggedIn ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/auth">Login</Link>
            )}
          </div>
        </Content>
        <Footer
          style={{ minHeight: 300, padding: 100, backgroundColor: "black" }}
        >
          <LandingFooter />
        </Footer>
      </Layout>
      <style jsx="true">{`
        .site-layout .site-layout-background {
          background: #fff;
        }
      `}</style>

      <BackTop>
       <FaHandPointUp size={40} className="fab"/>
      </BackTop>
    </Page>
  );
}

export default observer(LandingPage);
