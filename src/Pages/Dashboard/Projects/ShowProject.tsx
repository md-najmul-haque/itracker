import { Link } from "react-router-dom";

type ShowProjectProps = {
    project: {
        projectName: string,
        projectDescription: string,
        email: string,
        startingDate: string,
        endData: string
    }
}

const ShowProject = ({ project }: ShowProjectProps) => {





    const { projectName, projectDescription, email, startingDate, endData } = project;
    return (
        <div className='bg-white rounded-lg text-center shadow-2xl px-10 py-5'>
            <p className='text-2xl font-semibold'>{projectName}</p>
            <p className="py-2">Project Description: {projectDescription}</p>
            <p className="pb-2">{email}</p>
            <div className="flex justify-around font-semibold">
                <p>Starting Date:{startingDate}</p>
                <p>End Data: {endData}</p>
            </div>
            <Link to='/dashboard/myProject/issues' className='hover:bg-slate-600 transition-all py-1 text-secondary'>Details</Link>
        </div>
    );
};

export default ShowProject;