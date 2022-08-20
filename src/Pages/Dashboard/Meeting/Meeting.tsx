import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Loading from '../../Shared/Loading/Loading';
import AddMeeting from './AddMeeting'
import { MeetingType } from './Meeting.type';


const Meeting = () => {
    const [modal, setModal] = useState(false)

    const { data: meetings, isLoading, error, refetch } = useQuery(['meetings'], () =>
        fetch('https://dry-eyrie-76820.herokuapp.com/getMeeting')
            .then(res => res.json())
    )
    refetch();

    const handleDelete = (_id: string) => {
        fetch(`https://dry-eyrie-76820.herokuapp.com/deleteMeeting/${_id}`,
            {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
        swal({
            title: "Meeting Deleted!",
            text: "Meeting Deleted Successfully!",
            icon: "info",
        });

    }



    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-20 mx-10'>
            <div className="w-full sm:px-6">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Meeting Schedule</p>
                        <div>
                            <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start bg-accent hover:bg-accent-focus focus:outline-none rounded">
                                <label htmlFor="add-meeting" onClick={() => setModal(true)} className="text-sm px-6 py-3 font-medium leading-none text-white">+ Create Meeting </label>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full font-semibold text-left text-sm leading-none text-gray-800">
                                <th className="pl-4">Meeting Title</th>
                                <th className="pl-12">Project Name</th>
                                <th className="pl-12">Meeting Agenda</th>
                                <th className="pl-20">Date</th>
                                <th className="pl-16">Members</th>
                                <th className="pl-20">Time</th>
                                <th className="pl-20">Meeting Link</th>
                                <th className="pl-20">Action</th>
                            </tr>
                        </thead>

                        {meetings.map((meeting: MeetingType) => <>
                            <tbody className="w-full">
                                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                    <td className="pl-4 cursor-pointer">
                                        <p className="font-medium">{meeting.meetingTitle}</p>

                                    </td>
                                    <td className="pl-12">
                                        <p className="text-sm font-medium leading-none text-gray-800">{meeting.projectName}</p>
                                    </td>
                                    <td className="pl-12">
                                        <p className="font-medium">{meeting.meetingAgenda}</p>
                                    </td>

                                    <td className="pl-20">
                                        <p className="font-medium">{meeting.date}</p>
                                    </td>
                                    <td className="pl-16">
                                        <div className="flex items-center">
                                            <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" alt='' />
                                            <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" alt='' />
                                            <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" alt='' />
                                            <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" alt='' />
                                        </div>
                                    </td>
                                    <td className="pl-20">
                                        <p className="font-medium">{meeting.time}</p>
                                    </td>
                                    <td className="pl-20">
                                        <p style={{ color: '#0000EE' }} className="font-medium"><a href={meeting.meetingLink} rel="noreferrer" target="_blank">Join</a></p>
                                    </td>
                                    <td className="pl-20">
                                        <div className="font-medium">
                                            <Link to={`/dashboard/meeting/${meeting._id}`} className="btn btn-sm btn-secondary">Edit</Link>
                                            <button onClick={() => { handleDelete(meeting._id) }} className="btn btn-sm btn-secondary ml-2">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </>)
                        }


                    </table>
                </div>
            </div>

            <div>
                {
                    modal && <AddMeeting setModal={setModal} />
                }
            </div>

        </div>
    );
};

export default Meeting;