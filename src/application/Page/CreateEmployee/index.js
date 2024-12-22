import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import CreateEmployee from '../../Components/CreateEmployee/CreateEmployee'

const CreateEmployeeForm = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<CreateEmployee />
			</div>
		</>
	)
}

export default CreateEmployeeForm;