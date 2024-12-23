import React from "react";
import { Table, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const ViewTableReferral = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Name",
      dataIndex: "username",
      render: (username) => {
        const initials = username.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase();
        return (
          <div className="d-flex align-items-center">
            <div className="view-table-referral-initials-square">
              {initials}{" "}
            </div>
            <span className="user-name">{username.name}</span>
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
      title: "Reward",
      dataIndex: "reward",
    },
  ];

  const data = [
    {
      key: "1",
      date: "09/12/2024",
      username: { name: "Kiran Bk" },
      email: "kiranb@gmail.com",
      referredUsers: "Mahesh G",
      status: "Completed",
      reward: "₹ 250",
    },
    {
      key: "2",
      date: "09/12/2024",
      username: { name: "Arvind G" },
      email: "arvindg@gmail.com",
      referredUsers: "Sankaran G",
      status: "Completed",
      reward: "₹ 250",
    },
    {
      key: "3",
      date: "09/12/2024",
      username: { name: "Sai T" },
      email: "sai@gmail.com",
      referredUsers: "Manjunath K",
      status: "Completed",
      reward: "₹ 250",
    },
    {
      key: "4",
      date: "09/12/2024",
      username: { name: "Prathap R" },
      email: "prathap@gmail.com",
      referredUsers: "Saikumar M",
      status: "Pending",
      reward: "₹ 250",
    },
    {
      key: "5",
      date: "09/12/2024",
      username: { name: "Manju K" },
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
            />
          </div>
        </div>
        <div >
          <button className="create-btn mt-2"
            onClick={() =>
              navigate("/admin/referenceinformation/referraltracking")
            }
          >
            <IoIosArrowBack />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
