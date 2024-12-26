import React from "react";
import CardSharesCards from "./CardSharesCards";
import CardSharesGraph from "./CardSharesGraph";
import { CardSharesTable } from "./CardSharesTable";
const CardSharesIndex = () => {
  return (
    <div className="card-shares-static">
      <div className="row">
        <CardSharesCards />
        {/* <CardSharesGraph /> */}
        <CardSharesTable />
      </div>
    </div>
  );
};

export default CardSharesIndex;
