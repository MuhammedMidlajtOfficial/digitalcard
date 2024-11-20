
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import ViewOrdersIndex from '../../Components/OrderManagement/ViewOrders/ViewOrdersIndex'
const ViewOrdersPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ViewOrdersIndex />
        </div>
    </>
)
}

export default ViewOrdersPage