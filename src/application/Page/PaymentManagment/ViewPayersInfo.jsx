
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./paymentmanagement.css"
import ViewPayerInfo from '../../Components/PaymentManagement/ManagePayments/ViewPayerInfo'

const ViewPayersInfoPage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<ViewPayerInfo />
			</div>
		</>
	)
}

export default ViewPayersInfoPage