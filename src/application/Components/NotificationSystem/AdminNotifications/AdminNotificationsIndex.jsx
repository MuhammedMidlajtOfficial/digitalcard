import React from "react";
import IndexAdmin from "./IndexAdmin";

const AdminNotificationsIndex = () => {
  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between user-notification-index-main-heading flex-lg-row flex-xl-row flex-column">
        <h5>Admin Notifications</h5>
        <h6>Mark all as read</h6>
      </div>
      <IndexAdmin />
    </div>
  );
};

export default AdminNotificationsIndex;
