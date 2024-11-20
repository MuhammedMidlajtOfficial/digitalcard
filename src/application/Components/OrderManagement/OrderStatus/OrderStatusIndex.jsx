import React from "react";
import OrderStatusCard from "./OrderStatusCard";
import { OrderStatusTable } from "./OrderStatusTable";

const OrderStatusIndex = () => {
  return (
    <div className="order-history-static">
      <div className="row">
        <OrderStatusCard />
        <OrderStatusTable />
      </div>
    </div>
  );
};

export default OrderStatusIndex;
