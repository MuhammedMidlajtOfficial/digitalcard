import React from "react";
import { BsTicket, BsTicketDetailed } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { TbClockBolt, TbClock } from "react-icons/tb";
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";

const SLATrackingCards = () => {
  const cardData = [
    {
      icon: BsTicketDetailed,
      title: "Total Active Tickets",
      value: "400",
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: BsTicket,
      title: "Closed Ticket",
      value: "120",
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: IoWarningOutline,
      title: "Missed SLA Ticket ",
      value: "50",
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
    {
      icon: AiOutlinePieChart,
      title: "SLA Compliance rate",
      value: "83%",
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

export default SLATrackingCards;
