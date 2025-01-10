import React, { useState } from "react";
import "./auth.css";
import login from "../Assets/Images/loginbackground.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { axiosInstance } from "../../../src/AxiosConfig";

const OtpScreen = () => {
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  //const loggedInUserInfo = JSON.parse(localStorage.getItem("loggedInUserInfo"));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtpCode = [...otpCode];
      newOtpCode[index] = value;
      setOtpCode(newOtpCode);
      if (value && index < otpCode.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    if (pasteData.length <= 6 && /^\d+$/.test(pasteData)) {
      const newOtpCode = [...otpCode];
      for (let i = 0; i < pasteData.length; i++) {
        if (i < otpCode.length) {
          newOtpCode[i] = pasteData[i];
        }
      }
      setOtpCode(newOtpCode);
      const nextEmptyIndex = newOtpCode.findIndex((code) => code === "");
      if (nextEmptyIndex !== -1) {
        document.getElementById(`otp-input-${nextEmptyIndex}`).focus();
      } else {
        document.querySelector(".sign-button").focus();
      }
    }
  };
  const onFinish = async () => {
    const otp = otpCode.join("");
    const email = sessionStorage.getItem("otpEmail");
    try {
      setLoading(true)
      const response = await axiosInstance.post(
        "adminAuth/forgotPassword/validate-otp",
        { email, otp },
      );
  
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Congratulations",
          text: "OTP is validated.",
          confirmButtonText: "Done",
          iconColor: "var(--green-color)",
          confirmButtonColor: "var(--gradient-start-color)",
        }).then(() => {
          sessionStorage.removeItem("otpEmail");
          sessionStorage.setItem("resetPasswordToken",response.data.token)
          navigate("/create-password",{ replace: true });
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "OTP Not Correct",
          text: response.data.message || "OTP is not correct.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "var(--danger-color)",
        });
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMsg = error.response.data.message.includes(
          "A user with this email address already exists"
        )
          ? "A user with this email address already exists. Please login instead."
          : error.response.data.message;
  
        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMsg,
          confirmButtonText: "Try Again",
          confirmButtonColor: "var(--danger-color)",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred during OTP validation.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "var(--danger-color)",
        });
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
            <h2 className="login-heading-forgot">Diskuss</h2>
            <div className="login-card-forgot col-lg-12">
              <center>
                <h2>OTP Verification</h2>
                <p>Enter OTP Code sent to your email</p>
              </center>
              <Form layout="vertical" className="login-form" onFinish={onFinish}>
                <Form.Item>
                  <div className="otp-input-group" onPaste={handlePaste}>
                    {otpCode.map((code, index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength={1}
                        value={code}
                        onChange={(e) => handleChange(e, index)}
                        className="otp-input"
                      />
                    ))}
                  </div>
                </Form.Item>
                <div className="resend-info">
                  <p>
                    Didn’t get OTP? 
                  </p>
                  <p className="resend-link">Resend Code</p>
                </div>
                <button type="submit" className="sign-button" disabled={loading}>
                  {loading ? "Verify & Proceed..." : "Verify & Proceed"}
                </button>
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

export default OtpScreen;
