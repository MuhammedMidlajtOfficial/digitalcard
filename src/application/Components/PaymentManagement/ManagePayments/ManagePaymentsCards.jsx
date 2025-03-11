import React, { useEffect, useState } from "react";
import { LuCalendar } from "react-icons/lu";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { message } from "antd";
import { axiosInstance } from "../../../../AxiosConfig";

const ManagePaymentsCards = () => {
  const [cardAmount, setCardAmount] = useState({
    completedTransactions: 0,
    pendingPayments: 0,
    totalRevenue: 0
  });
  
  const fetchPayments = async () => {
    try {
      const response = await axiosInstance.get(`/payment/subscriptionAmount`);
      console.log(response);
  
      const { completedTransactions, pendingPayments, totalRevenue } = response.data;
  
      setCardAmount({
        completedTransactions,
        pendingPayments,
        totalRevenue
      });
  
    } catch (error) {
      console.log(error);
      message.error("Failed to fetch payment data");
    } 
  };
  

  useEffect(() => {
    fetchPayments()
  }, []);

  const cardData = [
    {
      icon: LuCalendar,
      title: "Total Revenue",
      value: `₹${cardAmount.totalRevenue}`,
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Pending Payments",
      value: `₹${cardAmount.pendingPayments}`,
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: AiOutlineDollar,
      title: "Completed Transactions",
      value: `₹${cardAmount.completedTransactions}`,
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {/* <div className="manage-payments-section">
          <h2 className="mb-3">Payment History</h2>
        </div> */}
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
