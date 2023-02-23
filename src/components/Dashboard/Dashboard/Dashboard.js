import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const Dashboard = () => {
    const all_blog_url = `http://127.0.0.1:8000/blog/`;
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blog'],
        queryFn: () => fetch(all_blog_url).then(res => res.json)
    })
    console.log(blogs)

    // useEffect(() => {
    //     fetch(all_blog_url)
    //         .then(res => res.json())
    //         .then(blogs => console.log(blogs))
    // }, [all_blog_url])





    return (
        <div className='bg-base-100 min-h-screen w-full'>
            <h1 className='text-6xl font-bold'>Comming Soon</h1>
        </div>
    );
};

export default Dashboard;