import React from "react";
import BillingHistoryCards from "./BillingHistoryCards";
import { BillingHistoryTable } from "./BillingHistoryTable";

const BillingHistoryIndex = () => {
  return (
    <div className="view-orders-static">
      <div className="row">
        <BillingHistoryCards />
        <BillingHistoryTable />
      </div>
    </div>
  );
};

export default BillingHistoryIndex;
