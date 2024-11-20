
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./usermanagement.css"
import UserCategorizationIndex from '../../Components/UserManagement/UserCategorization/UserCategorizationIndex'

const UserCategorizationPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <UserCategorizationIndex />
        </div>
    </>
)
}

export default UserCategorizationPage