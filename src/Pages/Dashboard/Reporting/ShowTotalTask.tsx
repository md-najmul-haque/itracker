import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';

type ShowProjectProps = {
    project: {
        projectName: string,
        projectDescription: string,
        email: string,
        startingDate: string,
        endData: string
    }
}
const ShowTotalTask = ({ project }: ShowProjectProps) => {
    const { projectName, projectDescription, email, startingDate, endData } = project;
    return (
        <tr>
            <td>{projectName}</td>
            <td>{projectDescription}</td>
            <td>{email}</td>
            <td>{startingDate}</td>
            <td>{endData}</td>
        </tr>
    );
};

export default ShowTotalTask;