import React, { useState } from "react";
import "./auth.css";
import login from "../Assets/Images/loginbackground.svg";
import { Form, Input } from "antd";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../src/AxiosConfig";
import { showErrorToast } from "../Services/toastService";

const ConfirmPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //const loggedInUserInfo = JSON.parse(sessionStorage.getItem("loggedInUserInfo"));

  const createPassword = async (values) => {
    const { newPassword, confirmPassword } = values;

    if(newPassword!==confirmPassword){
      showErrorToast("New password and confirm password do not match");
      return ;
    }
    const token = sessionStorage.getItem("resetPasswordToken")

    try {
      setLoading(true)

      const response = await axiosInstance.post(
        "adminAuth/forgotPassword/reset-password",
        { token, newPassword },
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: "Successfully Created Your New Password.",
          confirmButtonText: "Done",
          iconColor: "var(--green-color)",
          confirmButtonColor: "var(--gradient-start-color)",
        }).then(() => {
          sessionStorage.removeItem("resetPasswordToken")
          navigate("/login",{ replace: true });
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Create Password",
          text: response.data.message || "Failed to create new Password.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "var(--danger-color)",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while creating a new Password.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "var(--danger-color)",
      });
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-md-12 login-left">
            <h2 className="login-heading mb-4">Diskuss</h2>
            <div className="login-card col-lg-10">
              <center>
                <h2>Create New Password</h2>
                <p>Please Create your New Password</p>
              </center>
              <Form
                form={form}
                layout="vertical"
                className="login-form"
                onFinish={createPassword} 
              >
                <div className="col-lg-12">
                <Form.Item
                    label="Create New Password"
                    name="newPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter your new Password"
                      type="password"
                    />
                  </Form.Item>
                </div>
                <div className="col-lg-12">
                  <Form.Item
                    label="Confirm Your Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your Password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Confirm your new Password"
                      type="password"
                    />
                  </Form.Item>
                </div>
                <div className="mt-4">
                  <button type="submit" className="sign-button" disabled={loading}>
                    {loading ? "Create New Password..." : "Create New Password"}
                  </button>
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

export default ConfirmPassword;
