import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
// import "./dashboard.css"
import SLATracking from '../../Components/SupportTicketSystem/SLATracking/SLATracking'
const SlaTracking = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <SLATracking />
        </div>
    </>
)
}

export default SlaTracking

