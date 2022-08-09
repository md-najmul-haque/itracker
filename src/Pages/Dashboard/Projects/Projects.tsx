import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowProjectData from './ShowProjectData';

const Projects = () => {
    const [projects, setProject] = useState([])
   
  
        useEffect(()=>{
            fetch('/project.json')
            .then(res => res.json())
            .then(data => setProject(data))
   
        },[])
     
    return (
        <div className='mt-20 mx-10'>
            <div>
                <div>
                    <div className='flex justify-end'>
                        <Link to='/dashboard/addProject'>
                            <div className='w-24 h-20 border-2 border-gray-400 rounded cursor-pointer'>
                                <h1 className='mt-4 ml-8 text-3xl'>+</h1>
                            </div>
                        </Link>
                    </div>
                    <p className='flex justify-end mr-1'>New Project</p>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-16 mt-5'>
               {
                projects?.map(project =><ShowProjectData 
                project={project}
                />)
               }
            </div>
        </div>
    );
};

export default Projects;