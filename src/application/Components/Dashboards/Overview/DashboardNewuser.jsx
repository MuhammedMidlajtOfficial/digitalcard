import React from "react";
import user from "../../../Assets/Images/admin.png";
import user1 from "../../../Assets/Images/user1.png";
import user2 from "../../../Assets/Images/user2.png";
import user3 from "../../../Assets/Images/user3.png";
import { Avatar, DatePicker } from "antd";
import DashboardMembers from "./DashboardMembers";
import DashboardUsersplans from "./DashboardUsersplans";
import dayjs from "dayjs";
const UserSection = ({ avatar, name, role, status }) => (
  <div className="d-flex gap-3 mb-4 new-user-section align-items-center">
    <Avatar size="large" src={avatar} />
    <div>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
    <span>{status}</span>
  </div>
);

const DashboardNewuser = () => {
  const newUsers = [
    {
      name: "Marvin McKinney",
      role: "Hospital Consulting",
      status: "On going",
      avatar: user,
    },
    {
      name: "Bessie Cooper",
      role: "Video Consulting",
      status: "1.30 PM",
      avatar: user1,
    },
    {
      name: "Jacob Jones",
      role: "Emergency",
      status: "11.00 PM",
      avatar: user2,
    },
    {
      name: "Robert Fox",
      role: "Hospital Consulting",
      status: "1.30 PM",
      avatar: user3,
    },
    {
      name: "Marvin McKinney",
      role: "Hospital Consulting",
      status: "On going",
      avatar: user,
    },
    {
      name: "Marvin McKinney",
      role: "Hospital Consulting",
      status: "On going",
      avatar: user,
    },
    {
      name: "Robert Fox",
      role: "Hospital Consulting",
      status: "1.30 PM",
      avatar: user3,
    },
    {
      name: "Robert Fox",
      role: "Hospital Consulting",
      status: "1.30 PM",
      avatar: user3,
    },
    {
      name: "Robert Fox",
      role: "Hospital Consulting",
      status: "1.30 PM",
      avatar: user3,
    },
    {
      name: "Robert Fox",
      role: "Hospital Consulting",
      status: "1.30 PM",
      avatar: user3,
    },
  ];

  return (
    <div className="container">
      <div className="row mt-4">
        <div className=" col-lg-4">
          <div className="dashboard-new-user">
            <div className="mb-3">
              <h2>Today’s New User</h2>
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
                defaultValue={dayjs("2024-12-09")}
                format="DD, MMM YYYY"
              />
            </div>
            <div className="new-users-scroll">
              {newUsers.map((user, index) => (
                <UserSection
                  key={index}
                  avatar={user.avatar}
                  name={user.name}
                  role={user.role}
                  status={user.status}
                />
              ))}
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
