import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Table, Avatar } from "antd";
// import { IoIosArrowForward } from "react-icons/io";
// import { TbArrowsDownUp } from "react-icons/tb";
import image1 from "../../../Assets/Images/admin.png";
import { FiFilter } from "react-icons/fi";
import {axiosInstance} from "../../../../AxiosConfig";

export const DashboardTable = () => {
  const [filter, setFilter] = useState('individualUsers');
  const [recentUser, setRecentUser] = useState([]);

  useEffect(() => {
    console.log('filter',filter);
    axiosInstance.get(`dashboard/getRecentRegister/${filter}`)
    .then((response)=>{
      console.log("response.data.recentUsers",response.data.recentUsers);
      
      setRecentUser(response.data.recentUsers)
      // console.log('recentUser--',response);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
  });

  return () => {
    setRecentUser([])
  };
  }, [filter]);

  const filterMenu = (
    <Menu
      onClick={({ key }) => {
        setFilter(key); // Update filter state immediately
      }}
      selectedKeys={[filter]} // Manage the selected key
    >
      <Menu.Item key="individualUsers" className="filter-menu-item">
        Individual User
      </Menu.Item>
      <Menu.Item key="enterpriseUsers" className="filter-menu-item">
        Enterprise User
      </Menu.Item>
      <Menu.Item key="enterpriseEmployees" className="filter-menu-item">
        Enterprise Emp
      </Menu.Item>
    </Menu>
  );

  // const sortMenu = (
  //   <Menu>
  //     <Menu.Item key="datePosted" className="filter-menu-item">
  //       ASC  <IoIosArrowForward className="right-arrow" />
  //     </Menu.Item>
  //     <Menu.Item key="jobType" className="filter-menu-item">
  //       DSC  <IoIosArrowForward className="right-arrow" />
  //     </Menu.Item>
  //   </Menu>
  // );
  const columns = [
    {
      title: "Name",
      dataIndex: "companyName",
      render: (companyName, record) => (
        <div className="d-flex align-items-center">
          <Avatar
            src={record.image || "/default-avatar.png"} // Fallback if no image
            size={40}
            className="me-2"
          />
          {companyName}
        </div>
      ),
    },
    {
      title: "User Name",
      dataIndex: "username",
    },
    {
      title: "Phone No",
      dataIndex: "phnNumber",
      render: (phnNumber) => phnNumber || "N/A", // Handle empty phone numbers
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (createdAt) => new Date(createdAt).toLocaleDateString("en-GB"), // Format date
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
  ];

    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   render: () => (
    //     <Dropdown overlay={actionMenu} trigger={['click']}>
    //       <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
    //     </Dropdown>
    //   ),
    // },

  const data = [
    {
      key: "1",
      username: { name: "Annette Black", image: image1 },
      userId: "1450",
      phoneNo: "989898989",
      date: "09/12/24",
      status: "In Process",
    },
    {
      key: "2",
      username: { name: "Annette Black", image: image1 },
      userId: "1250",
      phoneNo: "989898989",
      date: "09/12/24",
      status: "Close",
    },
    {
      key: "3",
      username: { name: "Annette Black", image: image1 },
      userId: "1150",
      phoneNo: "989898989",
      date: "09/12/24",
      status: "In Process",
    },
  ];

  return (
    <div className="container">
      <div className=" row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <div className="d-flex justify-content-between align-items-center align-content-center mb-4 flex-lg-row flex-xl-row flex-column">
              <div className="d-flex gap-4 align-items-center">
                <h2>Recent Register</h2>
              </div>
              <div className="search-table-container d-flex gap-2">
                {/* <Dropdown overlay={sortMenu} trigger={["click"]}>
                  <button className="table-action-btn d-flex gap-2 align-items-center">
                    <span>Sort By</span>
                    <TbArrowsDownUp
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "GrayText",
                      }}
                    />
                  </button>
                </Dropdown> */}
                <Dropdown overlay={filterMenu} trigger={["click"]}>
                  <button className="table-action-btn d-flex gap-3 align-items-center">
                    <span>Filter</span>
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
              className="applied-applicants-table overflow-x-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
