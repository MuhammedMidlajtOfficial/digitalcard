import React from "react";
import { Dropdown, Menu, Table } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";

export const ViewOrdersTable = () => {
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
      title: "Phone No",
      dataIndex: "phone",
    },
    {
      title: "Order ID",
      dataIndex: "orderid",
    },
    {
      title: "Date Ordered",
      dataIndex: "date",
    },
    {
      title: "Card Design",
      dataIndex: "design",
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
      phone: "9876567890",
      orderid: "8783",
      date: "09/12/24",
      design: "Classic",
      quantity: "400",
      price: "1500",
      status: "In-Process",
    },
    {
      key: "2",
      name: "Annette Black",
      phone: "9876567890",
      orderid: "8783",
      date: "09/12/24",
      design: "Classic",
      quantity: "400",
      price: "1500",
      status: "Close",
    },
    {
      key: "3",
      name: "Guy Hawkins",
      phone: "9876567890",
      orderid: "8783",
      date: "09/12/24",
      design: "Classic",
      quantity: "400",
      price: "1500",
      status: "Close",
    },
    {
      key: "4",
      name: "Kristin Watson",
      phone: "9876567890",
      orderid: "8783",
      date: "09/12/24",
      design: "Classic",
      quantity: "400",
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
              <div className="d-flex gap-4 align-items-center">
                <h2>View Orders</h2>
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
