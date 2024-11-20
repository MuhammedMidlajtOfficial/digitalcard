

import React, { useState } from 'react';
import IndexUsers from './IndexUsers';

const UserNotificationIndex = () => {


    return (
        <div className='container-fluid p-4'>
            <div className='d-flex justify-content-between user-notification-index-main-heading flex-lg-row flex-xl-row flex-column'>
               <h5>User Notifications</h5>
               <h6>Mark all as read</h6>
            </div>
            <IndexUsers />
        </div>
    );
};

export default UserNotificationIndex;
