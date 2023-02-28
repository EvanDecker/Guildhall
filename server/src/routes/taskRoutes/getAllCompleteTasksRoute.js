const db = require('../../../database/database.js');
const dbqueries = require('../../../database/dbqueries.js');

module.exports = (req, res, next) => {
  db.all(dbqueries.getAllCompleteTasks, [], (err, results) => {
    if(err) {
      return next(err);
    } else {
      res.locals = results;
      // console.log(res.locals);
      return next();
    }
  })
}