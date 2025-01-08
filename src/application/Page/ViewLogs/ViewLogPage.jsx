import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import { ViewLogs } from '../../Components/ViewLogs/ViewLogs'
import "./ViewLogs.css"
const ViewLogpage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ViewLogs />
        </div>
    </>
)
}

export default ViewLogpage