import React, { useState } from "react";
import { Modal, Button, Input, Form, message } from "antd";
import { axiosInstance } from "../../../AxiosConfig";
import { CloseOutlined } from "@ant-design/icons";

const AddConfigurationModal = ({ visible, onCancel, refreshList }) => {
    const [configData, setConfigData] = useState([{ key: "", value: "", error: false }]);

    const validateData = () => {
        const updatedData = configData.map((item, index, array) => {
            const trimmedKey = item.key.trim();
            const trimmedValue = item.value.trim();
            const isDuplicate = array.some((el, i) => el.key.trim() === trimmedKey && i !== index);

            return {
                ...item,
                error: !trimmedKey || !trimmedValue || isDuplicate,
                errorMessage: !trimmedKey
                    ? "Key is required"
                    : !trimmedValue
                    ? "Value is required"
                    : isDuplicate
                    ? "Duplicate key is not allowed"
                    : "",
            };
        });

        setConfigData(updatedData);
        return updatedData.every((item) => !item.error);
    };

    const handleSave = () => {
        if (!validateData()) {
            message.error("Please fix validation errors before saving.");
            return;
        }

        const formattedData = configData.reduce((acc, { key, value }) => {
            acc[key.trim()] = value.trim();
            return acc;
        }, {});

        axiosInstance
            .post(`/config/`, formattedData)
            .then(() => {
                message.success("Config saved successfully!");
                refreshList();
                setConfigData([{ key: "", value: "", error: false }]);
                onCancel();
            })
            .catch((error) => {
                message.error("Error saving config.");
                console.error("Error saving config:", error);
            });
    };

    const handleAddMore = () => {
        setConfigData([...configData, { key: "", value: "", error: false }]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedData = [...configData];
        updatedData[index][field] = value;
        setConfigData(updatedData);
    };

    const handleRemoveField = (index) => {
        const updatedData = configData.filter((_, i) => i !== index);
        setConfigData(updatedData);
    };

    return (
        <Modal
            title="Add Configuration"
            visible={visible}
            // onCancel={onCancel}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleSave}>
                    Save
                </Button>,
            ]}
            closable={false}
        >
            <div>
                {configData.map((data, index) => (
                    <div className="d-flex justify-content-between align-items-center" key={index} style={{ marginBottom: 10 }}>
                        <div style={{ width: "90%" }}>
                            <Form.Item
                                validateStatus={data.error ? "error" : ""}
                                help={data.error ? data.errorMessage : ""}
                            >
                                <label>
                                    Key <span style={{ color: "red" }}>*</span>
                                </label>
                                <Input
                                    placeholder="Key"
                                    value={data.key}
                                    onChange={(e) => handleInputChange(index, "key", e.target.value)}
                                />
                            </Form.Item>

                            <Form.Item
                                validateStatus={data.error ? "error" : ""}
                                help={data.error ? data.errorMessage : ""}
                            >
                                <label>
                                    Value <span style={{ color: "red" }}>*</span>
                                </label>
                                <Input
                                    placeholder="Value"
                                    value={data.value}
                                    onChange={(e) => handleInputChange(index, "value", e.target.value)}
                                />
                            </Form.Item>
                        </div>
                        <CloseOutlined
                            onClick={() => handleRemoveField(index)}
                            style={{ cursor: "pointer", color: "red", fontSize: "16px", marginLeft: 10 }}
                        />
                    </div>
                ))}
                <Button type="dashed" onClick={handleAddMore} style={{ width: "100%" }}>
                    Add More
                </Button>
            </div>
        </Modal>
    );
};

export default AddConfigurationModal;
