import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
// import "./dashboard.css"
import ViewTicket from '../../Components/SupportTicketSystem/ViewAndRespondTicket/ViewTicket'
const TicketPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ViewTicket />
        </div>
    </>
)
}

export default TicketPage