const API_URL = 'http://localhost:8080'

export default (newTask) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask),
  }
  return fetch(`${API_URL}/task/create`, options);
}