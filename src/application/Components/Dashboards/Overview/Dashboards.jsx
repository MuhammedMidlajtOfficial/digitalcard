import React, { useEffect, useState } from "react";
import DashboardCards from "./DashboardCards";
import DashboardGraphs from "./DashboardGraphs";
import { DashboardTable } from "./DashboardTable";
import DashboardNewuser from "./DashboardNewuser";

const Dashboards = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = sessionStorage.getItem("UserName");
    console.log("USER NAME", storedUsername)
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <div className="application-dashboard-section">
      <div className="row dashboard-main-section">
        <h2>Hello, {username}!</h2>
        <p>Have a nice day at great work</p>
      </div>
      <div className="row">
        <DashboardCards />
        <DashboardGraphs />
        <DashboardTable />
        <DashboardNewuser />
      </div>
    </div>
  );
};

export default Dashboards;
