import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import BlogCard from './Blogs/BlogCard';


const Dashboard = () => {
    // const blogs = useLoaderData()
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState(null)

    let all_blog_url = '';
    if (search) {
        all_blog_url = `http://127.0.0.1:8000/blog/?topic=${search}`;
    }
    else {
        all_blog_url = `http://127.0.0.1:8000/blog/`;
    }

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: () => fetch(all_blog_url).then(res => res.json())
    })


    // console.log(blogs)


    if (loading) {
        window.location.reload()
        setLoading(false)
    }




    return (
        <div className='pt-10 overflow-y-scroll min-h-screen  px-10'>
            <div class="relative mt-12 max-w-md mx-auto">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Blog by Topic" required />
                <button type="submit" class=" absolute right-2.5 bottom-2.5 text-white bg-primary rounded-full p-2 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary font-medium text-sm dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </button>
            </div>
            <div className='bg-base-100 min-h-screen w-full mt-6'>
                {
                    blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Dashboard;