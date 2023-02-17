import React from 'react';

const AboutProject = () => {
    return (
        <div className="card bg-blue-50 shadow-md shadow-primary">
            <div className="card-body flex flex-col justify-between">
                <div>
                    <h2 className=" text-4xl font-bold">About TechHUB</h2>
                    <ul className=' text-start lg:pl-28 mt-16 font-semibold list-disc'>
                        <li>Read the Tech Blog</li>
                        <li>Seek help from experts directly</li>
                        <li>Learn at no Cost</li>
                        <li>Premium Courses Available</li>
                    </ul>
                </div>
                <div className="card-actions justify-center mt-12">
                    <button className="btn btn-outline btn-primary px-12 rounded-full">View Project Details</button>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;