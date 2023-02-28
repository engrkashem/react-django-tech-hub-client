import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashSide = () => {
    const navigate = useNavigate();
    return (
        <div className=' mt-12 flex flex-col items-center'>
            <div className='flex flex-col items-start pt-8'>
                <div className='my-4'>
                    <button onClick={() => navigate('/dashboard/write-blog')} className=' min-w-fit flex items-center mx-auto gap-2 text-slate-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            < path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg > <span>Write New Blog</span></button >
                </div>
                <div className='my-4'>
                    <button onClick={() => navigate('/dashboard')}
                        className=' min-w-fit flex items-center mx-auto gap-2 text-slate-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg>

                        <span>My Favourite Blogs</span></button >
                </div>
            </div>
        </div >
    );
};

export default DashSide;