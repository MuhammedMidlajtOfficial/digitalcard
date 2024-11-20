import React from "react";
import { Dropdown, Menu, Table } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";

export const PaymentVerificationTable = () => {
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
      title: "Transaction ID",
      dataIndex: "id",
    },
    {
      title: "User Name",
      dataIndex: "name",
    },
    {
      title: "User Id",
      dataIndex: "userid",
    },
    {
      title: "Payment Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentmethod",
    },
    {
      title: "Invoice Number",
      dataIndex: "invoice",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="table-status-tag"
          style={{
            color: status === "Completed" ? "green" : "red",
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
      id: "TXN123456",
      name: "Jane Cooper",
      userid: "8013",
      date: "09/12/24",
      amount: "1500",
      paymentmethod: "Credit Card",
      invoice: "INV12345",
      status: "Completed",
    },
    {
      key: "2",
      id: "TXN123456",
      name: "Jane Cooper",
      userid: "6444",
      date: "09/12/24",
      amount: "1500",
      paymentmethod: "PayPal",
      invoice: "INV12377",
      status: "Close",
    },
    {
      key: "3",
      id: "TXN123456",
      name: "Jane Cooper",
      userid: "8013",
      date: "09/12/24",
      amount: "1500",
      paymentmethod: "Bank Transfer",
      invoice: "INV12345",
      status: "Completed",
    },
    {
      key: "4",
      id: "TXN123456",
      name: "Jane Cooper",
      userid: "6444",
      date: "09/12/24",
      amount: "1500",
      paymentmethod: "Credit Card",
      invoice: "INV12377",
      status: "Close",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
              <div className="d-flex gap-4 align-items-center">
                <h2>Payment Verification</h2>
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
