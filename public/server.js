"use strict";

var express = require('express');
var app = express();
var port =  process.env.PORT || '5002';

app.use('/map', express.static('public'))

app.listen(port, function () {
  console.log("info", 'Middleware server is listening on port ' + port + '!');
});
