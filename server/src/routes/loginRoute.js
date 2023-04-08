const jwt = require('jsonwebtoken');
const db = require('../database/database.js');
const dbqueries = require('../database/dbqueries.js');

const password = 'hello';
const secret = '123'

module.exports = (req, res) => {
  if(req.body.password === password) {
    const token = jwt.sign({
      userId: 1
    }, secret);

    res.json({
      token,
    });
  } else {
    res.status(401).send('Wrong password lol');
  }
}

// find the user with the username provided
// check the password in req.body against password attached to user
// if success, send back jwt token
// if failed, call next on an error for wrong password