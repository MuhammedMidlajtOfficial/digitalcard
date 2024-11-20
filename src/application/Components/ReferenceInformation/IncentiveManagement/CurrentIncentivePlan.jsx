import React, { useState } from "react";
import { Table, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiSearch } from "react-icons/fi";
import { TbArrowsDownUp } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import AddIncentiveForm from "./AddIncentiveForm";
export const CurrentIncentivePlan = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const filterMenu = (
    <Menu>
      <Menu.Item key="certifications">ABC</Menu.Item>
      <Menu.Item key="employment-type">EFG</Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu>
      <Menu.Item key="datePosted">ABC</Menu.Item>
      <Menu.Item key="jobType">EFG</Menu.Item>
    </Menu>
  );

  const actionMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate("/admin/incentive/edit")}>
        Edit
      </Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Incentive Amount",
      dataIndex: "incentiveAmount",
    },
    {
      title: "Max",
      dataIndex: "max",
    },
    {
      title: "Rewards Type",
      dataIndex: "rewardsType",
    },
    {
      title: "Min Payout",
      dataIndex: "minPayout",
    },
    {
      title: "For Every Referral",
      dataIndex: "referral",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Dropdown overlay={actionMenu} trigger={["click"]}>
          <span style={{ cursor: "pointer" }}>...</span>
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      incentiveAmount: "₹ 250",
      max: "₹ 10,000",
      rewardsType: "Cash",
      minPayout: "₹ 5,000",
      referral: "₹ 250",
    },
    {
      key: "2",
      incentiveAmount: "₹ 250",
      max: "₹ 10,000",
      rewardsType: "Cash",
      minPayout: "₹ 5,000",
      referral: "₹ 250",
    },
    {
      key: "3",
      incentiveAmount: "₹ 250",
      max: "₹ 10,000",
      rewardsType: "Cash",
      minPayout: "₹ 5,000",
      referral: "₹ 250",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between current-incentive-plan-head">
          <h4>Current Incentive Plans</h4>
          <button onClick={showModal} className="create-btn">
            <GoPlus />
            Add Incentive
          </button>
        </div>
        <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4 mt-4">
        <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="create-survey-search-input"
            />
          </div>

          <div className="search-table-container d-flex gap-2">
            <Dropdown overlay={filterMenu} trigger={["click"]}>
              <button className="table-action-btn d-flex gap-2 align-items-center">
                <span>Filter</span>
                <FiFilter style={{ fontSize: "14px", color: "GrayText" }} />
              </button>
            </Dropdown>
            <Dropdown overlay={sortMenu} trigger={["click"]}>
              <button className="table-action-btn d-flex gap-2 align-items-center">
                <span>Sort By</span>
                <TbArrowsDownUp
                  style={{ fontSize: "14px", color: "GrayText" }}
                />
              </button>
            </Dropdown>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="application-table-section">
            <h6>Current Incentive Plan</h6>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              className="applied-applicants-table overflow-y-auto"
            />
          </div>
        </div>
        <AddIncentiveForm open={isModalOpen} handleCancel={handleCancel} />
      </div>
    </div>
  );
};

export default CurrentIncentivePlan;
