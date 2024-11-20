import React, { useState, useRef } from "react";
import { Form, Input, DatePicker, Select } from "antd";
import { TbEdit } from "react-icons/tb";
import { Switch } from "antd";
import { LuPencil } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
export const AddUserProfile = () => {
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");
  const [, setProfileImage] = useState(null);
  const navigate=useNavigate();

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

  const HandleSubmitForm = () => {
    alert("Personal Information Updated Successfully!");
  };

  return (
    <div className="personal-information-section">
      <div className="container">
        <h4>Add User Profile</h4>
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
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <div className="d-flex gap-3 align-items-center">
                  <h2>User name</h2>
                  <h1>
                    <LuPencil />
                  </h1>
                </div>
                <button>Select Membership Plan</button>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item label="Name" name="name" className="edit-user-form">
                <Input
                  placeholder="Enter Your Name"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Mobile Number"
                name="mobile"
                className="edit-user-form"
              >
                <Input
                  placeholder="Mobile Number"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                className="edit-user-form"
              >
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder="Select DOB"
                  className="form-control"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="Email" name="email" className="edit-user-form">
                <Input
                  placeholder="Eneter Your Mail Id"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Status"
                name="status"
                className="edit-user-form"
              >
                <div className="d-flex align-items-center">
                  <Input
                    placeholder="Active"
                    className="form-placeholder-field"
                  />
                  <Switch
                    defaultChecked
                    onChange={onChange}
                    style={{ marginLeft: "-60px" }}
                  />
                </div>
              </Form.Item>
            </div>
            <div className="col-lg-6 mb-3">
              <Form.Item
                label="Gender"
                name="gender"
                className="edit-user-form"
              >
                <Select
                  placeholder="Select Gender"
                  className="gender-select-form"
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-3">
              <Form.Item
                label="Address"
                name="address"
                className="edit-user-form"
              >
                <Input
                  placeholder="Enter Your Address"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-end gap-3">
              <button className="cancel-btn" type="button" onClick={()=>navigate("/admin/usermanagement/viewallusers")}>
                Cancel
              </button>
              <button className="create-btn" type="submit">
                Save
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
