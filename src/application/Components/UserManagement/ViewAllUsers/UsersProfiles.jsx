import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import axiosInstance from "../../../../AxiosConfig";
import { AllUsersTableList } from "./AllUsersTableList";
import { Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { RxGrid } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import { UserOutlined } from "@ant-design/icons";

const UsersProfiles = () => {
  const [isTableView, setIsTableView] = useState(false);
  const [filter, setFilter] = useState('individualUser');
  const [sortOrder, setSortOrder] = useState('asc');
  const [allUser, setAllUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalUsers, setTotalUsers] = useState(0);

  const navigate = useNavigate();

  const handleTableViewToggle = () => setIsTableView(true);
  const handleGridViewToggle = () => setIsTableView(false);

  useEffect(() => {
    fetchUsers();
    return () => setAllUser([]);
  }, [filter, currentPage, pageSize, sortOrder]);

  const fetchUsers = () => {
    console.log('params',pageSize);
    axiosInstance
      .get(`user/getAllUser/${filter}`, {
        params: { 
          page: currentPage, 
          pageSize,
          sortOrder
        },
      })
      .then((response) => {
        console.log('response---',response);
        setAllUser(response.data.totalUser);
        setTotalUsers(response.data.totalCount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const filterMenu = (
    <Menu
      onClick={({ key }) => setFilter(key)}
      selectedKeys={[filter]}
    >
      <Menu.Item key="individualUser">Individual User</Menu.Item>
      <Menu.Item key="enterpriseUser">Enterprise User</Menu.Item>
      <Menu.Item key="enterpriseEmploye">Enterprise Employee</Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu 
      onClick={({ key }) => setSortOrder(key)}
      selectedKeys={[sortOrder]}
    >
      <Menu.Item key="asc">ASC<IoIosArrowForward /></Menu.Item>
      <Menu.Item key="desc">DESC<IoIosArrowForward /></Menu.Item>
    </Menu>
  );

  const renderUserProfileCard = (user) => (
    <div className="col-lg-3 mb-4" key={user._id || user.id}>
      <div className="application-users-profile-card">
        <div className="d-flex justify-content-center">
          <Avatar 
            src={user.image} // Display the image if available
            shape="square" 
            size={68} 
            icon={!user.image && <UserOutlined />}
          />
        </div>
        <h2 className="mt-3">{user.username || user.companyName || "N/A"}</h2>
        <div className="d-flex justify-content-center">
          {user.memberTag && (
            <p className={user.memberTag.toLowerCase().replace(" ", "-") + "-tag"}>
              {user.memberTag}
            </p>
          )}
        </div>
        <h4>{user.email}</h4>
        <h4>{user.phnNumber || "N/A"}</h4>
        <button
          onClick={() => navigate("/admin/usermanagement/editusers")}
          className="mt-2"
        >
          Visit Profile
        </button>
      </div>
    </div>
  );
  

  return (
    <div className="container">
      <div className="application-users-section mb-4 d-flex justify-content-between">
        <h2>View All Users</h2>
        <button
          className="add-all-users"
          onClick={() => navigate("/admin/usermanagement/addusers")}
        >
          <FaPlus />
          Add User
        </button>
      </div>
      <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="create-survey-search-input"
          />
        </div>
        <div className="search-table-container d-flex gap-4">
          <Dropdown overlay={filterMenu} trigger={["click"]}>
            <button className="table-action-btn d-flex gap-2 align-items-center">
              <span>Filters</span>
              <FiFilter />
            </button>
          </Dropdown>
          <Dropdown overlay={sortMenu} trigger={["click"]}>
            <button className="table-action-btn d-flex gap-2 align-items-center">
              <span>Sort By</span>
              <TbArrowsDownUp />
            </button>
          </Dropdown>
          <div
            className="d-flex align-items-center"
            onClick={handleGridViewToggle}
          >
            <RxGrid />
          </div>
          <div
            className="d-flex align-items-center"
            onClick={handleTableViewToggle}
          >
            <LuMenu />
          </div>
        </div>
      </div>
      {isTableView ? (
        <AllUsersTableList 
          allUser={allUser} 
          filter={filter} 
          currentPage={currentPage}
          pageSize={pageSize}
          totalUsers={totalUsers}
          onPaginationChange={(page, size) => {
            setCurrentPage(page);
            setPageSize(size);
          }}
        />
      ) : (
        <div className="row">{allUser?.map(renderUserProfileCard)}</div>
      )}
      <div className="d-flex justify-content-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalUsers}
          onChange={(page, size) => {
            setCurrentPage(page);
            setPageSize(size);
          }}
          showSizeChanger
          pageSizeOptions={[12, 24, 60, 120]}
        />
      </div>
    </div>
  );
};

export default UsersProfiles;
