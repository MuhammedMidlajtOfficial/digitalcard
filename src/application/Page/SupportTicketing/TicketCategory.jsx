

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
// import "./dashboard.css"
import TicketCategories from '../../Components/SupportTicketSystem/TicketCategories/TicketCategories'
const TicketCategory = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <TicketCategories />
        </div>
    </>
)
}

export default TicketCategory
