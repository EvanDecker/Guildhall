const db = require('../../database/database.js');
const dbqueries = require('../../database/dbqueries.js');

module.exports = (req, res, next) => {
  // console.log('req.body in createTaskRoute: ' + req.body);
  const { title, attribute } = req.body;
  const newCategory = [ title, attribute ];

  db.run(dbqueries.insertCategory, newCategory, (err, result) => {
    if(err){
      next(err);
    } else {
      res.locals = result;
    }
  })
  return next();
}