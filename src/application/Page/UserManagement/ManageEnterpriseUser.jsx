import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import EnterpriseIndex from '../../Components/UserManagement/ManageEnterpriseUser/EnterpriseIndex'
import "./usermanagement.css"

const ManageEnterpriseUserPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <EnterpriseIndex />
        </div>
    </>
)
}

export default ManageEnterpriseUserPage