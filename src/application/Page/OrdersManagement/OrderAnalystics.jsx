
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import OrderAnalysticsIndex from '../../Components/OrderManagement/Order Analystics/OrderAnalysticsIndex'
const OrderAnalysticsPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <OrderAnalysticsIndex />
        </div>
    </>
)
}

export default OrderAnalysticsPage