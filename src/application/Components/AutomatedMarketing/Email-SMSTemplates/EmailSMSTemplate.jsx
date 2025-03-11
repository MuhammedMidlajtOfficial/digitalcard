import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import { FiFilter, FiPlus, FiSearch } from "react-icons/fi";
import { RxDotsVertical } from "react-icons/rx";
import { TbArrowsDownUp } from "react-icons/tb";
import EmailSMSTemplateModel from "./EmailSMSTemplateModel";
import EmailSMSCreateTemplate from "./EmailSMSCreateTemplate";

const EmailSMSTemplate = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedCard(null);
  };
  const handleClick = (event) => {
    setIsCreateModalVisible(true);
  };

  const handleCreateModalClose = () => {
    setIsCreateModalVisible(false);
  };

  const cardData = [
    {
      id: 1,
      header: "KC (Know Connections)",
      isNew: true,
      title: "Confirm your email address 🎯",
      message: [
        "Hi Username,",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        "Thanks,",
        "Company Name",
      ],
    },
    {
      id: 2,
      header: "Notify",
      isNew: false,
      title: "Your account has been updated!",
      message: [
        "Hello User,",
        "We've made some updates to your account. Please review the changes at your convenience.",
        "If you have any questions, feel free to reach out to support.",
        "Thank you,",
        "Team Notify",
      ],
    },
    {
      id: 3,
      header: "KC (Know Connections)",
      isNew: true,
      title: "Confirm your email address 🎯",
      message: [
        "Hi Username,",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        "Thanks,",
        "Company Name",
      ],
    },
    {
      id: 4,
      header: "KC (Know Connections)",
      isNew: true,
      title: "Confirm your email address 🎯",
      message: [
        "Hi Username,",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        "Thanks,",
        "Company Name",
      ],
    },
    {
      id: 5,
      header: "KC (Know Connections)",
      isNew: true,
      title: "Confirm your email address 🎯",
      message: [
        "Hi Username,",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        "Thanks,",
        "Company Name",
      ],
    },
    {
      id: 6,
      header: "KC (Know Connections)",
      isNew: true,
      title: "Confirm your email address 🎯",
      message: [
        "Hi Username,",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        "Thanks,",
        "Company Name",
      ],
    },
  ];

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
      <Menu.Item key="1">Edit</Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h5 className="RBACPermission-list-heading">Email/SMS Templates</h5>
        <button
          className="create-btn d-flex align-items-center"
          onClick={handleClick}
        >
          <FiPlus />Create Template
        </button>
      </div>
      <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
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
              </div>
      </div>
      <h5 className="RBACPermission-list-heading mt-4">Templates</h5>
      <div className="row mt-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="col-lg-4 email-sms-templateCard"
            onClick={() => handleCardClick(card)}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex justify-content-between email-sms-templateCard-header">
              <h4 className="email-sms-template-header-h4">{card.header}</h4>
              <div className="d-flex gap-2 align-items-center">
                {card.isNew && (
                  <p className="email-sms-template-new mb-0">New</p>
                )}
                <div>
                  <Dropdown overlay={actionMenu} trigger={["click"]}>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <RxDotsVertical />
                    </span>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="p-4 email-sms-template-body">
              <h5 className="email-sms-template-body-h5">{card.title}</h5>
              {card.message.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <EmailSMSTemplateModel
        open={isModalVisible}
        card={selectedCard}
        onClose={handleModalClose}
      />
      <EmailSMSCreateTemplate
        open={isCreateModalVisible}
        onClose={handleCreateModalClose}
      />
    </div>
  );
};

export default EmailSMSTemplate;
