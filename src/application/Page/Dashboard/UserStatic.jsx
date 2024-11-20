
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./dashboard.css"
import UserStaticIndex from '../../Components/Dashboards/UserStatic/UserStaticIndex'
const UserStaticPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <UserStaticIndex />
        </div>
    </>
)
}

export default UserStaticPage