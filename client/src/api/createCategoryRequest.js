const API_URL = 'http://localhost:8080'

export default (newCategory) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCategory),
  }
  return fetch(`${API_URL}/task/create`, options);
}