import React from "react";
import CompanyUsersCards from "./CompanyUsersCards";
import CompanyUsersListCards from "./CompanyUsersListCards";
import CompanyUserView from "./CompanyUserView";

const CompanyUsersIndex = ({ userId }) => {
  return (
    <div className="application-all-users-section">
      <div className="container">
        <div className="row">
          {/* <CompanyUsersCards /> */}
          {/* <CompanyUsersListCards /> */}
          <CompanyUserView userId={userId}/>
        </div>
      </div>
    </div>
  );
};

export default CompanyUsersIndex;
