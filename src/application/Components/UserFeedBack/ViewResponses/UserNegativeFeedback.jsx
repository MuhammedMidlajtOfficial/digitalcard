import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { TbArrowsDownUp } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { FiFilter, FiSearch } from "react-icons/fi";
import IndexUserNegativeFeedback from "./IndexUserNegativeFeedback";
import ReplyAllUserNegativeFeedback from "./ReplyAllUserNegativeFeedback";

export const UserNegativeFeedback = () => {
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

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div className="user-negative-feedback-section">
      <div className="container">
        <div className="row">
          <h2>User Negative FeedBack</h2>
          <div className="d-flex justify-content-between mt-4">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="create-survey-search-input"
              />
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
              <button
                onClick={showModal}
                style={{
                  backgroundColor: "var(--gradient-start-color)",
                  color: "var(--white-color)",
                }}
              >
                Reply All
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <IndexUserNegativeFeedback />
      </div>
      <ReplyAllUserNegativeFeedback open={isModalOpen} handleCancel={handleCancel} />
    </div>
  );
};
