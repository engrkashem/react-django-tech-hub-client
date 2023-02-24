import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
// import NavBar from '../Shared/NavBar/NavBar';
import JobCard from './JobCard';

const Jobs = () => {
    // const [isErr, setErr] = useState('')
    const [isSearch, setSearch] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const jobs_url = `http://127.0.0.1:8000/job/?search=`;
    const {isError, error, data: jobs = [] } = useQuery({
        queryKey: ['job', isSearch],
        queryFn: () => fetch(jobs_url+isSearch).then(res => res.json())
        

    })
    console.log(jobs)

    const handleSearch = (data)=>
    {
        if(data.search)
            setSearch(data.search)
        else
            setSearch('')

        
    }

    return (
        
        <div className='grid grid-cols-3 gap-4 px-20 m-3'>
            <div className='col-span-1 p-2 block'> 
            <form onSubmit={handleSubmit(handleSearch)}>
                <input type="text" placeholder="Search with your job skill" className="input border rounded-full input-primary w-full max-w-md" name='search' {...register("search", {
                            required: {
                                value: false
                            }
                        })} />
                
                <button className='btn btn-primary rounded-full ml-3' type='submit'>
                    <MagnifyingGlassIcon className='w-4 h-4'></MagnifyingGlassIcon>
                </button>
            </form>
            
            {
               jobs?.map(job=>
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