import React from "react";
import UserActivityReportCard from "./UserActivityReportCard";
import { UserActivityReportTable } from "./UserActivityReportTable";
import UserActivityGraphs from "./UserActivityGraphs";

const UserActivityIndex = () => {
  return (
    <div className="user-active-report-static">
      <div className="row dashboard-main-section">
        <h2>Overview of Analytics</h2>
      </div>
      <div className="row">
        <UserActivityReportCard />
        <UserActivityGraphs />
        <UserActivityReportTable />
      </div>
    </div>
  );
};

export default UserActivityIndex;
