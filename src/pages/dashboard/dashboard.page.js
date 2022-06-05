import React from "react";
import { Link } from "react-router-dom";
import Page from "../../components/common/page.component";
import { Button,PageHeader,Typography } from "antd";
import { getStore } from "../../stores";
import { Container } from "../../components/common/container";

export default function DashboardPage() {
  const logout = () => {
    const { sessionStore } = getStore();
    sessionStore.logOutSession();
  };
  return (
    <Page title="Dashboard app">
      <Container>
      <PageHeader
        style={{ paddingLeft: 0 }}
        backIcon={false}
        title={
          <Typography.Text style={{ fontFamily: "NewRocker-Regular" }}>
            DASHBOARD
          </Typography.Text>
        }
      />
      <div>DashboardPage</div>
      <br />
      <Link to="/">Landing Page</Link>
      <br />
      <Button onClick={logout}>Logout</Button>
      </Container>
    </Page>
  );
}
