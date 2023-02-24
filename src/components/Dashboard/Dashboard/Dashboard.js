import { useQuery } from '@tanstack/react-query';
import BlogCard from './BlogCard';


const Dashboard = () => {
    const all_blog_url = `http://127.0.0.1:8000/blog/`;

    const { data: blogs = [] } = useQuery({
        queryKey: ['blog'],
        queryFn: () => fetch(all_blog_url).then(res => res.json())
    })
    console.log(blogs)







    return (
        <div className='bg-base-100 min-h-screen w-full px-10'>
            {
                blogs.map(blog => <BlogCard
                    key={blog.id}
                    blog={blog}
                ></BlogCard>)
            }
        </div>
    );
};

export default Dashboard;