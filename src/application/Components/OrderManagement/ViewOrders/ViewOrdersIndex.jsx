import React from 'react'
import ViewOrdersCard from './ViewOrdersCard'
import { ViewOrdersTable } from './ViewOrdersTable'

const ViewOrdersIndex = () => {
  return (
	<div className="view-orders-static">
        <div className="row">
            <ViewOrdersCard />
            <ViewOrdersTable/>
      </div>
    </div>
  )
}

export default ViewOrdersIndex
