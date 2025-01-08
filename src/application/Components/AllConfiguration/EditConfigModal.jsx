import React, { useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import axiosInstance from "../../../AxiosConfig";

const EditConfigModal = ({ config, onClose, refreshList }) => {
    const [form] = Form.useForm();
    const [saving, setSaving] = useState(false);

    const onFinish = (values) => {
        setSaving(true);
    
        const formattedData = {
            configId: config._id,  
        };
    
        Object.entries(config?.config || {}).forEach(([originalKey, originalValue]) => {
            const newLabel = values[`${originalKey}_label`]; // Get the updated key label
            const newValue = values[originalKey]; // Get the updated value
    
            // If the label or value is modified, use the updated ones
            if (newLabel && (newLabel !== originalKey || newValue !== originalValue)) {
                formattedData[newLabel] = newValue;
            } else {
                // Keep the original key-value pair if not modified
                formattedData[originalKey] = originalValue;
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
            })
            .catch((error) => {
                console.error("Error updating config:", error);
                message.error("Failed to update configuration.");
            })
            .finally(() => setSaving(false));
    };


    return (
        <Modal
            title="Edit Configuration"
            visible={!!config} // Modal visibility
            onCancel={onClose} // Close the modal
            footer={null}
        >
            <Form
                form={form}
                initialValues={config?.config || {}}
                onFinish={onFinish} // Handle form submission
            >
                {Object.entries(config?.config || {}).map(([key, value]) => (
                    <div key={key}>
                        {/* Editable Label */}
                        <Form.Item
                            label="Key"
                            name={`${key}_label`}
                            rules={[{ required: true, message: `Please input the label for ${key}!` }]}
                        >
                            <Input defaultValue={key.charAt(0).toUpperCase() + key.slice(1)} />
                        </Form.Item>

                        {/* Editable Value */}
                        <Form.Item
                            label="Value"
                            name={key}
                            rules={[{ required: true, message: `Please input the ${key}!` }]}
                        >
                            <Input defaultValue={value} />
                        </Form.Item>
                    </div>
                ))}
                <div className="d-flex justify-content-end">
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                        Cancel
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
