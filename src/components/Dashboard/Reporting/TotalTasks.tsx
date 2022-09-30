import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ShowTotalTask from './ShowTotalTask';

interface Project {
    projectName: string,
    projectDescription: string,
    email: string,
    startingDate: string,
    endData: string
}

const TotalTasks = () => {
    const [user, loading] = useAuthState(auth)
    const [projects, setProjects] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`https://itracker-server.vercel.app/totalProject?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setProjects(data)
                });
        }
    }, [user])

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