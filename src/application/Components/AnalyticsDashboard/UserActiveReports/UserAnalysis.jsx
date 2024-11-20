import { Dropdown, Menu } from "antd";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Click through rate", value: 80, color: "#64abff" },
  { name: "Link Clicks", value: 20, color: "#d9c1ff" },
];

const sortMenu = (
  <Menu>
    <Menu.Item key="jan" className="filter-menu-item">
      Jan <IoIosArrowForward className="right-arrow" />
    </Menu.Item>
    <Menu.Item key="feb" className="filter-menu-item">
      Feb <IoIosArrowForward className="right-arrow" />
    </Menu.Item>
    <Menu.Item key="mar" className="filter-menu-item">
      Mar <IoIosArrowForward className="right-arrow" />
    </Menu.Item>
  </Menu>
);

const UserAnalysis = () => {
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
                    <span>This month</span>
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
                  Oct 29, 2024
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
                      <span>{entry.name}</span>
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
