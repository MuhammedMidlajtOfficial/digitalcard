import { Button, Modal } from "antd";
import React, { useState } from "react";
import CampaignSetupPopulateddata from "./CampaignSetupPopulateddata";

const CampaignSetupEmailSMSTemplate = ({ open, card, onClose }) => {
  const [isModelVisible, setIsModelVisible] = useState(false);
  if (!card) return null;
  const handleClick = () => {
    setIsModelVisible(true);
  };
  const cancelModel = () => {
    setIsModelVisible(false);
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      title="Email/SMS Template"
      footer={[
        <Button
          key="cancel"
          onClick={onClose}
          className="assignTicket-cancel-button"
        >
          Cancel
        </Button>,
        <Button
          onClick={handleClick}
          key="save"
          type="primary"
          className="openticket-submitRely-button"
        >
          Select
        </Button>,
      ]}
    >
      <div className="email-sms-template-card-details">
        <div className="d-flex justify-content-between email-sms-templateCard-header">
          <h4 className="email-sms-template-header-h4">{card.header}</h4>
        </div>
        <div className="p-4 email-sms-template-body">
          <h5 className="email-sms-template-body-h5">{card.title}</h5>
          {card.message.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <button className="openticket-submitRely-button mb-3">
            Confirn Email Address
          </button>
          <p>
            If you don't want to receive any more emails from company_name,
            please{" "}
            <span style={{ color: "#2A84FF", textDecoration: "underline" }}>
              unsubscribe.
            </span>{" "}
          </p>
          <p>Compant Details,</p>
        </div>
      </div>
      <CampaignSetupPopulateddata
        open={isModelVisible}
        onCancel={cancelModel}
      />
    </Modal>
  );
};

export default CampaignSetupEmailSMSTemplate;
