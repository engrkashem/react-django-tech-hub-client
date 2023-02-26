// import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './Blogs/BlogCard';


const Dashboard = () => {
    const blogs = useLoaderData()
    const [loading, setLoading] = useState(false)
    // const all_blog_url = `http://127.0.0.1:8000/blog/`;

    // const { data: blogs = [] } = useQuery({
    //     queryKey: ['blog'],
    //     queryFn: () => fetch(all_blog_url).then(res => res.json())
    // })
    // console.log(blogs)


    if (loading) {
        window.location.reload()
        setLoading(false)
    }




    return (
        <div className='pt-10 overflow-y-scroll min-h-screen'>
            <div className='bg-base-100 min-h-screen w-full px-10 mt-12'>
                {
                    blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                        setLoading={setLoading}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Dashboard;