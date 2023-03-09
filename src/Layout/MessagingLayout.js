import React from 'react';
import Messaging from '../components/Messaging/Messaging';
import NavBar from '../components/Shared/NavBar/NavBar';

const MessagingLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Messaging></Messaging>
        </div>
    );
};

export default MessagingLayout;