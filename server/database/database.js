const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const dbqueries = require('./dbqueries.js');

const DBSOURCE = 'db.sqlite';

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if(err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database');
    db.run(`CREATE TABLE user (
      userId INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      username TEXT,
      password TEXT,
      CONSTRAINT email_unique UNIQUE (email)
      )`,
      (err) => {
        if(err) {
          //table already created
        } else {
          //table just created, creating some rows
          const insert = dbqueries.insertUser;
          //TODO hash the password I guess
          db.run(insert, ['admin', 'admin@example.com', 'adminUsername', 'adminPassword']);
          db.run(insert, ['testUser', 'testUserEmail@yes.gov', 'testUsername', 'testPassword']);
        }
      }
    );

    db.run(`CREATE TABLE task (
      taskId INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      title TEXT,
      description TEXT,
      category TEXT,
      reward TEXT,
      dueDate DATE,
      createdAt DATE,
      completed BOOLEAN,
      FOREIGN KEY(userId) REFERENCES user(userId)
      )`,
      (err) => {
        if(err) {
          // console.error(err);
        }
      }
    );
    // categoryId INTEGER,
    // FOREIGN KEY(categoryId) REFERENCES category(categoryId)

    db.run(`CREATE TABLE category (
      categoryId INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      attribute TEXT
      )`,
      (err) => {
        if(err) {
          // console.error(err);
        }
      }
    );
  }
});

module.exports = db;