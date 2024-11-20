import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const responseRateData = [
  { month: "Jan", email: 50, web: 75, socialMedia: 84 },
  { month: "Feb", email: 40, web: 75, socialMedia: 50 },
  { month: "Mar", email: 40, web: 100, socialMedia: 80 },
  { month: "Apr", email: 40, web: 75, socialMedia: 80 },
  { month: "May", email: 40, web: 30, socialMedia: 60 },
  { month: "Jun", email: 40, web: 80, socialMedia: 40 },
  { month: "Jul", email: 40, web: 20, socialMedia: 60 },
  { month: "Aug", email: 40, web: 50, socialMedia: 90 },
  { month: "Sep", email: 40, web: 75, socialMedia: 50 },
  { month: "Oct", email: 40, web: 20, socialMedia: 80 },
  { month: "Nov", email: 40, web: 75, socialMedia: 80 },
  { month: "Dec", email: 40, web: 20, socialMedia: 60 },
];

const GraphResponseRate = () => {
  return (
    <div className="container">
      <div className="graph-response-rate-container col-lg-12">
        <div className="graph-response-rate-header flex-lg-row flex-xl-row flex-column">
          <h2 className="graph-response-rate-title">Response Rate</h2>
          <div className="graph-response-rate-buttons">
            <button className="graph-response-rate-button">Weekly</button>
            <button className="graph-response-rate-button">Monthly</button>
            <button className="graph-response-rate-button active">
              Yearly
            </button>
          </div>
        </div>
        <div className="graph-response-rate-legend">
          <span className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#C6E6FB" }}
            ></span>{" "}
            Email
          </span>
          <span className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#A3D4F7" }}
            ></span>{" "}
            Web
          </span>
          <span className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#136AD5" }}
            ></span>{" "}
            Social Media
          </span>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={responseRateData}
            barSize={10}
            barGap={5}
            barCategoryGap="55%"
            margin={{ top: 10, right: 10, bottom: 20, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#333" }}
              tickLine={false}
              axisLine={{ stroke: "#ddd" }}
              interval={0}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#333" }}
              tickLine={false}
              axisLine={{ stroke: "#ddd" }}
            />
            <Bar
              dataKey="email"
              fill="#C6E6FB"
              radius={[5, 5, 0, 0]}
              name="Email"
            />
            <Bar
              dataKey="web"
              fill="#A3D4F7"
              radius={[5, 5, 0, 0]}
              name="Web"
            />
            <Bar
              dataKey="socialMedia"
              fill="#136AD5"
              radius={[5, 5, 0, 0]}
              name="Social Media"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphResponseRate;
