import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import Dashboards from '../../Components/Dashboards/Overview/Dashboards'
import "./dashboard.css"
const DashboardPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <Dashboards />
        </div>
    </>
)
}

export default DashboardPage