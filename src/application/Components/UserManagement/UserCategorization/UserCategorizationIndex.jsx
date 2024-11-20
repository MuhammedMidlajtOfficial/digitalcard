import React from "react";
import UserCategorizationCards from "./UserCategorizationCards";
import UserCategorizationTable from "./UserCategorizationTable";
const UserCategorizationIndex = () => {
  return (
    <div className="application-all-users-section">
      <div className="row">
        <UserCategorizationCards />
        <UserCategorizationTable />
      </div>
    </div>
  );
};

export default UserCategorizationIndex;
