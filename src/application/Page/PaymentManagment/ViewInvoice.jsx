
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import { ViewInvoice } from '../../Components/PaymentManagement/GenerateInvoice/ViewInvoice'
import "./paymentmanagement.css"


const ViewInvoicePage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<ViewInvoice />
			</div>
		</>
	)
}

export default ViewInvoicePage