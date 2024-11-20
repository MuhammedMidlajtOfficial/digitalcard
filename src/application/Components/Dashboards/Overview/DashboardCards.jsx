import React, { useEffect, useState } from "react";
import { FiUsers, FiUser, FiUserCheck } from "react-icons/fi";
import { BsClipboardPlus, BsTicketPerforated } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import axiosInstance from "../../../../AxiosConfig";

const DashboardCards = () => {
  const [individialUserCount, setIndividialUserCount] =  useState('')
  const [enterpriseUserCount, setEnterpriseUserCount] =  useState('')
  const [enterpriseEmployeeCount, setEnterpriseEmployeeCount] =  useState('')
  const [cardCount, setCardCount] =  useState('')
  const [newUsersCount, setNewUsersCount] =  useState('')
  const [subscribedCount, setSubscribedCount] =  useState('')
  const [failedPaymentCount, setFailedPaymentCount] =  useState('')
  const [activeUsersCount, setActiveUsersCount] =  useState('')

  useEffect(() => {
    // getCountIndividualUsers
    axiosInstance.get('dashboard/getCountIndividualUsers')
      .then((response)=>{
        setIndividialUserCount(response.data.user)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });
    // getCountEnterpriseUsers
    axiosInstance.get('dashboard/getCountEnterpriseUsers')
      .then((response)=>{
        setEnterpriseUserCount(response.data.user)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });
    // getCountEnterpriseEmployee
    axiosInstance.get('dashboard/getCountEnterpriseEmployee')
      .then((response)=>{
        setEnterpriseEmployeeCount(response.data.user)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });
    // getTotalCards
    axiosInstance.get('dashboard/getTotalCards')
      .then((response)=>{
        setCardCount(response.data.cardCount)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });
    // getNewUsers
    axiosInstance.get('dashboard/getNewUsers')
      .then((response)=>{
        setNewUsersCount(response.data.newUsers)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });
    // getSubscribedUsers
    axiosInstance.get('dashboard/getSubscribedUsers')
      .then((response)=>{
        setSubscribedCount(response.data.subscribedUsers)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });
    // getFailedPayment
    axiosInstance.get('dashboard/getFailedPayment')
      .then((response)=>{
        setFailedPaymentCount(response.data.failedPaymentCount)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });
    // getActiveUsers
    axiosInstance.get('dashboard/getActiveUsers')
      .then((response)=>{
        setActiveUsersCount(response.data.activeUsersCount)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });
  }, []);


  const cardData = [
    {
      icon: FiUsers,
      title: "Total Individial Users",
      value: individialUserCount,
      bgColor: "#8b81f7",
      textColor: "#ffffff",
    },
    {
      icon: FiUsers,
      title: "Total Enterprise Users",
      value: enterpriseUserCount,
      bgColor: "#ce81f7",
      textColor: "#ffffff",
    },
    {
      icon: FiUsers,
      title: "Total Enterprise Employee",
      value: enterpriseEmployeeCount,
      bgColor: "#f781d8",
      textColor: "#ffffff",
    },
    {
      icon: BsClipboardPlus,
      title: "Total Cards Created",
      value: cardCount,
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: FiUserCheck,
      title: "New Users",
      value: newUsersCount,
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
    {
      icon: LuUsers2,
      title: "Subscribed Users",
      value: subscribedCount,
      bgColor: "#ffa8cd",
      textColor: "#ffffff",
    },
    {
      icon: FiUser,
      title: "Active Users",
      value: activeUsersCount,
      bgColor: "#33ab65",
      textColor: "#ffffff",
    },
    {
      icon: BsTicketPerforated,
      title: "Failed Payments",
      value: failedPaymentCount,
      bgColor: "#f53636",
      textColor: "#ffffff",
    },
  ];


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

export default DashboardCards;
