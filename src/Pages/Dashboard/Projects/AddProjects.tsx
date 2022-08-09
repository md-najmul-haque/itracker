import React from 'react';
import { useForm } from 'react-hook-form';
import './Projects'


const AddProjects = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div className='lg:mt-32 mt-10 mx-8'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-secondary lg:w-[400px] md:w-[400px] mx-auto p-5 rounded-lg shadow-md">
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Project Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Project Name"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("projectName", {
                            required: {
                                value: true,
                                message: "name is required"

                            }
                        })}
                    />
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Project Description</span>
                    </label>
                    <textarea
                        placeholder="Project Description"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("projectDescription")}
                    />
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Invite Your Team Member</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Invite Your Team Member"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("email", {
                            pattern: {
                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/,
                                message: 'Please enter valid email address'
                            }
                        })} />
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Starting Date</span>
                    </label>
                    <input
                        type="date"
                        placeholder="Your Name"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("startingDate", {
                            required: {
                                value: true,
                                message: "name is required"

                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">End Date</span>
                    </label>
                    <input
                        type="date"
                        placeholder="Your Name"
                        className="input input-bordered bg-white w-full max-w-xs"
                        {...register("endData", {
                            required: {
                                value: true,
                                message: "name is required"

                            }
                        })}
                    />
                </div>
                <div className='w-full max-w-xs mx-auto m-5'>
                    <input className=' btn btn-accent text-white w-full max-w-xs ' type="submit" value="Add Project" />
                </div>
            </form>
        </div>
    );
};

export default AddProjects;