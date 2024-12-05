import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
// import "./notificationsystem.css"
import "./SendNotification.css"
import SendNotification from '../../Components/NotificationSystem/SendNotifications/SendNotification'

const SendNotifications  = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <SendNotification />
        </div>
    </>
)
}

export default SendNotifications; 

