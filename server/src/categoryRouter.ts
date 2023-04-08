const express = require('express');
import { Request, Response } from 'express';

const router = express.Router();
const getAllCategories = require('./routes/categoryRoutes/getAllCategoriesRoute.js');
const createCategory = require('./routes/categoryRoutes/createCategoryRoute.js');


router.get('/', getAllCategories, (req:Request, res:Response) => {
  res.status(200).json(res.locals);
});

router.post('/create', createCategory, (req:Request, res:Response) => {
  res.status(200).json(res.locals);
})

module.exports = router;