import React from 'react';
import { Link } from 'react-router-dom';
import network from '../../assets/network.jpg';
import { useNavigate } from 'react-router-dom';

const TopBanner = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-base-100 pt-28">
            <div className=" grid grid-cols-1 lg:grid-cols-2 items-center">
                <img src={network} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div className='mt-10 lg:mt-1'>
                    <h1 className="text-3xl lg:text-5xl font-bold">Welcome to Tech World</h1>
                    <p className="p-6 text-xl">Explore fantastic features and get chance to communicate and seek help to experts. Take guidance in learning technologies.</p>
                    <Link to={'/dashboard'}><button className="btn btn-primary text-white">Explore More</button></Link>
                </div>
            </div>
            <p
                onClick={() => navigate('/register')}
                className=' border-2 border-primary mx-auto max-w-lg py-5 rounded-full hover:bg-blue-50 font-bold mt-24'>New to TechHUB? <Link to={'/register'} className='text-primary'>Join Now</Link></p>
        </div>
    );
};

export default TopBanner;