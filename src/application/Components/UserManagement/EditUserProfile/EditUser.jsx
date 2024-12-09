import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../AxiosConfig";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

export const EditUser = ({ userId }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState("individual"); // Default user type
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userData, setUserData] = useState({
    username: "ExistingUser",
    email: "",
    password: "",
    image: "",
    role: "",
    name: "",
    website: "",
    phnNumber: "",
    address: "",
    whatsappNo: "",
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
  });

  useEffect(() => {
    axiosInstance
      .get(`user/getUserById/${userId}`)
      .then((response) => {
        const data = response.data.userData; 
        console.log('response--',response.data.userData);
        setUserData({
          username: data.username || "",
          email: data.email || "",
          password: data.password || "",
          image: data.image || "",
          role: data.role || "",
          name: data.name || "",
          website: data.website || "",
          phnNumber: data.phnNumber || "",
          address: data.address || "",
          whatsappNo: data.whatsappNo || "",
          facebookLink: data.facebookLink || "",
          instagramLink: data.instagramLink || "",
          twitterLink: data.twitterLink || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field dynamically
    }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const triggerFileInput = () => {
    // Trigger the file input when either button or image wrapper is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
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

    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const HandleSubmitForm = (values) => {
    // Handle submit logic, like sending data to backend
    alert("Personal Information Updated Successfully!");
  };

  return (
    <div className="personal-information-section">
      <div className="container">
        <h4>Edit User Profile</h4>
        <Form layout="vertical" form={form} onFinish={HandleSubmitForm}>
          <div className="row mt-4">
            <div className="profile-icon-section">
              <div className="profile-container">
                <div
                  className="profile-image-wrapper"
                  onClick={handleEditClick}
                >
                  {/* <div className="profile-image-overlay"> */}
                  <div>
                    {/* <TbEdit className="upload-icon" /> */}
                    {/* <h6>Upload</h6> */}
                  </div>
                  <img src={userData?.image ? userData?.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"}
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <div className="d-flex gap-3 align-items-center">
                  <h2>{userData?.username || "Username"}</h2>
                </div>

                <p style={{ display: "flex", alignItems: "center" }}>
                  <span></span>
                  {userData?.membership || "Unsubscribed User"}
                </p>
                <div>
                {/* Button also triggers the file input click */}
                <div className="add-profile-btn" onClick={triggerFileInput}>
                  Change Profile Image
                </div>
              </div>              
              </div>
            </div>
          </div>
          {/* INIDIVIDUAL USER */}
          {selectedUserType === "individual" && (
          <>
            {/* Username & Mobile Number */}
              <div className="row mt-4">
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="User Name"
                    name="username"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter a username!" },
                      { min: 3, message: "Username must be at least 3 characters long." },
                    ]}
                  >
                    <Input
                      placeholder="Enter User Name"
                      className="form-placeholder-field"
                      name="username"
                      value={userData?.username}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Mobile Number"
                    name="phnNumber"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter a mobile number!" },
                      { pattern: /^\d{10}$/, message: "Mobile number must be 10 digits." },
                    ]}
                  >
                    <Input
                      placeholder="Mobile Number"
                      className="form-placeholder-field"
                      name="phnNumber"
                      value={userData.phnNumber}
                      onChange={handleInputChange}
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
                      placeholder="Enter Mail Id"
                      className="form-placeholder-field"
                      name="email"
                      value={userData.email}
                      disabled
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
                        value={userData.password}
                        onChange={handleInputChange}
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
              {/* Name & Role */}
              <div className="row">
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Name"
                    name="name"
                    className="edit-user-form"
                  >
                    <Input
                      placeholder="Enter Name"
                      className="form-placeholder-field"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Role"
                    name="role"
                    className="edit-user-form"
                  >
                    <Input
                        placeholder="Enter Role"
                        className="form-placeholder-field"
                      name="role"
                      value={userData.role}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
              </div>
              {/* Address & Website */}
              <div className="row">
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Address"
                    name="address"
                    className="edit-user-form"
                  >
                    <Input
                      placeholder="Enter Address"
                      className="form-placeholder-field"
                      name="address"
                      value={userData.address}
                      onChange={handleInputChange}
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
                      value={userData.website}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
              </div>
              {/* Social Media Links */}
              {/* whatsappNo & facebookLink */}
              <div className="row">
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Whatsapp Number"
                    name="whatsappNo"
                    className="edit-user-form"
                >
                    <Input
                      placeholder="Enter Whatsapp Number"
                      className="form-placeholder-field"
                      name="whatsappNo"
                      value={userData.whatsappNo}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Facebook Link"
                    name="facebookLink"
                    className="edit-user-form"
                    rules={[{ type: "url", message: "Enter a valid Facebook link!" }]}
                  >
                    <Input
                      placeholder="Enter Facebook Link"
                      className="form-placeholder-field"
                      name="facebookLink"
                      value={userData.facebookLink}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
              </div>
              {/* instagramLink & twitterLink */}
              <div className="row">
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Instagram Link"
                    name="instagramLink"
                    className="edit-user-form"
                    rules={[{ type: "url", message: "Enter a valid Instagram link!" }]}
                  >
                    <Input
                      placeholder="Enter Instagram Link"
                      className="form-placeholder-field"
                      name="instagramLink"
                      value={userData.instagramLink}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Twitter Link"
                    name="twitterLink"
                    className="edit-user-form"
                    rules={[{ type: "url", message: "Enter a valid Twitter link!" }]}
                  >
                    <Input
                      placeholder="Enter Twitter Link"
                      className="form-placeholder-field"
                      name="twitterLink"
                      value={userData.twitterLink}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
              </div>

              {/* Buttons */}
              <div className="row">
                <div className="d-flex justify-content-end gap-3">
                  <Button
                    className="cancel-btn"
                    type="button"
                    onClick={() => navigate("/admin/usermanagement/viewallusers")}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="create-btn"
                    type="primary"
                    htmlType="submit"
                  >
                    Create
                  </Button>
                </div>
              </div>
          </>
          )}
          {/* ENTERPRISE USER */}
          {selectedUserType === "enterprise" && (
            <>
              {/* Company Name & Industry Type */}
              <div className="row mt-4">
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Company Name"
                    name="companyName"
                    className="edit-user-form"
                    rules={[{ required: true, message: "Please enter the company name!" }]}
                  >
                    <Input
                      placeholder="Enter Company Name"
                      className="form-placeholder-field"
                      name="companyName"
                      value={userData.companyName}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Industry Type"
                    name="industryType"
                    className="edit-user-form"
                    rules={[{ required: true, message: "Please enter the industry type!" }]}
                  >
                    <Input
                      placeholder="Enter Industry Type"
                      className="form-placeholder-field"
                      name="industryType"
                      value={userData.industryType}
                      onChange={handleInputChange}
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
                      value={userData.email}
                      onChange={handleInputChange}
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
                        value={userData.password}
                        onChange={handleInputChange}
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
                      { pattern: /^\d{10}$/, message: "Mobile number must be 10 digits." },
                    ]}
                  >
                    <Input
                      placeholder="Enter Mobile Number"
                      className="form-placeholder-field"
                      name="phnNumber"
                      value={userData.phnNumber}
                      onChange={handleInputChange}
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
                      value={userData.website}
                      onChange={handleInputChange}
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
                      value={userData.address}
                      onChange={handleInputChange}
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
                      value={userData.aboutUs}
                      onChange={handleInputChange}
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
                        message: "Please enter a valid phone number (Must be 10 Numbers) !",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="Enter WhatsApp Number"
                      className="form-placeholder-field"
                      name="whatsappNo"
                      value={userData.whatsappNo}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Facebook Link"
                    name="facebookLink"
                    className="edit-user-form"
                    rules={[{ type: "url", message: "Enter a valid Facebook link!" }]}
                  >
                    <Input
                      placeholder="Enter Facebook Link"
                      className="form-placeholder-field"
                      name="facebookLink"
                      value={userData.facebookLink}
                      onChange={handleInputChange}
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
                    rules={[{ type: "url", message: "Enter a valid Instagram Link!" }]}
                  >
                    <Input
                      placeholder="Enter Instagram Link"
                      className="form-placeholder-field"
                      name="instagramLink"
                      value={userData.instagramLink}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Twitter Link"
                    name="twitterLink"
                    className="edit-user-form"
                    rules={[{ type: "url", message: "Enter a valid Twitter Link!" }]}
                  >
                    <Input
                      placeholder="Enter Twitter Link"
                      className="form-placeholder-field"
                      name="twitterLink"
                      value={userData.twitterLink}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                </div>
              </div>

              {/* Submit & Cancel Buttons */}
              <div className="row">
                <div className="d-flex justify-content-end gap-3">
                  <Button
                    className="cancel-btn"
                    type="button"
                    onClick={() => navigate("/admin/usermanagement/viewallusers")}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="create-btn"
                    type="primary"
                    htmlType="submit"
                  >
                    Create
                  </Button>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};
