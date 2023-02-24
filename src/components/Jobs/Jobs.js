import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import JobCard from './JobCard';

const Jobs = () => {
    const [isErr, setErr] = useState('')
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
    console.log(jobs)

    const handleSearch = (data) => {
        if (data.search)
            setSearch(data.search)
        else
            setSearch('')


    }

    return (

        <div className='px-20 w-full min-h-screen'>
            <form onSubmit={handleSubmit(handleSearch)} className=' flex items-center justify-center pt-5 mb-20'>
                <input type="text" placeholder="Search with your job skill" className="input border rounded-full input-primary w-full max-w-md" name='search' {...register("search", {
                    required: {
                        value: false
                    }
                })} />

                <button className='btn btn-primary btn-outline rounded-full ml-1 flex items-center justify-center' type='submit'>
                    <MagnifyingGlassIcon className='w-4 h-4'></MagnifyingGlassIcon>
                </button>
            </form>

            <div>
                {
                    jobs.jobs?.map(job =>
                        <JobCard
                            key={job.id}
                            job={job}
                        >
                        </JobCard>
                    )
                }
            </div>
        </div>


    );
};

export default Jobs;