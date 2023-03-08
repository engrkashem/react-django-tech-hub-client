import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import ApplyJob from './ApplyJob';
import CreateJob from './CreateJob';
import Description from './Description';
import JobCard from './JobCard';
import UpdateJob from './UpdateJob';

const Jobs = () => {
    const { user } = useContext(AuthContext);
    const [isErr, setErr] = useState('');
    const [isApply, setApply] = useState(false);
    const [isOnlyMy, setOnlyMy] = useState(false);
    const [isId, setId] = useState('');
    const [isSearch, setSearch] = useState('');
    const [isUpdate, setUpdate] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const jobs_url = `http://127.0.0.1:8000/job/?search=${isSearch}&email=${isOnlyMy?user.email:''}`;
    // const request = {
    //     method: 'GET',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify({'email':user.email})
    // }
    const { data: jobs = [] } = useQuery({
        queryKey: ['job', isSearch, isOnlyMy],
        queryFn: () => fetch(jobs_url).then(res => res.json())
    })

    const handleSearch = (data) => {
        if (data.search)
            setSearch(data.search)
        else
            setSearch('')


    }

    // console.log(user)

    const handleClick = id => {
        // id.preventDefault();
        // console.log(id)
        setId(id);
        setUpdate('');
        setApply(false)

    }

    const handleCreate = () => {
        setId('');
        setUpdate('');

    }

    const handleOnlyMy = () =>
    {
        if(isOnlyMy){
            setOnlyMy(false)
        }
        else{
            setOnlyMy(true)
        }
    
    }
    

    
    // console.log(filterJob(jobs.jobs))

    return (

        <div className='grid lg:grid-cols-3 gap-4 lg:px-40 m-3 min-h-screen pt-11 scroll-smooth'>
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


                <button className='w-2/5 btn btn-primary mb-5 text-white rounded-full mx-5' onClick={()=>handleCreate()}>

                    Create New Job
                </button>
                {/* <span className='text-normal ms-2'>
                    Filter: 
                </span> */}
                <button className='w-2/5 btn btn-primary btn-outline mb-5 text-white rounded-full mx-5' onClick={()=>handleOnlyMy()}>
                    
                    {
                        isOnlyMy?<>All Jobs</>:<>Posted by Me</>
                    }

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
                <div className="p-10 border mt-10 border-grey-100 mx-10 rounded w-full lg:min-h-screen shadow lg:max-h-screen overflow-auto scrollbar-none">
                    {/* <div className="divider lg:divider-horizontal w-0 min-h-screen"></div> */}
                    {/* <div className='mt-15 p-2'> */}
                    {
                        isUpdate ?

                        <UpdateJob
                        key = {isUpdate.id}
                        data = {isUpdate}
                        >

                        </UpdateJob>
                        :
                        <>
                            {isApply?
                                <ApplyJob
                                    key = {isId}
                                    apply = {isApply}
                                >

                                </ApplyJob>:
                                <>
                                    {isId ?<Description
                                        key={isId}
                                        id = {isId}
                                        update = {setUpdate}
                                        apply = {setApply}
                                        ></Description>
                                        : <CreateJob>
                                        </CreateJob>}
                                </>
                                
                                
                            
                            }
                            
                        </>

                    }

                    {/* </div> */}
                </div>
            </div>


        </div>

    );
};

export default Jobs;