import React, { useEffect, useState } from "react";
import { Table, Pagination, Button, Spin } from "antd";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../AxiosConfig";
import { useLoading } from "../../Services/loadingService";
import { showDeleteMessage } from "../../../globalConstant";

const WatiList = () => {
  const [allWatis, setAllWatis] = useState([]);
  const [filteredWatis, setFilteredWatis] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalWatis, setTotalWatis] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  // Fetch Wati Records
  const fetchWatis = () => {
    startLoading();
    axiosInstance
      .get(`/wati`, {
        params: { page: currentPage, pageSize },
      })
      .then((response) => {
        const data = response.data || [];
        setAllWatis(data);
        setFilteredWatis(data); // Initialize filtered data
        setTotalWatis(response.data.totalCount || 0);
      })
      .catch((error) => {
        console.error("Error fetching watis:", error);
      })
      .finally(() => stopLoading());
  };

  // Delete Wati Record
  const handleDelete = (watiId) => {
    startLoading();
    axiosInstance
      .delete(`/wati/${watiId}`)
      .then(() => fetchWatis())
      .catch((error) => {
        console.error("Error deleting wati:", error);
      })
      .finally(() => stopLoading());
  };

  const openDeleteModal = (watiId) => {
    showDeleteMessage({
      title: "Are you sure you want to delete this Wati record?",
      content: "This action cannot be undone.",
      onDelete: () => handleDelete(watiId),
    });
  };

  const navigateToForm = (watiId = null) => {
    navigate(watiId ? `/admin/createWati?id=${watiId}` : `/admin/createWati`);
  };

  // Search Handler
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter existing table data based on the "url" field
    const filtered = allWatis.filter((wati) =>
      wati.url.toLowerCase().includes(value)
    );
    setFilteredWatis(filtered);
  };

  // Pagination Handler
  const handlePaginationChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  useEffect(() => {
    fetchWatis();
  }, [currentPage, pageSize]);

  // Table Columns
  const columns = [
    { title: "URL", dataIndex: "url" },
    {
      title: "API Key",
      dataIndex: "apiKey",
      render: (text) => (text.length > 20 ? `${text.slice(0, 20)}...` : text),
    },
    {
      title: "Action",
      render: (_, record) => (
        <div className="d-flex gap-2">
          <Button
            type="text"
            icon={<HiOutlinePencilSquare />}
            onClick={() => navigateToForm(record._id)}
            title="Edit"
          />
          <Button
            type="text"
            icon={<MdDeleteOutline />}
            onClick={() => openDeleteModal(record._id)}
            danger
            title="Delete"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="application-users-section mb-4 d-flex justify-content-between">
        <h2>View All Wati Records</h2>
        <button className="add-all-users" onClick={() => navigateToForm()}>
          <FaPlus />
          Add Wati Record
        </button>
      </div>
      {/* <div className="d-flex mb-4 justify-content-between">
        <div className="search-container">
          <FiSearch className="search-icon-wati" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            className="search-input-css"
            onChange={handleSearch}
          />
        </div>
      </div> */}
      {loading ? (
        <Spin size="large" className="d-flex justify-content-center mt-5" />
      ) : (
        <Table
          columns={columns}
          dataSource={filteredWatis.map((wati, idx) => ({ ...wati, key: idx }))}
          pagination={{
            current: currentPage,
            pageSize,
            total: filteredWatis.length,
            onChange: handlePaginationChange,
            showSizeChanger: true,
            pageSizeOptions: [12, 24, 60, 120],
          }}
        />
      )}
    </div>
  );
};

export default WatiList;
