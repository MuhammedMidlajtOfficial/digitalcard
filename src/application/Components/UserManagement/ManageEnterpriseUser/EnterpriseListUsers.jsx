import React from "react";
import { Table, Avatar, Button, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons"; // Import Ant Design's user icon

export const EnterpriseListUsers = ({ 
  users = [], 
  currentPage, 
  pageSize, 
  totalUsers, 
  onPaginationChange 
}) => {
  const navigate = useNavigate(); // Use the navigate hook to handle navigation

  const columns = [
    {
      title: "Company Name",
      dataIndex: "image",
      render: (image, record) => (
        <div className="d-flex align-items-center">
          <Avatar
            src={image} // Display the image if available
            size={40}
            className="me-2"
            icon={!image && <UserOutlined />} // Use a default user icon if no image
          />
          {record.companyName || "N/A"} {/* Fallback to 'N/A' if no company name */}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (email) => email || "N/A", // Ensure fallback for email
    },
    {
      title: "Mobile No",
      dataIndex: "phnNumber",
      render: (phnNumber) => phnNumber || "N/A", // Ensure fallback for phone number
    },
    {
      title: "Employees",
      dataIndex: "employeeCount",
      render: (text) => text?.toLocaleString() || "0", // Format employee count and fallback to "0"
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Button 
          type="primary" 
          onClick={() => navigate(`/admin/usermanagement/entepriseusers/companyusers/${record._id}`)}
        >
          View
        </Button>
      ),
    },
  ];

  // Add unique keys to the dataSource
  const dataSource = users.map((user, index) => ({ ...user, key: user._id || index }));

  // Handle empty state
  if (!dataSource.length) {
    return <div className="text-center mt-5">No users found.</div>;
  }

  // Handle pagination changes
  const handlePaginationChange = (page, size) => {
    if (typeof onPaginationChange === "function") {
      onPaginationChange(page, size);
    } else {
      console.warn("onPaginationChange function is not provided.");
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="application-table-section">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false} // Disable pagination here
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>
      
      {/* Custom Pagination */}
      {totalUsers > pageSize && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={totalUsers}
            onChange={handlePaginationChange}
            showSizeChanger
            pageSizeOptions={[12, 24, 60, 120]}
          />
        </div>
      )}
    </div>
  );
};
