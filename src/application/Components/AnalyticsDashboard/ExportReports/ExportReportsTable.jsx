import React, { useState } from "react";
import {
  Dropdown,
  Menu,
  Table,
  Button,
  Avatar,
  Select,
  Typography,
} from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import image1 from "../../../Assets/Images/admin.svg";
import { FiFilter } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

const { Title } = Typography;

export const ExportReportsTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

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
      username: { name: "Annette Black", image: image1 },
      type: "Vertical",
      cards: "03",
      date: "09/12/24",
      status: "Paid",
    },
    {
      key: "2",
      username: { name: "Guy Hawkins", image: image1 },
      type: "Horizontal",
      cards: "02",
      date: "09/12/24",
      status: "Pending",
    },
    {
      key: "3",
      username: { name: "Kristin Watson", image: image1 },
      type: "Vertical",
      cards: "04",
      date: "09/12/24",
      status: "Paid",
    },
    {
      key: "4",
      username: { name: "Kristin Watson", image: image1 },
      type: "Vertical",
      cards: "04",
      date: "09/12/24",
      status: "Paid",
    },
    {
      key: "5",
      username: { name: "Kristin Watson", image: image1 },
      type: "Vertical",
      cards: "04",
      date: "09/12/24",
      status: "Paid",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRows);
    },
  };

  const handleDownload = () => {
    const dataToDownload = selectedRows.map((row) => ({
      Name: row.username.name,
      CardType: row.type,
      Cards: row.cards,
      Date: row.date,
      Status: row.status,
    }));

    const blob = new Blob([JSON.stringify(dataToDownload, null, 2)], {
      type: "application/json",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "selected-report.json";
    link.click();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-md-5 mb-2 col-lg-6">
              <Title className="custom-table-title" level={4}>
                Select Report
              </Title>
              <Select
                mode="multiple"
                placeholder="Please select"
                style={{ width: "100%" }}
                options={[
                  { label: "Individual", value: "individual" },
                  { label: "Enterprise", value: "enterprise" },
                ]}
              />
            </div>
            <div className="col-md-5 mb-2 col-lg-6">
              <Title className="custom-table-title" level={4}>
                Select Metrics
              </Title>
              <Select
                mode="multiple"
                placeholder="Please select"
                style={{ width: "100%" }}
                options={[
                  { label: "Vertical", value: "vertical" },
                  { label: "Horizontal", value: "horizontal" },
                ]}
              />
            </div>
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
              {selectedRows.length > 0 && (
                <button className="create-btn" onClick={handleDownload}>
                  <HiDownload />
                  Download Data
                </button>
              )}
            </div>
          </div>
          <div className="application-table-section">
            <Table
              columns={columns}
              dataSource={data}
              rowSelection={rowSelection}
              pagination={{ pageSize: 5 }}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
