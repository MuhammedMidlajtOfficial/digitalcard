import React from "react";
import { LuCalendar } from "react-icons/lu";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

const cardData = [
  {
    icon: LuCalendar,
    title: "Total Revenue",
    value: "₹2,50,000",
    bgColor: "#afa8ff",
    textColor: "#ffffff",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Pending Payments",
    value: "₹85,000",
    bgColor: "#ffa0a9",
    textColor: "#ffffff",
  },
  {
    icon: AiOutlineDollar,
    title: "Completed Transactions",
    value: "₹2,50,000",
    bgColor: "#ffcb64",
    textColor: "#ffffff",
  },
];

const ManagePaymentsCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="manage-payments-section">
          <h2>View Payment</h2>
        </div>
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

export default ManagePaymentsCards;
