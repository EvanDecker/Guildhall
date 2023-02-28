const express = require('express');
const cors = require('cors');
const router = require('./router.js');
const db = require('../database/database.js');
const dbqueries = require('../database/dbqueries.js');

const app = express();

app.use(cors());

app.use(express.json());

// app.use((req, res, next) => {
//   console.log('initial entries on req.body!!:' + Object.entries(req.body));
//   return next();
// })

app.use(router);







app.listen(8080);