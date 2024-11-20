import React from "react";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { TbTicketOff, TbFileX } from "react-icons/tb";

const cardData = [
  {
    icon: MdOutlineAirplaneTicket,
    title: "Total Invoice",
    value: "75",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: PiNotepad,
    title: "Active invoice",
    value: "15",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: TbTicketOff,
    title: "Inactive invoice",
    value: "30",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
  {
    icon: TbFileX,
    title: "Deleted invoice",
    value: "30",
    bgColor: "#85bbff",
    textColor: "#ffffff",
  },
];

const BillingHistoryCards = () => {
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

export default BillingHistoryCards;
