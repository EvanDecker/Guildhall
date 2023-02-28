import config from './config.js';


export default (task) => {
const { taskId, userId, title, description, category, reward, dueDate, createdAt, completed } = task;
const updatedTask = { taskId, userId, title, description, category, reward, dueDate, createdAt, completed };

const options = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedTask),
}
  // console.log('req body before being sent out!: ' + options.body);

  return fetch(`${config.API_URL}/task/${taskId}/update`, options)
    .then((response) => {
      // console.log('update task request response:');
      // console.log(response);
      if(response) {
        return response.json()
      }
    })
    .catch((err) => console.log(err));
}