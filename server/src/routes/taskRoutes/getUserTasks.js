const db = require('../../../database/database.js');
const dbqueries = require('../../../database/dbqueries.js');

module.exports = (req, res, next) => {
  // grab the userId
  const userId = req.params.userId;
  // find all tasks with the matching userId
  db.all(dbqueries.getUserTasks(userId), (err, results) => {
    if(err) {
      return next(err);
    } else {
      res.locals = [ ...results ];
      console.log(res.locals);
      return next();
    }
  })
}
