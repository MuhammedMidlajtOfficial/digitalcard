import React from "react";
import NumberOfSharesGraphs from "./NumberOfSharesGraphs";
import NumberOfSharesTable from "./NumberOfSharesTable";

const NumberOfSharesIndex = () => {
  return (
    <div className="user-active-report-static">
      <div className="row">
        <NumberOfSharesGraphs />
        <NumberOfSharesTable />
      </div>
    </div>
  );
};

export default NumberOfSharesIndex;
