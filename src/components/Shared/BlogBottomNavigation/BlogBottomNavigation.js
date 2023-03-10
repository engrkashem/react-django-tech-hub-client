import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const BlogBottomNavigation = ({ blog }) => {
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [like, setLike] = useState(blog.liked)

    const { id, topic, liked, blog_body, blog_creator } = blog
    // console.log(blog_creator.id)

    if (isDelete) {
        // console.log(isDelete)
        fetch(`http://127.0.0.1:8000/blog/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: ''
        }).then(res => res.json()).then(data => {
            toast('Your Blog is deleted successfully');
            window.location.reload(true);
            navigate('/dashboard');
        })
        toast('Your Blog is deleted successfully');
        window.location.reload(true);
    }

    const handleLiked = () => {
        const updated_blog = {
            liked: liked + 1,
            blog_body: blog_body,
            blog_creator: blog_creator.id
        }
        const url = `http://127.0.0.1:8000/blog/${id}`
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated_blog)
        }).then(res => res.json())
            .then(data => {
                // console.log(data)
                setLike(like + 1)
            })
    }

    // console.log(confirm, isDelete)
    return (
        <div className=' lg:flex items-center justify-between z-10'>
            <div className='flex items-center text-slate-500 gap-3'>
                <button className=' btn-active  bg-blue-100 rounded-full px-2 text-sm'>{topic.toUpperCase()}</button>
                <button className=' text-sm flex items-center gap-1'>
                    <span className=' font-semibold'>{like}</span>
                    <svg onClick={handleLiked} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-rose-700">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>

                </button>
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
                        <li><button onClick={() => setConfirm(true)} className=' hover:bg-blue-50'>Delete Blog </button></li>
                    </ul>
                </div>

            </div>
            {
                confirm && <ConfirmModal
                    setConfirm={setConfirm}
                    setIsDelete={setIsDelete}
                ></ConfirmModal>
            }
        </div>
    );
};

export default BlogBottomNavigation;