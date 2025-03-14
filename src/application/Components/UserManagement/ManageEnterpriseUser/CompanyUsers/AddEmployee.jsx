import React, { useState, useRef, useEffect } from "react";
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
import axiosInstanceForTicket from "../../../../../AxiosContigForTicket";
const { Option } = Select;

const AddEmployee = ({ visible, onClose }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef(null);
  const { userId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices([])
  }, [onClose]);

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

    const payload = {
      ...values,
      image: previewImage,
      userId,
      position:'Horizontal',
      cardType: "enterprise", // Assuming cardType is required
      whatsappNo: values.whatsappNo || "", // Optional fields
      facebookLink: values.facebookLink || "",
      instagramLink: values.instagramLink || "",
      twitterLink: values.twitterLink || "",
    };

    console.log("Payload:", payload);

    axiosInstance
      .post("user/addEnterpriseEmployee", payload)
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
            } else if (error.response.data.message.includes("phone number")) {
              showErrorToast(
                "This phone number is already associated with another user."
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


  const handleChange = (value) => {
    console.log('value-',value);
    
    // Ensure value is an array (in case it's undefined or null)
    if (!Array.isArray(value)) return;

    // Trim each service and filter out empty or whitespace-only values
    const cleanedValues = value
      .map((service) => service.trim()) // Trim spaces
      .filter((service) => service.length > 0); // Remove empty/whitespace values
      console.log('cleanedValues-',cleanedValues);

    // Prevent empty input from being added
    if (!services.length && cleanedValues.length === 0) {
      showWarningToast("Service name cannot be empty or just spaces.");
      return;
    }

    // Validate character length (max 25 per service)
    const invalidService = cleanedValues.find((service) => service.length > 25);
    if (invalidService) {
      showWarningToast("Each service can have a maximum of 25 characters.");
      return;
    }

    // Allow duplicates by concatenating new values instead of replacing
    const newServices = [...cleanedValues];
    console.log('newServices-',newServices);

    // Prevent exceeding 5 services
    if (newServices.length > 5) {
      showWarningToast("You can add a maximum of 5 services.");
      return;
    }

    setServices(newServices); // Update state
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
                <Input placeholder="Enter the Business name" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="businessType"
                label="Business Type"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter the Business type (e.g., Retail, IT)" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="yourName"
                label="Your Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter your Name" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="designation"
                label="Designation"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter your Designation" />
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
                <Input placeholder="Enter your Mobile number" />
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
            {/* <div className="col-lg-6">
              <Form.Item
                name="location"
                label="Location"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter the Business Location" />
              </Form.Item>
            </div> */}
            {/* <div className="col-lg-12">
              <Form.Item
                name="services"
                label="Services"
                // rules={[{ required: true }]}
              >
                <Select
                  mode="tags"
                  className="input-padding-style"
                  placeholder="Enter the Services offered"
                />
              </Form.Item>
            </div> */}
            <div className="col-lg-6">
              <Form.Item
                name="color"
                label="Color"
                rules={[{ required: true }]}
                initialValue="#000000" 
              >
                <Input className="color-padding" type="color" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="theme" label="Theme" rules={[{ required: true }]}>
                <Select placeholder="Select Theme">
                  <Select.Option value="001">Solid Color</Select.Option>
                  <Select.Option value="002">Circular Accent</Select.Option>
                  <Select.Option value="003">Blended Circles</Select.Option>
                </Select>
              </Form.Item>
            </div>
            {/* <div className="col-lg-6">
              <Form.Item name="position" label="Position">
                <Select
                  placeholder="Select Position"
                  className="input-padding-css"
                >
                  <Option value="Horizontal">Horizontal</Option> */}
                  {/* <Option value="Vertical">Vertical</Option> */}
                {/* </Select>
              </Form.Item>
            </div> */}
            {/* <div className="col-lg-6">
              <Form.Item name="topServices" label="Top Services">
                <Select
                  mode="tags"
                  className="input-padding-style"
                  placeholder="Enter the top services and press Enter after each"
                />
              </Form.Item>
            </div> */}
            <div className="col-lg-6">
              <Form.Item name="website" label="Website">
                <Input placeholder="Enter the Business website URL" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="services" label="Services (Maximum 5 )">
                <Select
                  mode="tags"
                  className="input-padding-style"
                  placeholder="Enter the Services offered"
                  value={services}  
                  onChange={handleChange}
                />   
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="whatsappNo" label="WhatsApp Number">
                <Input placeholder="Enter WhatsApp Number" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="facebookLink" label="Facebook Link">
                <Input placeholder="Enter Facebook Link" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="instagramLink" label="Instagram Link">
                <Input placeholder="Enter Instagram Link" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item name="twitterLink" label="Twitter Link">
                <Input placeholder="Enter Twitter Link" />
              </Form.Item>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              className="add-all-users"
              htmlType="submit"
              loading={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddEmployee;