import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Table, Avatar, Button, Spin, message, Select, } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { axiosInstance } from "../../../../AxiosConfig";
import { Option } from "antd/es/mentions";
import { showErrorToast, showSuccessToast } from "../../../Services/toastService";

export const ManagePaymentsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSort, setActiveSort] = useState("desc");
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchPayments = async (page = currentPage, limit = pageSize) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/payment?page=${page}&limit=${limit}&search=${searchTerm}&status=${filter}&sortOrder=${activeSort}`);
      console.log("PAYMENT DETAILS:", response.data);
  
      // Map the response data to the table format
      const mappedData = response?.data?.subscriptions?.map((item, index) => ({
        key: index,
        username: {
          name: item?.user?.name || "Unknown", // If user is null, fallback to "Unknown"
          image: item?.user?.image || null, // If user is null, fallback to null
        },
        orderId: item?.subscription?.razorpayOrderId || "N/A", // Razorpay Order ID
        date: new Date(item?.subscription?.startDate), // Format the start date
        paymethod: item?.payment?.paymentMethod || "Razorpay", // Hardcoded payment method
        status: item?.subscription?.status || "N/A", // Subscription status
        planName: item?.subscription?.status === "free" ? "Free" : item?.subscription?.planName || item?.subscription?.planId?.name || "N/A",
        subscriptionId: item?.subscription?._id || "N/A", // Subscription ID
        currencyType: item?.subscription?.payment[0]?.currencyType || "N/A", // Subscription ID
        netAmout: item?.subscription?.payment[0]?.netAmount || "N/A", // Subscription ID
        state: item?.subscription?.payment[0]?.state || "N/A", // Subscription ID
      }));
  
      // Sort the data based on the active sort option (newest or oldest)
      if (activeSort === "newest") {
        mappedData.sort((a, b) => b.date - a.date); // Sort by date (newest first)
      } else if (activeSort === "oldest") {
        mappedData.sort((a, b) => a.date - b.date); // Sort by date (oldest first)
      }
  
      // Set the state with the sorted and mapped data
      // setFilteredData(mappedData);
      setData(mappedData);
      setTotal(response.data.totalSubscriptions);
    } catch (error) {
      console.log(error);
      
      message.error("Failed to fetch payment data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [currentPage, pageSize, searchTerm, filter, activeSort]);

  const handleFilter = (status) => {
    setFilter(status);
  };

  const filterMenu = (
    <Menu>
      <Menu.Item
        key="active"
        className="filter-menu-item"
        style={{ color: "green", fontWeight: "600" }}
        onClick={() => {
          handleFilter("active");
        }}
      >
        Active
      </Menu.Item>
      <Menu.Item
        key="inactive"
        className="filter-menu-item"
        style={{ color: "red", fontWeight: "600" }}
        onClick={() => {
          handleFilter("inactive");
        }}
      >
        Inactive
      </Menu.Item>
      <Menu.Item
        key="pending"
        className="filter-menu-item"
        style={{ color: "orange", fontWeight: "600" }}
        onClick={() => {
          handleFilter("pending");
        }}
      >
        Pending
      </Menu.Item>
      <Menu.Item
        key="free"
        className="filter-menu-item"
        style={{ color: "gray", fontWeight: "600" }}
        onClick={() => {
          handleFilter("free");
        }}
      >
        Free
      </Menu.Item>
      <Menu.Item
        key="reset"
        className="filter-menu-item"
        style={{
          color: "white",
          backgroundColor: "blue",
          fontWeight: "600",
          textAlign: "center",
          borderRadius: "5px",
          marginTop: "10px",
          marginBottom: "2px",
          padding: "3px 6px",
        }}
        onClick={() => {
          handleFilter("");
        }}
      >
        Reset
      </Menu.Item>
    </Menu>
  );

  const handleSort = (sortBy) => {
    setActiveSort(sortBy); // Update the active sort option
  };

  const sortMenu = (
    <Menu>
      <Menu.Item
        key="newest"
        className="filter-menu-item"
        style={{
          color: activeSort === "desc" ? "blue" : "gray",
          fontWeight: activeSort === "desc" ? "600" : "400",
        }}
        onClick={() => {
          handleSort("desc");
        }}
      >
        Newest First <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item
        key="oldest"
        className="filter-menu-item"
        style={{
          color: activeSort === "asc" ? "blue" : "gray",
          fontWeight: activeSort === "asc" ? "600" : "400",
        }}
        onClick={() => {
          handleSort("asc");
        }}
      >
        Oldest First <IoIosArrowForward className="right-arrow" />
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

  const handleStatusChange = (value, record) => {
    setLoading(true);
    console.log("RECORD", record);
    console.log("value", value);

    const apiUrl = `payment/${record.subscriptionId}/status`;

    axiosInstance
      .patch(apiUrl, { status: value })
      .then((response) => {
        showSuccessToast("Status updated successfully!");
        fetchPayments();
      })
      .catch((error) => {
        console.error("Error updating status:", error.response || error);
        showErrorToast("Failed to update status. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Handle pagination changes
  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const columns = [
    {
      title: "Payer Name",
      dataIndex: "username",
      render: (username) => (
        <div className="d-flex align-items-center">
          <Avatar
            src={username.image || null}
            icon={!username.image ? <UserOutlined /> : null}
            size={40}
            className="me-2"
          />
          {username.name}
        </div>
      ),
    },
    {
      title: "Order ID",
      dataIndex: "orderId",
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => date.toLocaleDateString(),
    },
    {
      title: "Pay Method",
      dataIndex: "paymethod",
    },
    {
      title: "Plan Name",
      dataIndex: "planName",
    },
    {
      title: "Currency Type",
      dataIndex: "currencyType",
    },
    {
      title: "Net Amount",
      dataIndex: "netAmout",
    },
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
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
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      ),
    },
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   render: (status, record) => (
    //     <Select
    //       value={status}
    //       onChange={(value) => handleStatusChange(value, record)}
    //       className="custom-select-status"
    //       style={{
    //         color:
    //           status === "active"
    //             ? "green"
    //             : status === "pending"
    //             ? "orange"
    //             : status === "inactive"
    //             ? "red"
    //             : "gray",
    //       }}
    //       placeholder="Select Status"
    //     >
    //       <Option value="active">Active</Option>
    //       <Option value="pending">Pending</Option>
    //       <Option value="inactive">Inactive</Option>
    //     </Select>
    //   ),
    // },
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   render: (_, record) => (
    //     <Dropdown overlay={actionMenu(record)} trigger={["click"]}>
    //       <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
    //     </Dropdown>
    //   ),
    // },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="search-container mb-2">
            <FiSearch className="search-icon-wati" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="search-input-css"
            />
          </div>
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
                pagination={{
                  current: currentPage,
                  pageSize: pageSize,
                  total: total,
                  showSizeChanger: true,
                  showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
                }}
                onChange={handleTableChange}
                className="applied-applicants-table overflow-y-auto"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};