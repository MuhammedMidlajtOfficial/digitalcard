
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import UniqueVisitorsIndex from '../../Components/AnalyticsDashboard/UserActiveReports/UniqueVisitors/UniqueVisitorsIndex'
import "./analyticsdashboard.css"

const UniqueVisitorsPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <UniqueVisitorsIndex />
        </div>
    </>
)
}

export default UniqueVisitorsPage