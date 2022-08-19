import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import DashboardSideBar from '../DashboardSideBar';
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

            <div className="w-full sm:px-6">
                <div className="md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-accent">New Project</p>
                        <div>
                            <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start bg-accent hover:bg-accent-focus focus:outline-none rounded">
                                <label htmlFor="add-project" onClick={() => setModal(true)} className="text-sm px-6 py-3 font-medium leading-none text-white">+ Create Projects </label>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-16 mt-5 px-10'>
                {
                    projects?.map((project: Project) => <>
                        <ShowProject project={project} />
                    </>)
                }
            </div>

            <div>
                {
                    modal && <AddProject setModal={setModal} />
                }
            </div>
        </div>
    );
};

export default Projects;