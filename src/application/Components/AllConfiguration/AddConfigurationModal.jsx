import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import axiosInstance from "../../../AxiosConfig";
import { CloseOutlined } from "@ant-design/icons";

const AddConfigurationModal = ({ visible, onCancel, refreshList }) => {
    const [configData, setConfigData] = useState([
        { key: "", value: "" }, // Initial key-value pair
    ]);

    const handleSave = () => {
        // Format the data to match the required structure
        const formattedData = configData.reduce((acc, { key, value }) => {
            if (key && value) {
                acc[key] = value; // Dynamically use configData.key and configData.value
            }
            return acc;
        }, {});

        // Make the POST request to save the configuration
        axiosInstance
            .post(`/config/`, formattedData) // Send the formatted data in the request body
            .then((response) => {
                console.log("Config saved successfully", response.data);
                refreshList();
                setConfigData([{ key: "", value: "" }]);

            })
            .catch((error) => {
                console.error("Error saving config:", error);
            });

        onCancel(); // Close the modal after saving
    };

    const handleAddMore = () => {
        setConfigData([...configData, { key: "", value: "" }]); // Add new key-value pair
    };

    const handleInputChange = (index, field, value) => {
        const updatedData = [...configData];
        updatedData[index][field] = value;
        setConfigData(updatedData); // Update the respective field in the array
    };

    const handleRemoveField = (index) => {
        const updatedData = configData.filter((_, i) => i !== index);
        setConfigData(updatedData);
    };

    return (
        <Modal
            title="Add Configuration"
            visible={visible} // Modal visibility controlled by the parent component
            onCancel={onCancel} // Close modal on cancel
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleSave}>
                    Save
                </Button>,
            ]}
        >
            <div>
                {configData.map((data, index) => (
                    <div className="d-flex justify-content-between align-items-center" key={index} style={{ marginBottom: 10 }}>
                        <div>
                            <Input
                                placeholder="Key"
                                value={data.key}
                                onChange={(e) => handleInputChange(index, "key", e.target.value)}
                            />
                            <Input
                                placeholder="Value"
                                value={data.value}
                                onChange={(e) => handleInputChange(index, "value", e.target.value)}
                                style={{ marginTop: 10 }}
                            />
                        </div>
                        <CloseOutlined
                            onClick={() => handleRemoveField(index)}
                            style={{ cursor: "pointer", color: "red" }}
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
