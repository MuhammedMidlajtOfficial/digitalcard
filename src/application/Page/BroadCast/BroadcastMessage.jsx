import React from 'react'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import HeaderApplication from '../../Layouts/Header/Header'
import BroadcastMessageUi from '../../Components/BroadcastMessage/BroadcastMessageUi'
import './BroadcastMessage.css';

function BroadcastMessage() {
    return (
        <>
            <SidebarApplication />
            <HeaderApplication />

            <div className="application-wrapper">
              {/* <h1>BroadcastMessage</h1> */}
                <BroadcastMessageUi />
            </div>
        </>
    )
}

export default BroadcastMessage
