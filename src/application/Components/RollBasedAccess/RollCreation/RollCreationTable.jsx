import { Avatar, Button, Dropdown, Menu, Modal, Table } from "antd";
import React, { useState } from "react";
import { FiFilter, FiPlus, FiSearch } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import John_img from "../../../Assets/Images/John_img.svg";
import RollCreationAddRole from "./RollCreationAddRole";

const RollCreationTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const filterMenu = (
    <Menu>
      <Menu.Item key="certifications">ABC</Menu.Item>
      <Menu.Item key="employment-type">EFG</Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="datePosted">ABC</Menu.Item>
      <Menu.Item key="jobType">EFG</Menu.Item>
    </Menu>
  );

  const actionMenu = (
    <Menu>
      <Menu.Item
        key="1"
        // onClick={() => navigate("/admin/incentive/edit")}
      >
        Edit
      </Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar size={44} src={John_img} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Joined Date",
      dataIndex: "joineddate",
    },
    {
      title: "Email",
      dataIndex: "email",
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
      render: () => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <span style={{ cursor: "pointer" }}>...</span>
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Annette Black",
      joineddate: "09/12/2024",
      email: "black@company.com",
      role: "Admin",
      status: "Active",
    },
    {
      key: "2",
      name: "Guy Hawkins",
      joineddate: "09/12/2024",
      email: "hawkins@gmail.com",
      role: "Team Lead",
      status: "Active",
    },
    {
      key: "3",
      name: "Kristin Watson",
      joineddate: "09/12/2024",
      email: "kristin@gmail.com",
      role: "Team Member",
      status: "Active",
    },
    {
      key: "4",
      name: "Cameron",
      joineddate: "09/12/2024",
      email: "cameron@gmail.com",
      role: "Team Member",
      status: "Inactive",
    },
    {
      key: "5",
      name: "Devone Lane",
      joineddate: "09/12/2024",
      email: "devonlane@gmail.com",
      role: "Team Member",
      status: "Inactive",
    },
  ];
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
          {" "}
          <FiPlus /> Add Role
        </button>
      </div>
      <div className="application-table-section mt-3 mb-3">
        <div className="d-flex justify-content-between gap-2 mb-3">
          <h2>RBAC </h2>
          <div className="search-table-container d-flex gap-2">
            <Dropdown overlay={sortMenu} trigger={["click"]}>
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
            <Dropdown overlay={filterMenu} trigger={["click"]}>
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
          <div className="">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
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

export default RollCreationTable;
