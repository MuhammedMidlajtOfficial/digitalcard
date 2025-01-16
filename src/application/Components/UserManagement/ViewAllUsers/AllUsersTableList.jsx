import React from "react";
import { Table, Avatar, Dropdown, Button, Menu } from "antd";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const AllUsersTableList = ({
  allUser = [],
  filter,
  onPaginationChange,
}) => {
  const navigate = useNavigate();

  const actionMenu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => navigate("/admin/usermanagement/editusers")}
      >
        Edit
      </Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <div className="d-flex align-items-center">
          <Avatar
            src={image}
            size={40}
            className="me-2"
            icon={!image && <UserOutlined />}
          />
          {filter === "enterpriseUser"
            ? record.companyName || "N/A"
            : record.username || "N/A"}
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => {
        if (filter === "enterpriseUser") {
          return record.companyName || "N/A";
        } else {
          return record.username || "N/A";
        }
      },
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

  const dataSource = allUser.map((user, index) => ({
    ...user,
    key: user._id || index,
  }));

  if (!dataSource.length) {
    return <div className="text-center mt-5">No users found.</div>;
  }


  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="application-table-section">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>
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
