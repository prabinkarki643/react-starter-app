import React, { useState } from "react";
import { Link } from "react-router-dom";
import Page from "../../components/common/page.component";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Card,
  Layout,
  Typography,
  Space,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import authHttpService from "../../services/https/apis/auth.http.service";
import { toast } from "react-toastify";
import { log } from "../../utils/app.debug";
import { sessionStore } from "../../stores/session/session.store";
import AppInput, { PasswordAppInput } from "../../components/appinput/appinput";
import {
  AppButtonFilled,
  AppButtonGhost,
  AppButtonBorderless,
  SocialButton,
} from "../../components/appbutton/appbutton";
import FacebookLogo from "../../assets/images/facebook.png";
import GoogleLogo from "../../assets/images/google.png";

export default function LoginPage() {
  const [state, setState] = useState({
    loading: false,
  });
  const onFinish = (values) => {
    log("Received values of form: ", values);
    const { identifier, password, remember } = values;
    setState({ ...state, loading: true });
    sessionStore.setSession(
      {
        user: {
          username: "Test user",
          email: "testuser@gmail.com",
        },
        token: "ksdsjdksdjksjdkjdksjdksd",
      },
      remember
    );
    // authHttpService
    //   .login(identifier, password)
    //   .then((res) => {
    //     setState({ ...state, loading: false });
    //     if (res?.data?.user?.role?.type !== "restaurantowner") {
    //       return toast.error(
    //         "You must be RestaurantOwner in order to view this site, please contact your admin!"
    //       );
    //     }
    //     sessionStore.setSession({
    //       user: res?.data?.user,
    //       token: res?.data?.jwt,
    //     },remember);
    //     toast.success("Welcome back");
    //   })
    //   .catch((err) => {
    //     setState({ ...state, loading: false });
    //     toast.error(err.message);
    //   });
  };
  return (
    <Page title="Login" style={{padding: 20}}>
      <Row  justify="center" style={{ minHeight: "100vh",marginTop:'10%' }}>
        <Col flex="50%">
          <div>
            <div>
              <Typography.Title>Login With</Typography.Title>
            </div>
            <div id="social-login">
              <Space wrap style={{ justifyContent:"center", width: "100%" }}>
                <SocialButton
                  socialIcon={
                    <img src={GoogleLogo} style={{ marginRight: 10,width:25  }} />
                  }
                >
                  Login with Google
                </SocialButton>
                <SocialButton
                  socialIcon={
                    <img src={FacebookLogo} style={{ marginRight: 10,width:25 }} />
                  }
                >
                  Login with Facebook
                </SocialButton>
              </Space>
            </div>
            <div style={{ textAlign: "center", margin: "50px 0px 50px 0px" }}>
              <Typography.Text type="secondary">-OR-</Typography.Text>
            </div>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email",
                },
              ]}
            >
              <AppInput placeholder="Email Address" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}
            >
              <PasswordAppInput placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <AppButtonFilled
                htmlType="submit"
                className="login-form-button"
                loading={state.loading}
                block
                size="large"
              >
                Login
              </AppButtonFilled>
              <div style={{ marginTop: 10 }}>
                Don't have an account? <Link to="/auth/register">Sign up</Link>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Page>
  );
}
