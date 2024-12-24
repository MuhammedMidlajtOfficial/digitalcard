import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Table } from "antd";
import axios from "axios";
import { FiFilter } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";

// const ticketData = [
//   {
//     "_id": "675ad112ba2c73aa87823ca0",
//     "ticketNumber": "TCK00001",
//     "title": "Issue with login",
//     "description": "User unable to log in to the application.",
//     "priority": "High",
//     "createdBy": {
//       "_id": "6731e31c1637d690957d8e69",
//       "username": "alif",
//       "email": "alif.levontechno@gmail.com"
//     },
//     "status": "Open",
//     "createdAt": "2024-12-12T12:03:30.685Z",
//     "updatedAt": "2024-12-12T12:03:30.686Z",
//     "__v": 0
//   }
// ]

const TicketPrioritisationTable = () => {
  const [highPriorityData, setHighPriorityData] = useState([]);
  const [mediumPriorityData, setMediumPriorityData] = useState([]);
  const [lowPriorityData, setLowPriorityData] = useState([]);

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

  const columns = [
    {
      title: "Ticket Id",
      dataIndex: "ticketNumber",
    },
    {
      title: "Summary",
      dataIndex: "description",
    },
    {
      title: "Due Time",
      dataIndex: "",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const highPriorityResponse = await axios.get("https://diskuss-1mv4.onrender.com/api/v1/ticket?status!=Resolved&priority=High&page=1&limit=10");
        setHighPriorityData(highPriorityResponse.data);

        const mediumPriorityResponse = await axios.get("https://diskuss-1mv4.onrender.com/api/v1/ticket?status!=Resolved&priority=Medium&page=1&limit=10");
        setMediumPriorityData(mediumPriorityResponse.data);

        const lowPriorityResponse = await axios.get("https://diskuss-1mv4.onrender.com/api/v1/ticket?priority=Low&status=Open&status=In%20Progress&page=1&limit=10");
        setLowPriorityData(lowPriorityResponse.data);
        

      } catch (error) {
        console.error("Error fetching ticket data:", error);
      }
    };

    fetchTickets();
    console.log("highPriorityData : ", highPriorityData);
    console.log("mediumPriorityData : ", mediumPriorityData);
    console.log("lowPriorityData : ", lowPriorityData);
  }, []);

  return (
    <div className="container">
      <div className="application-table-section mb-3">
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2 className="ticketCategories-details-h5">High Priority</h2>
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
          <Table
            columns={columns}
            dataSource={highPriorityData}
            pagination={false}
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>

      {/* Medium Priority Section */}
      <div className="application-table-section mb-3">
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2 className="ticketCategories-details-h5">Medium Priority</h2>
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
          <Table
            columns={columns}
            dataSource={mediumPriorityData}
            pagination={false}
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>

      {/* Low Priority Section */}
      <div className="application-table-section mb-3">
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2 className="ticketCategories-details-h5">Low Priority</h2>
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
          <Table
            columns={columns}
            dataSource={lowPriorityData}
            pagination={false}
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default TicketPrioritisationTable;
