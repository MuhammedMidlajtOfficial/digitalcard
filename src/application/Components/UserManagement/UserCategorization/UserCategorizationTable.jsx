import React from "react";
import { Table, Avatar, Dropdown, Menu, Input } from "antd";
import image1 from "../../../Assets/Images/admin.png";
import { FiFilter, FiSearch } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
const UserCategorizationTable = () => {
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
      title: "Card Type",
      dataIndex: "cardtype",
    },
    {
      title: "No of Cards",
      dataIndex: "cards",
    },
    {
      title: "Joined On",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let bgColor, textColor;

        if (status === "Premium plan") {
          bgColor = "#bb8ddc";
          textColor = "#ffffff";
        } else if (status === "Gold plan") {
          bgColor = "#ffad00";
          textColor = "#ffffff";
        } else if (status === "Free plan") {
          bgColor = "#2aa3e4";
          textColor = "#ffffff";
        }

        return (
          <span
            style={{
              backgroundColor: bgColor,
              color: textColor,
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {status}
          </span>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      username: { name: "Annette Black", image: image1 },
      cardtype: "Vertical",
      cards: "02",
      date: "12/12/2024",
      status: "Premium plan",
    },
    {
      key: "2",
      username: { name: "Annette Black", image: image1 },
      cardtype: "Horizontal",
      cards: "02",
      date: "12/12/2024",
      status: "Gold plan",
    },
    {
      key: "3",
      username: { name: "Annette Black", image: image1 },
      cardtype: "Vertical",
      cards: "02",
      date: "12/12/2024",
      status: "Free plan",
    },
  ];

  return (
    <div className="container">
      <div className=" row">
        <div className="col-lg-12">
          <div className="row">
            <div className="application-users-section mb-3">
              <h2>User Categorization</h2>
            </div>
            <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
              <div className="search-container">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="create-survey-search-input"
                />
              </div>
              <div className="search-table-container d-flex gap-2">
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
          </div>
          <div className="application-table-section">
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
export default UserCategorizationTable;
