import React, { useState } from "react";
import "./auth.css";
import login from "../Assets/Images/loginbackground.png";
import { Form, Input, Checkbox } from "antd";
import googleicon from "../Assets/Images/gogleicon.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleSubmitForm = () => {
    // Directly navigate to the dashboard without any email or password checks
    navigate("/admin/dashboard/overview");
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-md-12 login-left">
            <h2 className="login-heading">Diskuss</h2>
            <div className="login-card col-lg-10">
              <center>
                <h2>Log in to your account</h2>
                <p>Welcome back! Please enter your details.</p>
              </center>
              <Form layout="vertical" className="login-form">
                <div className="col-lg-12 ">
                  <Form.Item label="Email" name="email">
                    <Input
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={formData?.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="col-lg-12 ">
                  <Form.Item label="Password" name="password">
                    <Input.Password
                      placeholder="Enter your password"
                      autoComplete="off"
                      value={formData?.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="col-lg-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <Form.Item name="remember" valuePropName="checked" className="mb-0">
                      <Checkbox>Remember for 30 days</Checkbox>
                    </Form.Item>
                    <button
                      className="forgot-password-button"
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot Password
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="sign-button" onClick={handleSubmitForm}>
                    Sign in
                  </button>
                </div>
                <div className="mt-2">
                  <button className="google-button">
                    <img src={googleicon} alt="" />
                    Sign in with Google
                  </button>
                </div>
                <div className="mt-2">
                  <p>
                    Don’t have an account?
                    <span
                      className="register-btn"
                      onClick={() => navigate("/signup")}
                    >
                      Register
                    </span>
                  </p>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-lg-7 col-sm-0 col-md-0 login-right">
            <img src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
