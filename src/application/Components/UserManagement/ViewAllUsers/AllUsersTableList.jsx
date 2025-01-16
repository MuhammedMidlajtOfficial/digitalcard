import React from "react";
import { Table, Avatar, Dropdown, Button, Menu,Modal } from "antd";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../Services/toastService";
import { axiosInstance } from "../../../../AxiosConfig";
import { useLoading } from "../../../Services/loadingService";

export const AllUsersTableList = ({
  allUser = [],
  filter,
  setAllUser,
  currentPage,
  pageSize,
  totalUsers,
  onPaginationChange, 
}) => {
  const navigate = useNavigate();
console.log("asd",allUser)
  const { loading, startLoading, stopLoading } = useLoading();

  const handleChangeStatus = (userId, currentStatus) => {
    Modal.confirm({
      title: "Are you sure you want to change the status?",
      content: `This will set the status to ${currentStatus === "active" ? "inactive" : "active"}.`,
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        startLoading();
        axiosInstance
          .get(`user/changeUserStatus/${userId}`)
          .then((response) => {
            if (response.status === 200) {
              showSuccessToast(response.data.message);
              // Update the local user list
              setAllUser((prevUsers) =>
                prevUsers.map((user) =>
                  user._id === userId
                    ? { ...user, status: currentStatus === "active" ? "inactive" : "active" }
                    : user
                )
              );
            }
            stopLoading();
          })
          .catch((error) => {
            console.error("Error changing status:", error);
            showErrorToast("Something went wrong. Please try again later.");
            stopLoading();
          });
      },
    });
  };



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
      render: (_, record) => {
        const actionMenu = (
          <Menu>
            <Menu.Item
              key="1"
              onClick={() => navigate("/admin/usermanagement/editusers")}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => handleChangeStatus(record._id)}
            >
              {record.status === "active" ? "Inactive" : "Active"}
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={actionMenu} trigger={["click"]}>
            <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
          </Dropdown>
        );
      },
    },
  ];

  const dataSource = allUser.map((user, index) => ({
    ...user,
    key: user._id || index,
  }));

  if (!dataSource.length) {
    return <div className="text-center mt-5">No users found.</div>;
  }

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
