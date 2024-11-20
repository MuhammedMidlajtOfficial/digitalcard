import React from "react";
import AllUsersGraphs from "./AllUsersGraphs";
import { AllUsersTable } from "./AllUsersTable";

const AllUsersIndex = () => {
  return (
    <div className="user-active-report-static">
      <div className="row">
        <AllUsersGraphs />
        <AllUsersTable />
      </div>
    </div>
  );
};

export default AllUsersIndex;
