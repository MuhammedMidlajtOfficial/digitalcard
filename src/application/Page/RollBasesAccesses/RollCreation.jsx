import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import RollCreationIndex from '../../Components/RollBasedAccess/RollCreation/RollCreationIndex'
import './RollBasedAccess.css'
const RollCreation = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <RollCreationIndex />
        </div>
    </>
)
}

export default RollCreation
