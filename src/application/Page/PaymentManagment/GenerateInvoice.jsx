
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./paymentmanagement.css"
import BillingHistoryIndex from '../../Components/PaymentManagement/GenerateInvoice/BillingHistoryIndex'

const BillingHistoryPage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<BillingHistoryIndex />
			</div>
		</>
	)
}

export default BillingHistoryPage