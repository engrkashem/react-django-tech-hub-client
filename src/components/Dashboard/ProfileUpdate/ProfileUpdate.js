import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';


const ProfileUpdate = () => {
    const { signIn, signInWithGoogle, updateUserProfile } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleEdit = (data) => {
        const photo = data?.photo;
        const userInfo = {
            photoURL: photo
        }

        updateUserProfile(userInfo)
        .then(res=> {
            console.log(res, 'line 18')
        })
        .catch(err => {
            console.log(err, 'line 21')

        });
    }

    return (
        <div className=' lg:w-1/2 mx-auto lg:p-10 shadow-sm shadow-primary py-5' >
            <h1 className=' text-3xl font-bold text-primary'>Edit profile</h1>
            <form  className='my-5' onSubmit={handleSubmit(handleEdit)}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type='text' className="input input-bordered w-full max-w-xs" {...register("photo", {
                            required: {
                                value: true,
                                message: 'Photo URL is required'
                            }
                        })}
                        placeholder='Your photo URL'/>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="New Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                   
                   <label className="label">
                        <span className="label-text">Prefession</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Profession"
                        className="input input-bordered w-full max-w-xs"
                        {...register("profession")}
                    />
                    <label className="label">
                        <span className="label-text">Interest</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Interest"
                        className="input input-bordered w-full max-w-xs"
                        {...register("interest")}
                    />
                   

                    <input
                        type="submit" className="input input-bordered w-full max-w-xs my-5" />

                </div>
            </form>
            
        </div>
    );
};

export default ProfileUpdate;