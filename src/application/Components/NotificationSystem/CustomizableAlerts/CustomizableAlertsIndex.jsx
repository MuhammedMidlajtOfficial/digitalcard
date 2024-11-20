import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import IndexAlerts from "./IndexAlerts";
import CreateAlerts from "./CreateAlerts";

const CustomizableAlertsIndex = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  return (
    <>
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between current-incentive-plan-head">
        <h4>Customizable Alerts</h4>
        <button onClick={showModal} className="create-btn">
          <GoPlus />
          Create Alerts
        </button>
      </div>
      <IndexAlerts />
    </div>
    <CreateAlerts
        open={isModalOpen}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default CustomizableAlertsIndex;
