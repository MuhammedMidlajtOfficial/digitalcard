import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import CustomReportsIndex from '../../Components/AnalyticsDashboard/CustomReports/CustomReportsIndex'
import "./analyticsdashboard.css"
const CustomReportsPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <CustomReportsIndex />
        </div>
    </>
)
}

export default CustomReportsPage