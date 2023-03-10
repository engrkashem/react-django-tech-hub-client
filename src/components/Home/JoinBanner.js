import React from 'react';
import './Home.css';
import pic from '../../assets/profile/ksmProfilePic.png'

const JoinBanner = () => {
    return (
        <div className=' py-20 px-5 lg:px-20 '>
            <div className="stats shadow h-60 w-full">

                <div className="stat shadow-md">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-16 h-16 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Loved by</div>
                    <div className="stat-value text-primary">18.3K</div>
                    <div className="stat-desc">32% more than last month</div>
                </div>

                <div className="stat shadow-md">
                    <div className="stat-figure text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-16 h-16 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Traffic</div>
                    <div className="stat-value text-accent">3.1M</div>
                    <div className="stat-desc">34% more than last month</div>
                </div>

                <div className="stat shadow-md">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={pic} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">97%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc ">4 tasks remaining</div>
                </div>

            </div>
        </div>
    );
};

export default JoinBanner;