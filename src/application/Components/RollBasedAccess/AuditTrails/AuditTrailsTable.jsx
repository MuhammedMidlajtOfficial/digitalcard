import { DatePicker, Dropdown, Menu, Table, TimePicker } from "antd";
import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";

const AuditTrailsTable = () => {
  const dateFormat = "YYYY/MM/DD";
  const filterMenu = (
    <Menu>
      <Menu.Item key="certifications">ABC</Menu.Item>
      <Menu.Item key="employment-type">EFG</Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="datePosted">ABC</Menu.Item>
      <Menu.Item key="jobType">EFG</Menu.Item>
    </Menu>
  );
  // const actionMenu = (
  //     <Menu>
  //         <Menu.Item
  //             key="1"
  //         // onClick={() => navigate("/admin/incentive/edit")}
  //         >
  //             Edit
  //         </Menu.Item>
  //         <Menu.Item key="2">Delete</Menu.Item>
  //     </Menu>
  // );
  const columns = [
    {
      title: "TimeStamp",
      dataIndex: "timestamp",
    },
    {
      title: "UserName",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
    {
      title: "Resource",
      dataIndex: "resource",
    },
    {
      title: "IP Address",
      dataIndex: "ipaddress",
    },
    {
      title: "Detals",
      dataIndex: "details",
    },
  ];

  const data = [
    {
      key: "1",
      timestamp: "11/04/2024 11.05 AM",
      username: "Ravi",
      email: "ravi@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "2",
      timestamp: "11/04/2024 11.05 AM",
      username: "Anjali",
      email: "anjali@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "3",
      timestamp: "11/04/2024 11.05 AM",
      username: "Rajesh",
      email: "rajesh@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "4",
      timestamp: "11/04/2024 11.05 AM",
      username: "Priya",
      email: "priya@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Modified",
    },
    {
      key: "5",
      timestamp: "11/04/2024 11.05 AM",
      username: "Sita",
      email: "sita@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "6",
      timestamp: "11/04/2024 11.05 AM",
      username: "Vikram",
      email: "vikram@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "7",
      timestamp: "11/04/2024 11.05 AM",
      username: "Neha",
      email: "neha@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "8",
      timestamp: "11/04/2024 11.05 AM",
      username: "Karan",
      email: "karan@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "9",
      timestamp: "11/04/2024 11.05 AM",
      username: "Aditi",
      email: "aditi@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "10",
      timestamp: "11/04/2024 11.05 AM",
      username: "Ram",
      email: "ram@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
    {
      key: "11",
      timestamp: "11/04/2024 11.05 AM",
      username: "Ramya",
      email: "ramya@gmail.com",
      role: "Admin",
      action: "Updated",
      resource: "Compaign Settings",
      ipaddress: "192.168.0.1",
      details: "Mdified",
    },
  ];
  return (
    <div className="container">
      <h2 className="mt-4 auditTrails-h2">Detailed Audit Trail Log</h2>
      <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="create-survey-search-input"
          />
        </div>
        <div className="d-flex gap-3">
          <DatePicker format={dateFormat} />
          <TimePicker />
        </div>
      </div>
      <div className="application-table-section mt-4 mb-3">
        <div className="d-flex justify-content-between gap-2 mb-3">
          <h2>Audit List </h2>
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
        <div className="col-lg-12">
          <div className="">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditTrailsTable;
