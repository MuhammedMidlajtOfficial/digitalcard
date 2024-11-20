import React from 'react'
import SLATrackingCards from './SLATrackingCards'
import SLATrackingGraphs from './SLATrackingGraphs'
import SLATrackingTables from './SLATrackingTables'

const SLATracking = () => {
  return (
    <div className="row">
      <SLATrackingCards/>
      <SLATrackingGraphs/>
      <SLATrackingTables/>
    </div>
  )
}

export default SLATracking
