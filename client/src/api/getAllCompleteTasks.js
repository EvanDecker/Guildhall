const API_URL = 'http://localhost:8080'

//TODO update to only get user's tasks by passing in userId to the route (as long as authenticated (handled in express probs))
export default () => {
  return fetch(`${API_URL}/task/all/complete`)
    .then(response => response.json());
}