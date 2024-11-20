import React from "react";
import RefundCards from "./RefundCards";
import { RefundTable } from "./RefundTable";
import RefundGraph from "./RefundGraph";

const RefundProcessIndex = () => {
  return (
    <div className="view-orders-static">
      <div className="row">
        <RefundCards />
        <RefundGraph />
        <RefundTable />
      </div>
    </div>
  );
};

export default RefundProcessIndex;
