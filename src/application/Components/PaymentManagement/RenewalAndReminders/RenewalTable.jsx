import React, { useState } from "react";
import { Dropdown, Menu, Table } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import RemainderSettings from "./RemainderSettings";
const RenewalTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
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
      title: "Subscription ID",
      dataIndex: "subscriptionid",
    },
    {
      title: "User Name",
      dataIndex: "username",
    },
    {
      title: "Plan Name",
      dataIndex: "planname",
    },
    {
      title: "Renewal Date",
      dataIndex: "date",
    },
    {
      title: "Reminder Sent",
      dataIndex: "remainder",
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
                ? "var(--green-color)"
                : status === "Pending"
                ? "var(--user-icons-3)"
                : "var(--background-black-color)",
          }}
        >
          {status}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      subscriptionid: "Sub123456",
      username: "Siddu M",
      planname: "Premium Plan",
      date: "09/12/2024",
      remainder: "No",
      status: "Pending",
    },
    {
      key: "2",
      subscriptionid: "Sub123456",
      username: "Siddu M",
      planname: "Gold Plan",
      date: "09/12/2024",
      remainder: "Yes",
      status: "Active",
    },
    {
      key: "3",
      subscriptionid: "Sub123456",
      username: "Siddu M",
      planname: "Free Plan",
      date: "09/12/2024",
      remainder: "No",
      status: "Pending",
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
            <div className="d-flex gap-4 align-items-center justify-content-between">
              <h2>Upcoming Renewal List</h2>
              <button className="create-invoice" onClick={showModal}>
                Reminder Setting
              </button>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 5 }}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
        <RemainderSettings open={isModalOpen} handleCancel={handleCancel} />
      </div>
    </div>
  );
};
export default RenewalTable;
