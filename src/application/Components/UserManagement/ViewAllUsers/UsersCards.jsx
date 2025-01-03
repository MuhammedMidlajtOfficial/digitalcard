import React, { useEffect, useState } from "react";
import { FiUser, FiUserCheck, FiUsers } from "react-icons/fi";
import axiosInstance from "../../../../AxiosConfig";



const UsersCards = ({change}) => {
  const [individialUserCount, setIndividialUserCount] =  useState('')
  const [enterpriseUserCount, setEnterpriseUserCount] =  useState('')
  const [enterpriseEmployeeCount, setEnterpriseEmployeeCount] =  useState('')
  const [newUsersCount, setNewUsersCount] =  useState('')
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
    // getNewUsers
    axiosInstance.get('dashboard/getNewUsers')
      .then((response)=>{
        setNewUsersCount(response.data.newUsers)
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
  }, [change]);

  const formatNumber = (num) => {
    if (num >= 10000000) return (num / 10000000).toFixed(1) + "Cr";
    if (num >= 100000) return (num / 100000).toFixed(1) + "L";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const cardData = [
    {
      icon: FiUsers,
      title: "Total Individial Users",
      value: formatNumber(individialUserCount),
      bgColor: "#8b81f7",
      textColor: "#ffffff",
    },
    {
      icon: FiUsers,
      title: "Total Enterprise Users",
      value: formatNumber(enterpriseUserCount),
      bgColor: "#ce81f7",
      textColor: "#ffffff",
    },
    {
      icon: FiUsers,
      title: "Total Enterprise Employee",
      value: formatNumber(enterpriseEmployeeCount),
      bgColor: "#f781d8",
      textColor: "#ffffff",
    },
    {
      icon: FiUserCheck,
      title: "New Users",
      value: formatNumber(newUsersCount),
      bgColor: "#ffcb64",
      textColor: "#ffffff",
    },
    {
      icon: FiUser,
      title: "Active Users",
      value: formatNumber(activeUsersCount),
      bgColor: "#33ab65",
      textColor: "#ffffff",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="application-all-users-card">
                <div className="card-body d-flex align-items-center">
                  <div
                    className="all-users-icon-wrapper p-2 rounded-circle me-3"
                    style={{ backgroundColor: bgColor, color: textColor }}
                  >
                    <Icon className="" size={22} />
                  </div>
                  <div>
                    <h6 className="all-users-cards-subtitle mb-2">{title}</h6>
                    <h2 className="all-users-cards-title mb-0">{value}</h2>
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

export default UsersCards;
