import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import './AutomatedMarketing.css'
import AutomatedTriggersIndex from '../../Components/AutomatedMarketing/AutomatedTriggers/AutomatedTriggersIndex'
const AutomatedTriggers = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <AutomatedTriggersIndex />
        </div>
    </>
)
}

export default AutomatedTriggers


