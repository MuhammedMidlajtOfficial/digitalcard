import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
// import "./dashboard.css"
import TicketProritisationindex from '../../Components/SupportTicketSystem/TicketPrioritisation/TicketProritisationindex'
const TicketPrioritisation = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <TicketProritisationindex />
        </div>
    </>
)
}

export default TicketPrioritisation
