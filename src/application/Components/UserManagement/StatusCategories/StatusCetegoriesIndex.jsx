import React from "react";
import StatusCateforiesCards from "./StatusCateforiesCards";
import StatusCategoriesGraph from "./StatusCategoriesGraph";
const StatusCetegoriesIndex = () => {
  return (
    <div className="application-dashboard-section">
      <div className="row">
        <StatusCateforiesCards />
        <StatusCategoriesGraph />
      </div>
    </div>
  );
};

export default StatusCetegoriesIndex;
