
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./dashboard.css"
import CardSharesIndex from '../../Components/Dashboards/CardShares/CardSharesIndex'
const CardSharesPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <CardSharesIndex />
        </div>
    </>
)
}

export default CardSharesPage