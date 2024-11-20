
import React from "react";
import OrderAnalysticsCards from "./OrderAnalysticsCards";
import OrderAnalysticsGraphs from "./OrderAnalysticsGraphs";
import OrderAnalysticsTable from "./OrderAnalysticsTable";
const OrderAnalysticsIndex = () => {
  return (
    <div className="card-shares-static">
        <div className="row">
          <OrderAnalysticsCards />
          <OrderAnalysticsGraphs />
          <OrderAnalysticsTable />
        </div>
    </div>
  );
};

export default OrderAnalysticsIndex;
