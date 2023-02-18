import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()

    const { signIn } = useContext(AuthContext);

    const [loginErr, setLoginEr] = useState('');

    const handleLogin = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(res => {
                // const user = res?.user;
                // console.log(user);
                console.log(res);
            })
            .catch((error) => {
                const errorMessage = error?.message;
                setLoginEr(errorMessage);
            })
        // console.log(email, password);
    }
    return (
        <div className=' lg:w-1/2 mx-auto lg:p-10 shadow-sm shadow-primary'>
            <h1 className=' text-3xl font-bold text-primary'>Login</h1>
            <form onSubmit={handleSubmit(handleLogin)} className=''>
                <div className="form-control w-full max-w-xs mx-auto">
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
                        {loginErr && <p className='text-red-500 mt-1'>{loginErr}</p>}
                    </label>

                    <input
                        type="submit" className="input input-bordered w-full max-w-xs" />

                </div>
            </form>
            <div className="divider w-1/2 mx-auto">OR</div>
            <button className="btn btn-outline btn-primary">Continue with GOOGLE</button>
            <h6 className=' mt-5'>New to TechHUB? Please <button onClick={() => navigate('/register')} className=' text-primary font-semibold'>Register</button></h6>
        </div>
    );
};

export default Login;