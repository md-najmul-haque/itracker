import React from "react";
import { Link } from "react-router-dom";
import { AllTaskProps } from "../../../../../types/task.type";

const AllTask = ({ task }: AllTaskProps) => {

    const { _id, projectId, taskName, description, email, dueData, stage, priority, status } = task


    const handleIssue = (e: React.BaseSyntheticEvent<object, any, any>, id: string) => {
        e.preventDefault()
        e.stopPropagation();

        console.log((e.target as HTMLInputElement).value)

        const task = {
            projectId: projectId,
            taskName: taskName,
            description: description,
            email: email,
            dueData: dueData,
            stage: e?.target.value,
            priority: e?.target.value,
            status: e?.target.value,
        }

        console.log(task)
        fetch(`https://dry-eyrie-76820.herokuapp.com/addTask/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
    }

    return (
        <tbody className="w-full">
            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-12">
                    <p className="text-sm font-medium leading-none text-gray-800">{taskName}</p>
                </td>
                <td className="pl-12">
                    <p className="font-medium">{description}</p>
                </td>

                <td className="pl-20">
                    <select name='stage' onChange={(e) => handleIssue(e, _id)} className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
                        <option value={stage}>{stage}</option>
                        <option value='To Do'>To Do</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Done'>Done</option>
                    </select>
                </td>

                <td className="pl-20">
                    <select name='priority' onChange={(e) => handleIssue(e, _id)} className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
                        <option value={priority}>{priority}</option>
                        <option value='Low'>Low</option>
                        <option value='Normal'>Normal</option>
                        <option value='High'>High</option>
                    </select>
                </td>

                <td className="pl-20">
                    <select name='status' onChange={(e) => handleIssue(e, _id)} className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
                        <option value={status}>{status}</option>
                        <option value='On Track'>On Track</option>
                        <option value='At Risk'>At Risk</option>
                        <option value='Off Track'>Off Track</option>
                    </select>
                </td>

                <td className="pl-20">
                    <p className="font-medium">{dueData.slice(0, 10)}</p>
                    {/* <input
                        type="date"
                        className="input font-medium focus:outline-0 focus:border-secondary rounded-sm bg-inherit"
                        defaultValue={dueData}
                    /> */}
                </td>

                <td className="pl-16">
                    <div className="flex items-center">
                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" alt='' />
                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" alt='' />
                    </div>
                </td>

                <td className="pl-20">
                    <div className="font-medium">
                        <Link to={`#`} className="btn btn-sm btn-secondary">Edit</Link>
                    </div>
                </td>

            </tr>

        </tbody>

    );
};

export default AllTask;