import React from "react";
import HeaderApplication from "../../Layouts/Header/Header";
import SidebarApplication from "../../Layouts/Sidebar/Sidebar";
import "./userfeedback.css";
import { UserNegativeFeedback } from "../../Components/UserFeedBack/ViewResponses/UserNegativeFeedback";
const UserNegativeFeedbackPage = () => {
  return (
    <>
      <SidebarApplication />
      <HeaderApplication />
      <div className="application-wrapper">
          <UserNegativeFeedback/>
        </div>
    </>
  );
};

export default UserNegativeFeedbackPage;
