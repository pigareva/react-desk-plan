const express = require('express');
const EmployeesRouter = express.Router();

const Employees = require('../models/employees');

EmployeesRouter.route('/create').post(function (req, res) {
  const employees = new Employees(req.body);
  employees.save()
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

EmployeesRouter.route('/').get(function (req, res) {
  Employees.find((err, employee) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(employee);
    }
  });
});

EmployeesRouter.route('/get/:id').get(function (req, res) {
  const id = req.params.id;
  Employees.findById(id, (err, employee) => {
    res.json(employee);
  });
});

EmployeesRouter.route('/update/:id').post(function (req, res) {
  Employees.findById(req.params.id, (err, employee) => {
    if (!employee)
      return next(new Error('Could not load Document'));
    else {
      employee.name = req.body.name;
      employee.department = req.body.department;
      employee.email = `${req.body.name}@pigareva.cc`;
      employee.photo = req.body.photo;

      employee.save().then(employee => {
        res.json(employee);
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

EmployeesRouter.route('/delete/:id').get(function (req, res) {
  Employees.findByIdAndRemove({_id: req.params.id}, (err, employee) => {
      if(err) res.json(err);
      else res.json('Successfully removed');
    });
});

module.exports = EmployeesRouter;