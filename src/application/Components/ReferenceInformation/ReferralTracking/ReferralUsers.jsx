import React from "react";
import { Table, Avatar, Dropdown, Menu } from "antd";
import image1 from "../../../Assets/Images/user2.png";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
export const ReferralUsers = () => {
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
        key="1"
        onClick={() => navigate("/admin/usermanagement/editusers")}
      >
        Edit
      </Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Name",
      dataIndex: "userName",
      render: (userName) => (
        <div className="d-flex align-items-center">
          <Avatar src={userName.image} size={40} className="me-2" />
          {userName.name}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Referred users",
      dataIndex: "referredUsers",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          style={{
            color:
              status === "Registered"
                ? "var(--green-color)"
                : "var(--danger-color)",
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Reward",
      dataIndex: "reward",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <span
          onClick={() =>
            navigate("/admin/referenceinformation/viewreferraluser")
          }
        >
          <a href="#"> View</a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "09/12/2024",
      userName: { name: "Siddhu M", image: image1 },
      email: "siddum@gmail.com",
      referredUsers: "Sankaran G",
      status: "Registered",
      reward: "₹ 250",
    },
    {
      key: "2",
      date: "09/12/2024",
      userName: { name: "kiran bk", image: image1 },
      email: "kiranb@gmail.com",
      referredUsers: "Mahesh G",
      status: "Registered",
      reward: "₹ 250",
    },
    {
      key: "3",
      date: "09/12/2024",
      userName: { name: "Charan", image: image1 },
      email: "charan@gmail.com",
      referredUsers: "Manjunath K",
      status: "Registered",
      reward: "₹ 250",
    },
    {
      key: "4",
      date: "09/12/2024",
      userName: { name: "madhu", image: image1 },
      email: "Madhu@gmail.com",
      referredUsers: "Saikumar M",
      status: "Pending",
      reward: "₹ 250",
    },
    {
      key: "5",
      date: "09/12/2024",
      userName: { name: "Navaneeth", image: image1 },
      email: "navneethan@gmail.com",
      referredUsers: "Manish B",
      status: "Pending",
      reward: "₹ 250",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex mb-2 mt-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
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

        <div className="col-lg-12">
          <div className="application-table-section">
            <h6>Referral Users</h6>
            <Table
              columns={columns}
              dataSource={data}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
