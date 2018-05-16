const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8000;
const config = require('./db/db');
const EmployeesRouter = require('./routes/routes');

mongoose.connect(config.db).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err)
  });

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/employees', EmployeesRouter);

app.listen(PORT, function(){
  console.log('Server is running on Port: ', PORT);
});
