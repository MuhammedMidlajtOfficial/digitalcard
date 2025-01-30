import React, { useState } from "react";
import "./auth.css";
import login from "../Assets/Images/loginbackground.svg";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import  { axiosInstance } from "../../../src/AxiosConfig";
import { showSuccessMessage, showErrorMessage } from "../../../src/globalConstant";


const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const loggedInUserInfo = JSON.parse(sessionStorage.getItem("loggedInUserInfo"));

  const sendOtp = async () => {
    try {
      const email = form.getFieldValue("email");
      if (!email) {
        showErrorMessage("Please enter an email.");
        return;
      }
      const response = await axiosInstance.post(
        "/individual/sendotp",
        { email },
        {
          headers: {
            Authorization: `Bearer ${loggedInUserInfo?.accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        setOtpSent(true); 
        showSuccessMessage("OTP sent to your email.");
      } else {
        showErrorMessage(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      showErrorMessage("An error occurred while sending OTP.");
    }
  };

const onFinish = async (values) => {
  const { email, username, password, otp } = values;

  try {
    const response = await axiosInstance.post(
      "/individual/signup",
      { email, username, password, otp },
      {
        headers: {
          Authorization: `Bearer ${loggedInUserInfo?.accessToken}`,
        },
      }
    );

    if (response.status === 200 || response.status===201) {
      showSuccessMessage("User created successfully.");
      form.resetFields();
      setOtpSent(false); 
      navigate("/login");
    } else {
      showErrorMessage(response.data.message || "Failed to sign up.");
    }
  } catch (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      if (
        error.response.data.message.includes(
          "A user with this email address already exists"
        )
      ) {
        showErrorMessage(
          "A user with this email address already exists. Please login instead."
        );
      } else {
        showErrorMessage(error.response.data.message);
      }
    } else {
      showErrorMessage("An error occurred during sign-up.");
    }
  }
};

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-md-12 login-left">
            <h2 className="login-heading">Diskuss</h2>
            <div className="login-card col-lg-10">
              <center>
                <h2>Sign Up to your account</h2>
                <p>Welcome back! Please enter your details.</p>
              </center>
              <Form
                form={form}
                layout="vertical"
                className="login-form"
                onFinish={onFinish}
              >
                <div className="col-lg-12">
                  <Form.Item
                    label="User Name"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Username.",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                </div>
                <div className="col-lg-12">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email." },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="send-otp-button"
                    onClick={sendOtp}
                    disabled={otpSent}
                  >
                    {otpSent ? "OTP Sent" : "Send OTP"}
                  </button>
                </div>
                {otpSent && (
                  <>
                    <div className="col-lg-12">
                      <Form.Item
                        label="OTP"
                        name="otp"
                        rules={[
                          { required: true, message: "Please enter the OTP." },
                        ]}
                      >
                        <Input placeholder="Enter OTP" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-12">
                      <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your password.",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Enter your password" />
                      </Form.Item>
                    </div>
                  </>
                )}
                <div className="mt-4">
                  <button type="submit" className="sign-button" disabled={!otpSent}>
                    Sign Up
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-lg-7 col-sm-0 col-md-0 login-right">
            {/* <img src={login} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
