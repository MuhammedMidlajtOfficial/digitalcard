import React, { useState, useRef, useEffect } from "react";
import { Form, Input } from "antd";
import { TbEdit } from "react-icons/tb";
import DefaultUser from "../../Assets/Images/admin.png";
import "react-international-phone/style.css";
import axiosInstance from "../../../AxiosConfig";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../Services/toastService";

export const PersonalInformation = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    image: "",
    address: "",
    phnNumber: "",
    email: "",
    userType: ""
  });
  
  const [previewImage, setPreviewImage] = useState('')

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
  
    if (!userId) {
      console.error("User ID not found in localStorage");
      navigate("/login"); // Redirect to login if userId is missing
      return;
    }
  
    axiosInstance
      .get(`adminAuth/getSuperAdmin/${userId}`)
      .then((response) => {
        if (response.data && response.data.user) {
          const { username, image, address, phnNumber, email, userType } = response.data.user;
          setUserData({ username, address, phnNumber, email, userType }); // Update state with the user data
          setPreviewImage(image);
        } else {
          console.error("User not found in response");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message || error);
      })
  }, [navigate]);
  

  useEffect(() => {
    form.setFieldsValue(userData);
  }, [userData, form]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Check file type
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        showErrorToast("Invalid file type. Please select a valid image.");
        return;
      }

      // Check file size (e.g., 5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        showErrorToast("File size is too large. Please select a file smaller than 5MB.");
        return;
      }

      // Read the file and update the state
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({ ...prevData, image: reader.result }));
        setPreviewImage(reader.result)
      };

      reader.onerror = (error) => {
        console.error("FileReader error:", error);
        showErrorToast("Error uploading image. Please try again.");
      };

      reader.readAsDataURL(file);
    } else {
      showErrorToast("No file selected.");
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (values) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    const updatedData = {
      ...values,
      userType: userData.userType,
      image: userData.image,
    };

    setLoading(true); // Start loading spinner
    axiosInstance
      .patch(`adminAuth/updateUser/${userId}`, updatedData)
      .then((response) => {
        showSuccessToast("Profile updated successfully!");
        setUserData(response.data.updatedUser);
      })
      .catch((error) => {
        console.error("Error updating data:", error.message || error);
        showErrorToast("Failed to update profile. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Stop loading spinner
      });
  };

  const validateWhitespace = (rule, value) => {
    if (value && value.trim().length === 0) {
      return Promise.reject("This field cannot be empty or just whitespace.");
    }
    return Promise.resolve();
  };

  return (
    <div className="settings-personal-information">
      <div className="container">
        <h4 className="mt-4 mt-lg-0">Personal Information</h4>
        <Form 
          layout="vertical" 
          form={form} 
          onFinish={handleSubmit}
        >
          <div className="row mt-4">
            <div className="settings-profile-icon-section">
              <img
                src={previewImage ? previewImage : userData.image ? userData.image :DefaultUser}
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
              <Form.Item 
                label="User Name" 
                name="username"
                rules={[
                  { required: true, message: "Please enter your username" },
                  { validator: validateWhitespace },
                ]}
              >
                <Input 
                  placeholder="Enter User Name" 
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item 
                label="Email" 
                name="email"
                rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
              >
                <Input 
                  placeholder="Enter Email" 
                  disabled 
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-1">
              <Form.Item 
                label="Phone Number" 
                name="phnNumber"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  { pattern: /^[0-9]{10}$/, message: "Phone number must be 10 digits" },
                  { validator: validateWhitespace },
                ]}
              >
                <Input 
                  type="number" 
                  placeholder="Enter Your Phone Number" 
                  onChange={(e) => setUserData({ ...userData, phnNumber: e.target.value })}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item 
                label="Address" 
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                  { validator: validateWhitespace },
                ]}
              >
                <Input
                  placeholder="Enter Your Address"
                  onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                />
              </Form.Item>
            </div>
          </div>

          <div className="row mt-4">
            <div className="d-flex justify-content-end gap-3">
              <button 
                className="cancel-btn" 
                type="button"
                onClick={()=>{navigate('/admin/dashboard/overview')}}
              >
                Discard
              </button>
              <button
                className="create-btn"
                type="submit"
                disabled={loading}
                style={{ width: "166.2px", height: "36.85px", display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                {loading ? (
                  <div 
                    className="spinner-border text-light" 
                    role="status"
                    style={{ width: "1rem", height: "1rem", borderWidth: "2px" }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
