import React from 'react';

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
    console.log(project)
    const { projectName, projectDescription, email, startingDate, endData } = project;
    return (
        <div className='bg-white rounded-lg text-center shadow-2xl py-5'>
            <p className='text-2xl font-semibold'>{projectName}</p>
            <p>{projectDescription}</p>
            <p>{email}</p>
            <p>starting Date:{startingDate}</p>
            <p>End Data: {endData}</p>
        </div>
    );
};

export default ShowProject;