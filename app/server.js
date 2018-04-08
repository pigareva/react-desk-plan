"use strict";

const express = require('express');
const app = express();
const port =  process.env.PORT || '5002';

app.use('/map', express.static('public'));

app.listen(port, function () {
  console.log("info", 'Middleware server is listening on port ' + port + '!');
});
