import { Button, Dropdown, Menu, Modal, Select, Table } from "antd";
import React, { useState } from "react";
import { FiFilter, FiPlus } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import { Option } from "antd/es/mentions";

const SLATrackingTables = () => {
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
      title: "SLA Status",
      dataIndex: "slastatus",
    },
    {
      title: "Ticket ID",
      dataIndex: "ticketid",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Priority",
      dataIndex: "priority",
    },
    {
      title: "Request Time Left",
      dataIndex: "requesttimeleft",
    },
  ];

  const data = [
    {
      key: "1",
      slastatus: "Welcome Meassage",
      ticketid: "#0010",
      username: "Madhu",
      category: "Technical Support",
      priority: "High",
      requesttimeleft: "1 hr 30 mins",
    },
    {
      key: "2",
      slastatus: "Abandoned Cart",
      ticketid: "#0098",
      username: "Siddu",
      category: "Billing Enquiry",
      priority: "Low",
      requesttimeleft: "2 hr 5 mins",
    },
    {
      key: "3",
      slastatus: "Birthday Greetings",
      ticketid: "#0076",
      username: "Kiran",
      category: "Feature Request",
      priority: "Medium",
      requesttimeleft: "45 mins",
    },
    {
      key: "4",
      slastatus: "Feedback request",
      ticketid: "#0023",
      username: "Manju",
      category: "App Crash",
      priority: "High",
      requesttimeleft: "5 hr 10 mins",
    },
  ];

  const columns2 = [
    {
      title: "Ticket Id",
      dataIndex: "ticketId",
    },
    {
      title: "Priority",
      dataIndex: "priority",
    },
    {
      title: "Due Date",
      dataIndex: "duedate",
    },
    {
      title: "Resolved Date",
      dataIndex: "resolveddate",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const data2 = [
    {
      key: "1",
      ticketId: "# 1002",
      priority: "High",
      duedate: "09/12/2024",
      resolveddate: "12/12/2024",
      status: "Breach",
    },
    {
      key: "2",
      ticketId: "# 1004",
      priority: "Medium",
      duedate: "09/12/2024",
      resolveddate: "14/12/2024",
      status: "Breach",
    },
    {
      key: "3",
      ticketId: "# 1006",
      priority: "Low",
      duedate: "09/12/2024",
      resolveddate: "16/12/2024",
      status: "Breach",
    },
  ];
  return (
    <div className="container">
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
        <div className="d-flex justify-content-between gap-2 mb-3 ticketCategories-table-dropdown-div">
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
    </div>
  );
};

export default SLATrackingTables;
