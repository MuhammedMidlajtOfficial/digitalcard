import React from "react";
import { Dropdown, Menu, Table, Input } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const OrderAnalysticsTable = () => {
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
      dataIndex: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Order Id",
      dataIndex: "orderid",
    },
    {
      title: "Date Ordered",
      dataIndex: "date",
    },
    {
      title: "Card Design",
      dataIndex: "carddesign",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total Price",
      dataIndex: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="table-status-tag"
          style={{
            color: status === "In-Process" ? "green" : "red",
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
      name: "Jane Cooper",
      phone: "1234567890",
      orderid: "8013",
      date: "09/12/24",
      carddesign: "Classic",
      quantity: "1000",
      price: "1500",
      status: "In-Process",
    },
    {
      key: "2",
      name: "Jane Cooper",
      phone: "1234567890",
      orderid: "8013",
      date: "09/12/24",
      carddesign: "Modern",
      quantity: "1000",
      price: "1500",
      status: "Close",
    },
    {
      key: "3",
      name: "Jane Cooper",
      phone: "1234567890",
      orderid: "8013",
      date: "09/12/24",
      carddesign: "Minimalist",
      quantity: "1000",
      price: "1500",
      status: "In-Process",
    },
    {
      key: "4",
      name: "Jane Cooper",
      phone: "1234567890",
      orderid: "8013",
      date: "09/12/24",
      carddesign: "Professional",
      quantity: "1000",
      price: "1500",
      status: "In-Process",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="application-table-section">
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
            <div className="d-flex gap-4 align-items-center">
              <h2>Orders</h2>
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
export default OrderAnalysticsTable;
