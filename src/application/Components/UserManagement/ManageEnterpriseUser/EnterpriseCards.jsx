import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuCalendar, LuVideo } from "react-icons/lu";
import { axiosInstance } from "../../../../AxiosConfig";

const EnterpriseCards = () => {
  const [enterpriseUserCount, setEnterpriseUserCount] = useState(0);
  const [activeEnterpriseUsersCount, setActiveEnterpriseUsersCount] =
    useState(0);
  const [thisMonthEnterpriseUsersCount, setThisMonthEnterpriseUsersCount] =
    useState(0);

  useEffect(() => {
    // getCountIndividualUsers
    axiosInstance
      .get("user/getEnterpriseUserCount")
      .then((response) => {
        setEnterpriseUserCount(response.data.EnterpriseUserCount);
        setActiveEnterpriseUsersCount(response.data.activeEnterpriseUsersCount);
        setThisMonthEnterpriseUsersCount(
          response.data.thisMonthEnterpriseUsersCount
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatNumber = (num) => {
    if (num >= 10000000) return (num / 10000000).toFixed(1) + "Cr";
    if (num >= 100000) return (num / 100000).toFixed(1) + "L";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const cardData = [
    {
      icon: LuCalendar,
      title: "Total Enterprise Users",
      value: formatNumber(enterpriseUserCount),
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: FiUser,
      title: "Active Users",
      value: formatNumber(activeEnterpriseUsersCount),
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
    {
      icon: LuVideo,
      title: "New Users",
      value: formatNumber(thisMonthEnterpriseUsersCount),
      bgColor: "#ffcb64",
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

export default EnterpriseCards;
