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
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F0EABE] lg:w-[400px] md:w-[400px] mx-auto p-5 rounded-lg shadow-md">
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Project Name</span>
                    </label>
                    <input
                        type="name"
                        placeholder="Project Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("ProjectName", {
                            required: {
                                value: true,
                                message: "name is required"

                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Starting Date</span>
                    </label>
                    <input
                        type="date"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
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
                        <span className="label-text">End Of Date</span>
                    </label>
                    <input
                        type="date"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("endDatae", {
                            required: {
                                value: true,
                                message: "name is required"

                            }
                        })}
                    />
                </div>
                <div className='w-full max-w-xs mx-auto m-5'>
                    <input className='btn w-full max-w-xs ' type="submit" value="Add Project" />
                </div>
            </form>
        </div>
    );
};

export default AddProjects;