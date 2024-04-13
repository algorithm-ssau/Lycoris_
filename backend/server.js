
// include 
const express = require('express');
const { connectToDb, getDb } = require('./db');

// select port
const PORT = 3000;

// start of server
const app = express();

// connect db
let db;

// console output
connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});
