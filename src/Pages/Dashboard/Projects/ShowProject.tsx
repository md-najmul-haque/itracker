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
            <div className="text-left">
                <p className="py-2">Project Description: {projectDescription}</p>
                <p className="pb-2">{email}</p>
                <div className="flex justify-between">
                    <p>Starting Date:{startingDate}</p>
                    <p>End Data: {endData}</p>
                </div>
            </div>
            <div className="mt-2.5">
                <Link to='/dashboard/myProject/list' className='btn-accent transition-all text-white font-medium py-2 px-6'>Details</Link>
            </div>
        </div>
    );
};

export default ShowProject;