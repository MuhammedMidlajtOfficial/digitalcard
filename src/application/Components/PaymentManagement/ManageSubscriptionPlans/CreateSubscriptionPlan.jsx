import React, { useEffect } from "react";
import { Button, Modal, Form, Input, Select, Radio, Row, Col } from "antd";

const { Option } = Select;

const CreateSubscriptionPlan = ({
  open,
  handleCancel,
  onSubmit,
  initialData,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [open]);

  useEffect(() => {
    if (initialData) {
      const featuresAsText =
        Array.isArray(initialData.features) && initialData.features.length > 0
          ? initialData.features.join(", ")
          : ""; 
          form.setFieldsValue({
            name: initialData.name,
            price: initialData.price,
            packageType: initialData.duration === 30 ? "monthly" : "yearly",
            plan: initialData.planId,
            type: initialData.type,
            description: featuresAsText,
            status: initialData.status || "active",
          });
    } else {
      form.resetFields();
    }
  }, [initialData, form]);
  

  const handleFinish = (values) => {
    console.log("Form Values Before Submit:", values);
    const featuresArray = values.description
      ? values.description
          .split(",")
          .map((feature) => feature.trim())
          .filter(Boolean)
      : [];

    const formattedData = {
      ...values,
      features: featuresArray,
      duration: values.packageType === "monthly" ? 30 : 365,
      type: values.type,
    };
    onSubmit(formattedData);
  };

  return (
    <Modal
      open={open}
      title={
        <div className="custom-modal-title">
          {initialData ? "Edit Subscription" : "Create Subscription"}
        </div>
      }
      onCancel={handleCancel}
      footer={[
        <Button className="create-subscription-cancel-button"  onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="save"
          className="add-all-users-button"
          onClick={() => form.submit()}
        >
          {initialData ? "Update" : "Save"}{" "}
        </Button>,
      ]}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        className="mt-4"
      >
        <Form.Item
          name="name"
          label="Subscription Name"
          rules={[
            { required: true, message: "Please enter Subscription name" },
            {
              validator(_, value) {
                if (value && value.trim().length >= 3) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Subscription name must be at least 3 characters")
                );
              },
            },
          ]}
        >
          <Input placeholder="Enter Subscription name" />
        </Form.Item>
        <Form.Item
          name="type"
          label="User Type"
          rules={[{ required: true, message: "Please select a user type" }]}
        >
          <Radio.Group>
            <Radio value="Individual">Individual</Radio>
            <Radio value="Enterprise">Enterprise</Radio>
          </Radio.Group>
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                { required: true, message: "Please enter the Price" },
                {
                  validator(_, value) {
                    if (!value || /^\d+$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The price must be a valid number without spaces"
                      )
                    );
                  },
                },
              ]}
            >
              <Input prefix="₹" placeholder="999" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="packageType"
              label="Select Package"
              rules={[{ required: true, message: "Please select a package" }]}
            >
              <Select className="select-package" placeholder="Select Package">
                <Option value="monthly">Monthly</Option>
                <Option value="yearly">Yearly</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="description"
          label="Subscription Features (comma-separated)"
          rules={[
            {
              required: true,
              message: "Please enter the subscription features",
            },
            {
              validator(_, value) {
                if (
                  value &&
                  value.split(",").every((feature) => feature.trim().length > 0)
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "Each feature must contain at least one letter and cannot be empty or remove unwanted comma(,)"
                  )
                );
              },
            },
          ]}
        >
          <Input placeholder="Feature 1, Feature 2, Feature 3" />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          initialValue="active"
          rules={[{ required: true, message: "Please select a status" }]}
        >
          <Radio.Group>
            <Radio value="active">Active</Radio>
            <Radio value="inactive">Inactive</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateSubscriptionPlan;
