
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import NumberOfSharesIndex from '../../Components/AnalyticsDashboard/UserActiveReports/NumberOfShares/NumberOfSharesIndex'
import "./analyticsdashboard.css"

const NumberOfSharesPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <NumberOfSharesIndex />
        </div>
    </>
)
}

export default NumberOfSharesPage