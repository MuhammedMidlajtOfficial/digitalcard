import { Dropdown, Menu, Table } from "antd";
import React from "react";
import { FiFilter } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";

const TicketPrioritisationTable = () => {
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
  const columns = [
    {
      title: "Ticket Id",
      dataIndex: "ticketId",
    },
    {
      title: "Summary",
      dataIndex: "summary",
    },
    {
      title: "Due Time",
      dataIndex: "duetime",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const data = [
    {
      key: "1",
      ticketId: "# 1002",
      summary: "Payment Failure",
      duetime: "1 hr",
      status: "Open",
    },
    {
      key: "2",
      ticketId: "# 1004",
      summary: "App Down",
      duetime: "1 hr",
      status: "Open",
    },
    {
      key: "3",
      ticketId: "# 1006",
      summary: "Security Breach",
      duetime: "2 hr",
      status: "Open",
    },
  ];
  const columns1 = [
    {
      title: "Ticket Id",
      dataIndex: "ticketId",
    },
    {
      title: "Summary",
      dataIndex: "summary",
    },
    {
      title: "Due Time",
      dataIndex: "duetime",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const data1 = [
    {
      key: "1",
      ticketId: "# 1041",
      summary: "App Creash",
      duetime: "6 hr",
      status: "Open",
    },
    {
      key: "2",
      ticketId: "# 0098",
      summary: "Minor  UI bug",
      duetime: "6 hr",
      status: "Open",
    },
  ];
  const columns2 = [
    {
      title: "Ticket Id",
      dataIndex: "ticketId",
    },
    {
      title: "Summary",
      dataIndex: "summary",
    },
    {
      title: "Due Time",
      dataIndex: "duetime",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const data2 = [
    {
      key: "1",
      ticketId: "# 1061",
      summary: "General Enquiry",
      duetime: "24 hr",
      status: "Open",
    },
    {
      key: "2",
      ticketId: "# 1053",
      summary: "Feedback Submission",
      duetime: "24 hr",
      status: "Open",
    },
  ];
  return (
    <div className="container">
      <div className="application-table-section mb-3">
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2 className="ticketCategories-details-h5">High Priority</h2>
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
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2 className="ticketCategories-details-h5">Medium Priority</h2>
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
              columns={columns1}
              dataSource={data1}
              pagination={false}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
      </div>
      <div className="application-table-section mb-3">
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2 className="ticketCategories-details-h5">Low Priority</h2>
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

export default TicketPrioritisationTable;
