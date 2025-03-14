
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import DeleteCards from '../../Components/CardManagement/DeleteCard/DeleteCards'
import "./cardsmanagement.css"

const DeleteCardsPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <DeleteCards />
        </div>
    </>
)
}

export default DeleteCardsPage