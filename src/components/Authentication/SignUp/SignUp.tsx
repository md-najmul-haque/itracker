import React, { useState } from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


interface IFormInput {
    name: string;
    email: string;
    password: string;
    isLoading: boolean;
}

function SignUp() {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [socialUser, socialLoading] = useAuthState(auth)

    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit, reset } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async data => {

        const email = data.email
        const password = data.password
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: data.name });

        const createUser = {
            userName: data.name,
            email: email
        }

        fetch('https://itracker-server.vercel.app/signup',
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(createUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        // toast('You have successfully create your account')
        reset()

        console.log(createUser)

    }

    let errorMessage;

    if (error) {
        return (
            errorMessage = <p>Error: {error?.message}</p>
        )
    }

    if (loading || socialLoading) {
        return <Loading />
    }



    if (user || socialUser) {
        navigate('/dashboard/project')
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
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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

                        <input type="submit" className="btn btn-primary w-full max-w-xs text-white mb-2" value='Sing Up' />
                        <small>Already have an account?<Link to='/signin' className="text-blue-600 pl-2">Sign In</Link></small>
                    </form>

                    <p>{errorMessage}</p>

                    <div className="divider">or</div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    )
}

export default SignUp