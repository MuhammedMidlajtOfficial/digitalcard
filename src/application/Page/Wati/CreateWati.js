import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./wati.css"
import CreateWati from '../../Components/Wati/createWati'

const CreateWatis = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <CreateWati />
        </div>
    </>
)
}

export default CreateWatis