import React from 'react'
import CardsResponseAnalytics from './CardsResponseAnalytics'
import GraphResponseAnalytics from './GraphResponseAnalytics'
import TableResponseAnalytics from './TableResponseAnalytics'

const ResponseAnalyticsIndex = () => {
  return (
    <div className="application-dashboard-section">
      <CardsResponseAnalytics />
      <GraphResponseAnalytics />
      <TableResponseAnalytics />
    </div>
  )
}

export default ResponseAnalyticsIndex
