

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import { UserView } from '../../Components/UserManagement/ViewAllUsers/UserView'
import "./usermanagement.css"

const UserViewPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <UserView />
        </div>
    </>
)
}

export default UserViewPage