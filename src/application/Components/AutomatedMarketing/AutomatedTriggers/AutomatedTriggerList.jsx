import React, { useState } from "react";
import { Dropdown, Menu, Switch, Table } from "antd";
import { FiFilter, FiPlus } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import CreateTrigger from "./CreateTrigger";
const AutomatedTriggerList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
  const actionMenu = (
    <Menu>
      <Menu.Item
        key="1"
      >
        Edit
      </Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: "Trigger Name",
      dataIndex: "triggername",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Last Sent",
      dataIndex: "lastsent",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let style = {};
        switch (status) {
          case "Active":
            style = {
              backgroundColor: "#D1FADF",
              color: "#12B76A",
              padding: "4px 6px",
              borderRadius: "5px",
            };
            break;
          case "Paused":
            style = {
              backgroundColor: "#FEA5A5",
              color: "#B71212",
              padding: "4px 6px",
              borderRadius: "5px",
            };
            break;
          default:
            style = {
              backgroundColor: "#F0F0F0",
              color: "#8C8C8C",
              padding: "4px 6px",
              borderRadius: "5px",
            };
        }
        return <span style={style}>{status}</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Switch
            className="create-compaign-switch"
            size="small"
            style={{ marginRight: 8 }}
          />
          <Dropdown overlay={actionMenu} trigger={["click"]}>
            <span style={{ cursor: "pointer" }}>
              <BsThreeDotsVertical />
            </span>
          </Dropdown>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      triggername: "Annette Black",
      type: "Yes",
      lastsent: "3 min ago",
      status: "Active",
    },
    {
      key: "2",
      triggername: "Abandoned Cart",
      type: "Event Based",
      lastsent: "6 months ago",
      status: "Paused",
    },
    {
      key: "3",
      triggername: "Birthday Greetings",
      type: "Time based",
      lastsent: "10 min ago",
      status: "Active",
    },
    {
      key: "4",
      triggername: "Feedback Request",
      type: "Date based",
      lastsent: "2 weeks ago",
      status: "Paused",
    },
    {
      key: "5",
      triggername: "Annette Black",
      type: "Yes",
      lastsent: "3 min ago",
      status: "Active",
    },
    {
      key: "6",
      triggername: "Abandoned Cart",
      type: "Event Based",
      lastsent: "6 months ago",
      status: "Paused",
    },
    {
      key: "7",
      triggername: "Birthday Greetings",
      type: "Time based",
      lastsent: "10 min ago",
      status: "Active",
    },
    {
      key: "8",
      triggername: "Feedback Request",
      type: "Date based",
      lastsent: "2 weeks ago",
      status: "Paused",
    },
    {
      key: "9",
      triggername: "Annette Black",
      type: "Yes",
      lastsent: "3 min ago",
      status: "Active",
    },
    {
      key: "10",
      triggername: "Abandoned Cart",
      type: "Event Based",
      lastsent: "6 months ago",
      status: "Paused",
    },
    {
      key: "11",
      triggername: "Birthday Greetings",
      type: "Time based",
      lastsent: "10 min ago",
      status: "Active",
    },
    {
      key: "12",
      triggername: "Feedback Request",
      type: "Date based",
      lastsent: "2 weeks ago",
      status: "Paused",
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="RBACPermission-list-heading">Trigger List</h5>
        <button
          onClick={showModal}
          className="create-btn d-flex gap-2 align-items-center"
        >
          {" "}
          <FiPlus /> Create New Trigger
        </button>
      </div>
      <div className="application-table-section mt-3 mb-3">
        <div className="d-flex justify-content-between align-items-center align-content-center mb-4 flex-lg-row flex-xl-row flex-column">
          <h2>Trigger List </h2>
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
      <CreateTrigger open={isModalVisible} onClose={handleCancel} />
    </>
  );
};

export default AutomatedTriggerList;
