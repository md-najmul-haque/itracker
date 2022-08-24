import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ShowTotalTask from './ShowTotalTask';

interface Project {
    projectName: string,
    projectDescription: string,
    email: string,
    startingDate: string,
    endData: string
}

const TotalTasks = () => {
    const { data: projects, isLoading, error, refetch } = useQuery(['projects'], () =>
        fetch('http://localhost:5000//getProject')
            .then(res => res.json())
    )
    console.log(projects)
    return (
        <div className='overflow-x-auto'>
            <div className='my-5'>
                <p className='mx-2 font-medium text-2xl'>Total Tasks</p>
            </div>
            <div className='lg:mx-6'>
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th>ProjectName</th>
                            <th>ProjectDescription</th>
                            <th>Email</th>
                            <th>StartingDate</th>
                            <th>EndData</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects?.map((project: Project) => <>
                                <ShowTotalTask 
                                project={project} 
                                />
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalTasks;