import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./notificationsystem.css"
// import GetNotification from '../../Components/NotificationSystem/SendNotifications/GetNotification'

const GetNotifications  = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            {/* <GetNotification/> */}
        </div>
    </>
)
}

export default GetNotifications; 

