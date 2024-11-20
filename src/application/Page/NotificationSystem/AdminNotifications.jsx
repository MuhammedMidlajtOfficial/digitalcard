import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./notificationsystem.css"
import AdminNotificationsIndex from '../../Components/NotificationSystem/AdminNotifications/AdminNotificationsIndex'

const AdminNotifications  = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <AdminNotificationsIndex />
        </div>
    </>
)
}

export default AdminNotifications 

