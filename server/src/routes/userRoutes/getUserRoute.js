const db = require('../../database/database.js');
const dbqueries = require('../../database/dbqueries.js');

module.exports = (req, res, next) => {
  const userId = req.params.userId;
  console.log('userId: ' + userId);
  db.get(dbqueries.getUser(userId), (err, results) => {
    if(err) {
      console.log('query error: ' + err);
      return next(err);
    } else {
      res.locals = results;
      console.log('res.locals: ' + res.locals);
      return next();
    }
  })
}
