import { Link } from "react-router-dom";
import { AllTaskProps } from "../../../types/task.type";


const MyAllTask = ({ task }: AllTaskProps) => {

    const { _id, projectId, taskName, description, email, dueData, stage, priority, status } = task

    const handleStage = (e:any) => {
        e.preventDefault()

        const updateStage = {
                stage: e.target.value
              } 
       
        fetch(`http://localhost:5000/updateTask/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStage)
        })
            .then(res => res.json())             

    }

    const handlePriority = (e:any) => {
        e.preventDefault()

        const updatePriority = {
            priority: e.target.value
              } 
       
        fetch(`http://localhost:5000/updateTask/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePriority)
        })
            .then(res => res.json())             

    }

    const handleStatus = (e:any) => {
        e.preventDefault()

        const updateStatus = {
                status: e.target.value
              } 
       
        fetch(`http://localhost:5000/updateTask/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
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
                    <select name='stage' onChange={handleStage}  className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
                        <option value={stage}>{stage}</option>
                        <option value='To Do'>To Do</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Done'>Done</option>
                    </select>
                </td>

                <td className="pl-20">
                    <select name='priority' onChange={handlePriority}  className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
                        <option value={priority}>{priority}</option>
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>
                </td>

                <td className="pl-20">
                    <select name='status' onChange={handleStatus}  className="select bg-inherit font-medium focus:outline-0 focus:border-secondary">
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

            </tr>

        </tbody>
    );
};

export default MyAllTask;