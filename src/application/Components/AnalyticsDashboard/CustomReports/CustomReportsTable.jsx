import React from "react";
import { Dropdown, Menu, Table, Avatar } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import image1 from "../../../Assets/Images/admin.png";
import { FiFilter } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { GoShare } from "react-icons/go";

export const CustomReportsTable = () => {

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
      dataIndex: "userName",
      render: (userName) => (
        <div className="d-flex align-items-center">
          <Avatar src={userName.image} size={40} className="me-2" />
          {userName.name}
        </div>
      ),
    },
    {
      title: "Card Type",
      dataIndex: "type",
    },
    {
      title: "No. of Cards",
      dataIndex: "cards",
    },
    {
      title: "Joined On",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="table-status-tag d-flex align-items-center justify-content-center"
          style={{
            color:
              status === "Paid"
                ? "var(--green-button-color)"
                : "var(--danger-color)",
            backgroundColor:
              status === "Paid"
                ? "var(--green-bg-color)"
                : "var(--delete-bg-color)",
            padding: "2px 12px",
            borderRadius: "5px",
            width: "fit-content",
          }}
        >
          {status === "Paid" && <GiCheckMark style={{ marginRight: "5px" }} />}
          {status}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      userName: { name: "Annette Black", image: image1 },
      type: "Vertical",
      cards: "03",
      date: "09/12/24",
      status: "Paid",
    },
    {
      key: "2",
      userName: { name: "Guy Hawkins", image: image1 },
      type: "Horizontal",
      cards: "02",
      date: "09/12/24",
      status: "Pending",
    },
    {
      key: "3",
      userName: { name: "Kristin Watson", image: image1 },
      type: "Vertical",
      cards: "04",
      date: "09/12/24",
      status: "Paid",
    },
    {
      key: "4",
      userName: { name: "Kristin Watson", image: image1 },
      type: "Vertical",
      cards: "04",
      date: "09/12/24",
      status: "Pending",
    },
  ];

  return (
    <div className="row mt-4">
      <div className="col-lg-12">
        <div className="application-table-section">
          <div className="d-lg-flex d-xl-flex justify-content-between align-items-center align-content-center mb-4">
            <div className="d-flex gap-4 align-items-center">
              <h2>Custom Reports</h2>
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
			  <Dropdown>
                <button className="table-action-btn d-flex gap-2 align-items-center">
                  <span>Export</span>
                  <GoShare
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
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5}}
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>
    </div>
  );
};
