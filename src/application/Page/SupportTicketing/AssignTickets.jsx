

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./SupportTicket.css"
import AssignTicket from '../../Components/SupportTicketSystem/AssignTicket/AssignTicket'
const AssignTickets = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <AssignTicket />
        </div>
    </>
)
}

export default AssignTickets
