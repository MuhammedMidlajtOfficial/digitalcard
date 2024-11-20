import { Button, Dropdown, Menu, Modal, Select, Table } from "antd";
import React, { useState } from "react";
import { FiFilter, FiPlus } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import AddTicket from "./AddTicket";
import { Option } from "antd/es/mentions";

const TicketCategories = () => {
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
      title: "Category Name",
      dataIndex: "categoryname",
    },
    {
      title: "Active Tickets",
      dataIndex: "activetickets",
    },
    {
      title: "Solved Tickets",
      dataIndex: "solvedtickets",
    },
    {
      title: " SLA Status",
      dataIndex: "slastatus",
    },
    {
      title: "Priority",
      dataIndex: "priority",
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
      categoryname: "Technical Issue",
      activetickets: "20 tickets",
      solvedtickets: "10 tickets",
      slastatus: "90% on-time",
      priority: "High",
    },
    {
      key: "2",
      categoryname: "Billing Payment",
      activetickets: "10 tickets",
      solvedtickets: "15 tickets",
      slastatus: "90% on-time",
      priority: "Low",
    },
    {
      key: "3",
      categoryname: "Account Management",
      activetickets: "15 tickets",
      solvedtickets: "16 tickets",
      slastatus: "90% on-time",
      priority: "Medium",
    },
    {
      key: "4",
      categoryname: "General Enquiry",
      activetickets: "30 tickets",
      solvedtickets: "25 tickets",
      slastatus: "90% on-time",
      priority: "High",
    },
  ];

  const columns2 = [
    {
      title: "Ticket Id",
      dataIndex: "ticketId",
    },
    {
      title: "Issue Summary",
      dataIndex: "issueSummary",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Priority",
      dataIndex: "priority",
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

  const data2 = [
    {
      key: "1",
      ticketId: "# 1002",
      issueSummary: "App Creashes on Launch",
      status: "Open",
      priority: "High",
    },
    {
      key: "2",
      ticketId: "# 1004",
      issueSummary: "Payment Error",
      status: "In Progress",
      priority: "Medium",
    },
    {
      key: "3",
      ticketId: "# 1006",
      issueSummary: "Request for Refund",
      status: "Open",
      priority: "Low",
    },
  ];
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="RBACPermission-list-heading">Ticket Categories</h4>
        <button
          onClick={showModal}
          className="create-btn d-flex gap-2 align-items-center"
        >
          {" "}
          <FiPlus /> Add Categories
        </button>
      </div>
      <div className="application-table-section mb-3">
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2>Category List </h2>
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

      <div className="application-table-section mb-3">
        <div className="d-flex justify-content-between ticketCategories-table-dropdown-div gap-2 mb-3">
          <div className="d-flex gap-3 align-items-center">
            <h2 className="ticketCategories-details-h5">Category Details </h2>
            <Select
              className="form-control addTicket-form_control"
              placeholder="Select issue"
            >
              <Option value="high">Technical issue</Option>
              <Option value="medium">Billing & Payment</Option>
              <Option value="low">General enquiry</Option>
            </Select>
          </div>
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
              columns={columns2}
              dataSource={data2}
              pagination={false}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
      </div>
      <AddTicket open={isModalVisible} onClose={handleCancel} />
    </div>
  );
};

export default TicketCategories;
