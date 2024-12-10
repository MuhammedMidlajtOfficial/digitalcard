import React from "react";
import RenewalCards from "./RenewalCards";
import RenewalTable from "./RenewalTable";

const RenewalAndReminderIndex = () => {
  return (
    <div className="view-orders-static">
      <div className="row">
        <RenewalCards />
        <RenewalTable />
      </div>
    </div>
  );
};

export default RenewalAndReminderIndex;
