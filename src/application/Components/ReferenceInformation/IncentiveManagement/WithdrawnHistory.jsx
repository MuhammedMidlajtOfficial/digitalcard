import React from "react";
import { Table, Avatar, Menu } from "antd";
import image1 from "../../../Assets/Images/user2.png";
import { useNavigate } from "react-router-dom";

export const WithdrawHistory = () => {
  const navigate = useNavigate();

  const actionMenu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => navigate("/admin/usermanagement/editusers")}
      >
        Edit
      </Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
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
      title: "UPI ID",
      dataIndex: "upiId",
    },
    {
      title: "Completed Referrer",
      dataIndex: "completedReferrer",
    },
    {
      title: "Transaction",
      dataIndex: "transaction",
      render: (status) => (
        <span
          style={{
            color:
              status === "Completed"
                ? "var(--green-color)"
                : "var(--danger-color)",
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Withdraw",
      dataIndex: "withdraw",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <span
          onClick={() =>
            navigate("/admin/incentivemanagement/incentivereferralview")
          }
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          View
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "09/12/2024",
      username: { name: "Siddhu M", image: image1 },
      upiId: "siddhu12@paytm",
      completedReferrer: "05 referral",
      transaction: "Completed",
      withdraw: "₹ 5000",
    },
    {
      key: "2",
      date: "09/12/2024",
      username: { name: "Kiran BK", image: image1 },
      upiId: "kiranbk@ybl",
      completedReferrer: "05 referral",
      transaction: "Failed",
      withdraw: "₹ 5000",
    },
    {
      key: "3",
      date: "09/12/2024",
      username: { name: "Rajesh P", image: image1 },
      upiId: "rajesh12@upi",
      completedReferrer: "03 referral",
      transaction: "Completed",
      withdraw: "₹ 3000",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <h6>Withdrawn History</h6>
            <Table
              columns={columns}
              dataSource={data}
              className="applied-applicants-table overflow-y-auto"
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
