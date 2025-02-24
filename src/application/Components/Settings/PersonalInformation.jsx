import React, { useState, useRef, useEffect } from "react";
import { TbEdit } from "react-icons/tb";
import DefaultUser from "../../Assets/Images/admin.svg";
import "react-international-phone/style.css";
import { axiosInstance } from "../../../AxiosConfig";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../Services/toastService";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../Redux/userSlice";
import { Form, Input, Upload } from "antd";
import ImgCrop from "antd-img-crop";

export const PersonalInformation = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "",
    image: "",
    address: "",
    phnNumber: "",
    email: "",
    userType: "",
  });

  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const userId = sessionStorage.getItem("userId"); // Retrieve userId from sessionStorage

    if (!userId) {
      console.error("User ID not found in sessionStorage");
      navigate("/login"); // Redirect to login if userId is missing
      return;
    }

    axiosInstance
      .get(`adminAuth/getSuperAdmin/${userId}`)
      .then((response) => {
        if (response.data && response.data.user) {
          console.log("response.data", response.data);
          console.log("response.data.user", response.data.user);
          const { username, image, address, phnNumber, email, userType } =
            response.data.user;
          setUserData({ username, address, phnNumber, email, userType });
          setPreviewImage(image);
          dispatch(updateUserData(response.data.user));
        } else {
          console.error("User not found in response");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message || error);
      });
  }, [dispatch, navigate]);

  useEffect(() => {
    form.setFieldsValue(userData);
  }, [userData, form]);

  const handleFileChange = (info) => {
    const file = info.file.originFileObj; // Access the actual file object

    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        showErrorToast("Invalid file type. Please select a valid image.");
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        showErrorToast(
          "File size is too large. Please select a file smaller than 5MB."
        );
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({ ...prevData, image: reader.result }));
        setPreviewImage(reader.result);
      };

      reader.onerror = (error) => {
        console.error("FileReader error:", error);
        showErrorToast("Error uploading image. Please try again.");
      };

      reader.readAsDataURL(file); // Convert file to base64
    } else {
      showErrorToast("No file selected.");
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (values) => {
    const userId = sessionStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found in sessionStorage");
      return;
    }
    console.log('userData-',userData);
    
    const updatedData = {
      ...values,
      userType: userData.userType,
      image: userData.image,
    };

    setLoading(true);
    axiosInstance
      .patch(`adminAuth/updateUser/${userId}`, updatedData)
      .then((response) => {
        showSuccessToast("Profile updated successfully!");
        // setUserData(response.data.updatedUser);
        // console.log("UPDATED DATA1", response.config.data);
        // console.log("UPDATED DATA2", updatedData);
        // dispatch(updateUserData(updatedData));
      })
      .catch((error) => {
        console.error("Error updating data:", error.message || error);
        showErrorToast("Failed to update profile. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validateWhitespace = (rule, value) => {
    if (value && value.trim().length === 0) {
      return Promise.reject("This field cannot be empty or just whitespace.");
    }
    return Promise.resolve();
  };

  return (
    <div className="settings-personal-information">
      <div className="container">
        <h4 className="mt-4 mt-lg-0">Personal Information</h4>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <div className="row mt-4">
            <div className="settings-profile-icon-section">
              <img
                src={previewImage}
                alt="Profile"
                className="settings-profile-image"
              />
              <ImgCrop rotationSlider>
                <Upload
                  showUploadList={false}
                  customRequest={({ file, onSuccess }) => {
                    setTimeout(() => onSuccess("ok"), 0);
                  }}
                  onChange={handleFileChange}
                  accept="image/*"
                >
                  <button type="button" className="settings-edit-icon-button">
                    <TbEdit className="edit-icon" />
                  </button>
                </Upload>
              </ImgCrop>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="User Name"
                name="username"
                rules={[
                  { required: true, message: "Please enter your Username" },
                  { validator: validateWhitespace },
                ]}
              >
                <Input
                  placeholder="Enter User Name"
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder="Enter Email" disabled />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Phone Number"
                name="phnNumber"
                rules={[
                  { required: true, message: "Please enter your Phone Number" },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                  { validator: validateWhitespace },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  onChange={(e) =>
                    setUserData({ ...userData, phnNumber: e.target.value })
                  }
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                    appearance: "none",
                  }}
                  className="Phno-field"
                />
              </Form.Item>
            </div>
            {/* <div className="col-md-6 mb-1">
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your Address" },
                  { validator: validateWhitespace },
                ]}
              >
                <TextArea
                  placeholder="Enter Your Address"
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                />
              </Form.Item>
            </div> */}
          </div>

          <div className="row mt-4">
            <div className="d-flex justify-content-end gap-3">
              <button
                className="cancel-btn"
                type="button"
                onClick={() => {
                  navigate("/admin/settings");
                }}
              >
                Discard
              </button>
              <button
                className="create-btn"
                type="submit"
                disabled={loading}
                style={{
                  width: "166.2px",
                  height: "36.85px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {loading ? (
                  <div
                    className="spinner-border text-light"
                    role="status"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      borderWidth: "2px",
                    }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
