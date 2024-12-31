import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./wati.css"
import WatiList from '../../Components/Wati/watiList'

const WatiLists = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <WatiList />
        </div>
    </>
)
}

export default WatiLists