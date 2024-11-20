import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import StatusCetegoriesIndex from '../../Components/UserManagement/StatusCategories/StatusCetegoriesIndex'
import "./usermanagement.css"

const StatusCategoriesPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <StatusCetegoriesIndex />
        </div>
    </>
)
}

export default StatusCategoriesPage