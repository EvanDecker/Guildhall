const express = require('express');
const cors = require('cors');
const router = require('./router.js');
// const db = import('./database/database.js');
// const dbqueries = import('./database/dbqueries.js');

const app = express();

app.use(cors());

app.use(express.json());

// app.use((req, res, next) => {
//   console.log('initial entries on req.body!!:' + Object.entries(req.body));
//   return next();
// })

app.use(router);







app.listen(8080);

export = {};