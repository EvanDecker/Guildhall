import React from 'react';
import './CreateTaskContainer.css';
import CreateTask from './CreateTask.jsx';
import createTaskRequest from '../../api/createTaskRequest';

class CreateTaskContainer extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.month = date.getUTCMonth() + 1;
    this.day = date.getUTCDate();
    this.year = date.getUTCFullYear();
    /////
    this.state = {
      //TODO: get userId from whatever auth shit we have going on
      userId: 1,
      title: '',
      description: '',
      category: '',
      reward: '',
      dueDate: '',
      createdAt: `${this.month}/${this.day}/${this.year}`,
      completed: false
    }
    /////
    this.upstate = this.upstate.bind(this);
    this.assembleTask = this.assembleTask.bind(this);
  }

  upstate(key, val) {
    this.setState({ [key]: val });
  }

  assembleTask() {
    const defaultState = {
      //TODO: get userId from whatever auth shit we have going on
      userId: 1,
      title: '',
      description: '',
      category: '',
      reward: '',
      dueDate: '',
      createdAt: `${this.month}/${this.day}/${this.year}`,
      completed: false
    }
    const newTask = { ...this.state };

    createTaskRequest(newTask);
    
    this.setState({ ...defaultState });
    this.props.setChanged(true);
    // console.log('setChanged should have went???');
  }

  render() {
    return (
      <div className='createTaskContainer'>
        <CreateTask userId={this.state.userId} title={this.state.title} description={this.state.description} category={this.state.category} reward={this.state.reward} dueDate={this.state.dueDate} createdAt={this.state.createdAt} completed={this.state.completed} upstate={this.upstate} assembleTask={this.assembleTask}/>
      </div>
    )
  }

}

export default CreateTaskContainer;