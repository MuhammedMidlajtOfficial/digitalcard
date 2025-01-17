import React from "react";
import { Table, Avatar, Dropdown, Button, Menu } from "antd";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import image1 from "../../../../Assets/Images/admin.svg";
import { useNavigate } from "react-router-dom";

export const CompanyUsersList = () => {
  const navigate = useNavigate();

  const actionMenu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => navigate("/admin/usermanagement/companyusers/edit")}
      >
        Edit
      </Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );
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
      title: "Company Name",
      dataIndex: "company",
      render: (text) => (
        <span style={{ color: "var(--green-button-color)" }}>{text}</span>
      )
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
      username: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      company: "Levon Techno",
      status: "In Process",
    },
    {
      key: "2",
      username: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      company: "Levon Techno",
      status: "Close",
    },
    {
      key: "3",
      username: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      company: "Levon Techno",
      status: "In Process",
    },
  ];

  return (
    <div className=" row">
      <div className="col-lg-12">
        <div className="application-table-section">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>
    </div>
  );
};
