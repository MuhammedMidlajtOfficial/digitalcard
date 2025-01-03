import React, { useState } from "react";
import UsersCards from "./UsersCards";
import UsersProfiles from "./UsersProfiles";
const AllUsers = () => {
  const [change,setChange] = useState(true)
  return (
    <div className="application-all-users-section">
      <div className="row">
        <UsersCards change={change}/>
        <UsersProfiles setChange={setChange}/>
      </div>
    </div>
  );
};

export default AllUsers;