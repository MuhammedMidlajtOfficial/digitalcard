import React from "react";
import { BsTicket } from "react-icons/bs";
import {
  LuArrowUpToLine,
  LuArrowRightFromLine,
  LuArrowDownToLine,
} from "react-icons/lu";

const TicketPrioritisationCards = () => {
  const cardData = [
    {
      icon: BsTicket,
      title: "Total Active Tickets",
      value: "75",
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: LuArrowUpToLine,
      title: "High Priority",
      value: "15",
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: LuArrowRightFromLine,
      title: "Medium Priority",
      value: "30",
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
    {
      icon: LuArrowDownToLine,
      title: "Low Priority",
      value: "30",
      bgColor: "#85bbff",
      textColor: "#ffffff",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div key={index} className="col-lg-3 mb-4">
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

export default TicketPrioritisationCards;
