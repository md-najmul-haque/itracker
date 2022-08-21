import TaskCard from './TaskCard';
import { TaskListPros } from './list.type'


const TaskList = ({ list }: TaskListPros) => {

    const { title, cards } = list

    return (
        <div className='max-w-xs ml-5 border-4 border-secondary'>
            <h3 className='bg-secondary'>{title}</h3>

        </div>
    );
};

export default TaskList;