import React from "react";
import { Dropdown, Menu, Table, Avatar, Input, Button } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import profile3 from "../../../Assets/Images/profile3.png";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const TableResponseAnalytics = () => {
  const filterMenu = (
    <Menu>
      <Menu.Item key="surveyType" className="filter-menu-item">
        Survey Type <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="platform" className="filter-menu-item">
        Platform <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="date" className="filter-menu-item">
        Response Date <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="platform" className="filter-menu-item">
        Platform <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const actionMenu = (
    <Menu>
      <Menu.Item key="edit">
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
      dataIndex: "userName",
      render: (userName) => (
        <div className="d-flex align-items-center">
          <Avatar src={userName.image} size={40} className="me-2" />
          {userName.name}
        </div>
      ),
    },
    {
      title: "Survey Title",
      dataIndex: "surveyTitle",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Response Date",
      dataIndex: "responseDate",
    },
    {
      title: "Platform Used",
      dataIndex: "platform",
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
      userName: { name: "Annette Black", image: profile3 },
      surveyTitle: "Anniversary",
      email: "black@company.com",
      responseDate: "09/12/2024",
      platform: "Mobile",
    },
    {
      key: "2",
      userName: { name: "Guy Hawkins", image: profile3 },
      surveyTitle: "Anniversary",
      email: "hawkins@gmail.com",
      responseDate: "09/12/2024",
      platform: "Website",
    },
    {
      key: "3",
      userName: { name: "Kristin Watson", image: profile3 },
      surveyTitle: "Anniversary",
      email: "jane@business.com",
      responseDate: "09/12/2024",
      platform: "Website",
    },
    {
      key: "4",
      userName: { name: "Cameron", image: profile3 },
      surveyTitle: "Anniversary",
      email: "jane.doe@example.com",
      responseDate: "09/12/2024",
      platform: "Mobile",
    },
    {
      key: "5",
      userName: { name: "Devon Lane", image: profile3 },
      surveyTitle: "Anniversary",
      email: "contact@company.com",
      responseDate: "09/12/2024",
      platform: "Website",
    },
  ];

  return (
    <div className="container mt-4">
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
            <h2>Response Log</h2>
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

export default TableResponseAnalytics;
