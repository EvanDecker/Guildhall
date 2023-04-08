const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn.js');
const taskRouter = require('./taskRouter.js');
const userRouter = require('./userRouter.js');
const categoryRouter = require('./categoryRouter.js');
const router = express.Router();


router.post('/login', require('./routes/loginRoute.js'));

router.use('/task', taskRouter);

router.use('/user', userRouter);

router.use('/category', categoryRouter);

router.get('/tasklist', isLoggedIn, require('./routes/tasklistRoute.js'));




module.exports = router;