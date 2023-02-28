import React from 'react';
import './Task.css';
import updateTaskRequest from '../../api/updateTaskRequest';
import Category from '../Category/Category';

const Task = (task) => {

  return (
    <div className='task'>
      <div className='titleDiv'>
        <p>{task.title} - {task.description}</p>
        <p className='dueDate'>{task.dueDate ? task.dueDate.slice(5) : ''}</p>
      </div>

      <div className='checkboxDiv'>
        <p className='category'>{task.category}</p>
        <input type="checkbox" 
        onChange={() => {
          updateTaskRequest({ ...task, completed: !task.completed });
          task.setChanged(true);
        }}
        checked={task.completed}
        />
        {/* <Category /> */}
      </div>

    </div>
  )
}

export default Task;