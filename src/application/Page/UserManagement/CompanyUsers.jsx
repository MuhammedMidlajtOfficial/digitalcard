
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import CompanyUsersIndex from '../../Components/UserManagement/ManageEnterpriseUser/CompanyUsers/CompanyUsersIndex'
import "./usermanagement.css"
import { useParams } from 'react-router-dom'

const CompanyUsersPage = () => {
    const { userId } = useParams();  
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <CompanyUsersIndex userId={userId}/>
        </div>
    </>
)
}

export default CompanyUsersPage