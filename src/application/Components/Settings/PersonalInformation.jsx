import React, { useState, useRef } from "react";
import { Form, Input, DatePicker } from "antd";
import { TbEdit } from "react-icons/tb";
import DefaultUser from "../../Assets/Images/admin.png";
import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";

export const PersonalInformation = () => {
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");
  const [profileImage, setProfileImage] = useState(null);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
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



  return (
    <div className="settings-personal-information">
      <div className="container">
        <h4 className="mt-4 mt-lg-0">Personal Information</h4>
        <Form layout="vertical" form={form}>
          <div className="row mt-4">
            <div className="settings-profile-icon-section">
              <img
                src={previewImage ? previewImage : DefaultUser}
                alt="Profile"
                className="settings-profile-image"
              />
              <button
                type="button"
                className="settings-edit-icon-button"
                onClick={handleEditClick}
              >
                <TbEdit className="edit-icon" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item label="First Name" name="firstName">
                <Input placeholder="Enter First Name" />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="Last Name" name="lastName">
                <Input placeholder="Enter Last Name" />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item label="Email" name="email">
                <Input placeholder="Enter Email" />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <label
                htmlFor="inputPhone"
                className="form-label"
                style={{ display: "flex", marginBottom: "0" }}
              >
                <span
                  style={{
                    color: "#ff4d4f",
                    marginRight: "4px",
                    marginBottom: "8px",
                  }}
                >
                  *
                </span>{" "}
                Mobile Number
              </label>
              <PhoneInput defaultCountry="in" inputStyle={{ width: "100%" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item label="Date of Birth" name="dateOfBirth">
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder="Select DOB"
                  className="form-control"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-3">
              <Form.Item label="LinkedIn Url" name="linkedInUrl">
                <Input placeholder="Enter LinkedIn Url" />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-12 mb-1">
            <Form.Item label="Address" name="address">
              <Input placeholder="Enter Your Address" />
            </Form.Item>
          </div>
          <div className="row mt-4">
            <div className="d-flex justify-content-end gap-3">
              <button className="cancel-btn" type="button">
                Discard
              </button>
              <button className="create-btn" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
