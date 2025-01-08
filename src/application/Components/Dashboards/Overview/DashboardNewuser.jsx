import React, { useEffect, useState } from "react";
import { Avatar, DatePicker } from "antd";
import DashboardMembers from "./DashboardMembers";
import DashboardUsersplans from "./DashboardUsersplans";
import dayjs from "dayjs";
import {axiosInstance} from "../../../../AxiosConfig";

const UserSection = ({ avatar, name, role, status, roleColor }) => (
  <div className="d-flex gap-3 mb-4 new-user-section align-items-center">
    <span><Avatar size="large" src={avatar} /></span>
    <div>
      <h4>{name}</h4>
      <p style={roleColor}>{role}</p> {/* Apply color to role */}
    </div>
    <span>{status}</span>
  </div>
);

const DashboardNewuser = () => {
  
  const [filterDate, setFilterDate] = useState(dayjs());
  const [newUsers, setNewUsers] = useState([]);
  
  useEffect(() => {
    axiosInstance.get(`dashboard/getTodaysActiveUsers/${filterDate.format('YYYY-MM-DD')}`)
      .then((response)=>{
        
        setNewUsers(response.data.activeUsers)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
    });

    return () => {
      setNewUsers([])
    };
  }, [filterDate]);

  const handleDateChange = (date) => {
    setFilterDate(dayjs(date)); 
  };
  // console.log('Formatted Date:', filterDate.format('DD, MMM YYYY')); // "20, Nov 2024"

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
  //   {
  //     name: "Marvin McKinney",
  //     role: "Hospital Consulting",
  //     status: "On going",
  //     avatar: user,
  //   },
  //   {
  //     name: "Marvin McKinney",
  //     role: "Hospital Consulting",
  //     status: "On going",
  //     avatar: user,
  //   },
  //   {
  //     name: "Robert Fox",
  //     role: "Hospital Consulting",
  //     status: "1.30 PM",
  //     avatar: user3,
  //   },
  //   {
  //     name: "Robert Fox",
  //     role: "Hospital Consulting",
  //     status: "1.30 PM",
  //     avatar: user3,
  //   },
  //   {
  //     name: "Robert Fox",
  //     role: "Hospital Consulting",
  //     status: "1.30 PM",
  //     avatar: user3,
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
        <div className=" col-lg-4">
          <div className="dashboard-new-user">
            <div className="mb-3">
              <h2>New User</h2>
            </div>
            <div className="new-user-select d-flex justify-content-end align-items-center mb-3">
              {/* <div>
              <p>July 18, 2024</p>
              <h2>Today</h2>
            </div> */}
              {/* <MdOutlineCalendarMonth
              style={{ width: "20px", height: "20px", color: "#A3ADBB" }}
            /> */}
              <DatePicker
                onChange={handleDateChange}
                value={filterDate} 
                dateFormat="dd, MM yyyy"
              />
            </div>
            <div className="new-users-scroll">
              {newUsers.length ? (
                newUsers.map((user, index) => {
                  let roleColor;

                  // Check if user has userType field and apply color for "Enterprise Employee"
                  if (user.userType) {
                    roleColor = { color: 'blue' }; // Set color for Enterprise Employee
                  } 
                  // Check if user has empId field and apply color for "Enterprise User"
                  else if (user.empId) {
                    roleColor = { color: 'green' }; // Set color for Enterprise User
                  } 
                  // For Individual User, set default color
                  else {
                    roleColor = { color: 'red' }; // Set color for Individual User
                  }

                  return (
                    <UserSection
                      key={index}
                      avatar={user.image}
                      name={user.username ? user.username : user.email}
                      role={user.userType ? "Enterprise Employee" : user.empId ? "Enterprise User" : "Individual User"}
                      status={user.isSubscribed ? "Subscribed" : "Unsubscribed"}
                      roleColor={roleColor} // Pass the role color here
                    />
                  );
                })
              ) : (
                <span style={{ color:"red" }}>No Users Found</span>
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
