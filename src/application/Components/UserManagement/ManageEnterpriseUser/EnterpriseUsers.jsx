import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Dropdown, Menu, Avatar, Pagination } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { RxGrid } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import { EnterpriseListUsers } from "./EnterpriseListUsers";
import { useLoading } from "../../../Services/loadingService";
import { axiosInstance } from "../../../../AxiosConfig";
import { UserOutlined } from "@ant-design/icons";
import { FaPlus } from "react-icons/fa6";
import AddEnterprise from "./AddEnterprise";

const EnterpriseUsers = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12); // Default page size
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();
  const [isTableView, setIsTableView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  const fetchUsers = () => {
    console.log("Fetching users...");
    console.log("API Endpoint: user/getEnterpriseUser");
    console.log("Request Parameters:", {
      page: currentPage,
      pageSize,
      sortOrder,
      search: searchTerm,
    });
  
    startLoading();
  
    axiosInstance
      .get(`user/getEnterpriseUser`, {
        params: {
          page: currentPage,
          pageSize,
          sortOrder,
          search: searchTerm,
        },
      })
      .then((response) => {
        console.log("API Response:", response);
        console.log("Users Data:", response.data.users);
        console.log("Total User Count:", response.data.totalCount);
  
        setUsers(response.data.users); // Update with users array from response
        setTotalUsers(response.data.totalCount); // Update total users count
  
        stopLoading();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.error("Error Response Details:", error.response || "No additional error details available.");
        stopLoading();
      })
      .finally(() => {
        console.log("Fetch Users API call completed.");
      });
  };
  

  useEffect(() => {
    fetchUsers();
  }, [currentPage, pageSize, sortOrder, searchTerm]);
  const handleAddEnterprise = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeAddEnterpriseModal = () => {
    setIsModalOpen(false); // Close modal
    fetchUsers(); // Refresh users list after adding an enterprise
  };
 

  const renderUserProfileCard = (user) => {
    const { image, companyName, email, phnNumber, employeeCount } = user;

    return (
      <div className="col-lg-4 col-xl-3 mb-4" key={user._id}>
        <div className="application-users-profile-card">
          <div className="d-flex justify-content-center">
            <Avatar
              src={image}
              shape="square"
              size={68}
              icon={!image ? <UserOutlined /> : null}
            />
          </div>
          <h2 className="mt-3">{companyName || "N/A"}</h2>
          <h4>{email || "N/A"}</h4>
          <h4>{phnNumber || "N/A"}</h4>
          <h4>{employeeCount} Employees</h4>
          <button
            onClick={() =>
              navigate(
                `/admin/usermanagement/entepriseusers/companyusers/${user._id}`
              )
            }
            className="mt-2"
          >
            Visit Profile
          </button>
        </div>
      </div>
    );
  };

  // Handle page and page size change for pagination
  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size); // Update page size when user navigates to a different page
  };

  return (
    <div className="application-delete-users-section">
      <div className="container">
        <div className="row">
          <div className="application-users-section mb-3">
            <h2>View Enterprise Users Profiles</h2>
          </div>
          <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="create-survey-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="search-table-container d-flex gap-4">
              <button onClick={handleAddEnterprise} className="membership-btn">

                + Add Enterprise
              </button>

              <div
                className="d-flex align-items-center"
                onClick={() => setIsTableView(false)}
              >
                <RxGrid className="table-card-list" />
              </div>
              <div
                className="d-flex align-items-center"
                onClick={() => setIsTableView(true)}
              >
                <LuMenu className="table-data-list" />
              </div>
            </div>
          </div>
          {isTableView ? (
            <EnterpriseListUsers users={users} />
          ) : (
            <div className="row">
              {users.map((user) => renderUserProfileCard(user))}
            </div>
          )}
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalUsers}
              onChange={handlePageChange}
              pageSizeOptions={[12, 24, 60, 120]}
            />
          </div>
        </div>
        <AddEnterprise
        visible={isModalOpen}
        onClose={closeAddEnterpriseModal}
      />
      </div>
    </div>
  );
};

export default EnterpriseUsers;
