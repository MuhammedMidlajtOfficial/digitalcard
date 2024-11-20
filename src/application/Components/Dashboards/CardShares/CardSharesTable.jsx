import React from "react";
import { Dropdown, Menu, Table } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";

export const CardSharesTable = () => {
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
      title: "Card ID",
      dataIndex: "cardid",
    },
    {
      title: "Shared With",
      dataIndex: "email",
    },
    {
      title: "Share Date",
      dataIndex: "sharedate",
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationdate",
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
                : status === "Expired"
                ? "red"
                : "orange",
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
      cardid: 457375,
      email: "nathan.roberts@example.com",
      sharedate: "09/12/24",
      expirationdate: "09/12/24",
      status: "Active",
    },
    {
      key: "2",
      cardid: 554454,
      email: "dolores.chambers@example.com",
      sharedate: "09/12/24",
      expirationdate: "09/12/24",
      status: "Expired",
    },
    {
      key: "3",
      cardid: 654454,
      email: "tanya.hill@example.com",
      sharedate: "09/12/24",
      expirationdate: "09/12/24",
      status: "Pending",
    },
    {
      key: "4",
      cardid: 554454,
      email: "dolores.chambers@example.com",
      sharedate: "09/12/24",
      expirationdate: "09/12/24",
      status: "Expired",
    },
  ];

  return (
    <div className="container">
      <div className=" row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <div className="d-flex justify-content-between align-items-center align-content-center mb-4 flex-lg-row flex-xl-row flex-column">
              <div className="d-flex gap-4 align-items-center">
                <h2>Card Shares</h2>
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
