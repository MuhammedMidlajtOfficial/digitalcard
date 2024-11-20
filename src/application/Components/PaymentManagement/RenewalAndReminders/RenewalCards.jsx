import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { RiTimerFlashLine } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";

const cardData = [
  {
    icon: HiOutlineRefresh,
    title: "Total Renewals",
    value: "75",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: FiClock,
    title: "Renewals Due",
    value: "15",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: RiTimerFlashLine,
    title: "Overdue Renewals",
    value: "30",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
  {
    icon: MdOutlineNotificationsActive,
    title: "Reminder Sent",
    value: "30",
    bgColor: "#85bbff",
    textColor: "#ffffff",
  },
];

const RenewalCards = () => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div key={index} className="col-lg-3 mb-4">
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

export default RenewalCards;
