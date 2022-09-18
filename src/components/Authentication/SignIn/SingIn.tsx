import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import { BiLock } from 'react-icons/bi';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

interface IFormInput {
    email: string;
    password: string;
}

const SingIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [socialUser, socialLoading] = useAuthState(auth)

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<IFormInput> = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
    }

    let errorMessage;

    if (error) {
        return (
            errorMessage = <p className='text-error'>Error: {error?.message}</p>
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

                        <input type="submit" className="btn btn-primary w-full max-w-xs text-white mb-2" value='Sign In' />
                        <small>New in iTracker?<Link to='/signup' className="text-blue-600 pl-2">Create New Account</Link></small>
                    </form>
                    <p>{errorMessage}</p>
                    <div className="divider">or</div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SingIn;