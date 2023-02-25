import React from 'react';
import Jobs from '../components/Jobs/Jobs';
import NavBar from '../components/Shared/NavBar/NavBar';

const JobLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Jobs></Jobs>
        </div>
    );
};

export default JobLayout;