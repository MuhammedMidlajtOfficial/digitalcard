import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePeople } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
const RollCreationCard = () => {
  const cardData = [
    {
      icon: FaPeopleGroup,
      title: "Total Team Members",
      value: "10,321",
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: MdOutlinePeople,
      title: "Total Admins",
      value: "6,123",
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: FaUsersBetweenLines,
      title: "Total Team Leads",
      value: "2,315",
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="application-AssignTicket-card SLA-Tracking-card">
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

export default RollCreationCard;
