import React from "react";
import UsersCards from "./UsersCards";
import UsersProfiles from "./UsersProfiles";
const AllUsers = () => {
  return (
    <div className="application-all-users-section">
      <div className="row">
        <UsersCards />
        <UsersProfiles />
      </div>
    </div>
  );
};

export default AllUsers;