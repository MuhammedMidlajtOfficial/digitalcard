import { Button, Dropdown, Menu, Modal, Table } from "antd";
import React, { useState, useEffect } from "react";
import { FiFilter, FiPlus, FiSearch } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import axios from "axios";
import RollCreationAddRole from "./RollCreationAddRole";

const RollCreationTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tableData, setTableData] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const fetchRolesData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/v1/employee/roles");
      const formattedData = response.data.map((role) => ({
        key: role.id,
        updatedDate: role.updatedDate,
        role: role.roleName,
        status: role.isActive ? "Active" : "Inactive",
      }));
      setTableData(formattedData);
    } catch (error) {
      console.error("Failed to fetch roles data:", error);
    }
  };

  const deleteRole = async (roleId) => {
    try {
      const response = await axios.delete(`http://localhost:9000/api/v1/employee/roles/${roleId}`);

      
      if (response.status === 200 || response.status === 204) {
        // Remove the deleted role from tableData without fetching all roles again
        setTableData((prevData) => prevData.filter((role) => role._key !== roleId));
      } else {
        console.error(`Failed to delete role: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to delete role:", error.response || error);
      alert("Error deleting role. Please try again.");
    }
  };
  

  const editRole = (roleId) => {
    console.log(`Edit role with ID: ${roleId}`);
    // Logic for editing role
  };

  useEffect(() => {
    fetchRolesData();
  }, []);

  const columns = [
    {
      title: "Updated Date",
      dataIndex: "updatedDate",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color;
        switch (status) {
          case "Active":
            color = "#12B76A";
            break;
          case "Inactive":
            color = "#F42929";
            break;
          default:
            color = "#8C8C8C";
        }

        return <span style={{ color }}>{status}</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Dropdown overlay={<ActionMenu record={record} />} trigger={["click"]}>
          <span style={{ cursor: "pointer" }}>...</span>
        </Dropdown>
      ),
    },
  ];

  const ActionMenu = ({ record }) => (
    <Menu>
      <Menu.Item key="edit" onClick={() => editRole(record.key)}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => deleteRole(record._key)}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container">
      <div className="d-flex gap-3 align-items-center justify-content-end">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="create-survey-search-input"
          />
        </div>
        <button
          onClick={showModal}
          className="create-btn d-flex gap-2 align-items-center"
        >
          <FiPlus /> Add Role
        </button>
      </div>
      <div className="application-table-section mt-3 mb-3">
        <div className="d-flex justify-content-between gap-2 mb-3">
          <h2>RBAC </h2>
          <div className="search-table-container d-flex gap-2">
            <Dropdown overlay={<SortMenu />} trigger={["click"]}>
              <button className="table-action-btn d-flex gap-2 align-items-center">
                <span>Sort By</span>
                <TbArrowsDownUp
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "GrayText",
                  }}
                />
              </button>
            </Dropdown>
            <Dropdown overlay={<FilterMenu />} trigger={["click"]}>
              <button className="table-action-btn d-flex gap-2 align-items-center">
                <span>Filter</span>
                <FiFilter
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "GrayText",
                  }}
                />
              </button>
            </Dropdown>
          </div>
        </div>
        <div className="col-lg-12">
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>
      <Modal
        title="Add"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="cancel"
            onClick={handleCancel}
            className="assignTicket-cancel-button"
          >
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            className="openticket-submitRely-button"
          >
            Save
          </Button>,
        ]}
      >
        <RollCreationAddRole />
      </Modal>
    </div>
  );
};

const SortMenu = () => (
  <Menu>
    <Menu.Item key="datePosted">Sort by UpdatedDate</Menu.Item>
  </Menu>
);

const FilterMenu = () => (
  <Menu>
    <Menu.Item key="active">Active</Menu.Item>
    <Menu.Item key="inactive">Inactive</Menu.Item>
  </Menu>
);

export default RollCreationTable;
