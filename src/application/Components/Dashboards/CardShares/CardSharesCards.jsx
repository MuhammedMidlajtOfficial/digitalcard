import React from "react";
import { FiUsers, FiUser, FiUserCheck } from "react-icons/fi";
import { BsClipboardPlus, BsTicketPerforated } from "react-icons/bs";
// import { LuUsers2 } from "react-icons/lu";

const cardData = [
  {
    icon: FiUsers,
    title: "Total Users",
    value: "10,654",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: BsClipboardPlus,
    title: "Total Cards Created",
    value: "5,559",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: FiUserCheck,
    title: "New Users",
    value: "4,315",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
  {
    icon: 'LuUsers2',
    title: "Subscribed Users",
    value: "6,321",
    bgColor: "#ffa8cd",
    textColor: "#ffffff",
  },
  {
    icon: FiUser,
    title: "Active Users",
    value: "6,287",
    bgColor: "#33ab65",
    textColor: "#ffffff",
  },
  {
    icon: BsTicketPerforated,
    title: "Failed Payments",
    value: "315",
    bgColor: "#85bbff",
    textColor: "#ffffff",
  },
];

const CardSharesCards = () => {
  return (
    <div className="container">
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

export default CardSharesCards;
