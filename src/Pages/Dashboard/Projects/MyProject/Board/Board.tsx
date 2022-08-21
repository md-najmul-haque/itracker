import { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import AddTask from './AddTask';
import AddTaskInput from './AddTaskInput';
import TaskCard from './TaskCard';
import Title from './Title';


const Board = () => {

    // const [lists, setLists] = useState([])

    // const onDragEnd = (result: DropResult) => {
    //     const { source, destination } = result
    //     if (!destination) return
    // }

    // fetch('/lists.json')
    //     .then(res => res.json())
    //     .then(data => setLists(data))

    return (
        <div className="max-w-xs ml-5 border-4 border-secondary bg-secondary p-2">
            {/* <DragDropContext onDragEnd={onDragEnd}>
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
            </DragDropContext> */}
            <Title />
            <TaskCard />
            <TaskCard />
            <TaskCard />

            <AddTask />

        </div>
    );
};


export default Board;