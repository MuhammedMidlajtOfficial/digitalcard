import React from "react";
import { FiUsers } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { MdOutlinePendingActions } from "react-icons/md";

const cardData = [
  {
    icon: FiUsers,
    title: "Total Referral",
    value: "400",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: SiTicktick,
    title: "Success Referral",
    value: "120",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: MdOutlinePendingActions,
    title: "Pending Referral",
    value: "50",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
];

const ReferralCards = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="application-dashboard-card">
                <div className="card-body d-flex align-items-center">
                  <div
                    className="icon-wrapper p-2 rounded-circle me-3"
                    style={{ backgroundColor: bgColor, color: textColor }}
                  >
                    <Icon className="" size={22} />
                  </div>
                  <div>
                    <h6 className="cards-subtitle mb-2">{title}</h6>
                    <h2 className="cards-title mb-0">{value}</h2>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ReferralCards;
