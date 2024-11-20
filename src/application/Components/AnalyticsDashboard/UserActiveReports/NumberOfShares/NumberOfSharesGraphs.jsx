import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Button, Space } from "antd";

const jobOverviewData = [
  { month: "Jan", debitCard: 60, creditCard: 40 },
  { month: "Feb", debitCard: 80, creditCard: 50 },
  { month: "Mar", debitCard: 100, creditCard: 70 },
  { month: "Apr", debitCard: 75, creditCard: 45 },
  { month: "May", debitCard: 90, creditCard: 55 },
  { month: "Jun", debitCard: 80, creditCard: 40 },
  { month: "Jul", debitCard: 95, creditCard: 60 },
  { month: "Aug", debitCard: 70, creditCard: 45 },
  { month: "Sep", debitCard: 85, creditCard: 55 },
  { month: "Oct", debitCard: 60, creditCard: 35 },
  { month: "Nov", debitCard: 100, creditCard: 70 },
  { month: "Dec", debitCard: 65, creditCard: 50 },
];

const NumberOfSharesGraphs = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="application-dashboard-graph flex-column flex-sm-row gap-4 align-items-center">
            <div className="application-user-static-section">
              <h2 className="card-title text-start mb-3">Number of Shares</h2>
            </div>

            <div
              className="period-buttons"
              style={{ marginBottom: "10px", textAlign: "right" }}
            >
              <Space>
                <Button type="text">Weekly</Button>
                <Button type="text">Monthly</Button>
                <Button type="primary">Yearly</Button>
              </Space>
            </div>

            <div className="card-body">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={jobOverviewData} barSize={10}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="debitCard"
                    name="Debit Card - 60%"
                    fill="#2a84ff"
                    radius={[5, 5, 0, 0]}
                  />
                  <Bar
                    dataKey="creditCard"
                    name="Credit Card - 40%"
                    fill="#8dbaf8"
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

export default NumberOfSharesGraphs;
