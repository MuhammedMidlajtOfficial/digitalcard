import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./userfeedback.css"
import { CreateSurvey } from '../../Components/UserFeedBack/CreateSurveys/CreateSurvey'
const CreateSurveyPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <CreateSurvey />
        </div>
    </>
)
}

export default CreateSurveyPage
