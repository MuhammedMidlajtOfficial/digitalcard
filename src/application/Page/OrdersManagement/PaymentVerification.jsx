
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import PaymentVerificationIndex from '../../Components/OrderManagement/PaymentVerification/PaymentVerificationIndex'
const PaymentVerificationPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <PaymentVerificationIndex />
        </div>
    </>
)
}

export default PaymentVerificationPage