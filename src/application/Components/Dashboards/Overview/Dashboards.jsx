import React, { useEffect, useState } from "react";
import DashboardCards from "./DashboardCards";
import DashboardGraphs from "./DashboardGraphs";
import { DashboardTable } from "./DashboardTable";
import DashboardNewuser from "./DashboardNewuser";
import { useDispatch, useSelector } from "react-redux";

const Dashboards = () => {
  const [username, setUsername] = useState("");
  const userData = useSelector((state) => state?.user?.userData);
  useEffect(() => {
    const storedUsername = localStorage.getItem("UserName");
    console.log("USER NAME", storedUsername)
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const UserName = userData?.username ||username;
  console.log("STATE USER NAME", UserName)

  return (
    <div className="application-dashboard-section">
      <div className="row dashboard-main-section">
        <h2>Hello, {UserName}!</h2>
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
