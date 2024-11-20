import React from "react";
import UniqueVisitorsGraphs from "./UniqueVisitorsGraphs";
import UniqueVisitorsTable from "./UniqueVisitorsTable";

const UniqueVisitorsIndex = () => {
  return (
    <div className="user-active-report-static">
      <div className="row">
        <UniqueVisitorsGraphs />
        <UniqueVisitorsTable />
      </div>
    </div>
  );
};

export default UniqueVisitorsIndex;
