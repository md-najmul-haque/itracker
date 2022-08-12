import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AddProject from './AddProject';
import ShowProject from './ShowProject';

interface Project {
    projectName: string,
    projectDescription: string,
    email: string,
    startingDate: string,
    endData: string
}

const Projects = () => {
    const [modal, setModal] = useState(false)

    const { data: projects, isLoading, error, refetch } = useQuery(['projects'], () =>
        fetch('http://localhost:5000/getProject')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    refetch()

    return (
        <div className='mt-20 mx-10'>
            <div className='flex justify-between'>
                <h3 className='font-bold text-2xl text-primary'>New Project</h3>
                <label htmlFor="add-project" onClick={() => setModal(true)} className='btn bg-accent hover:bg-accent-focus text-white'>+ Create Projects</label>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-16 mt-5'>
                {
                    projects?.map((project: Project) => <ShowProject
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