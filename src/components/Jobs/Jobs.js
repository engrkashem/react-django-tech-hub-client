import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreateJob from './CreateJob';
import Description from './Description';
import JobCard from './JobCard';

const Jobs = () => {
    const [isErr, setErr] = useState('')
    const [isId, setId] = useState('')
    const [isSearch, setSearch] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const jobs_url = `http://127.0.0.1:8000/job/?search=`;
    const { data: jobs = [] } = useQuery({
        queryKey: ['job', isSearch],
        queryFn: () => fetch(jobs_url + isSearch).then(res => res.json()),
        onError: (errors) => {
            setErr(errors)
        }


    })

    const handleSearch = (data) => {
        if (data.search)
            setSearch(data.search)
        else
            setSearch('')


    }

    const handleClick = id => {
        // id.preventDefault();
        // console.log(id)
        setId(id);

    }

    return (

        <div className='grid lg:grid-cols-3 gap-4 lg:px-40 m-3 min-h-screen pt-11 scroll-smooth	'>
            <div className='lg:col-span-1 p-2 block overflow-auto max-h-screen scrollbar-none '>
                <form onSubmit={handleSubmit(handleSearch)} className=' flex items-center justify-center pt-6 mb-5'>
                    <input type="text" placeholder="Search with your job skill" className="input border rounded-full input-primary w-full max-w-md" name='search' {...register("search", {
                        required: {
                            value: false
                        }
                    })} />

                    <button className='btn btn-primary rounded-full ml-1 flex items-center justify-center' type='submit'>
                        <MagnifyingGlassIcon className='w-4 h-4'></MagnifyingGlassIcon>
                    </button>
                </form>

                <button className='w-full btn btn-primary mb-5 text-white rounded-full' onClick={() => setId('')}>
                    Create New Job
                </button>

                <div>
                    {
                        !jobs.jobs?.length ?
                            <h3>No Jobs avalilable for this skill</h3>

                            : jobs.jobs?.map(job =>
                                <button className="border rounded-md mb-10 text-left p-5 shadow-md active:bg-gray-100 focus:border-blue-400 w-full" onClick={() => handleClick(job.id)}>
                                    <JobCard
                                        key={job.id}
                                        job={job}

                                    >
                                    </JobCard>
                                </button>
                            )
                    }
                </div>

            </div>

            <div className='lg:col-span-2 flex w-full lg:mx-10 sm:hidden lg:block'>
                <div className="p-10 border mt-10 border-grey-100 mx-10 rounded w-full lg:min-h-screen shadow  overflow-auto lg:max-h-screen scrollbar-none">
                    {/* <div className="divider lg:divider-horizontal w-0 min-h-screen"></div> */}
                    {/* <div className='mt-15 p-2'> */}
                    {
                        <>
                            isId ?<Description
                                key={isId}
                                id={isId}
                            ></Description>
                            : <CreateJob>
                            </CreateJob>
                        </>
                    }

                    {/* </div> */}
                </div>
            </div>


        </div>

    );
};

export default Jobs;