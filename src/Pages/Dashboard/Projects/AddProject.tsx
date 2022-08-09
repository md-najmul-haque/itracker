import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    projectName: string,
    projectDescription: string,
    email: string,
    startingDate: string,
    endData: string
}

const AddProject = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);





    return (
        <div>
            <input type="checkbox" id="add-project" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-project" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>


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

                        <div className="modal-action w-full max-w-xs mx-auto m-5">
                            <label className='btn btn-accent type="submit" text-white w-full max-w-xs ' htmlFor="add-project"> Add </label>
                        </div>
                        <div className="modal-action w-full max-w-xs mx-auto m-5">
                            <input className='btn btn-accent text-white w-full max-w-xs ' type="submit" value="Add Project" />
                        </div>
                    </form>

                </div>
            </div>
        </div >

    );
};

export default AddProject;