import React, { useState, useRef } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { TbEdit } from "react-icons/tb";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axiosInstance from "../../../AxiosConfig";
import Swal from "sweetalert2";

const CreateEmployee = () => {
  // const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitForm = async (values) => {
    if (!previewImage) {
      new Swal("Error", "Please upload a profile image!", "error");
      return;
    }

    try {
      // Prepare the payload
      const payload = {
        userName: values.userName,
        image: previewImage,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        category: values.category,
      };

      console.log("Payload:", payload);

      // Send the POST request
      const response = await axiosInstance.post("/employee", payload);
      console.log("Employee created successfully:", response.data);

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Employee Created!",
        text: "The employee profile has been created successfully.",
      });

      // Reset form and state
      form.resetFields();
      setPreviewImage(null);
    } catch (error) {
      console.error("Error creating employee:", error);

      // Show error message
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to create employee profile. Please try again.",
      });
    }
  };

  return (
    <div className="personal-information-section">
      <div className="container">
        <h4 style={{ textAlign: "center", marginTop: "20px", fontSize: "24px", fontWeight: "bolder" }}>
          Add Employee Profile
        </h4>

        <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
          {/* Profile Image Section */}
          <div className="row mt-4">
            <div className="profile-icon-section">
              <div className="add-profile-container">
                <div className="profile-image-wrapper" onClick={handleEditClick}>
                  <div className="profile-image-overlay">
                    <TbEdit className="upload-icon" />
                    <h6>Upload</h6>
                  </div>
                  {previewImage && (
                    <img src={previewImage} className="add-profile-image" alt="Profile Preview" />
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
                <div className="add-profile-btn" onClick={handleEditClick}>
                  Add Profile Image
                </div>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="User Name"
                name="userName"
                rules={[{ required: true, message: "Please enter a username!" }]}
              >
                <Input placeholder="Enter User Name" />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter an email!" }, { type: "email", message: "Enter a valid email address!" }]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please enter a password!" }]}
              >
                <Input.Password
                  placeholder="Enter Password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: "Please enter a phone number!" }, { pattern: /^\d{10}$/, message: "Phone number must be 10 digits." }]}
              >
                <Input placeholder="Enter Phone Number" />
              </Form.Item>
            </div>
          </div>

          {/* Category */}
          <div className="row mt-4">
            <div className="col-md-12 mb-1">
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: "Please select at least one category!" }]}
              >
                <Checkbox.Group>
                  <div className="category-checkboxes" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <Checkbox value="dashboard-overview">Dashboard Overview</Checkbox>
                    <Checkbox value="view-user-profile">View User Profile</Checkbox>
                    <Checkbox value="manage-enterprise-user">Manage Enterprise User</Checkbox>
                    <Checkbox value="user-activity-reports">User Activity Reports</Checkbox>
                    <Checkbox value="card-share-interaction">Card Share & Interaction</Checkbox>
                    <Checkbox value="manage-subscription-plans">Manage Subscription Plans</Checkbox>
                    <Checkbox value="view-payment-history">View Payment History</Checkbox>
                    <Checkbox value="generate-invoice">Generate Invoice</Checkbox>
                    <Checkbox value="view-respond-tickets">View & Respond to Tickets</Checkbox>
                    <Checkbox value="assign-tickets">Assign Tickets</Checkbox>
                    <Checkbox value="ticket-categories">Ticket Categories</Checkbox>
                    <Checkbox value="create-employee">Create Employee</Checkbox>
                    <Checkbox value="send-notification">Send Notification</Checkbox>
                  </div>
                </Checkbox.Group>
              </Form.Item>
            </div>
          </div>

          {/* Buttons */}
          <div className="row">
            <div className="d-flex justify-content-end gap-3">
              <Button className="cancel-btn" type="button">
                Cancel
              </Button>
              <Button className="create-btn" type="primary" htmlType="submit">
                Create
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateEmployee;
