import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import JoinBanner from './JoinBanner';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Banner></Banner>
            <JoinBanner></JoinBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;