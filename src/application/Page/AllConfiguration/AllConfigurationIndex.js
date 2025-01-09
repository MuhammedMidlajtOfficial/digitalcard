import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import AllConfigList from '../../Components/AllConfiguration/AllConfigList'
import "./AllConfig.css"

const AllConfigurationIndex = () => {
    return (
        <>
            <SidebarApplication />
            <HeaderApplication />

            <div className="application-wrapper">
                <AllConfigList />
            </div>
        </>
    )
}

export default AllConfigurationIndex