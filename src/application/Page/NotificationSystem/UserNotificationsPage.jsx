import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./notificationsystem.css"
import UserNotificationIndex from '../../Components/NotificationSystem/UserNotifications/UserNotificationIndex'

const UserNotificationsPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <UserNotificationIndex />
        </div>
    </>
)
}

export default UserNotificationsPage
