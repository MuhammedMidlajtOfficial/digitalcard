import React from "react";
import { Table, Menu } from "antd";
import { useNavigate } from "react-router-dom";

export const IncentiveViewReferralUser = () => {
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
      dataIndex: "userName",
      render: (userName) => {
        const initials = userName.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase();
        return (
          <div className="d-flex align-items-center">
            <div className="view-table-referral-initials-square">
              {initials}{" "}
            </div>
            <span className="user-name">{userName.name}</span>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Referred users",
      dataIndex: "referredUsers",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          style={{
            color:
              status === "Registred"
                ? "var(--green-color)"
                : "var(--user-icons-3)",
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Reward",
      dataIndex: "reward",
    },
  ];

  const data = [
    {
      key: "1",
      date: "09/12/2024",
      userName: { name: "Kiran Bk" },
      email: "kiranb@gmail.com",
      referredUsers: "Mahesh G",
      status: "Registred",
      reward: "₹ 250",
    },
    {
      key: "2",
      date: "09/12/2024",
      userName: { name: "Arvind G" },
      email: "arvindg@gmail.com",
      referredUsers: "Sankaran G",
      status: "Registred",
      reward: "₹ 250",
    },
    {
      key: "3",
      date: "09/12/2024",
      userName: { name: "Sai T" },
      email: "sai@gmail.com",
      referredUsers: "Manjunath K",
      status: "Registerd",
      reward: "₹ 250",
    },
    {
      key: "4",
      date: "09/12/2024",
      userName: { name: "Prathap R" },
      email: "prathap@gmail.com",
      referredUsers: "Saikumar M",
      status: "Pending",
      reward: "₹ 250",
    },
    {
      key: "5",
      date: "09/12/2024",
      userName: { name: "Manju K" },
      email: "manju@gmail.com",
      referredUsers: "Manish B",
      status: "Pending",
      reward: "₹ 250",
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <h6>Referral Users</h6>
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
