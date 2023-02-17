import React from 'react';
import devPic from '../../assets/about/developerPic.jpg';

const AboutDev = ({ navigate }) => {
    return (
        <div className="card min-h-screen bg-blue-50 shadow-md shadow-primary">
            <div className="card-body flex flex-col justify-between">
                <div >
                    <h2 className=" text-4xl font-bold">About Developers</h2>
                    <img className="mask mask-squircle mt-8 h-1/2 mx-auto" src={devPic} alt='' />
                    <ul className=' text-start lg:pl-28 mt-12  font-semibold list-disc'>
                        <li>Mohammad Abul Kashem</li>
                        <li>Naimur Rahman</li>
                        <li>Ariful Islam Arif</li>
                        <li>Mohammad Al Amin</li>
                        <li>Shihab Al Ratul</li>
                        <li>Md Mezbah Uddin</li>
                    </ul>
                </div>
                <div className="card-actions justify-center ">
                    <button onClick={() => navigate('/developers-details')} className="btn btn-outline btn-primary px-12 rounded-full">View Developer Details</button>
                </div>
            </div>
        </div>
    );
};

export default AboutDev;