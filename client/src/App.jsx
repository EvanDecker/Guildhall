// import { useState, useEffect } from 'react'
import './App.css'
import readTasksRequest from './api/readTasksRequest';
import getAllCompleteTasks from './api/getAllCompleteTasks.js';
import { useState, useEffect } from 'react';
import Task from './components/Task/Task.jsx';
import CreateTaskContainer from './components/Task/CreateTaskContainer.jsx';
import Archive from './components/Task/Archive';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const [changed, setChanged] = useState([]);


  useEffect(() => {
    readTasksRequest()
      .then(allTasks => setTasks(allTasks))
      .then(() => {
        // console.log(tasks)
        if(changed) {
          // console.log('resetting changed to false');
          setChanged(false);
        }
      });
      getAllCompleteTasks()
        .then(allCompleteTasks => setCompleteTasks(allCompleteTasks))
        .then(() => {
          // console.log(completeTasks);
          if(changed) {
            setChanged(false);
          }
        });
  }, [changed]);

  return (
    <div className="App">
      <h1>Guildhall</h1>
      <CreateTaskContainer setChanged={setChanged}/>
      <h2>Current Tasks</h2>
      {tasks.map((task) => (
        <Task taskId={task.taskId} userId={task.userId} title={task.title} description={task.description} category={task.category} reward={task.reward} dueDate={task.dueDate} createdAt={task.createdAt} completed={task.completed} key={task.taskId} setChanged={setChanged}/>
      ))}
      
      <div className="archive">
        <button id='archiveButton' onClick={() => {
          const archive = document.getElementById('archive');
          if(archive.style.visibility === 'visible') {
            archive.style.visibility = 'hidden';
          } else {
            archive.style.visibility = 'visible';
          }
        }}>Archive</button>
        <div id='archive'>
          {completeTasks.map((task) => (
            <Task taskId={task.taskId} userId={task.userId} title={task.title} description={task.description} category={task.category} reward={task.reward} dueDate={task.dueDate} createdAt={task.createdAt} completed={task.completed} key={task.taskId} setChanged={setChanged}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
