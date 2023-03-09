import React from 'react';
import { Link } from 'react-router-dom';
import network from '../../assets/network.jpg';

const TopBanner = () => {

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className=" grid grid-cols-1 lg:grid-cols-2 ">
                <img src={network} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div className='mt-10 lg:mt-1'>
                    <h1 className="text-3xl lg:text-5xl font-bold">Welcome to Tech World</h1>
                    <p className="p-6 text-xl">Explore fantastic features and get chance to communicate and seek help to experts. Take guidance in learning technologies.</p>
                    <Link to={'/dashboard'}><button className="btn btn-primary">Explore More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;