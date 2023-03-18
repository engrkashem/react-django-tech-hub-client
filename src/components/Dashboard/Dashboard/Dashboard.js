// import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
// import { useLoaderData } from 'react-router-dom';
import BlogCard from './Blogs/BlogCard';


const Dashboard = () => {
    const [searchText, setSearchText] = useState('')
    const [blogs, setBlogs] = useState('')


    // const all_blog_url = `http://127.0.0.1:8000/blog/`;
    // const { data: blogs = [], refetch } = useQuery({
    //     queryKey: ['blog'],
    //     queryFn: () => fetch(all_blog_url).then(res => res.json())
    // })

    useEffect(() => {
        // let url = `http://127.0.0.1:8000/blog/?topic=${searchText}`;
        let url = `https://naimur.pythonanywhere.com/blog/?topic=${searchText}`;
        fetch(url).then(res => res.json()).then(data => {
            if (data.length === 0) {
                setSearchText('')
                toast.error('No Blog is found. Showing all Blogs')
            }
            setBlogs(data)
        })
    }, [searchText])

    const handleSearch = () => {
        // setIsBlog(false)
        const searchField = document.getElementsByName('search')
        setSearchText(searchField[0].value)
        searchField[0].value = ''
    }
    // console.log(blogs)



    return (
        <div className='pt-10 overflow-y-scroll min-h-screen  px-10'>
            <div className="relative mt-12 max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input name='search' type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Blog by Topic/ Empty for all blogs" required />
                <button onClick={handleSearch} type="submit" className=" absolute right-2.5 bottom-2.5 text-white bg-primary rounded-full p-2 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary font-medium text-sm dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </button>
            </div>
            <div className='bg-base-100 min-h-screen w-full mt-6'>
                {
                    blogs && blogs?.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Dashboard;