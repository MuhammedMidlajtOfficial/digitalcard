import React, { useState } from "react";
import "./auth.css";
import login from "../Assets/Images/loginbackground.png";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../src/AxiosConfig";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../../../src/globalConstant";
const ForgotPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //const loggedInUserInfo = JSON.parse(localStorage.getItem("loggedInUserInfo"));

  const sendOtp = async () => {
    try {
      const email = form.getFieldValue("email");
      if (!email) {
        showErrorMessage("Please enter an email.");
        return;
      }
      setLoading(true)
      const response = await axiosInstance.post(
        "adminAuth/forgotPassword/request-otp",
        { email }
      );

      if (response.status === 200) {
        showSuccessMessage("OTP sent to your email.");
        sessionStorage.setItem("otpEmail",email)
        navigate("/otp-verification",{ replace: true });
      } else {
        showErrorMessage(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        showErrorMessage(error.response.data.message || "An error occurred while sending OTP.");
      } else {
        showErrorMessage("An error occurred while sending OTP.");
      }

    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-md-12 login-left">
            <h2 className="login-heading">Diskuss</h2>
            <div className="login-card col-lg-12">
              <center>
                <h2>Forgot password</h2>
                <p>New Password</p>
              </center>
              <Form
                layout="vertical"
                className="login-form"
                form={form}
              >
                <div className="col-lg-12">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email!",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                  </Form.Item>
                </div>
                <div className="mt-4">
                  <button
                    className="sign-button"
                    disabled={loading}
                    onClick={(e) => {
                      e.preventDefault();
                      sendOtp();
                    }}
                  >
                  {loading ? "Continue..." : "Continue"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-lg-7 col-sm-0 col-md-0 login-right">
            <img src={login} alt="Login background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
