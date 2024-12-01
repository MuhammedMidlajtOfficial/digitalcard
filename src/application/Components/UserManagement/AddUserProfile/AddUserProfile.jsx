import React, { useState, useRef, } from "react";
import { Form, Input, Radio, Row, Col, Card } from "antd";
import { TbEdit } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../AxiosConfig";
import { useLoading } from "../../../Services/loadingService";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
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
  const [userData, setUserData] = useState({
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
  const [previewImage, setPreviewImage] = useState("");
  const navigate=useNavigate();

  const addIndividualUser = () => {
    if (isSubmitting) return; // Prevent multiple clicks

    setIsSubmitting(true);
    startLoading(); // Start loading indicator
    axiosInstance
    .post(`user/addIndividualUser`, {
      username: userData.username,
      email: userData.email,
      password:userData.password,
      image: userData.image,
      role: userData.role,
      name: userData.name,
      website: userData.website,
      phnNumber: userData.phnNumber,
      address: userData.address,
      whatsappNo: userData.whatsappNo,
      facebookLink: userData.facebookLink,
      instagramLink: userData.instagramLink,
      twitterLink: userData.twitterLink,
    })
    .then((response) => {
      if(response.status === 201){
        console.log('User created successfully');
      }else if(response.status === 409){
        setEmailExist(true)
        console.log('Email already used');
      }else if(response.status === 400){
        setAllFieldsRequired(true)
        console.log('All fields are required');
      }else if(response.status === 500){
        console.log('server error');
      }else{
        console.log('response--',response);
      }
      console.log('response-',response)
      stopLoading(); // Stop loading when data is fetched
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      stopLoading(); // Stop loading in case of an error
    });
  }
  
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
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result; // The base64 encoded string
        setUserData((prevUserData) => ({
          ...prevUserData,
          image: base64String, // Add base64 string to userData.image
        }));
        setPreviewImage(base64String); // Optionally set a preview
      };
  
      reader.readAsDataURL(file); // Convert file to a Base64 string
    }
  };

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

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const HandleSubmitForm = () => {
    addIndividualUser();
  };

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value); // Update selected user type
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
              <Col span={8}>
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
              <Col span={8}>
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
              <Col span={8}>
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
              </Col>
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
                {/* <div className="d-flex gap-3 align-items-center">
                  <h2>User name</h2>
                  <h1>
                    <LuPencil />
                  </h1>
                </div> */}
                <button className="membership-btn">Select Membership Plan</button>
              </div>
            </div>
          </div>
          {/* INIDIVIDUAL USER */}
          {selectedUserType === "individual" && (
          <>
            {/* UserName & Mobile Number */}
            <div className="row mt-4">
              <div className="col-md-6 mb-1">
                <Form.Item label="User Name" name="username" className="edit-user-form">
                  <Input
                    placeholder="Enter User Name"
                    className="form-placeholder-field"
                    name="username" // This should match the state field
                    value={userData.name} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.phnNumber} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Email & Password */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Email" name="email" className="edit-user-form">
                  <Input
                    placeholder="Enter Mail Id"
                    className="form-placeholder-field"
                    name="email" // This should match the state field
                    value={userData.email} // Controlled input
                    onChange={handleInputChange}
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
                    {isPasswordVisible ? (
                      <EyeTwoTone />
                    ) : (
                      <EyeInvisibleOutlined />
                    )}
                  </span>
                </div>
              </Form.Item>
            </div>
            </div>
            {/* Name & Role */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Name" name="name" className="edit-user-form">
                  <Input
                    placeholder="Enter Name"
                    className="form-placeholder-field"
                    name="name" // This should match the state field
                    value={userData.name} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Role" name="role" className="edit-user-form">
                  <Input
                    placeholder="Enter Role"
                    className="form-placeholder-field"
                    name="role" // This should match the state field
                    value={userData.username} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Address & Website */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Address" name="address" className="edit-user-form">
                  <Input
                    placeholder="Enter Address"
                    className="form-placeholder-field"
                    name="address" // This should match the state field
                    value={userData.address} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.website} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* whatsappNo & facebookLink */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Whatsapp Number" name="whatsappNo" className="edit-user-form">
                  <Input
                    placeholder="Enter Whatsapp Number"
                    className="form-placeholder-field"
                    name="whatsappNo" // This should match the state field
                    value={userData.whatsappNo} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.facebookLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Instagram Link & Twitter Link */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Instagram Link" name="instagramLink" className="edit-user-form">
                  <Input
                    placeholder="Enter Instagram Link"
                    className="form-placeholder-field"
                    name="instagramLink" // This should match the state field
                    value={userData.instagramLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Twitter Link" name="twitterLink" className="edit-user-form" >
                  <Input
                    placeholder="Enter Twitter Link"
                    className="form-placeholder-field"
                    name="twitterLink" // This should match the state field
                    value={userData.twitterLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="row">
            <div className="d-flex justify-content-end gap-3">
              <button className="cancel-btn" type="button" onClick={()=>navigate("/admin/usermanagement/viewallusers")}>
                Cancel
              </button>
              <button className="create-btn" type="submit" onClick={()=>{ HandleSubmitForm() }}>
                Create
              </button>
            </div>
          </div>
          </>
          )}
          {/* ENTERPRISE USER */}
          {selectedUserType === "enterprise" && (
            <>
            {/* UserName & Mobile Number */}
            <div className="row mt-4">
              <div className="col-md-6 mb-1">
                <Form.Item label="User Name" name="username" className="edit-user-form">
                  <Input
                    placeholder="Enter User Name"
                    className="form-placeholder-field"
                    name="username" // This should match the state field
                    value={userData.name} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.phnNumber} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Email & Password */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Email" name="email" className="edit-user-form">
                  <Input
                    placeholder="Enter Mail Id"
                    className="form-placeholder-field"
                    name="email" // This should match the state field
                    value={userData.email} // Controlled input
                    onChange={handleInputChange}
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
                    {isPasswordVisible ? (
                      <EyeTwoTone />
                    ) : (
                      <EyeInvisibleOutlined />
                    )}
                  </span>
                </div>
              </Form.Item>
            </div>
            </div>
            {/* Name & Role */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Name" name="name" className="edit-user-form">
                  <Input
                    placeholder="Enter Name"
                    className="form-placeholder-field"
                    name="name" // This should match the state field
                    value={userData.name} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Role" name="role" className="edit-user-form">
                  <Input
                    placeholder="Enter Role"
                    className="form-placeholder-field"
                    name="role" // This should match the state field
                    value={userData.username} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Address & Website */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Address" name="address" className="edit-user-form">
                  <Input
                    placeholder="Enter Address"
                    className="form-placeholder-field"
                    name="address" // This should match the state field
                    value={userData.address} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.website} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* whatsappNo & facebookLink */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Whatsapp Number" name="whatsappNo" className="edit-user-form">
                  <Input
                    placeholder="Enter Whatsapp Number"
                    className="form-placeholder-field"
                    name="whatsappNo" // This should match the state field
                    value={userData.whatsappNo} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.facebookLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Instagram Link & Twitter Link */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Instagram Link" name="instagramLink" className="edit-user-form">
                  <Input
                    placeholder="Enter Instagram Link"
                    className="form-placeholder-field"
                    name="instagramLink" // This should match the state field
                    value={userData.instagramLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Twitter Link" name="twitterLink" className="edit-user-form" >
                  <Input
                    placeholder="Enter Twitter Link"
                    className="form-placeholder-field"
                    name="twitterLink" // This should match the state field
                    value={userData.twitterLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
          </>
          )}

          {/* ENTERPRISE EMPLOYEE */}
          {selectedUserType === "employee" && (
            <>
            {/* UserName & Mobile Number */}
            <div className="row mt-4">
              <div className="col-md-6 mb-1">
                <Form.Item label="User Name" name="username" className="edit-user-form">
                  <Input
                    placeholder="Enter User Name"
                    className="form-placeholder-field"
                    name="username" // This should match the state field
                    value={userData.name} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.phnNumber} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Email & Password */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Email" name="email" className="edit-user-form">
                  <Input
                    placeholder="Enter Mail Id"
                    className="form-placeholder-field"
                    name="email" // This should match the state field
                    value={userData.email} // Controlled input
                    onChange={handleInputChange}
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
                    {isPasswordVisible ? (
                      <EyeTwoTone />
                    ) : (
                      <EyeInvisibleOutlined />
                    )}
                  </span>
                </div>
              </Form.Item>
            </div>
            </div>
            {/* Name & Role */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Name" name="name" className="edit-user-form">
                  <Input
                    placeholder="Enter Name"
                    className="form-placeholder-field"
                    name="name" // This should match the state field
                    value={userData.name} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Role" name="role" className="edit-user-form">
                  <Input
                    placeholder="Enter Role"
                    className="form-placeholder-field"
                    name="role" // This should match the state field
                    value={userData.username} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Address & Website */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Address" name="address" className="edit-user-form">
                  <Input
                    placeholder="Enter Address"
                    className="form-placeholder-field"
                    name="address" // This should match the state field
                    value={userData.address} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.website} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* whatsappNo & facebookLink */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Whatsapp Number" name="whatsappNo" className="edit-user-form">
                  <Input
                    placeholder="Enter Whatsapp Number"
                    className="form-placeholder-field"
                    name="whatsappNo" // This should match the state field
                    value={userData.whatsappNo} // Controlled input
                    onChange={handleInputChange}
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
                    value={userData.facebookLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Instagram Link & Twitter Link */}
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item label="Instagram Link" name="instagramLink" className="edit-user-form">
                  <Input
                    placeholder="Enter Instagram Link"
                    className="form-placeholder-field"
                    name="instagramLink" // This should match the state field
                    value={userData.instagramLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item label="Twitter Link" name="twitterLink" className="edit-user-form" >
                  <Input
                    placeholder="Enter Twitter Link"
                    className="form-placeholder-field"
                    name="twitterLink" // This should match the state field
                    value={userData.twitterLink} // Controlled input
                    onChange={handleInputChange}
                  />
                </Form.Item>
              </div>
            </div>
          </>
          )}

          
        </Form>
      </div>
    </div>
  );
};
