
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./analyticsdashboard.css"

import CardShareIndex from '../../Components/AnalyticsDashboard/CardShareReport/CardShareIndex'
const CardShareReportPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <CardShareIndex />
        </div>
    </>
)
}

export default CardShareReportPage