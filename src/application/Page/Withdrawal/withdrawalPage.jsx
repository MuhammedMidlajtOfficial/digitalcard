import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import Withdrawal from "../../Components/Withdrawal/withdrawal";

const WithdrawalPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <Withdrawal />
        </div>
    </>
)
}

export default WithdrawalPage