import './CreateTask.css';

function CreateTask(props) {

  return (
    <div className="createTask">
      <div className='section'>
        <label htmlFor="title">Title: </label>
        <input type='text' id='title' name='title' value={props.title} onChange={(e) => {
          props.upstate(e.target.name, e.target.value);
        }}/>
      </div>

      <div className='section'>
        <label htmlFor="description">Description: </label>
        <input type='text' id='description' name='description' value={props.description} onChange={(e) => {
          props.upstate(e.target.name, e.target.value);
        }}/>
      </div>

      <div className='section'>
        <label htmlFor="category">Category: </label>
        <input type='text' id='category' name='category' value={props.category || ''} onChange={(e) => {
          props.upstate(e.target.name, e.target.value);
        }}/>
      </div>

      <div className='section'>
      <label htmlFor="reward">Reward: </label>
        <input type='text' id='reward' name='reward' value={props.reward} onChange={(e) => {
          props.upstate(e.target.name, e.target.value);
        }}/>
      </div>

        <div className='section'>
          <label htmlFor="dueDate">Due Date: </label>
          <input type='date' id='dueDate' name='dueDate' value={props.dueDate} onChange={(e) => {
          props.upstate(e.target.name, e.target.value);
          }}/>
        </div>

      <button type='button' id='createTaskButton' onClick={() => {
        props.assembleTask();
      }}>Create Task</button>

    </div>
  )
}
//TODO taskId, userId, createdAt and completed should all automatically be taken care of when creating the task itself

export default CreateTask;