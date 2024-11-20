

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./userfeedback.css"
import { ViewFeedBack } from '../../Components/UserFeedBack/ViewResponses/ViewFeedBack'

const ViewFeedbackPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <ViewFeedBack/>
        </div>
    </>
)
}

export default ViewFeedbackPage
