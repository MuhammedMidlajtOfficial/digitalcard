

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./analyticsdashboard.css"
import ExportReportsIndex from '../../Components/AnalyticsDashboard/ExportReports/ExportReportsIndex'

const ExportReportsPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ExportReportsIndex />
        </div>
    </>
)
}

export default ExportReportsPage