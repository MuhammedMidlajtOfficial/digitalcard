
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import { EditUser } from '../../Components/UserManagement/EditUserProfile/EditUser'
import "./usermanagement.css"

const UserEditPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <EditUser />
        </div>
    </>
)
}

export default UserEditPage