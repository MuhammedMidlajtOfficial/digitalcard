import React, { useState, useRef } from "react";
import { Form, Input, DatePicker, Select, Avatar } from "antd";
import { TbEdit } from "react-icons/tb";
import DefaultUser from "../../../../Assets/Images/admin.png";
import companylogo from "../../../../Assets/Images/ennterprise3.png";
import { Switch } from "antd";
import { LuPencil } from "react-icons/lu";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
export const EditComapnyUser = () => {
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState("");
  const [, setProfileImage] = useState(null);

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
        <h4>Edit User Profile</h4>
        <div className="d-flex gap-2 mt-4 align-items-center">
          <Avatar shape="square" size={64} src={companylogo} />
          <div className="edit-company-span">
            <h5 className="user-copmany-name">Company Name</h5>
            <h6 style={{ display: "flex", alignItems: "center" }}>
              <span></span>
              Gold Member Ship
            </h6>
          </div>
        </div>
        <Form layout="vertical" form={form} onFinish={HandleSubmitForm}>
          <div className="row mt-4">
            <div className="profile-icon-section">
              <div className="profile-container">
                <div
                  className="profile-image-wrapper"
                  onClick={handleEditClick}
                >
                  <div className="profile-image-overlay">
                    <TbEdit className="upload-icon" />
                    <h6>Upload</h6>
                  </div>
                  <img
                    src={previewImage ? previewImage : DefaultUser}
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
                  <h2>Navaneethan M </h2>
                  <h1>
                    <LuPencil />
                  </h1>
                </div>

                <p style={{ display: "flex", alignItems: "center" }}>
                  <span></span>
                  Gold Member Ship
                </p>
                <button>Change Member ship</button>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item label="Name" name="name" className="edit-user-form">
                <div className="d-flex align-items-center">
                  <Input
                    placeholder="Enter Your Name"
                    className="form-placeholder-field"
                  />
                  <LuPencil className="pencil-edit" />
                </div>
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Mobile Number"
                name="mobile"
                className="edit-user-form"
              >
                <div className="d-flex align-items-center">
                  <Input
                    placeholder="Mobile Number"
                    className="form-placeholder-field"
                  />
                  <LuPencil className="pencil-edit" />
                </div>
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
                <div className="d-flex align-items-center">
                  <Input
                    placeholder="Eneter Email Id"
                    className="form-placeholder-field"
                  />
                  <LuPencil className="pencil-edit" />
                </div>
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
                <div className="d-flex align-items-center">
                  <Input
                    placeholder="Enter Your Address"
                    className="form-placeholder-field"
                  />
                  <LuPencil className="pencil-edit" />
                </div>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-end gap-3">
              <button className="cancel-btn" type="button">
                Cancel
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
