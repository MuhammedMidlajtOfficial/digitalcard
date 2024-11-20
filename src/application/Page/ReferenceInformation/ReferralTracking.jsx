
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import ReferralIndex from '../../Components/ReferenceInformation/ReferralTracking/ReferralIndex'
import "./referraltrack.css"
const ReferralTrackingPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ReferralIndex />
        </div>
    </>
)
}

export default ReferralTrackingPage