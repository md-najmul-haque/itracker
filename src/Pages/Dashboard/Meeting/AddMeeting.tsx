import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

interface IFormInput {
    meetingTitle: string,
    meetingAgenda: string,
    meetingLink: string,
    email: string,
    date: string,
}

const AddMeeting = () => {

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const meeting = {
            meetingTitle: data.meetingTitle,
            meetingAgenda: data.meetingAgenda,
            meetingLink: data.meetingLink,
            email: data.email,
            date: data.date,
        }

        fetch('http://localhost:5000/addProject', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(meeting)
        })
            .then(res => res.json())
            .then(meeting => console.log(meeting))

    };

    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <input type="checkbox" id="add-meeting" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-meeting" className="btn btn-sm bg-accent text-white btn-square absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Hi {user?.displayName}! Create your new projects.</h3>


                    <form onSubmit={handleSubmit(onSubmit)} className="bg-secondary mx-auto p-5">
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Meeting Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Meeting Title"
                                className="input input-bordered bg-white w-full"
                                {...register("meetingTitle", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Meeting Agenda</span>
                            </label>
                            <textarea
                                placeholder="Meeting Agenda"
                                className="input input-bordered bg-white w-full"
                                {...register("meetingAgenda")}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Meeting Link</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Meeting Link"
                                className="input input-bordered bg-white w-full"
                                {...register("meetingLink", {
                                    required: {
                                        value: true,
                                        message: "Meeting link is required"
                                    }
                                })}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Invite Your Team Member</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Invite Your Team Member"
                                className="input input-bordered bg-white w-full"
                                {...register("email", {
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please enter valid email address'
                                    }
                                })} />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Starting Date</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Your Name"
                                className="input input-bordered bg-white w-full"
                                {...register("date", {
                                    required: {
                                        value: true,
                                        message: "name is required"

                                    }
                                })}
                            />
                        </div>


                        {/* <div className="modal-action w-full mx-auto m-5">
                        <label className='btn btn-accent type="submit" text-white w-full' htmlFor="add-project"> Add </label>
                    </div> */}
                        <div className="modal-action w-full mx-auto m-5">
                            <input className='btn btn-accent text-white w-full' type="submit" value="Add Project" />
                        </div>
                    </form>

                </div>
            </div>
        </div >
    );
}

export default AddMeeting;