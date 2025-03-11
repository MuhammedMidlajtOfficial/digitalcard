import React, { useState } from "react";
import { Button, Modal } from "antd";
import { LuEye } from "react-icons/lu";
import CampaignSetupEmailSMSTemplate from "./CampaignSetupEmailSMSTemplate";

const CreateCampaignClickMeModel = ({ open, onClose }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedCard(null);
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
  return (
    <>
      <Modal
        title="Email/SMS Template"
        open={open}
        onCancel={onClose}
        footer={[
          <Button
            key="cancel"
            onClick={onClose}
            className="assignTicket-cancel-button"
          >
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            className="openticket-submitRely-button"
          >
            Save
          </Button>,
        ]}
        width={800}
      >
        <div className="row mt-4 mb-2">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="col-lg-6 email-sms-model-templateCard mb-4"
              onClick={() => handleCardClick(card)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between mt-2 email-sms-templateCard-header">
                <h4 className="email-sms-template-header-h4">{card.header}</h4>
              </div>
              <div className="p-4 email-sms-template-body">
                <h5 className="email-sms-template-body-h5">{card.title}</h5>
                {card.message.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="template-hover-eye-icon">
                <LuEye />
              </div>
            </div>
          ))}
        </div>
        <CampaignSetupEmailSMSTemplate
          open={isModalVisible}
          card={selectedCard}
          onClose={handleModalClose}
        />
      </Modal>
    </>
  );
};
export default CreateCampaignClickMeModel;
