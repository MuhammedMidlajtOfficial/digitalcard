import React from "react";
import ReferralCards from "./ReferralCards";
import ReferralTopWinners from "./ReferralTopWinners";
import ReferralGraph from "./ReferralGraph";
import { ReferralUsers } from "./ReferralUsers";

const ReferralIndex = () => {
  return (
    <div className="application-dashboard-section">
      <ReferralCards />
      <ReferralTopWinners />
      <ReferralGraph />
      <ReferralUsers />
    </div>
  );
};

export default ReferralIndex;
