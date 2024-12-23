import React from "react";
import { Dropdown, Menu, Table, Avatar, Button, Input } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import image1 from "../../../Assets/Images/admin.png";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const RefundTable = () => {
  const navigate = useNavigate();

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
        key="view"
        onClick={() =>
          navigate("/admin/paymentmanagement/viewpayments/viewpayerinfo")
        }
      >
        <LuEye style={{ color: "var(--gradient-end-color)" }} />
        View
      </Menu.Item>
      <Menu.Item key="reject">
        <RiDeleteBinLine style={{ color: "var(--danger-color)" }} />
        Delete
      </Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: "Request ID",
      dataIndex: "requestid",
    },
    {
      title: "Payer Name",
      dataIndex: "username",
      render: (username) => (
        <div className="d-flex align-items-center">
          <Avatar src={username.image} size={40} className="me-2" />
          {username.name}
        </div>
      ),
    },
    {
      title: "Email ID",
      dataIndex: "emailid",
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
        <span
          className="table-status-tag"
          style={{
            color:
              status === "Approved"
                ? "green"
                : status === "Pending"
                ? "orange"
                : "red",
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Button
          type="link"
          onClick={() =>
            navigate("/admin/paymentmanagement/customerrefundinfo")
          }
        >
          View
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      requestid: "#R001",
      username: { name: "Annette Black", image: image1 },
      emailid: "abc@gmail.com",
      amount: "₹ 1200",
      date: "09/12/24",
      status: "Approved",
    },
    {
      key: "2",
      requestid: "#R002",
      username: { name: "Annette Black", image: image1 },
      emailid: "abc@gmail.com",
      amount: "₹ 1200",
      date: "09/12/24",
      status: "Pending",
    },
    {
      key: "3",
      requestid: "#R003",
      username: { name: "Annette Black", image: image1 },
      emailid: "abc@gmail.com",
      amount: "₹ 1200",
      date: "09/12/24",
      status: "Rejected",
    },
  ];

  return (
    <div className="container">
      <div className="row">
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
          <div className="application-table-section">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex gap-4 align-items-center">
                <h2>Refund Request List</h2>
              </div>
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
