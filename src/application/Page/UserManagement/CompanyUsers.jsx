
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import CompanyUsersIndex from '../../Components/UserManagement/ManageEnterpriseUser/CompanyUsers/CompanyUsersIndex'
import "./usermanagement.css"

const CompanyUsersPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <CompanyUsersIndex />
        </div>
    </>
)
}

export default CompanyUsersPage