import React from 'react';
import NavBar from './NavBar/NavBar';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="not_found_container min-h-screen" >
                <h1>Not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;