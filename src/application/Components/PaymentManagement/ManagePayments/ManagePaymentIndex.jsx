import React from 'react'
import ManagePaymentsCards from './ManagePaymentsCards'
import { ManagePaymentsTable } from './ManagePaymentsTable'

const ManagePaymentIndex = () => {
  return (
	<div className="view-orders-static">
        <div className="row">
            <ManagePaymentsCards />
            <ManagePaymentsTable/>
        </div>
    </div>
  )
}

export default ManagePaymentIndex
