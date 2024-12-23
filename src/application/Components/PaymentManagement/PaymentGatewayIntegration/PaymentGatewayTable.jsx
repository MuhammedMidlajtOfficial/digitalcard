import React, { useState } from "react";
import { Dropdown, Menu, Table, Avatar, Button } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import image1 from "../../../Assets/Images/admin.png";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const PaymentGatewayTable = () => {
  const filterMenu = (
    <Menu>
      <Menu.Item key="certifications" className="filter-menu-item">
        ABC <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="employment-type" className="filter-menu-item">
        EFG <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="datePosted" className="filter-menu-item">
        ABC <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="jobType" className="filter-menu-item">
        EFG <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );
  const actionMenu = (
    <Menu>
      <Menu.Item
        key="successful"
        style={{ color: "var(--green-button-color)" }}
      >
        Successful
      </Menu.Item>
      <Menu.Item key="pending" style={{ color: "var(--user-icons-3)" }}>
        Pending
      </Menu.Item>
      <Menu.Item key="failed" style={{ color: "var(--maroon-color)" }}>
        Failed
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionid",
    },
    {
      title: "Name",
      dataIndex: "username",
      render: (username) => (
        <div className="d-flex align-items-center">
          <Avatar src={username.image} size={40} className="me-2" />
          {username.name}
        </div>
      ),
    },
    {
      title: "UPI ID",
      dataIndex: "upiid",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <span
            style={{
              color:
                status === "Successful"
                  ? "var(--green-button-color)"
                  : status === "Pending"
                  ? "var(--user-icons-3)"
                  : "var(--maroon-color)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {status} <IoIosArrowDown style={{ marginLeft: 4 }} />
          </span>
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      transactionid: "#R001",
      username: { name: "Annette Black", image: image1 },
      upiid: "annette@ybl",
      amount: "₹ 1200",
      date: "09/12/2024",
      status: "Successful",
    },
    {
      key: "2",
      transactionid: "#R001",
      username: { name: "Annette Black", image: image1 },
      upiid: "annette@ybl",
      amount: "₹ 650",
      date: "09/12/2024",
      status: "Pending",
    },
    {
      key: "3",
      transactionid: "#R001",
      username: { name: "Annette Black", image: image1 },
      upiid: "annette@ybl",
      amount: "₹ 400",
      date: "09/12/2024",
      status: "Failed",
    },
  ];

  return (
    <div className="container">
      <div className=" row">
        <div className="col-lg-12">
          <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="create-survey-search-input"
              />
            </div>
            <div className="search-table-container d-flex gap-4">
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
            </div>
          </div>
          <div className="col-lg-8">
            <h5 className="payment-gateway-notification">
              <IoAlertCircleOutline className="notification-alert" />
              &nbsp;Some data is not displayed here. Please click{" "}
              <b>'View More Details'</b> to access the full
              information.&nbsp;&nbsp;
              <button className="gateway-notification-button">View</button>
            </h5>
          </div>

          <div className="application-table-section">
            <div className="d-flex gap-4 align-items-center justify-content-between">
              <h2>Recent Transaction</h2>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 5 }}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentGatewayTable;
