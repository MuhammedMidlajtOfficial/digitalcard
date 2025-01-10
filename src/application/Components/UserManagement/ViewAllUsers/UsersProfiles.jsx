import React, { useEffect, useState } from "react";
import { Pagination, Spin, Avatar, Dropdown, Menu } from "antd";
import { axiosInstance } from "../../../../AxiosConfig";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { RxGrid } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import { UserOutlined } from "@ant-design/icons";
import { useLoading } from "../../../Services/loadingService";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../Services/toastService";
import UsersCards from "./UsersCards";
import { AllUsersTableList } from "./AllUsersTableList";

const UsersProfiles = ({ setChange }) => {
  const [isTableView, setIsTableView] = useState(false);
  const [filter, setFilter] = useState("individualUser");
  const [sortOrder, setSortOrder] = useState("asc");
  const [allUser, setAllUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("individualUser");

  const { loading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  const handleGridViewToggle = () => setIsTableView(false);
  const handleTableViewToggle = () => setIsTableView(true);

  const handleFilterChange = (key) => {
    setFilter(key);
    setActiveFilter(key);
  };

  useEffect(() => {
    fetchUsers();
    return () => setAllUser([]);
  }, [activeFilter, currentPage, pageSize, sortOrder, searchTerm]);

  const fetchUsers = () => {
    startLoading();
    axiosInstance
      .get(`user/getAllUser/${activeFilter}`, {
        params: {
          page: currentPage,
          pageSize,
          sortOrder,
          search: searchTerm,
        },
      })
      .then((response) => {
        console.log(response);
        setAllUser(response.data.totalUser);
        setTotalUsers(response.data.totalCount);
        stopLoading();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        stopLoading();
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleChangeStatus = (userId) => {
    startLoading();
    axiosInstance
      .get(`user/changeUserStatus/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          showSuccessToast(response.data.message);
          fetchUsers();
          setChange((prev) => !prev);
        }
        stopLoading();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        showErrorToast("Something went wrong. Please try again later");
        stopLoading();
      });
  };

  const filterMenu = (
    <Menu
      onClick={({ key }) => handleFilterChange(key)}
      selectedKeys={[filter]}
    >
      <Menu.Item key="individualUser">Individual User</Menu.Item>
      <Menu.Item key="enterpriseUser">Enterprise User</Menu.Item>
      <Menu.Item key="enterpriseEmploye">Enterprise Employee</Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu onClick={({ key }) => setSortOrder(key)} selectedKeys={[sortOrder]}>
      <Menu.Item key="asc">
        ASC <IoIosArrowForward />
      </Menu.Item>
      <Menu.Item key="desc">
        DESC <IoIosArrowForward />
      </Menu.Item>
    </Menu>
  );

  const renderUserProfileCard = (user) => {
    const {
      _id,
      image,
      username,
      companyName,
      subscriptionPlan,
      email,
      phnNumber,
      status,
    } = user;
    const color = status === "active" ? "green" : "red";
    let tagClass = "";
    switch (subscriptionPlan) {
      case "Gold":
        tagClass = "gold-member-tag";
        break;
      case "Silver":
        tagClass = "silver-member-tag";
        break;
      case "Platinum":
        tagClass = "platinum-member-tag";
        break;
      default:
        tagClass = "default-member-tag";
    }

    return (
      <div className="col-lg-3 mb-4" key={user._id || user.id}>
        <div className="application-users-profile-card">
          <div className="d-flex justify-content-center">
            <Avatar
              src={image || null}
              shape="square"
              size={68}
              icon={image ? null : <UserOutlined />}
            />
          </div>
          <h2 className="mt-3">
            {activeFilter === "enterpriseUser"
              ? companyName || "N/A"
              : username || "N/A"}
          </h2>
          <div className="d-flex justify-content-center">
            {subscriptionPlan ? (
              <p className={tagClass}>{subscriptionPlan}</p>
            ) : (
              <p className="null-member-tag">No Plan</p>
            )}
          </div>
          <h4>{email}</h4>
          <h4>{phnNumber || "N/A"}</h4>
          <h4>
            <span style={{ color: color }}>
              {status.charAt(0).toUpperCase() + status.slice(1)} user
            </span>
          </h4>
          <div className="d-flex gap-2 mt-2" style={{ width: "100" }}>
            <button
              className="edit-button"
              onClick={() => navigate(`/admin/usermanagement/editusers/${_id}`)}
            >
              Edit
            </button>
            <button
              className={`status-button ${
                status === "active" ? "inactive" : "active"
              }`}
              onClick={() => handleChangeStatus(_id)}
            >
              {status === "active" ? "Inactive" : "Active"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <UsersCards
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        handleFilterChange={handleFilterChange}
      />
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
            value={searchTerm}
            onChange={handleSearch}
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
            <RxGrid className="table-card-list" />
          </div>
          <div
            className="d-flex align-items-center"
            onClick={handleTableViewToggle}
          >
            <LuMenu className="table-data-list" />
          </div>
        </div>
      </div>
      {loading ? (
        <Spin size="large" className="d-flex justify-content-center mt-5" />
      ) : isTableView ? (
        <AllUsersTableList
          allUser={allUser}
          filter={activeFilter}
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
