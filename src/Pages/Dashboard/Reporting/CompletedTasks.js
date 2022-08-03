import React from 'react';

const CompletedTasks = () => {
    return (
        <div className='overflow-x-auto'>
            <div className='my-5'>
                <p>Complete Task</p>
            </div>
            <div className='lg:mx-6'>
                <table class="table w-full">
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
                            <td>Deploy the Server Site in a Live link.</td>
                            <td className='flex items-center gap-2'>
                                <div class="avatar placeholder">
                                    <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
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

export default CompletedTasks;