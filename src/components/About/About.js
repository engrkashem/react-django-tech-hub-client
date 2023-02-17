import React from 'react';
import AboutDev from './AboutDev';
import AboutProject from './AboutProject';
import './About.css';

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-12 lg:gap-10'>
            <AboutProject></AboutProject>
            <AboutDev></AboutDev>
        </div>
    );
};

export default About;