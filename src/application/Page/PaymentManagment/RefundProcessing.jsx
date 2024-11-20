
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./paymentmanagement.css"
import RefundProcessIndex from '../../Components/PaymentManagement/RefundProcessing/RefundProcessIndex'

const RefundProcessingPage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<RefundProcessIndex />
			</div>
		</>
	)
}

export default RefundProcessingPage