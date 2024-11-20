

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./userfeedback.css"
import { ViewReceivedSurvey } from '../../Components/UserFeedBack/CreateSurveys/ViewReceivedSurvey'

const ViewReceivedSurveyPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <ViewReceivedSurvey />
        </div>
    </>
)
}

export default ViewReceivedSurveyPage
