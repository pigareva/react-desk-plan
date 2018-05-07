module.exports = function(app, db) {
  app.get('/employees/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    bd.collection('employees').findOne(details, (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(result);
      }
    })
  });

  app.post('/employees', (req, res) => {
    const employee = { department: req.body.department, name: req.body.name, email: req.body.email };
    db.collection('employees').insert(employee, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.put ('/employees/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const employee = { department: req.body.department, name: req.body.name, email: req.body.email };
    db.collection('notes').update(details, employee, (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(employee);
      }
    });
  });

  app.delete('/employees/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('employees').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(`Employee ${id} deleted`);
      }
    });
  });
};