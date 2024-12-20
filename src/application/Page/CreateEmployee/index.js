
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import CreateEmployee from '../../Components/CreateEmployee/CreateEmployee'
import EmployeeLIst from '../../Components/CreateEmployee/EmployeeList'

const CreateEmployeeForm = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<CreateEmployee />
				{/* <EmployeeLIst /> */}
			</div>
		</>
	)
}

export default CreateEmployeeForm;