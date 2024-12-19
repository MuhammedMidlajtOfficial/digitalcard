import { Dropdown, Menu } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const UserAnalysis = () => {
  const [analyticsData, setAnalyticsData] = useState({
    clicks: 80,
    clickThroughRate: 20,
  });
  const [period, setPeriod] = useState("month"); // Default period

  const fetchAnalyticsData = useCallback(async (selectedPeriod) => {
    try {
      const response = await fetch(
        `https://diskuss-1mv4.onrender.com/api/v1/analytic/all?userId=6731d544ae68862f6cd0e6ad&period=${selectedPeriod}`
      );
      const data = await response.json();
      console.log("data : "+   data);
      setAnalyticsData({
        clicks: data.clicks,
        clickThroughRate: parseFloat(data.clickThroughRate),
      });
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
  });

  useEffect(() => {
    fetchAnalyticsData(period); // Fetch data on initial render
  }, [period, fetchAnalyticsData]); // Refetch data when period changes

  const handleMenuClick = (e) => {
    setPeriod(e.key); // Update the period state
    fetchAnalyticsData(e.key); // Fetch new data based on selected period
  };

  const sortMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="year" className="filter-menu-item">
        Year <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="month" className="filter-menu-item">
        Month <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
      <Menu.Item key="week" className="filter-menu-item">
        Week <IoIosArrowForward className="right-arrow" />
      </Menu.Item>
    </Menu>
  );

  const data = [
    { name: "Click Through Rate", value: analyticsData.clickThroughRate.toLocaleString(undefined, { minimumFractionDigits: 2 }), color: "#64abff" },
    { name: "Link Clicks", value: analyticsData.clicks.toLocaleString(), color: "#d9c1ff" },
  ];

  return (
    <div className="row mb-4">
      <div className="col-lg-12">
        <div className="application-dashboard-graph flex-column flex-sm-row gap-4 align-items-center">
          <div>
            <div className="d-flex justify-content-between">
              <div className="application-card-share-section">
                <h2 className="card-title text-start">Analysis</h2>
              </div>
              <div className="select-table-container">
                <Dropdown overlay={sortMenu} trigger={["click"]}>
                  <button className="table-action-btn d-flex gap-2 align-items-center">
                    <span>{period.charAt(0).toUpperCase() + period.slice(1)}</span>
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
            <div
              className="d-flex gap-2 align-items-center mt-3"
              style={{ width: "100%", height: 300, position: "relative" }}
            >
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={85}
                    outerRadius={100}
                    startAngle={90}
                    endAngle={450}
                    paddingAngle={0}
                    dataKey="value"
                    label={false}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "33%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Last Update
                <div style={{ fontSize: "12px", fontWeight: "normal" }}>
                  {"Oct 29, 2024"}
                </div>
              </div>

              <div className="legend-container" style={{ textAlign: "left" }}>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {data.map((entry, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-center"
                      style={{
                        marginBottom: "10px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: entry.color,
                          display: "inline-block",
                          borderRadius: "50%",
                          marginRight: 10,
                        }}
                      />
                      <span>{entry.name}</span>: {entry.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAnalysis;