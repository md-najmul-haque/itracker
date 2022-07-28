import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface IFormInput {
    name: string;
    email: string;
    password: string;
}

function SIgnUp() {

    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {

        const { data: user, isLoading, error } = useQuery(['user'], () =>
            fetch('http://localhost:5000/',
                {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: 'JSON.stringify'
                })
                .then(res => {
                    console.log(data);
                    return res.json()
                }))

    }

    return (
        <div className='h-screen bg-slate-50 flex justify-center items-center'>
            <div className="card w-96 bg-white shadow-2xl">
                <div className="card-body">
                    <h2 className='text-center text-3xl pb-3'>Sing Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="input input-bordered bg-slate-50 w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },

                                    minLength: {
                                        value: 3,
                                        message: 'error message'
                                    }
                                })} />
                            <label className="label label-text-alt">
                                {errors.name?.type === 'required' && <span className='text-red-600'>{errors.name.message}</span>}
                                {errors.name?.type === 'minLength' && <span className='text-red-600'>{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="input input-bordered bg-slate-50 w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },

                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/,
                                        message: 'Please enter valid email address'
                                    }
                                })} />
                            <label className="label label-text-alt">
                                {errors.email?.type === 'required' && <span className='text-red-600'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-600'>{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="input input-bordered bg-slate-50 w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Password minimum length should be six characters'
                                    }
                                })} />
                            <label className="label label-text-alt">
                                {errors.password?.type === 'required' && <span className='text-red-600'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>{errors.password.message}</span>}
                            </label>
                        </div>

                        <input type="submit" className="btn btn-primary w-full max-w-xs text-white mb-2" value='Login' />
                        <small>Already have an account?<Link to='/signin' className="text-blue-600 pl-2">Sign in</Link></small>
                    </form>

                    <div className="divider">or</div>
                    <button className="btn btn-primary text-white">Continue with Google</button>
                    <button className="btn btn-primary text-white">Continue with Github</button>
                </div>
            </div>
        </div>
    )
}

export default SIgnUp