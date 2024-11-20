import React from 'react'
import CampaignAnalyticsCards from './CampaignAnalyticsCards'
import CampaignAnalyticsGraphs from './CampaignAnalyticsGraphs'
import CampaignAnalyticsTable from './CampaignAnalyticsTable'

const CampaignAnalyticsIndex = () => {
  return (
    <div className='row'>
      <CampaignAnalyticsCards/>
      <CampaignAnalyticsGraphs/>
      <CampaignAnalyticsTable/>
    </div>
  )
}

export default CampaignAnalyticsIndex
