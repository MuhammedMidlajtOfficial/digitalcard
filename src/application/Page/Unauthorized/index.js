import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import Unauthorized from '../../Components/Unauthorized/Unauthorized'

const UnAuthorized = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <Unauthorized />
        </div>
    </>
)
}

export default UnAuthorized