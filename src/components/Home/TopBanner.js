import React from 'react';
import network from '../../assets/network.jpg';

const TopBanner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={network} className="max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Tech World</h1>
                    <p className="p-6 text-xl">Explore fantastic features and get chance to communicate and seek help to experts. Take guidance in learning technologies.</p>
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;