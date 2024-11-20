
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./paymentmanagement.css"
import CustomerRefundInfo from '../../Components/PaymentManagement/RefundProcessing/CustomerRefundInfo'

const CustomerRefundInfoPage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<CustomerRefundInfo />
			</div>
		</>
	)
}

export default CustomerRefundInfoPage