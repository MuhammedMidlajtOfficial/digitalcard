import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import {axiosInstance} from "../../../../AxiosConfig";

const DashboardGraphs = () => {
  const [totalUsers, setTotalUsers] = useState('');
  const [jobOverviewData, setJobOverviewData] = useState('');
  
  useEffect(() => {
    // getTotalCount 
    axiosInstance.get('dashboard/getTotalCount')
    .then((response)=>{
      setTotalUsers(response.data.totalUser)
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
  });
    // getTotalCount 
    axiosInstance.get('dashboard/getJobOverviewData')
    .then((response)=>{
      setJobOverviewData(response.data.jobOverviewData)
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
  });
  }, []);
  
  
  // const jobOverviewData = [
  //   { month: "Jan", 2022: 120, 2023: 400, 2024: 500 },
  //   { month: "Feb", 2022: 300, 2023: 332, 2024: 110 },
  //   { month: "Mar", 2022: 120, 2023: 400, 2024: 500 },
  //   { month: "Apr", 2022: 300, 2023: 332, 2024: 110 },
  //   { month: "May", 2022: 120, 2023: 400, 2024: 500 },
  //   { month: "Jun", 2022: 300, 2023: 332, 2024: 110 },
  //   { month: "Jul", 2022: 120, 2023: 400, 2024: 500 },
  //   { month: "Aug", 2022: 300, 2023: 332, 2024: 110 },
  //   { month: "Sep", 2022: 120, 2023: 400, 2024: 500 },
  //   { month: "Oct", 2022: 300, 2023: 332, 2024: 110 },
  //   { month: "Nov", 2022: 120, 2023: 400, 2024: 500 },
  //   { month: "Dec", 2022: 300, 2023: 332, 2024: 110 },
  // ];
  
  const data = [
    { name: "2024", value: totalUsers, color: "#2a84ff" },
    { name: "2025", value: 0, color: "#9cc5ff" },
    { name: "2026", value: 0, color: "#d5e7ff" },
  ];


  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="application-dashboard-graph d-flex flex-column flex-sm-row gap-4 align-items-center">
            <div>
              <div className="application-dashboard-title">
                <h2 className="card-title text-start mb-2">
                  Total Active Users
                </h2>
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
                    <Pie
                      data={[data[2]]}
                      dataKey="value"
                      innerRadius={50}
                      outerRadius={60}
                      fill={data[2].color}
                      paddingAngle={5}
                    >
                      <Cell key={`cell-2`} fill={data[2].color} />
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
                      fontSize: "14px",
                      color: "GrayText",
                    }}
                  >
                    Active Users
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "22px",
                      color: "black",
                    }}
                  >
                    { totalUsers }
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
                  <Tooltip formatter={(value) => `${value} users`}/>
                  <Bar
                    dataKey="2024"
                    stackId="a"
                    fill="#2a84ff"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar
                    dataKey="2025"
                    stackId="a"
                    fill="#9cc5ff"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar
                    dataKey="2026"
                    stackId="a"
                    fill="#d5e7ff"
                    radius={[4, 4, 0, 0]}
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

export default DashboardGraphs;
