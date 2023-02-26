import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const BlogBottomNavigation = ({ blog }) => {
    const navigate = useNavigate()
    const { id, topic } = blog

    // console.log(id)
    return (
        <div className=' lg:flex items-center justify-between '>
            <div className='flex items-center text-slate-500 gap-3'>
                <button className=' btn-active  bg-blue-100 rounded-full px-2 text-sm'>{topic}</button>
                <button className=' text-sm'>10 min read</button>
                <button className=' text-sm'>Selected for you</button>
            </div>
            <div className='flex gap-3 text-slate-500 text-sm my-5'>
                <button className=' tooltip' data-tip="Save">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                </button>
                <button className='tooltip' data-tip="Show less like this">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
                <div className="dropdown dropdown-hover dropdown-end">
                    <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                        <li ><button onClick={() => navigate(`/dashboard/update-blog/${id}`)} className=' hover:bg-blue-50'>Update Blog </button></li>
                        <li><button className=' hover:bg-blue-50'>Delete Blog </button></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default BlogBottomNavigation;