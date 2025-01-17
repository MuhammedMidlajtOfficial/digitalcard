import React from "react";
import { Avatar, Dropdown, Menu, Table } from "antd";
import { FiFilter } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import John_img from "../../../Assets/Images/John_img.svg";

const CampaignAnalyticsTable = () => {
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
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar size={44} src={John_img} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Opened",
      dataIndex: "opened",
    },
    {
      title: "Cicked",
      dataIndex: "clicked",
    },
    {
      title: "Converted",
      dataIndex: "converted",
    },
    {
      title: "Lead Score",
      dataIndex: "leadscore",
      key: "leadscore",
      render: (leadscore) => {
        let style = {};
        switch (leadscore) {
          case "High":
            style = {
              backgroundColor: "#D1FADF",
              color: "#12B76A",
              padding: "4px 6px",
              borderRadius: "5px",
            };
            break;
          case "Medium":
            style = {
              backgroundColor: "#F9F3E6",
              color: "#EEC575",
              padding: "4px 6px",
              borderRadius: "5px",
            };
            break;
          case "Low":
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
        return <span style={style}>{leadscore}</span>;
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "Annette Black",
      opened: "Yes",
      clicked: "No",
      converted: "Yes",
      leadscore: "High",
    },
    {
      key: "2",
      name: "Guy Hawkins",
      opened: "No",
      clicked: "Yes",
      converted: "No",
      leadscore: "Medium",
    },
    {
      key: "3",
      name: "Kristin Watson",
      opened: "Yes",
      clicked: "No",
      converted: "Yes",
      leadscore: "Low",
    },
    {
      key: "4",
      name: "Cameron",
      opened: "No",
      clicked: "Yes",
      converted: "Yes",
      leadscore: "High",
    },
    {
      key: "5",
      name: "Devone Lane",
      opened: "Yes",
      clicked: "No",
      converted: "Yes",
      leadscore: "Low",
    },
  ];
  return (
    <div className="container">
      <div className="application-table-section mt-3 mb-3">
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
          <h2>Engagement Tracking </h2>
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

export default CampaignAnalyticsTable;
