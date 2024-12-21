import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import EmployeeLIst from '../../Components/CreateEmployee/EmployeeList'

const EmployeeLIsts = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<EmployeeLIst />
			</div>
		</>
	)
}

export default EmployeeLIsts;