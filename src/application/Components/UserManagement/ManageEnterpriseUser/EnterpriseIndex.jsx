
import React from "react";
import EnterpriseCards from "./EnterpriseCards";
import EnterpriseUsers from "./EnterpriseUsers";
const EnterpriseIndex = () => {
  return (
    <div className="application-all-users-section">
        <div className="row">
          <EnterpriseCards />
		      <EnterpriseUsers />
      </div>
    </div>
  );
};

export default EnterpriseIndex;
