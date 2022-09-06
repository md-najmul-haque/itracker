import { useNavigate } from "react-router-dom";
import { ShowProjectProps } from "../../../types/ShowProject.type";


const ShowProject = ({ project }: ShowProjectProps) => {

    const { _id, projectName, projectDescription, email, startingDate, endData } = project;

    const navigate = useNavigate()

    const navigateToList = (id: string) => {
        navigate(`/dashboard/myProject/list/${id}`)
        console.log(id)
    }

    return (
        <div className='bg-white rounded-lg text-center shadow-2xl px-10 py-5'>
            <p className='text-2xl font-semibold'>{projectName}</p>
            <div className="text-left">
                <p className="py-2">Project Description: {projectDescription}</p>
                <p className="pb-2">{email}</p>
                <div className="flex justify-between">
                    <p>Starting Date:{startingDate}</p>
                    <p>End Data: {endData}</p>
                </div>
            </div>
            <div className="mt-2.5">
                <button onClick={() => navigateToList(_id)} className='btn-accent transition-all text-white font-medium py-2 px-6'>Details</button>
            </div>
        </div>
    );
};

export default ShowProject;