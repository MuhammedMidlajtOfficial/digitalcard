import React from "react";
import { Table, Avatar, Dropdown, Button, Menu, Pagination } from "antd";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons"; // Import Ant Design's user icon

export const AllUsersTableList = ({ 
  allUser = [], 
  filter, 
  currentPage, 
  pageSize, 
  totalUsers, 
  onPaginationChange 
}) => {
  const navigate = useNavigate();

  const actionMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate('/admin/usermanagement/editusers')}>Edit</Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );


  const columns = [
    {
      title: "Image",
      dataIndex: "image", // Directly refer to the 'image' field
      render: (image, record) => (
        <div className="d-flex align-items-center">
          <Avatar
            src={image} // Display the image if available
            size={40}
            className="me-2"
            icon={!image && <UserOutlined />} // Use a default user icon if no image
          />
          {record.username || record.name || "N/A"} {/* Use 'record' to access other fields */}
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "username", // Access username directly
      render: (username, record) => record.name || username || "N/A", // Handle fallback for name
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile No",
      dataIndex: "phnNumber",
      render: (phnNumber) => phnNumber || "N/A",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
        </Dropdown>
      ),
    },
  ];

  // Add unique keys to the dataSource
  const dataSource = allUser.map((user, index) => ({ ...user, key: user._id || index }));

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
          {/* Table with pagination disabled */}
          <Table
            columns={columns}
            dataSource={dataSource} 
            pagination={false} // Ensure table pagination is disabled
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>
      {/* Custom Pagination */}
      {/* <div className="d-flex justify-content-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalUsers}
          onChange={handlePaginationChange}
          showSizeChanger
          pageSizeOptions={[12, 24, 60, 120]}
        />
      </div> */}
    </div>
  );
};
