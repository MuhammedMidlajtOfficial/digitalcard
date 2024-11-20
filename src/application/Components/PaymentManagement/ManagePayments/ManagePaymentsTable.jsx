import React from "react";
import { Dropdown, Menu, Table, Avatar, Button } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import image1 from "../../../Assets/Images/admin.png";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const ManagePaymentsTable = () => {
  const navigate = useNavigate();

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
  const actionMenu = (
    <Menu>
      <Menu.Item
        key="view"
        onClick={() =>
          navigate("/admin/paymentmanagement/viewpayments/viewpayerinfo")
        }
      >
        <LuEye style={{ color: "var(--gradient-end-color)" }} />
        View
      </Menu.Item>
      <Menu.Item key="reject">
        <RiDeleteBinLine style={{ color: "var(--danger-color)" }} />
        Delete
      </Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: "Payer Name",
      dataIndex: "userName",
      render: (userName) => (
        <div className="d-flex align-items-center">
          <Avatar src={userName.image} size={40} className="me-2" />
          {userName.name}
        </div>
      ),
    },
    {
      title: "Payment ID",
      dataIndex: "paymentid",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Pay Method",
      dataIndex: "paymethod",
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionid",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="table-status-tag"
          style={{
            color:
              status === "Completed"
                ? "green"
                : status === "Pending"
                ? "orange"
                : "red",
          }}
        >
          {status}
        </span>
      ),
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
      userName: { name: "Annette Black", image: image1 },
      paymentid: "123456",
      date: "09/12/24",
      paymethod: "Credit Card",
      status: "Completed",
      transactionid: "TXN7891011",
    },
    {
      key: "2",
      userName: { name: "Guy Hawkins", image: image1 },
      paymentid: "123456",
      date: "09/12/24",
      paymethod: "Paypal",
      status: "Completed",
      transactionid: "TXN7891011",
    },
    {
      key: "3",
      userName: { name: "Cameron", image: image1 },
      paymentid: "432342",
      date: "09/12/24",
      paymethod: "Debit card",
      status: "Pending",
      transactionid: "TXN7891012",
    },
    {
      key: "4",
      userName: { name: "Kristin Watson", image: image1 },
      paymentid: "456343",
      date: "09/12/24",
      paymethod: "Paypal",
      status: "Failed",
      transactionid: "TXN7891013",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
              <div className="d-flex gap-4 align-items-center">
                <h2>View payment History</h2>
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
