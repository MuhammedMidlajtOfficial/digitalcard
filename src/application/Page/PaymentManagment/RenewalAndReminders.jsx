import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./paymentmanagement.css"
import RenewalAndReminderIndex from '../../Components/PaymentManagement/RenewalAndReminders/RenewalAndReminderIndex'

const RenewalAndRemindersPage = () => {
	return (
		<>
			<SidebarApplication />
			<HeaderApplication />
	
			<div className="application-wrapper">
				<RenewalAndReminderIndex />
			</div>
		</>
	)
}

export default RenewalAndRemindersPage