import { Dispatch, SetStateAction } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { MeetingType } from "./Meeting.type";

type addMeetingProps = {
    setModal: Dispatch<SetStateAction<boolean>>
}

const AddMeeting = ({ setModal }: addMeetingProps) => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<MeetingType>();
    const onSubmit: SubmitHandler<MeetingType> = (data) => {
        const meeting = {
            meetingTitle: data.meetingTitle,
            projectName: data.projectName,
            meetingAgenda: data.meetingAgenda,
            meetingLink: data.meetingLink,
            email: data.email,
            date: data.date,
            time: data.time
        }

        fetch('https://dry-eyrie-76820.herokuapp.com/addMeeting',
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(meeting)
            })
            .then(res => res.json())
            .then(data => console.log(data))

        swal({
            title: "Congrats!",
            text: "Meeting Updated Successfully!",
            icon: "success",
        });
        setModal(false);
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
                    <h3 className="font-bold text-lg">Hi <span className="text-primary">{user?.displayName}</span>! Create your new meeting schedule.</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-base-100 mx-auto p-5">
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
                                <span className="label-text">Project Name</span>
                            </label>
                            <input
                                className="input input-bordered bg-white w-full"
                                {...register("projectName", {
                                    required: {
                                        value: true,
                                        message: "Project name is required"
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
                                className="input input-bordered bg-white w-full"
                                {...register("date", {
                                    required: {
                                        value: true,
                                        message: "name is required"

                                    }
                                })}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Starting Time</span>
                            </label>
                            <input
                                type="time"
                                className="input input-bordered bg-white w-full"
                                {...register("time", {
                                    required: {
                                        value: true,
                                        message: "Time is required"
                                    }
                                })}
                            />
                        </div>

                        <div className="w-full mx-auto m-5">
                            <input className='btn btn-accent text-white w-full' type="submit" value="Add Meeting" />
                        </div>
                    </form>

                </div>
            </div>
        </div >
    );
}

export default AddMeeting;