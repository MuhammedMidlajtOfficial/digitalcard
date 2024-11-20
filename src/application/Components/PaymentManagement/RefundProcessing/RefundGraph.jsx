import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { month: "Jan", totalRefunds: 60, averageRefunds: 40 },
  { month: "Feb", totalRefunds: 100, averageRefunds: 70 },
  { month: "Mar", totalRefunds: 150, averageRefunds: 90 },
  { month: "Apr", totalRefunds: 240, averageRefunds: 140 },
  { month: "May", totalRefunds: 80, averageRefunds: 60 },
  { month: "Jun", totalRefunds: 120, averageRefunds: 100 },
  { month: "Jul", totalRefunds: 200, averageRefunds: 160 },
  { month: "Aug", totalRefunds: 340, averageRefunds: 210 },
  { month: "Sep", totalRefunds: 180, averageRefunds: 140 },
  { month: "Oct", totalRefunds: 200, averageRefunds: 160 },
  { month: "Nov", totalRefunds: 100, averageRefunds: 60 },
  { month: "Dec", totalRefunds: 60, averageRefunds: 40 },
];

const RefundGraph = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="application-dashboard-graph flex-column flex-sm-row gap-4 align-items-center">
            <div>
              <div className="application-user-static-section">
                <h2 className="card-title text-start mb-4">
                  Daily Time Log Activity
                </h2>
              </div>
              <div
                className="graph-labels"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <div style={{ color: "#136ad5", fontWeight: "bold" }}>
                  Total Refunds amount
                </div>
                <div style={{ color: "#000", fontWeight: "bold" }}>
                  Average Refunds Amount
                </div>
              </div>
              <div
                className="align-items-center"
                style={{ position: "relative", width: "100%", height: 300 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "#555", fontWeight: "bold" }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="totalRefunds"
                      stroke="#136ad5"
                      fill="#136ad5"
                      fillOpacity={0.1}
                    />
                    <Area
                      type="monotone"
                      dataKey="averageRefunds"
                      stroke="#000"
                      fill="#000"
                      fillOpacity={0.1}
                    />
                    <Line
                      type="monotone"
                      dataKey="totalRefunds"
                      stroke="#136ad5"
                      strokeWidth={3}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="averageRefunds"
                      stroke="#000"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundGraph;
