
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import AllUsersIndex from '../../Components/AnalyticsDashboard/UserActiveReports/AllUsersViews/AllUsersIndex'
import "./analyticsdashboard.css"

const AllUsersViewPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <AllUsersIndex />
        </div>
    </>
)
}

export default AllUsersViewPage