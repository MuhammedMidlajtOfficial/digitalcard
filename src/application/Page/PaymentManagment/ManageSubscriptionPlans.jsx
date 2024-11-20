

import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import ManageSubscriptionIndex from '../../Components/PaymentManagement/ManageSubscriptionPlans/ManageSubscriptionIndex'
import "./paymentmanagement.css"


const ManageSubscriptionPage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<ManageSubscriptionIndex />
			</div>
		</>
	)
}

export default ManageSubscriptionPage