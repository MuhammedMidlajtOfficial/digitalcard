import { Dropdown, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { XAxis, ResponsiveContainer, Bar, BarChart, Tooltip } from "recharts";
import UserAnalysis from "./UserAnalysis";

let jobOverviewData = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 0 },
  { month: "Mar", value: 0 },
  { month: "Apr", value: 0 },
  { month: "May", value: 0 },
  { month: "Jun", value: 0 },
  { month: "Jul", value: 0 },
  { month: "Aug", value: 0 },
  { month: "Sep", value: 0 },
  { month: "Oct", value: 0 },
  { month: "Nav", value: 0 },
  { month: "Dec", value: 0 },
];

const UserActivityGraphs = () => {
  // this is what we will get from the api
  /**
   * {
  "referrals": [
    {
      "year": 2024,
      "month": 1,
      "count": 0
    },
    {
      "year": 2024,
      "month": 2,
      "count": 0
    },
    {
      "year": 2024,
      "month": 3,
      "count": 0
    },
    {
      "year": 2024,
      "month": 4,
      "count": 0
    },
    {
      "year": 2024,
      "month": 5,
      "count": 0
    },
    {
      "year": 2024,
      "month": 6,
      "count": 0
    },
    {
      "year": 2024,
      "month": 7,
      "count": 0
    },
    {
      "year": 2024,
      "month": 8,
      "count": 0
    },
    {
      "year": 2024,
      "month": 9,
      "count": 0
    },
    {
      "year": 2024,
      "month": 10,
      "count": 0
    },
    {
      "year": 2024,
      "month": 11,
      "count": 0
    },
    {
      "year": 2024,
      "month": 12,
      "count": 19
    }
  ]
}
   */
  // Array of month abbreviations
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [referralsData, setReferrasData] = useState([]);
  const [year, setYear] = useState("2024"); // Default period
  
  const handleYearClick = (e) => {
    setYear(e.key); // Update the period state
    // fetchReferralsData(e.key); // Fetch new data based on selected period
  };

  const sortMenu = (
    <Menu onClick={handleYearClick}>
      <Menu.Item key="2024" className="filter-menu-item">
        2024 <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="2023" className="filter-menu-item">
        2023 <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="2022" className="filter-menu-item">
        2022 <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const fetchReferralsData = async (year) => {
    try {
      const response = await fetch(
        `https://diskuss-1mv4.onrender.com/api/v1/referral/admin/monthly?year=${year}`
      );
      const data = await response.json();
      setReferrasData(data.referrals);
    } catch (error) {
      console.error("Error fetching referrals data:", error);
    }
  }

  useEffect(() => {
    fetchReferralsData(year); // Fetch data on initial render
  }, [year]); // Refetch data when period changes

    // Transforming the data
  jobOverviewData = referralsData.referrals.map(referral => ({
    month: monthNames[referral.month - 1], // Month is zero-indexed
    value: referral.count
  }));

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-8 mt-4">
          <div className="application-dashboard-graph flex-column flex-sm-row gap-4 align-items-center">
            <div>
              <div className="d-flex justify-content-between">
                <div className="application-card-share-section">
                  <h2 className="card-title text-start mb-4">New Visitors</h2>
                </div>
                <div className="select-table-container">
                  <Dropdown overlay={sortMenu} trigger={["click"]}>
                    <button className="table-action-btn d-flex gap-2 align-items-center">
                      <span>This year</span>
                      <FaRegCalendar
                        style={{
                          fontWeight: 500,
                          fontSize: "11px",
                          color: "GrayText",
                        }}
                      />
                    </button>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={jobOverviewData} barSize={15}>
                    <XAxis dataKey="month" />
                    <Tooltip
                      formatter={(value) => `${value} visitors`}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Bar dataKey="value" fill="#64abff" radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 mt-4">
          <UserAnalysis />
        </div>
      </div>
    </div>
  );
};

export default UserActivityGraphs;
