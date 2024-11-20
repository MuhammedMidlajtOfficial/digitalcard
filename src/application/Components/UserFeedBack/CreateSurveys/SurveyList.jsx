import React from "react";
import { Dropdown, Menu, Table } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { LuView } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import noDataImage from "../../../Assets/Images/noSurvey.png";
import { showDeleteMessage,showSuccessMessage } from "../../../../globalConstant"; 
export const SurveyList = () => {
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
 

const handleDelete = () => {
    showSuccessMessage("Welcome user survey Deleted successfully")
  };
  const openDeleteModal = () => {
    showDeleteMessage({
      title: "Are you sure you want to delete this Survey file?",
      content: "Annette Black Manage payment History",
      onDelete: handleDelete,
    });
  };
  const columns = [
    {
      title: "Survey Name",
      dataIndex: "surveyName",
      render: (userName) => (
        <div className="d-flex align-items-center">{userName?.name}</div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "URL",
      dataIndex: "url",
    },
    {
      title: "Responses",
      dataIndex: "responses",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="table-status-tag"
          style={{ color: status === "Active" ? "green" : "red" }}
        >
          {status}
        </span>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="d-flex gap-2">
          <button className="survey-action-icons" onClick={()=>navigate("/admin/userfeedback/received-surveys")}>
            <LuView  />
          </button>
          <button className="survey-action-icons" onClick={openDeleteModal}>
            <RiDeleteBin6Line />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      surveyName: { name: "Welcome user" },
    date: "09/12/24",
      url: "https://docs.google.com/forms/",
      responses: "34",
      status: "Active",
    },
    {
        key: "2",
        surveyName: { name: "New user" },
      date: "09/12/24",
        url: "https://docs.google.com/forms/",
        responses: "34",
        status: "Active",
      },
      {
        key: "3",
        surveyName: { name: "Hi" },
      date: "09/12/24",
        url: "https://docs.google.com/forms/",
        responses: "34",
        status: "InActive",
      },
      {
        key: "4",
        surveyName: { name: "Welcome user" },
      date: "09/12/24",
        url: "https://docs.google.com/forms/",
        responses: "34",
        status: "InActive",
      },
  ];

  return (
    <div className="survey-list-section">
      {data.length > 0 ? (
        <div className="container">
          <div className="row ">
            <div className="survey-list-heading mb-4 d-flex justify-content-between align-items-center">
              <h2>Survey Lists</h2>
              <button
                className="create-survey-button"
                onClick={() => navigate("/admin/userfeedback/create-survey")}
              >
                <FaPlus /> Create Surveys
              </button>
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
                    <h2>Surveys</h2>
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
            Currently, there are no surveys available to display.<br/> Please check
            back later or contact support for further assistance if this is an
            error
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
