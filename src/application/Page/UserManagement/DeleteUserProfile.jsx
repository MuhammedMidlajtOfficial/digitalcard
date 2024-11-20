
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import DeleteUsers from '../../Components/UserManagement/DeleteUserProfile/DeleteUsers'
import "./usermanagement.css"

const DeleteUsersPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <DeleteUsers />
        </div>
    </>
)
}

export default DeleteUsersPage