import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen bg-base-100' >
            <p onClick={() => navigate('/register')} className=' border-2 border-primary mx-auto max-w-lg py-5 rounded-full hover:bg-blue-50 font-bold'>New to TechHUB? <Link to={'/register'} className='text-primary'>Join Now</Link></p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 items-center'>
                <div>
                    <div className="avatar w-full">
                        <div className="lg:w-1/2 rounded-full mx-auto">
                            <img src={pic1} alt='' />
                        </div>
                    </div>
                    <h2 className=' text-4xl fonr-bold lg:mx-10'>Connect to the People Who can help You</h2>
                    <button className="btn btn-outline btn-primary mt-4 rounded-full lg:px-16">Find People You know</button>
                </div>
                <div>
                    <div className="avatar w-full">
                        <div className="lg:w-1/2 rounded-full mx-auto">
                            <img src={pic2} alt='' />
                        </div>
                    </div>
                    <h2 className=' text-4xl fonr-bold lg:mx-10'>Learn the Skills you need to Succeed.</h2>
                    <select className="select select-primary w-full max-w-xs rounded-full mt-4">
                        <option disabled selected>Choose a Topic to Learn About</option>
                        <option>Java</option>
                        <option>Go</option>
                        <option>C</option>
                        <option>C#</option>
                        <option>C++</option>
                        <option>Rust</option>
                        <option>JavaScript</option>
                        <option>Python</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Banner;