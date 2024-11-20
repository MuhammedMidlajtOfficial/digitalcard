import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FiUser } from "react-icons/fi";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import axiosInstance from "../../../../AxiosConfig";

const DashboardMembers = () => {
  const [filterDate, setFilterDate] = useState(dayjs());
  const [plans, setPlans] = useState([]);
  const [subscribedUser, setSubscribedUser] = useState([]);

  useEffect(() => {
    axiosInstance.get(`dashboard/getPlanMembers/${filterDate.format('YYYY-MM-DD')}`)
      .then((response)=>{
        let dataForPlans = []
        response.data.planPercentage.forEach(value => {
          dataForPlans.push(value.planName)
        });
        console.log('dataForPlans',dataForPlans);
        setPlans(dataForPlans)
        setSubscribedUser(response.data.planPercentage)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });

    return () => {
      setSubscribedUser([])
    };
  }, [filterDate]);

  const handleDateChange = (date) => {
    setFilterDate(dayjs(date)); 
  };

  const data = [
    { name: "Gold Member", value: 45, color: "#eec575" },
    { name: "Silver Member", value: 80, color: "#979797" },
    { name: "Platinum Member", value: 65, color: "#ce9191" },
  ];

  const cardData = [
    {
      icon: FiUser,
      value: "New Users",
      title: "25.5k",
      bgColor: "#afa8ff",
      textColor: "#ffffff",
    },
    {
      icon: FiUser,
      value: "Old Users",
      title: "150.3k",
      bgColor: "#ffa0a9",
      textColor: "#ffffff",
    },
  ];

  return (
      <div className="mt-0">
        <div className="">
          <div className="dashboard-members">
            <div>
              <h2>Members</h2>
            </div>
            <div className="d-flex justify-content-end ">
              <DatePicker
                onChange={handleDateChange}
                value={filterDate} 
                dateFormat="dd, MM yyyy"
              />
            </div>
            <div className="">
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
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column justify-content-around">
                  {data.map((entry) => (
                    <div key={entry.name} className="">
                      <div
                        style={{
                          backgroundColor: entry.color,
                          width: "12px",
                          height: "12px",
                          marginRight: "8px",
                          borderRadius: "50%",
                          marginTop: "-15px",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="members-names-value">
                  {data.map((entry) => (
                    <p className="mb-3" key={entry.name}>
                      {entry.name}&nbsp; &nbsp;<span>{entry.value}%</span>{" "}
                      <br />
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-members-users mt-3">
            <div className="mb-3 ">
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
                      <Icon className="" size={22} />
                    </div>
                    <div>
                      <h6 className="members-subtitle mb-1">{title}</h6>
                      <h2 className="members-title mb-0">{value}</h2>
                    </div>
                  </div>
                  <div className="mt-lg-3">
                    <p className="members-cards-percentage">15% Growth</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
  );
};

export default DashboardMembers;
