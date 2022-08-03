import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import { BiLock } from 'react-icons/bi';

interface IFormInput {
    email: string;
    password: string;
}

const SingIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);
    }

    if (gError || gitError) {
        return (
            <div>
                <p>Error: {gError?.message} {gitError?.message}</p>
            </div>)
    }

    if (gLoading || gitLoading) {
        return <Loading />
    }

    if (gUser || gitUser) {
        navigate('/')
    }

    return (

        <div className='h-screen bg-slate-50 flex justify-center items-center'>
            <div className="card w-96 bg-white shadow-2xl">
                <div className="card-body">
                    <div className='flex justify-center item-center '>
                        < BiLock className='text-white w-12 h-12 bg-primary rounded-full' />
                    </div>
                    <h2 className='text-center text-3xl pb-3'>Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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

                        <input type="submit" className="btn btn-primary w-full max-w-xs text-white mb-2" value='Sign In' />
                        <small>New in iTracker?<Link to='/signup' className="text-blue-600 pl-2">Create New Account</Link></small>
                    </form>

                    <div className="divider">or</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary text-white">Continue with Google</button>
                    <button onClick={() => signInWithGithub()} className="btn btn-primary text-white">Continue with Github</button>
                </div>
            </div>
        </div>

    );
};

export default SingIn;