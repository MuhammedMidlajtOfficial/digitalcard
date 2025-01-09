import React, { useEffect, useState } from "react";
import { Table, Pagination, Button, Dropdown, Menu, Spin } from "antd";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../AxiosConfig";
import { useLoading } from "../../Services/loadingService";
import { showDeleteMessage } from "../../../globalConstant";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";

const WatiList = () => {
  const [allWatis, setAllWatis] = useState([]);
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
        params: { page: currentPage, pageSize, search: searchTerm },
      })
      .then((response) => {
        setAllWatis(response.data || []);
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
    if (watiId) {
      navigate(`/admin/createWati?id=${watiId}`);
    } else {
      navigate(`/admin/createWati`);
    }
  };

  // Search Handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

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

  useEffect(() => {
    fetchWatis();
  }, [currentPage, pageSize, searchTerm]);

  return (
    <div className="container">
      <div className="application-users-section mb-4 d-flex justify-content-between">
        <h2>View All Wati Records</h2>
        <button className="add-all-users" onClick={() => navigateToForm()}>
          <FaPlus />
          Add Wati Record
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
          />
        </div>
      </div>
      {loading ? (
        <Spin size="large" className="d-flex justify-content-center mt-5" />
      ) : (
        <Table
          columns={columns}
          dataSource={allWatis.map((wati, idx) => ({ ...wati, key: idx }))}
          pagination={{
            current: currentPage,
            pageSize,
            total: totalWatis,
            onChange: (page, size) => {
              setCurrentPage(page);
              setPageSize(size);
            },
            showSizeChanger: true,
            pageSizeOptions: [12, 24, 60, 120],
          }}
        />
      )}
    </div>
  );
};

export default WatiList;
