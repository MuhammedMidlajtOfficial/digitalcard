import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./usermanagement.css"
import { EditComapnyUser } from '../../Components/UserManagement/ManageEnterpriseUser/CompanyUsers/EditComapnyUser'

const EditCompanyUsersPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <EditComapnyUser />
        </div>
    </>
)
}

export default EditCompanyUsersPage