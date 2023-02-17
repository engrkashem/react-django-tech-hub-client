import React from 'react';
import AboutDev from './AboutDev';
import AboutProject from './AboutProject';
import './About.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Shared/Footer';

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-12 lg:gap-10'>
                <AboutProject navigate={navigate}></AboutProject>
                <AboutDev navigate={navigate}></AboutDev>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default About;