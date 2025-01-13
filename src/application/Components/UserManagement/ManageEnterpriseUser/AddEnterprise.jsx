import React, { useState, useRef } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { axiosInstance } from "../../../../AxiosConfig";
import { useLoading } from "../../../Services/loadingService";
import { TbEdit } from "react-icons/tb";
import imageCompression from "browser-image-compression";
import {
  showErrorToast,
  showInfoToast,
  showSuccessToast,
  showWarningToast,
} from "../../../Services/toastService";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const AddEnterprise = ({ visible, onClose }) => {
  const { loading, startLoading, stopLoading } = useLoading(); // Use the loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for blur effect
  const fileInputRef = useRef(null);
  const [enterpriseUserData, setEnterpriseUser] = useState({
    companyName: "",
    industryType: "",
    email: "",
    password: "",
    image: "",
    phnNumber: "",
    aboutUs: "",
    website: "",
    address: "",
    whatsappNo: "",
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
    userName: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const addEnterpriseUser = () => {
    if (isSubmitting) return; // Prevent multiple clicks

    setIsSubmitting(true);
    setIsLoading(true); // Enable blur effect
    startLoading(); // Start loading indicator
    console.log("Data to be submitted:", enterpriseUserData);
    axiosInstance
      .post(`user/addEnterpriseUser`, {
        username: enterpriseUserData.userName,
        companyName: enterpriseUserData.companyName,
        industryType: enterpriseUserData.industryType,
        email: enterpriseUserData.email,
        password: enterpriseUserData.password,
        image: enterpriseUserData.image,
        phnNumber: enterpriseUserData.phnNumber,
        address: enterpriseUserData.address,
        website: enterpriseUserData.website,
        aboutUs: enterpriseUserData.aboutUs,
        whatsappNo: enterpriseUserData.whatsappNo,
        facebookLink: enterpriseUserData.facebookLink,
        instagramLink: enterpriseUserData.instagramLink,
        twitterLink: enterpriseUserData.twitterLink,
      })
      .then((response) => {
        if (response.status === 201) {
          showSuccessToast("Enterprise user created successfully!");
        } else {
          showInfoToast("Unexpected response. Check the console for details.");
          console.log("Response--", response);
        }
        setIsLoading(false); // Disable blur effect
        setIsSubmitting(false);
        stopLoading(); // Stop loading when data is fetched
      })
      .catch((error) => {
        if (error.response) {
          const errorStatus = error.response.status;
          if (errorStatus === 409) {
            if (error.response.data.message.includes("enterprise user")) {
              showErrorToast(
                "An enterprise user with this email address already exists."
              );
            } else if (
              error.response.data.message.includes("enterprise employee")
            ) {
              showErrorToast(
                "This email address is already associated with an enterprise employee."
              );
            }
          } else if (errorStatus === 400) {
            showWarningToast("All fields are required.");
            console.log("All fields are required -", error);
          } else if (errorStatus === 500) {
            showErrorToast("Server error. Please try again later.");
          }
        } else {
          showErrorToast("Something went wrong. Please try again later.");
          console.log("Error -", error);
        }

        setIsLoading(false); // Disable blur effect in case of an error
        setIsSubmitting(false);
        stopLoading(); // Stop loading in case of an error
      });
  };
  const [previewImage, setPreviewImage] = useState("");
  const handleImageFileChange = async (e) => {
    const file = e.target.files[0];
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/svg+xml",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG, PNG, WEBP, and SVG images are allowed.");
      return;
    }

    const maxSizeInMB = 2;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      alert("File size should be less than 2MB.");
      return;
    }

    try {
      // Compress the image using browser-image-compression
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 2, // Max size in MB after compression
        maxWidthOrHeight: 1024, // Max width/height
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Update preview image with compressed image
      };
      reader.readAsDataURL(compressedFile); // Convert the compressed file to base64
    } catch (error) {
      console.error("Image compression error:", error);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleEnterpriseInputChange = (e) => {
    const { name, value } = e.target;
    setEnterpriseUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal
        title="Add Enterprise"
        visible={visible}
        onCancel={onClose}
        footer={null}
        width={750}
      >
        <Form layout="vertical" onFinish={(values) => addEnterpriseUser}>
          <div className="row mt-4">
            <div className="profile-icon-section">
              <div className="add-profile-container">
                <div
                  className="profile-image-wrapper"
                  onClick={triggerFileInput}
                >
                  <div className="profile-image-overlay">
                    <TbEdit className="upload-icon" />
                    <h6>Upload</h6>
                  </div>
                  {previewImage && (
                    <img
                      src={previewImage}
                      className="add-profile-image"
                      alt="Profile Preview"
                    />
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleImageFileChange}
                />
              </div>
              <div>
                <div className="add-profile-btn" onClick={triggerFileInput}>
                  Add Profile Image
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="User Name"
                name="username"
                className="edit-user-form"
                rules={[
                  { required: true, message: "Please enter a username!" },
                  {
                    min: 3,
                    message: "Username must be at least 3 characters long.",
                  },
                ]}
              >
                <Input
                  placeholder="Enter User Name"
                  className="form-placeholder-field"
                  name="userName"
                  value={enterpriseUserData.userName}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Company Name"
                name="companyName"
                className="edit-user-form"
                rules={[
                  { required: true, message: "Please enter the company name!" },
                ]}
              >
                <Input
                  placeholder="Enter Company Name"
                  className="form-placeholder-field"
                  name="companyName"
                  value={enterpriseUserData.companyName}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Industry Type"
                name="industryType"
                className="edit-user-form"
                rules={[
                  {
                    required: true,
                    message: "Please enter the industry type!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Industry Type"
                  className="form-placeholder-field"
                  name="industryType"
                  value={enterpriseUserData.industryType}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
          </div>

          {/* Email & Password */}
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Email"
                name="email"
                className="edit-user-form"
                rules={[
                  { required: true, message: "Please enter an email!" },
                  { type: "email", message: "Enter a valid email address!" },
                ]}
              >
                <Input
                  placeholder="Enter Email"
                  className="form-placeholder-field"
                  name="email"
                  value={enterpriseUserData.email}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
            <Form.Item
                    label="Password"
                    name="password"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter a password!" },
                      { min: 6, message: "Password must be at least 6 characters long." },
                    ]}
                  >
                    <div className="password-container" style={{ position: "relative" }}>
                      <Input
                        placeholder="Enter Password"
                        className="form-placeholder-field"
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        value={enterpriseUserData.password}
                        onChange={handleEnterpriseInputChange}
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                      >
                        {isPasswordVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                      </span>
                    </div>
                  </Form.Item>
            </div>
          </div>

          {/* Mobile Number & Website */}
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Mobile Number"
                name="phnNumber"
                className="edit-user-form"
                rules={[
                  {
                    pattern: /^\d{10}$/,
                    message: "Mobile number must be 10 digits.",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Mobile Number"
                  className="form-placeholder-field"
                  name="phnNumber"
                  value={enterpriseUserData.phnNumber}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Website"
                name="website"
                className="edit-user-form"
                rules={[{ type: "url", message: "Enter a valid website URL!" }]}
              >
                <Input
                  placeholder="Enter Website"
                  className="form-placeholder-field"
                  name="website"
                  value={enterpriseUserData.website}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
          </div>

          {/* Address & About Us */}
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Address"
                name="address"
                className="edit-user-form"
              >
                <Input.TextArea
                  placeholder="Enter Address"
                  className="form-placeholder-field"
                  name="address"
                  value={enterpriseUserData.address}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="About Us"
                name="aboutUs"
                className="edit-user-form"
              >
                <Input.TextArea
                  placeholder="Tell us about your company"
                  className="form-placeholder-field"
                  name="aboutUs"
                  value={enterpriseUserData.aboutUs}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
          </div>

          {/* WhatsApp Number & Facebook Link */}
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="WhatsApp Number"
                name="whatsappNo"
                className="edit-user-form"
                rules={[
                  {
                    message: "Please enter a WhatsApp number!",
                  },
                  {
                    pattern: /^\d{10}$/, // Regex for Indian phone numbers
                    message:
                      "Please enter a valid phone number (Must be 10 Numbers) !",
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter WhatsApp Number"
                  className="form-placeholder-field"
                  name="whatsappNo"
                  value={enterpriseUserData.whatsappNo}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Facebook Link"
                name="facebookLink"
                className="edit-user-form"
                rules={[
                  { type: "url", message: "Enter a valid Facebook link!" },
                ]}
              >
                <Input
                  placeholder="Enter Facebook Link"
                  className="form-placeholder-field"
                  name="facebookLink"
                  value={enterpriseUserData.facebookLink}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
          </div>

          {/* Instagram Link & Twitter Link */}
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Instagram Link"
                name="instagramLink"
                className="edit-user-form"
                rules={[
                  { type: "url", message: "Enter a valid Instagram Link!" },
                ]}
              >
                <Input
                  placeholder="Enter Instagram Link"
                  className="form-placeholder-field"
                  name="instagramLink"
                  value={enterpriseUserData.instagramLink}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Twitter Link"
                name="twitterLink"
                className="edit-user-form"
                rules={[
                  { type: "url", message: "Enter a valid Twitter Link!" },
                ]}
              >
                <Input
                  placeholder="Enter Twitter Link"
                  className="form-placeholder-field"
                  name="twitterLink"
                  value={enterpriseUserData.twitterLink}
                  onChange={handleEnterpriseInputChange}
                />
              </Form.Item>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button type="primary" htmlType="submit" onClick={addEnterpriseUser}>
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddEnterprise;
