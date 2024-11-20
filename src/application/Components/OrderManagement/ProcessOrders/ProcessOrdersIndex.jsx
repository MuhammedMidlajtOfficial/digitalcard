import React from "react";
import ProcessOrdersCard from "./ProcessOrdersCard";
import { ProcessOrdersTable } from "./ProcessOrdersTable";

const ProcessOrdersIndex = () => {
  return (
    <div className="process-orders-static">
      <div className="row">
        <ProcessOrdersCard />
        <ProcessOrdersTable />
      </div>
    </div>
  );
};

export default ProcessOrdersIndex;
