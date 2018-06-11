const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./db/db');
const EmployeesRouter = require('./routes/routes');

const app = express();
const PORT = 8000;

mongoose.connect(config.db).then(
  () => { console.log('Database is connected'); },
  (err) => {
    console.log(`Can not connect to the database${err}`);
  },
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/employees', EmployeesRouter);

app.listen(PORT, () => {
  console.log('Server is running on Port: ', PORT);
});
