import React from 'react';
import { useNavigate } from 'react-router-dom';
import devDetailPic from '../../assets/about/devDetailPic.jpg';

const DetailsProject = () => {
    const navigate = useNavigate();
    return (
        <div className=' h-screen flex flex-col justify-between p-12'>
            <div >
                <h3 className='text-6xl font-bold text-primary'>Project Details</h3>
                <h4 className='text-3xl font-bold mt-5'>TechHUB</h4>
                <div className='shadow-sm shadow-primary w-3/4 mx-auto mt-16'>
                    <h3 className='text-3xl font-bold'>Summery</h3>
                    <div className=' my-10'>
                        <p className='p-8 text-justify'>The proposed social media and service-related project will offer subscription-based courses and targeted advertising alternatives, as well as a feature-rich and engaging user experience. The portal is anticipated to produce sizable revenue, boost website traffic, and foster user engagement thanks to its user-friendly interface, pertinent information, and reliable technical solution.</p>

                    </div>
                </div>
                <div className='shadow-sm shadow-primary w-3/4 mx-auto mt-16'>
                    <h3 className='text-3xl font-bold'>Features</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-3 justify-between my-10 '>
                        <div className=' text-start lg:p-8'>
                            <h6 className='text-xl font-bold'>User Dashboard</h6>
                            <ul className='list-disc pl-6'>
                                <li>Read & Post Blogs</li>
                                <li>Ask & Answer to Questions</li>
                            </ul>
                        </div>
                        <div className=' text-start lg:p-8'>
                            <h6 className='text-xl font-bold'>Admin Dashboard</h6>
                            <ul className='list-disc pl-6'>
                                <li>Manage Students</li>
                                <li>Manage Courses</li>
                                <li>Payments & Accounts</li>
                            </ul>
                        </div>
                        <div className=' text-start lg:p-8'>
                            <h6 className='text-xl font-bold'>Student Dashboard</h6>
                            <ul className='list-disc pl-6'>
                                <li>Enroll to course.</li>
                                <li>See Marks & Progress.</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='shadow-sm shadow-primary w-3/4 mx-auto mt-16'>
                    <h3 className='text-3xl font-bold'>Technologies</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-3 justify-between my-10 '>
                        <div className=' text-start lg:p-8'>
                            <h6 className='text-xl font-bold'>Frontend</h6>
                            <ul className='list-disc pl-6'>
                                <li>React.JS</li>
                                <li>Tailwind CSS</li>
                                <li>Firebase</li>
                                <li>React Form Hook</li>
                                <li>DaisyUI</li>
                            </ul>
                        </div>
                        <div className=' text-start lg:p-8'>
                            <h6 className='text-xl font-bold'>Backend</h6>
                            <ul className='list-disc pl-6'>
                                <li>Django</li>
                                <li>Django Rest Framework</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className=' text-start lg:p-8'>
                            <h6 className='text-xl font-bold'>Others</h6>
                            <ul className='list-disc pl-6'>
                                <li>Stripe</li>
                                <li>Google Analytics</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='flex justify-between w-3/4 mx-auto'>
                    <button onClick={() => navigate('/about')} className="btn btn-outline btn-primary rounded-full">Back to About</button>
                    <button onClick={() => navigate('/developers-details')} className="btn btn-outline btn-primary rounded-full">View Developer Details</button>
                </div>
            </div>

            <img src={devDetailPic} alt="" />
        </div>
    );
};

export default DetailsProject;