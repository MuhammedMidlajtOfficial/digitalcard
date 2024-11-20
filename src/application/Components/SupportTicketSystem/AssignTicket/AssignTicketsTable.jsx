import {
  Avatar,
  Badge,
  DatePicker,
  Divider,
  Dropdown,
  Input,
  Menu,
  Select,
  Table,
} from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { FiFilter, FiPlus } from "react-icons/fi";
import { IoClose, IoLocationOutline } from "react-icons/io5";
import { TbArrowsDownUp } from "react-icons/tb";
import John_img from "../../../Assets/Images/John_img.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";
import { FaRegFlag } from "react-icons/fa";

const AssignTicketsTable = () => {
  const [showStatusCard, setShowStatusCard] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const handleCloseClick = () => {
    setShowUserList(false);
  };
  const handleUserClick = () => {
    setShowUserList(true);
  };
  const handleAssignClick = () => {
    setShowStatusCard(true);
  };

  const handleCloseStatusCard = () => {
    setShowStatusCard(false);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
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
        // onClick={() => navigate("/admin/incentive/edit")}
      >
        Edit
      </Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Ticket Id",
      dataIndex: "ticketId",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Issue Summary",
      dataIndex: "issueSummary",
    },
    {
      title: "Priority",
      dataIndex: "priority",
    },
    {
      title: "SLA Target",
      dataIndex: "slaTarget",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <button
          className="AssignTicketTable-assign-button"
          onClick={handleAssignClick}
        >
          Assign
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      ticketId: "# 1002",
      category: "Technical Issue",
      issueSummary: "App Creashes on Launch",
      priority: "High",
      slaTarget: "1-hour Response",
      status: "Unassigned",
    },
    {
      key: "2",
      ticketId: "# 1004",
      category: "Billing Payment",
      issueSummary: "Payment Error",
      priority: "Medium",
      slaTarget: "1-hour Response",
      status: "Unassigned",
    },
    {
      key: "3",
      ticketId: "# 1006",
      category: "General Enquiry",
      issueSummary: "Request for Refund",
      priority: "Low",
      slaTarget: "1-hour Response",
      status: "Unassigned",
    },
  ];

  const columns2 = [
    {
      title: "Ticket Id",
      dataIndex: "ticketId",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Assignee",
      dataIndex: "assinee",
    },
    {
      title: "Issue Summary",
      dataIndex: "issueSummary",
    },
    {
      title: "Priority",
      dataIndex: "priority",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color;
        switch (status) {
          case "Completed":
            color = "#12B76A";
            break;
          case "In Progress":
            color = "#EEC575";
            break;
          case "Unsolved":
            color = "#D92222";
            break;
          default:
            color = "#8C8C8C";
        }

        return <span style={{ color }}>{status}</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <span style={{ cursor: "pointer" }}>...</span>
        </Dropdown>
      ),
    },
  ];

  const data2 = [
    {
      key: "1",
      ticketId: "# 1002",
      category: "Technical Issue",
      assinee: "Kiran BK",
      issueSummary: "App Creashes on Launch",
      priority: "High",
      dueDate: "12/12/2024",
      status: "completed",
    },
    {
      key: "2",
      ticketId: "# 1004",
      category: "Billing Payment",
      assinee: "Siddu M",
      issueSummary: "Payment Error",
      priority: "Medium",
      dueDate: "12/12/2024",
      status: "In Progress",
    },
    {
      key: "3",
      ticketId: "# 1006",
      category: "General Enquiry",
      assinee: "Madhu M",
      issueSummary: "Request for Refund",
      priority: "Low",
      dueDate: "12/12/2024",
      status: "Unsolved",
    },
  ];
  return (
    <div>
      <div className="application-table-section mb-3">
        <div className="d-flex justify-content-between gap-2 mb-3">
          <h2>Ticket Queue</h2>
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
        {showStatusCard && (
          <>
            <div
              className={`applied-job-view-status-card ${
                showStatusCard ? "show" : ""
              }`}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Search placeholder="Enter search text" />
              </div>
              <div>
                <p className="AssignTicketTable-p">Owner</p>
                <div className="d-flex gap-3 align-items-center mb-3">
                  <Avatar size={44} src={John_img} />
                  <p className="AssignTicketTable-p">Navaneethan M</p>
                </div>
              </div>
              <Divider style={{ margin: "0px" }} />
              <div className="mt-3 mb-2">
                <p className="AssignTicketTable-p">Assignee</p>
                <div className="d-flex align-items-center gap-2">
                  <Badge>
                    <div className="AssignTicket-badge-div">
                      <Avatar size={50} icon={<UserOutlined />} />
                      <CloseOutlined
                        className="AssignTicket-badge-close"
                        onClick={() => console.log("Close icon clicked")} // Add your close logic here
                      />
                    </div>
                  </Badge>
                  <Badge>
                    <div className="AssignTicket-badge-div">
                      <Avatar size={50} icon={<UserOutlined />} />
                      <CloseOutlined
                        className="AssignTicket-badge-close"
                        onClick={() => console.log("Close icon clicked")}
                      />
                    </div>
                  </Badge>
                  <Badge>
                    <div className="AssignTicket-badge-div">
                      <Avatar size={50} icon={<UserOutlined />} />
                      <CloseOutlined
                        className="AssignTicket-badge-close"
                        onClick={() => console.log("Close icon clicked")}
                      />
                    </div>
                  </Badge>
                  <Badge>
                    <div className="AssignTicket-badge-div">
                      <Avatar size={50} icon={<UserOutlined />} />
                      <CloseOutlined
                        className="AssignTicket-badge-close"
                        onClick={() => console.log("Close icon clicked")}
                      />
                    </div>
                  </Badge>
                  <IoIosAddCircleOutline
                    className="assignTicket-addImage-icon"
                    onClick={handleUserClick}
                  />
                </div>
              </div>
              <Divider style={{ margin: "0px" }} />

              {showUserList && (
                <div className="assignTicket-newPage-div">
                  <div className="d-flex justify-content-end mb-3 mt-4">
                    <CloseOutlined
                      className="AssignTicket-div-close"
                      onClick={handleCloseClick} // Add your close logic here
                    />
                  </div>
                  <Search placeholder="Enter search text" />
                  <div className="mt-4">
                    <h5>Assignee Name</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mt-3 d-flex gap-2 align-items-center">
                        <Avatar
                          size={35}
                          icon={<UserOutlined />}
                          className="assignTicket-showUserList-avatar"
                        />
                        <div>
                          <h6>Navaneethan</h6>
                          <p className="AssignTicketTable-p">Admin</p>
                        </div>
                      </div>
                      <FiPlus className="assignTicket-showUserList-plus" />
                    </div>
                    <Divider style={{ margin: "0px" }} />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mt-3 d-flex gap-2 align-items-center">
                        <Avatar
                          size={35}
                          icon={<UserOutlined />}
                          className="assignTicket-showUserList-avatar"
                        />
                        <div>
                          <h6>Shiva kumar</h6>
                          <p className="AssignTicketTable-p">Head</p>
                        </div>
                      </div>
                      <FiPlus className="assignTicket-showUserList-plus" />
                    </div>
                    <Divider style={{ margin: "0px" }} />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mt-3 d-flex gap-2 align-items-center">
                        <Avatar
                          size={35}
                          icon={<UserOutlined />}
                          className="assignTicket-showUserList-avatar"
                        />
                        <div>
                          <h6>Manju</h6>
                          <p className="AssignTicketTable-p">Team Lead</p>
                        </div>
                      </div>
                      <FiPlus className="assignTicket-showUserList-plus" />
                    </div>
                    <Divider style={{ margin: "0px" }} />
                  </div>
                  <div className="mt-4">
                    <div className="d-flex justify-content-end">
                      <h5>A</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mt-3 d-flex gap-2 align-items-center">
                        <Avatar
                          size={35}
                          icon={<UserOutlined />}
                          className="assignTicket-showUserList-avatar"
                        />
                        <div>
                          <h6>Navaneethan</h6>
                          <p className="AssignTicketTable-p">Admin</p>
                        </div>
                      </div>
                      <FiPlus className="assignTicket-showUserList-plus" />
                    </div>
                    <Divider style={{ margin: "0px" }} />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mt-3 d-flex gap-2 align-items-center">
                        <Avatar
                          size={35}
                          icon={<UserOutlined />}
                          className="assignTicket-showUserList-avatar"
                        />
                        <div>
                          <h6>Shiva kumar</h6>
                          <p className="AssignTicketTable-p">Head</p>
                        </div>
                      </div>
                      <FiPlus className="assignTicket-showUserList-plus" />
                    </div>
                    <Divider style={{ margin: "0px" }} />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mt-3 d-flex gap-2 align-items-center">
                        <Avatar
                          size={35}
                          icon={<UserOutlined />}
                          className="assignTicket-showUserList-avatar"
                        />
                        <div>
                          <h6>Manju</h6>
                          <p className="AssignTicketTable-p">Team Lead</p>
                        </div>
                      </div>
                      <FiPlus className="assignTicket-showUserList-plus" />
                    </div>
                    <Divider style={{ margin: "0px" }} />
                  </div>
                </div>
              )}
              {!showUserList && (
                <div className="assignTicket-previous-div">
                  <div className="mt-3 mb-3">
                    <p className="AssignTicketTable-p">Due Date</p>
                    <DatePicker
                      showTime
                      onChange={(value, dateString) => {
                        console.log("Selected Time: ", value);
                        console.log("Formatted Selected Time: ", dateString);
                      }}
                      onOk={onOk}
                    />
                  </div>
                  <Divider style={{ margin: "0px" }} />
                  <div className="mt-3 mb-4">
                    <p className="AssignTicketTable-p">Set Priority</p>
                    <Select
                      className="mt-2 assignTicket-setPriority-dropdown"
                      placeholder="High Priority "
                      style={{ width: "50%" }}
                    >
                      <Option value="high">
                        <FaRegFlag
                          className="assignTicket-flagIcon"
                          style={{ color: "red" }}
                        />
                        High Priority
                      </Option>
                      <Option value="average">
                        <FaRegFlag
                          className="assignTicket-flagIcon"
                          style={{ color: "orange" }}
                        />
                        Average Priority
                      </Option>
                      <Option value="low">
                        <FaRegFlag
                          className="assignTicket-flagIcon"
                          style={{ color: "green" }}
                        />
                        Low Priority
                      </Option>
                    </Select>
                  </div>
                  <Divider style={{ margin: "0px" }} />
                  <div className="mt-3 mb-2">
                    <h6>Created</h6>
                    <p className="AssignTicketTable-p">Dec 9, 2024 8.00 AM</p>
                    <h6>Updated</h6>
                    <p className="AssignTicketTable-p">Dec 9, 2024 11.00 AM</p>
                  </div>
                  <Divider style={{ margin: "0px" }} />
                  <div>
                    <div>
                      <Input.TextArea rows={4} placeholder="Add comments" />
                    </div>
                    <div className="d-flex gap-3 justify-content-end mt-3">
                      <button
                        className="cancel-btn"
                        onClick={handleCloseStatusCard}
                      >
                        Cancel
                      </button>
                      <button className="create-btn">Assign</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div className="application-table-section mb-3">
        <div className="d-flex justify-content-between gap-2 mb-3">
          <h2>Solved Tickets </h2>
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
              columns={columns2}
              dataSource={data2}
              pagination={false}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTicketsTable;
