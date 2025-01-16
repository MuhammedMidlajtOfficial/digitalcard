import React, { useEffect, useState } from "react";
import { Spin, Button, Card, Modal } from "antd";
import {axiosInstance} from "../../../AxiosConfig";
import { useLoading } from "../../Services/loadingService";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import EditConfigModal from "./EditConfigModal"; // Import the modal component
import { FaPlus } from "react-icons/fa6";
import AddConfigurationModal from "./AddConfigurationModal";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const AllConfigList = () => {
    const [allConfigs, setAllConfigs] = useState([]);
    const [selectedConfig, setSelectedConfig] = useState(null);
    const { loading, startLoading, stopLoading } = useLoading();
    const [isAddConfigModalVisible, setIsAddConfigModalVisible] = useState(false); 
    const fetchConfigs = () => {
        startLoading();
        axiosInstance
            .get(`/config`)
            .then((response) => {
                console.log("ALL CONFIG", response.data);
                setAllConfigs(response.data || []);
            })
            .catch((error) => {
                console.error("Error fetching configs:", error);
            })
            .finally(() => stopLoading());
    };

    useEffect(() => {
        fetchConfigs();
    }, []);

    const openDeleteModal = (id) => {
        Modal.confirm({
            title: "Deleting this configuration may affect its functionality on other pages. Please confirm if you wish to proceed.",
            icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
            okText: "Yes",
            cancelText: "No",
            onOk: () => deleteConfig(id), 
        });
    };
    const deleteConfig = (id) => {
        startLoading();
        axiosInstance
            .delete(`/config`, {
                data: { configId: id }, 
            })
            .then(() => {
                fetchConfigs();
            })
            .catch((error) => {
                console.error("Error deleting config:", error);
            })
            .finally(() => stopLoading());
    };

    useEffect(() => {
        fetchConfigs();
    }, []);

    const openAddConfigModal = () => {
        setIsAddConfigModalVisible(true); // Set the modal visibility to true
    };
    const closeAddConfigModal = () => {
        setIsAddConfigModalVisible(false); // Set the modal visibility to false
    };
    return (
        <div className="container">
            <div className="application-users-section mb-4 d-flex justify-content-between">
                <h2>All Configuration</h2>
                <button
                    className="add-all-users"
                    onClick={openAddConfigModal}
                >
                    <FaPlus />
                    Add Configuration
                </button>
            </div>
            {loading ? (
                <Spin size="large" className="d-flex justify-content-center mt-5" />
            ) : (
                <div className="row">
                    {allConfigs.map((config, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={config._id}>
                            <Card className="config-Card"
                                title={`Configuration ${index + 1}`}
                                bordered={true}                            >
                                <div className="d-flex flex-column justify-content-between" style={{ minHeight: "120px" }}>
                                    {config.config ? (
                                        Object.entries(config.config).map(([key, value]) => (
                                            <p key={key}>
                                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value || "N/A"}
                                            </p>
                                        ))
                                    ) : (
                                        <p>No configuration available</p>
                                    )}

                                    <div className="actions mt-auto">
                                        <Button
                                            type="text"
                                            icon={<HiOutlinePencilSquare />}
                                            onClick={() => setSelectedConfig(config)} // Pass selected record
                                            title="Edit"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            type="text"
                                            icon={<MdDeleteOutline />}
                                            onClick={() => openDeleteModal(config._id)}
                                            danger
                                            title="Delete"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
            {/* Pass selected config to EditConfigModal */}
            {selectedConfig && (
                <EditConfigModal
                    config={selectedConfig}
                    onClose={() => setSelectedConfig(null)} // Reset selected config
                    refreshList={fetchConfigs} // Refresh list after edit
                />
            )}
            <AddConfigurationModal
                visible={isAddConfigModalVisible} // Pass the visibility state
                onCancel={closeAddConfigModal} // Close the modal
                refreshList={fetchConfigs} // Refresh the list after adding a config
            />
        </div>


    );
};

export default AllConfigList;
