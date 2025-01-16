import React, { useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import { axiosInstance } from "../../../AxiosConfig";
import { CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const EditConfigModal = ({ config, onClose, refreshList }) => {
    const [form] = Form.useForm();
    const [saving, setSaving] = useState(false);
    const [extraFields, setExtraFields] = useState([]);
    const [removedFields, setRemovedFields] = useState([]);

    const onFinish = (values) => {
        setSaving(true);

        const formattedData = {
            configId: config._id,
        };

        // Process existing fields
        Object.entries(config?.config || {}).forEach(([originalKey, originalValue]) => {
            if (!removedFields.includes(originalKey)) {
                const newLabel = values[`${originalKey}_label`];
                const newValue = values[originalKey];

                // If the label is changed or value is changed, update accordingly
                if (newLabel && newLabel !== originalKey) {
                    formattedData[newLabel] = newValue;
                } else {
                    // If the label hasn't changed but value has, update the value
                    formattedData[originalKey] = newValue !== originalValue ? newValue : originalValue;
                }
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
                setRemovedFields([]);
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

    const handleRemoveField = (index, isExistingField = false, fieldKey = null) => {
        if (isExistingField) {
            setRemovedFields([...removedFields, fieldKey]);
        } else {
            setExtraFields(extraFields.filter((_, i) => i !== index));
        }
    };
    const handleRemoveField2 = (index, isExistingField = false, fieldKey = null) => {
        if (isExistingField) {
            setRemovedFields([...removedFields, fieldKey]);
        } else {
            setExtraFields(extraFields.filter((_, i) => i !== index));
        }
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
                {Object.entries(config?.config || {})
                    .filter(([key]) => !removedFields.includes(key))
                    .map(([key, value]) => (
                        <div className="row" key={key}>
                            <div className="col-lg-11">
                                <Form.Item
                                    label="Key"
                                    name={`${key}_label`}
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
                            <div className="col-lg-1">
                                <Button
                                    icon={<CloseOutlined />}
                                    onClick={() =>
                                        Modal.confirm({
                                            title: "Deleting this configuration may affect its functionality on other pages. Please confirm if you wish to proceed.",
                                            icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
                                            okText: "Yes",
                                            cancelText: "No",
                                            onOk: () => handleRemoveField2(null, true, key), 
                                        })
                                    }
                                    type="text"
                                    danger
                                />
                            </div>
                        </div>
                    ))}

                {extraFields.map((_, index) => (
                    <div className="row" key={`extra_${index}`}>
                        <div className="col-lg-11">
                            <Form.Item
                                label="Key"
                                name={`extra_key_${index}`}
                                rules={[{ required: true, message: "Please input the key!" }]}
                            >
                                <Input placeholder="New Key" />
                            </Form.Item>
                            <Form.Item
                                label="Value"
                                name={`extra_value_${index}`}
                                rules={[{ required: true, message: "Please input the value!" }]}
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
