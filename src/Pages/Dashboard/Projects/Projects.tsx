import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowProjectData from './ShowProjectData';

const Projects = () => {
    const [projects, setProject] = useState([])


    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setProject(data))

    }, [])

    return (
        <div className='mt-20 mx-10'>

            <div className='flex justify-between'>
                <h3 className='font-bold text-2xl text-primary'>New Project</h3>
                <div className='flex justify-end'>
                    <Link to='/dashboard/addProject' className='btn bg-accent hover:bg-accent-focus text-white'>+ Create Projects</Link>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-16 mt-5'>
                {
                    projects?.map(project => <ShowProjectData
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default Projects;