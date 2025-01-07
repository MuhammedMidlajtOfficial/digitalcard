import React, { useState } from "react";
import UsersCards from "./UsersCards";
import UsersProfiles from "./UsersProfiles";

const AllUsers = () => {
  const [change, setChange] = useState(true);
  const [filter, setFilter] = useState("individualUser"); 

  return (
    <div className="application-all-users-section">
      <div className="row">
      {/* <UsersCards change={setChange} activeFilter={filter} /> */}
        <UsersProfiles setChange={setChange} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default AllUsers;
















