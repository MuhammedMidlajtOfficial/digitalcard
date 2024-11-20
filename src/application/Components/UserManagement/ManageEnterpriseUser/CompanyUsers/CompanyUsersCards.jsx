
import React from "react";
import { FiUser } from "react-icons/fi";
import { LuCalendar, LuVideo } from "react-icons/lu";

const cardData = [
  {
    icon: LuCalendar,
    title: "Total Enterprise Users",
    value:"5,000",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: FiUser,
    title: "Active Users",
    value: "6,123",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: LuVideo,
    title: "New Users",
    value: "2,315",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
];

const CompanyUsersCards = () => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="application-all-users-card">
                <div className="card-body d-flex align-items-center">
                  <div
                    className="all-users-icon-wrapper p-2 rounded-circle me-3"
                    style={{ backgroundColor: bgColor, color: textColor }}
                  >
                    <Icon className="" size={22} />
                  </div>
                  <div>
                    <h6 className="all-users-cards-subtitle mb-2">{title}</h6>
                    <h2 className="all-users-cards-title mb-0">{value}</h2>
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

export default CompanyUsersCards;
