import React from "react";
import PaymentVerificationCard from "./PaymentVerificationCard";
import { PaymentVerificationTable } from "./PaymentVerificationTable";

const PaymentVerificationIndex = () => {
  return (
    <div className="manage-request-static">
      <div className="row">
        <PaymentVerificationCard />
        <PaymentVerificationTable />
      </div>
    </div>
  );
};

export default PaymentVerificationIndex;
