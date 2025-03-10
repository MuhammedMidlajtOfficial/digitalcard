import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { TbEdit } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { axiosInstance } from "../../../AxiosConfig";
import Swal from "sweetalert2";

const CreateEmployee = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [form] = Form.useForm();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isImageUpdated, setIsImageUpdated] = useState(false); // Track if the image is updated

  const searchParams = new URLSearchParams(location.search);
  const employeeId = searchParams.get("id");

  useEffect(() => {
    if (employeeId) {
      // Fetch employee details for edit
      fetchEmployeeDetails();
    }
  }, [employeeId]);

  const fetchEmployeeDetails = async () => {
    try {
      const response = await axiosInstance.get(`/employee/${employeeId}`);
      const employeeData = response.data.employee;

      // Populate form with employee data
      form.setFieldsValue({
        username: employeeData.username,
        email: employeeData.email,
        phnNumber: employeeData.phnNumber,
        category: employeeData.category,
      });
      setPreviewImage(employeeData.image);
      setIsImageUpdated(false);
      
    } catch (error) {
      console.error("Error fetching employee details:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to load employee details.",
      });
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  // const handleImageFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewImage(reader.result);
  //       setIsImageUpdated(true);
        
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (2MB = 2 * 1024 * 1024 bytes)
      if (file.size > 2 * 1024 * 1024) {
        Swal.fire({
          icon: "error",
          title: "File Too Large",
          text: "Image file must be below 2MB.",
        });
        // Clear the file input
        e.target.value = null;
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setIsImageUpdated(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitForm = async (values) => {
    if (!previewImage) {
      Swal.fire("Error", "Please upload a profile image!", "error");
      return;
    }

    try {
      const payload = {
        username: values.username,
        // image: previewImage,
        email: values.email,
        password: values.password,
        phnNumber: values.phnNumber,
        category: values.category,
      };

      if (isImageUpdated) {
        payload.image = previewImage;
      }
      if (employeeId) {
        // Update existing employee
        const response = await axiosInstance.put(
          `/employee/${employeeId}`,
          payload
        );
        console.log("Response:", response);
        Swal.fire({
          icon: "success",
          title: "Employee Updated!",
          text: "The employee profile has been updated successfully.",
        });
      } else {
        // Create new employee
        const response = await axiosInstance.post("/employee", payload);
        console.log("Response:", response);
        Swal.fire({
          icon: "success",
          title: "Employee Created!",
          text: "The employee profile has been created successfully.",
        });
      }

      navigate("/admin/employeeList");
      form.resetFields();
      setPreviewImage(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          Swal.fire({
            icon: "error",
            title: "Missing Fields",
            text: data.message || "Please fill in all required fields.",
          });
        } else if (status === 409) {
          Swal.fire({
            icon: "error",
            title: "Conflict",
            text: data.message || "An employee with this email already exists.",
          });
        } else if (status === 500) {
          Swal.fire({
            icon: "error",
            title: "Server Error",
            text: data.message || "An unexpected error occurred on the server.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `Failed to ${employeeId ? "update" : "create"
              } employee profile. Please try again.`,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Unable to connect to the server. Please try again later.",
        });
      }
    }
  };

  return (
    <div className="personal-information-section">
      <div className="container">
        <h4
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "24px",
            fontWeight: "bolder",
          }}
        >
          {employeeId ? "Edit Employee Profile" : "Add Employee Profile"}
        </h4>
        <hr style={{ width: "30%", margin: "5px auto", border: "1px solid #2238ff" }} />

        <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
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
                <div className="add-profile-btn" onClick={handleEditClick}>
                  Add Profile Image
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 mb-1">
              <Form.Item
                label="User Name"
                name="username"
                rules={[
                  { required: true, message: "Please enter a Username!" },
                ]}
              >
                <Input placeholder="Enter User Name" />
              </Form.Item>
            </div>
            <div className="col-md-6 mb-1">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter an Email!" },
                  { type: "email", message: "Enter a valid Email address!" },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>
            </div>
          </div>

          {!employeeId && (
            <div className="row">
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter a Password!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter Password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </div>
              <div className="col-md-6 mb-1">
                <Form.Item
                  label="Phone Number"
                  name="phnNumber"
                  rules={[
                    { required: true, message: "Please enter a phone number!" },
                    {
                      pattern: /^\d{10}$/,
                      message: "Phone number must be 10 digits.",
                    },
                  ]}
                >
                  <Input placeholder="Enter Phone Number" />
                </Form.Item>
              </div>
            </div>
          )}

          <div className="row mt-4">
            <div className="col-md-12 mb-1">
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Please select at least one category!",
                  },
                ]}
              >
                <Checkbox.Group>
                  <div
                    className="category-checkboxes"
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    <Checkbox value="dashboard-overview">
                      Dashboard Overview
                    </Checkbox>

                    <Checkbox value="view-user-profile">
                      View User Profile
                    </Checkbox>

                    <Checkbox value="manage-enterprise-user">
                      Manage Enterprise User
                    </Checkbox>

                    <Checkbox value="manage-subscription-plans">
                      Manage Subscription Plans
                    </Checkbox>

                    <Checkbox value="view-payment-history">
                      View Payment History
                    </Checkbox>

                    <Checkbox value="generate-invoice">
                      Generate Invoice
                    </Checkbox>

                    <Checkbox value="view-respond-tickets">
                      View & Respond to Tickets
                    </Checkbox>

                    <Checkbox value="assign-tickets">Assign Tickets</Checkbox>

                    <Checkbox value="ticket-categories">
                      Ticket Categories
                    </Checkbox>

                    <Checkbox value="create-employee">Create Employee</Checkbox>

                    <Checkbox value="send-notification">
                      Send Notification
                    </Checkbox>
                    <Checkbox value="wati">Wati Lists</Checkbox>
                    <Checkbox value="logs">View Logs</Checkbox>
                    <Checkbox value="config">All Configuration</Checkbox>
                  </div>
                </Checkbox.Group>
              </Form.Item>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-end gap-3">
              <Button
                className="cancel-btn"
                type="button"
                onClick={() => navigate("/admin/employeeList")}
              >
                Cancel
              </Button>
              <Button className="create-btn" type="primary" htmlType="submit">
                {employeeId ? "Update" : "Create"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateEmployee;
