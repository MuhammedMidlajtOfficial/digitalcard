import React from "react";
import HeaderApplication from "../../Layouts/Header/Header";
import SidebarApplication from "../../Layouts/Sidebar/Sidebar";
import "./dashboard.css";
import RecentActiveIndex from "../../Components/Dashboards/RecentActivities/RecentActiveIndex";
const RecentActivitiesPage = () => {
  return (
    <>
      <SidebarApplication />
      <HeaderApplication />

      <div className="application-wrapper">
        <RecentActiveIndex />
      </div>
    </>
  );
};

export default RecentActivitiesPage;
