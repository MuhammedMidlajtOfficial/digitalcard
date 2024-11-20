import React from "react";
import CompanyUsersCards from "./CompanyUsersCards";
import CompanyUsersListCards from "./CompanyUsersListCards";
const CompanyUsersIndex = () => {
  return (
    <div className="application-all-users-section">
      <div className="container">
        <div className="row">
          <CompanyUsersCards />
          <CompanyUsersListCards />
        </div>
      </div>
    </div>
  );
};

export default CompanyUsersIndex;
