import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Table, Avatar } from "antd";
import { FiFilter } from "react-icons/fi";
import { axiosInstance } from "../../../../AxiosConfig";
import { UserOutlined } from "@ant-design/icons";

export const DashboardTable = () => {
  const [filter, setFilter] = useState("individualUsers");
  const [recentUser, setRecentUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        if (filter === "allUsers") {
          const [individualResponse, enterpriseResponse, employeeResponse] = await Promise.all([
            axiosInstance.get("dashboard/getRecentRegister/individualUsers"),
            axiosInstance.get("dashboard/getRecentRegister/enterpriseUsers"),
            axiosInstance.get("dashboard/getRecentRegister/enterpriseEmployees"),
          ]);

          const allUsers = [
            ...(individualResponse.data.recentUsers || []).map((user) => ({
              ...user,
              userType: "Individual User",
            })),
            ...(enterpriseResponse.data.recentUsers || []).map((user) => ({
              ...user,
              userType: "Enterprise User",
            })),
            ...(employeeResponse.data.recentUsers || []).map((user) => ({
              ...user,
              userType: "Enterprise Employee",
            })),
          ];

          const sortedUsers = allUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

          setRecentUser(sortedUsers);
        } else {
          const response = await axiosInstance.get(`dashboard/getRecentRegister/${filter}`);
          const userTypeMap = {
            individualUsers: "Individual User",
            enterpriseUsers: "Enterprise User",
            enterpriseEmployees: "Enterprise Employee",
          };
          const usersWithType = (response.data.recentUsers || []).map((user) => ({
            ...user,
            userType: userTypeMap[filter],
          }));
          setRecentUser(usersWithType);
          console.log("recent",response)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setRecentUser([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      setRecentUser([]);
    };
  }, [filter]);

  const filterMenu = (
    <Menu
      onClick={({ key }) => {
        setFilter(key);
      }}
      selectedKeys={[filter]}
    >
      <Menu.Item key="allUsers" className="filter-menu-item">
        All Users
      </Menu.Item>
      <Menu.Item key="individualUsers" className="filter-menu-item">
        Individual User
      </Menu.Item>
      <Menu.Item key="enterpriseUsers" className="filter-menu-item">
        Enterprise User
      </Menu.Item>
      <Menu.Item key="enterpriseEmployees" className="filter-menu-item">
        Enterprise Employees
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => (
        <div className="d-flex align-items-center">
          <Avatar
            src={record.image}
            size={40}
            className="me-2"
            icon={!record.image && <UserOutlined />}
          />
          {name || record.companyName || "N/A"}
        </div>
      ),
    },
    {
      title: "User Name",
      dataIndex: "username",
      render: (username) => username || "Not Available",
    },
    {
      title: "Phone No",
      dataIndex: "phnNumber",
      render: (phnNumber) => phnNumber || "N/A",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (createdAt) => new Date(createdAt).toLocaleDateString("en-GB"),
    },
    {
      title: "Status",
      dataIndex: "timePassed",
      render: (timePassed) => (
        <span
          className="table-status-tag"
          style={{ color: timePassed.includes("days") ? "green" : "red" }}
        >
          {timePassed}
        </span>
      ),
    },
    {
      title: "User Type",
      dataIndex: "userType",
      render: (userType) => userType || "N/A",
    },
  ];

  const getFilterDisplayName = (filterKey) => {
    const filterNames = {
      allUsers: "All Users",
      individualUsers: "Individual User",
      enterpriseUsers: "Enterprise User",
      enterpriseEmployees: "Enterprise Employees",
    };
    return filterNames[filterKey] || filterKey;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <div className="d-flex justify-content-between align-items-center align-content-center mb-4 flex-lg-row flex-xl-row flex-column">
              <div className="d-flex gap-4 align-items-center">
                <h2>Recent Register</h2>
              </div>
              <div className="search-table-container d-flex gap-2">
                <Dropdown overlay={filterMenu} trigger={["click"]}>
                  <button className="table-action-btn d-flex gap-3 align-items-center">
                    <span>Filter</span>     
                    {/* : {getFilterDisplayName(filter)} */}
                    
                    <FiFilter
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "GrayText",
                      }}
                    />
                  </button>
                </Dropdown>
              </div>
            </div>
            <Table
              columns={columns}
              dataSource={recentUser}
              pagination={{ pageSize: 5 }}
              loading={loading}
              className="applied-applicants-table overflow-x-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

