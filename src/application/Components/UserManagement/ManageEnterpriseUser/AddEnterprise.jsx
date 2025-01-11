import React, { useState,useRef } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { axiosInstance, logInstance } from "../../../../AxiosConfig";
import { useLoading } from "../../../Services/loadingService";
import { TbEdit } from "react-icons/tb";
import imageCompression from "browser-image-compression";
const { Option } = Select;

const AddEnterprise = ({ visible, onClose }) => {
  const { startLoading, stopLoading } = useLoading();
  const fileInputRef = useRef(null);

  const handleAddEnterprise = async(values) => {
    const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

    const payload = {
      ...values,
      userId, 
    };
    console.log(payload)
    startLoading();
    try{
    const response=await logInstance.post("/cardEnterprise", payload)
      if(response.status===200){
        console.log("Enterprise added successfully", response.data);
        onClose();
      }}
      catch(error) {
        console.error("Error adding enterprise:", error.response);
      }
      finally{
        stopLoading();
      };
  };
  const [previewImage, setPreviewImage] = useState("");
  const handleImageFileChange = async (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/svg+xml"];
  
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
      // Compress the image using browser-image-compression
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 2, // Max size in MB after compression
        maxWidthOrHeight: 1024, // Max width/height
      });
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Update preview image with compressed image
      };
      reader.readAsDataURL(compressedFile); // Convert the compressed file to base64
    } catch (error) {
      console.error("Image compression error:", error);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  return (
    <div>
      <Modal
        title="Add Enterprise"
        visible={visible}
        onCancel={onClose}
        footer={null}
        width={750}
      >
        <Form layout="vertical" onFinish={(values) =>
            handleAddEnterprise({ ...values, image: previewImage })
          }>
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
                <Input placeholder="Enter your designation (e.g., Manager)" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                name="mobile"
                label="Mobile"
                rules={[{ required: true }]}
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
                <Select mode="tags" placeholder="Enter the services offered"/>
                 
                
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddEnterprise;
