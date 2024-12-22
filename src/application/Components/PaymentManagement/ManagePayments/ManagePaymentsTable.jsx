import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Table, Avatar, Button, Spin, message } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import axiosInstance from "../../../../AxiosConfig";


export const ManagePaymentsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/payment");

  
      // Map the response data to the table format
      setData(
        response.data.map((item, index) => ({
          key: index,
          userName: {
            name: item.user?.name || "Unknown", // Fetch the user name
            image: item.user?.image || null,   // Fetch the user image
          },
          paymentid: item.subscription?.razorpayOrderId || "N/A", // Fetch Razorpay Order ID
          date: new Date(item.subscription?.startDate).toLocaleDateString(), // Format start date
          paymethod: "Razorpay", // Hardcoded payment method
          status: item.subscription?.status || "Pending", // Subscription status
          transactionid: (item.subscription?.payment && item.subscription.payment[0]) || "N/A", // First payment ID
        }))
      );
    } catch (error) {
      message.error("Failed to fetch payment data");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchPayments();
  }, []);

  const filterMenu = (
    <Menu>
      <Menu.Item key="certifications" className="filter-menu-item">
        ABC <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="employment-type" className="filter-menu-item">
        EFG <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="datePosted" className="filter-menu-item">
        ABC <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="jobType" className="filter-menu-item">
        EFG <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const actionMenu = (record) => (
    <Menu>
      <Menu.Item
        key="view"
        onClick={() =>
          navigate("/admin/paymentmanagement/viewpayments/viewpayerinfo", {
            state: { record },
          })
        }
      >
        <LuEye style={{ color: "var(--gradient-end-color)" }} />
        View
      </Menu.Item>
      <Menu.Item
        key="reject"
        onClick={() => handleDelete(record.paymentid)}
      >
        <RiDeleteBinLine style={{ color: "var(--danger-color)" }} />
        Delete
      </Menu.Item>
    </Menu>
  );

  const handleDelete = async (paymentId) => {
    try {
      await axiosInstance.delete(`/payment/${paymentId}`);
      message.success("Payment deleted successfully");
      fetchPayments();
    } catch (error) {
      message.error("Failed to delete payment");
    }
  };

  const columns = [
    {
      title: "Payer Name",
      dataIndex: "userName",
      render: (userName) => (
        <div className="d-flex align-items-center">
          <Avatar src={userName.image || null}
          icon={!userName.image ? <UserOutlined /> : null}
          size={40} className="me-2" />
          {userName.name}
        </div>
      ),
    },
    {
      title: "Payment ID",
      dataIndex: "paymentid",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Pay Method",
      dataIndex: "paymethod",
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionid",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className="table-status-tag"
          style={{
            color:
              status === "active"
                ? "green"
                : status === "pending"
                ? "orange"
                : status === "inactive"
                ? "red"
                : "gray",
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Dropdown overlay={actionMenu(record)} trigger={["click"]}>
          <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="application-table-section">
            <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
              <div className="d-flex gap-4 align-items-center">
                <h2>View Payment History</h2>
              </div>
              <div className="search-table-container d-flex gap-2">
                <Dropdown overlay={sortMenu} trigger={["click"]}>
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
                </Dropdown>
                <Dropdown overlay={filterMenu} trigger={["click"]}>
                  <button className="table-action-btn d-flex gap-2 align-items-center">
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
            {loading ? (
              <Spin size="large" className="d-flex justify-content-center" />
            ) : (
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
                className="applied-applicants-table overflow-y-auto"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
