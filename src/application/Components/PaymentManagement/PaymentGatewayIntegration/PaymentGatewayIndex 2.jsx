import React from "react";
import PaymentGatewayCards from "./PaymentGatewayCards";
import PaymentGatewayTable from "./PaymentGatewayTable";

const PaymentGatewayIndex = () => {
  return (
    <div className="view-orders-static">
      <div className="row">
        <PaymentGatewayCards />
        <PaymentGatewayTable />
      </div>
    </div>
  );
};

export default PaymentGatewayIndex;
