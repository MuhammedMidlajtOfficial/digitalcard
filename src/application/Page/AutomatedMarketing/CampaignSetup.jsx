import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import './AutomatedMarketing.css'
import CampaingSetupIndex from '../../Components/AutomatedMarketing/CampaignSetup/CampaingSetupIndex'
const CampaignSetup = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <CampaingSetupIndex />
        </div>
    </>
)
}

export default CampaignSetup

