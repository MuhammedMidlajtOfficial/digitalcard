import React from "react";
import { Dropdown, Menu } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jan", Premium: 400, Gold: 310, Free: 210 },
  { month: "Feb", Premium: 390, Gold: 330, Free: 230 },
  { month: "Mar", Premium: 400, Gold: 355, Free: 245 },
  { month: "Apr", Premium: 460, Gold: 370, Free: 260 },
  { month: "May", Premium: 480, Gold: 390, Free: 275 },
  { month: "Jun", Premium: 500, Gold: 410, Free: 290 },
  { month: "Jul", Premium: 550, Gold: 435, Free: 315 },
  { month: "Aug", Premium: 570, Gold: 450, Free: 330 },
  { month: "Sep", Premium: 590, Gold: 470, Free: 345 },
  { month: "Oct", Premium: 610, Gold: 490, Free: 360 },
  { month: "Nov", Premium: 580, Gold: 465, Free: 340 },
  { month: "Dec", Premium: 600, Gold: 475, Free: 350 },
];
const sortMenu = (
  <Menu>
    <Menu.Item key="datePosted" className="filter-menu-item">
      ABC <IoIosArrowForward className="right-arrow" />
    </Menu.Item>
    <Menu.Item key="jobType" className="filter-menu-item">
      EFG <IoIosArrowForward className="right-arrow" />
    </Menu.Item>
  </Menu>
);
const StatusCategoriesGraph = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="status-categories">Status Categories</h1>
        <div className="col-lg-12">
          <div className="application-dashboard-graph flex-column flex-sm-row gap-4 mt-2 align-items-center">
            <div className="d-flex mb-4 flex-lg-row flex-xl-row flex-column justify-content-between gap-4">
              <div className="application-user-static-section">
                <h2 className="card-title text-start mb-4">
                  Daily time Status Activity
                </h2>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div className="premium-span">
                  <h6 style={{ display: "flex", alignItems: "center" }}>
                    <span></span>
                    Premium
                  </h6>
                </div>
                <div className="gold-span">
                  <h6 style={{ display: "flex", alignItems: "center" }}>
                    <span></span>
                    Gold
                  </h6>
                </div>
                <div className="free-span">
                  <h6 style={{ display: "flex", alignItems: "center" }}>
                    <span></span>
                    Free
                  </h6>
                </div>
                <div className="search-table-container">
                  <Dropdown overlay={sortMenu} trigger={["click"]}>
                    <button className="table-action-btn d-flex gap-2 align-items-center">
                      <span>Day</span>
                      <FaAngleDown
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
            </div>
            <div
              className="align-items-center"
              style={{ position: "relative", width: "100%", height: 300 }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient
                      id="colorPremium"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#5c29d7" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#5c29d7" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f0b429" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#f0b429" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorFree" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#136ad5" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#136ad5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Premium"
                    stroke="#5c29d7"
                    fill="url(#colorPremium)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="Gold"
                    stroke="#f0b429"
                    fill="url(#colorGold)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="Free"
                    stroke="#136ad5"
                    fill="url(#colorFree)"
                    strokeWidth={2}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCategoriesGraph;
