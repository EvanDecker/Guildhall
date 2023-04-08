const express = require('express');
import { Request, Response } from 'express';

const router = express.Router();


router.get('/user/:userId', require('./routes/taskRoutes/getUserTasks'), (req:Request, res:Response) => {
  res.status(200).json(res.locals);
})

router.post('/create', require('./routes/taskRoutes/createTaskRoute.js'), (req:Request, res:Response) => {
  res.status(200).json(res.locals);
})

router.put('/:taskId/update', require('./routes/taskRoutes/updateTaskRoute.js'), (req:Request, res:Response) => {
  res.status(200).json(res.locals);
})

router.delete('/:taskId/delete', require('./routes/taskRoutes/deleteTaskRoute.js'), (req:Request, res:Response) => {
  res.status(200).json(res.locals);
})

router.get('/all/complete', require('./routes/taskRoutes/getAllCompleteTasksRoute.js'), (req:Request, res:Response) => {
  res.status(200).json(res.locals);
})

router.get('/all', require('./routes/taskRoutes/getAllTasksRoute.js'), (req:Request, res:Response) => {
  res.status(200).json(res.locals);
})


module.exports = router;

export = {};