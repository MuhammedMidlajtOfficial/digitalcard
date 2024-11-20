import { Dropdown, Menu } from "antd";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { XAxis, ResponsiveContainer, Bar, BarChart, Tooltip } from "recharts";
import UserAnalysis from "./UserAnalysis";

const jobOverviewData = [
  { month: "Jan", value: 300 },
  { month: "Feb", value: 180 },
  { month: "Mar", value: 400 },
  { month: "Apr", value: 250 },
  { month: "May", value: 320 },
  { month: "Jun", value: 450 },
  { month: "Jul", value: 100 },
  { month: "Aug", value: 400 },
  { month: "Sep", value: 250 },
  { month: "Oct", value: 320 },
  { month: "Nav", value: 450 },
  { month: "Dec", value: 100 },
];

const UserActivityGraphs = () => {
  const sortMenu = (
    <Menu>
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
