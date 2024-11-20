import { Tooltip } from "antd";
import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const jobOverviewData = [
  { month: "Jan", High: 120, Medium: 400, Low: 500 },
  { month: "Feb", High: 300, Medium: 332, Low: 110 },
  { month: "Mar", High: 120, Medium: 400, Low: 500 },
  { month: "Apr", High: 300, Medium: 332, Low: 110 },
  { month: "May", High: 120, Medium: 400, Low: 500 },
  { month: "Jun", High: 300, Medium: 332, Low: 110 },
  { month: "Jul", High: 120, Medium: 400, Low: 500 },
  { month: "Aug", High: 300, Medium: 332, Low: 110 },
  { month: "Sep", High: 120, Medium: 400, Low: 500 },
  { month: "Oct", High: 300, Medium: 332, Low: 110 },
  { month: "Nov", High: 120, Medium: 400, Low: 500 },
  { month: "Dec", High: 300, Medium: 332, Low: 110 },
];
const doughnutData = [
  { name: "Unsubscribe", value: 150, color: "#9F64FF" },
  { name: "Bounce", value: 250, color: "#F5F0FF" },
];
const CampaignAnalyticsGraphs = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="d-flex flex-column flex-sm-row gap-4 align-items-center">
            <div className="card-body application-dashboard-graph">
              <div className="d-flex align-items-center justify-content-between">
                <p className="campaign-analysis-graph-heading-p mb-2">
                  Open rate over time
                </p>
                <p className="campaign-analysis-graph-year">
                  This year{" "}
                  <span>
                    <AiTwotoneCalendar />
                  </span>
                </p>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={jobOverviewData} barSize={18}>
                  <XAxis dataKey="month" />
                  <Tooltip />
                  <Bar
                    dataKey="High"
                    stackId="a"
                    fill="#2a84ff"
                    radius={[2, 2, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="application-dashboard-graph">
              <div className="d-flex gap-1 align-items-center justify-content-between">
                <p className="campaign-analysis-graph-heading-p mb-2">
                  Bounce/Unsubscribe{" "}
                </p>
                <p className="campaign-analysis-graph-year mb-1">
                  Month{" "}
                  <span>
                    <AiTwotoneCalendar />
                  </span>
                </p>
              </div>
              <div
                className="align-items-center"
                style={{ position: "relative" }}
              >
                <ResponsiveContainer width={200} height={225}>
                  <PieChart>
                    <Tooltip />
                    <Pie
                      data={doughnutData}
                      dataKey="value"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={15}
                    >
                      {doughnutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "34%",
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
                    Percentage
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 text-start">
                {doughnutData.map((entry, index) => (
                  <div key={index} className="d-flex align-items-center mb-2">
                    <div
                      className="rounded-circle me-2"
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: entry.color,
                      }}
                    />
                    <span className="SLArackingGraph-entryName">
                      {entry.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignAnalyticsGraphs;
