import React, { useState } from "react";
import { Form, Input } from "antd";
import DefaultUser from "../../../Assets/Images/admin.svg";
import { useNavigate } from "react-router-dom";
export const UserView = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [previewImage] = useState("");

  const HandleSubmitForm = () => {
    alert("Personal Information Updated Successfully!");
  };

  return (
    <div className="personal-information-section">
      <div className="container">
        <h4>View User Profile</h4>
        <Form layout="vertical" form={form} onFinish={HandleSubmitForm}>
          <div className="row mt-4">
            <div className="profile-icon-section">
              <div className="profile-container">
                <div className="profile-image-wrapper">
                  <img
                    src={previewImage ? previewImage : DefaultUser}
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
              </div>
              <div>
                <div className="d-flex gap-3 align-items-center">
                  <h2>Navaneethan M </h2>
                </div>

                <p style={{ display: "flex", alignItems: "center" }}>
                  <span></span>
                  Gold Member Ship
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item label="Name" name="name" className="edit-user-form">
                <Input
                  placeholder="Your Name"
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
                <Input
                  placeholder="DD/MM/YYYY"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item label="Email" name="email" className="edit-user-form">
                <Input
                  placeholder="Email Id"
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
                </div>
              </Form.Item>
            </div>
            <div className="col-lg-6 mb-3">
              <Form.Item
                label="Gender"
                name="gender"
                className="edit-user-form"
              >
                <Input
                  placeholder="View Gender"
                  className="form-placeholder-field"
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
                  placeholder="Your Address"
                  className="form-placeholder-field"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-end gap-3">
              <button
                className="create-btn"
                onClick={() => navigate("/admin/usermanagement/viewallusers")}
              >
                Close
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
