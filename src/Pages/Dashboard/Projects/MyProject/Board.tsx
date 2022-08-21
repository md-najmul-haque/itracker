import { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import TaskList from './TaskList';
import { List } from './list.type'

const Board = () => {

    const [lists, setLists] = useState([])

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result
        if (!destination) return
    }

    fetch('/lists.json')
        .then(res => res.json())
        .then(data => setLists(data))

    return (
        <div className="">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="app" type='list' direction='horizontal'>
                    {(provided) => (
                        <div className="wrapper" ref={provided.innerRef}>
                            {lists.map((list: List) => {
                                return (
                                    <TaskList key={list.id} list={list} />
                                )
                            })}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};


export default Board;