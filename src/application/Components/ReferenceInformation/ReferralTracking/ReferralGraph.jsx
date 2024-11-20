import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", newUsers: 50, oldUsers: 40 },
  { month: "Feb", newUsers: 120, oldUsers: 80 },
  { month: "Mar", newUsers: 90, oldUsers: 70 },
  { month: "Apr", newUsers: 244, oldUsers: 120 },
  { month: "May", newUsers: 70, oldUsers: 60 },
  { month: "Jun", newUsers: 100, oldUsers: 80 },
  { month: "Jul", newUsers: 344, oldUsers: 200 },
  { month: "Aug", newUsers: 150, oldUsers: 100 },
  { month: "Sep", newUsers: 80, oldUsers: 60 },
  { month: "Oct", newUsers: 110, oldUsers: 90 },
  { month: "Nov", newUsers: 90, oldUsers: 70 },
  { month: "Dec", newUsers: 70, oldUsers: 50 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "5px",
          border: "1px solid #d3d3d3",
          borderRadius: "5px",
        }}
      >
        <p style={{ color: payload[0].color }}>{`${(value / 10).toFixed(
          1
        )} K`}</p>
      </div>
    );
  }
  return null;
};

const ReferralGraph = () => {
  return (
    <div className="container mt-5">
      <div className="referral-graph-main flex-lg-row flex-xl-row flex-column">
        <div className="graph-labels mb-2 d-flex justify-content-between align-items-center flex-lg-row flex-xl-row flex-column">
          <div className="d-flex gap-2 ">
            <h6 className="text-start mb-4 fs-20 fw-bold">Overview</h6>
            <span>
              <a style={{ color: "var(--gradient-start-color)" }}>●</a> New
              Users - 60%
            </span>
            <span>● Old Users - 40%</span>
          </div>
          <div className="d-flex gap-2">
            <button className="referral-graph-button-yearly">Year</button>
            <button className="referral-graph-button-monthly">Monthly</button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorNewUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4285F4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4285F4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorOldUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#000000" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#000000" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="newUsers"
              stroke="#4285F4"
              fill="url(#colorNewUsers)"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="oldUsers"
              stroke="#000000"
              fill="url(#colorOldUsers)"
              fillOpacity={0.1}
            />
            <Line
              type="monotone"
              dataKey="newUsers"
              stroke="#4285F4"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="oldUsers"
              stroke="#000000"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReferralGraph;
