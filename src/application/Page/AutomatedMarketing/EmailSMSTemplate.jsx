import React from 'react'
import HeaderApplication from '../../Layouts/Header/Header'
import SidebarApplication from '../../Layouts/Sidebar/Sidebar'
import './AutomatedMarketing.css'
import EmailSMSTemplatesIndex from '../../Components/AutomatedMarketing/Email-SMSTemplates/EmailSMSTemplatesIndex'
const EmailSMSTemplate = () => {
  return (
    <>
        <SidebarApplication />
        <HeaderApplication />
        <div className="application-wrapper">
            <EmailSMSTemplatesIndex />
        </div>
    </>
)
}

export default EmailSMSTemplate

