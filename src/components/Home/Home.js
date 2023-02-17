import React from 'react';
import Banner from './Banner';
import JoinBanner from './JoinBanner';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Banner></Banner>
            <JoinBanner></JoinBanner>
        </div>
    );
};

export default Home;