
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import CardTemplate from '../../Components/CardManagement/CardTemplates/CardTemplate'
import "./cardsmanagement.css"

const CardTemplatePage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<CardTemplate />
			</div>
		</>
	)
}

export default CardTemplatePage