import React from "react";
import { MdOutlineCreditScore } from "react-icons/md";
import { TbCreditCardPay, TbCreditCardRefund } from "react-icons/tb";

const cardData = [
  {
    icon: MdOutlineCreditScore,
    title: "Active Cards",
    value: "5000",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: TbCreditCardRefund,
    title: "Inactive Cards",
    value: "6,123",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: TbCreditCardPay,
    title: "Pending Cards",
    value: "2,315",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
];

const StatusCateforiesCards = () => {
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

export default StatusCateforiesCards;
