import React, { useState } from 'react';
import AddMeeting from './AddMeeting'


const Meeting = () => {
    const [modal, setModal] = useState(false)

    return (
        <div className='mt-20 mx-10'>

            <div className="w-full sm:px-6">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Meeting Schedule</p>
                        <div>
                            <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-accent hover:bg-accent-focus focus:outline-none rounded">
                                <label htmlFor="add-meeting" onClick={() => setModal(true)} className="text-sm font-medium leading-none text-white">+ Create Meeting </label>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-4">Meeting Title</th>
                                <th className="font-normal text-left pl-12">Project Name</th>
                                <th className="font-normal text-left pl-12">Meeting Agenda</th>
                                <th className="font-normal text-left pl-20">meetingLink</th>
                                <th className="font-normal text-left pl-20">Date</th>
                                <th className="font-normal text-left pl-16">Members</th>
                                <th className="font-normal text-left pl-20">Time</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <p className="font-medium">UX Design</p>

                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">Create Home Page</p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">About UI Design</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
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
                                    <p className="font-medium">4:00pm</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                {
                    modal && <AddMeeting />
                }
            </div>

        </div>
    );
};

export default Meeting;