import { useEffect, useState } from 'react';
import AddProject from './AddProject';
import ShowProjectData from './ShowProjectData';

const Projects = () => {
    const [projects, setProject] = useState([])
    const [modal, setModal] = useState(false)


    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setProject(data))

    }, [])

    return (
        <div className='mt-20 mx-10'>
            <div className='flex justify-between'>
                <h3 className='font-bold text-2xl text-primary'>New Project</h3>
                <label htmlFor="add-project" onClick={() => setModal(true)} className='btn bg-accent hover:bg-accent-focus text-white'>+ Create Projects</label>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-16 mt-5'>
                {
                    projects?.map(project => <ShowProjectData
                        project={project}
                    />)
                }
            </div>

            <div>
                {
                    modal && <AddProject />
                }
            </div>
        </div>
    );
};

export default Projects;