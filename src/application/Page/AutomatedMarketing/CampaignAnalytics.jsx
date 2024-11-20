import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import './AutomatedMarketing.css'
import CampaingSetupIndex from '../../Components/AutomatedMarketing/CampaignSetup/CampaingSetupIndex'
import CampaignAnalyticsIndex from '../../Components/AutomatedMarketing/CampaignAnalytics/CampaignAnalyticsIndex'
const CampaignAnalytics = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <CampaignAnalyticsIndex />
        </div>
    </>
)
}

export default CampaignAnalytics

