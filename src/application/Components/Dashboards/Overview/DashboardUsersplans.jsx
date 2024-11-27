import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons'; // Import the UserOutlined icon
import axiosInstance from "../../../../AxiosConfig";

const UserSection = ({ avatar, name, status, planCount }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Gold Member":
        return { backgroundColor: "#eec575", color: "#000" };
      case "Platinum Member":
        return { backgroundColor: "#ce9191", color: "#000" };
      case "Silver Member":
        return { backgroundColor: "#d1e3c1", color: "#000" };
      default:
        return { backgroundColor: "#fff", color: "#000" };
    }
  };

  return (
    <div className="d-flex gap-2 mb-4 new-user-section align-items-center" style={{ overflowY: 'auto' }}>
      {/* If avatar is not available, show the default UserOutlined icon */}
      <Avatar 
        size={40}
        src={avatar || null} 
        icon={!avatar && <UserOutlined />} 
      />
      <div>
        <h4>{name}</h4>
        <span style={{ color:"red" }}>{planCount}<span> Times Used</span></span>
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
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`dashboard/getMostlyUsedPlans`)
      .then((response) => {
        setTopUsers(response.data.topUsers);
        // console.log("Fetched topUsers:", response.data.topUsers); // Logs fetched data directly
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => {
      setTopUsers([]);
    };
  }, []);

  return (
    <div className="mt-0">
      <div className="">
        <div className="dashboard-new-user">
          <div className="mb-4">
            <h2>Mostly Used Plans</h2>
          </div>
          <div className="new-user-plans">
            {topUsers?.map((user) => (
              <UserSection
                key={user._id} // Use user._id for unique keys
                avatar={user.image || null} // Pass null if avatar is missing
                name={user.username || 'User'} // Display username or email
                planCount={user.planCount} 
                status={`${user.plansUsed.name} Member`} // Dynamic status based on plan
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsersplans;
