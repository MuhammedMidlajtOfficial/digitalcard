
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import ShareCard from '../../Components/CardManagement/ShareCards/ShareCard'
import "./cardsmanagement.css"

const ShareCardsPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ShareCard />
        </div>
    </>
)
}

export default ShareCardsPage