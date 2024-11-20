import React from "react";
import { TbMessageHeart } from "react-icons/tb";
import { VscPieChart } from "react-icons/vsc";
import { PiStarFourLight } from "react-icons/pi";

const cardData = [
  {
    icon: TbMessageHeart,
    value: "2900",
    title: "Total Responses",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: PiStarFourLight,
    value: "1400",
    title: "Success Referral",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon:  VscPieChart,
    value: "78%",
    title: "Pending Referral",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
];

const CardsResponseAnalytics = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, value,title, bgColor, textColor }, index) => (
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
                    <h2 className="cards-title mb-0">{value}</h2>
                    <h6 className="cards-subtitle mb-2">{title}</h6>
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

export default CardsResponseAnalytics;
