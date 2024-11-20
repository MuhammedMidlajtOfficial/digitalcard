
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import IncentiveIndex from '../../Components/ReferenceInformation/IncentiveManagement/IncentiveIndex'
import "./referraltrack.css"
const IncentiveManagementPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <IncentiveIndex />
        </div>
    </>
)
}

export default IncentiveManagementPage