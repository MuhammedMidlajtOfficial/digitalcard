import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./contentmanagement.css"
import ContentManagementIndex from '../../Components/ContentManagement/ContentManagementIndex'

const SubscriptionPlanPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            < ContentManagementIndex/>
        </div>
    </>
)
}

export default SubscriptionPlanPage