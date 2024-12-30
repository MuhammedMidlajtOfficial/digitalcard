

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
// import "./dashboard.css"
import OpenTicket from '../../Components/SupportTicketSystem/ViewAndRespondTicket/OpenTicket'
import { useParams } from 'react-router-dom'

const Opentickets = () => {
  const { id } = useParams();
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <OpenTicket ticketId={id}/>
        </div>
    </>
)
}

export default Opentickets
