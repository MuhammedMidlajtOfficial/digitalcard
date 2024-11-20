import { Button, Dropdown, Menu, Space } from "antd";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const jobOverviewData = [
  { month: "Jan", 2022: 120, 2023: 300, 2024: 400 },
  { month: "Feb", 2022: 100, 2023: 200, 2024: 110 },
  { month: "Mar", 2022: 120, 2023: 350, 2024: 300 },
  { month: "Apr", 2022: 200, 2023: 232, 2024: 110 },
  { month: "May", 2022: 200, 2023: 400, 2024: 500 },
  { month: "Jun", 2022: 300, 2023: 332, 2024: 110 },
];

const period = (
  <Menu>
    <Menu.Item key="1">This Year</Menu.Item>
    <Menu.Item key="2">Last Year</Menu.Item>
  </Menu>
);

const RecentActivityGraph = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="application-dashboard-graph flex-column flex-sm-row gap-4 align-items-center">
            <div className="application-user-static-section">
              <h2 className="card-title text-start mb-3">
                Weekly Log Activity
              </h2>
            </div>
            <div className="d-flex justify-content-between">
              <p className="recent-activity-date">From Dec 09 - Dec 23</p>
              <div className="">
                <Dropdown overlay={period} placement="bottomLeft">
                  <Button
                    style={{
                      color: "#000",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      fontWeight: 600,
                    }}
                  >
                    <Space>
                      <span style={{ marginRight: "3px" }}>Date</span>
                      <FaAngleDown
                        style={{ fontSize: "14px", color: "#000" }}
                      />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={jobOverviewData} barSize={15}>
                  <CartesianGrid strokeDasharray="1 1" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis
                    label={{
                      value: "Active Users",
                      angle: -90,
                      position: "insideLeft",
                      style: {
                        textAnchor: "middle",
                        fontWeight: 500,
                        fontSize: "16px",
                        fill: "black",
                      },
                    }}
                  />
                  <Bar dataKey="2022" fill="#136ad5" radius={[5, 5, 0, 0]} />
                  <Bar dataKey="2023" fill="#d6bbfb" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityGraph;
