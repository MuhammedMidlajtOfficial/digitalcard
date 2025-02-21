import React, { useEffect, useState } from "react";
import { Avatar, DatePicker } from "antd";
import DashboardMembers from "./DashboardMembers";
import DashboardUsersplans from "./DashboardUsersplans"; 
import dayjs from "dayjs"; 
import { axiosInstance } from "../../../../AxiosConfig"; 
import { UserOutlined } from "@ant-design/icons"; 

const UserSection = ({ avatar, name, role, status, roleColor }) => (
  <div className="d-flex gap-3 mb-4 new-user-section align-items-center">
    <span>
      <Avatar size="large" src={avatar || null} icon={!avatar && <UserOutlined />} />
    </span>
    <div>
      <h4>{name}</h4>
      <p style={roleColor}>{role}</p>
    </div>
    <span>{status}</span>
  </div>
);

const DashboardNewuser = () => {
  const [filterDate, setFilterDate] = useState(dayjs());
  const [newUsers, setNewUsers] = useState([]);

  const disableFutureDates = (current) => {
    return current && current > dayjs().endOf('day');
  };

  const validateDate = (date) => {
    if (!date) return null;
    
    const today = dayjs().endOf('day');
    return date.isAfter(today) ? today : date;
  };

  useEffect(() => {
    if (filterDate) {
      axiosInstance
        .get(`dashboard/getTodaysActiveUsers/${filterDate.format("YYYY-MM-DD")}`)
        .then((response) => {
          setNewUsers(response.data.activeUsers);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setNewUsers([]);
        });
    } else {
      setNewUsers([]);
    }

    return () => {
      setNewUsers([]);
    };
  }, [filterDate]);

  const handleDateChange = (date) => {
    const validatedDate = validateDate(date ? dayjs(date) : null);
    setFilterDate(validatedDate);
  };

      // const newUsers = [
  //   {
  //     name: "Marvin McKinney",
  //     role: "Hospital Consulting",
  //     status: "On going",
  //     avatar: user,
  //   },
  //   {
  //     name: "Bessie Cooper",
  //     role: "Video Consulting",
  //     status: "1.30 PM",
  //     avatar: user1,
  //   },
  //   {
  //     name: "Jacob Jones",
  //     role: "Emergency",
  //     status: "11.00 PM",
  //     avatar: user2,
  //   },
  //   {
  //     name: "Robert Fox",
  //     role: "Hospital Consulting",
  //     status: "1.30 PM",
  //     avatar: user3,
  //   },
  // ];

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-4">
          <div className="dashboard-new-user">
            <div className="mb-3">
              <h2>New User</h2>
            </div>

            <div className="new-user-select d-flex justify-content-end align-items-center mb-3">
              <DatePicker
                onChange={handleDateChange}
                value={filterDate}
                placeholder="Select Date"
                format="DD, MMM YYYY"
                disabledDate={disableFutureDates}
                defaultValue={dayjs()} 
                allowClear={false} 
                inputReadOnly 
                showToday
              />
            </div>

            <div className="new-users-scroll">
              {newUsers.length ? (
                newUsers.map((user, index) => {
                  let roleColor;

                  if (user.userType) {
                    roleColor = { color: "blue" };
                  } else if (user.empId) {
                    roleColor = { color: "green" };
                  } else {
                    roleColor = { color: "red" };
                  }

                  return (
                    <UserSection
                      key={index}
                      avatar={user.image}
                      name={user.username ? user.username : user.email}
                      role={
                        user.userType
                          ? "Enterprise Employee"
                          : user.empId
                          ? "Enterprise User"
                          : "Individual User"
                      }
                      status={user.isSubscribed ? "Subscribed" : "Unsubscribed"}
                      roleColor={roleColor}
                    />
                  );
                })
              ) : (
                <span style={{ color: "red" }}>
                  {filterDate ? "No Users Found" : "Please select a date"}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          <DashboardMembers />
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
          <DashboardUsersplans />
        </div>
      </div>
    </div>
  );
};

export default DashboardNewuser;