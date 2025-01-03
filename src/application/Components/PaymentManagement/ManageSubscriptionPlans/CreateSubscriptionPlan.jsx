import React, { useEffect } from "react";
import { Button, Modal, Form, Input, Select, Radio, Row, Col } from "antd";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

const CreateSubscriptionPlan = ({
  open,
  handleCancel,
  onSubmit,
  initialData,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields()
  }, [open]);

  useEffect(() => {
    if (initialData) {
      // Format features as a string for ReactQuill
      const featuresAsText = initialData.features?.join(", ") || "";

      form.setFieldsValue({
        name: initialData.name,
        price: initialData.price,
        packageType: initialData.duration === 30 ? "monthly" : "yearly",
        plan: initialData.plan,
        userType: initialData.type,
        description: featuresAsText,
      });
    } else {
      form.resetFields();
    }
  }, [initialData, form]);

  const handleFinish = (values) => {
    // Convert description back to features array
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
    };

    onSubmit(formattedData);
  };

  return (
    <Modal
      open={open}
      title={initialData ? "Edit Subscription" : "Create Subscription"}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="save"
          className="add-all-users"
          onClick={() => form.submit()}
        >
          Save
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
            { required: true, message: "Please enter subscription name" },
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
          <Input placeholder="Enter subscription name" />
        </Form.Item>

        <Row gutter={16}>
          <Col span={8}>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Please enter the price" },
              {
                validator(_, value) {
                  if (!value || /^\d+$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The price must be a valid number without spaces")
                  );
                },
              },
            ]}
          >
            <Input prefix="₹" placeholder="999" />
          </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="packageType"
              label="Select Package"
              rules={[{ required: true, message: "Please select a package" }]}
            >
              <Select placeholder="Select Package">
                <Option value="monthly">Monthly</Option>
                <Option value="yearly">Yearly</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* <Col span={8}>
            <Form.Item
              name="plan"
              label="Select Plan"
              rules={[{ required: true, message: "Please select a plan" }]}
            >
              <Select placeholder="Select Plan">
                <Option value="silver">Silver</Option>
                <Option value="gold">Gold</Option>
                <Option value="platinum">Platinum</Option>
              </Select>
            </Form.Item>
          </Col> */}
        </Row>

        {/* <Form.Item
          name="userType"
          label="User Type"
          rules={[{ required: true, message: "Please select a user type" }]}
        >
          <Radio.Group>
            <Radio value="Individual">Individual</Radio>
            <Radio value="Enterprise">Enterprise</Radio>
          </Radio.Group>
        </Form.Item> */}

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
                  value
                    .split(",")
                    .every((feature) => feature.trim().length > 0)
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "Each feature must contain at least one letter and cannot be empty or remove unwanted coma(,)"
                  )
                );
              },
            },
          ]}
        >
          <Input placeholder="Feature 1, Feature 2, Feature 3" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateSubscriptionPlan;