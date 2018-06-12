/* eslint-disable no-param-reassign,no-shadow,consistent-return,no-undef,array-callback-return */

const express = require('express');

const EmployeesRouter = express.Router();
const Employees = require('../models/employees');

EmployeesRouter.route('/create').post((req, res) => {
  const employees = new Employees(req.body);
  employees.save()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.status(400).send(`unable to save to database: ${err}`);
    });
});

EmployeesRouter.route('/').get((req, res) => {
  Employees.find((err, employee) => {
    if (err) {
      console.log(err);
    } else {
      res.json(employee);
    }
  });
});

EmployeesRouter.route('/get/:id').get((req, res) => {
  const { id } = req.params;
  Employees.findById(id, (err, employee) => {
    res.json(employee);
  });
});

EmployeesRouter.route('/update/:id').post((req, res) => {
  const { id } = req.params;

  Employees.findById(id, (err, employee) => {
    if (!employee) { return next(new Error('Could not load Document')); }

    employee.name = req.body.name;
    employee.department = req.body.department;
    employee.email = req.body.email;
    employee.photo = req.body.photo;

    employee.save().then((employee) => {
      res.json(employee);
    })
      .catch((err) => {
        res.status(400).send(`unable to update the database: ${err}`);
      });
  });
});

EmployeesRouter.route('/delete/:id').get((req, res) => {
  const { id } = req.params;
  Employees.findByIdAndRemove(id, (err) => {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = EmployeesRouter;
