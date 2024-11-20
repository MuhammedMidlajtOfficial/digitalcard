

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./userfeedback.css"
import { SurveyList } from '../../Components/UserFeedBack/CreateSurveys/SurveyList'
const SurveyListPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <SurveyList />
        </div>
    </>
)
}

export default SurveyListPage
