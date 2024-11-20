import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiMiniXCircle } from "react-icons/hi2";
import { MdOutlineAccessTime } from "react-icons/md";

const cardData = [
  {
    icon: HiOutlineRefresh,
    title: "Total Refunds",
    value: "75",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: MdOutlineAccessTime,
    title: "Pending Refunds",
    value: "15",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: HiMiniXCircle,
    title: "Processed Refunds",
    value: "30",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
  {
    icon: AiOutlineCheckCircle,
    title: "Amount Processed",
    value: "30",
    bgColor: "#85bbff",
    textColor: "#ffffff",
  },
];

const RefundCards = () => {
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

export default RefundCards;
