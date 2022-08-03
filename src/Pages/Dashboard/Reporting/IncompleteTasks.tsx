import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
const IncompleteTasks = () => {
    return (
        <div className='overflow-x-auto'>
            <div className='my-5'>
                <p className='mx-2 font-medium text-2xl'>Incomplete Tasks</p>
            </div>
            <div className='lg:mx-6'>
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Task Name</th>
                            <th>Assignee</th>
                            <th>Due Date</th>
                            <th>Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td >
                                <div className='flex justify-between items-center'>
                                    <h1>Deploy the Server Site in a Live link</h1>

                                    <p className='flex items-center gap-2 cursor-pointer'>Details <FaGreaterThan/></p>
                                </div>
                            </td>
                            <td className='flex items-center gap-2'>
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                        <span><img src="https://placeimg.com/192/192/people" /></span>
                                    </div>
                                </div>
                                <div>
                                    <p>Shuvo</p>
                                </div>
                            </td>
                            <td>22 jul</td>
                            <td>Itracker</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IncompleteTasks;