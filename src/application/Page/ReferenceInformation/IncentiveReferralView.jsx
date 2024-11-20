
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import IncentiveReferralView from '../../Components/ReferenceInformation/IncentiveManagement/IncentiveReferralView'
import "./referraltrack.css"
const IncentiveReferralViewPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <IncentiveReferralView />
        </div>
    </>
)
}

export default IncentiveReferralViewPage