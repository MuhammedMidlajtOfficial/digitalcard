import React from "react";
import user from "../../../Assets/Images/admin.png";
import user1 from "../../../Assets/Images/user1.png";
import user2 from "../../../Assets/Images/user2.png";
import user3 from "../../../Assets/Images/user3.png";
import { Avatar } from "antd";

const UserSection = ({ avatar, name, date, status }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Gold Member":
        return { backgroundColor: "#eec575", color: "#000" };
      case "Platinum Member":
        return { backgroundColor: "#ce9191", color: "#000" };
      case "Silver Member":
        return { backgroundColor: "#979797", color: "#000" };
      default:
        return { backgroundColor: "#fff", color: "#000" };
    }
  };

  return (
    <div className="d-flex gap-2 mb-4 new-user-section align-items-center">
      <Avatar size="large" src={avatar} />
      <div>
        <h4>{name}</h4>
        <p>{date}</p>
      </div>
      <span
        style={{
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "10px",
          ...getStatusStyle(status),
        }}
      >
        {status}
      </span>
    </div>
  );
};

const DashboardUsersplans = () => {
  
  const newUsers = [
    {
      name: "Marvin",
      date: "09 Dec 3:50 PM",
      status: "Gold Member",
      avatar: user,
    },
    {
      name: "Bessie",
      date: "09 Dec 3:50 PM",
      status: "Platinum Member",
      avatar: user1,
    },
    {
      name: "Jacob Jones",
      date: "09 Dec 3:50 PM",
      status: "Silver Member",
      avatar: user2,
    },
    {
      name: "Robert Fox",
      date: "09 Dec 3:50 PM",
      status: "Gold Member",
      avatar: user3,
    },
    {
      name: "Jacob Jones",
      date: "09 Dec 3:50 PM",
      status: "Silver Member",
      avatar: user2,
    },
    {
      name: "Marvin",
      date: "09 Dec 3:50 PM",
      status: "Gold Member",
      avatar: user,
    },
    {
      name: "Bessie",
      date: "09 Dec 3:50 PM",
      status: "Platinum Member",
      avatar: user1,
    },
    {
      name: "Jacob Jones",
      date: "09 Dec 3:50 PM",
      status: "Silver Member",
      avatar: user2,
    },
    {
      name: "Jacob Jones",
      date: "09 Dec 3:50 PM",
      status: "Silver Member",
      avatar: user2,
    },
  ];

  return (
    <div className="mt-0">
      <div className="">
        <div className="dashboard-new-user">
          <div className="mb-4">
            <h2>Mostly Used Plans</h2>
          </div>
          <div className="new-user-plans">
            {newUsers.map((user, index) => (
              <UserSection
                key={index}
                avatar={user.avatar}
                name={user.name}
                date={user.date}
                status={user.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsersplans;
