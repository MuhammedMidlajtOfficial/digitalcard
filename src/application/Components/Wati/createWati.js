import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../../AxiosConfig";
import Swal from "sweetalert2";

const CreateWati = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const watiId = searchParams.get("id");

  useEffect(() => {
    if (watiId) {
      // Fetch Wati details for editing
      fetchWatiDetails();
    }
  }, [watiId]);

  const fetchWatiDetails = async () => {
    try {
      const response = await axiosInstance.get(`/wati/${watiId}`);
      const watiData = response.data;

      // Populate form with Wati data
      form.setFieldsValue({
        url: watiData.url,
        apiKey: watiData.apiKey,
      });
    } catch (error) {
      console.error("Error fetching Wati details:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to load Wati details.",
      });
    }
  };

  const handleSubmitForm = async (values) => {
    try {
      const payload = {
        url: values.url,
        apiKey: values.apiKey,
      };

      if (watiId) {
        // Update existing Wati configuration
        const response = await axiosInstance.put(`/wati/${watiId}`, payload);
        Swal.fire({
          icon: "success",
          title: "Wati Updated!",
          text: "The Wati configuration has been updated successfully.",
        });
        console.log("responce",response);
        
      } else {
        // Create new Wati configuration
        const response = await axiosInstance.post("/wati", payload);
        Swal.fire({
          icon: "success",
          title: "Wati Created!",
          text: "The Wati configuration has been created successfully.",
        });
        console.log("responce",response);
      }

      navigate("/admin/watiList");
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: `Failed to ${watiId ? "update" : "create"} Wati configuration. Please try again.`,
      });
    }
  };

  return (
    <div className="wati-section">
      <div className="container">
        <h4
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "24px",
            fontWeight: "bolder",
          }}
        >
          {watiId ? "Edit Wati Configuration" : "Add Wati Configuration"}
        </h4>

        <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
          <div className="row mt-4">
            <div className="col-md-12 mb-1">
              <Form.Item
                label="URL"
                name="url"
                rules={[{ required: true, message: "Please enter a URL!" }]}
              >
                <Input placeholder="Enter URL" />
              </Form.Item>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12 mb-1">
              <Form.Item
                label="API Key"
                name="apiKey"
                rules={[{ required: true, message: "Please enter an API Key!" }]}
              >
                <Input placeholder="Enter API Key" />
              </Form.Item>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-end gap-3">
              <Button
                className="cancel-btn"
                type="button"
                onClick={() => navigate("/admin/watiList")}
              >
                Cancel
              </Button>
              <Button className="create-btn" type="primary" htmlType="submit">
                {watiId ? "Update" : "Create"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateWati;
