import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FiUser } from "react-icons/fi";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { axiosInstance } from "../../../../AxiosConfig";

const DashboardMembers = () => {
  const [filterDateRange, setFilterDateRange] = useState([null, null]);
  const [userGrowth, setUserGrowth] = useState({});
  const [subscribedUser, setSubscribedUser] = useState([]);

  const { RangePicker } = DatePicker;

  const disableFutureDates = (current) => {
    return current && current > dayjs().endOf('day');
  };

  useEffect(() => {
    if (filterDateRange[0] && filterDateRange[1]) {
      fetchMembersData();
    }
  }, [filterDateRange]);

  const fetchMembersData = () => {
    if (!filterDateRange[0] || !filterDateRange[1]) return;

    axiosInstance
      .get(`dashboard/getPlanMembers`, {
        params: {
          startDate: filterDateRange[0].format("YYYY-MM-DD"),
          endDate: filterDateRange[1].format("YYYY-MM-DD")
        }
      })
      .then((response) => {
        const dataForPlans = response.data.planPercentage.map(
          (value) => value.planName
        );
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
          value: parseFloat(plan.percentage),
          color: colorMapping[plan.planName],
        }));

        setSubscribedUser(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setSubscribedUser([]);
      });
  };

  const fetchUserPercentage = (startDate, endDate) => {
    axiosInstance
      .get(
        `/dashboard/getUserPercentage?startDate=${startDate}&endDate=${endDate}`
      )
      .then((response) => {
        const userData = response.data.userData;
        const updatedUserData = {
          ...userData,
          thisMonthPercentage: `${parseFloat(userData.thisMonthPercentage)}%`,
          previousMonthsPercentage: `${parseFloat(
            userData.previousMonthsPercentage
          )}%`,
          previousMonthPercentage: `${parseFloat(
            userData.previousMonthPercentage
          )}%`,
          growthLoss: `${Math.round(userData.growthLoss)}%`,
        };
        setUserGrowth(updatedUserData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleMembersDateRange = (dates) => {
    setFilterDateRange(dates || [null, null]);
  };

  const handleDateRange = (value, dateString) => {
    if (dateString.length === 2) {
      const [startDate, endDate] = dateString;
      fetchUserPercentage(startDate, endDate);
    }
  };

  const cardData = [
    {
      icon: FiUser,
      value: "New Users",
      title: userGrowth.thisMonthPercentage,
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
  ];

  const getNoDataMessage = () => {
    if (!filterDateRange[0] && !filterDateRange[1]) {
      return "Please select a date range to view members data";
    }
    return "No Members Found for the selected date range";
  };

  return (
    <div className="mt-0">
      <div className="dashboard-members-users">
        <div className="mb-3">
          <h2 className="dashboard-members-users-heading">Users</h2>
        </div>
        <div className="d-flex flex-column mb-2">
          <label htmlFor="date-range" className="form-label">
            Select Date Range
          </label>
          <RangePicker
            id="date-range"
            format="YYYY-MM-DD"
            onChange={handleDateRange}
            disabledDate={disableFutureDates}
          />
        </div>
        {cardData.map(
          ({ icon: Icon, title, value, bgColor, textColor }, index) => (
            <div
              key={index}
              className="card-body mb-2 justify-content-between align-items-center"
            >
              <div className="d-flex gap-2 dashboard-users-data align-items-center">
                <div
                  className="icon-wrapper p-2 rounded-circle me-1"
                  style={{ backgroundColor: bgColor, color: textColor }}
                >
                  <Icon size={22} />
                </div>
                <div className="">
                  <h1>This month</h1>
                  <p className="mt-1">
                    {userGrowth.thisMonthUsers} users{" "}
                    <span>({userGrowth.thisMonthPercentage})</span>
                  </p>
                </div>
              </div>
              <div className="d-flex gap-2 dashboard-users-data align-items-center mt-2">
                <div
                  className="icon-wrapper p-2 rounded-circle me-1"
                  style={{ backgroundColor: "#ffa0a9", color: textColor }}
                >
                  <Icon size={22} />
                </div>
                <div className="">
                  <h1>Previous month</h1>
                  <p className="mt-1">
                    {userGrowth.previousMonthUsers} users{" "}
                    <span>({userGrowth.previousMonthPercentage})</span>
                  </p>
                </div>
              </div>
              {value === "New Users" && (
                <div className="mt-lg-3 d-flex justify-between">
                  <p
                    className="members-cards-percentage"
                    style={{ color: "green" }}
                  >
                    {userGrowth.growthLoss} Growth
                  </p>
                  <p className="members-cards-total" style={{ color: "red" }}>
                    {userGrowth.totalUsers} Total Users
                  </p>
                </div>
              )}
            </div>
          )
        )}
      </div>
      <div className="dashboard-members mt-2">
        <div>
          <h2>Members</h2>
        </div>
        <div className="d-flex justify-content-end">
          <RangePicker
            onChange={handleMembersDateRange}
            value={filterDateRange}
            format="YYYY-MM-DD"
            allowEmpty={[true, true]}
            placeholder={['Start Date', 'End Date']}
            disabledDate={disableFutureDates}
          />
        </div>
        <div>
          {subscribedUser.length > 0 &&
          subscribedUser.some((entry) => entry.value > 0) ? (
            <>
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
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>

              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column justify-content-around">
                  {subscribedUser.map((entry) => (
                    <div
                      key={entry.name}
                      className="d-flex align-items-center mb-3"
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
            </>
          ) : (
            <span style={{ margin: "5px", color: "red", display: "block", textAlign: "center" }}>
              {getNoDataMessage()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardMembers;
