

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import UserActivityIndex from '../../Components/AnalyticsDashboard/UserActiveReports/UserActivityIndex'
import "./analyticsdashboard.css"

const UserActivityReportsPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <UserActivityIndex />
        </div>
    </>
)
}

export default UserActivityReportsPage