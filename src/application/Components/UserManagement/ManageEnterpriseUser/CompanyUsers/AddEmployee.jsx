import React, { useState, useRef } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { axiosInstance, logInstance } from "../../../../../AxiosConfig";
import { useLoading } from "../../../../Services/loadingService";
import { TbEdit } from "react-icons/tb";
import imageCompression from "browser-image-compression";
import {
  showErrorToast,
  showInfoToast,
  showSuccessToast,
  showWarningToast,
} from "../../../../Services/toastService";
import { useParams } from "react-router-dom";
const { Option } = Select;

const AddEmployee = ({ visible, onClose }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef(null);
  const { userId } = useParams();
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
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Image compression error:", error);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const addEnterpriseEmployee = (values) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setIsLoading(true);
    startLoading();
    const payload = { ...values, image: previewImage, userId };
    console.log("Payload:", payload);
    logInstance
      .post(`/cardEnterprise`, payload)
      .then((response) => {
        if (response.status === 201) {
          showSuccessToast("Enterprise user created successfully!");
          onClose();
        } else {
          showInfoToast("Unexpected response. Check the console for details.");
          console.log("Response--", response);
        }
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
      })
      .finally(() => {
        setIsLoading(false);
        setIsSubmitting(false);
        stopLoading();
      });
  };

  return (
    <div>
      <Modal
        title="Add Enterprise Employee"
        visible={visible}
        onCancel={onClose}
        footer={null}
        width={750}
      >
        <Form layout="vertical" onFinish={addEnterpriseEmployee}>
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
            <div className="col-lg-6">
              <Form.Item
                name="businessName"
                label="Business Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter the business name" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="businessType"
                label="Business Type"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter the business type (e.g., Retail, IT)" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="yourName"
                label="Your Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="designation"
                label="Designation"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter your designation" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="mobile"
                label="Mobile"
                rules={[
                  { required: true },
                  {
                    pattern: /^\d{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                ]}
              >
                <Input placeholder="Enter your mobile number" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input placeholder="Enter your email address" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="location"
                label="Location"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter the business location" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="services"
                label="Services"
                rules={[{ required: true }]}
              >
                <Select mode="tags" placeholder="Enter the services offered" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="color"
                label="Color"
                rules={[{ required: true }]}
              >
                <Input type="color" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="theme"
                label="Theme"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter Theme" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="position" label="Position">
                <Select placeholder="Select Position">
                  <Option value="Horizontal">Horizontal</Option>
                  <Option value="Vertical">Vertical</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="website" label="Website">
                <Input placeholder="Enter the business website URL" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="topServices" label="Top Services">
                <Select
                  mode="tags"
                  placeholder="Enter the top services and press Enter after each"
                />
              </Form.Item>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddEmployee;
