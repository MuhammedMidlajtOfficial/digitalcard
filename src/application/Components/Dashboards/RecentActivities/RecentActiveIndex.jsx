import React from "react";
import RecentActivityCards from "./RecentActivityCards";
import RecentActivityGraph from "./RecentActivityGraph";
import { RecentActivityTable } from "./RecentActivityTable";
const RecentActiveIndex = () => {
  return (
    <div className="recent-activities-static">
      <div className="row">
        <RecentActivityCards />
        <RecentActivityGraph />
        <RecentActivityTable />
      </div>
    </div>
  );
};

export default RecentActiveIndex;
