import React, { useState, useEffect } from "react";
import { Form, Input, Checkbox, Button, message } from "antd";
import axios from "axios";

const RollCreationAddRole = () => {
  const [roles, setRoles] = useState([]);
  const [form] = Form.useForm();
  const [isActive, setIsActive] = useState(false);

  // Fetch roles on component mount
  useEffect(() => {
    const getRoles = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/v1/employee/roles");
        setRoles(response.data);
      } catch (error) {
        message.error("Failed to fetch roles.");
      }
    };
    getRoles();
  }, []);

  // Handle form submission
  const handleFormSubmit = async (values) => {
    try {
      const roleData = {
        ...values,
        isActive,
      };
      await axios.post("http://localhost:9000/api/v1/employee/roles", roleData);
      message.success("Role created successfully.");
      form.resetFields();
      setIsActive(false);
    } catch (error) {
      message.error("Failed to create role.");
    }
  };

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <Form.Item
              label="Role Name"
              name="roleName"
              rules={[{ required: true, message: "Please enter the role name." }]}
            >
              <Input placeholder="Enter role name" />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Form.Item>
              <Checkbox
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              >
                Is Active
              </Checkbox>
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RollCreationAddRole;
