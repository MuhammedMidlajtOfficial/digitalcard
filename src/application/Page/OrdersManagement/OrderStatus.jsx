
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import OrderStatusIndex from '../../Components/OrderManagement/OrderStatus/OrderStatusIndex'
const OrderStatusPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <OrderStatusIndex />
        </div>
    </>
)
}

export default OrderStatusPage