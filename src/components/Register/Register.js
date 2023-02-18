import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import AuthProvider, { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const { createUser, signIn, signInWithGoogle } = useContext(AuthContext);
    const [err, setErr] = useState('');

    const handleRegister = (data) => {
        const { email, password, confirmPassword } = data;
        if (password === confirmPassword) {
            setErr('')
            createUser(email, password)
                .then(res => {
                    const user = res.user;
                    console.log(user);
                })
                .catch(error => console.error(error))
        }
        else {
            setErr('Password did not match.')
        }
        console.log(email, password, confirmPassword);
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                const user = res.user;
            }).catch((error) => {
                setErr(error.message)
            });
        
    }

    return (
        <div className=' lg:w-1/2 mx-auto lg:p-10 shadow-sm shadow-primary'>
            <h1 className=' text-3xl font-bold text-primary'>Register</h1>
            <form onSubmit={handleSubmit(handleRegister)} className=''>
                <div className="form-control w-full max-w-xs mx-auto">
                    {/* name */}
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                    </label>

                    {/* Email */}
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Enter a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                    </label>

                    {/* Password */}
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                message: 'Password should contain  one upper case, lower case, sepecial character, digit and min length 8.'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                    </label>

                    {/* comfirm password */}
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="ReEnter your password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: 'Password confirmation is required'
                            },
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                message: 'Password should contain  one upper case, lower case, sepecial character, digit and min length 8.'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-700">{errors.confirmPassword.message}</span>}
                        {errors.confirmPassword?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.confirmPassword.message}</span>}
                        {err && <span className=' text-red-700'>{err}</span>}
                    </label>


                    <input
                        type="submit" className="input input-bordered w-full max-w-xs border-primary" onClick={handleGoogleLogin}/>
                </div>
            </form>
            <div className="divider w-1/2 mx-auto">OR</div>
            <button className="btn btn-outline btn-primary" onClick={()=> handleGoogleLogin()}>Continue with GOOGLE</button>
            <h6 className=' mt-5'>Already a User? Please <button onClick={() => navigate('/login')} className=' text-primary font-semibold'>Login</button></h6>
        </div>
    );
};

export default Register;