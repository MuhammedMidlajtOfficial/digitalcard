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
  { month: "Jan", today: 200, yesterday: 430 },
  { month: "Feb", today: 330, yesterday: 550 },
  { month: "Mar", today: 230, yesterday: 400 },
  { month: "Apr", today: 290, yesterday: 550 },
  { month: "May", today: 230, yesterday: 500 },
  { month: "Jun", today: 330, yesterday: 600 },
  { month: "Jul", today: 200, yesterday: 450 },
  { month: "Aug", today: 350, yesterday: 700 },
  { month: "Sep", today: 400, yesterday: 750 },
  { month: "Oct", today: 550, yesterday: 600 },
  { month: "Nov", today: 450, yesterday: 750 },
  { month: "Dec", today: 750, yesterday: 800 },
];

const UserStaticGraph = () => {
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
                  Today
                </div>
                <div style={{ color: "#b692f6", fontWeight: "bold" }}>
                  Yesterday
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
                      dataKey="today"
                      stroke="#136ad5"
                      fill="#136ad5"
                      fillOpacity={0.2}
                      strokeOpacity={1}
                    />
                    <Area
                      type="monotone"
                      dataKey="yesterday"
                      stroke="#b692f6"
                      fill="#b692f6"
                      fillOpacity={0.2}
                      strokeOpacity={1}
                    />
                    <Line
                      type="monotone"
                      dataKey="today"
                      stroke="#136ad5"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="yesterday"
                      stroke="#b692f6"
                      strokeWidth={2}
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

export default UserStaticGraph;
