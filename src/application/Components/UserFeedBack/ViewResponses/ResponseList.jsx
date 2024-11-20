import React from "react";
import { Dropdown, Menu, Table } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { showDeleteMessage, showSuccessMessage } from "../../../../globalConstant"; 

export const FeedBackList = () => {
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
    showSuccessMessage("Feedback deleted successfully");
  };

  const openDeleteModal = () => {
    showDeleteMessage({
      title: "Are you sure you want to delete this feedback?",
      content: "This action cannot be undone.",
      onDelete: handleDelete,
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Feedback",
      dataIndex: "feedback",
      key: "feedback",
      render: (feedback) => (
        <span
          className={`feedback-tag ${
            feedback === "Good" ? "good-feedback" : "average-feedback"
          }`}
        >
          {feedback}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "About",
      dataIndex: "about",
      key: "about",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <span>
          {rating} <FaStar style={{ color: "#FFD700" }} />
        </span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="d-flex gap-2">
          <button
            className="survey-action-icons"
            onClick={() => navigate("/admin/userfeedback/view-feedback")}
          >
           View
          </button>
          
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Charan CC",
      feedback: "Average",
      date: "6-11-2024",
      about: "Application Issue",
      rating: "3.2",
    },
    {
      key: "2",
      name: "Navaneethan M",
      feedback: "Good",
      date: "6-11-2024",
      about: "Application Issue",
      rating: "4.5",
    },
    {
      key: "3",
      name: "Kiran BK",
      feedback: "Average",
      date: "6-11-2024",
      about: "Website Issue",
      rating: "3.5",
    },
    {
      key: "4",
      name: "Madhu GC",
      feedback: "Good",
      date: "6-11-2024",
      about: "Login Issue",
      rating: "4.5",
    },
    {
      key: "5",
      name: "Shankar N",
      feedback: "Good",
      date: "6-11-2024",
      about: "Application Issue",
      rating: "4.8",
    },
  ];

  return (
    <div className="survey-list-section mt-2">
      <div className="container">
        <div className="row">
          <div className="survey-list-heading my-2 d-flex justify-content-between align-items-center">
            <h2>Feedback List</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="application-table-section">
              <div className="d-flex justify-content-between align-items-center align-content-center mb-4 flex-lg-row flex-xl-row flex-column gap-4">
                <div className="search-container">
                  <FiSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="create-survey-search-input"
                  />
                </div>
                <div className="search-table-container d-flex gap-4">
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
    </div>
  );
};
