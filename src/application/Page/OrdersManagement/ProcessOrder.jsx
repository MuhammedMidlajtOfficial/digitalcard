
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import ProcessOrdersIndex from '../../Components/OrderManagement/ProcessOrders/ProcessOrdersIndex'
const ProcessOrdersPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ProcessOrdersIndex />
        </div>
    </>
)
}

export default ProcessOrdersPage