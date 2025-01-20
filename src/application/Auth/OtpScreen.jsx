import React, { useState, useEffect } from "react";
import "./auth.css";
import login from "../Assets/Images/loginbackground.svg";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Form } from "antd";
import { axiosInstance } from "../../../src/AxiosConfig";

const OtpScreen = () => {
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(false);
  const location = useLocation();
  const email = location.state?.email;

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      const newOtpCode = [...otpCode];
      newOtpCode[index] = value;
      setOtpCode(newOtpCode);

      if (index < otpCode.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    } else if (value === "") {
      const newOtpCode = [...otpCode];
      newOtpCode[index] = "";
      setOtpCode(newOtpCode);
    }
  };

  const handleKeyDown = (e, index) => {
    const value = e.key;

    if (value === "Backspace") {
      const newOtpCode = [...otpCode];
      if (otpCode[index] === "") {
        if (index > 0) {
          document.getElementById(`otp-input-${index - 1}`).focus();
        }
      } else {
        newOtpCode[index] = "";
        setOtpCode(newOtpCode);
      }
    }

    if (value === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }

    if (value === "ArrowRight" && index < otpCode.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const newOtpCode = [...otpCode];
      pasteData.split("").forEach((char, index) => {
        if (index < otpCode.length) {
          newOtpCode[index] = char;
        }
      });
      setOtpCode(newOtpCode);

      const nextEmptyIndex = newOtpCode.findIndex((code) => code === "");
      if (nextEmptyIndex !== -1) {
        document.getElementById(`otp-input-${nextEmptyIndex}`).focus();
      }
    }
  };

  const onFinish = async () => {
    const otp = otpCode.join("");
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        "adminAuth/forgotPassword/validate-otp",
        { email, otp }
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
          sessionStorage.setItem("resetPasswordToken", response.data.token);
          navigate("/create-password", { replace: true });
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
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during OTP validation.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "var(--danger-color)",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setOtpCode(new Array(6).fill(""));
    setResendDisabled(true);
    setTimer(30);

    try {
      const response = await axiosInstance.post(
        "adminAuth/forgotPassword/request-otp",
        { email }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "OTP Resend",
          text: "A new OTP has been sent to your email.",
          confirmButtonText: "OK",
          confirmButtonColor: "var(--green-color)",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data.message || "Failed to resend OTP.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "var(--danger-color)",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while resending OTP.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "var(--danger-color)",
      });
    }
  };

  useEffect(() => {
    let interval;
    if (resendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setResendDisabled(false);
    }

    return () => clearInterval(interval);
  }, [timer, resendDisabled]);

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-md-12 login-left">
            <h2 className="login-heading-forgot">Diskuss</h2>
            <div className="login-card-forgot col-lg-12">
              <center>
                <h2>OTP Verification</h2>
                <p className="mb-2">Enter OTP Code sent to your email</p>
              </center>
              <Form layout="vertical" className="login-form" onFinish={onFinish}>
                <Form.Item>
                  <div
                    className="otp-input-group"
                    onPaste={handlePaste}
                  >
                    {otpCode.map((code, index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength={1}
                        value={code}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onFocus={handleFocus}
                        className="otp-input"
                      />
                    ))}
                  </div>
                </Form.Item>
                <div className="resend-info">
                  <p>
                    Didn’t get OTP?{" "}
                    {resendDisabled ? (
                      <span>{`Resend in ${timer}s`}</span>
                    ) : (
                      <p className="resend-link" onClick={handleResend}>
                        Resend Code
                      </p>
                    )}
                  </p>
                </div>
                <button
                  type="submit"
                  className="sign-button"
                  disabled={loading}
                >
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





