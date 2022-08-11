import React from 'react';

interface data{
    project:any
}
const ShowProjectData:React.FC<data> = ({ project}) => {
    console.log(project)
    const{ProjectName,startingDate,endDatae}=project;
    return (
        <div className='bg-white rounded-lg text-center shadow-2xl py-5'>
            <p className='text-3xl font-bold'>{ProjectName}</p>
            <p className='text-lg mt-3'>starting Date:{startingDate}</p>
            <p className='text-lg'>End Datae: {endDatae}</p>
        </div>
    );
};

export default ShowProjectData;