
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import { EditUser } from '../../Components/UserManagement/EditUserProfile/EditUser'
import "./usermanagement.css"
import { useParams } from 'react-router-dom'

const UserEditPage = () => {
const { userId } = useParams();  
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <EditUser userId={userId} />
        </div>
    </>
)
}

export default UserEditPage