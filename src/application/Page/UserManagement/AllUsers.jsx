
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import AllUsers from '../../Components/UserManagement/ViewAllUsers/AllUsers'
import "./usermanagement.css"

const AllUsersPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <AllUsers />
        </div>
    </>
)
}

export default AllUsersPage