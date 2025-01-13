import React, { useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import { axiosInstance } from "../../../AxiosConfig";

const EditConfigModal = ({ config, onClose, refreshList }) => {
  const [form] = Form.useForm();
  const [saving, setSaving] = useState(false);

  // Manage dynamically added fields
  const [addedFields, setAddedFields] = useState([]);

  const onFinish = (values) => {
    setSaving(true);

    const formattedData = {
      configId: config._id,
    };

    // Handle existing fields
    Object.entries(config?.config || {}).forEach(
      ([originalKey, originalValue]) => {
        const newLabel = values[`${originalKey}_label`]; // Get updated label
        const newValue = values[originalKey]; // Get updated value

        if (
          newLabel &&
          (newLabel !== originalKey || newValue !== originalValue)
        ) {
          formattedData[newLabel] = newValue;
        } else {
          formattedData[originalKey] = originalValue;
        }
      }
    );

    // Handle dynamically added fields
    addedFields.forEach((field) => {
      const newLabel = values[`${field.key}_label`];
      const newValue = values[field.key];

      if (newLabel && newValue) {
        formattedData[newLabel] = newValue;
      }
    });

    console.log("FORMATTED DATA EDIT:", formattedData);

    axiosInstance
      .patch(`/config/`, formattedData)
      .then(() => {
        message.success("Configuration updated successfully!");
        onClose();
        refreshList();
        form.resetFields();
        setAddedFields([]); // Reset added fields after save
      })
      .catch((error) => {
        console.error("Error updating config:", error);
        message.error("Failed to update configuration.");
      })
      .finally(() => setSaving(false));
  };

  const addNewField = () => {
    const newKey = `newKey_${addedFields.length}`;
    setAddedFields((prev) => [...prev, { key: newKey }]);
    form.setFieldsValue({
      [`${newKey}_label`]: `${addedFields.length}`,
      [newKey]: "",
    });
  };

  return (
    <Modal
      title="Edit Configuration"
      visible={!!config}
      onCancel={onClose}
      footer={null}
    >
      <Form
        form={form}
        initialValues={{
          ...Object.entries(config?.config || {}).reduce(
            (acc, [key, value]) => {
              acc[key] = value;
              acc[`${key}_label`] = key;
              return acc;
            },
            {}
          ),
        }}
        onFinish={onFinish}
      >
        {/* Render existing fields */}
        {Object.entries(config?.config || {}).map(([key, value]) => (
          <div key={key}>
            <Form.Item label="Key" name={`${key}_label`}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Value"
              name={key}
              rules={[{ required: true, message: `Please input the ${key}!` }]}
            >
              <Input />
            </Form.Item>
          </div>
        ))}

        {/* Render dynamically added fields */}
        {addedFields.map((field) => (
          <div key={field.key}>
            <Form.Item
              label="Key"
              name={`${field.key}_label`}
              rules={[{ required: true, message: "Please provide a key!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Value"
              name={field.key}
              rules={[{ required: true, message: "Please provide a value!" }]}
            >
              <Input />
            </Form.Item>
          </div>
        ))}

        <div className="d-flex justify-content-between">
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={addNewField} style={{ marginRight: 8 }}>
            Add More
          </Button>
          <Button type="primary" htmlType="submit" loading={saving}>
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditConfigModal;
