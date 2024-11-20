import React from 'react'
import UserStaticCards from './UserStaticCards'
import UserStaticGraph from './UserStaticGraph'
import { UserStaticTable } from './UserStaticTable'

const UserStaticIndex = () => {
  return (
	<div className="user-static-index">
        <div className="row">
            <UserStaticCards />
            <UserStaticGraph/>
            <UserStaticTable/>
      </div>
    </div>
  )
}

export default UserStaticIndex
