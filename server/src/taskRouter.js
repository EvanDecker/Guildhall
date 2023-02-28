const express = require('express');

const router = express.Router();


router.get('/user/:userId', require('./routes/taskRoutes/getUserTasks'), (req, res) => {
  res.status(200).json(res.locals);
})

router.post('/create', require('./routes/taskRoutes/createTaskRoute.js'), (req, res) => {
  res.status(200).json(res.locals);
})

router.put('/:taskId/update', require('./routes/taskRoutes/updateTaskRoute.js'), (req, res) => {
  res.status(200).json(res.locals);
})

router.delete('/:taskId/delete', require('./routes/taskRoutes/deleteTaskRoute.js'), (req, res) => {
  res.status(200).json(res.locals);
})

router.get('/all/complete', require('./routes/taskRoutes/getAllCompleteTasksRoute.js'), (req, res) => {
  res.status(200).json(res.locals);
})

router.get('/all', require('./routes/taskRoutes/getAllTasksRoute.js'), (req, res) => {
  res.status(200).json(res.locals);
})


module.exports = router;