import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import CreateCard from '../../Components/CardManagement/CreateNewCard/CreateCard'
import "./cardsmanagement.css"

const CreateNewCardPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <CreateCard />
        </div>
    </>
)
}

export default CreateNewCardPage