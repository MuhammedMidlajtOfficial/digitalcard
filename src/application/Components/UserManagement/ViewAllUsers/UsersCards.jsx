import React, { useEffect, useState } from "react";
import { FiUser, FiUserCheck, FiUsers } from "react-icons/fi";
import { axiosInstance } from "../../../../AxiosConfig";
import { LuUsersRound } from "react-icons/lu";
import { PiUsersFour } from "react-icons/pi";

const UsersCards = ({ change, activeFilter, setActiveFilter }) => {
  const [individualUserCount, setIndividualUserCount] = useState("");
  const [enterpriseUserCount, setEnterpriseUserCount] = useState("");
  const [enterpriseEmployeeCount, setEnterpriseEmployeeCount] = useState("");
  const [newUsersCount, setNewUsersCount] = useState("");
  const [activeUsersCount, setActiveUsersCount] = useState("");

  useEffect(() => {
    axiosInstance
      .get("dashboard/getCountIndividualUsers")
      .then((response) => setIndividualUserCount(response.data.user))
      .catch((error) => console.error("Error fetching data:", error));

    axiosInstance
      .get("dashboard/getCountEnterpriseUsers")
      .then((response) => setEnterpriseUserCount(response.data.user))
      .catch((error) => console.error("Error fetching data:", error));

    axiosInstance
      .get("dashboard/getCountEnterpriseEmployee")
      .then((response) => setEnterpriseEmployeeCount(response.data.user))
      .catch((error) => console.error("Error fetching data:", error));

    axiosInstance
      .get("dashboard/getNewUsers")
      .then((response) => setNewUsersCount(response.data.newUsers))
      .catch((error) => console.error("Error fetching data:", error));

    axiosInstance
      .get("dashboard/getActiveUsers")
      .then((response) => setActiveUsersCount(response.data.activeUsersCount))
      .catch((error) => console.error("Error fetching data:", error));
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
      title: "Total Individual Users",
      value: formatNumber(individualUserCount),
      bgColor: "#8b81f7",
      textColor: "#ffffff",
      key: "individualUser",
    },
    {
      icon: PiUsersFour,
      title: "Total Enterprise Users",
      value: formatNumber(enterpriseUserCount),
      bgColor: "#ce81f7",
      textColor: "#ffffff",
      key: "enterpriseUser",
    },
    {
      icon: LuUsersRound,
      title: "Total Enterprise Employee",
      value: formatNumber(enterpriseEmployeeCount),
      bgColor: "#f781d8",
      textColor: "#ffffff",
      key: "enterpriseEmploye",
    },
    {
      icon: FiUserCheck,
      title: "New Users",
      value: formatNumber(newUsersCount),
      bgColor: "#ffcb64",
      textColor: "#ffffff",
      key: "newUsers",
    },
    {
      icon: FiUser,
      title: "Active Users",
      value: formatNumber(activeUsersCount),
      bgColor: "#33ab65",
      textColor: "#ffffff",
      key: "activeUsers",
    },
  ];

  const handleCardClick = (key, index) => {
    // Only update the active filter if the clicked card is one of the first three
    if (index < 3) {
      setActiveFilter(key);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor, key }, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div
                className={`application-all-users-card ${
                  activeFilter === key && index < 3 ? "active-card" : ""
                }  ${key === "newUsers" || key === "activeUsers" ? "hover-light-blue" : ""}`}
                style={{
                  backgroundColor:
                    activeFilter === key && index < 3 ? bgColor : "#f0f0f0",
                  color:
                    activeFilter === key && index < 3 ? textColor : "#000000",
                    cursor: index < 3 ? "pointer" : "default",
                }}
                onClick={() => handleCardClick(key, index)}
              >
                <div className="card-body d-flex align-items-center">
                  <div
                    className="all-users-icon-wrapper p-2 rounded-circle me-3"
                    style={{ backgroundColor: bgColor, color: textColor }}
                  >
                    <Icon size={22} />
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
