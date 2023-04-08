const db = require("./database");

const dbqueries = {};

dbqueries.getAllUsers = `SELECT * FROM user`;
dbqueries.getAllTasks = `SELECT * FROM task WHERE completed = false`;

dbqueries.getAllCompleteTasks = `SELECT * FROM task WHERE completed = true`;
//////////
// USER //
dbqueries.getUser = (userId) => {
  return `SELECT * FROM user WHERE userId = ${userId}`;
};

dbqueries.insertUser = `INSERT INTO user (name, email, username, password) VALUES (?,?,?,?)`;

//////////
// TASK //
dbqueries.getUserTasks = (userId) => {
  return `SELECT * FROM task WHERE task.userId = ${userId}`;
};

dbqueries.insertTask = `INSERT INTO task (userId, title, description, category, reward, dueDate, createdAt, completed) VALUES (?,?,?,?,?,?,?,?)`; 

dbqueries.updateTask = `UPDATE task SET userId = ?, title = ?, description = ?, category = ?, reward = ?, dueDate = ?, createdAt = ?, completed = ? WHERE taskId = ?`;

//////////////
// CATEGORY //

dbqueries.getAllCategories = `SELECT * FROM category`;

dbqueries.insertCategory = `INSERT INTO category (title, attribute) VALUES (?, ?)`;

////////////


module.exports = dbqueries;