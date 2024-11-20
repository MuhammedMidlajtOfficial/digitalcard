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
  { month: "Jan", male: 60, female: 90 },
  { month: "Feb", male: 80, female: 110 },
  { month: "Mar", male: 90, female: 100 },
  { month: "Apr", male: 100, female: 130 },
  { month: "May", male: 70, female: 110 },
  { month: "Jun", male: 80, female: 100 },
  { month: "Jul", male: 90, female: 120 },
  { month: "Aug", male: 130, female: 170 },
  { month: "Sep", male: 120, female: 140 },
  { month: "Oct", male: 110, female: 130 },
  { month: "Nov", male: 100, female: 120 },
  { month: "Dec", male: 80, female: 90 },
];

const AllUsersGraphs = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="application-dashboard-graph flex-column flex-sm-row gap-4 align-items-center">
            <div>
              <div className="application-user-static-section">
                <h2 className="card-title text-start mb-4">All Views</h2>
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
                  Male - 60%
                </div>
                <div style={{ color: "#000000", fontWeight: "bold" }}>
                  Female - 40%
                </div>
              </div>
              <div
                className="align-items-center"
                style={{ position: "relative", width: "100%", height: 300 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="1 1" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      stroke="#136ad5"
                      fill="#136ad5"
                      fillOpacity={0.2}
                      strokeOpacity={1}
                    />
                    <Area
                      type="monotone"
                      stroke="#000000"
                      fill="#000000"
                      fillOpacity={0.1}
                      strokeOpacity={1}
                    />
                    <Line
                      type="monotone"
                      dataKey="male"
                      stroke="#136ad5"
                      strokeWidth={3}
                      dot={false} // Removed dots
                    />
                    <Line
                      type="monotone"
                      dataKey="female"
                      stroke="#000000"
                      strokeWidth={3}
                      dot={false} // Removed dots
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

export default AllUsersGraphs;
