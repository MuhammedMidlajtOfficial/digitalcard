import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Table, Avatar, Button, Spin, message, Select } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import {axiosInstance} from "../../../../AxiosConfig";
import { Option } from "antd/es/mentions";
import { showErrorToast, showSuccessToast } from "../../../Services/toastService";


export const ManagePaymentsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/payment");
      console.log("PAYMENT DETAILS:", response.data)


      // Map the response data to the table format
      setFilteredData(
        response.data.map((item, index) => ({
          key: index,
          username: {
            name: item.user?.name || "Unknown", // Fetch the user name
            image: item.user?.image || null,   // Fetch the user image
          },
          paymentid: item.subscription?.razorpayOrderId || "N/A", // Fetch Razorpay Order ID
          date: new Date(item.subscription?.startDate), // Format start date
          paymethod: "Razorpay", // Hardcoded payment method
          status: item.subscription?.status || "pending", // Subscription status
          transactionid: (item.subscription?.payment && item.subscription.payment[0]) || "N/A",
          subscriptionId: item.subscription?._id || "NA",
        }))
      );
      setData(
        response.data.map((item, index) => ({
          key: index,
          username: {
            name: item.user?.name || "Unknown", // Fetch the user name
            image: item.user?.image || null,   // Fetch the user image
          },
          paymentid: item.subscription?.razorpayOrderId || "N/A", // Fetch Razorpay Order ID
          date: new Date(item.subscription?.startDate), // Format start date
          paymethod: "Razorpay", // Hardcoded payment method
          status: item.subscription?.status || "Pending", // Subscription status
          transactionid: (item.subscription?.payment && item.subscription.payment[0]) || "N/A",
          subscriptionId: item.subscription?._id || "NA",
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

  useEffect(() => {
    // Filter logic for search
    const filtered = data.filter((item) => {
      const lowerCaseTerm = searchTerm.toLowerCase();
      return (
        item.username.name.toLowerCase().includes(lowerCaseTerm) ||
        item.transactionid.toLowerCase().includes(lowerCaseTerm)
      );
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleFilter = (status) => {
    const filter = data.filter((payment) => payment.status === status);
    setFilteredData(filter);
  }

  const filterMenu = (
    <Menu>
      <Menu.Item
        key="active"
        className="filter-menu-item"
        style={{ color: "green", fontWeight: "600" }}
        onClick={() => { handleFilter("active") }}
      >
        Active
      </Menu.Item>
      <Menu.Item
        key="inactive"
        className="filter-menu-item"
        style={{ color: "red", fontWeight: "600" }}
        onClick={() => { handleFilter("inactive") }}
      >
        Inactive
      </Menu.Item>
      <Menu.Item
        key="pending"
        className="filter-menu-item"
        style={{ color: "orange", fontWeight: "600" }}
        onClick={() => { handleFilter("pending") }}
      >
        Pending
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
        onClick={() => { setFilteredData(data) }}
      >
        Reset
      </Menu.Item>
    </Menu>
  );

  const handleSort = (sortBy) => {
    const sortedData = [...filteredData].sort((a, b) => {
      const dateA = a.date;
      const dateB = b.date;

      if (sortBy === "newest") {
        return dateB - dateA;
      } else if (sortBy === "oldest") {
        return dateA - dateB;
      }
      return 0;
    });

    setFilteredData(sortedData)
  }

  const sortMenu = (
    <Menu>
      <Menu.Item
        key="newest"
        className="filter-menu-item"
        style={{ color: "blue", fontWeight: "600" }}
        onClick={() => { handleSort("newest") }}
      >
        Newest First <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item
        key="oldest"
        className="filter-menu-item"
        style={{ color: "gray", fontWeight: "600" }}
        onClick={() => { handleSort("oldest") }}
      >
        Oldest First <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const actionMenu = (record) => (
    <Menu>
      {/* <Menu.Item
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
      </Menu.Item> */}
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
  


  const columns = [
    {
      title: "Payer Name",
      dataIndex: "username",
      render: (username) => (
        <div className="d-flex align-items-center">
          <Avatar src={username.image || null}
            icon={!username.image ? <UserOutlined /> : null}
            size={40} className="me-2" />
          {username.name}
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
      render: (date) => date.toLocaleDateString()
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
      render: (status, record) => (
        <Select
          value={status}
          onChange={(value) => handleStatusChange(value, record)}
          className="custom-select-status"
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
          placeholder="Select Status"
        >
          <Option value="active">Active</Option>
          <Option value="pending">Pending</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      ),
    }
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
          <div className="search-container" style={{ marginBottom: "15px" }}>
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="create-survey-search-input"
              value={searchTerm} // Bind search term
              onChange={(e) => setSearchTerm(e.target.value)} // Update state on input
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
                dataSource={filteredData}
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
