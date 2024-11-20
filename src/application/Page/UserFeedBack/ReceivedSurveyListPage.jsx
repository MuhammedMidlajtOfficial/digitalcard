import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./userfeedback.css"
import { ReceivedSurveyList } from '../../Components/UserFeedBack/CreateSurveys/ReceivedSurvey'
const ReceivedSurveyListPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <ReceivedSurveyList />
        </div>
    </>
)
}

export default ReceivedSurveyListPage
