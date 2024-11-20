
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import { AddInvoice } from '../../Components/PaymentManagement/GenerateInvoice/AddInvoice'
import "./paymentmanagement.css"


const AddInvoicePage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<AddInvoice />
			</div>
		</>
	)
}

export default AddInvoicePage