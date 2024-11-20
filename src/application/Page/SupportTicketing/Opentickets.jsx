

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
// import "./dashboard.css"
import OpenTicket from '../../Components/SupportTicketSystem/ViewAndRespondTicket/OpenTicket'
const Opentickets = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <OpenTicket />
        </div>
    </>
)
}

export default Opentickets
