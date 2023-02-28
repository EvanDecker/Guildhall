const db = require('../../../database/database.js');
const dbqueries = require('../../../database/dbqueries.js');

module.exports = (req, res, next) => {
  // console.log('req.body in createTaskRoute: ' + req.body);
  const { userId, title, description, category, reward, dueDate, createdAt, completed } = req.body;
  const newTask = [ userId, title, description, category, reward, dueDate, createdAt, completed ]

  db.run(dbqueries.insertTask, newTask, (err, result) => {
    if(err){
      next(err);
    } else {
      res.locals = result;
    }
  })
  return next();
}