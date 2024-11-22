import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FiUser } from "react-icons/fi";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import axiosInstance from "../../../../AxiosConfig";

const DashboardMembers = () => {
  const [filterDate, setFilterDate] = useState(dayjs());
  const [userGrowth, setUserGrowth] = useState({});
  const [subscribedUser, setSubscribedUser] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`dashboard/getPlanMembers/${filterDate.format("YYYY-MM-DD")}`)
      .then((response) => {
        const dataForPlans = response.data.planPercentage.map(
          (value) => value.planName
        );
  
        // Generate dynamic colors for each plan
        const dynamicColors = [
          "#eec575",
          "#979797",
          "#ce9191",
          "#75c2e6",
          "#c2e675",
          "#e67575",
          "#75e6c2",
        ];
  
        const colorMapping = dataForPlans.reduce((acc, planName, index) => {
          acc[planName] = dynamicColors[index % dynamicColors.length];
          return acc;
        }, {});
  
        const formattedData = response.data.planPercentage.map((plan) => ({
          name: plan.planName,
          value: parseFloat(plan.percentage), // Ensure 'value' is numeric
          color: colorMapping[plan.planName],
        }));
  
        setSubscribedUser(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    
    return () => {
      setSubscribedUser([]);
    };
  }, [filterDate]); 
  
  useEffect(() => {
    axiosInstance
      .get(`dashboard/getUserPercentage`)
      .then((response) => {
        const userData = response.data.userData;
        
        // Round the percentages and add '%' sign
        const updatedUserData = {
          ...userData,
          thisMonthPercentage: `${parseFloat(userData.thisMonthPercentage)}%`,
          previousMonthsPercentage: `${parseFloat(userData.previousMonthsPercentage)}%`,
          growthLoss: `${Math.round(userData.growthLoss)}%`,
        };
  
        setUserGrowth(updatedUserData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  const handleDateChange = (date) => {
    setFilterDate(dayjs(date));
  };

  const cardData = [
    {
      icon: FiUser,
      value: "New Users",
      title: userGrowth.thisMonthPercentage,
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: FiUser,
      value: "Old Users",
      title: userGrowth.previousMonthsPercentage,
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
  ];

  return (
    <div className="mt-0">
      <div className="dashboard-members">
        <div>
          <h2>Members</h2>
        </div>
        <div className="d-flex justify-content-end">
        <DatePicker
          onChange={handleDateChange}
          value={filterDate} 
          dateFormat="dd, MM yyyy"
        />
        </div>
        <div>

        {subscribedUser.length > 0 && subscribedUser.some((entry) => entry.value > 0) ? (
          <PieChart width={200} height={200} style={{ margin: "auto" }}>
            <Pie
              data={subscribedUser}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              labelLine={false}
              label={false}
              dataKey="value"
            >
              {subscribedUser.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        ) : (
          <span style={{ margin: "5px",color:"red" }}>No Members Found for the selected date</span>
        )}

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-around">
            {subscribedUser.map((entry) => (
              <div
                key={entry.name}
                className="d-flex align-items-center"
              >
                <div
                  style={{
                    backgroundColor: entry.color,
                    width: "12px",
                    height: "12px",
                    marginRight: "8px",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="members-names-value">
            {subscribedUser.map((entry) => (
              <p className="mb-3" key={entry.name}>
                {entry.name}&nbsp;&nbsp;<span>{entry.value}%</span>
              </p>
            ))}
          </div>
        </div>
        </div>
      </div>
      <div className="dashboard-members-users mt-3">
        <div className="mb-3">
          <h2 className="dashboard-members-users-heading">Users</h2>
        </div>
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div
              key={index}
              className="card-body d-flex d-lg-block d-xl-flex mb-2 justify-content-between align-items-center"
            >
              <div className="d-flex gap-2">
                <div
                  className="icon-wrapper p-2 rounded-circle me-3"
                  style={{ backgroundColor: bgColor, color: textColor }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h6 className="members-subtitle mb-1">{title}</h6>
                  <h2 className="members-title mb-0">{value}</h2>
                </div>
              </div>
              {value === "New Users" && (
                <div className="mt-lg-3">
                  <p className="members-cards-percentage" style={{ color:"green" }}>
                    {userGrowth.growthLoss} Growth
                  </p>
                </div>
              )}
            </div>
          )
        )}

      </div>
    </div>
  );
};

export default DashboardMembers;
