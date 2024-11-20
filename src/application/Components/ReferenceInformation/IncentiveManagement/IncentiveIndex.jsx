import React from "react";
import { CurrentIncentivePlan } from "./CurrentIncentivePlan";
import { WithdrawRequest } from "./WithdrawRequest";
import { WithdrawHistory } from "./WithdrawnHistory";

const IncentiveIndex = () => {
  return (
    <div>
      <div>
        <CurrentIncentivePlan />
        <WithdrawRequest />
        <WithdrawHistory />
      </div>
    </div>
  );
};

export default IncentiveIndex;
