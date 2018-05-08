const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./db/db');
const cors           = require('cors');
const app            = express();
app.use(cors(), bodyParser.urlencoded({ extended: true }));

const port = 8000;
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require('./routes')(app, database.db('employees'));
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});