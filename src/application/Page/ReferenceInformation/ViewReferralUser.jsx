
import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import "./referraltrack.css"
import ViewReferralUser from '../../Components/ReferenceInformation/ReferralTracking/ViewReferralUser'
const ViewReferralUserPage = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />

        <div className="application-wrapper">
            <ViewReferralUser />
        </div>
    </>
)
}

export default ViewReferralUserPage