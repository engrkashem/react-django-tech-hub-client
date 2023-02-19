import React from 'react';
import './Home.css';

const JoinBanner = () => {
    return (
        <div className='join-container h-screen px-10 pt-16'>
            <h2 className=' text-6xl'>Join your colleagues, classmates, and friends on TechHUB.</h2>
            <button className="btn btn-outline btn-primary px-12 mt-4 flex justify-start  rounded-full">Get Started</button>
        </div>
    );
};

export default JoinBanner;