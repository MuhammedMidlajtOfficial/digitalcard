import React, { useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import { axiosInstance } from "../../../AxiosConfig";
import { CloseOutlined } from "@ant-design/icons";

const EditConfigModal = ({ config, onClose, refreshList }) => {
    const [form] = Form.useForm();
    const [saving, setSaving] = useState(false);
    const [extraFields, setExtraFields] = useState([]);

    const onFinish = (values) => {
        setSaving(true);

        const formattedData = {
            configId: config._id,
        };

        Object.entries(config?.config || {}).forEach(([originalKey, originalValue]) => {
            const newLabel = values[`${originalKey}_label`];
            const newValue = values[originalKey];

            // If the label is changed or value is changed, update accordingly
            if (newLabel && newLabel !== originalKey) {
                formattedData[newLabel] = newValue;
            } else {
                // If the label hasn't changed but value has, update the value
                formattedData[originalKey] = newValue !== originalValue ? newValue : originalValue;
            }
        });



        // Include extra fields in the formatted data
        extraFields.forEach((_, index) => {
            const extraKey = values[`extra_key_${index}`];
            const extraValue = values[`extra_value_${index}`];
            if (extraKey && extraValue) {
                formattedData[extraKey] = extraValue;
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
                setExtraFields([]);
            })
            .catch((error) => {
                console.error("Error updating config:", error);
                message.error("Failed to update configuration.");
            })
            .finally(() => setSaving(false));
    };

    const handleAddMore = () => {
        setExtraFields([...extraFields, { key: "", value: "" }]);
    };

    const handleRemoveField = (index) => {
        setExtraFields(extraFields.filter((_, i) => i !== index));
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
                initialValues={config?.config || {}}
                onFinish={onFinish}
            >
                {Object.entries(config?.config || {}).map(([key, value]) => (
                    <div key={key}>
                        <Form.Item
                            label="Key"
                            name={`${key}_label`}
                        // rules={[{ required: true, message: `Please input the label for ${key}!` }]}
                        >
                            <Input defaultValue={key.charAt(0).toUpperCase() + key.slice(1)} />
                        </Form.Item>

                        <Form.Item
                            label="Value"
                            name={key}
                            rules={[{ required: true, message: `Please input the ${key}!` }]}
                        >
                            <Input defaultValue={value} />
                        </Form.Item>
                    </div>
                ))}

                {/ Render extra fields /}
                {extraFields.map((_, index) => (
                    <div className="row " key={`extra_${index}`} >
                        <div className="col-lg-11">
                            <Form.Item
                                label="Key"
                                name={`extra_key_${index}`}
                                rules={[{ required: true, message: "Please input the key!" }]}
                                style={{ flex: 1 }}
                            >
                                <Input placeholder="New Key" />
                            </Form.Item>
                            <Form.Item
                                label="Value"
                                name={`extra_value_${index}`}
                                rules={[{ required: true, message: "Please input the value!" }]}
                                style={{ flex: 1 }}
                            >
                                <Input placeholder="New Value" />
                            </Form.Item>
                        </div>
                        <div className="col-lg-1">
                            <Button
                                icon={<CloseOutlined />}
                                onClick={() => handleRemoveField(index)}
                                type="text"
                                danger
                            />
                        </div>
                    </div>
                ))}

                <Button
                    type="dashed"
                    onClick={handleAddMore}
                    style={{ width: "100%", marginBottom: 16 }}
                >
                    Add More
                </Button>

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
