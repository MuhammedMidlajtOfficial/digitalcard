import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const jobOverviewData = [
  { month: "Jan", Male: 120, Female: 400 },
  { month: "Feb", Male: 300, Female: 332 },
  { month: "Mar", Male: 120, Female: 400 },
  { month: "Apr", Male: 300, Female: 332 },
  { month: "May", Male: 120, Female: 400 },
  { month: "Jun", Male: 300, Female: 332 },
  { month: "Jul", Male: 120, Female: 400 },
  { month: "Aug", Male: 300, Female: 332 },
  { month: "Sep", Male: 120, Female: 400 },
  { month: "Oct", Male: 300, Female: 332 },
  { month: "Nov", Male: 120, Female: 400 },
  { month: "Dec", Male: 300, Female: 332 },
];

const data = [
  { name: "Male", value: 300, color: "#2a84ff" },
  { name: "Female", value: 300, color: "#3c3c3c" },
];

const UniqueVisitorsGraphs = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="application-dashboard-graph d-flex flex-column flex-sm-row gap-4 align-items-center">
            <div>
              <div className="application-dashboard-title">
                <h2 className="card-title text-start mb-2">Unique Visitors</h2>
              </div>
              <div
                className="align-items-center"
                style={{ position: "relative" }}
              >
                <ResponsiveContainer width={200} height={225}>
                  <PieChart>
                    <Pie
                      data={[data[0]]}
                      dataKey="value"
                      innerRadius={90}
                      outerRadius={100}
                      fill={data[0].color}
                      paddingAngle={5}
                    >
                      <Cell key={`cell-0`} fill={data[0].color} />
                    </Pie>
                    <Pie
                      data={[data[1]]}
                      dataKey="value"
                      innerRadius={70}
                      outerRadius={80}
                      fill={data[1].color}
                      paddingAngle={5}
                    >
                      <Cell key={`cell-1`} fill={data[1].color} />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "45%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "12px",
                      color: "GrayText",
                    }}
                  >
                    Last Update
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    Nov 24,
                  </div>
                </div>
              </div>
              <div className="d-flex gap-4 text-start">
                {data.map((entry, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center justify-content-center mb-2"
                  >
                    <div
                      className="rounded-circle me-2"
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: entry.color,
                      }}
                    />
                    <span className="">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={jobOverviewData} barSize={20}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar
                    dataKey="Male"
                    stackId="a"
                    fill="#2a84ff"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar
                    dataKey="Female"
                    stackId="a"
                    fill="#3c3c3c"
                    radius={[5, 5, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueVisitorsGraphs;
