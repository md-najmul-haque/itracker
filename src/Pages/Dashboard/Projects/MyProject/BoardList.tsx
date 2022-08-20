import React from 'react';

type BoardListProps = {
    title: string,
}

const BoardList = ({ title }: BoardListProps) => {
    return (
        <div className='bg-secondary max-w-xs'>
            <h3>{title}</h3>
        </div>
    );
};

export default BoardList;