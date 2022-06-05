import { Result, Button } from "antd";
import React from "react";
import Page from "../components/common/page.component";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <Page title="404 Not Found Error">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </Page>
  );
}
