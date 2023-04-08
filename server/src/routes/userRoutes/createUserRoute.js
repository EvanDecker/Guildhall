const db = require('../../database/database.js');
const dbqueries = require('../../database/dbqueries.js');

module.exports = (req, res, next) => {
  console.log(req.body);
  const { name, email, username, password } = req.body;
  const newUser = [ name, email, username, password ];

  db.run(dbqueries.insertUser, newUser, (err, results) => {
    if(err) {
      return next(err);
    } else {
      res.locals = results;
      return next();
    }
  });
}