import React from "react";
import CardShareCards from "./CardShareCards";
import CardShareGraphs from "./CardShareGraphs";
import CardShareTable from "./CardShareTable";

const CardShareIndex = () => {
  return (
    <div className="card-share-static">
      <div className="row">
        <CardShareCards />
        <CardShareGraphs />
        <CardShareTable />
      </div>
    </div>
  );
};

export default CardShareIndex;
