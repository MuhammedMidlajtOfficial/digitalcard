import React, { useState } from "react";
import "./auth.css";
import login from "../Assets/Images/Cover.svg";
import { Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../Redux/tokenActions";
import { showErrorToast, showSuccessToast } from "../Services/toastService";
import {axiosInstance} from "../../AxiosConfig";
import { useAuth } from '../Context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { syncAuthState } = useAuth();

  const handleSubmitForm = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      showErrorToast("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post("/adminAuth/superAdminLogin", { email, password,rememberMe });

      if (response.status === 200) {
        const { accessToken, refreshToken, userType, user, username, category } = response.data;
      
        dispatch(setUser({ userType, username, category }));
        dispatch(setToken(accessToken,user._id));
        sessionStorage.setItem("userId", user._id);
        sessionStorage.setItem("UserName", username);
        sessionStorage.setItem("refreshToken", refreshToken);

        syncAuthState();

        showSuccessToast("Login successful");
        navigate("/admin/dashboard/overview");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        showErrorToast(error.response.data.message);
      } else {
        showErrorToast("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked); 
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-md-12 login-left">
            <h2 className="login-heading mb-4">Diskuss</h2>
            <div className="login-card col-lg-10">
              <center>
                <h2>Log in to your account</h2>
                <p>Welcome back! Please enter your details.</p>
              </center>
              <Form layout="vertical" className="login-form">
                <div className="col-lg-12">
                  <Form.Item label="Email" name="email">
                    <Input
                      placeholder="Enter your Email"
                      autoComplete="off"
                      value={formData?.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="col-lg-12">
                  <Form.Item label="Password" name="password">
                    <Input.Password
                      placeholder="Enter your Password"
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
                      <Checkbox onChange={handleRememberMeChange}>Remember</Checkbox>
                    </Form.Item>
                    <button
                    type="button"
                      className="forgot-password-button"
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot Password
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    className="sign-button"
                    onClick={handleSubmitForm}
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Login"}
                  </button>
                </div>
                {/* <div className="mt-2">
                  <p>
                    Are you super admin?
                    <span
                      className="register-btn"
                      onClick={() => navigate("/signup")}
                    >
                      Super Admin Login
                    </span>
                  </p>
                </div> */}
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
