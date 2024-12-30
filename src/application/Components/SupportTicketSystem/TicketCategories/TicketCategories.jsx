import { Button, Dropdown, Menu, Modal, Select, Table } from "antd";
import React, { useState, useEffect } from "react";
import { FiFilter, FiPlus } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import AddTicket from "./AddTicket";
import { Option } from "antd/es/mentions";

// const ticketCategories = [
//   {
//     "_id": "67665980bdcda444b83b0b14",
//     "categoryName": "Technical Support",
//     "categoryDescription": "Issues related to technical support and troubleshooting.",
//     "categoryPriority": "High",
//     "activeTickets": 0,
//     "resolveTickets": 0,
//     "sla": "90% on-time",
//     "__v": 0
//   },
// {
//   "_id": "6766598cbdcda444b83b0b16",
//   "categoryName": "Billing",
//   "categoryDescription": "Questions and issues related to billing and payments.",
//   "categoryPriority": "Medium",
//   "activeTickets": 0,
//   "resolveTickets": 0,
//   "sla": "90% on-time",
//   "__v": 0
// },
// ]

const sortCategories = (categories, sortBy) => {
  switch (sortBy) {
    case "categoryPriority":
      return categories.sort((a, b) => a.categoryPriority.localeCompare(b.categoryPriority));
    case "solved-tickets":
      return categories.sort((a, b) => a.resolveTickets - b.resolveTickets);
    case "active-tickets":
      return categories.sort((a, b) => a.activeTickets - b.activeTickets);
    case "sla-status":
      return categories.sort((a, b) => a.sla.localeCompare(b.sla));
    case "category-name":
      return categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
    default:
      return categories;
  }};

const filterCategories = (categories, filterBy) => {
  switch (filterBy) {
    case "high-categoryPriority":
      return categories.filter((category) => category.categoryPriority === "High");
    case "medium-categoryPriority":
      return categories.filter((category) => category.categoryPriority === "Medium");
    case "low-categoryPriority":
      return categories.filter((category) => category.categoryPriority === "Low");
    case "employment-type":
      return categories.filter((category) => category.categoryName === "EFG");
    default:
      return categories;
  }
};

const sortTickets = (tickets, sortBy) => {
  switch (sortBy) {
    case "categoryPriority":
      return tickets.sort((a, b) => a.categoryPriority.localeCompare(b.categoryPriority));
    case "solved-tickets":
      return tickets.sort((a, b) => a.resolveTickets - b.resolveTickets);
    case "active-tickets":
      return tickets.sort((a, b) => a.activeTickets - b.activeTickets);
    case "sla-status":
      return tickets.sort((a, b) => a.sla.localeCompare(b.sla));
    case "category-name":
      return tickets.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
    default:
      return tickets;
  }
};  

const filterTickets = (tickets, filterBy) => {
  switch (filterBy) {
    case "high-categoryPriority":
      return tickets.filter((ticket) => ticket.categoryPriority === "High");
    case "medium-categoryPriority":
      return tickets.filter((ticket) => ticket.categoryPriority === "Medium");
    case "low-categoryPriority":
      return tickets.filter((ticket) => ticket.categoryPriority === "Low");
    case "employment-type":
      return tickets.filter((ticket) => ticket.categoryName === "EFG");
    default:
      return tickets;
  }
};



const TicketCategories = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categories, setCategories] = useState([]); // State for categories
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  const showModal = () => { 
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const filterMenu = (
    <Menu>
      <Menu.Item key="high-categoryPriority">High Priority</Menu.Item>
      <Menu.Item key="medium-categoryPriority">Medium Priority</Menu.Item>
      <Menu.Item key="low-categoryPriority">Low Priority</Menu.Item>
      <Menu.Item key="employment-type">EFG</Menu.Item>
    </Menu>
  );

  const sortMenu = 
    <Menu>
      <Menu.Item key="categoryPriority">Priority</Menu.Item>
      <Menu.Item key="solved-tickets">Solved Tickets</Menu.Item>
      <Menu.Item key="active-tickets">Active Tickets</Menu.Item>
      <Menu.Item key="sla-status">SLA status</Menu.Item>
      <Menu.Item key="category-name">Category Name</Menu.Item>
    </Menu>
  ;
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
      title: "Category Name",
      dataIndex: "categoryName",
    },
    {
      title: "Active Tickets",
      dataIndex: "activeTickets",
    },
    {
      title: "Solved Tickets",
      dataIndex: "resolveTickets",
    },
    {
      title: " SLA Status",
      dataIndex: "sla",
    },
    {
      title: "Priority",
      dataIndex: "categoryPriority",
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

  // const data = [
  //   {
  //     key: "1",
  //     categoryName: "Technical Issue",
  //     activeTickets: "20 tickets",
  //     solvedTickets: "10 tickets",
  //     sla: "90% on-time",
  //     categoryPriority: "High",
  //   },
  //   {
  //     key: "2",
  //     categoryName: "Billing Payment",
  //     activeTickets: "10 tickets",
  //     solvedTickets: "15 tickets",
  //     sla: "90% on-time",
  //     categoryPriority: "Low",
  //   },
  //   {
  //     key: "3",
  //     categoryName: "Account Management",
  //     activeTickets: "15 tickets",
  //     solvedTickets: "16 tickets",
  //     sla: "90% on-time",
  //     categoryPriority: "Medium",
  //   },
  //   {
  //     key: "4",
  //     categoryName: "General Enquiry",
  //     activeTickets: "30 tickets",
  //     solvedTickets: "25 tickets",
  //     sla: "90% on-time",
  //     categoryPriority: "High",
  //   },
  // ];

  const columns2 = [
    {
      title: "Ticket Id",
      dataIndex: "ticketId",
    },
    {
      title: "Issue Summary",
      dataIndex: "issueSummary",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Priority",
      dataIndex: "categoryPriority",
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
      issueSummary: "App Creashes on Launch",
      status: "Open",
      categoryPriority: "High",
    },
    {
      key: "2",
      ticketId: "# 1004",
      issueSummary: "Payment Error",
      status: "In Progress",
      categoryPriority: "Medium",
    },
    {
      key: "3",
      ticketId: "# 1006",
      issueSummary: "Request for Refund",
      status: "Open",
      categoryPriority: "Low",
    },
  ];

  // Fetch categories from backend
  useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://diskuss-1mv4.onrender.com/api/v1/ticket-category");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCategories(data); // Set fetched categories
            } catch (error) {
                setError(error.message); // Handle error
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchCategories();
    }, []);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="RBACPermission-list-heading">Ticket Categories</h4>
        <button
          onClick={showModal}
          className="create-btn d-flex gap-2 align-items-center"
        >
          {" "}
          <FiPlus /> Add Categories
        </button>
      </div>
      <div className="application-table-section mb-3">
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2>Category List </h2>
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
              dataSource={categories}
              pagination={false}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
      </div>

      {/* <div className="application-table-section mb-3">
        <div className="d-flex justify-content-between ticketCategories-table-dropdown-div gap-2 mb-3">
          <div className="d-flex gap-3 align-items-center">
            <h2 className="ticketCategories-details-h5">Category Details </h2>
            <Select
              className="form-control addTicket-form_control"
              placeholder="Select issue"
            >
              <Option value="high">Technical issue</Option>
              <Option value="medium">Billing & Payment</Option>
              <Option value="low">General enquiry</Option>
            </Select>
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
      </div> */}
      <AddTicket open={isModalVisible} onClose={handleCancel} />
    </div>
  );
};

export default TicketCategories;
