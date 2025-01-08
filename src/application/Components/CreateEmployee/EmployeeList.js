import React, { useEffect, useState } from "react";
import { Table, Pagination, Avatar, Spin, Dropdown, Button, Menu } from "antd";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { RxGrid } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {axiosInstance} from "../../../AxiosConfig";
import { useLoading } from "../../Services/loadingService";
import { showDeleteMessage } from "../../../globalConstant";

const EmployeeList = () => {
  const [isTableView, setIsTableView] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  // Fetch Employees
  const fetchUsers = () => {
    startLoading();
    axiosInstance
      .get(`/employee`, {
        params: { page: currentPage, pageSize, search: searchTerm },
      })
      .then((response) => {
        setAllUsers(response.data.employees || []);
        setTotalUsers(response.data.totalCount || 0);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      })
      .finally(() => stopLoading());
  };

  // Delete Employee
  const handleDelete = (userId) => {
    startLoading();
    axiosInstance
      .delete(`/employee/${userId}`)
      .then(() => fetchUsers())
      .catch((error) => {
        console.error("Error deleting employee:", error);
      })
      .finally(() => stopLoading());
  };

  const openDeleteModal = (userId) => {
    showDeleteMessage({
      title: "Are you sure you want to delete this Employee?",
      content: "This action cannot be undone.",
      onDelete: () => handleDelete(userId),
    });
  };

  const navigateToForm = (employeeId = null) => {
    if (employeeId) {
      navigate(`/admin/createEmployee?id=${employeeId}`);
    } else {
      navigate(`/admin/createEmployee`);
    }
  };

  // Search Handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // View Toggle Handlers
  const toggleView = (view) => setIsTableView(view === "table");

  // Table Columns
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => (
        <Avatar
          src={image}
          size={40}
          className="me-2"
          icon={!image && <UserOutlined />}
        />
      ),
    },
    { title: "Name", dataIndex: "username", render: (name) => name || "N/A" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Mobile No",
      dataIndex: "phnNumber",
      render: (phone) => phone || "N/A",
    },
    {
      title: "Action",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item
                key="edit"
                onClick={() =>
                   navigateToForm(record._id)
                }
              >
                Edit
              </Menu.Item>
              <Menu.Item
                key="delete"
                type="danger"
                onClick={() => openDeleteModal(record._id)}
              >
                Delete
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
        </Dropdown>
      ),
    },
  ];

  // User Card
  const renderUserProfileCard = (user) => (
    <div className="col-lg-3 mb-4" key={user._id}>
      <div className="application-users-profile-card">
        <div className="d-flex justify-content-center">
          <Avatar
            src={user.image}
            shape="square"
            size={68}
            icon={!user.image && <UserOutlined />}
          />
        </div>
        <h2 className="mt-3">{user.username || "N/A"}</h2>
        <h4>{user.email}</h4>
        <h4>{user.phnNumber || "N/A"}</h4>
        <h5>
          Categories: {user.category?.length ? user.category.join(", ") : "N/A"}
        </h5>
        <div className="d-flex gap-2 mt-2">
          <button
            className="edit-button"
            onClick={() =>
              navigateToForm(user._id)
            }
          >
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() => openDeleteModal(user._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    fetchUsers();
  }, [currentPage, pageSize, searchTerm]);

  return (
    <div className="container">
      <div className="application-users-section mb-4 d-flex justify-content-between">
        <h2>View All Users</h2>
        <button
          className="add-all-users"
          onClick={() => navigateToForm()}
        >
          <FaPlus />
          Add Employee
        </button>
      </div>
      <div className="d-flex mb-4 justify-content-between">
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
        <div className="d-flex gap-4">
          <RxGrid onClick={() => toggleView("grid")} />
          <LuMenu onClick={() => toggleView("table")} />
        </div>
      </div>
      {loading ? (
        <Spin size="large" className="d-flex justify-content-center mt-5" />
      ) : isTableView ? (
        <Table
          columns={columns}
          dataSource={allUsers.map((user, idx) => ({ ...user, key: idx }))}
          pagination={false}
        />
      ) : (
        <div className="row">{allUsers.map(renderUserProfileCard)}</div>
      )}
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
        className="d-flex justify-content-center mt-4"
      />
    </div>
  );
};

export default EmployeeList;
