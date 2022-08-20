import React from 'react';
import BoardList from './BoardList';

const Board = () => {
    return (
        <div>
            <h2>This is Board</h2>
            <BoardList title={'To Do'} />
        </div>
    );
};

export default Board;