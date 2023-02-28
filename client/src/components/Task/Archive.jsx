import Task from "./Task";

const Archive = (props) => {
  console.log(props);
  console.log(props.tasks);
  return (
    <div className="archive">
      <h2>Archive</h2>
        {props.tasks.map((task) => (
          <Task taskId={task.taskId} userId={task.userId} title={task.title} description={task.description} category={task.category} reward={task.reward} dueDate={task.dueDate} createdAt={task.createdAt} completed={task.completed} key={task.taskId} setChanged={task.setChanged}/>
      ))}
    </div>
  )
}

export default Archive;