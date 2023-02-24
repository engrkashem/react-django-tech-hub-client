import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import NavBar from '../Shared/NavBar/NavBar';
import JobCard from './JobCard';

const Jobs = () => {
    const jobs_url = `http://127.0.0.1:8000/job/`;
    const { data: jobs = [] } = useQuery({
        queryKey: ['job'],
        queryFn: () => fetch(jobs_url).then(res => res.json())
    })
    console.log(jobs)

    return (
        
        <div className='grid grid-cols-3 gap-4 px-20 m-3'>
            <div className='col-span-1 p-2'>
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