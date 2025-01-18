import React from "react";
import { Avatar, Dropdown, Menu, Table } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import image1 from "../../../Assets/Images/admin.svg";

import noDataImage from "../../../Assets/Images/noSurvey.svg";
export const ReceivedSurveyList = () => {
  const navigate = useNavigate();
  const filterMenu = (
    <Menu>
      <Menu.Item key="certifications" className="filter-menu-item">
        ABC <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="employment-type" className="filter-menu-item">
        EFG <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="datePosted" className="filter-menu-item">
        ABC <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="jobType" className="filter-menu-item">
        EFG <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: "Survey Name",
      dataIndex: "surveyName",
      render: (surveyName) => surveyName.name, 
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "UserName",
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
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="d-flex gap-2">
          <button className="survey-action-icons" onClick={()=>navigate("/admin/userfeedback/view-received-surveys")}>View</button>
        </div>
      ),
    },
  ];
  
  const data = [
    {
      key: "1",
      surveyName: { name: "Welcome user" },
      date: "09/12/24",
      email: "abc@gmail.com",
      username: { name: "Annette Black", image: image1 },
    },
    {
      key: "2",
      surveyName: { name: "Welcome user" },
      date: "09/12/24",
      email: "abc@gmail.com",
      username: { name: "Annette Gold", image: image1 },
    },
    {
      key: "3",
      surveyName: { name: "Welcome user" },
      date: "09/12/24",
      email: "abc@gmail.com",
      username: { name: "Praveen", image: image1 },
    },
    {
      key: "4",
      surveyName: { name: "Welcome user" },
      date: "09/12/24",
      email: "abc@gmail.com",
      username: { name: "Shiva", image: image1 },
    },
  ];

  return (
    <div className="survey-list-section">
      {data.length > 0 ? (
        <div className="container">
          <div className="row ">
            <div className="survey-list-heading mb-4 d-flex justify-content-between align-items-center">
              <h2>Responses</h2>
            </div>
          </div>
          <div className="row mb-4">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="create-survey-search-input"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="application-table-section">
                <div className="d-flex justify-content-between align-items-center align-content-center mb-4 flex-lg-row flex-xl-row flex-column">
                  <div className="d-flex gap-4 align-items-center">
                    <h2>Received Surveys</h2>
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
      ) : (
        <div className="container">
          <div className="no-data-container">
            <img src={noDataImage} alt="" />
          </div>
          <div className="no-data-container-text d-flex flex-column justify-content-center">
            <h4>No Surveys Found</h4>
            <p>
              Currently, there are no surveys available to display.
              <br /> Please check back later or contact support for further
              assistance if this is an error
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="create-survey-button"
                onClick={() => navigate("/admin/userfeedback/create-survey")}
              >
                <FaPlus /> Create Surveys
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
