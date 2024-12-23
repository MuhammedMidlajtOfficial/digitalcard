import React from "react";
import { Table, Avatar } from "antd";
import image1 from "../../../Assets/Images/admin.png";
import { RiDeleteBinLine } from "react-icons/ri";

export const DeleteUsersList = () => {
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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile No",
      dataIndex: "phoneNo",
    },
    {
      title: "Membership",
      dataIndex: "membership",
      render: (membership) => {
        const membershipStyle = {
          Gold: { color: "#ffad00" },
          Free: { color: "#2aa3e4" },
          Platinum: { color: "#bb8ddc" },
        };
        const style =
          membership === "Gold Member"
            ? membershipStyle.Gold
            : membership === "Free Member"
            ? membershipStyle.Free
            : membership === "Platinum Member"
            ? membershipStyle.Platinum
            : {};

        return <span style={style}>{membership}</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <RiDeleteBinLine
          style={{
            cursor: "pointer",
            color: "var(--card-delete-color)",
            width: "20px",
            height: "22px",
          }}
        />
      ),
    },
  ];

  const data = [
    {
      key: "1",
      username: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      membership: "Gold Member",
      status: "In Process",
    },
    {
      key: "2",
      username: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      membership: "Free Member",
      status: "Close",
    },
    {
      key: "3",
      username: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      membership: "Platinum Member",
      status: "In Process",
    },
  ];

  return (
    <div className="container">
      <div className=" row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <h1>Users</h1>
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
