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
  Typography,
  Space,
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import authHttpService from "../../services/https/apis/auth.http.service";
import { toast } from "react-toastify";
import { log } from "../../utils/app.debug";
import {
  AppButtonFilled,
  SocialButton,
} from "../../components/appbutton/appbutton";
import AppInput, { PasswordAppInput } from "../../components/appinput/appinput";
import FacebookLogo from "../../assets/images/facebook.png";
import GoogleLogo from "../../assets/images/google.png";
export default function RegisterPage() {
  const [state, setState] = useState({
    loading: false,
  });
  const onFinish = (values) => {
    log("Received values of form: ", values);
    setState({ ...state, loading: true });
    this.props.history.push("/auth/login");
    // authHttpService
    //   .register(values)
    //   .then((res) => {
    //     toast.success("Account has been created, please login to continue");
    //     setState({ ...state, loading: false });
    //     this.props.history.push('/auth/login')
    //   })
    //   .catch((err) => {
    //     setState({ ...state, loading: false });
    //     toast.error(err.message);
    //   });
  };
  return (
    <Page title="Register" style={{padding: 20}}>
      <Row  justify="center" style={{ minHeight: "100vh",marginTop:'10%' }}>
        <Col flex="50%">
          <div>
            <div>
              <Typography.Title>Create Account</Typography.Title>
            </div>
            <div id="social-signup">
              <Space wrap style={{ justifyContent: "center", width: "100%" }}>
                <SocialButton
                  socialIcon={
                    <img src={GoogleLogo} style={{ marginRight: 10,width:25 }} />
                  }
                >
                  Sign up with Google
                </SocialButton>
                <SocialButton
                  socialIcon={
                    <img src={FacebookLogo} style={{ marginRight: 10,width:25 }} />
                  }
                >
                  Sign up with Facebook
                </SocialButton>
              </Space>
            </div>
            <div style={{ textAlign: "center", margin: "50px 0px 50px 0px" }}>
              <Typography.Text type="secondary">-OR-</Typography.Text>
            </div>
          </div>
          <Form
            name="normal_signup"
            className="signup-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your fullname",
                },
              ]}
            >
              <AppInput placeholder="Full Name" />
            </Form.Item>

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
                Create Account
              </AppButtonFilled>
              <div style={{ marginTop: 10 }}>
                Already have an account? <Link to="/auth/login">Login</Link>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Page>
  );
}
