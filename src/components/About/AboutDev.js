import React from 'react';

const AboutDev = () => {
    return (
        <div className="card bg-blue-50 shadow-md shadow-primary">
            <div className="card-body flex flex-col justify-between">
                <div>
                    <h2 className=" text-4xl font-bold">About Developers</h2>
                    <ul className=' text-start lg:pl-28 mt-16 font-semibold list-disc'>
                        <li>Mohammad Abul Kashem</li>
                        <li>Naimur Rahman</li>
                        <li>Ariful Islam Arif</li>
                        <li>Mohammad Al Amin</li>
                        <li>Shihab Al Ratul</li>
                        <li>Md Mezbah Uddin</li>
                    </ul>
                </div>
                <div className="card-actions justify-center mt-12">
                    <button className="btn btn-outline btn-primary px-12 rounded-full">View Project Details</button>
                </div>
            </div>
        </div>
    );
};

export default AboutDev;