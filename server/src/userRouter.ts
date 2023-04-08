const express = require('express');
import { Request, Response } from 'express';

const router = express.Router();


router.post('/create', require('./routes/userRoutes/createUserRoute.js'), (req:Request, res:Response) => {
  res.status(200).json('New user created successfully');
})

router.get('/all', require('./routes/userRoutes/allUsersRoute.js'), (req:Request, res:Response) => {
  res.status(200).json(res.locals);
});

router.get('/:userId', require('./routes/userRoutes/getUserRoute.js'), (req:Request, res:Response) => {
  res.status(200).json(res.locals);
})

module.exports = router;