import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./paymentmanagement.css"
import ManagePaymentIndex from '../../Components/PaymentManagement/ManagePayments/ManagePaymentIndex'

const ManagePaymentsPage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<ManagePaymentIndex />
			</div>
		</>
	)
}

export default ManagePaymentsPage