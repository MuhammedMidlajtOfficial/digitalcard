
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import { AddUserProfile } from '../../Components/UserManagement/AddUserProfile/AddUserProfile'
import "./usermanagement.css"

const AddUsersPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <AddUserProfile />
        </div>
    </>
)
}

export default AddUsersPage