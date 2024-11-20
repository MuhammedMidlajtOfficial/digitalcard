import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import './RollBasedAccess.css'
import AuditTrailsIndex from '../../Components/RollBasedAccess/AuditTrails/AuditTrailsIndex'
const AuditTrails = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <AuditTrailsIndex />
        </div>
    </>
)
}

export default AuditTrails
