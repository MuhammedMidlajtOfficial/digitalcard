import React from "react";
import { Dropdown, Menu, Table, Avatar, Button } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import image1 from "../../../Assets/Images/admin.svg";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const CardShareTable = () => {
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
      <Menu.Item key="download">
        <FaRegEdit />
        Edit
      </Menu.Item>
      <Menu.Item key="delete">
        <RiDeleteBinLine />
        Delete
      </Menu.Item>
    </Menu>
  );
  const columns = [
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
      title: "Joined Date",
      dataIndex: "date",
    },
    {
      title: "Email ID",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="table-status-tag"
          style={{
            color:
              status === "Active"
                ? "green"
                : status === "InActive"
                ? "red"
                : "black",
          }}
        >
          {status}
        </span>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      username: { name: "Annette Black", image: image1 },
      date: "09/12/24",
      email: "black@company.com",
      role: "Admin",
      status: "Active",
    },
    {
      key: "2",
      username: { name: "Guy Hawkins", image: image1 },
      date: "09/12/24",
      email: "black@company.com",
      role: "Admin",
      status: "InActive",
    },
    {
      key: "3",
      username: { name: "Kristin Watson", image: image1 },
      date: "09/12/24",
      email: "black@company.com",
      role: "Admin",
      status: "Active",
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
          <div className="application-table-section">
            <div className="d-flex gap-4 align-items-center">
              <h2>Users</h2>
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

export default CardShareTable;
