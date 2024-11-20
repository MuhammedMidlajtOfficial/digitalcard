import React from "react";
import HeaderApplication from "../../Layouts/Header/Header";
import SidebarApplication from "../../Layouts/Sidebar/Sidebar";
import "./userfeedback.css";
import { FeedBackList } from "../../Components/UserFeedBack/ViewResponses/ResponseList";
import ResponseDashboardCards from "../../Components/UserFeedBack/ViewResponses/ResponseDashboardCards";
import { ResponseDashboardFeedBack } from "../../Components/UserFeedBack/ViewResponses/ResponseDashboardFeedBack";
const FeedBackListPage = () => {
  return (
    <>
      <SidebarApplication />
      <HeaderApplication />
      <div className="application-wrapper">
        <div className="">
          <div className="row dashboard-main-section">
            <h2>User Feedback</h2>
            <p>Number of users installed the app by source</p>
          </div>
          <ResponseDashboardCards />
          <ResponseDashboardFeedBack/>
          <FeedBackList/>
        </div>
      </div>
    </>
  );
};

export default FeedBackListPage;
