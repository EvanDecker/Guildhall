const express = require('express');
const router = express.Router();
const getAllCategories = require('./routes/categoryRoutes/getAllCategoriesRoute.js');
const createCategory = require('./routes/categoryRoutes/createCategoryRoute.js');

router.get('/', getAllCategories, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/create', createCategory, (req, res) => {
  res.status(200).json(res.locals);
})

module.exports = router;