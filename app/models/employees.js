/**
 * Created by Olga on 19/02/2017.
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  //schema structure will go here.
});

module.exports = mongoose.model('Employees', EmployeeSchema);
