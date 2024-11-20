

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import ViewCardData from '../../Components/CardManagement/CardTemplates/ViewCardData'
import "./cardsmanagement.css"

const ViewCardDataPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ViewCardData />
        </div>
    </>
)
}

export default ViewCardDataPage