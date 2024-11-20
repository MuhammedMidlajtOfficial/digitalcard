
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./paymentmanagement.css"
import PaymentGatewayIndex from '../../Components/PaymentManagement/PaymentGatewayIntegration/PaymentGatewayIndex'

const PaymentGatewayPage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<PaymentGatewayIndex />
			</div>
		</>
	)
}

export default PaymentGatewayPage