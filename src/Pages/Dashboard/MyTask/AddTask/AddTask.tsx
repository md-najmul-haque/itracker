import React from 'react';
import './AddTask.css'
const AddTask = () => {
    return (
        <div className='task-container lg:w-[650px] md:w-[450px] w-[300px]'>
            <h1 className='login-title'>Add Task</h1>
            <form className="task-form">
                <div className='lg:grid lg:grid-cols-2 gap-5'>
                    <div>
                        <label form="TaskTitle">Task Name</label>
                        <input type="text" placeholder="Enter Task Title" />
                    </div>
                    <div>
                        <label form="Assignee">Assignee</label>
                        <select id="cars" name="cars" className='dropdown'>
                            <option value="volvo">a</option>
                            <option value="saab">b</option>
                            <option value="fiat">c</option>
                           
                        </select>
                    </div>
                    <div>
                        <label form="DueDate">Due date</label>
                        <input type="date" placeholder="Enter  Due date" />
                    </div>
                    <div>
                        <label form="Projects">Projects Name</label>
                        <input type="text" placeholder="Enter Projects Name" />
                    </div>
                    <div className='lg:first-letter:mt-2'>
                        <label form="Priority">Priority</label>
                        <select id="Priority" name="Priority" className='dropdown'>
                            <option className='' value="volvo">Low</option>
                            <option value="saab">Mediam</option>
                            <option value="fiat">High</option>
                        </select>
                    </div>
                    <div>
                        <label form="Description">Description</label>
                        <textarea typeof="text" placeholder="Enter Description" />
                    </div>
                </div>
                <button>ADD STUDENT</button>
            </form>
        </div>
    );
};

export default AddTask;