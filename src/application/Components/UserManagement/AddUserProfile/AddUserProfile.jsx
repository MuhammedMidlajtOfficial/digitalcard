import React, { useState, useRef, } from "react";
import { Form, Input, Radio, Row, Col, Card, Button } from "antd";
import { TbEdit } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { axiosInstance }from "../../../../AxiosConfig";
import { useLoading } from "../../../Services/loadingService";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { showErrorToast, showInfoToast, showSuccessToast, showWarningToast } from "../../../Services/toastService";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
export const AddUserProfile = () => {
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const { loading, startLoading, stopLoading } = useLoading(); // Use the loading state
  const [selectedUserType, setSelectedUserType] = useState("individual"); // Default user type
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [allFieldsRequired, setAllFieldsRequired] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for blur effect
  const [individualUserData, setIndividualUser] = useState({
    username : "",
    email : "",
    password:"",
    image : "",
    role : "",
    name : "",
    website : "",
    phnNumber : "",
    address : "",
    whatsappNo : "",
    facebookLink : "",
    instagramLink : "",
    twitterLink : "",
  });
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
    userName:""  
  });
  const [previewImage, setPreviewImage] = useState("");
  const navigate=useNavigate();

  const addIndividualUser = () => {
    if (isSubmitting) return; // Prevent multiple clicks
  
    setIsSubmitting(true);
    setIsLoading(true); // Enable blur effect
    startLoading(); // Start loading indicator
  
    axiosInstance
      .post(`user/addIndividualUser`, {
        username: individualUserData.username,
        email: individualUserData.email,
        password: individualUserData.password,
        image: individualUserData.image,
        role: individualUserData.role,
        name: individualUserData.name,
        website: individualUserData.website,
        phnNumber: individualUserData.phnNumber,
        address: individualUserData.address,
        whatsappNo: individualUserData.whatsappNo,
        facebookLink: individualUserData.facebookLink,
        instagramLink: individualUserData.instagramLink,
        twitterLink: individualUserData.twitterLink,
      })
      .then((response) => {
        if (response.status === 201) {
          showSuccessToast('User created successfully!');
          navigate('/admin/usermanagement/viewallusers');
        } else {
          showInfoToast('Unexpected response. Check the console for details.');
          console.log('Response--', response);
        }
        setIsLoading(false); // Disable blur effect
        setIsSubmitting(false);
        stopLoading(); // Stop loading when data is fetched
      })
      .catch((error) => {
        if (error.status === 409) {
          showErrorToast('Email is already in use!');
          console.log('Email is already in use -', error);
        } else if (error.status === 400) {
          showWarningToast('All fields are required.');
          console.log('All fields are required -', error);
        } else if (error.status === 500) {
          showErrorToast('Server error. Please try again later.');
        } 
        setIsLoading(false); // Disable blur effect in case of an error
        setIsSubmitting(false);
        stopLoading(); // Stop loading in case of an error
      });
  };
  
  const addEnterpriseUser = () => {
    if (isSubmitting) return; // Prevent multiple clicks
    
    setIsSubmitting(true);
    setIsLoading(true); // Enable blur effect
    startLoading(); // Start loading indicator
    console.log('Data to be submitted:', enterpriseUserData);
    axiosInstance
      .post(`user/addEnterpriseUser`, {
        username:enterpriseUserData.userName,
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
          showSuccessToast('Enterprise user created successfully!');
          navigate('/admin/usermanagement/viewallusers');
        } else {
          showInfoToast('Unexpected response. Check the console for details.');
          console.log('Response--', response);
        }
        setIsLoading(false); // Disable blur effect
        setIsSubmitting(false);
        stopLoading(); // Stop loading when data is fetched
      })
      .catch((error) => {
        if (error.response) {
          const errorStatus = error.response.status;
          if (errorStatus === 409) {
            if (error.response.data.message.includes('enterprise user')) {
              showErrorToast('An enterprise user with this email address already exists.');
            } else if (error.response.data.message.includes('enterprise employee')) {
              showErrorToast('This email address is already associated with an enterprise employee.');
            }
          } else if (errorStatus === 400) {
            showWarningToast('All fields are required.');
            console.log('All fields are required -', error);
          } else if (errorStatus === 500) {
            showErrorToast('Server error. Please try again later.');
          }
        } else {
          showErrorToast('Something went wrong. Please try again later.');
          console.log('Error -', error);
        }
  
        setIsLoading(false); // Disable blur effect in case of an error
        setIsSubmitting(false);
        stopLoading(); // Stop loading in case of an error
      });
  };  

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/svg+xml",
    ];
  
    if (!allowedTypes.includes(file.type)) {
      showWarningToast("Only JPG, JPEG, PNG, WEBP, and SVG images are allowed.");
      return;
    }
  
    const maxSizeInMB = 2;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      showWarningToast("File size should be less than 2MB.");
      return;
    }
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result; // The base64 encoded string
        setIndividualUser((prevUserData) => ({
          ...prevUserData,
          image: base64String, // Add base64 string to individualUserData.image
        }));
        setPreviewImage(base64String); // Optionally set a preview
      };
  
      reader.readAsDataURL(file); // Convert file to a Base64 string
    }
  };

  const handleIndividualInputChange = (e) => {
    const { name, value } = e.target;
    setIndividualUser((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field dynamically
    }));
  };

  const handleEnterpriseInputChange = (e) => {
    const { name, value } = e.target;
    setEnterpriseUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const HandleSubmitForm = async () => {
    if (selectedUserType === "individual") {
      addIndividualUser();
    } else if (selectedUserType === "enterprise") {
      addEnterpriseUser();
    }
  };
  
  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value); // Update selected user type
  };

  const triggerFileInput = () => {
    // Trigger the file input when either button or image wrapper is clicked
    fileInputRef.current.click();
  };

  return (
    <div className="personal-information-section">
      <div className="container">
        <h4 style={{ textAlign:"center", marginTop:"20px", fontSize:"24px", fontWeight:"bolder" }}>Add User Profile</h4>
        {/* User Type Radio Buttons */}
        <Form.Item className="mt-4">
          <Radio.Group
            value={selectedUserType}
            onChange={handleUserTypeChange}
            style={{ width: "100%" }}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Radio value="individual" style={{ display: "block" }}>
                  <Card hoverable bordered={true} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Individual User
                    </div>
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      For personal accounts and single users.
                    </div>
                  </Card>
                </Radio>
              </Col>
              <Col span={12}>
                <Radio value="enterprise" style={{ display: "block" }}>
                  <Card hoverable bordered={true} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enterprise User
                    </div>
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      For businesses and organizations.
                    </div>
                  </Card>
                </Radio>
              </Col>
              {/* <Col span={8}>
                <Radio value="employee" style={{ display: "block" }}>
                  <Card hoverable bordered={true} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enterprise Employee
                    </div>
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      For employees under an enterprise account.
                    </div>
                  </Card>
                </Radio>
              </Col> */}
            </Row>
          </Radio.Group>
        </Form.Item>
        <Form layout="vertical" form={form} onFinish={HandleSubmitForm}>
          <div className="row mt-4">
            <div className="profile-icon-section">
              <div className="add-profile-container">
                <div
                  className="profile-image-wrapper"
                  onClick={handleEditClick}
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
                {/* Button also triggers the file input click */}
                <div className="add-profile-btn" onClick={triggerFileInput}>
                  Add Profile Image
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
                      { required: true, message: "Please enter a Username!" },
                      { min: 3, message: "Username must be at least 3 characters long." },
                    ]}
                  >
                    <Input
                      placeholder="Enter User Name"
                      className="form-placeholder-field"
                      name="username"
                      value={individualUserData.username}
                      onChange={handleIndividualInputChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Mobile Number"
                    name="phnNumber"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter a Mobile number!" },
                      { pattern: /^\d{10}$/, message: "Mobile number must be 10 digits." },
                    ]}
                  >
                    <Input
                      placeholder="Mobile Number"
                      className="form-placeholder-field"
                      name="phnNumber"
                      value={individualUserData.phnNumber}
                      onChange={handleIndividualInputChange}
                    />
                  </Form.Item>
                </div>
              </div>
              {/* Email & Password */}
              <div className="row">
                <div className="col-md-12 mb-1">
                  <Form.Item
                    label="Email"
                    name="email"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter an Email!" },
                      { type: "email", message: "Enter a valid Email address!" },
                    ]}
                  >
                    <Input
                      placeholder="Enter Mail Id"
                      className="form-placeholder-field"
                      name="email"
                      value={individualUserData.email}
                      onChange={handleIndividualInputChange}
                    />
                  </Form.Item>
                </div>
                {/* <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Password"
                    name="password"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter a Password!" },
                      { min: 6, message: "Password must be at least 6 characters long." },
                    ]}
                  >
                    <div className="password-container" style={{ position: "relative" }}>
                      <Input
                        placeholder="Enter Password"
                        className="form-placeholder-field"
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        value={individualUserData.password}
                        onChange={handleIndividualInputChange}
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
                </div> */}
              </div>
              {/* Name & Role */}
              <div className="row">
                <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Name"
                    name="name"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter an name!" },
                      { type: "name", message: "Enter a valid name!" },
                    ]}
                  >
                    <Input
                      placeholder="Enter Name"
                      className="form-placeholder-field"
                      name="name"
                      value={individualUserData.name}
                      onChange={handleIndividualInputChange}
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
                      value={individualUserData.role}
                      onChange={handleIndividualInputChange}
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
                      value={individualUserData.address}
                      onChange={handleIndividualInputChange}
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
                      value={individualUserData.website}
                      onChange={handleIndividualInputChange}
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
                      value={individualUserData.whatsappNo}
                      onChange={handleIndividualInputChange}
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
                      value={individualUserData.facebookLink}
                      onChange={handleIndividualInputChange}
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
                      value={individualUserData.instagramLink}
                      onChange={handleIndividualInputChange}
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
                      value={individualUserData.twitterLink}
                      onChange={handleIndividualInputChange}
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
                    label="User Name"
                    name="username"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter a Username!" },
                      { min: 3, message: "Username must be at least 3 characters long." },
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
                    rules={[{ required: true, message: "Please enter the Company name!" }]}
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

              </div>

              {/* Email & Password */}
              <div className="row">
              <div className="col-md-12 mb-1">
                  <Form.Item
                    label="Industry Type"
                    name="industryType"
                    className="edit-user-form"
                    rules={[{ required: true, message: "Please enter the Industry type!" }]}
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
                {/* <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Email"
                    name="email"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter an Email!" },
                      { type: "email", message: "Enter a valid Email address!" },
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
                </div> */}

              </div>

              {/* Mobile Number & Website */}
              <div className="row">
              <div className="col-md-6 mb-1">
                  <Form.Item
                    label="Password"
                    name="password"
                    className="edit-user-form"
                    rules={[
                      { required: true, message: "Please enter a Password!" },
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
                      value={enterpriseUserData.phnNumber}
                      onChange={handleEnterpriseInputChange}
                    />
                  </Form.Item>
                </div>

              </div>

              {/* Address & About Us */}
              <div className="row">
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
                      value={enterpriseUserData.whatsappNo}
                      onChange={handleEnterpriseInputChange}
                    />
                  </Form.Item>
                </div>

              </div>

              {/* WhatsApp Number & Facebook Link */}
              <div className="row">
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

              </div>

              {/* Instagram Link & Twitter Link */}
              <div className="row">
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
                      value={enterpriseUserData.facebookLink}
                      onChange={handleEnterpriseInputChange}
                    />
                  </Form.Item>
                </div>
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
                      value={enterpriseUserData.instagramLink}
                      onChange={handleEnterpriseInputChange}
                    />
                  </Form.Item>
                </div>

              </div>

              {/* Submit & Cancel Buttons */}
              <div className="row">
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
                      value={enterpriseUserData.twitterLink}
                      onChange={handleEnterpriseInputChange}
                    />
                  </Form.Item>
                </div>
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
                    // onClick={addEnterpriseUser}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </>
          )}
          {/* ENTERPRISE EMPLOYEE */}
          {/* {selectedUserType === "employee" && ( */}
            {/* <> */}
            {/* UserName & Mobile Number */}
            {/* <div className="row mt-4">
              <div className="col-md-6 mb-1">
                <Form.Item label="User Name" name="username" className="edit-user-form">
                  <Input
                    placeholder="Enter User Name"
                    className="form-placeholder-field"
                    name="username" // This should match the state field
                    value={individualUserData.name} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Mobile Number"
                  name="phnNumber"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Mobile Number"
                    className="form-placeholder-field"
                    name="phnNumber" // This should match the state field
                    value={individualUserData.phnNumber} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
            </div> */}
            {/* Email & Password */}
            {/* <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Email" name="email" className="edit-user-form">
                  <Input
                    placeholder="Enter Mail Id"
                    className="form-placeholder-field"
                    name="email" // This should match the state field
                    value={individualUserData.email} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
              <Form.Item
                label="Password"
                name="password"
                className="edit-user-form"
              >
                <div className="password-container" style={{ position: "relative" }}>
                  <Input
                    placeholder="Enter Password"
                    className="form-placeholder-field"
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    value={individualUserData.password}
                    onChange={handleIndividualInputChange}
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
                    {isPasswordVisible ? (
                      <EyeTwoTone />
                    ) : (
                      <EyeInvisibleOutlined />
                    )}
                  </span>
                </div>
              </Form.Item>
            </div>
            </div> */}
            {/* Name & Role */}
            {/* <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Name" name="name" className="edit-user-form">
                  <Input
                    placeholder="Enter Name"
                    className="form-placeholder-field"
                    name="name" // This should match the state field
                    value={individualUserData.name} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Role" name="role" className="edit-user-form">
                  <Input
                    placeholder="Enter Role"
                    className="form-placeholder-field"
                    name="role" // This should match the state field
                    value={individualUserData.username} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
            </div> */}
            {/* Address & Website */}
            {/* <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Address" name="address" className="edit-user-form">
                  <Input
                    placeholder="Enter Address"
                    className="form-placeholder-field"
                    name="address" // This should match the state field
                    value={individualUserData.address} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Website"
                  name="website"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Website"
                    className="form-placeholder-field"
                    name="website" // This should match the state field
                    value={individualUserData.website} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
            </div> */}
            {/* whatsappNo & facebookLink */}
            {/* <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Whatsapp Number" name="whatsappNo" className="edit-user-form">
                  <Input
                    placeholder="Enter Whatsapp Number"
                    className="form-placeholder-field"
                    name="whatsappNo" // This should match the state field
                    value={individualUserData.whatsappNo} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Facebook Link"
                  name="facebookLink"
                  className="edit-user-form"
                >
                  <Input
                    placeholder="Enter Facebook Link"
                    className="form-placeholder-field"
                    name="facebookLink" // This should match the state field
                    value={individualUserData.facebookLink} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
            </div> */}
            {/* Instagram Link & Twitter Link */}
            {/* <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Instagram Link" name="instagramLink" className="edit-user-form">
                  <Input
                    placeholder="Enter Instagram Link"
                    className="form-placeholder-field"
                    name="instagramLink" // This should match the state field
                    value={individualUserData.instagramLink} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Twitter Link" name="twitterLink" className="edit-user-form" >
                  <Input
                    placeholder="Enter Twitter Link"
                    className="form-placeholder-field"
                    name="twitterLink" // This should match the state field
                    value={individualUserData.twitterLink} // Controlled input
                    onChange={handleIndividualInputChange}
                  />
                </Form.Item>
              </div>
            </div> */}
          {/* </>
        )} */}

          
        </Form>
      </div>
    </div>
  );
};
