import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./notificationsystem.css"
import CustomizableAlertsIndex from '../../Components/NotificationSystem/CustomizableAlerts/CustomizableAlertsIndex'

const CustomizableAlerts = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <CustomizableAlertsIndex />
        </div>
    </>
)
}

export default CustomizableAlerts