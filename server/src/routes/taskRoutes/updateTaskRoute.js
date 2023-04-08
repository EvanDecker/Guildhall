const db = require('../../database/database.js');
const dbqueries = require('../../database/dbqueries.js');

module.exports = (req, res, next) => {
  const { userId, title, description, category, reward, dueDate, createdAt, completed, taskId } = req.body;
  const array = [ userId, title, description, category, reward, dueDate, createdAt, completed, taskId ];

  // console.log("updating task in update task route: " + array);

  db.run(dbqueries.updateTask, array, (err, results) => {
    if(err) {
      return next(err);
    } else {
      // console.log('task updated successfully');
      res.locals = 'task updated successfully';
      return next();
    }
  });
}