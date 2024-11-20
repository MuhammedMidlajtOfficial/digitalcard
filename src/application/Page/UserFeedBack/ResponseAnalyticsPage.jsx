import React from "react";
import HeaderApplication from "../../Layouts/Header/Header";
import SidebarApplication from "../../Layouts/Sidebar/Sidebar";
import "./userfeedback.css";
import { FeedBackList } from "../../Components/UserFeedBack/ViewResponses/ResponseList";
import ResponseDashboardCards from "../../Components/UserFeedBack/ViewResponses/ResponseDashboardCards";
import { ResponseDashboardFeedBack } from "../../Components/UserFeedBack/ViewResponses/ResponseDashboardFeedBack";
import ResponseAnalyticsIndex from "../../Components/UserFeedBack/ResponseAnalytics/ResponseAnalyticsIndex";
const ResponseAnalyticsPage = () => {
  return (
    <>
      <SidebarApplication />
      <HeaderApplication />
      <div className="application-wrapper">
       <ResponseAnalyticsIndex />
      </div>
    </>
  );
};

export default ResponseAnalyticsPage;
