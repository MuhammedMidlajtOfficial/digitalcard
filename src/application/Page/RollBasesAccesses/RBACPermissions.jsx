import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import './RollBasedAccess.css'
import RBACPermissionIndex from '../../Components/RollBasedAccess/RBACPermission/RBACPermissionIndex'
const RBACPermissions = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <RBACPermissionIndex />
        </div>
    </>
)
}

export default RBACPermissions
