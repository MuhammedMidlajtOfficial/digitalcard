import React from "react";
import { FiUser } from "react-icons/fi";
import { LuCalendar, LuVideo } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    icon: LuCalendar,
    title: "Total View",
    value: "10,321",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
    onClick: (navigate) => navigate("/admin/analyticsdashboad/allusersview"),
  },
  {
    icon: FiUser,
    title: "Unique Visitor",
    value: "6,123",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
    onClick: (navigate) => navigate("/admin/analyticsdashboad/uniquevisitors"),
  },
  {
    icon: LuVideo,
    title: "Numbers of Shares",
    value: "2,315",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
    onClick: (navigate) => navigate("/admin/analyticsdashboad/numberofshares"),
  },
];

const UserActivityReportCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          (
            { icon: Icon, title, value, bgColor, textColor, onClick },
            index
          ) => (
            <div
              key={index}
              className="col-lg-4 mb-4"
              onClick={() => onClick && onClick(navigate)}
              style={{ cursor: onClick ? "pointer" : "default" }}
            >
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

export default UserActivityReportCard;
